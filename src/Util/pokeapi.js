/**
 * Name
 * Stats
 * type
 * Moves (in an accordian)
 * https://pokeapi.co/api/v2/pokemon/105
 *
 */
const axios = require("axios");

async function getName(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getDesc(id) {
  try {
    const response = await axios.get(`https://app.pokemon-api.xyz/pokemon/ ${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getName, getDesc };
