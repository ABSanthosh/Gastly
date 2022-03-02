import { useRouter } from "next/router";
import moduleStyle from "../styles/Home.module.scss";

export default function Home() {
  const router = useRouter();
  const { pokeId } = router.query;
  return <div style={moduleStyle.homeWrapper}>{pokeId}</div>;
}
