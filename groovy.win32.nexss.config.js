let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Groovy";
languageConfig.description =
  "Apache Groovy is a powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities";
languageConfig.url = "https://groovy-lang.org";
languageConfig.founders = ["James Strachan"];
languageConfig.developers = [""];
languageConfig.years = ["2003"];
languageConfig.extensions = [".groovy"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "groovysh";
languageConfig.builders = {};
languageConfig.compilers = {
  groovy: {
    install: "scoop install groovy",
    command: "groovy",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.groovy.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
