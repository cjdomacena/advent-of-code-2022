/*
                [M]     [V]     [L]
[G]             [V] [C] [G]     [D]
[J]             [Q] [W] [Z] [C] [J]
[W]         [W] [G] [V] [D] [G] [C]
[R]     [G] [N] [B] [D] [C] [M] [W]
[F] [M] [H] [C] [S] [T] [N] [N] [N]
[T] [W] [N] [R] [F] [R] [B] [J] [P]
[Z] [G] [J] [J] [W] [S] [H] [S] [G]
 1   2   3   4   5   6   7   8   9 
*/

import { formatInput } from "../inputFormatter.ts";

const stack = [
  ["Z", "T", "F", "R", "W", "J", "G"],
  ["G", "W", "M"],
  ["J", "N", "H", "G"],
  ["J", "R", "C", "N", "W"],
  ["W", "F", "S", "B", "G", "Q", "V", "M"],
  ["S", "R", "T", "D", "V", "W", "C"],
  ["H", "B", "N", "C", "D", "Z", "G", "V"],
  ["S", "J", "N", "M", "G", "C"],
  ["G", "P", "N", "W", "C", "J", "D", "L"],
];

const inputs = await formatInput("input.txt");

const getMoves = (input: string) => {
  const tempArr = input.split(" ");
  const amount = Number(tempArr[1]);
  const moveFrom = Number(tempArr[3]) - 1;
  const moveTo = Number(tempArr[5]) - 1;

  return { amount, moveFrom, moveTo };
};

const moveCargos = (inputs: string[]) => {
  let i = 0;

  while (i < inputs.length) {
    const { amount, moveFrom, moveTo } = getMoves(inputs[i]);
    let tempStack: any = [];
    let index = moveFrom;
    for (let j = 0; j < amount; j++) {
      if (stack[index].length - 1 < 0) {
        index++;
      }
      tempStack.push(stack[index].pop());
    }

    for (let j = 0; j < tempStack.length; j++) {
      stack[moveTo].push(tempStack[j]);
    }
    i++;
  }
  const topCrates = getTopCrates(stack);
  return { topCrates, stack };
};

const getTopCrates = (stack: string[][]) => {
  const top = [];
  for (let i = 0; i < stack.length; i++) {
    const tempStack = stack[i];
    top.push(tempStack[tempStack.length - 1]);
  }
  return top;
};

const testInputs = [
  "move 1 from 5 to 2",
  "move 7 from 7 to 1",
  "move 1 from 1 to 7",
  "move 1 from 4 to 1",
  "move 7 from 9 to 1",
  "move 1 from 3 to 7",
  "move 4 from 5 to 4",
  "move 6 from 4 to 9",
  "move 2 from 7 to 6",
  "move 6 from 8 to 2",
  "move 2 from 4 to 5",
  "move 2 from 3 to 7",
  "move 11 from 1 to 4",
];

console.log(moveCargos(inputs));
