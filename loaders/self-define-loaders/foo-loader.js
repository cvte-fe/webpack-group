module.exports = function(source) {
  const handleSource = `fooWrap{${source}}`;
  return handleSource;
};
