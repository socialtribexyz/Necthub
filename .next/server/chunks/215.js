"use strict";
exports.id = 215;
exports.ids = [215];
exports.modules = {

/***/ 3351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* reexport */ abi_namespaceObject),
  "q": () => (/* reexport */ contractAddresses_namespaceObject)
});

;// CONCATENATED MODULE: ./src/constants/contractAddresses.json
const contractAddresses_namespaceObject = JSON.parse('{"80001":["0xe60E1650c6b97CA461eA689d6DBe0577936A77A0"]}');
;// CONCATENATED MODULE: ./src/constants/abi.json
const abi_namespaceObject = JSON.parse('[{"type":"error","name":"Payments_ZeroBalance","inputs":[]},{"type":"event","anonymous":false,"name":"NewTips","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"timestamp","indexed":false},{"type":"string","name":"message","indexed":false}]},{"type":"function","name":"getTipsHistory","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"userAddress"}],"outputs":[{"type":"tuple[]","components":[{"type":"address","name":"from"},{"type":"uint256","name":"amount"},{"type":"string","name":"message"},{"type":"uint256","name":"timestamp"}]}]},{"type":"function","name":"profiles","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address"},{"type":"uint256"}],"outputs":[{"type":"address","name":"from"},{"type":"uint256","name":"amount"},{"type":"string","name":"message"},{"type":"uint256","name":"timestamp"}]},{"type":"function","name":"tip","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"tipAddress"},{"type":"string","name":"message"}],"outputs":[]},{"type":"function","name":"totalDonated","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"totalReceived","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address"}],"outputs":[{"type":"uint256"}]}]');
;// CONCATENATED MODULE: ./src/constants/index.ts





/***/ }),

/***/ 1215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3351);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);


const useContractAddress = ()=>{
    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useProvider)();
    const chainId = provider._network.chainId ?? 80001;
    const contractAddress = chainId in constants_index__WEBPACK_IMPORTED_MODULE_0__/* .contractAddresses */ .q ? constants_index__WEBPACK_IMPORTED_MODULE_0__/* .contractAddresses */ .q[chainId][0] : null;
    return {
        contractAddress
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useContractAddress);


/***/ })

};
;