import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const askGender = async (): Promise<string> => {
  const gender = await askQuestion(
    "Hora de verificar a sua classe de herói! Estamos falando de um herói ou heroína? (Digite 1 para 'herói' ou 2 para 'heroína'): "
  );
  if (gender !== "1" && gender !== "2") {
    console.log("************************************");
    console.log("Por favor, digite 1 para 'herói' ou 2 para 'heroína'.");
    console.log("************************************");
    return askGender();
  }
  return gender;
};

const askName = async (
  article: string,
  genderText: string
): Promise<string> => {
  return askQuestion(`Qual é o nome ${article} ${genderText}? `);
};

const askXp = async (): Promise<number> => {
  const xp = await askQuestion("Qual a sua quantidade de XP? ");
  const parsedXp = parseInt(xp);
  if (isNaN(parsedXp)) {
    console.log("************************************");
    console.log("Por favor, insira um número válido.");
    console.log("************************************");
    return askXp();
  }
  return parsedXp;
};

const main = async () => {
  const gender = await askGender();
  const genderText = gender === "1" ? "herói" : "heroína";
  const article = gender === "1" ? "do seu" : "da sua";

  const name = await askName(article, genderText);
  console.log(`Olá, ${name}!`);

  const parsedXp = await askXp();
  let level = "";

  if (parsedXp <= 1000) {
    level = "Ferro";
  } else if (parsedXp >= 1001 && parsedXp <= 2000) {
    level = "Bronze";
  } else if (parsedXp >= 2001 && parsedXp <= 5000) {
    level = "Prata";
  } else if (parsedXp >= 5001 && parsedXp <= 7000) {
    level = "Ouro";
  } else if (parsedXp >= 7001 && parsedXp <= 8000) {
    level = "Platina";
  } else if (parsedXp >= 8001 && parsedXp <= 9000) {
    level = "Ascendente";
  } else if (parsedXp >= 9001 && parsedXp <= 10000) {
    level = "Imortal";
  } else if (parsedXp >= 10001) {
    level = "Radiante";
  }

  console.log(
    `O nome ${article} ${genderText} é ${name}, tem ${parsedXp} de XP e portanto está na classe de herói '${level}'!`
  );
  rl.close();
};

main();
