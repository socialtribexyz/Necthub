(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3288],{91838:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed",function(){return n(3850)}])},61060:function(e,t,n){"use strict";var a=n(85893);let r=e=>{let{title:t,className:n="",children:r}=e;return(0,a.jsxs)("div",{className:"bg-white rounded-lg p-5 shadow ".concat(n),children:[(0,a.jsx)("h5",{className:"text-l font-medium",children:t}),r]})};t.Z=r},64444:function(e,t,n){"use strict";var a=n(85893),r=n(9008),o=n.n(r);let s=e=>{let{title:t,ogImage:n=null}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:null!=t?t:"Nectarhub"}),(0,a.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,a.jsx)("meta",{name:"author",content:"Nectarhub"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/images/sac_icon.svg",type:"image/png"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffc547"}),(0,a.jsx)("meta",{name:"msapplication-navbutton-color",content:"#ffc547"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"#ffc547"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{name:"description",content:"Tip easily from nectarhub profile and tell everyone about your achievements."}),(0,a.jsx)("meta",{name:"keywords",content:"blockchain, portfolio tracker, transaction analyze"}),(0,a.jsx)("meta",{itemProp:"name",content:"Share you lens profile.! Collect payments!"}),(0,a.jsx)("meta",{itemProp:"image",content:null!=n?n:"https://nectarhub.xyz/assets/images/og_image.jpeg"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@Nectarhub_app"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@Nectarhub_app"}),(0,a.jsx)("meta",{name:"twitter:image",content:null!=n?n:"https://nectarhub.xyz/assets/images/og_image.jpeg"}),(0,a.jsx)("meta",{property:"og:title",content:"Share you lens profile. ! Collect payments!"}),(0,a.jsx)("meta",{property:"og:type",content:"article"}),(0,a.jsx)("meta",{property:"og:url",content:"https://nectarhub.xyz/"}),(0,a.jsx)("meta",{property:"og:image",content:null!=n?n:"https://nectarhub.xyz/assets/images/og_image.jpeg"}),(0,a.jsx)("meta",{property:"og:description",content:"Tip easily from nectarhub profile and tell everyone about your achievements."}),(0,a.jsx)("meta",{property:"og:site_name",content:"Nectarhub"}),(0,a.jsx)("meta",{property:"article:section",content:"Article Section"}),(0,a.jsx)("meta",{property:"article:tag",content:"Article Tag"}),(0,a.jsx)("meta",{property:"fb:admins",content:"1212"}),(0,a.jsx)("meta",{name:"next-head-count",content:"33"})]})})};t.Z=s},3850:function(e,t,n){"use strict";n.r(t),n.d(t,{CodeBlock:function(){return y}});var a=n(85893),r=n(86501),o=n(74855),s=n(61060),c=n(95078),i=n(38818),l=n(1890),p=n(44991),d=n(96824),u=n(64444),m=n(98903),h=n(67294);n(4298);let x=[{property:"data-username",description:"Your lens handle",type:"string",required:!0},{property:"data-button-color",description:"Set the colour of the widget button. Eg: #333",type:"hex code"},{property:"data-hide-bubble",description:"Hide the widget bubble",type:"boolean"},{property:"data-hide-donate-text",description:"Hide the donate text",type:"boolean"},{property:"data-donate-text",description:"Text for the donation button",type:"string"},{property:"data-icon",description:"Icon on the widget. You can specify crypto currency symbol. Eg: ETH",type:"string"}],y=e=>{let{code:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.CopyToClipboard,{text:"#FFC546",onCopy:()=>r.ZP.success("Code Copied"),children:(0,a.jsx)("code",{className:"block mb-5 bg-gray-800 rounded text-gray-300 p-2 text-sm",children:t})})})},b=()=>{var e;let[t,n]=(0,h.useState)(""),r=(0,m.c)({initialValues:{"data-username":"Your_Lens_Handle","data-button-color":null,"data-hide-bubble":null,"data-hide-donate-text":null,"data-donate-text":null,"data-icon":null}});return(0,h.useEffect)(()=>{let e=Object.keys(r.values).map(e=>{if(null!==r.values[e])return"".concat(e,'="').concat(r.values[e],'"')}).join().replace(/,/g," ").trim();n(e)},[r.values]),(0,a.jsxs)(s.Z,{title:"Embed",children:[(0,a.jsx)(u.Z,{title:"Embed Widget"}),(0,a.jsxs)("div",{className:"mt-5",children:[(0,a.jsx)("p",{className:"mb-5",children:"Include javascript code on your HTML page"}),(0,a.jsx)(d.p,{language:"javascript",children:'<script type="text/javascript" src="https://nectarhub.xyz/embed.js" '.concat(t," ></script>")}),(0,a.jsx)("h5",{className:"font-medium my-4",children:"Options"}),(0,a.jsx)(c.i,{striped:!0,children:(0,a.jsx)("tbody",{children:x.map(t=>(0,a.jsxs)("tr",{children:[(0,a.jsxs)("td",{children:[t.property,(0,a.jsx)("span",{className:"border ml-2 px-1 py-.5 text-xs border-gray-400 rounded text-gray-500",children:t.type})]}),(0,a.jsxs)("td",{children:[t.description,". ","  "," ",t.required?"(required field)":""]}),(0,a.jsxs)("td",{children:["hex code"===t.type?(0,a.jsx)(i.z,{swatchesPerRow:14,format:"hex",onChange:e=>r.setFieldValue(t.property,e),swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5","#228be6","#15aabf","#12b886","#40c057","#82c91e","#fab005","#fd7e14"]}):null,"boolean"===t.type?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.r,{checked:r.values[t.property],onChange:e=>r.setFieldValue(t.property,e.target.checked)})}):null,"string"===t.type?(0,a.jsx)(p.o,{value:null!==(e=r.values[t.property])&&void 0!==e?e:"",onChange:e=>r.setFieldValue(t.property,e.target.value)}):null]})]},t.property))})})]})]})};t.default=b}},function(e){e.O(0,[9866,6408,2017,9774,2888,179],function(){return e(e.s=91838)}),_N_E=e.O()}]);