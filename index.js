const { Client,  GatewayIntentBits, Message } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on("ready", () => {
    console.log("bot opérationnel !")
});

client.login("MTAzODA3NDE0MjY0NzM5ODQ2MA.GoZlTW.YkP0xQh_Plc2CurGIWiAtKU45EkcczctnjybWc");