let languageConfig = Object.assign({}, require("./groovy.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}
languageConfig.compilers = {
  groovy: {
    // install: `bash -c "apt update && apt install openjdk-8-jdk openjdk-8-doc && snap install groovy --classic"`,
    install: `${sudo}apt install openjdk-8-jdk openjdk-8-doc && ${sudo}snap install groovy --classic`,
    command: "groovy",
    args: "--illegal-access=none <file>",
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Arch Linux":
    languageConfig.compilers.groovy.install = `echo "export SDKMAN_DIR=\"$HOME/.sdkman\"" > ~/.bashrc
export PATH=":$PATH"
. ~/.bashrc
${sudo}curl -s get.sdkman.io | bash
chmod +x "$HOME/.sdkman/bin/sdkman-init.sh" &2>null
"$HOME/.sdkman/bin/sdkman-init.sh"
sdk install groovy`;
    break;
  default:
    languageConfig.compilers.groovy.install = replaceCommandByDist(
      languageConfig.compilers.groovy.install
    );
    break;
}

languageConfig.errors = require("./nexss.groovy.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
