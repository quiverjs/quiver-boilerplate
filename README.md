# quiver-boilerplate

This repository contains the boilerplate code for you to start your first [Quiver.js](http://quiverjs.org) project. For more information refer to the [build system documentation](https://github.com/quiverjs/quiverjs/wiki/Build-System).

## Getting Started

To get started, first clone the repository and run npm install.

```bash
$ git clone https://github.com/quiverjs/quiver-boilerplate my-quiver-project
$ cd my-quiver-project
$ npm install
```

## Unit Test

```bash
$ npm test
```

This boilerplate uses [Chai](http://chaijs.com/) and [Mocha](http://mochajs.org/) to perform unit tests. Feel free to change it to any test framework that suits you.

## Running Server

```bash
$ npm start
```

Use `npm start` to run the server. The default server simply returns "Hello World" in its response.

```bash
$ curl http://localhost:8080
Hello World
```

## Code Organization

  - [`src/`](src) contains your orginal source code.
  - [`src/lib/`](lib) contains your library and component code.
  - [`src/test/`](test) contains your unit test files.
  - [`src/server/`](server) contains your server code and config.
  - [`out/`](out) contains the ES6-transpiled code from your `src` folder.
  - [`package.json`](package.json) contains default dependencies and build scripts to transpile ES6 code.
  - [`index.js`](index.js) is the entry point specified in `package.json` and simply re-exports the transpiled [`lib/component.js`](lib/component.js).

## Main Component

This boilerplate is designed for projects running as standalone web application. By convention the main handler component that will be run as server is simply exported as `main`. [`server.js`](server/server.js) simply load the main component from [`component.js`](lib/component.js) and run it as HTTP server.

## Library Component

For library projects that export quiver components for others to use, the [`server/`](server) folder should be removed. The exported library components should also be given meaningful names other than `main`.

## package.json

This boilerplate uses [npm scripts](http://substack.net/task_automation_with_npm_run) to automate the transpilation of ES6 code. You should update the [`package.json`](package.json) to fit your project details. Remove the `private` flag to publish your project to npm.