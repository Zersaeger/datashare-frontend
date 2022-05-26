const prompt = require("prompt-sync")({ sigint: true });
const axios = require('axios');
const { Console } = require("console");
const fs = require('fs')

async function send(message) {
    try {
        let response = await axios.post('http://julianh.de:8070/message', {
            message: message
        })
        console.log("ID: " + response.data.Id)
    } catch (error) {
        console.log(error)
    }
}

async function get(id) {
    try {
        let response = await axios.get('http://julianh.de:8070/message/'+id)
        console.log("Message: " + response.data.Message)
    } catch (error) {
        console.log(error)
    }
}

const cmd = prompt("commands<< ");
if (cmd == "send") {
    const input = prompt("Message content: ")
    send(input)
}
else if (cmd == "get") {
    const input = prompt("ID: ")
    get(input)
}
else if (cmd == "exit") {
    run = false
}
else {
    console.log("Command does not exist yet")
}