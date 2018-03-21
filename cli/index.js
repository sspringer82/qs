const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = ['1 + 1 = ', '2 + 2 = '];

function ask(questions) {
  if (questions.length <= 0) {
    rl.close();
    return;
  }

  const q = questions.shift();
  rl.question(q, answer => {
    console.log(answer);
    ask(questions);
  });
}

ask(questions);
