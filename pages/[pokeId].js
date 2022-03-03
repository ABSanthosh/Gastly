import Head from "next/head";
import moduleStyle from "../styles/Home.module.scss";
import { getJapaneseName, getPoke } from "../Operations/getPoke";
import { CapitalizeChar } from "../Utils/Capitalize";
import { useEffect, useState } from "react";
import Backdrop from "../Components/Backdrop/Backdrop";
import DetailsBox from "../Components/DetailsBox/DetailsBox";
import PokeSprite from "../Components/PokeSprite/PokeSprite";
import { InitialConditions } from "../Utils/SpriteConditions";
import SpriteVariation from "../Components/SpriteVariation/SpriteVariation";
import Box from "../Components/Box/Box";
import { SpriteVariationControlPanel } from "../Utils/SpriteVariationCP";
import Type from "../Components/Types/Type";

export default function Home({ props }) {
  const { data: pokeData, pokeId } = props;
  const [spritUrl, setSpritUrl] = useState(null);
  const [iconFocus, setIconFocus] = useState([
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus",
  ]);
  const [backdropColor, setBackdropColor] = useState("white");

  useEffect(() => {
    InitialConditions(setSpritUrl, setIconFocus, pokeData);
  }, [pokeData, pokeId]);

  useEffect(() => {
    SpriteVariationControlPanel(iconFocus, setSpritUrl, pokeData);
  }, [iconFocus]);

  return (
    <>
      <Head>
        <title>
          Gastly | {CapitalizeChar(pokeData.Name)} {pokeId}
        </title>
      </Head>
      <div className={`${moduleStyle.MainContainer} LightMode`}>
        <div className={moduleStyle.MainContainer__ContentWrapper}>
          <div className={moduleStyle.MainContainer__japaneseName}>
            <p>{pokeData.japaneseName}</p>
          </div>

          <div className={moduleStyle.MainContainer__backdrop}>
            <Backdrop fill={backdropColor} isMobile={false} />
          </div>
          <div className={moduleStyle.MainContainer__search}>
            <div className={moduleStyle.MainContainer__search__name}>
              {CapitalizeChar(pokeData.Name)}
            </div>
            <div className={moduleStyle.MainContainer__search__input}></div>
          </div>
          <div className={moduleStyle.MainContainer__pokeImage}>
            <a
              className={moduleStyle.MainContainer__pokeImage__leftChevron}
              onClick={() => {}}
              href={
                parseInt(pokeId) - 1 > 0 ? `/${parseInt(pokeId) - 1}` : `/898`
              }
            />
            <PokeSprite url={spritUrl} setBackdropColor={setBackdropColor} />
            <a
              className={moduleStyle.MainContainer__pokeImage__rightChevron}
              onClick={() => {}}
              href={
                parseInt(pokeId) + 1 < 899 ? `/${parseInt(pokeId) + 1}` : `/1`
              }
            />
          </div>

          <div className={moduleStyle.MainContainer__details}>
            <DetailsBox>
              <div className={moduleStyle.MainContainer__detailsContentBox}>
                <Box>
                  <p>{pokeData.Description}</p>
                </Box>
              </div>
              <div className={moduleStyle.MainContainer__detailsContentBox}>
                <Box
                  style={{
                    "--boxWidth": "150px",
                    "--boxHeight": "80px",
                  }}
                >
                  {pokeData.Types.map((type, index) => (
                    <Type key={index} type={type} />
                  ))}
                </Box>
                <Box
                  style={{
                    "--boxHeight": "80px",
                    flex: "1",
                  }}
                >
                  <SpriteVariation
                    iconFocus={iconFocus}
                    setIconFocus={setIconFocus}
                    id={pokeId}
                    NewSprites={pokeData}
                  />
                </Box>
              </div>
            </DetailsBox>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { pokeId } = query;
  const data = await getPoke(pokeId);
  const japaneseName = await getJapaneseName(pokeId);
  return { props: { pokeId, data: { ...data, japaneseName } } };
};
