module.exports = function(source) {
  const handleSource = `barWrap{${source}}`;
  return `export default ${JSON.stringify(handleSource)}`;
};
