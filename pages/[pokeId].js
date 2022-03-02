import Head from "next/head";
import moduleStyle from "../styles/Home.module.scss";
import { getPoke } from "../Operations/getPoke";
import { CapitalizeChar } from "../Utils/Capitalize";

export default function Home({ props }) {
  // console.log(props);
  const { data: pokeData, pokeId } = props;

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

          <div className={moduleStyle.MainContainer__backdrop}></div>
          <div className={moduleStyle.MainContainer__search}></div>
          <div className={moduleStyle.MainContainer__pokeImage}></div>
          <div className={moduleStyle.MainContainer__details}></div>
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
