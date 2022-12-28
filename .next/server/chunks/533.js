"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 7533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ConnectButtonLink = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton.Custom, {
            children: ({ account , chain , openAccountModal , openChainModal , openConnectModal , authenticationStatus , mounted  })=>{
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: (()=>{
                        if (!connected) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: openConnectModal,
                                className: "hover:bg-gray-100 font-bold text-gray-500 hover:text-gray-900 text-sm px-4 py-2 rounded-full cursor-pointer",
                                children: "Connect Wallet"
                            });
                        }
                        if (chain.unsupported) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: openChainModal,
                                className: "hover:bg-gray-100 font-bold text-gray-500 hover:text-gray-900 text-sm px-4 py-2 rounded-full cursor-pointer",
                                children: "Wrong network"
                            });
                        }
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: openChainModal,
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    className: " font-bold text-gray-500 hover:text-gray-900 text-sm rounded-full cursor-pointer",
                                    children: chain.hasIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            background: chain.iconBackground,
                                            width: 20,
                                            height: 20,
                                            borderRadius: 999,
                                            overflow: "hidden",
                                            marginRight: 4
                                        },
                                        children: chain.iconUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            alt: chain.name ?? "Chain icon",
                                            src: chain.iconUrl,
                                            style: {
                                                width: 20,
                                                height: 20
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: openAccountModal,
                                    className: "hover:bg-gray-100 font-bold text-gray-500 hover:text-gray-900 text-sm px-4 py-2 rounded-full cursor-pointer",
                                    children: account.displayName
                                })
                            ]
                        });
                    })()
                });
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectButtonLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;