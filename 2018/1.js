const fs = require("fs");

const input = fs.readFile("./input1.txt", "utf8", (err, input) => {
  const inputLines = input.split("\n");

  let value1 = 0;

  for (let i = 0; i < inputLines.length; i++) {
    const line = inputLines[i];
    value1 += +line;
  }

  console.log("part1", value1);

  var found2 = false;
  var knownValues = [];
  let value2 = 0;
  while (!found2) {
    for (let i = 0; i < inputLines.length; i++) {
      const line = inputLines[i];
      value2 += +line;

      if (knownValues.includes(value2)) {
        console.log("part2", value2);
        found2 = true;
        break;
      }

      knownValues.push(value2);
    }
  }
});
