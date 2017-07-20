const Blueprint   = require('../../ember-cli/lib/models/blueprint');
const path        = require('path');
const stringUtils = require('ember-cli-string-utils');
const getFiles = Blueprint.prototype.files;

exports.default = Blueprint.extend({
  description: '',

  locals: function(options) {
    const fullAppName = stringUtils.dasherize(options.entity.name)
      .replace(/-(.)/g, (_, l) => ' ' + l.toUpperCase())
      .replace(/^./, (l) => l.toUpperCase());

    return {
      projectCodeName: stringUtils.dasherize(options.entity.name),
      projectName: stringUtils.classify(options.entity.name),
      fullAppName: fullAppName
    };
  }
});
