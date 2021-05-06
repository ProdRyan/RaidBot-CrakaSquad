const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Ver la API latency',

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pingeando...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`WebSocket ping es ${client.ws.ping}ms\nPing es ${Math.floor(msg.createdAt - message.createdAt)}ms`)
            await message.channel.send(embed)
            msg.delete()

    }
}