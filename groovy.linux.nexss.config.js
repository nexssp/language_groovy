let languageConfig = Object.assign({}, require("./groovy.win32.nexss.config"));
languageConfig.compilers = {
  groovy: {
    install: `bash -c "apt update && apt install openjdk-8-jdk openjdk-8-doc && apt install curl && curl -s get.sdkman.io | bash && source \"$HOME/.sdkman/bin/sdkman-init.sh\" && sdk install groovy"`,
    command: "groovy",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.groovy.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
