const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'delroles',
    category : 'raid',
    description : 'Borra todos los roles que esten por debajo de el del bot',

    run : async(client, message, args) => {
        message.guild.roles.cache.map(roles => roles.delete());
    }
}