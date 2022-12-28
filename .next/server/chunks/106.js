"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 9106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2553);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



const ViewProfileCard = ({ profile  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `${profile.handle}`,
        passHref: true,
        className: "border rounded-lg p-1.5 flex items-center bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: (0,libs_helpers__WEBPACK_IMPORTED_MODULE_2__/* .formatImageUrl */ .e4)(profile?.picture?.original?.url),
                className: "rounded-md w-10 h-10 mr-2 object-cover bg-gray-50"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-sm",
                children: [
                    profile.name ?? profile.handle,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xs w-60 text-gray-500 truncate",
                        children: profile.bio
                    })
                ]
            })
        ]
    }, profile.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewProfileCard);


/***/ })

};
;