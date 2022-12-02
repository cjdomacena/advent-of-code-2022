const inputs = await Deno.readTextFile("input.txt");
const rounds = inputs.split(/\r\n|\n/);

/*
P1:
A - ROCK -> beats Scissors
B - PAPER -> beats Rock
C - SCISSORS -> beats paper
P2: 
X: ROCK, VAL: 1, beats: Scissors
Y: PAPER, VAL: 2, beats: Rock
Z: SCISSORS, VAL: 3, beats Paper
*/

const motions = {
  A: { Z: "lose", Y: "win", X: "draw" },
  B: { X: "lose", Z: "win", Y: "draw" },
  C: { Y: "lose", X: "win", Z: "draw" },
};

const p2Scores = { X: 1, Y: 2, Z: 3 };

const getResult = (rounds) => {
  let score = 0;

  for (let i = 0; i < rounds.length; i++) {
    const actions = rounds[i].split(" ");
    const result = motions[actions[0]][actions[1]];
    const myCount = p2Scores[actions[1]];
    if (result === "win") {
      score += myCount + 6;
    } else if (result === "lose") {
      score += myCount;
    } else if (result === "draw") {
      score += myCount + 3;
    }
  }

  return score;
};

console.log(getResult(rounds));
