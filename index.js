var { Command } = require('commander');
const program = new Command();
program
    .option('-j | --join', 'Join IMWeb now!')
    .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

program.parse();

console.log(`cheese: ${program.opts().cheese}`);
console.log(`opts: ${JSON.stringify(program.opts())}`);
console.log(`--join: ${program.getOptionValue('join')}`)