(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });

    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }

  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.r = function(exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
  };
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  return __webpack_require__('./index.js');
})({
  './bar.js': function(module, __webpack_exports__, __webpack_require__) {
    'use strict';
    __webpack_require__.r(__webpack_exports__);

    function bar() {
      return 7;
    }
    __webpack_exports__['default'] = bar;
  },
  './index.js': function(module, __webpack_exports__, __webpack_require__) {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    var _bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./bar.js');
    __webpack_exports__['default'] = Object(
      _bar_js__WEBPACK_IMPORTED_MODULE_0__['default']
    )();
  }
});
