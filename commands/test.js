const { SlashCommandBuilder } = require("discord.js");

console.log("test");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("Replies with test!"),
  async execute(interaction) {
    await interaction.reply("Testone!");
  },
};
