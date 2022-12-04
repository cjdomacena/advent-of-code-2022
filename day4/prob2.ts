import { formatInput } from "../inputFormatter.ts";

const inputs = await formatInput("input.txt");

/*  TODO:
    1. Check the pairs for fully contain assignments
    2. Compare pair1[0] to pair2[0] where pair2[0] >= pair1[0]; pair[1] to pair[2] where pair1[1] >= pair2[1]

*/

const comparePair = (pair1: string, pair2: string) => {
  const p1 = pair1.split("-");
  const p1Low = Number(p1[0]);
  const p1High = Number(p1[1]);

  const p2 = pair2.split("-");
  const p2Low = Number(p2[0]);
  const p2High = Number(p2[1]);
  if (
    p1High == p2Low ||
    p1High === p2High ||
    p1Low === p2High ||
    p1Low === p2Low
  ) {
    return true;
  }
  let arr: any[] = [];
  let compare = [];
  if (p1High > p2High) {
    arr = p1;
    compare.push(p2Low);
    compare.push(p2High);
  } else if (p1High < p2High) {
    arr = p2;
    compare.push(p1Low);
    compare.push(p1High);
  }
  let i = Number(arr[0]);

  for (i; i < Number(arr[arr.length - 1]); i++) {
    if (compare.includes(i)) {
      return true;
    }
  }

  return false;
};

const getFullyContainedCount = (inputs: string[]) => {
  let score = 0;

  for (let i = 0; i < inputs.length; i++) {
    const pairs = inputs[i].split(",");
    const res = comparePair(pairs[0], pairs[1]);
    console.log(pairs, res);
    if (res) {
      score += 1;
    }
  }
  return score;
};

console.log(getFullyContainedCount(inputs));

/*
 .2.4....
 .....6..

 ....5.7
 ......7..9

*/
