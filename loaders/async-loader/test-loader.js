module.exports = function(source) {
  return `
    const e = document.createElement('style');
    e.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(e);
  `;
};
