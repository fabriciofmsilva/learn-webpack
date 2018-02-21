webpackJsonp([1],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_helper_module__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_helper_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__my_helper_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharedModule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharedModule___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sharedModule__);




console.log('Welcome! Greetings from app.js. Let\'s learn Webpack2');

console.log(__WEBPACK_IMPORTED_MODULE_1__my_helper_module__["greetings"]);

const arr = [1, 2, 3];
__WEBPACK_IMPORTED_MODULE_0_lodash__["each"](arr, val => {
    console.log('Output from Lodash _.each for Element ' + val);
});


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
    greetings: 'Hello from my-helper-module!'
};


/***/ })

},[2]);