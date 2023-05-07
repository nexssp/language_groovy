let languageConfig = Object.assign({}, require("./groovy.win32.nexss.config"));
// const sudo = process.sudo;

languageConfig.compilers = {
  groovy: {
    // install: `bash -c "apt update && apt install openjdk-8-jdk openjdk-8-doc && snap install groovy --classic"`,
    install: `pkg install -y groovy`,
    command: "groovy",
    // args: "--illegal-access=none <file>",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

module.exports = languageConfig;
