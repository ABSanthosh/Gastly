const axios = require("axios");

async function getData(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response;
  } catch (error) {
  }
}

async function getDesc(id) {
  try {
    const response = await axios.get(
      `https://app.pokemon-api.xyz/pokemon/${id}`
    );
    return response;
  } catch (error) {
  }
}

export { getData, getDesc };
