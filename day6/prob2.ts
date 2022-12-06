import { formatInput } from "../inputFormatter.ts";
const inputs = await formatInput("input.txt");

/*
    TODO:
    1. Track every slide
    2. Move every time 4 time.
*/

const getWindow = (start: number, input: string[], end: number) => {
  const tempEnd = end >= input.length ? input.length : end;
  const tempStart = start >= input.length ? input.length : start;
  if (tempEnd === tempStart) {
    return [""];
  }
  const x = input;
  return x.slice(tempStart, tempEnd);
};

// IF THIS RETURS TRUE WE GET OUR MARKER!
const checkDuplicates = (arr: string[]) => {
  const duplicates: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (duplicates.includes(arr[i])) {
      return true;
    } else {
      duplicates.push(arr[i]);
    }
  }
  return false;
};

// main fn
const mainFn = (inputs: string[]) => {
  let i = 0;
  let end = 14;
  while (i < inputs.length) {
    const window = getWindow(i, inputs, end);
    const hasDuplicates = checkDuplicates(window);

    if (!hasDuplicates) {
      return end;
    }

    end++;
    i++;
  }
};

const testInputs = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
console.log(mainFn(inputs[0].split("")));
