(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ RouterTransition)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@mantine/nprogress"
const nprogress_namespaceObject = require("@mantine/nprogress");
;// CONCATENATED MODULE: ./src/components/Layout/RouterTransition.tsx




function RouterTransition() {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleStart = (url)=>url !== router.asPath && (0,nprogress_namespaceObject.startNavigationProgress)();
        const handleComplete = ()=>(0,nprogress_namespaceObject.completeNavigationProgress)();
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(nprogress_namespaceObject.NavigationProgress, {
        color: "yellow",
        autoReset: true
    });
}


/***/ }),

/***/ 3935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export HeaderVisibleRoutes */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2132);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ConnectButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7533);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ConnectButton__WEBPACK_IMPORTED_MODULE_5__]);
_ConnectButton__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const HeaderVisibleRoutes = [
    "/",
    "/dashboard",
    "/explore",
    "/thanks",
    "/feedback",
    "/privacy",
    "/contact",
    "/embed"
];
const HeaderNavigation = [
    {
        link: "/",
        label: "Home"
    },
    {
        link: "/explore",
        label: "Explore"
    },
    {
        link: "/dashboard",
        label: "Dashboard",
        authenticated: true
    }
];
const HeaderLink = ({ nav , active  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: nav.link,
        passHref: true,
        className: `hover:bg-gray-100 font-bold text-gray-500 hover:text-gray-900 text-sm  px-4 py-2 rounded-full cursor-pointer  ${active ? "bg-gray-100" : ""}`,
        children: nav.label
    }, nav.link);
};
const Layout = ({ children  })=>{
    const { address , isConnecting , isDisconnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://rsms.me/inter/inter.css"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: router.asPath === "/" ? "main-section md:min-h-screen" : "bg-gray-50 min-h-screen",
                children: [
                    HeaderVisibleRoutes.includes(router.asPath) && address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-7 w-full z-50 fixed md:hidden bottom-0 p-1 border-t border-gray-200 bg-white shadow dark:bg-brand-primary ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {
                                link: "/dashboard",
                                className: "col-span-3",
                                active: router.asPath.includes("dashboard"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__.DashboardIcon, {
                                    className: "w-5 h-5"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {
                                link: "/explore",
                                className: "col-span-3",
                                active: router.asPath.includes("portfolio"),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__.GlobeIcon, {
                                    className: "w-5 h-5"
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto max-w-screen-xl px-1 md:px-4 sm:px-6 relative ",
                        children: [
                            HeaderVisibleRoutes.includes(router.asPath) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "py-5 md:py-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/",
                                                passHref: true,
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://nectarhub.xyz/assets/images/logo.svg",
                                                        className: "w-32 pl-2 md:pl-0 md:w-32 md:h-32",
                                                        alt: ""
                                                    }),
                                                    process.env.NEXT_PUBLIC_TESTNET ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-xs ml-1 border border-gray-300 text-gray-600 rounded-lg px-1.5",
                                                        children: "Testnet"
                                                    }) : null
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-end md:justify-start items-center md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                                    className: "hidden md:flex items-center bg-white border rounded-full px-2 py-2 space-x-2 shadow-sm ml-0 mr-0",
                                                    children: [
                                                        HeaderNavigation.map((nav)=>{
                                                            if (nav.authenticated) {
                                                                if (address) {
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderLink, {
                                                                        nav: nav,
                                                                        active: router.asPath === nav.link
                                                                    }, nav.link);
                                                                }
                                                            } else {
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderLink, {
                                                                    nav: nav,
                                                                    active: router.asPath === nav.link
                                                                }, nav.link);
                                                            }
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConnectButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "md:hidden",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConnectButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }) : null,
                            children,
                            HeaderVisibleRoutes.includes(router.asPath) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                    className: "mt-8 py-4 pb-8 text-sm border-t border-gray-100 text-center text-gray-500 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "md:space-x-5 space-y-2 md:space-y-0 grid grid-cols-2 md:flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    href: "/feedback",
                                                    passHref: true,
                                                    children: "Feedback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://discord.gg/F27NTNP9",
                                                    target: "_BLANK",
                                                    rel: "noopener noreferrer",
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    children: "Discord"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://nectarhub.xyz/jijin.lens",
                                                    target: "_BLANK",
                                                    rel: "noreferrer",
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    children: "Donate"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://github.com/Nectarhub/",
                                                    target: "_BLANK",
                                                    rel: "noreferrer",
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    children: "Github"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://app.splitbee.io/public/nectarhub.xyz",
                                                    target: "_BLANK",
                                                    rel: "noreferrer",
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    children: "Analytics"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/embed",
                                                    passHref: true,
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    children: "Embed"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/thanks",
                                                    passHref: true,
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    children: "Thanks"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/contact",
                                                    passHref: true,
                                                    className: "px-2 text-gray-500 hover:text-gray-900 cursor-pointer",
                                                    children: "Contact"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-xs text-center text-gray-500 flex items-center justify-center",
                                            children: [
                                                "Made with",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "https://twemoji.maxcdn.com/svg/1f33f.svg",
                                                    alt: "",
                                                    className: "w-6 h-6 mx-2"
                                                }),
                                                "by",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://twitter.com/pjijin_",
                                                    target: "_BLANK",
                                                    rel: "noreferrer",
                                                    className: "pl-2",
                                                    children: "@pjijin_"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
};
const MobileNav = ({ children , link , className ="" , active =false  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        passHref: true,
        href: link,
        className: `p-3 ${active ? "text-gray-900 " : "text-gray-400 "}  text-center hover:bg-gray-100  rounded flex items-center justify-center cursor-pointer ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kQ": () => (/* binding */ wagmiClient),
/* harmony export */   "p5": () => (/* binding */ chains)
/* harmony export */ });
/* unused harmony exports provider, connectors */
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6921);
/* harmony import */ var _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7045);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1176);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const avalancheChain = {
    id: 43114,
    name: "Avalanche",
    network: "avalanche",
    iconUrl: "https://cryptologotypes.com/img/logos/avalanche/avalanche-avax-logo.svg",
    nativeCurrency: {
        decimals: 18,
        name: "Avalanche",
        symbol: "AVAX"
    },
    rpcUrls: {
        default: "https://api.avax.network/ext/bc/C/rpc"
    },
    blockExplorers: {
        default: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        },
        etherscan: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        }
    },
    testnet: false
};
const binanceSmartChain = {
    id: 56,
    name: "Binance",
    network: "binance",
    iconUrl: "https://cryptologotypes.com/img/logos/binance-coin/binance-coin-bnb-logo.svg",
    nativeCurrency: {
        decimals: 18,
        name: "Binance Coin",
        symbol: "BNB"
    },
    rpcUrls: {
        default: "https://bsc-dataseed.binance.org/"
    },
    blockExplorers: {
        default: {
            name: "BSCScan",
            url: "https://bscscan.com/"
        },
        etherscan: {
            name: "BSCScan",
            url: "https://bscscan.com/"
        }
    },
    testnet: false
};
const ftmChain = {
    id: 250,
    name: "Fantom",
    network: "fantom",
    iconUrl: "https://cryptologotypes.com/img/logos/fantom/fantom-ftm-logo.svg",
    nativeCurrency: {
        decimals: 18,
        name: "Fantom",
        symbol: "FTM"
    },
    rpcUrls: {
        default: "https://rpc.ftm.tools/"
    },
    blockExplorers: {
        default: {
            name: "FTMScan",
            url: "https://ftmscan.com/"
        },
        etherscan: {
            name: "FTMScan",
            url: "https://ftmscan.com/"
        }
    },
    testnet: false
};
const polygonMumbaiTestnet = {
    id: 80001,
    name: "Mumbai Testnet",
    // iconUrl: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/matic.svg",
    network: "polgon_mumbai",
    // nativeCurrency: {
    //     decimals: 18,
    //     name: 'MATIC',
    //     symbol: 'MATIC',
    // },
    rpcUrls: {
        default: "https://rpc-mumbai.maticvigil.com/"
    }
};
const moonbeanChain = {
    id: 1284,
    network: "moonbeam",
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/6836.png",
    name: "Moonbeam",
    nativeCurrency: {
        decimals: 18,
        name: "GLMR",
        symbol: "GLMR"
    },
    rpcUrls: {
        default: "https://rpc.api.moonbeam.network"
    },
    blockExplorers: {
        default: {
            name: "Moonscan",
            url: "https://moonscan.io"
        },
        etherscan: {
            name: "Moonscan",
            url: "https://moonscan.io"
        }
    },
    testnet: false
};
const moonriverChain = {
    id: 1285,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9285.png",
    name: "Moonriver",
    network: "moonriver",
    nativeCurrency: {
        decimals: 18,
        name: "MOVR",
        symbol: "MOVR"
    },
    rpcUrls: {
        default: "https://rpc.api.moonriver.moonbeam.network"
    },
    blockExplorers: {
        default: {
            name: "Moonscan",
            url: "https://moonriver.moonscan.io/"
        },
        etherscan: {
            name: "Moonscan",
            url: "https://moonriver.moonscan.io/"
        }
    },
    testnet: false
};
const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([
    polygonMumbaiTestnet
], [
    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__.jsonRpcProvider)({
        rpc: (chain)=>({
                http: chain.rpcUrls.default
            })
    })
]);
const connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.connectorsForWallets)([
    {
        groupName: "Recommended",
        wallets: [
            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__.injectedWallet)({
                chains
            }),
            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__.coinbaseWallet)({
                appName: "App",
                chains
            }),
            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__.walletConnectWallet)({
                chains
            })
        ]
    },
    {
        groupName: "More",
        wallets: [
            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__.ledgerWallet)({
                chains
            }),
            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__.trustWallet)({
                chains
            }),
            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_1__.rainbowWallet)({
                chains
            })
        ]
    }
]);
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({
    autoConnect: true,
    connectors,
    provider
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2977);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3935);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_RouterTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6734);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6921);
/* harmony import */ var libs_connectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4293);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5053);
/* harmony import */ var react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_tippy_dist_tippy_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(204);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(600);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__, libs_connectors__WEBPACK_IMPORTED_MODULE_7__]);
([components_Layout__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__, libs_connectors__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const client = (0,urql__WEBPACK_IMPORTED_MODULE_1__.createClient)({
    url: "https://api.lens.dev"
});
const myCache = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.createEmotionCache)({
    key: "sac"
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(urql__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        value: client,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MantineProvider, {
            emotionCache: myCache,
            withGlobalStyles: true,
            withNormalizeCSS: true,
            theme: {
                /** Put your mantine theme override here */ colorScheme: "light"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_13___default()), {
                    async: true,
                    src: "https://cdn.splitbee.io/sb.js"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {
                    containerClassName: "text-sm"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_RouterTransition__WEBPACK_IMPORTED_MODULE_4__/* .RouterTransition */ .W, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiConfig, {
                    client: libs_connectors__WEBPACK_IMPORTED_MODULE_7__/* .wagmiClient */ .kQ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.RainbowKitProvider, {
                        chains: libs_connectors__WEBPACK_IMPORTED_MODULE_7__/* .chains */ .p5,
                        modalSize: "compact",
                        appInfo: {
                            appName: "Nectarhub.xyz"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 204:
/***/ (() => {



/***/ }),

/***/ 5053:
/***/ (() => {



/***/ }),

/***/ 600:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3573)


/***/ }),

/***/ 2247:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ 2132:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-icons");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2977:
/***/ ((module) => {

"use strict";
module.exports = require("urql");

/***/ }),

/***/ 8906:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ 1176:
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 6921:
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 7045:
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit/wallets");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,573,676,664,533], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();