/*jshint latedef:false */
var path = require('path'),
  util = require('util'),
  yeoman = require('yeoman-generator'),
  scriptBase = require('../script-base');

module.exports = Generator;

function Generator() {
  scriptBase.apply(this, arguments);
  var dirPath = this.options.coffee ? '../templates/coffeescript/' : '../templates';
  this.sourceRoot(path.join(__dirname, dirPath));

}

util.inherits(Generator, scriptBase);

Generator.prototype.createComponentFiles = function createComponentFiles() {
  var ext = this.options.coffee ? 'coffeex' : 'jsx';
  var destFile = path.join('app/scripts/components', this.name + '-component.' + ext);
  var isRequireJsApp = this.isUsingRequireJS();

  if (!isRequireJsApp) {
    this.template('component.' + ext, destFile);
    return;
  }

  var template = [
    '',
    '/**',
    ' * @jsx React.DOM',
    ' */',
    '',
    '/*global define*/',
    '',
    'define([',
    '    \'jquery\',',
    '    \'underscore\',',
    '    \'react\'',
    '], function ($, _, React) {',
    '    \'use strict\';',
    '',
    '    var ' + this._.classify(this.name) + 'Component = React.createClass({',
    '    });',
    '',
    '    return ' + this._.classify(this.name) + 'Component;',
    '});',
  ].join('\n');

  this.write(destFile, template);
};
