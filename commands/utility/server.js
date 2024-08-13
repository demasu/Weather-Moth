const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),
  async execute(interaction) {
    // interaction.guild is the object representing the Guild in which the command was run
    console.log(`server.js: Interaction is: [${interaction}]`);
    await interaction.reply(
      'Hello'
      //`The server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`
    );
  },
};
