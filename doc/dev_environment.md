# Development Environment

To maintain a consistent version of the tools used in the project, follow these steps:

## Install Git

To check if Git is installed on your machine, run:

```bash
git --version
```

If a version appears (something like `git version 2.37.3`), Git is installed.

If not, visit https://git-scm.com and download it for your operating system. For example:

![image](https://user-images.githubusercontent.com/63798776/188479149-b85735a6-f9f2-4ee8-904a-9e6cb113925a.png)

To confirm the installation, run the above command again.

## Install Docker

To install Docker, refer to the official documentation at https://www.docker.com/products/docker-desktop/

## Install NodeJS

Similarly to Git, check if NodeJS is already installed with the command below.

```bash
node --version
```

If NodeJS is not installed, go to https://nodejs.org and download the "LTS" version for your operating system.

> If your operating system is Linux-based (e.g., Ubuntu, Debian), you will need to use `sudo` before the commands below (`sudo <command>`).

If the version differs from the one specified in the [`README.md`](../README.md#development-environment), install the `n` package to get the correct version:

```
npm install --global n
```

Once installed, install the correct version with:

```bash
n x.x.x
```

Replace `x.x.x` with the version specified in the [`README.md`](../README.md#development-environment) for NodeJS.
