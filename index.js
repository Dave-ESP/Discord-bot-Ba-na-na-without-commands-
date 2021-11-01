const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//----------------------------- SISTEMA 24/7 -----------------------------//

const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
   console.log(`INICIADO COMO BOT: ${client.user.tag}`); 
});

//---------------------------- CODIGO DEL BOT ----------------------------//







const mySecret = process.env['TOKEN']
client.login(mySecret);