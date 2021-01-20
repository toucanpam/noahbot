module.exports = {
    name:'poll',
    description: 'makes a poll duh',
    execute(client, message, args, reaction){
         message.react('👍')
            .then(() => message.react('👎'))
            .then(() => message.react('🤔'))
    }
};