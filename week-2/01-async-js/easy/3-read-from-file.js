const fs = require("fs");

fs.writeFile("text.txt", "Sanket", "utf-8", () => {
  console.log("done");
});

fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log(data);
});
