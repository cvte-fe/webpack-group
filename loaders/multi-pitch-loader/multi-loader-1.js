module.exports = function(source) {
  console.log('handle 1');
  const handleSource = `multi-loader-1:{${source}}`;
  return handleSource;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('Pitch loader 1');
  if (true) {
    return 'Loader 1 Pitch';
  }
};
