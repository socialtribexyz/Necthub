(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3073],{83666:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[profile]",function(){return s(90077)}])},43351:function(e,t,s){"use strict";s.d(t,{M:function(){return a},q:function(){return r}});var r=JSON.parse('{"80001":["0xe60E1650c6b97CA461eA689d6DBe0577936A77A0"]}'),a=JSON.parse('[{"type":"error","name":"Payments_ZeroBalance","inputs":[]},{"type":"event","anonymous":false,"name":"NewTips","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"timestamp","indexed":false},{"type":"string","name":"message","indexed":false}]},{"type":"function","name":"getTipsHistory","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"userAddress"}],"outputs":[{"type":"tuple[]","components":[{"type":"address","name":"from"},{"type":"uint256","name":"amount"},{"type":"string","name":"message"},{"type":"uint256","name":"timestamp"}]}]},{"type":"function","name":"profiles","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address"},{"type":"uint256"}],"outputs":[{"type":"address","name":"from"},{"type":"uint256","name":"amount"},{"type":"string","name":"message"},{"type":"uint256","name":"timestamp"}]},{"type":"function","name":"tip","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"tipAddress"},{"type":"string","name":"message"}],"outputs":[]},{"type":"function","name":"totalDonated","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"totalReceived","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address"}],"outputs":[{"type":"uint256"}]}]')},91215:function(e,t,s){"use strict";var r=s(43351),a=s(67976);let n=()=>{var e;let t=(0,a.yL)(),s=null!==(e=t._network.chainId)&&void 0!==e?e:80001,n=s in r.q?r.q[s][0]:null;return{contractAddress:n}};t.Z=n},90077:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return el},default:function(){return ei}});var r=s(85893),a=s(67294),n=s(27484),l=s.n(n),i=s(84110),d=s.n(i),o=s(11163),c=s(92432),u=s(18490),x=s(97951),m=s(72553),p=s(53731),h={defaultProfilePicture:"/assets/images/defaultAvatar.png",defaultCoverPicture:""},g=s(25675),j=s.n(g),f=s(86501),y=s(64444),v=s(81383),b=s(62469);let N=e=>{let{attributes:t=[],profileId:s=null,profileAddress:n}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-5 mt-2",children:[s?(0,r.jsxs)(r.Fragment,{children:[t.map(e=>(0,r.jsx)(a.Fragment,{children:{twitter:(0,r.jsx)("a",{className:"text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",target:"_BLANK",rel:"noopener noreferrer",href:"https://twitter.com/".concat(e.value),children:(0,r.jsx)("img",{src:"/assets/images/twitter.svg",className:"w-4 h-4",alt:""})}),website:(0,r.jsx)("a",{className:"text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",target:"_BLANK",rel:"noopener noreferrer",href:"".concat((0,m.CN)(e.value)),children:(0,r.jsx)(b.qDj,{})}),app:(0,r.jsx)("a",{className:"text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",target:"_BLANK",rel:"noopener noreferrer",href:"https://lenster.xyz/u/".concat(s),children:(0,r.jsx)("img",{src:"/assets/images/lenster.svg",className:"w-4 h-4",alt:""})})}[e.key]},e.key)),(0,r.jsx)("a",{className:"text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",target:"_BLANK",rel:"noopener noreferrer",href:"https://lenstube.xyz/".concat(s),children:(0,r.jsx)("img",{src:"/assets/images/lenstube.svg",className:"w-4 h-4",alt:""})})]}):null,(0,r.jsx)("a",{className:"text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-2 rounded-lg",target:"_BLANK",rel:"noopener noreferrer",href:"https://opensea.io/".concat(n),children:(0,r.jsx)("img",{src:"https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg",className:"w-4 h-4",alt:""})})]})};var w=s(60697);let A=e=>{let{id:t,image:s,content:a,createdAt:n}=e;return(0,r.jsxs)("article",{className:"bg-white rounded-lg p-2 mb-1 border",children:[s?(0,r.jsx)("img",{className:"rounded-lg mb-2",src:(0,m.e4)(s),alt:""}):null,(0,r.jsx)(w.D,{children:a}),n?(0,r.jsx)("p",{className:"text-sm text-gray-500",children:l()(n).fromNow()}):null]})},F=e=>{let{id:t}=e,[s,n]=(0,a.useState)([]),[l]=(0,c.aM)({query:u.Pv,variables:{id:t,limit:10}});return(0,a.useEffect)(()=>{l&&l.data&&l.data.publications&&n(l.data.publications.items)},[l]),(0,r.jsxs)(r.Fragment,{children:[(0,m.xb)(s)?(0,r.jsxs)("p",{className:"text-gray-500 text-center text-sm",children:["user doesn","'","t have a post yet!"]}):null,s.map(e=>{var t,s,a;return(0,r.jsx)(A,{id:e.id,image:null===(t=null===(s=e.metadata)||void 0===s?void 0:s.media[0])||void 0===t?void 0:null===(a=t.original)||void 0===a?void 0:a.url,content:e.metadata.content,createdAt:e.createdAt},e.id)})]})};l().extend(d());let _=e=>{let{ownerAddress:t}=e,[s,n]=(0,a.useState)([]),[l]=(0,c.aM)({query:u.F8,variables:{address:t}});return(0,a.useEffect)(()=>{l&&l.data&&l.data.nfts&&n(l.data.nfts.items)},[l]),(0,r.jsxs)("div",{children:[(0,m.xb)(s)?(0,r.jsxs)("p",{className:"text-gray-500 text-center text-sm",children:["user doesn","'","t have a NFT yet!"]}):null,(0,r.jsx)("div",{className:"grid grid-cols-2 gap-2",children:s.map(e=>(0,r.jsxs)("article",{className:"bg-white rounded-lg p-2 mb-1 border",children:[e.originalContent.uri?(0,r.jsx)("img",{height:125,className:"rounded-lg mb-2 bg-gray-100",src:(0,m.e4)(e.originalContent.uri),alt:""}):null,(0,r.jsx)("p",{className:"text-xs",children:e.name})]},e.originalContent.uri))})]})},P=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"bg-gray-50 rounded-lg p-5",children:t})};var T=s(36176),C=s(1238),B=s(67841),S=s(98903),E=s(67533),k=s(43351),q=s(67976),L=s(61744),Z=s(74855);let M=e=>{let{name:t,url:s}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("a",{href:s,target:"_BLANK",rel:"noreferrer noopener",type:"button",className:"inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:["twitter"==t&&(0,r.jsx)(b.S3E,{className:"mr-1"}),"Share"]})})},I=()=>{let e=(0,o.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex justify-between items-center",children:(0,r.jsxs)("h4",{className:"font-bold flex items-center mb-5",children:["hey",(0,r.jsx)("img",{src:"https://twemoji.maxcdn.com/svg/1f44b.svg",className:"w-4 h-4 ml-2"})]})}),(0,r.jsx)("p",{className:"text-gray-500 mb-5",children:"Share your profile ! Through this profile page, other users can tip you."}),(0,r.jsxs)("div",{className:"space-x-3",children:[(0,r.jsx)(M,{name:"twitter",url:"https://twitter.com/intent/tweet?text=Hey%20%0A%0Ahttps%3A%2F%2Fnectarhub.xyz".concat(e.asPath)}),(0,r.jsx)(Z.CopyToClipboard,{text:"https://nectarhub.xyz".concat(e.asPath),onCopy:()=>f.ZP.success("Copied!"),children:(0,r.jsxs)("a",{onClick:()=>{},type:"button",className:"inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer",children:[(0,r.jsx)(b.TIy,{className:"mr-1"}),"Copy"]})})]})]})};var D=s(91215),R=s(34155);let z=e=>{let{name:t,ownerAddress:s}=e;(0,q.yL)();let{address:a,connector:n}=(0,q.mA)(),{contractAddress:l}=(0,D.Z)(),i=(0,S.c)({initialValues:{coin:"matic",amount:5,message:""}}),d=(0,q.GG)({mode:"recklesslyUnprepared",address:l,abi:k.M,functionName:"tip",args:[s,i.values.message]});return a===s?(0,r.jsx)(I,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"md:flex justify-between items-center",children:[(0,r.jsxs)("h4",{className:"mb-3 md:mb-0 font-bold",children:["Buy a Coffee ",t?"for ".concat(t):null]}),(0,r.jsx)(E.Z,{})]}),R.env.NEXT_PUBLIC_TESTNET?(0,r.jsx)("span",{className:"text-xs ml-1 border border-gray-300 text-gray-600 rounded-lg px-1.5",children:"Testnet"}):null,(0,r.jsxs)("form",{className:"mt-5 relative",onSubmit:e=>{e.preventDefault(),d.write({recklesslySetUnpreparedOverrides:{value:L.parseUnits(String(i.values.amount),"ether")}})},children:[void 0===a?(0,r.jsx)("div",{className:"absolute w-full h-full grid place-items-center z-40 rounded text-gray-800",style:{background:"#ffffffc4"},children:"connect wallet to continue!"}):null,(0,r.jsxs)("div",{className:" ".concat(void 0===a?"p-5":"p-0","  space-y-3 "),children:[(0,r.jsx)("div",{className:"grid grid-cols-12 gap-5",children:(0,r.jsx)(T.Y,{icon:(0,r.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/matic.svg",alt:"",className:"w-5 h-5"}),value:1,step:1e-4,min:1e-4,className:"col-span-8",onChange:e=>{i.setFieldValue("amount",e)},hideControls:!0,noClampOnBlur:!0})}),(0,r.jsx)(C.g,{placeholder:"Your Message (optional)",onChange:e=>i.setFieldValue("message",e.target.value)}),(0,r.jsx)(B.z,{type:"submit",color:"dark",variant:"outline",fullWidth:!0,rightIcon:(0,r.jsx)("img",{className:"w-4 h-4",src:"https://twemoji.maxcdn.com/svg/1f64c.svg"}),children:"Tip"})]})]})]})},K=e=>{let{feed:t}=e,[s]=(0,c.aM)({query:u.Iw,variables:{request:{ownedBy:t.from}}});return(0,r.jsxs)("div",{className:"border bg-white rounded-lg p-2",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("div",{className:"text-sm",children:(0,m.Xn)(t.from)}),(0,r.jsxs)("span",{className:"text-gray-900 mr-1 bg-gray-100 rounded p-1 border text-xs flex items-center",children:[t.amount?String(L.formatEther(t.amount._hex)):"-",(0,r.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/matic.svg",alt:"",className:"w-4 h-4 ml-2"})]})]}),(0,r.jsx)("p",{className:"text-base",children:t.message})]})},O=e=>{let{ownerAddress:t}=e,{contractAddress:s}=(0,D.Z)(),{data:a,isError:n,isLoading:l}=(0,q.do)({address:s,abi:k.M,functionName:"getTipsHistory",args:[t]});return(0,r.jsx)("div",{className:"space-y-1",children:l&&a?"Loading":(0,r.jsx)(r.Fragment,{children:(0,m.xb)(a)?(0,r.jsxs)("p",{className:"text-gray-500 text-center text-sm",children:["Your Tip","'","s Feed is Empty! "]}):(0,r.jsx)(r.Fragment,{children:a&&(0,r.jsx)(r.Fragment,{children:null==a?void 0:a.map((e,t)=>(0,r.jsx)(K,{feed:e},e.from+t))})})})})},X=e=>{let{address:t}=e,s=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"text-center pt-3 text-xs text-gray-500 space-x-5 flex items-center justify-center",children:[(0,r.jsx)(Z.CopyToClipboard,{text:"https://nectarhub.xyz/".concat(s.asPath),onCopy:()=>f.ZP.success("Profile URL Copied!"),children:(0,r.jsx)("a",{className:"cursor-pointer hover:text-gray-900",children:"share"})}),(0,r.jsx)(Z.CopyToClipboard,{text:t,onCopy:()=>f.ZP.success("Copied!"),children:(0,r.jsx)("a",{className:"cursor-pointer hover:text-gray-900",children:"copy address"})}),(0,r.jsx)("a",{target:"_BLANK",href:"https://polygonscan.com/address/".concat(t),className:"cursor-pointer hover:text-gray-900",rel:"noreferrer noopener",children:"view explorer"})]})},U=e=>{let{ownerAddress:t}=e,{contractAddress:s}=(0,D.Z)(),{data:a,isError:n,isLoading:l}=(0,q.do)({address:s,abi:k.M,functionName:"totalDonated",args:[t]}),{data:i,isLoading:d,isError:o}=(0,q.do)({address:s,abi:k.M,functionName:"totalReceived",args:[t]});return l||d||n||o?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"text-gray-900 mr-1",children:l||n?"-":a._hex?String((0,m.uf)(L.formatEther(a._hex))):"-"}),"Donated"]}),(0,r.jsxs)("span",{children:[(0,r.jsxs)("span",{className:"text-gray-900 mr-1",children:[d||o?"-":i._hex?String((0,m.uf)(L.formatEther(i._hex))):"-"," "]}),"Received"]})]})};var V=s(87614);let W=(0,V.eI)({url:"https://arweave.net/graphql"}),H=e=>{let{postId:t}=e,[s,n]=(0,a.useState)(null),l=(0,o.useRouter)();return((0,a.useEffect)(()=>{t&&fetch("https://arweave.net/".concat(t)).then(e=>e.json()).then(e=>n(e))},[t]),null===s)?null:(0,r.jsx)("a",{href:"/blog/".concat(l.query.profile,"/").concat(t),target:"_BLANK",rel:"noreferrer noopener",children:(0,r.jsxs)("div",{className:"border bg-white rounded-lg p-2",children:[(0,r.jsx)("p",{className:"text-gray-900 mb-2",children:s.content.title}),(0,r.jsx)("p",{className:"text-sm text-gray-500 line-clamp-3",children:s.content.body})]})})},Y=e=>{let{address:t}=e,[s,n]=(0,a.useState)([]);return W.query(u.eS,{address:[t]}).toPromise().then(e=>{n(e.data.transactions.edges)}),(0,r.jsxs)("div",{children:[(0,m.xb)(s)?(0,r.jsx)("p",{className:"text-gray-500 text-center text-sm",children:"No blog posts found!"}):null,s.map(e=>(0,r.jsx)(H,{postId:e.node.id},e.node.id))]})};var G=s(47964);let J=e=>{let t="";return e.forEach(e=>{t+=" ".concat(e.total.value," ").concat(e.total.asset.symbol)}),t},Q=e=>{let{profileId:t}=e,[s]=(0,c.aM)({query:u.vg,variables:{request:{profileId:t}}});return s.fetching||0==s.data.profileFollowRevenue.revenues.length?null:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(G.Tooltip,{position:"bottom",sticky:!1,trigger:"mouseenter",size:"small",arrowSize:"small",offset:10,title:"".concat(J(s.data.profileFollowRevenue.revenues)),children:(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"text-gray-900 mr-1",children:s.data.profileFollowRevenue.revenues.length}),"Assets from Followers"]})})})};l().extend(d());let $=e=>{var t,s,n,l,i;let{profileId:d}=e,{address:g}=(0,q.mA)(),[b,w]=(0,a.useState)(null),A=(0,o.useRouter)(),[T]=(0,c.aM)({query:u.hZ,variables:{request:{handle:d}}});return(0,a.useEffect)(()=>{T&&A.isReady&&(void 0==T.data&&!0!==T.fetching&&(A.push("/"),f.ZP.error("Profile not found")),T.data&&T.data.profile&&w(T.data.profile))},[T]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{title:d,ogImage:"https://nectarhub.xyz/api/og?handle=".concat(d)}),(0,r.jsx)(v.Z,{loading:!b,children:b?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"pt-3 md:pt-8 pb-10",children:[(0,r.jsx)(y.Z,{title:A.query.profile}),(0,r.jsxs)("div",{className:"mx-auto max-w-screen-xl relative bg-white border rounded-lg",style:{maxWidth:"500px"},children:[(0,r.jsx)("div",{className:"bg-gray-100 rounded-t-lg relative w-full h-32 ",style:{background:"url('".concat((0,m.e4)(null===(t=b.coverPicture)||void 0===t?void 0:null===(s=t.original)||void 0===s?void 0:s.url,h.defaultCoverPicture),"')")},children:(0,r.jsx)("div",{className:"absolute avatar_wrapper",style:{right:"38%",top:"45px"},children:(0,r.jsx)(j(),{src:"".concat((0,m.e4)(null===(n=b.picture)||void 0===n?void 0:null===(l=n.original)||void 0===l?void 0:l.url,h.defaultProfilePicture)),alt:"",width:125,height:125,className:"rounded-full w-32 h-32 border-3 object-cover bg-gray-50"})})}),(0,r.jsxs)("div",{className:"text-center mt-14 mb-5",children:[(0,r.jsx)("b",{className:"text-xl",children:null!==(i=b.name)&&void 0!==i?i:b.handle}),(0,r.jsx)("p",{className:"text-gray-500 text-sm mt-2 p-1",children:(0,r.jsx)(p.Z,{componentDecorator:(e,t,s)=>(0,r.jsx)("a",{target:"_blank",rel:"noreferrer noopener",className:"hover:text-gray-900",href:e,children:t},s),children:b.bio})}),(0,r.jsxs)("p",{className:"text-gray-500 space-x-5 text-sm mt-2",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"text-gray-900 mr-1",children:b.stats.totalFollowers})," ","Followers"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"text-gray-900 mr-1",children:b.stats.totalFollowing})," ","Following"]}),g?(0,r.jsx)(U,{ownerAddress:b.ownedBy}):null,(0,r.jsx)(Q,{profileId:b.id})]}),(0,r.jsx)(N,{profileId:d,attributes:b.attributes,profileAddress:b.ownedBy})]}),(0,r.jsx)("div",{className:"gap-5 mb-8 px-2 md:px-5",children:(0,r.jsxs)(x.m,{color:"dark",variant:"pills",defaultValue:"tip",children:[(0,r.jsx)("div",{className:"grid place-items-center",children:(0,r.jsxs)(x.m.List,{children:[(0,r.jsx)(x.m.Tab,{value:"tip",children:g==b.ownedBy?"About":"Tip"}),g?(0,r.jsx)(x.m.Tab,{value:"feed",children:"Feed"}):null,(0,r.jsx)(x.m.Tab,{value:"posts",children:"Posts"}),(0,r.jsx)(x.m.Tab,{value:"blog",children:"Blog"}),(0,r.jsx)(x.m.Tab,{value:"nfts",children:"NFTs"})]})}),(0,r.jsx)(x.m.Panel,{value:"tip",pt:"xs",children:(0,r.jsx)(P,{children:b.ownedBy?(0,r.jsx)(z,{name:b.name,ownerAddress:b.ownedBy}):null})}),(0,r.jsx)(x.m.Panel,{value:"feed",pt:"xs",children:g?(0,r.jsx)(P,{children:b.ownedBy?(0,r.jsx)(O,{ownerAddress:b.ownedBy}):null}):null}),(0,r.jsx)(x.m.Panel,{value:"posts",pt:"xs",children:(0,r.jsx)(P,{children:(0,r.jsx)(F,{id:b.id})})}),(0,r.jsx)(x.m.Panel,{value:"blog",pt:"xs",children:(0,r.jsx)(P,{children:(0,r.jsx)(Y,{address:b.ownedBy})})}),(0,r.jsx)(x.m.Panel,{value:"nfts",pt:"xs",children:(0,r.jsx)(P,{children:(0,r.jsx)(_,{ownerAddress:b.ownedBy})})})]})})]}),(0,r.jsx)(X,{address:b.ownedBy})]})}):null})]})};var ee=s(52301),et=s(61099),es=s.n(et);l().extend(d());let er=e=>{let{profileAddress:t}=e,{address:s}=(0,q.mA)(),[n,l]=(0,a.useState)(null),[i]=(0,c.aM)({query:u.Iw,variables:{request:{ownedBy:t}}});return((0,a.useEffect)(()=>{var e;i&&(null==i?void 0:null===(e=i.data)||void 0===e?void 0:e.profiles)&&(null==i?void 0:i.data.profiles.items[0])&&l(null==i?void 0:i.data.profiles.items[0].handle)},[i]),n)?(0,r.jsx)($,{profileId:n}):(0,r.jsx)(v.Z,{loading:!!i.fetching,children:(0,r.jsxs)("div",{className:"pt-3 md:pt-8 pb-10",children:[(0,r.jsx)(y.Z,{title:(0,m.Xn)(t)}),(0,r.jsxs)("div",{className:"mx-auto max-w-screen-xl relative bg-white border rounded-lg",style:{maxWidth:"500px"},children:[(0,r.jsx)("div",{className:"bg-gray-100 rounded-t-lg relative w-full h-32 ",children:(0,r.jsx)("div",{className:"absolute avatar_wrapper",style:{right:"38%",top:"45px"},children:(0,r.jsx)(es(),{size:125,name:t,variant:"beam",colors:["#FD5D5D","#FF8080","#FFF7BC","#C0EDA6","#FF7D7D"]})})}),(0,r.jsxs)("div",{className:"text-center mt-14 mb-5",children:[(0,r.jsx)("b",{className:"text-xl",children:(0,m.Xn)(t)}),(0,r.jsx)("p",{className:"text-gray-500 space-x-5 text-sm mt-2",children:s?(0,r.jsx)(U,{ownerAddress:t}):null}),(0,r.jsx)(N,{profileId:null,attributes:[],profileAddress:t})]}),(0,r.jsx)("div",{className:"gap-5 mb-8 px-2 md:px-5",children:(0,r.jsxs)(x.m,{color:"dark",variant:"pills",defaultValue:"tip",children:[(0,r.jsx)("div",{className:"grid place-items-center",children:(0,r.jsxs)(x.m.List,{children:[(0,r.jsx)(x.m.Tab,{value:"tip",children:s==t?"About":"Tip"}),s?(0,r.jsx)(x.m.Tab,{value:"feed",children:"Feed"}):null,(0,r.jsx)(x.m.Tab,{value:"blog",children:"Blog"}),(0,r.jsx)(x.m.Tab,{value:"nfts",children:"NFTs"})]})}),(0,r.jsx)(x.m.Panel,{value:"tip",pt:"xs",children:(0,r.jsx)(P,{children:t?(0,r.jsx)(z,{name:"",ownerAddress:t}):null})}),(0,r.jsx)(x.m.Panel,{value:"feed",pt:"xs",children:s?(0,r.jsx)(P,{children:t?(0,r.jsx)(O,{ownerAddress:t}):null}):null}),(0,r.jsx)(x.m.Panel,{value:"blog",pt:"xs",children:(0,r.jsx)(P,{children:(0,r.jsx)(Y,{address:t})})}),(0,r.jsx)(x.m.Panel,{value:"nfts",pt:"xs",children:(0,r.jsx)(P,{children:(0,r.jsx)(_,{ownerAddress:t})})})]})})]}),(0,r.jsx)(X,{address:t})]})})},ea=e=>{let{ens:t}=e,{data:s,isError:a,isLoading:n}=(0,q.S4)({name:t,chainId:1,cacheTime:2e3});return(0,r.jsx)(v.Z,{loading:n,children:s?(0,r.jsx)(er,{profileAddress:s}):null})};l().extend(d());let en=e=>{let{profile:t}=e;return t?ee.isAddress(t)?(0,r.jsx)(er,{profileAddress:t}):String(t).endsWith(".eth")?(0,r.jsx)(ea,{ens:t}):(0,r.jsx)($,{profileId:t}):null};var el=!0,ei=en}},function(e){e.O(0,[9866,697,6408,5851,6669,9774,2888,179],function(){return e(e.s=83666)}),_N_E=e.O()}]);