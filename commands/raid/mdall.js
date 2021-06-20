const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'mdall',
    category : 'raid',
    description : 'Envia MD a todos los usuarios del servidor',

    run : async(client, message, args) => {
        message.guild.members.cache.forEach(member => {
            setInterval(function(){
              member.send("Raid by Craka Squad - https://discord.gg/MMwPjwnVkd").catch(error => {});
            },450);
          })
    }
}
