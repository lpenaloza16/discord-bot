const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()

  .setName("Ping")
  .setDescription("Replies with Pong!");

async function execute(interaction) {
  await interaction.reply("Pongie!");
}

module.exports = {
  data,
  execute,
};
