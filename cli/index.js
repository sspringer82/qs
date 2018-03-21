const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = ['a', 'b'];

function ask(questions) {
  if (questions.length <= 0) {
    rl.close();
  }

  const q = questions.shift();
  rl.question(q, answer => {
    console.log(answer);
    ask(questions);
  });
}

ask(questions);
