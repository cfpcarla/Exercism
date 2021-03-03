//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const lowerCaseSentence = sentence.toLowerCase();

  for (const char of lowerCaseSentence) {
    if(alphabet.indexOf(char) !== -1) {
      alphabet.splice(alphabet.indexOf(char), 1);
    } 
  }

  return alphabet.length == 0;
};
