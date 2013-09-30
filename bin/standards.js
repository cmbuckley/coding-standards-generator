var fs = require('fs'),
    mu = require('mu2');

var languages = ['js'];

var templateDirectory = fs.realpathSync(__dirname + '/../templates');
var templates = fs.readdirSync(templateDirectory);
var configDirectory = fs.realpathSync(__dirname + '/../config');
var configFile = fs.readdirSync(configDirectory);
var config = {};

configFile.forEach(function (configFile) {
    config[configFile.replace('.json', '')] = JSON.parse(fs.readFileSync(configDirectory + '/' + configFile, 'utf8'));
});

console.log(config);

languages.forEach(function (i, language) {
    templates.forEach(function (j, template) {
        mu.compileAndRender(template, config).on('data', function (data) {
            console.log(data.toString());
        });
    });
});
