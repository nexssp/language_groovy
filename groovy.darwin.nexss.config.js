let languageConfig = Object.assign({}, require("./groovy.win32.nexss.config"));
languageConfig.compilers = {
  groovy: {
    install: `brew install groovy`,
    command: "groovy",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.groovy.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
