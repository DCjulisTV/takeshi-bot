/**
 * Mensagens do bot
 *
 * @author Dev Gui
 */
const { BOT_NAME, PREFIX } = require("../config");

exports.waitMessage = "Carregando dados...";

exports.menuMessage = () => {
  const date = new Date();

  return `╭━━⪩ BEM VINDO! ⪨━━
▢
▢ • ${BOT_NAME}
▢ • Data: ${date.toLocaleDateString("pt-br")}
▢ • Hora: ${date.toLocaleTimeString("pt-br")}
▢ • Prefixo: ${PREFIX}
▢
╰━━─「🪐」─━━

╭━━⪩ DONO Só pro dono ⪨━━
▢
▢ • ${PREFIX}off
▢ • ${PREFIX}on
▢ • ${PREFIX}play-audio
▢ • ${PREFIX}play-video
▢ • ${PREFIX}ia-sticker
▢
╰━━─「🌌」─━━

╭━━⪩ ADMINS ⪨━━
▢
▢ • ${PREFIX}anti-link (1/0)
▢ • ${PREFIX}auto-responder (1/0)
▢ • ${PREFIX}ban
▢ • ${PREFIX}hidetag
▢ • ${PREFIX}welcome (1/0)
▢
╰━━─「⭐」─━━

╭━━⪩ MENU ⪨━━
▢
▢ • ${PREFIX}attp
▢ • ${PREFIX}cep
▢ • ${PREFIX}image
▢ • ${PREFIX}ping
▢ • ${PREFIX}sticker
▢ • ${PREFIX}to-image
▢ • ${PREFIX}gpt
▢ • ${PREFIX}mensagem
▢ • ${PREFIX}bs


╰━━─「🚀」─━━`;
};
