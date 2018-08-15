module.exports = function(source) {
  console.log('handle 2');
  const handleSource = `multi-loader-2:{${source}}`;
  return handleSource;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('Pitch loader 2');
  // if (true) {
  //   return 'Loader 2 Pitch';
  // }
};
