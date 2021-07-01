# boilerfrog 🐸

> node.js project boilerplate running on a mono-repo-like private package manager

## Installation

with Verdaccio package manager served via localhost

```bash
npm install --registry http://localhost:4873 <package-name>
```

or via custom host server

```bash
npm install --registry $HOST
```

## Pre-install dependencies for serving

install dependencies

- [Verdaccio](https://verdaccio.org/)
- [Lerna](https://lerna.js.org/)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [PM2](https://pm2.keymetrics.io/)

```bash
npm run preinstall
```

## Serving the package manager

### via localhost

```bash
# local-only use
npm run start
```

### via server

Setup Verdaccio's `config.yaml`

- default `<VERDACCIO_CONFIG_PATH>`
  - Windows - `C:\Users\[USERNAME]\.config\verdaccio\config.yaml`
  - Mac - `/usr/local/lib/node_modules/verdaccio/bin`
  - Linux - `/usr/local/lib/node_modules/verdaccio/bin`

```bash
mv verdaccio.yaml <VERDACCIO_CONFIG_PATH>/config.yaml
```

Start process

```bash
# Windows
npm run start:windows
```

```bash
# Mac
npm run start:mac
```

```bash
# Linux
npm run start:linux
```

**[troubleshoot]** change `$npm_package_config_path_<OS_NAME>` to your own global node.js' Verdaccio path

```bash
# command to check the global `npm_modules` location
npm root -g
```

```json
// package.json
{
    ...,
    "config": {
        ...,
        "path": {
            "<OS_NAME>": "<GLOBAL_NODEJS_PATH>/node_modules/verdaccio/bin"
        }
    }
}
```

## Managing packages

publish to remote host

```bash
npm publish --registry $HOST
```

create a new package

```
npm run create <package-name>
# lerna create <package-name>
```

## Authentication

> WARNING: scripts may vary depending on your `verdaccio.yaml` configuration file and authentication policy

```bash
npm adduser --registry $HOST
```

## Lerna

> https://lerna.js.org/

*publish as a mono-repo using lerna*

available scripts (use at your own risk)

```bash
# initiation
npm run lerna:init

# hoisting pacakage dependencies
npm run lerna:bootstrap

# update versions
npm run lerna:version

# view diffs
npm run lerna:diff
```

publish as a mono-repo

```bash
npm run publish:root
```
