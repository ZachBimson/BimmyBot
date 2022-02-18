module.exports= {
    name: 'ping',
    aliases: ['png', 'pong', 'miassmibools'],
    description: 'this is a ping command',
    execute(client, message, cmd, args, Discord) {
        if(cmd === 'ping' || cmd === 'png') {
        message.channel.send('pong!');
        }
        if(cmd === 'pong') {
            message.channel.send('ping!')
        }
        if(cmd === 'miassmibools') {
            message.channel.send('mi ass mi poopy')
        }
    }
}