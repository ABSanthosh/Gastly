import { useRouter } from "next/router";
import Head from "next/head";
import moduleStyle from "../styles/Home.module.scss";

export default function Home() {
  const router = useRouter();
  const { pokeId } = router.query;
  return (
    <>
      <Head>
        <title>Gastly | {pokeId}</title>
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
