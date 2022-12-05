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

const moveCargos = (inputs: string[], stack: string[][]) => {
  let i = 0;

  while (i < inputs.length) {
    const { amount, moveFrom, moveTo } = getMoves(inputs[i]);
    let tempStack: any = [];
    for (let j = 0; j < amount; j++) {
      //   console.log("Original Stack: ", stack);
      //   console.log("Move Amount: ", amount);
      //   console.log("Move: ", stack[index]);
      //   console.log("-------------------------------");
      const popper = stack[moveFrom].pop();
      tempStack.push(popper);
    }

    for (let j = tempStack.length - 1; j >= 0; j--) {
      stack[moveTo].push(tempStack[j]);
    }
    i++;
  }
  const topCrates = getTopCrates(stack);
  return topCrates;
};

const getTopCrates = (stack: string[][]) => {
  const top = [];
  for (let i = 0; i < stack.length; i++) {
    const tempStack = stack[i];
    top.push(tempStack[tempStack.length - 1]);
  }
  return top;
};

const testStack = [["Z", "N"], ["M", "C", "D"], ["P"]];

const testInputs = [
  "move 1 from 2 to 1",
  "move 3 from 1 to 3",
  "move 2 from 2 to 1",
  "move 1 from 1 to 2",
];

console.log(moveCargos(inputs, stack));
