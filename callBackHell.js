const fs = require("fs");

fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) return console.error(err);

  console.log("File1:", data1);

  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) return console.error(err);

    console.log("File2:", data2);

    fs.readFile("file3.txt", "utf8", (err, data3) => {
      if (err) return console.error(err);

      console.log("File3:", data3);
    });
  });
});