const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");

const { fetch } = require("undici");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("springfield")
    .setDescription("Get a random frame from The Simpsons"),
  async execute(interaction) {
    const res = await fetch("https://frinkiac.com/api/random");
    const json = await res.json();
    console.log(json);

    let episode = json.Frame.Episode;
    let timestamp = json.Frame.Timestamp;

    //https://frinkiac.com/img/S09E02/445978.jp
    // `https://frinkiac.com/img/${episode}/${timestamp}.jpg`
    await interaction.reply(`https://frinkiac.com/img/${episode}/${timestamp}.jpg`, {
      embeds: [
        new EmbedBuilder()
          .setTitle("The Simpsons")
          .setDescription("Random Frame")
          .setImage(`https://frinkiac.com/img/${episode}/${timestamp}.jpg`)
          .toJSON(),
      ],
    });
  },
};
