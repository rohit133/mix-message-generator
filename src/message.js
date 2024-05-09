const fs = require("fs");

const getData = () => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync("../data/sample.txt", "utf-8");
    return data; // Return the file data
  } catch (err) {
    console.error(`Error occurred while reading the file: ${err}`);
    return null; // Return null in case of error
  }
};
const rawData = getData();
const arrayOfArrays = rawData.split("\n").map((line) => [line]);
const getRandomMessage = (messageArray) => {
  let randomNumber = Math.floor(
    Math.random(0, messageArray.length) * messageArray.length
  );
  return messageArray[randomNumber].join(" ");
};
let message = getRandomMessage(arrayOfArrays)
module.exports = message;