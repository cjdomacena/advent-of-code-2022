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
// group = ["ttgJtRGJQctTZtZT", "ttgJtRGJQctTZtZT", "ttgJtRGJQctTZtZT"]
const getBadge = (group: string[]) => {
  for (let i = 0; i < group[0].split("").length; i++) {
    const tracker = group[0][i];
    if (group[1].includes(tracker) && group[2].includes(tracker)) {
      return tracker;
    }
  }
  return null;
};

const calculateScore = (inputs: string[]) => {
  let score = 0;
  let rucksackGroup: string[] = [];
  let i = 0;
  while (i < inputs.length) {
    rucksackGroup.push(inputs[i]);

    // Given that the input is divisible by 3.
    if ((i + 1) % 3 === 0) {
      const badge = getBadge(rucksackGroup);
      rucksackGroup = [];
      if (badge) {
        score += priorities.indexOf(badge) + 1;
      }
    }

    i++;
  }
  return score;
};

console.log(calculateScore(input));
