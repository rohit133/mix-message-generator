const msg = require("../src/message");

function composerMessage() {
    return ("Welcome to the Message Genrator! \n\nHere's your message : '"+ msg+ "'")
};

console.log(composerMessage());