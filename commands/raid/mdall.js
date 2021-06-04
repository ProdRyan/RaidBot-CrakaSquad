const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'mdall',
    category : 'raid',
    description : 'Envia MD a todos los usuarios del servidor',

    run : async(client, message, args) => {
        message.guild.members.cache.forEach(member => {
            setInterval(function(){
              member.send("Raid By Hex Squad - https://discord.gg/A6rnT7Ynk2").catch(error => {});
            },450);
          })
    }
}
