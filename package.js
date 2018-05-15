Package.describe({
  name: 'chandrantwins:testpack',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Demonstration of an Atmosphere Package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chandrantwins/testpack.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use('ecmascript');
  api.mainModule('testpack.js','client');
  api.mainModule('servertestpack.js','server');
  if (api.export){
	api.export('TestPack');
  }
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('chandrantwins:testpack');
  api.mainModule('testpack-tests.js');
});

Npm.depends({
	"colors": "0.6.2"
});