// This file hooks up on require calls to transpile TypeScript.
const cli = require('../../ember-cli/lib/cli');
const UI = require('../../ember-cli/lib/ui');
const path = require('path');

function loadCommands() {
  return {
    'make': require('../../dist/commands/make').default,
    'serve': require('../../dist/commands/serve').default,
    // 'test': require('../../dist/commands/test').default,
    // 'e2e': require('../../dist/commands/e2e').default,
    'help': require('../../dist/commands/help').default,
    'version': require('../../dist/commands/version').default
  };
}

module.exports = function(options) {

  // patch UI to not print Ember-CLI warnings
  UI.prototype.writeWarnLine = function () { }

  options.cli = {
    name: 'teakettle',
    root: path.join(__dirname, '..', '..'),
    npmPackage: 'teakettle'
  };

  options.commands = loadCommands();

  // ensure the environemnt variable for dynamic paths
  process.env.PWD = path.normalize(process.env.PWD || process.cwd());
  process.env.CLI_ROOT = process.env.CLI_ROOT || path.resolve(__dirname, '..', '..');

  return cli(options);
};
