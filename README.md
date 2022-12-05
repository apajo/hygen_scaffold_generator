# Hygen scaffold generator

[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> Generate code scaffolding from your boilerplate code

## Prerequisites

This project requires NodeJS (version 16 or later) and NPM.
[Node 16](http://nodejs.org/) and [Yarn 1.22.19](https://yarnpkg.com/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ yarn -v && node -v
1.22.19
v16.18.0
```

## Table of contents

- [Hygen scaffold generator](#hygen-scaffold-generator)
    - [Prerequisites](#prerequisites)
    - [Table of contents](#table-of-contents)
    - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
        - [Example use case](#example-use-case)
        - [Serving the app](#serving-the-app)
        - [Running the tests](#running-the-tests)
        - [Building a distribution version](#building-a-distribution-version)
    - [Contributing](#contributing)
    - [Credits](#credits)
    - [Versioning](#versioning)
    - [Authors](#authors)
    - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/apajo/hygen_scaffold_generator.git .hygen
$ cd .hygen
```

To install and set up the library, run:

```sh
$ yarn
$ yarn setup
```

## Usage

### Example use case

Example file structure:
```
│   UserModule.java
│
└───Model
│   │   UserModel.java
│   │   UserGroupModel.java
│
└───resources
│   │   translations.yml
```

Contents of `UserModule.java`
```java
package com.my_namespace;

public class UserModule {

}
```

With these files in your working directory run:
```sh
$ hygen generator template --name=my_template_group --action=template_name --className=User --namespace=com.my_namespace
```
This generates your new template into _templates director. 

Equivalent interactive  `hygen generator template`


Now anywhere in your project (with .hygen.js in the parent directory) you can run:
```sh
$ hygen my_template_group template_name --namespace=com.another_namespace --className=Document
```

Equivalent interactive command `hygen my_template_group template_name`


Output of the command:
```
│   DocumentModule.java
│
└───Model
│   │   DocumentModel.java
│   │   DocumentGroupModel.java
│
└───resources
│   │   translations.yml
```


Contents of `DocumentModule.java`
```java
package com.another_namespace;

public class DocumentModule {

}
```



### Serving the app

```sh
$ yarn start
```

### Running the tests

```sh
$ yarn test
```

### Building a distribution version

```sh
$ yarn build
```

This task will create a distribution version of the project
inside your local `dist/` folder

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/apajo/hygen_scaffold_generator/tags).

## Authors

* **Andres Pajo** - *Initial work* - [apajo](https://apajo.ee/)

See also the list of [contributors](https://github.com/apajo/hygen_scaffold_generator) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY