module.exports = function(source) {
  // this.async();

  // setTimeout(() => {
  //   console.log(source);
  //   this.callback(null, source);
  // }, 5e3);

  syncWait();
  console.log(source);
  return source;
};


function syncWait(wait = 5e3) {
  const start = Date.now();
  while((Date.now() - start) < wait) {
    void 0;
  }
}