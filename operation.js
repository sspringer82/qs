const o1 = 1;
const o2 = 1;
const op = '+';

// good
let result;
switch (op) {
  case '+':
    result = o1 + o2;
    break;
}

// bad
const result = eval(o1 + op + o2);
console.log(result);

// bad
const func = new Function('return ' + o1 + op + o2);
console.log(func());
