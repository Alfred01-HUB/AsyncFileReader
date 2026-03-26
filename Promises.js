const fs = require("fs").promises;

fs.readFile("file1.txt", "utf8")
  .then(data1 => {
    console.log("File1:", data1);
    return fs.readFile("file2.txt", "utf8");
  })
  .then(data2 => {
    console.log("File2:", data2);
    return fs.readFile("file3.txt", "utf8");
  })
  .then(data3 => {
    console.log("File3:", data3);
  })
  .catch(err => {
    console.error("Error:", err);
  });
  