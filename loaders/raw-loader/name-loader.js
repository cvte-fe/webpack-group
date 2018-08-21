const { getOptions } = require('loader-utils');

module.exports = function(source) {
  return `export default ${JSON.stringify(source)}`;
};

module.exports.raw = true;
