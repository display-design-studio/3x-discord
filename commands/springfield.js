const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const { fetch } = require("undici");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("springfield")
    .setDescription("Get a random frame from The Simpsons"),

  async execute(interaction) {
    const res = await fetch("https://frinkiac.com/api/random");
    const data = await res.json();

    const title = data.Episode.Title;
    const wiki = data.Episode.WikiLink;
    const episode = data.Frame.Episode;
    const timestamp = data.Frame.Timestamp;

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(title)
          .setDescription(episode)
          .setColor("FFD90F")
          .setImage(`https://frinkiac.com/img/${episode}/${timestamp}.jpg`)
          .setURL(wiki)
          .toJSON(),
      ],
    });
  },
};
