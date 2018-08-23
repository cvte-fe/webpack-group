module.exports = function(source) {
  return `
    const e = document.createElement('style');
    e.innerHTML = ${JSON.stringify(source + '@test2')};
    document.head.appendChild(e);
  `;
};
