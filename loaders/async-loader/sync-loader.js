function someSyncOperation(content) {
  return `module.exports = '${content.split('').join('#')}'`;
}

// 同步模式loader
module.exports = function(content, map, data) {
  return someSyncOperation(content);
};

module.exports = function(content) {  
  this.callback(null, someSyncOperation(content));
  return;
};
