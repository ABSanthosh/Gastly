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

export const getGeneration = async (pokeId) => {
  const url = "https://absanthosh.github.io/PokedexData/PokemonGeneration.json";

  const data = await fetch(url);
  const json = await data.json();

  return json[forifier(pokeId)];
};

export const getDimensions = async (pokeId) => {
  const url = "https://absanthosh.github.io/PokedexData/PokemonDimensions.json";

  const data = await fetch(url);
  const json = await data.json();

  return json[forifier(pokeId)];
};

export const getGenderRatio = async (pokeId) => {
  const url =
    "https://absanthosh.github.io/PokedexData/PokemonGenderRatio.json";

  const data = await fetch(url);
  const json = await data.json();

  return json[forifier(pokeId)];
};

export const getSuggestionList = async () => {
  const url = "https://absanthosh.github.io/PokedexData/PokemonData.json";

  const data = await fetch(url);
  const json = await data.json();
  let list = [];
  Object.keys(json).forEach((key) => {
    list.push({ id: key, Name: json[key].Name });
  });
  return list;
};
