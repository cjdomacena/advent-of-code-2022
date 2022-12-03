import { formatInput } from "../inputFormatter.ts";

const input = await formatInput("./input.txt");

/* TODO:
    1. Split rucksack (input line) into two,
    2. Check for duplicate
    3. Get the value of the duplicates and calculate the total.
*/
// TY https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
const alphabet = Array.from(Array(26)).map((_, i) => i + 65);

const lowerCase = alphabet
  .map((x) => String.fromCharCode(x).toLowerCase())
  .sort();
const uppercase = alphabet.map((x) => String.fromCharCode(x)).sort();
const priorities = [...lowerCase, ...uppercase];

const testInputs = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];

const calculateScore = (inputs: string[]) => {
  let score = 0;
  for (let i = 0; i < inputs.length; i++) {
    const rucksack = inputs[i];
    const middle = Math.round(rucksack.length / 2);
    const firstHalf: string[] = rucksack.slice(0, middle).split("");
    const secondHalf: string[] = rucksack
      .slice(middle, inputs.length)
      .split("");
    const duplicates: string[] = [];
    firstHalf.map((a) => {
      if (secondHalf.includes(a)) {
        if (!duplicates.includes(a)) {
          score += priorities.indexOf(a) + 1;
          duplicates.push(a);
        }
      }
    });
  }
  return score;
};

console.log(calculateScore(input));
