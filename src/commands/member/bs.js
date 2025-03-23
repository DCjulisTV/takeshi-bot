const { PREFIX } = require(`${BASE_DIR}/config`);
const { Client } = require('brawl-api-wrapper');
const { WarningError } = require(`${BASE_DIR}/errors/WarningError`);

const client = new Client('YOUR_API_KEY_HERE');

module.exports = {
  name: "brawlstars",
  description: "Retorna informações do jogador Brawl Stars",
  commands: ["bs"],
  usage: `${PREFIX}bs <player_id>`,
  handle: async ({ fullArgs, sendWaitReact, sendSuccessReact, sendText }) => {
    if (fullArgs.length !== 1) {
      throw new WarningError("Por favor, forneça o ID do jogador.");
    }

    const playerId = fullArgs[0];

    await sendWaitReact(); // Envia uma reação de espera

    try {
      const player = await client.getPlayer(playerId, true);
      const club = player.club ? player.club.name : "Sem clube";

      const responseMessage = `**Nickname:** ${player.name}\n**Troféus:** ${player.trophies}\n**Clube:** ${club}`;
      
      await sendSuccessReact(); // Envia uma reação de sucesso
      await sendText(responseMessage); // Envia as informações do jogador
    } catch (error) {
      await sendText("Erro ao buscar informações do jogador. Verifique o ID e tente novamente.");
    }
  },
};
