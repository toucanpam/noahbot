module.exports = {
    name:'kick',
    description: 'kicks a dumbass from the server',
    execute(client, message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`Bye bye, ${user.tag}!`)
        }else{
            message.channel.send('maybe give me an actual user? smh');
        }
    }
}