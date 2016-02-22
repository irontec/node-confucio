'use strict';

var ini = require('ini');
var nconf = require('nconf');

function loadConfig(moduleName, defaultEnv) {

    if (!moduleName) {
        throw new Error('Missing argument: moduleName');
    }
    
    var _moduleName = moduleName;
    var _defaultEnv = defaultEnv || 'development';
    var _configLocation = null;
    var _loadHomeFile = false;
    
    if (typeof moduleName === 'object') {
        _moduleName = moduleName.moduleName;
        _defaultEnv = moduleName.defaultEnv || _defaultEnv;
        _configLocation = moduleName.configLocation || _configLocation;
        _loadHomeFile = moduleName.loadHomeFile || _loadHomeFile;
    }

    nconf.add('memory');

    nconf.argv().env();

    if (_loadHomeFile) {
        loadHomeFile(_moduleName);
    }

    loadEtcFile(_moduleName, _configLocation);

    setDefaultEnv(_defaultEnv);


    process.env.DEBUG = nconf.get('DEBUG');

    nconf.set('APPLICATION_NAME', _moduleName);


    return nconf;
}

function setDefaultEnv(defaultEnv) {
    var env = nconf.get('APPLICATION_ENV');
    env = env || defaultEnv;
    
    nconf.set('APPLICATION_ENV',env);
}

function loadEtcFile(moduleName, configLocation) {
    
    var path;
    
    if (configLocation) {
        path = '/etc/' + configLocation + '/' + moduleName + '.conf';
    } else {
        path = '/etc/' + moduleName + '.conf';
    }

    nconf.file('etc', {
        file: path,
        format: ini
    });

}

function loadHomeFile(moduleName, configLocation) {
    
    var path;
    
    if (configLocation) {
        path = process.env.HOME + '/.config/' + configLocation + '/' + moduleName + '.conf';
    } else {
        path = process.env.HOME + '/.config/' + moduleName + '.conf';
    }

    nconf.file('home', {
        file: path,
        format: ini
    });
}

module.exports = loadConfig;
