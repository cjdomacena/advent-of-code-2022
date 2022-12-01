const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  const res = data.toString().split(/\r\n|\n/);
  let calorieTotal = [];
  let calorieGroup = [];
  res.map((cookie) => {
    if (cookie !== "") {
      calorieGroup.push(cookie);
    } else {
      // TODO: GET TOP THREE TOP CALORIES OF ELVES
      calorieTotal.push(getSum(calorieGroup));
      calorieGroup = [];
    }
  });
  const topThree = calorieTotal
    .sort((a, b) => Number(b) - Number(a))
    .slice(0, 3);
  console.log(getSum(topThree));
});

function getSum(arr) {
  return arr.reduce((x, y) => {
    return Number(x) + Number(y);
  }, 0);
}
