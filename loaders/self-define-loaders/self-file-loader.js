const loaderUtils = require('loader-utils');

module.exports = function(content) {
  const options = loaderUtils.getOptions(this) || {};
  const context =
    options.context ||
    this.rootContext ||
    (this.options && this.options.context);
  const url = loaderUtils.interpolateName(this, options.name, {
    context,
    content,
    regExp: options.regExp
  });
  console.log(context, options.name, url, options.regExp);
  return '';
};

module.exports.raw = true;
