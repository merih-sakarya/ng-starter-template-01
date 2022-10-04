# NG Starter Template 01

[Angular](https://angular.io/), [Ant Design](https://ng.ant.design/),
[Cypress](https://www.cypress.io), [Mock Server](https://www.npmjs.com/package/json-server),
[CI/CD](https://en.wikipedia.org/wiki/CI/CD), [Husky](https://github.com/typicode/husky),
[Eslint](https://eslint.org), [Prettier](https://prettier.io/),
[Jasmine](https://angular.io/guide/testing), [Karma](https://angular.io/guide/testing),
[Sass 7-1 Pattern](https://sass-lang.com/), [BEM methodology](https://en.bem.info/methodology)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `npm run test:server` to run the mock server. It listens for requests at endpoint `http://localhost:3000/api/*`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

**Test build**

Run `npm run build:test`

**Prod build**

Run `npm run build:production`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` or `npm run test:server & npx cypress run` to execute the end-to-end tests via a platform of your choice.

Make sure mock api is up.

**[Cypress](https://www.cypress.io)** is used for E2E tests. [Cypress](https://www.cypress.io) is a next generation front end testing tool built for the modern web. [Cypress Docs](https://docs.cypress.io)

`npm run cypress:run` -> To run the tests in headless mode.<br/>
`npm run cypress:open` -> To run the tests using Launchpad and Test Runner.<br/>

## Running mock server

Run `npm run test:server` to run the mock server. The server runs on port number `3000`. It listens for requests at endpoint `/api/*`. (`http://localhost:3000/api`) The application will automatically reload if you change any of the source files.

**[json-server](https://www.npmjs.com/package/json-server)** is a package providing full fake REST API with zero coding and it can be set up without much effort.

**[nodemon](https://www.npmjs.com/package/nodemon)** is a tool that helps develop Node.js-based applications by automatically restarting the node application when file changes in the directory are detected.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
