import Sprites from "../Assets/sprites.json";

function suggestions() {
  let names = [];

  for (var obj in Sprites) {
    names.push({
      id: parseInt(obj),
      label: Sprites[obj]["Name"] + " #" + String(obj),
    });
  }
  for (var obj in Sprites) {
    names.push({
      id: parseInt(obj),
      label: parseInt(obj) + " " + Sprites[obj]["Name"],
    });
  }
  // console.log(names)
  return names;
}

function suggestionsWithJustNames() {
  let justNames = [];

  for (var obj in Sprites) {
    justNames.push(Sprites[obj]["Name"] + " #" + String(obj));
  }

  for (var obj in Sprites) {
    justNames.push(parseInt(obj)+" "+Sprites[obj]["Name"]);
  }

  //   console.log(justNames)
  return justNames;
}

export { suggestions, suggestionsWithJustNames };
