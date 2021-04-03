export function forifier(pokeId) {
    pokeId = String(pokeId);
    while (pokeId.length < 4) {
      pokeId = "0" + pokeId;
    }
    return pokeId;
  }