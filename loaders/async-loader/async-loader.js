function someAsyncOperation(content, callback) {
  setTimeout(() => {
    // const err = new Error('Accident');
    const err = null;
    callback(err, `module.exports = '${content.split('').join('%')}'`);
  }, 5000);
}

// 异步模式loader
module.exports = function(content, map, meta) {
  const callback = this.async();
  someAsyncOperation(content, function(err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });
};