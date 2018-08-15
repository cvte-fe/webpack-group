module.exports = function(source) {
  console.log('handle 3');
  const handleSource = `multi-loader-3:{${source}}`;
  return `export default ${JSON.stringify(handleSource)}`;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('Pitch loader 3');
  // if (true) {
  //   return `module.exports = 'Loader 3 Pitch'`;
  // }
};
