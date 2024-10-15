const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname, "Curd");
const filepath = `${dirpath}/text.txt`;

fs.writeFile(filepath, "hey my name is asit kumar", "utf8", (err) => {
  // If you want to read the file after writing, you can do so here
  fs.readFile(filepath, "utf8", (err, data) => {
    if (!err) console.log("File written successfully:");
  });
});
fs.appendFile(filepath,'this is text to added into tge file', (err, data) => {
  if (err) throw err;
  console.log("Data appended successfully!");
})
fs.rename(filepath, `${dirpath}/text2.txt`, (err) => {
  if (err) throw err;
  console.log("File renamed successfully");
});
// fs.unlink(`${dirpath}/text2.txt`, (err) => {
//   if (err) throw err;
//   console.log("File deleted successfully");
// });