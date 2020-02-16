let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Groovy";
languageConfig.description =
  "Apache Groovy is a powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities";
languageConfig.url = "https://groovy-lang.org/";
languageConfig.extensions = [".groovy"];
languageConfig.executeCommandLine = "fpc";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "fpc";
languageConfig.builders = {};
languageConfig.compilers = {
  fpc: {
    install: "scoop install groovy",
    command: "groovy",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.groovy.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
