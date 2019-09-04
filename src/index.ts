import * as minimist from 'minimist';
const argv = minimist.default(process.argv.slice(2));

async function sayName(name: string) {
  console.log(`Hello ${name}`);
}

if (argv.name) {
  sayName(argv.name).then(() => {
    console.log('Utility completed.');
  });
}

if (argv.help || !argv.name) {
  console.log('Usage:');
  console.log('--name, Prints the name specified.');
  console.log('--help, Prints the usage documentation.');
}
