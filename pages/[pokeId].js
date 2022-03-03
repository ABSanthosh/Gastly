import Head from "next/head";
import moduleStyle from "../styles/Home.module.scss";
import { getGeneration, getJapaneseName, getPoke } from "../Operations/getPoke";
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
import Cries from "../Components/Cries/Cries";
import { forifier } from "../Utils/forifier";
import FourOFour from "../Assets/Images/404.png";
import EvalChainItem from "../Components/EvalChainItem/EvalChainItem";

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
              <Box
                style={{
                  justifyContent: "center",
                }}
              >
                Stats(Coming soon)
              </Box>
              <div className={moduleStyle.MainContainer__detailsContentBox}>
                <Box
                  style={{
                    "--boxWidth": "185px",
                    "--boxHeight": "200px",
                    flexDirection: "column",
                    justifyContent:
                      pokeData.Ability.length === 3
                        ? "space-between"
                        : "flex-start",
                    gap: pokeData.Ability.length === 3 ? "0px" : "13px",
                  }}
                >
                  <h2
                    className={
                      moduleStyle[
                        "MainContainer__detailsContentBox--abilitiesTitle"
                      ]
                    }
                  >
                    Abilities
                  </h2>
                  {pokeData.Ability.map((ability, index) => (
                    <div
                      className={
                        moduleStyle[
                          "MainContainer__detailsContentBox--abilitiesItem"
                        ]
                      }
                      key={index}
                    >
                      {ability}
                    </div>
                  ))}
                </Box>
                <div
                  className={moduleStyle.MainContainer__detailsContentBox}
                  style={{
                    width: "unset",
                    flex: "1",
                    height: "200px",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className={moduleStyle.MainContainer__detailsContentBox}
                    style={{
                      width: "unset",
                      flex: "1",
                      height: "100%",
                    }}
                  >
                    <Box
                      style={{
                        "--boxWidth": "90px",
                        "--boxHeight": "90px",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <Cries pokeId={forifier(pokeId)} />
                    </Box>
                    <Box
                      style={{
                        "--boxWidth": "90px",
                        "--boxHeight": "90px",
                        justifyContent: "center",
                      }}
                      // position="relative"
                      tabIndex="0"
                      data-tooltip="Footprint"
                      className={moduleStyle.Feet}
                    >
                      <img
                        src={`https://absanthosh.github.io/PokedexData/PokemonFootprints/${forifier(
                          pokeId
                        )}.png`}
                        style={{
                          height: "80%",
                        }}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = FourOFour.src;
                        }}
                      />
                    </Box>
                  </div>
                  <Box></Box>
                </div>
              </div>
              <div className={moduleStyle.MainContainer__detailsContentBox}>
                <Box
                  style={{
                    flexDirection: "column",
                    "--boxHeight": "auto",
                    minHeight: "130px",
                    gap: "10px",
                  }}
                >
                  <h2
                    className={
                      moduleStyle[
                        "MainContainer__detailsContentBox--EvoChainTitle"
                      ]
                    }
                  >
                    Evolution Chain
                  </h2>
                  <div
                    className={
                      moduleStyle[
                        "MainContainer__detailsContentBox--EvoChainItems"
                      ]
                    }
                  >
                    {Object.keys(pokeData.EvolutionChainData).map(
                      (evo, index) => (
                        <EvalChainItem
                          key={index}
                          pokeId={pokeData.EvolutionChainData[evo][0]}
                          NewSprites={pokeData.EvolutionChainData[evo][1]}
                        />
                      )
                    )}
                  </div>
                </Box>
              </div>
              <div className={moduleStyle.MainContainer__detailsContentBox}>
                <div
                  className={moduleStyle.MainContainer__detailsContentBox}
                  style={{
                    width: "140px",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    style={{
                      "--boxWidth": "140px",
                      "--boxHeight": "140px",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      alt="Egg Sprite"
                      style={{ height: "65%" }}
                      src={`https://absanthosh.github.io/PokedexData/PokemonEggSprites/${forifier(
                        pokeId
                      )}.png`}
                    ></img>
                  </Box>
                  <Box
                    style={{
                      "--boxWidth": "140px",
                      "--boxHeight": "140px",
                      flexDirection: "column",
                    }}
                  >
                    <h2
                      className={
                        moduleStyle[
                          "MainContainer__detailsContentBox--EvoChainTitle"
                        ]
                      }
                    >
                      Generation
                    </h2>
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "var(--BoxComponentParaColor)",
                          height: "100%",
                          fontSize: "3.5rem",
                        }}
                      >
                        {pokeData.generation}
                      </p>
                    </div>
                  </Box>
                </div>
                <div
                  className={moduleStyle.MainContainer__detailsContentBox}
                  style={{
                    height: "100%",
                  }}
                >
                  <Box
                    style={{
                      "--boxWidth": "100%",
                      "--boxHeight": "100%",
                      flexDirection: "column",
                    }}
                  >
                    <h2
                      className={
                        moduleStyle[
                          "MainContainer__detailsContentBox--EvoChainTitle"
                        ]
                      }
                    >
                      Misc. Gallery
                    </h2>
                  </Box>
                </div>
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
  // TODO: Update json to include Poke id in object
  const EvolutionChainData = await Promise.all(
    data.EvolutionChain.map(async (evo) => [evo, await getPoke(parseInt(evo))])
  );
  const japaneseName = await getJapaneseName(pokeId);
  const generation = await getGeneration(pokeId);
  return {
    props: {
      pokeId,
      data: { ...data, japaneseName, EvolutionChainData, generation },
    },
  };
};
