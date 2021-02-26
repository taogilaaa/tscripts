import shelljs from 'shelljs';
import spawn from 'cross-spawn';
import path from 'path';
import CONFIG from './config';

type ProjectType = 'node'; // Add other project types here

const basePath = path.join(__dirname, '..');

function localBinPath(name: string) {
  return path.join(__dirname, '../node_modules/.bin', name);
}

function installPackages(packages: string[], isDev: boolean) {
  if (packages.length === 0) {
    return;
  }

  const args = isDev ? ['add', '--dev', ...packages] : ['add', ...packages];
  spawn.sync(localBinPath('yarn'), args, {
    cwd: process.cwd(),
    stdio: 'inherit',
  });
}

function createProject(name: string, type: ProjectType) {
  if (!CONFIG[type]) {
    console.log(`Type "${type}" not yet supported.`);
    return;
  }

  const config = CONFIG[type];
  const { starter, configFiles, mkdir, seedFiles } = config;
  const starterPath = `${basePath}/starter/${starter}`;

  console.log(`Creating directory "${name}" ...`);
  shelljs.mkdir(name);
  shelljs.cd(name);

  console.log('Writing package.json ...');
  const pkgJSON = shelljs.cat(`${starterPath}/default-package.json`);
  const pkg = {
    ...JSON.parse(pkgJSON),
    name,
    description: name,
  };
  shelljs.ShellString(JSON.stringify(pkg, null, 2)).to('./package.json');

  console.log('Copying config files ...');
  for (const srcFile of Object.keys(configFiles)) {
    const dstFile = String(configFiles[srcFile]);
    shelljs.cp('-R', `${starterPath}/${srcFile}`, `./${dstFile}`);
  }

  console.log('Creating directories ...');
  if (mkdir.length) {
    shelljs.mkdir(...mkdir);
  }

  for (const fileName of Object.keys(seedFiles)) {
    const content = seedFiles[fileName];
    shelljs.ShellString(content).to(`./${fileName}`);
  }

  console.log('Installing packages ...');
  installPackages(config.packages, false);

  console.log('Installing dev packages ...');
  installPackages(config.devPackages, true);
}

export { createProject };
