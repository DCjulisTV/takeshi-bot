const { PREFIX } = require(`${BASE_DIR}/config`);
const { Client } = require('brawl-api-wrapper');
const { WarningError } = require(`${BASE_DIR}/errors/WarningError`);

const client = new Client(eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2 FtZWFwaSIsImp0aSI6ImNmOWEyNmFmLTQ4ZTYtNGM2YS04MTUyLWY0MDZjNDkyNTdlYyIsImlhdCI6MTc0Mjc3MTk0Nywic3ViIjoiZGV2ZWxvcGVyLzFhMjEyMGUyLWM2YzMtZDVlNC0wNTU4LTNhNWMwMTk3NDcyYiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUu MTYxLjI5LjE5IiwiNDUuMTYxLjI5LjE5Il0sInR5cGUiOiJjbGllbnQifV19.bg6CDoIeORyLNaSszoMoD86xdy6-Y8QHo_XW2XbQhFB4ECV-WbUPYhv8ToeWocee-21TV1z2f3P30Q4rP9I9ag');

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
