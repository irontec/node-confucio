'use strict';

var ini = require('ini');
var nconf = require('nconf');

function loadConfig(moduleName, defaultEnv) {
    nconf.add('memory');

    nconf.argv().env();

    loadHomeFile(moduleName);

    loadEtcFile(moduleName);

    setDefaultEnv(defaultEnv);


    process.env.DEBUG = nconf.get('DEBUG');


    return nconf;
}

function setDefaultEnv(defaultEnv) {
    var env = nconf.get('APPLICATION_ENV');
    env = env || defaultEnv || 'development';
    nconf.set('APPLICATION_ENV',env);
}

function loadEtcFile(moduleName) {
    var path = '/etc/' + moduleName + '.conf';

    nconf.file('etc', {
        file: path,
        format: ini
    });

}

function loadHomeFile(moduleName) {
    var path = process.env.HOME + '/.config/' + moduleName + '.conf';

    nconf.file('home', {
        file: path,
        format: ini
    });
}

module.exports = loadConfig;