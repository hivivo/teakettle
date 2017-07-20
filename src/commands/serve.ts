import { oneLine } from 'common-tags';
import * as chalk from 'chalk';

const Command = require('../../ember-cli/lib/models/command');
const SilentError = require('silent-error');
const figlet = require('figlet');

const ServeCommand: any = Command.extend({
  name: 'serve',
  description: 'Serves your TEA.',
  aliases: ['server', 's'],

  availableOptions: [],

  anonymousOptions: ['<dev|prod>'],

  beforeRun: function (rawArgs: string[]) {
    if (!rawArgs.length) {
      return;
    }

    const env = rawArgs[0];

    const isHelp = ['--help', '-h'].includes(env);
    if (isHelp) {
      return;
    }

    if (!['dev', 'prod'].includes(env)) {
      SilentError.debugOrThrow('teakettle/commands/serve',
        `Use either 'dev' or 'prod' please`);
    }
  },

  run: function (commandOptions: any, rawArgs: string[]) {
    this.ui.writeLine(chalk.cyan(figlet.textSync('TeaKettle', {
      horizontalLayout: 'fitted',
      verticalLayout: 'default'
    })));

    const env = rawArgs[0];
    if (!env) {
      return Promise.reject(new SilentError(oneLine`
          The "teakettle serve" command requires a
          environemnt name to be specified (dev or prod).
          For more details, use "teakettle help".
      `));
    }

    const ServeTask = require('../tasks/serve').default;

    const serveTask = new ServeTask({
      project: this.project,
      tasks: this.tasks,
      ui: this.ui,
      env: env
    });

    return serveTask.run(commandOptions, rawArgs);
  }
});

ServeCommand.overrideCore = true;
export default ServeCommand;
