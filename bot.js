const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

    	message.reply('pong');

  	}

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDg0NTA1NzExNTYxMTQ2Mzc4.Dmz2cA.pXWy2PsgwEMYvfDTvZhV_L9z8GQ);
