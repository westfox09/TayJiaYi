/*
// 1
const p = Promise.resolve('resolved');
p.then((value) => console.log(value));

// 2
const p = Promise.reject(new Error('Oops!'));
p.catch((value) => console.log(value));

// 3
const p = Promise.resolve({ id: 1, name: 'Alice' });
p.then((value) => console.log(`id: ${value.id}, name: '${value.name}'`));

// 4
const p = Promise.resolve({ id: 1, name: 'Alice' });
p.then((value) => console.log(value.name));

// 5
const p = Promise.reject(new Error('Invalid id'));
p.catch((error) => console.log(error));

// 6
const p = Promise.resolve(42);
p.finally(() => console.log('Promise settled'));

// 7
const p = Promise.resolve(21);
p.then((value) => console.log(value * 2));

// 8
const p = Promise.reject(new Error('Invalid value'));
p.catch((error) => console.log(0));

// 9
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
const allPromise = Promise.all(promises);
allPromise.then((values) => console.log(values));

// 10
const promises = [
    new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
    new Promise(resolve => setTimeout(() => resolve('b'), 50)),
    new Promise(resolve => setTimeout(() => resolve('c'), 150))
  ];
const racePromise = Promise.race(promises);
racePromise.then((values) => console.log(values));

// 11
const p = Promise.resolve('World');
p.then((value) =>
{
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve('Hello ' + value), 1000);
    });
})
.then((final) => console.log(final));
*/