/*
    Module trong NodeJS
    1. Core modules của nodesjs: fs, http
    2. Local module: tự tạo
    3. 3rd party
*/

// npm install axios / npm i axios
// Import 3rd
// CRUD product phone
const axios = require("axios");
const fs = require("fs");

const callAPI = axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
callAPI
  .then(function (res) {
    // console.log("Result - ", res.data);
  })
  .catch(function (err) {});

// const handleFile = (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log("Data- ", err);
// };

// fs.readFile("./lesson_01.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log("Data- ", data);
// });

// const greeting = "Hello MindX 2022";

// fs.writeFile("./product.txt", greeting, (err) => {
//   console.log("Error - ", err);
// });
