'use strict';

var ini = require('ini');
var nconf = require('nconf');

function loadConfig(moduleName, defaultEnv) {

    if (!moduleName) {
        throw new Error('Missing argument: moduleName');
    }

    defaultEnv = defaultEnv || 'development';

    nconf.add('memory');

    nconf.argv().env();

    loadHomeFile(moduleName);

    loadEtcFile(moduleName);

    setDefaultEnv(defaultEnv);


    process.env.DEBUG = nconf.get('DEBUG');

    nconf.set('APPLICATION_NAME', moduleName);


    return nconf;
}

function setDefaultEnv(defaultEnv) {
    var env = nconf.get('APPLICATION_ENV');
    env = env || defaultEnv;
    
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
