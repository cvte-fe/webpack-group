const less = require('less');
module.exports = function(source) {
  const callback = this.async();
  less.render(source, (e, output) => {
    setTimeout(() => {
      callback(e, output.css);
      // callback(e, output.css);
    }, 2000);
  });
};
