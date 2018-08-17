const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === '!forum') {
      message.reply('http://valet-noir.forumactif.org/')
    }
});

bot.on('message', message => {
    if (message.content === '!twitter') {
      message.reply('https://twitter.com/Le_Valet_Noir')
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur le Discord de la Main du Valet Noir ! Je suis Camille, le serveur spectral. Le cannal #annonces présente les informations importantes, le salon #relations_extérieurs est ici pour parler de RP, de projets en lien avec la Main ou de son Background alors que la #zone_non_droit est là pour la discussion plus générale. Sur notre Discord, comme sur notre forum, les règles élémentaires de courtoisie et de respect sont de rigueur. La modération se réserve tous les droits si ces règles viennent à être outrepassées. Passe un bon moment parmi nous ! http://valet-noir.forumactif.org/  ')
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  });

bot.login(process.env.TOKEN);
