let languageConfig = Object.assign({}, require("./groovy.win32.nexss.config"));
languageConfig.compilers = {
  groovy: {
    install: `bash -c "apt update && apt install openjdk-8-jdk openjdk-8-doc && snap install groovy --classic"`,
    command: "groovy",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.groovy.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
