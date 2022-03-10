import Head from "next/head";
import moduleStyle from "../styles/Home.module.scss";
import {
  getDimensions,
  getGenderRatio,
  getGeneration,
  getJapaneseName,
  getPoke,
  getSuggestionList,
} from "../Operations/getPoke";
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
import useEmblaCarousel from "embla-carousel-react";
import Tabs from "../Components/Tabs/Tabs";
import BaseStats from "../Components/BaseStats/BaseStats";
import AutoCompleteSearch from "../Components/AutoCompleteSearch/AutoCompleteSearch";
import LoadingBoxes from "../Components/LoadingBoxes/LadingBoxes";

export default function Home({ props }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { data: pokeData, pokeId } = props;

  const [spritUrl, setSpritUrl] = useState(null);
  const [iconFocus, setIconFocus] = useState([
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus",
  ]);
  const [backdropColor, setBackdropColor] = useState("white");
  const [galleryPosition, setGalleryPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCover, setIsCover] = useState(true);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", () => {
        if (galleryPosition != emblaApi.selectedScrollSnap()) {
          setGalleryPosition(emblaApi.selectedScrollSnap());
        }
        if (!emblaApi.canScrollPrev()) {
          setGalleryPosition(0);
        }
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    InitialConditions(setSpritUrl, setIconFocus, pokeData);
  }, [pokeData, pokeId]);

  useEffect(() => {
    SpriteVariationControlPanel(iconFocus, setSpritUrl, pokeData);
  }, [iconFocus]);

  return (
    <>

      <Head>
        <meta
          name="google-site-verification"
          content="Sj05G57ypBRld01GRCgJAq47Z7WByCH7hnIEub7Nzos"
        />
        <title>
          Gastly | {CapitalizeChar(pokeData.Name)} {pokeId}
        </title>
        <meta name="description" content={pokeData.Description} />

        <meta
          property="og:url"
          content={`https://gastly-v4.netlify.app/${pokeId}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Gastly | ${CapitalizeChar(pokeData.Name)} ${pokeId}`}
        />
        <meta property="og:description" content={pokeData.Description} />
        <meta property="og:image" content={spritUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gastly-v4.netlify.app" />
        <meta
          property="twitter:url"
          content={`https://gastly-v4.netlify.app/${pokeId}`}
        />
        <meta
          name="twitter:title"
          content={`Gastly | ${CapitalizeChar(pokeData.Name)} ${pokeId}`}
        />
        <meta name="twitter:description" content={pokeData.Description} />
        <meta name="twitter:image" content={spritUrl} />
      </Head>
      <div className={`${moduleStyle.MainContainer} LightMode`}>
        <div className={moduleStyle.MainContainer__ContentWrapper}>
          {isLoading && (
            <div id="loading-dock">
              <LoadingBoxes />
            </div>
          )}
          {isCover && (
            <div id="loading-dock">
              <div className="loader"></div>
            </div>
          )}
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
            <div className={moduleStyle.MainContainer__search__input}>
              <AutoCompleteSearch suggestion={pokeData.suggestion} />
            </div>
          </div>
          <div className={moduleStyle.MainContainer__pokeImage}>
            <a
              className={moduleStyle.MainContainer__pokeImage__leftChevron}
              onClick={() => {
                setIsLoading(true);
              }}
              href={
                parseInt(pokeId) - 1 > 0 ? `/${parseInt(pokeId) - 1}` : `/898`
              }
            />
            <PokeSprite
              url={spritUrl}
              setIsCover={setIsCover}
              setBackdropColor={setBackdropColor}
            />
            <a
              className={moduleStyle.MainContainer__pokeImage__rightChevron}
              onClick={() => {
                setIsLoading(true);
              }}
              href={
                parseInt(pokeId) + 1 < 899 ? `/${parseInt(pokeId) + 1}` : `/1`
              }
            />
          </div>

          <div className={moduleStyle.MainContainer__details}>
            <DetailsBox>
              <div className={moduleStyle.MainContainer__detailsContentBox}>
                <Box
                  style={{
                    "--boxHeight": "auto",
                    minHeight: "130px",
                  }}
                >
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
                  flexDirection: "column",
                }}
              >
                {Object.keys(pokeData.Stats).map((stat, index) => (
                  <BaseStats
                    key={index}
                    percent={pokeData.Stats[stat]}
                    className={stat}
                  />
                ))}
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
                  <Box
                    style={{
                      padding: "0px",
                      "--boxHeight": "90px",
                    }}
                  >
                    <Tabs
                      height={pokeData.dimensions["Height"]}
                      weight={pokeData.dimensions["Weight"]}
                      male={pokeData.genderRatio["Male"]}
                      female={pokeData.genderRatio["Female"]}
                    />
                  </Box>
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
                      gap: "15px",
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
                    <div className={moduleStyle.GallerySelector}>
                      <div
                        className={`${moduleStyle.GallerySelector__image} ${moduleStyle.embla__container}`}
                      >
                        <span
                          className={`${moduleStyle.GallerySelector__counter}`}
                        >
                          {galleryPosition + 1}/{pokeData.Sprites.Misc.length}
                        </span>

                        <div className={moduleStyle.embla} ref={emblaRef}>
                          <div className={moduleStyle.embla__container}>
                            {pokeData.Sprites.Misc.map((image, index) => (
                              <div
                                key={index + 1}
                                className={moduleStyle.embla__slide}
                              >
                                <img
                                  className={
                                    moduleStyle.GallerySelector__image__galleryItems
                                  }
                                  src={image}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className={moduleStyle.GallerySelector__dotsContainer}
                      >
                        <div
                          className={
                            moduleStyle.GallerySelector__dotsContainer__leftChevron
                          }
                          onClick={() => {
                            emblaApi.scrollPrev();
                          }}
                        />

                        <div
                          className={
                            moduleStyle.GallerySelector__dotsContainer__rightChevron
                          }
                          onClick={() => {
                            emblaApi.scrollNext();
                          }}
                        />
                      </div>
                    </div>
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
  const genderRatio = await getGenderRatio(pokeId);
  const dimensions = await getDimensions(pokeId);
  const suggestion = await getSuggestionList();

  return {
    props: {
      pokeId,
      data: {
        ...data,
        japaneseName,
        EvolutionChainData,
        generation,
        genderRatio,
        dimensions,
        suggestion,
      },
    },
  };
};
