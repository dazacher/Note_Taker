[![Build Status](https://travis-ci.com/sdanyalk/template-engine-employee-summary.svg?token=6qETL9meygH9xfgUSNN9&branch=master)](https://travis-ci.com/sdanyalk/template-engine-employee-summary)
[![Coverage Status](https://coveralls.io/repos/github/sdanyalk/template-engine-employee-summary/badge.svg?branch=master)](https://coveralls.io/github/sdanyalk/template-engine-employee-summary?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](license)

<img src="./assets/warning.jpg" width="800" height="100">

This is the solution for homework assignment-10 of University of Arizona Coding Bootcamp. As an instructor, I have provided my solution as guidance to my students. I have licensed this code under [MIT license](license), which means that if you use any code from here, you will need to reference the copyright **exactly** as it is. Even after doing that, if you try to submit your homework using any code from here, it will be considered **plagiarism**.

---

# Template Engine Employee Summary
Software engineering team generator command line application. This is a `nodejs` application, that uses `inquirer` to gather employee information in order to form an engineering team.

---

## Demo

![](./assets/demo.gif)

---

## Installation

1. Clone this repository.
    ```
    git clone https://github.com/sdanyalk/template-engine-employee-summary.git
    ```
1. Navigate into the cloned directory.
    ```
    cd template-engine-employee-summary
    ```
1. Install Nodejs dependencies.
    ```
    npm install
    ```
1. In the root directory of the project, start the app.
    ```
    node app.js
    ```
1. Run tests.
    ```
    npm run test
    ```

---

## NPM Packages

| Package | Documentation | Notes
| ----------- | ----------- | ----------- |
| `inquirer` | [Inquirer](https://www.npmjs.com/package/inquirer#documentation) | Nicer Command line user interface
| `jest` | [Jest](https://jestjs.io/docs/en/getting-started) | Delightful JavaScript Testing Framework
| `coveralls` | [Coveralls](https://www.npmjs.com/package/coveralls) | Great code coverage reporting tool
|  |  |

---

# CI/CD

CI/CD means Continuous Integration / Continous Development. This is a development practice that means deploying your code as soon as you develop it automatically.

I'm using [travis-ci](https://travis-ci.com/) for this. It is very easy to setup and use. You will need to create a file called `.travis.yml` at the root of your project. After that go to [github marketplace](https://github.com/marketplace/travis-ci) to add travis-ci to your github. It also gives nice build badges that can be added to the readme.

---

## License

This project is licensed under the MIT License - see the [LICENSE](license) file for details.