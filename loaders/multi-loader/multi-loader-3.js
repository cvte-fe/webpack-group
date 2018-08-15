module.exports = function(source) {
  const handleSource = `multi-loader-3:{${source}}`;
  return `export default ${JSON.stringify(handleSource)}`;
};
