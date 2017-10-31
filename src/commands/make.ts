import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import denodeify = require('denodeify');

import BoilCommand from './boil';
import { validateProjectName } from '../utilities/validate-project-name';
import { oneLine } from 'common-tags';

const Command = require('../../ember-cli/lib/models/command');
const Project = require('../../ember-cli/lib/models/project');
const SilentError = require('silent-error');
const figlet = require('figlet');
const mkdir = denodeify<string, void>(fs.mkdir as any);

const MakeCommand = Command.extend({
  name: 'make',
  aliases: ['m'],
  description: `Make a cup of TEA eg. "teakettle make [name]".`,
  works: 'outsideProject',

  availableOptions: [
    {
      name: 'dry-run',
      type: Boolean,
      default: false,
      aliases: ['d'],
      description: oneLine`
        Run through without making any changes.
        Will list all files that would have been created when running "teakettle make".
      `
    },
    {
      name: 'verbose',
      type: Boolean,
      default: false,
      aliases: ['v'],
      description: 'Adds more details to output logging.'
    },
    {
      name: 'skip-install',
      type: Boolean,
      default: false,
      aliases: ['si'],
      description: 'Skip installing packages.'
    },
    {
      name: 'directory',
      type: String,
      aliases: ['dir'],
      description: 'The directory name to create the app in.'
    }
  ],

  run: function (commandOptions: any, rawArgs: string[]) {
    this.ui.writeLine(chalk.cyan(figlet.textSync('TeaKettle', {
      horizontalLayout: 'fitted',
      verticalLayout: 'default'
    })));

    const packageName = rawArgs.shift();
    if (!packageName) {
      return Promise.reject(new SilentError(
        `The "teakettle ${this.name}" command requires a name argument to be specified eg. ` +
        chalk.yellow('teakettle make [name] ') +
        `For more details, use "teakettle help".`));
    }

    validateProjectName(packageName);
    commandOptions.name = packageName;

    const directoryName = path.join(process.cwd(),
      commandOptions.directory ? commandOptions.directory : packageName);

    const boilCommand = new BoilCommand({
      ui: this.ui,
      tasks: this.tasks,
      project: Project.nullProject(this.ui, this.cli)
    });

    let createDirectory;
    if (commandOptions.dryRun) {
      createDirectory = Promise.resolve()
        .then(() => {
          if (fs.existsSync(directoryName)) {
            throw new SilentError(oneLine`
              Directory ${directoryName} already exists.
            `);
          }
        });
    } else {
      createDirectory = mkdir(directoryName)
        .catch(err => {
          if (err.code === 'EEXIST') {
            throw new SilentError(oneLine`
              Directory ${directoryName} already exists.
            `);
          } else {
            throw err;
          }
        })
        .then(() => process.chdir(directoryName));
    }

    return createDirectory
      .then(boilCommand.run.bind(boilCommand, commandOptions, rawArgs));
  }
});


MakeCommand.overrideCore = true;
export default MakeCommand;
