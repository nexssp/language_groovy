let languageConfig = Object.assign({}, require("./groovy.win32.nexss.config"));
const sudo = process.sudo;

languageConfig.compilers = {
  groovy: {
    // install: `bash -c "apt update && apt install openjdk-8-jdk openjdk-8-doc && snap install groovy --classic"`,
    install: `apt install unzip zip
echo "export SDKMAN_DIR=\"$HOME/.sdkman\"" > ~/.bashrc
export PATH="$HOME/.sdkman:$PATH"    
. ~/.bashrc
${sudo}curl -s get.sdkman.io | bash
chmod +x "$HOME/.sdkman/bin/sdkman-init.sh" &2>null
"$HOME/.sdkman/bin/sdkman-init.sh"
sdk install groovy`,
    command: "groovy",
    args: "--illegal-access=none <file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Arch Linux":
    languageConfig.compilers.groovy.install = `apt install unzip zip
echo "export SDKMAN_DIR=\"$HOME/.sdkman\"" > ~/.bashrc
export PATH=":$PATH"
. ~/.bashrc
${sudo}curl -s get.sdkman.io | bash
chmod +x "$HOME/.sdkman/bin/sdkman-init.sh" &2>null
"$HOME/.sdkman/bin/sdkman-init.sh"
sdk install groovy`;
    break;
  default:
    languageConfig.compilers.groovy.install = process.replacePMByDistro(
      languageConfig.compilers.groovy.install
    );
    break;
}

module.exports = languageConfig;
