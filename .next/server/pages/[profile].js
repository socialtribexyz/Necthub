"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 9028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urql_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2112);
/* harmony import */ var graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8490);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2553);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_urql_core__WEBPACK_IMPORTED_MODULE_1__]);
_urql_core__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const client = (0,_urql_core__WEBPACK_IMPORTED_MODULE_1__.createClient)({
    url: "https://arweave.net/graphql"
});
const Post = ({ postId  })=>{
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (postId) {
            fetch(`https://arweave.net/${postId}`).then((res)=>res.json()).then((res)=>setPost(res));
        }
    }, [
        postId
    ]);
    if (post === null) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: `/blog/${router.query.profile}/${postId}`,
        target: "_BLANK",
        rel: "noreferrer noopener",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "border bg-white rounded-lg p-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-gray-900 mb-2",
                    children: post.content.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm text-gray-500 line-clamp-3",
                    children: post.content.body
                })
            ]
        })
    });
};
const BlogPost = ({ address  })=>{
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    client.query(graphql_queries__WEBPACK_IMPORTED_MODULE_2__/* .GetBlogPost */ .eS, {
        address: [
            address
        ]
    }).toPromise().then((result)=>{
        setPosts(result.data.transactions.edges);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            (0,libs_helpers__WEBPACK_IMPORTED_MODULE_5__/* .isEmpty */ .xb)(posts) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-gray-500 text-center text-sm",
                children: "No blog posts found!"
            }) : null,
            posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Post, {
                    postId: post.node.id
                }, post.node.id))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1383);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Profile__WEBPACK_IMPORTED_MODULE_3__]);
_Profile__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ENSProfile = ({ ens  })=>{
    const { data , isError , isLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useEnsAddress)({
        name: ens,
        chainId: 1,
        cacheTime: 2000
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        loading: isLoading,
        children: data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Profile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            profileAddress: data
        }) : null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ENSProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2977);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2553);
/* harmony import */ var boring_avatars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5573);
/* harmony import */ var boring_avatars__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(boring_avatars__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Layout_PageTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4444);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1383);
/* harmony import */ var components_Profile_Lens_ShowSocialAccounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9192);
/* harmony import */ var components_Profile_Lens_ShowNFTs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var _ProfileCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5038);
/* harmony import */ var _Tip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2808);
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5748);
/* harmony import */ var _ProfileFooter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9119);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ProfileTipsStats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8597);
/* harmony import */ var _BlogPost__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9028);
/* harmony import */ var _Lens_Profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3052);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Tip__WEBPACK_IMPORTED_MODULE_13__, _ProfileFooter__WEBPACK_IMPORTED_MODULE_15__, _BlogPost__WEBPACK_IMPORTED_MODULE_18__, _Lens_Profile__WEBPACK_IMPORTED_MODULE_19__]);
([_Tip__WEBPACK_IMPORTED_MODULE_13__, _ProfileFooter__WEBPACK_IMPORTED_MODULE_15__, _BlogPost__WEBPACK_IMPORTED_MODULE_18__, _Lens_Profile__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















dayjs__WEBPACK_IMPORTED_MODULE_5___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6___default()));
const EthProfile = ({ profileAddress  })=>{
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_16__.useAccount)();
    const [lensHandle, setLendsHandle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [result] = (0,urql__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        query: graphql_queries__WEBPACK_IMPORTED_MODULE_2__/* .UserProfile */ .Iw,
        variables: {
            request: {
                ownedBy: profileAddress
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (result && result?.data?.profiles) {
            if (result?.data.profiles.items[0]) setLendsHandle(result?.data.profiles.items[0].handle);
        }
    }, [
        result
    ]);
    if (lensHandle) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Lens_Profile__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        profileId: lensHandle
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        loading: result.fetching ? true : false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "pt-3 md:pt-8 pb-10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_PageTitle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    title: (0,libs_helpers__WEBPACK_IMPORTED_MODULE_20__/* .shortenAddress */ .Xn)(profileAddress)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto max-w-screen-xl relative bg-white border rounded-lg",
                    style: {
                        maxWidth: "500px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-gray-100 rounded-t-lg relative w-full h-32 ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute avatar_wrapper",
                                style: {
                                    right: "38%",
                                    top: "45px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((boring_avatars__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    size: 125,
                                    name: profileAddress,
                                    variant: "beam",
                                    colors: [
                                        "#FD5D5D",
                                        "#FF8080",
                                        "#FFF7BC",
                                        "#C0EDA6",
                                        "#FF7D7D"
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center mt-14 mb-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    className: "text-xl",
                                    children: (0,libs_helpers__WEBPACK_IMPORTED_MODULE_20__/* .shortenAddress */ .Xn)(profileAddress)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-gray-500 space-x-5 text-sm mt-2",
                                    children: address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileTipsStats__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        ownerAddress: profileAddress
                                    }) : null
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Lens_ShowSocialAccounts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    profileId: null,
                                    attributes: [],
                                    profileAddress: profileAddress
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "gap-5 mb-8 px-2 md:px-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
                                color: "dark",
                                variant: "pills",
                                defaultValue: "tip",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grid place-items-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.List, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Tab, {
                                                    value: "tip",
                                                    children: address == profileAddress ? "About" : "Tip"
                                                }),
                                                address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Tab, {
                                                    value: "feed",
                                                    children: "Feed"
                                                }) : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Tab, {
                                                    value: "blog",
                                                    children: "Blog"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Tab, {
                                                    value: "nfts",
                                                    children: "NFTs"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Panel, {
                                        value: "tip",
                                        pt: "xs",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            children: profileAddress ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                name: "",
                                                ownerAddress: profileAddress
                                            }) : null
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Panel, {
                                        value: "feed",
                                        pt: "xs",
                                        children: address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            children: profileAddress ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Feed__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                ownerAddress: profileAddress
                                            }) : null
                                        }) : null
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Panel, {
                                        value: "blog",
                                        pt: "xs",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogPost__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                address: profileAddress
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Tabs.Panel, {
                                        value: "nfts",
                                        pt: "xs",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Lens_ShowNFTs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                ownerAddress: profileAddress
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileFooter__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    address: profileAddress
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EthProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3351);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2553);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2977);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8490);
/* harmony import */ var hooks_useContractAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1215);








const FeedItem = ({ feed  })=>{
    const [result] = (0,urql__WEBPACK_IMPORTED_MODULE_4__.useQuery)({
        query: graphql_queries__WEBPACK_IMPORTED_MODULE_5__/* .UserProfile */ .Iw,
        variables: {
            request: {
                ownedBy: feed["from"]
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border bg-white rounded-lg p-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-sm",
                        children: (0,libs_helpers__WEBPACK_IMPORTED_MODULE_7__/* .shortenAddress */ .Xn)(feed["from"])
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-gray-900 mr-1 bg-gray-100 rounded p-1 border text-xs flex items-center",
                        children: [
                            feed["amount"] ? String(ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(feed["amount"]._hex)) : "-",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/matic.svg",
                                alt: "",
                                className: "w-4 h-4 ml-2"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-base",
                children: feed["message"]
            })
        ]
    });
};
const Feed = ({ ownerAddress  })=>{
    const { contractAddress  } = (0,hooks_useContractAddress__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { data , isError , isLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractRead)({
        address: contractAddress,
        abi: constants_index__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .M,
        functionName: "getTipsHistory",
        args: [
            ownerAddress
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "space-y-1",
        children: isLoading && data ? "Loading" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: (0,libs_helpers__WEBPACK_IMPORTED_MODULE_7__/* .isEmpty */ .xb)(data) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-gray-500 text-center text-sm",
                children: [
                    "Your Tip",
                    "'",
                    "s Feed is Empty! "
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: data?.map((feed, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedItem, {
                            feed: feed
                        }, feed["from"] + index);
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);


/***/ }),

/***/ 3052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2977);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2553);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3826);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(929);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6201);
/* harmony import */ var components_Layout_PageTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4444);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1383);
/* harmony import */ var components_Profile_Lens_ShowSocialAccounts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9192);
/* harmony import */ var components_Profile_Lens_ShowPost__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4309);
/* harmony import */ var components_Profile_Lens_ShowNFTs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37);
/* harmony import */ var _ProfileCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5038);
/* harmony import */ var _Tip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2808);
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5748);
/* harmony import */ var _ProfileFooter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9119);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ProfileTipsStats__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8597);
/* harmony import */ var _BlogPost__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9028);
/* harmony import */ var _ProfileRevenue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8152);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_11__, components_Profile_Lens_ShowPost__WEBPACK_IMPORTED_MODULE_15__, _Tip__WEBPACK_IMPORTED_MODULE_18__, _ProfileFooter__WEBPACK_IMPORTED_MODULE_20__, _BlogPost__WEBPACK_IMPORTED_MODULE_23__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_11__, components_Profile_Lens_ShowPost__WEBPACK_IMPORTED_MODULE_15__, _Tip__WEBPACK_IMPORTED_MODULE_18__, _ProfileFooter__WEBPACK_IMPORTED_MODULE_20__, _BlogPost__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























dayjs__WEBPACK_IMPORTED_MODULE_6___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7___default()));
const LensProfile = ({ profileId  })=>{
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_21__.useAccount)();
    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [result] = (0,urql__WEBPACK_IMPORTED_MODULE_2__.useQuery)({
        query: graphql_queries__WEBPACK_IMPORTED_MODULE_3__/* .GetProfilesQuery */ .hZ,
        variables: {
            request: {
                handle: profileId
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (result && router.isReady) {
            if (result.data == undefined && result.fetching !== true) {
                router.push("/");
                react_hot_toast__WEBPACK_IMPORTED_MODULE_11__["default"].error("Profile not found");
            }
            if (result.data && result.data.profile) {
                setProfile(result.data.profile);
            }
        }
    }, [
        result
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_PageTitle__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: profileId,
                ogImage: `https://nectarhub.xyz/api/og?handle=${profileId}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                loading: profile ? false : true,
                children: profile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-3 md:pt-8 pb-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_PageTitle__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                title: router.query.profile
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mx-auto max-w-screen-xl relative bg-white border rounded-lg",
                                style: {
                                    maxWidth: "500px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-gray-100 rounded-t-lg relative w-full h-32 ",
                                        style: {
                                            background: `url('${(0,libs_helpers__WEBPACK_IMPORTED_MODULE_25__/* .formatImageUrl */ .e4)(profile.coverPicture?.original?.url, _config__WEBPACK_IMPORTED_MODULE_9__/* ["default"].defaultCoverPicture */ .Z.defaultCoverPicture)}')`
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute avatar_wrapper",
                                            style: {
                                                right: "38%",
                                                top: "45px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                src: `${(0,libs_helpers__WEBPACK_IMPORTED_MODULE_25__/* .formatImageUrl */ .e4)(profile.picture?.original?.url, _config__WEBPACK_IMPORTED_MODULE_9__/* ["default"].defaultProfilePicture */ .Z.defaultProfilePicture)}`,
                                                alt: "",
                                                width: 125,
                                                height: 125,
                                                className: "rounded-full w-32 h-32 border-3 object-cover bg-gray-50"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center mt-14 mb-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                className: "text-xl",
                                                children: profile.name ?? profile.handle
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-gray-500 text-sm mt-2 p-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_linkify__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    componentDecorator: (decoratedHref, decoratedText, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer noopener",
                                                            className: "hover:text-gray-900",
                                                            href: decoratedHref,
                                                            children: decoratedText
                                                        }, key),
                                                    children: profile.bio
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-gray-500 space-x-5 text-sm mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-gray-900 mr-1",
                                                                children: profile.stats.totalFollowers
                                                            }),
                                                            " ",
                                                            "Followers"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-gray-900 mr-1",
                                                                children: profile.stats.totalFollowing
                                                            }),
                                                            " ",
                                                            "Following"
                                                        ]
                                                    }),
                                                    address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileTipsStats__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                        ownerAddress: profile.ownedBy
                                                    }) : null,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileRevenue__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                        profileId: profile.id
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Lens_ShowSocialAccounts__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                profileId: profileId,
                                                attributes: profile.attributes,
                                                profileAddress: profile.ownedBy
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "gap-5 mb-8 px-2 md:px-5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs, {
                                            color: "dark",
                                            variant: "pills",
                                            defaultValue: "tip",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "grid place-items-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.List, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Tab, {
                                                                value: "tip",
                                                                children: address == profile.ownedBy ? "About" : "Tip"
                                                            }),
                                                            address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Tab, {
                                                                value: "feed",
                                                                children: "Feed"
                                                            }) : null,
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Tab, {
                                                                value: "posts",
                                                                children: "Posts"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Tab, {
                                                                value: "blog",
                                                                children: "Blog"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Tab, {
                                                                value: "nfts",
                                                                children: "NFTs"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Panel, {
                                                    value: "tip",
                                                    pt: "xs",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        children: profile.ownedBy ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tip__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                            name: profile.name,
                                                            ownerAddress: profile.ownedBy
                                                        }) : null
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Panel, {
                                                    value: "feed",
                                                    pt: "xs",
                                                    children: address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        children: profile.ownedBy ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Feed__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                            ownerAddress: profile.ownedBy
                                                        }) : null
                                                    }) : null
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Panel, {
                                                    value: "posts",
                                                    pt: "xs",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Lens_ShowPost__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                            id: profile.id
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Panel, {
                                                    value: "blog",
                                                    pt: "xs",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogPost__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                            address: profile.ownedBy
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Tabs.Panel, {
                                                    value: "nfts",
                                                    pt: "xs",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileCard__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Lens_ShowNFTs__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                            ownerAddress: profile.ownedBy
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileFooter__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                address: profile.ownedBy
                            })
                        ]
                    })
                }) : null
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LensProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Lens_ProfileRevenue)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/graphql/queries.ts
var queries = __webpack_require__(8490);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "urql"
var external_urql_ = __webpack_require__(2977);
;// CONCATENATED MODULE: external "react-tippy"
const external_react_tippy_namespaceObject = require("react-tippy");
;// CONCATENATED MODULE: ./src/components/Profile/Lens/ProfileRevenue.tsx





const revenueAssetsLabel = (revenues)=>{
    let label = "";
    revenues.forEach((asset)=>{
        label += ` ${asset.total.value} ${asset.total.asset.symbol}`;
    });
    return label;
};
const ProfileRevenue = ({ profileId  })=>{
    const [result] = (0,external_urql_.useQuery)({
        query: queries/* GetProfilesRevenueQuery */.vg,
        variables: {
            request: {
                profileId: profileId
            }
        }
    });
    if (result.fetching) return null;
    if (result.data.profileFollowRevenue.revenues.length == 0) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_tippy_namespaceObject.Tooltip, {
            position: "bottom",
            sticky: false,
            trigger: "mouseenter",
            size: "small",
            arrowSize: "small",
            offset: 10,
            title: `${revenueAssetsLabel(result.data.profileFollowRevenue.revenues)}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-gray-900 mr-1",
                        children: result.data.profileFollowRevenue.revenues.length
                    }),
                    "Assets from Followers"
                ]
            })
        })
    });
};
/* harmony default export */ const Lens_ProfileRevenue = (ProfileRevenue);


/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2977);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2553);







dayjs__WEBPACK_IMPORTED_MODULE_4___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5___default()));
const ShowNFTs = ({ ownerAddress  })=>{
    const [nfts, setNFT] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [result] = (0,urql__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        query: graphql_queries__WEBPACK_IMPORTED_MODULE_2__/* .GetNfts */ .F8,
        variables: {
            address: ownerAddress
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (result && result.data && result.data.nfts) {
            setNFT(result.data.nfts.items);
        }
    }, [
        result
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            (0,libs_helpers__WEBPACK_IMPORTED_MODULE_6__/* .isEmpty */ .xb)(nfts) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-gray-500 text-center text-sm",
                children: [
                    "user doesn",
                    "'",
                    "t have a NFT yet!"
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-2 gap-2",
                children: nfts.map((nft)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                        className: "bg-white rounded-lg p-2 mb-1 border",
                        children: [
                            nft.originalContent.uri ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                height: 125,
                                className: "rounded-lg mb-2 bg-gray-100",
                                src: (0,libs_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatImageUrl */ .e4)(nft.originalContent.uri),
                                alt: ""
                            }) : null,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xs",
                                children: nft.name
                            })
                        ]
                    }, nft.originalContent.uri))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowNFTs);


/***/ }),

/***/ 4309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2977);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2553);
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PostCard__WEBPACK_IMPORTED_MODULE_4__]);
_PostCard__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ShowPost = ({ id  })=>{
    const [posts, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [result] = (0,urql__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        query: graphql_queries__WEBPACK_IMPORTED_MODULE_2__/* .GetPosts */ .Pv,
        variables: {
            id: id,
            limit: 10
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (result && result.data && result.data.publications) {
            setPost(result.data.publications.items);
        }
    }, [
        result
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (0,libs_helpers__WEBPACK_IMPORTED_MODULE_5__/* .isEmpty */ .xb)(posts) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-gray-500 text-center text-sm",
                children: [
                    "user doesn",
                    "'",
                    "t have a post yet!"
                ]
            }) : null,
            posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    id: post.id,
                    image: post.metadata?.media[0]?.original?.url,
                    content: post.metadata.content,
                    createdAt: post.createdAt
                }, post.id))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2132);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2553);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const ShowSocialAccounts = ({ attributes =[] , profileId =null , profileAddress  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-center space-x-5 mt-2",
        children: [
            profileId ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    attributes.map((attribute)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                            children: {
                                twitter: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",
                                    target: "_BLANK",
                                    rel: "noopener noreferrer",
                                    href: `https://twitter.com/${attribute.value}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/images/twitter.svg",
                                        className: "w-4 h-4",
                                        alt: ""
                                    })
                                }),
                                website: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",
                                    target: "_BLANK",
                                    rel: "noopener noreferrer",
                                    href: `${(0,libs_helpers__WEBPACK_IMPORTED_MODULE_3__/* .formatUrl */ .CN)(attribute.value)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__.Link2Icon, {})
                                }),
                                app: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",
                                    target: "_BLANK",
                                    rel: "noopener noreferrer",
                                    href: `https://lenster.xyz/u/${profileId}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/images/lenster.svg",
                                        className: "w-4 h-4",
                                        alt: ""
                                    })
                                })
                            }[attribute.key]
                        }, attribute.key);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",
                        target: "_BLANK",
                        rel: "noopener noreferrer",
                        href: `https://lenstube.xyz/${profileId}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/images/lenstube.svg",
                            className: "w-4 h-4",
                            alt: ""
                        })
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",
                target: "_BLANK",
                rel: "noopener noreferrer",
                href: `https://opensea.io/${profileAddress}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg",
                    className: "w-4 h-4",
                    alt: ""
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowSocialAccounts);


/***/ }),

/***/ 3268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2132);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2807);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ShareButton = ({ name , url  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: url,
            target: "_BLANK",
            rel: "noreferrer noopener",
            type: "button",
            className: "inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            children: [
                name == "twitter" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__.TwitterLogoIcon, {
                    className: "mr-1"
                }),
                "Share"
            ]
        })
    });
};
const Owner = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-between items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    className: "font-bold flex items-center mb-5",
                    children: [
                        "hey",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://twemoji.maxcdn.com/svg/1f44b.svg",
                            className: "w-4 h-4 ml-2"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-gray-500 mb-5",
                children: "Share your profile ! Through this profile page, other users can tip you."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-x-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareButton, {
                        name: "twitter",
                        url: `https://twitter.com/intent/tweet?text=Hey%20%0A%0Ahttps%3A%2F%2Fnectarhub.xyz${router.asPath}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, {
                        text: `https://nectarhub.xyz${router.asPath}`,
                        onCopy: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Copied!"),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            onClick: ()=>{},
                            type: "button",
                            className: "inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_1__.CopyIcon, {
                                    className: "mr-1"
                                }),
                                "Copy"
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Owner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2553);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);
react_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Post = ({ id , image , content , createdAt  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "bg-white rounded-lg p-2 mb-1 border",
        children: [
            image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "rounded-lg mb-2",
                src: (0,libs_helpers__WEBPACK_IMPORTED_MODULE_3__/* .formatImageUrl */ .e4)(image),
                alt: ""
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                children: content
            }),
            createdAt ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-gray-500",
                children: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(createdAt).fromNow()
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ProfileCard = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-gray-50 rounded-lg p-5",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileCard);


/***/ }),

/***/ 9119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2807);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ProfileFooter = ({ address  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-center pt-3 text-xs text-gray-500 space-x-5 flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, {
                text: `https://nectarhub.xyz/${router.asPath}`,
                onCopy: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Profile URL Copied!"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "cursor-pointer hover:text-gray-900",
                    children: "share"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, {
                text: address,
                onCopy: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Copied!"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "cursor-pointer hover:text-gray-900",
                    children: "copy address"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_BLANK",
                href: `https://polygonscan.com/address/${address}`,
                className: "cursor-pointer hover:text-gray-900",
                rel: "noreferrer noopener",
                children: "view explorer"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileFooter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3351);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useContractAddress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1215);
/* harmony import */ var libs_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2553);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);






const ProfileTipsStats = ({ ownerAddress  })=>{
    const { contractAddress  } = (0,hooks_useContractAddress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { data , isError , isLoading  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)({
        address: contractAddress,
        abi: constants_index__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .M,
        functionName: "totalDonated",
        args: [
            ownerAddress
        ]
    });
    const { data: received , isLoading: isReceivedLoading , isError: isReceivedError  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useContractRead)({
        address: contractAddress,
        abi: constants_index__WEBPACK_IMPORTED_MODULE_1__/* .abi */ .M,
        functionName: "totalReceived",
        args: [
            ownerAddress
        ]
    });
    if (isLoading || isReceivedLoading) return null;
    if (isError || isReceivedError) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-gray-900 mr-1",
                        children: !isLoading && !isError ? data._hex ? String((0,libs_helpers__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(data._hex))) : "-" : "-"
                    }),
                    "Donated"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-gray-900 mr-1",
                        children: [
                            !isReceivedLoading && !isReceivedError ? received._hex ? String((0,libs_helpers__WEBPACK_IMPORTED_MODULE_5__/* .formatNumber */ .uf)(ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(received._hex))) : "-" : "-",
                            " "
                        ]
                    }),
                    "Received"
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileTipsStats);


/***/ }),

/***/ 2808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9445);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Layout_ConnectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7533);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3351);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Owner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3268);
/* harmony import */ var hooks_useContractAddress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_ConnectButton__WEBPACK_IMPORTED_MODULE_3__, _Owner__WEBPACK_IMPORTED_MODULE_7__]);
([components_Layout_ConnectButton__WEBPACK_IMPORTED_MODULE_3__, _Owner__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Tip = ({ name , ownerAddress  })=>{
    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useProvider)();
    const { address , connector  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)();
    const { contractAddress  } = (0,hooks_useContractAddress__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const form = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        initialValues: {
            coin: "matic",
            amount: 5,
            message: ""
        }
    });
    const contract = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useContractWrite)({
        mode: "recklesslyUnprepared",
        address: contractAddress,
        abi: constants_index__WEBPACK_IMPORTED_MODULE_4__/* .abi */ .M,
        functionName: "tip",
        args: [
            ownerAddress,
            form.values.message
        ]
    });
    if (address === ownerAddress) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Owner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "md:flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                        className: "mb-3 md:mb-0 font-bold",
                        children: [
                            "Buy a Coffee ",
                            name ? `for ${name}` : null
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_ConnectButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            }),
            process.env.NEXT_PUBLIC_TESTNET ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-xs ml-1 border border-gray-300 text-gray-600 rounded-lg px-1.5",
                children: "Testnet"
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "mt-5 relative",
                onSubmit: (e)=>{
                    e.preventDefault();
                    contract.write({
                        recklesslySetUnpreparedOverrides: {
                            value: ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.parseUnits(String(form.values.amount), "ether")
                        }
                    });
                },
                children: [
                    address === undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute w-full h-full grid place-items-center z-40 rounded text-gray-800",
                        style: {
                            background: "#ffffffc4"
                        },
                        children: "connect wallet to continue!"
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: ` ${address === undefined ? "p-5" : "p-0"}  space-y-3 `,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-12 gap-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.NumberInput, {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/matic.svg",
                                        alt: "",
                                        className: "w-5 h-5"
                                    }),
                                    value: 1,
                                    step: 0.0001,
                                    min: 0.0001,
                                    className: "col-span-8",
                                    onChange: (val)=>{
                                        form.setFieldValue("amount", val);
                                    },
                                    hideControls: true,
                                    noClampOnBlur: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Textarea, {
                                placeholder: "Your Message (optional)",
                                onChange: (e)=>form.setFieldValue("message", e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                type: "submit",
                                color: "dark",
                                variant: "outline",
                                fullWidth: true,
                                rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-4 h-4",
                                    src: "https://twemoji.maxcdn.com/svg/1f64c.svg"
                                }),
                                children: "Tip"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tip);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Settings = {
    defaultProfilePicture: "/assets/images/defaultAvatar.png",
    defaultCoverPicture: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);


/***/ }),

/***/ 4919:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Profile_Lens_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3052);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Profile_Eth_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(934);
/* harmony import */ var components_Profile_Eth_ENSProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(107);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Profile_Lens_Profile__WEBPACK_IMPORTED_MODULE_4__, components_Profile_Eth_Profile__WEBPACK_IMPORTED_MODULE_6__, components_Profile_Eth_ENSProfile__WEBPACK_IMPORTED_MODULE_7__]);
([components_Profile_Lens_Profile__WEBPACK_IMPORTED_MODULE_4__, components_Profile_Eth_Profile__WEBPACK_IMPORTED_MODULE_6__, components_Profile_Eth_ENSProfile__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








dayjs__WEBPACK_IMPORTED_MODULE_2___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default()));
const Profile = ({ profile  })=>{
    if (!profile) return null;
    if (ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.isAddress(profile)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Eth_Profile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            profileAddress: profile
        });
    }
    if (String(profile).endsWith(".eth")) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Eth_ENSProfile__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            ens: profile
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Profile_Lens_Profile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        profileId: profile
    });
};
async function getServerSideProps(context) {
    return {
        props: {
            profile: context.query.profile
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 9445:
/***/ ((module) => {

module.exports = require("@mantine/form");

/***/ }),

/***/ 2132:
/***/ ((module) => {

module.exports = require("@radix-ui/react-icons");

/***/ }),

/***/ 5573:
/***/ ((module) => {

module.exports = require("boring-avatars");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2807:
/***/ ((module) => {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 3826:
/***/ ((module) => {

module.exports = require("react-linkify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2977:
/***/ ((module) => {

module.exports = require("urql");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 2112:
/***/ ((module) => {

module.exports = import("@urql/core");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,444,168,383,533,215], () => (__webpack_exec__(4919)));
module.exports = __webpack_exports__;

})();