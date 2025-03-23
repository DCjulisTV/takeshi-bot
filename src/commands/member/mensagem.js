const { PREFIX } = require(`${BASE_DIR}/config`);
const { WarningError } = require(`${BASE_DIR}/errors/WarningError`);

const motivationalQuotes = [
  "Acredite em você e todo o resto virá naturalmente.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Não importa quão devagar você vá, desde que você não pare.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "Você é mais forte do que pensa e mais capaz do que imagina.",
  "A vida é 10% do que acontece com você e 90% de como você reage a isso.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "Não desista. Grandes coisas levam tempo.",
];

module.exports = {
  name: "mensagem",
  description: "Envia uma mensagem motivacional ao usuário",
  commands: ["mensagem", "motivar"],
  usage: `${PREFIX}mensagem`,
  handle: async ({
    fullArgs,
    sendWaitReact,
    sendSuccessReact,
    sendText,
  }) => {
    // Verifica se não há argumentos adicionais
    if (fullArgs.length) {
      throw new WarningError("Este comando não aceita argumentos.");
    }

    await sendWaitReact(); // Envia uma reação de espera

    // Seleciona uma citação motivacional aleatória
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    await sendSuccessReact(); // Envia uma reação de sucesso
    await sendText(randomQuote); // Envia a citação motivacional
  },
};
