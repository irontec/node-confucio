# confucio

[![NPM version](https://img.shields.io/npm/v/confucio.svg)](https://www.npmjs.com/package/confucio)
[![NPM dependencies](https://img.shields.io/david/irontec/node-confucio.svg)](https://www.npmjs.com/package/confucio)
[![NPM devdependencies](https://img.shields.io/david/dev/irontec/node-confucio.svg)](https://www.npmjs.com/package/confucio)
[![node](https://img.shields.io/node/v/confucio.svg)](https://nodejs.org/download/release/v0.12.8/)
[![license](https://img.shields.io/npm/l/confucio.svg)](https://raw.githubusercontent.com/irontec/node-confucio/master/LICENSE.txt)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Node.js configuration module. Uses [nconf](https://www.npmjs.com/package/nconf) under the hood.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm i --save confucio
```

## Features

Load config from files in this order:

* /etc/{{applicationName}}.conf
* {{HOME}}/.config/{{applicationName}}.conf
* Environment
* Argv

## Usage

```js
var applicationName = 'my-application-name';
var defaultEnvironment = 'production';

var config = require('confucio')(applicationName, defaultEnvironment);
```

## API Reference

### (moduleName, [defaultEnvironment]) ⇒ nconf instance

Loads config with nconf and returns the nconf object itself

| Param                  | Type     | Description           |
| -----                  | ----     | -----------           |
| moduleName             | `string` | Your application/module name |
| defaultEnvironment     | `string` | Optional. Default environment, in case that APPLICATION_ENV is not found. 'development' by default |

## Tests

```sh
npm install
npm test
```

## License

[EUPL v1.1](https://raw.githubusercontent.com/irontec/node-confucio/master/LICENSE.txt)

```
Copyright 2015 Irontec SL

Licensed under the EUPL, Version 1.1 or - as soon they will be approved by the European
Commission - subsequent versions of the EUPL (the "Licence"); You may not use this work
except in compliance with the Licence.

You may obtain a copy of the Licence at:
http://ec.europa.eu/idabc/eupl.html

Unless required by applicable law or agreed to in writing, software distributed under
the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF
ANY KIND, either express or implied. See the Licence for the specific language
governing permissions and limitations under the Licence.
```