const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
  const newStr = data
    .split(" ")
    .filter((data) => data.length > 0)
    .join(" ");
  fs.writeFile("test.txt", newStr, "utf-8", () => {});
});
