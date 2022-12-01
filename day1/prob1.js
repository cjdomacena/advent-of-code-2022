const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  const res = data.toString().split(/\r\n|\n/);
  let cookieJar = 0;
  let cookieGroup = [];
  res.map((cookie) => {
    if (cookie !== "") {
      cookieGroup.push(cookie);
    } else {
      const total = getSum(cookieGroup);
      if (total > cookieJar) {
        cookieJar = total;
      }
      cookieGroup = [];
    }
  });
  console.log(cookieJar);
});

function getSum(arr) {
  return arr.reduce((x, y) => {
    return Number(x) + Number(y);
  }, 0);
}
