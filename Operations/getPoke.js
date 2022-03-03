import { forifier } from "../Utils/forifier";

export const getPoke = async (pokeId) => {
  const url = "https://absanthosh.github.io/PokedexData/PokemonData.json";

  const data = await fetch(url);
  const json = await data.json();

  return json[forifier(pokeId)];
};

export const getJapaneseName = async (pokeId) => {
  const url =
    "https://absanthosh.github.io/PokedexData/PokemonJapaneseName.json";

  const data = await fetch(url);
  const json = await data.json();

  return json[forifier(pokeId)];
};
