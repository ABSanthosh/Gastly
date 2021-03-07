/**
 * Name
 * Stats
 * type
 * Moves (in an accordian)
 * https://pokeapi.co/api/v2/pokemon/105
 *
 */

async function getName(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let data = await response.json();
  return data;
}

export { getName };
