(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RandomComponent = {}, global.React));
}(this, (function (exports, React) { 'use strict';

  var RandomComponent = function RandomComponent() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hi I am a random component"));
  };

  exports.RandomComponent = RandomComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
