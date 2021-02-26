import { Command } from 'commander';
import { version } from '../package.json';
import { createProject } from './creater';

const program = new Command();

program.version(version, '-v,--version').usage('init <project_name> [options]');

program
  .command('init <project_name>')
  .description(
    'Create a directory with the given name and initialize an empty project.',
  )
  .option('-t, --type [node]', 'Create a project of the given type.', 'node')
  .action((name, options) => {
    createProject(name, options.type);
  });

program.on('command:*', () => {
  program.help();
  process.exit(1);
});

program.parse(process.argv);

if (!program.args || program.args.length < 1) {
  program.help();
  process.exit(1);
}
