const fs = require("fs");

// console.log(fs);

// fs.mkdir("cat/peshi", { recursive: false }, (error) => {
//   console.log("I am inside callback");
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("ok");
//   }
// });

// fs.mkdirSync("Dogs");

const folderName = process.argv[2] || "project";
try {
  fs.mkdirSync(folderName);
  // if the file exists, it will overwrite it if not it will make one
  fs.writeFileSync(`${folderName}/index.html`, "<html><body><h2>i am html file</h2></body></html>");
  fs.writeFileSync(`${folderName}/index.css`, "i am css file");
  fs.writeFileSync(`${folderName}/index.js`, "i am js file");
} catch (error) {
  console.log({ msg: error });
}
