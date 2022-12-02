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

// Reveser motions
const newMotions = Object.fromEntries(
  Object.entries(motions).map(([k, v]) => {
    return [k, Object.fromEntries(Object.entries(v).map(([x, y]) => [y, x]))];
  })
);

const getNewAction = (elfAction, p2Action) => {
  switch (p2Action) {
    case "X": // Need to lose
      return newMotions[elfAction].lose;
    case "Y": // need to draw
      return newMotions[elfAction].draw;
    case "Z": // need to win
      return newMotions[elfAction].win;
  }
};

const getResult = (rounds) => {
  let score = 0;

  for (let i = 0; i < rounds.length; i++) {
    const actions = rounds[i].split(" ");
    const p2Action = getNewAction(actions[0], actions[1]);
    const result = motions[actions[0]][p2Action];
    const myCount = p2Scores[p2Action];
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

// 2 + 3 , 1 + 3, 3 + 3,
