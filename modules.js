// const os = require("os");
// const fs = require("fs");

// console.log(os.platform(), os.homedir());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.endianness());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.version());

//reding files -  async operation which means it takes some time to complete the action
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//writing files - async also
// fs.writeFileSync("./docs/blog1.txt", "hello, semi", () => {
//   console.log("file was written");
// });

// creates new files if it does not exist
// fs.writeFileSync("./docs/blog2.txt", "hello, new file", () => {
//   console.log("file was written");
// });

//directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     err ? console.log(err) : null;
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     err ? console.log(err) : console.log("folder deleted");
//   });
// }

// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     err ? console.log(err) : console.log("deleteme.txt deleted");
//   });
// }
