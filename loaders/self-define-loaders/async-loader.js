function someSyncOperation(content) {
  return content.split('').reverse().join('');
}

module.exports = function(content, map, data) {
  console.log(content, map, data);
  return someSyncOperation(content);
};

// module.exports = function(content) {
//   this.callback(null, someSyncOperation(content));
//   return; // 当调用 callback() 时总是返回 undefined
// };