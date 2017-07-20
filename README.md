## TeaKettle

TeaKettle is a tool to make TEA ([Typescript](https://www.typescriptlang.org) + [Express JS](https://expressjs.com) + [Angular 4](https://angular.io)) with [Material](https://material.angular.io) flavors.

Because of its special ingredients, TEA is a full stack Typescript solution for making
modern web apps.

TeaKettle is a command-line tool used to generate TEA projects based on [angular-cli](http://cli.angular.io/) and [ember-cli](http://www.ember-cli.com/) projects.

## Prerequisites

Both TeaKettle and generated TEA project have dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Making TEA](#making-tea)
* [Upgrading TeaKettle](#upgrading-teakettle)
* [Documentation](#documentation)
* [License](#license)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install -g teakettle
```

## Usage

```bash
teakettle help
```

### Making TEA

```bash
teakettle make PROJECT-NAME
cd PROJECT-NAME
teakettle serve dev
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Upgrading TeaKettle

To update TeaKettle to a new version:

```bash
npm uninstall -g teakettle
npm cache clean
npm install -g teakettle
```

## Documentation

The documentation for TeaKettle is located in this repo's [wiki](https://github.com/hivivo/teakettle/wiki).

## License

MIT
