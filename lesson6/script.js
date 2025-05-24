const strings = ['hello', 'world', 'javascript'];

const lengths = strings.map((str) => str.length);

console.log(lengths); // Output: [5, 5, 10]


const names = [['John', 'Doe'], ['Jane', 'Doe']];

const fullNames = names.map((name) => name.join(' '));

console.log(fullNames); // Output: ['John Doe', 'Jane Doe']
