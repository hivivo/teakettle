const Command = require('../../ember-cli/lib/models/command');

const BoilCommand: any = Command.extend({
  name: 'boil',
  description: 'Makes TEA in the current folder.',
  works: 'everywhere',
  hidden: true,

  availableOptions: [
    { name: 'dry-run', type: Boolean, default: false, aliases: ['d'] },
    { name: 'verbose', type: Boolean, default: false, aliases: ['v'] },
    { name: 'skip-install', type: Boolean, default: false, aliases: ['si'] },
    { name: 'name', type: String, default: '', aliases: ['n'] }
  ],

  anonymousOptions: ['<glob-pattern>'],

  run: function (commandOptions: any, rawArgs: string[]) {
    const BoilTask = require('../tasks/boil').default;

    const boilTask = new BoilTask({
      project: this.project,
      tasks: this.tasks,
      ui: this.ui,
    });

    return boilTask.run(commandOptions, rawArgs);
  }
});

BoilCommand.overrideCore = true;
export default BoilCommand;
