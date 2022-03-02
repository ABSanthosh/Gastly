import Head from "next/head";
import moduleStyle from "../styles/Home.module.scss";
import { getPoke } from "../Operations/getPoke";
import { CapitalizeChar } from "../Utils/Capitalize";
import { useEffect, useState } from "react";
import Backdrop from "../Components/Backdrop/Backdrop";
import DetailsBox from "../Components/DetailsBox/DetailsBox";
import PokeSprite from "../Components/PokeSprite/PokeSprite";
import { InitialConditions } from "../Utils/SpriteConditions";

export default function Home({ props }) {
  const { data: pokeData, pokeId } = props;
  const [spritUrl, setSpritUrl] = useState(null);
  const [iconFocus, setIconFocus] = useState([
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus",
  ]);

  useEffect(() => {
    InitialConditions(pokeId, setSpritUrl, setIconFocus, iconFocus, pokeData);
  }, [pokeData]);
  console.log(iconFocus);

  return (
    <>
      <Head>
        <title>
          Gastly | {CapitalizeChar(pokeData.Name)} {pokeId}
        </title>
      </Head>
      <div className={`${moduleStyle.MainContainer} LightMode`}>
        <div className={moduleStyle.MainContainer__ContentWrapper}>
          <div className={moduleStyle.MainContainer__japaneseName}></div>

          <div className={moduleStyle.MainContainer__backdrop}>
            <Backdrop fill={"lightgreen"} isMobile={false} />
          </div>
          <div className={moduleStyle.MainContainer__search}></div>
          <div className={moduleStyle.MainContainer__pokeImage}>
            <PokeSprite url={spritUrl} />
          </div>
          <div className={moduleStyle.MainContainer__details}>
            {/* <SpriteVariation
              iconFocus={iconFocus}
              seticonFocus={seticonFocus}
              id={id}
            /> */}
            <DetailsBox>
              {Object.keys(pokeData).map((item, index) => (
                <p key={index}>{item}</p>
              ))}
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
  return { props: { pokeId, data } };
};
