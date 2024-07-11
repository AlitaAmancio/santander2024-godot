# 2️⃣ Calculadora de partidas Rankeadas

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

Bons estudos 😉

## Instruções de Uso da Solução do Desafio

Para executar o código, siga os seguintes passos:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Navegue até o diretório onde o arquivo `Desafio.ts` está salvo. Se você estiver no diretório do projeto, pode usar o seguinte comando no terminal:

   ```bash
   cd caminho/para/o/diretorio/do/projeto
   ```

3. Compile o arquivo TypeScript para JavaScript usando o comando:

   ```bash
   npx tsc Desafio.ts
   ```

4. Execute o arquivo JavaScript gerado com Node.js:

   ```bash
   node Desafio.js
   ```

5. Siga as instruções no terminal para inserir o numero de vitórias e derrotas. O programa exibirá a mensagem final com o nível do herói baseado no saldo total de Vitórias.
