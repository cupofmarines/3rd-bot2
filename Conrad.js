const Discord = require('discord.js')  
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("Chirping like a Chad")

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
        // General channel id: 622211368736522241 
    })
    
    let generalChannel = client.channels.get("622211368736522241")
    generalChannel.send("Hello World!")
})

client.login("NjIyMjA5ODYwOTEzODU2NTIz.XXwkNg.9q-lNWndPHge7c-a4ihlkwioyhg")