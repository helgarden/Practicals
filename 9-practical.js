'use strict';

const reservedWords = [
  'auto',
  'break',
  'case',
  'char',
  'const',
  'continue',
  'default',
  'do',
  'double',
  'else',
  'enum',
  'extern',
  'false',
  'float',
  'for',
  'goto',
  'if',
  'int',
  'long',
  'register',
  'return',
  'short',
  'signed',
  'sizeof',
  'static',
  'struct',
  'switch',
  'true',
  'typedef',
  'union',
  'unsigned',
  'void',
  'volatile',
  'while',
  '_Bool',
  '_Complex',
  '_Imaginary',
  'inline',
  'restrict',
  '_Alignas',
  '_Alignof',
  '_Atomic',
  '_Generic',
  '_Noreturn',
  '_Static_assert',
  '_Thread_local'
];

const stringArray = [
  'int a = 0;',
  'float b = a;',
  'int c = while;',
  'char d = 0afdd;',
  'int e = Abcn;',
  'boolean f = true;',
  'int g = *3d);',
  'float h = _hi;',
  'a == m',
];

function isCorrectIdentificator(word) {
  if (reservedWords.includes(word))
    return false;
  if (word[0] >= '0' && word[0] <= '9')
    return false;
  for (let i = 0; i < word.length; i++) {
    if ((word[i] < 'A' || word[i] > 'z') &&
        (word[i] < '0' || word[i] > '9') &&
        word[i] !== '_')
      return false;
  }
  return true;
}

function getIdentificators() {
  stringArray.forEach((elem) => {
    if (elem.includes('=')) {
      const word = elem.substring(elem.indexOf('=') + 1, elem.indexOf(';')).trim();
      if (isCorrectIdentificator(word)) {
        console.log(word);
      }
    }
  });
}

getIdentificators();
