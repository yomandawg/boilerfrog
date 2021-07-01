const fs = require('fs');
const os = require('os');
const cp = require('child_process');
const { resolve: _resolve, join: _join } = require('path');
const { publishConfig } = require('./package.json');

// prepare npm script
const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

// get packages path
const __packages = _resolve(__dirname, 'packages');

// execute scripts
fs.readdirSync(__packages).forEach((package) => {
  // particular path
  var packagePath = _join(__packages, package);

  // ensure path includes package.json file
  if (!fs.existsSync(_join(packagePath, 'package.json'))) {
    return;
  }

  // build script execute
  cp.spawn(
    npmCmd,
    ['publish', packagePath, '--registry', publishConfig.registry],
    {
      env: process.env,
      cwd: packagePath,
      stdio: 'inherit',
    }
  );
});
