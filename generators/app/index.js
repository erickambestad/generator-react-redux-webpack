'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ever-amazing ' + chalk.red('generator-react-redux-webpack') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What would you like to name your project?',
      default: this.appname,
      store: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('htdocs/index.html'),
      { title: this.props.projectName }
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { title: this.props.projectName }
    );
    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('js/app.js'),
      this.destinationPath('src/js/app.js')
    );
    this.fs.copyTpl(
      this.templatePath('js/store.js'),
      this.destinationPath('src/js/store.js')
    );
    this.fs.copyTpl(
      this.templatePath('js/pages/Template/Template.js'),
      this.destinationPath('src/js/pages/Template/Template.js')
    );
    this.fs.copyTpl(
      this.templatePath('js/pages/Home/Home.js'),
      this.destinationPath('src/js/pages/Home/Home.js')
    );
    this.fs.copyTpl(
      this.templatePath('js/pages/Home/Home-actions.js'),
      this.destinationPath('src/js/pages/Home/Home-actions.js')
    );
    this.fs.copyTpl(
      this.templatePath('js/pages/Home/Home-reducers.js'),
      this.destinationPath('src/js/pages/Home/Home-reducers.js')
    );
    this.fs.copyTpl(
      this.templatePath('js/pages/Home/Home-container.js'),
      this.destinationPath('src/js/pages/Home/Home-container.js')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
