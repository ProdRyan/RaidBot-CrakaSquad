const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'mdall',
    category : 'raid',
    description : 'Envia MD a todos los usuarios del servidor',

    run : async(client, message, args) => {
        message.guild.members.cache.forEach(member => {
            setInterval(function(){
              member.send("Raid By Chaos Squad - https://discord.gg/rGmcfeSP9m").catch(error => {});
            },450);
          })
    }
}