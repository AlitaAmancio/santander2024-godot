import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const askWins = async (): Promise<number> => {
  const wonMatches = await askQuestion("Você venceu quantas partidas? ");
  const parsedWonMatches = parseInt(wonMatches);
  if (isNaN(parsedWonMatches)) {
    console.log("************************************");
    console.log("Por favor, insira um número válido.");
    console.log("************************************");
    return askWins();
  }
  const lostMatches = await askQuestion(
    "Parabéns pelas partidas vencidas! E quantas derrotas você teve? "
  );
  const parsedLostMatches = parseInt(lostMatches);
  if (isNaN(parsedLostMatches)) {
    console.log("************************************");
    console.log("Por favor, insira um número válido.");
    console.log("************************************");
    return askWins();
  }
  return parsedWonMatches - parsedLostMatches;
};

const main = async () => {
  const parsedResult = await askWins();
  let level = "";

  if (parsedResult <= 10) {
    level = "Ferro";
  } else if (parsedResult >= 11 && parsedResult <= 20) {
    level = "Bronze";
  } else if (parsedResult >= 21 && parsedResult <= 50) {
    level = "Prata";
  } else if (parsedResult >= 51 && parsedResult <= 80) {
    level = "Ouro";
  } else if (parsedResult >= 81 && parsedResult <= 90) {
    level = "Diamante";
  } else if (parsedResult >= 91 && parsedResult <= 100) {
    level = "Lendário";
  } else if (parsedResult >= 101) {
    level = "Imortal";
  }

  console.log(
    `O Herói tem saldo de '${parsedResult}' e está no nível '${level}'!`
  );

  rl.close();
};

main();
