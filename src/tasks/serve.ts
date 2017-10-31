const Task = require('../../ember-cli/lib/models/task');
import chalk from 'chalk';
import { exec } from 'child_process';

export default Task.extend({
  run: function () {
    const ui = this.ui;
    const env = this.env;
    let packageManager = this.packageManager || 'default';
    if (packageManager === 'default') {
      packageManager = 'npm';
    }

    ui.writeLine(chalk.green(`Serving your tea...`));

    let npmCommand = `${packageManager} run-script ${env}`;

    return new Promise((resolve, reject) => {
      exec(npmCommand,
        (err: NodeJS.ErrnoException, _stdout: string, stderr: string) => {
          if (err) {
            ui.writeLine(stderr);
            const message = 'Failed to serve your tea, see above.';
            ui.writeLine(chalk.red(message));
            reject(message);
          } else {
            ui.writeLine(chalk.green(`You may also want to run '${packageManager} run ${env}' instead.`));
            resolve();
          }
        }).stdout.pipe(process.stdout);
    });
  }
});
