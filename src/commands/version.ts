const Command = require('../../ember-cli/lib/models/command');
const figlet = require('figlet');
import * as path from 'path';
import chalk from 'chalk';

const VersionCommand = Command.extend({
  name: 'version',
  description: 'Outputs TeaKettle version.',
  aliases: ['v', '--version', '-v'],
  works: 'everywhere',

  availableOptions: [{
    name: 'verbose',
    type: Boolean,
    'default': false,
    description: 'Adds more details to output logging.'
  }],

  run: function (options: any) {
    let versions: any = process.versions;
    const pkg = require(path.resolve(__dirname, '..', '..', 'package.json'));

    versions.os = process.platform + ' ' + process.arch;

    let teakettleVersion = pkg.version;

    this.ui.writeLine(chalk.cyan(figlet.textSync('TeaKettle', {
      horizontalLayout: 'fitted',
      verticalLayout: 'default'
    })));
    this.printVersion('teakettle', teakettleVersion);

    for (const module of Object.keys(versions)) {
      if (options.verbose) {
        this.printVersion(module, versions[module]);
      }
    }
  },

  printVersion: function (module: string, version: string) {
    this.ui.writeLine(module + ': ' + version);
  }
});

VersionCommand.overrideCore = true;
export default VersionCommand;
