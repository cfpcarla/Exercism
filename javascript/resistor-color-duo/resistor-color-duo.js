//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
  return getIndex(color1) * 10 + getIndex(color2);
};

const getIndex = (color) => {
  return COLORS.indexOf(color);
};

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
