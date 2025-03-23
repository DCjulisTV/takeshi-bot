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

╭━━⪩ DONO ⪨━━
▢
▢ • ${PREFIX}off
▢ • ${PREFIX}on
▢
╰━━─「🌌」─━━

╭━━⪩ ADMINS ⪨━━
▢
▢ • ${PREFIX}anti-link (1/0)
▢ • ${PREFIX}auto-responder (1/0)
▢ • ${PREFIX}ban
▢ • ${PREFIX}marcartodos
▢ • ${PREFIX}bemvindo (1/0)
▢
╰━━─「⭐」─━━

╭━━⪩ MENU ⪨━━
▢
▢ • ${PREFIX}txtparafigura
▢ • ${PREFIX}buscarcep
▢ • ${PREFIX}ping
▢ • ${PREFIX}imgparafigura
▢ • ${PREFIX}figuraparaimg
▢
╰━━─「🚀」─━━`;
};
