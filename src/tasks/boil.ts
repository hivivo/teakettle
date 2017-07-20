import * as chalk from 'chalk';
import NpmInstall from '../tasks/npm-install';
import { validateProjectName } from '../utilities/validate-project-name';

const Task = require('../../ember-cli/lib/models/task');
const SilentError = require('silent-error');
const normalizeBlueprint = require('../../ember-cli/lib/utilities/normalize-blueprint-option');
const InstallBlueprint = require('../../ember-cli/lib/tasks/install-blueprint');

export default Task.extend({
  run: function (commandOptions: any, rawArgs: string[]) {
    if (commandOptions.dryRun) {
      commandOptions.skipInstall = true;
    }

    const installBlueprint = new InstallBlueprint({
      ui: this.ui,
      project: this.project
    });

    let npmInstall: any;
    if (!commandOptions.skipInstall) {
      npmInstall = new NpmInstall({
        ui: this.ui,
        project: this.project
      });
    }

    const project = this.project;
    const packageName = commandOptions.name !== '.' && commandOptions.name || project.name();

    if (!packageName) {
      const message = 'The `teakettle ' + this.name + '` command requires a ' +
        'package.json in current folder with name attribute or a specified name via arguments. ' +
        'For more details, use `teakettle help`.';

      return Promise.reject(new SilentError(message));
    }

    const blueprintOpts = {
      dryRun: commandOptions.dryRun,
      blueprint: 'tea',
      rawName: packageName,
      targetFiles: rawArgs || '',
      rawArgs: rawArgs.toString(),
      ignoredUpdateFiles: ['favicon.ico']
    };

    validateProjectName(packageName);

    blueprintOpts.blueprint = normalizeBlueprint(blueprintOpts.blueprint);

    return installBlueprint.run(blueprintOpts)
      .then(function () {
        if (!commandOptions.skipInstall) {
          return npmInstall.run();
        }
      })
      .then(() => {
        this.ui.writeLine(chalk.green(`Your TEA '${packageName}' successfully made. Please enjoy.`));
      });
  }
});
