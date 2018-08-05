module.exports = function(source) {
  const handleSource = JSON.stringify(source);
  return `module.exports = '${handleSource}'`;
};
