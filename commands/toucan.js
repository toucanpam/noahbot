const Discord = require('discord.js');

module.exports = {
    name: 'toucan',
    description: "sends dumb big bird",
    execute(client, message, args){
        var Toucans = [
            "https://media1.tenor.com/images/c08696bfbec0e9e0bf488e6089a1b83b/tenor.gif?itemid=7816573",
            "https://media1.tenor.com/images/a6e13e24507510e5a7e3d57b6e3aa282/tenor.gif?itemid=17493053",
            "https://media1.tenor.com/images/47914073ae9422a75375afff9aa2c5a1/tenor.gif?itemid=19943488",
            "https://media1.tenor.com/images/24ebca63095afed9fa6ef0e23a50e733/tenor.gif?itemid=7816555",
            "https://media1.tenor.com/images/a21b98c44b4f5b2ba080feea2cfe69c0/tenor.gif?itemid=15644902",
            "https://media1.tenor.com/images/c74a09d41158d7f1bead2c2564c32a88/tenor.gif?itemid=7816567",
            "https://media1.tenor.com/images/453bb425adb6f1d085859cabf407c23d/tenor.gif?itemid=7594020",
            "https://media1.tenor.com/images/e7395cdb99abe5a9b6d5d8238dd1d881/tenor.gif?itemid=16605180",
            "https://media1.tenor.com/images/6bdac109a2a8b50a7c9ebd93d08e1644/tenor.gif?itemid=14545821",
            "https://media1.tenor.com/images/ab7408d0a71f0de17bd86f6e342355db/tenor.gif?itemid=9638291",
            "https://media1.tenor.com/images/7c7213440994e9b7b3582ec9961e5c81/tenor.gif?itemid=17140008"
        ];
        var randomToucan = Toucans[Math.floor(Math.random()*Toucans.length)];

        const toucanEmbed = new Discord.MessageEmbed()
            .setColor('#3e93de')
            .setTitle('Toucan!')
            .setImage(randomToucan)
            .setFooter('NoahBot by Zeph', 'https://i.imgur.com/cOQvahr.png');
        
        message.channel.send(toucanEmbed);
    }
}