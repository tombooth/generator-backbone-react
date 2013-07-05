var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = Generator;

function Generator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  var dirPath = this.options.coffee ? '../templates/coffeescript/' : '../templates';
  this.sourceRoot(path.join(__dirname, dirPath));

  this.dirs = 'models collections components routes helpers'.split(' ');

  this.option('coffee');

  args = ['application'];

  if (this.options.coffee) {
    args.push('--coffee');
  }

  if (this.options['test-framework']) {
    this.env.options['test-framework'] = this.options['test-framework'];
  }

  // the api to hookFor and pass arguments may vary a bit.
  this.hookFor('backbone-react:app', {
    args: args
  });
  this.hookFor('backbone-react:router', {
    args: args
  });
  this.hookFor('backbone-react:model', {
    args: args
  });
  this.hookFor('backbone-react:collection', {
    args: args
  });
  this.hookFor('backbone-react:component', {
    args: args
  });

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);


Generator.prototype.createDirLayout = function createDirLayout() {
  this.dirs.forEach(function (dir) {
    this.log.create('app/scripts/' + dir);
    this.mkdir(path.join('app/scripts', dir));
  }.bind(this));
};
