(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6408],{89893:function(e,r,t){"use strict";t.d(r,{H:function(){return n}});var o=t(56817);let n={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var a=(0,o.k)((e,{spacing:r,position:t,noWrap:o,grow:a,align:l,count:i})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:l||"center",flexWrap:o?"nowrap":"wrap",justifyContent:n[t],gap:e.fn.size({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:a?`calc(${100/i}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/i}px)`:void 0,flexGrow:a?1:0}}}));r.Z=a},94151:function(e,r,t){"use strict";t.d(r,{I:function(){return eR}});var o=t(67294),n=t(58495),a=t(48427),l=t(56817),i=(0,l.k)((e,{size:r})=>({label:{display:"inline-block",fontSize:e.fn.size({size:r,sizes:e.fontSizes}),fontWeight:500,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[9],wordBreak:"break-word",cursor:"default",WebkitTapHighlightColor:"transparent"},required:{color:e.fn.variant({variant:"filled",color:"red"}).background}})),c=t(7414),s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&b(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&b(e,t,r[t]);return e},y=(e,r)=>{var t={};for(var o in e)f.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&u)for(var o of u(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t};let m={labelElement:"label",size:"sm"},v=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("InputLabel",m,e),{labelElement:a,children:l,required:s,size:u,classNames:f,styles:p,unstyled:b,className:v,htmlFor:g,__staticSelector:O}=t,h=y(t,["labelElement","children","required","size","classNames","styles","unstyled","className","htmlFor","__staticSelector"]),{classes:w,cx:j}=i({size:u},{name:["InputWrapper",O],classNames:f,styles:p,unstyled:b});return o.createElement(c.x,d({component:a,ref:r,className:j(w.label,v),htmlFor:"label"===a?g:void 0},h),l,s&&o.createElement("span",{className:w.required,"aria-hidden":!0}," *"))});v.displayName="@mantine/core/InputLabel";var g=(0,l.k)((e,{size:r})=>({error:{wordBreak:"break-word",color:e.fn.variant({variant:"filled",color:"red"}).background,fontSize:e.fn.size({size:r,sizes:e.fontSizes})-2,lineHeight:1.2,display:"block"}})),O=t(95117),h=Object.defineProperty,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))j.call(r,t)&&x(e,t,r[t]);if(w)for(var t of w(r))P.call(r,t)&&x(e,t,r[t]);return e},E=(e,r)=>{var t={};for(var o in e)j.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&w)for(var o of w(e))0>r.indexOf(o)&&P.call(e,o)&&(t[o]=e[o]);return t};let S={size:"sm"},C=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("InputError",S,e),{children:a,className:l,classNames:i,styles:c,unstyled:s,size:u,__staticSelector:f}=t,p=E(t,["children","className","classNames","styles","unstyled","size","__staticSelector"]),{classes:b,cx:d}=g({size:u},{name:["InputWrapper",f],classNames:i,styles:c,unstyled:s});return o.createElement(O.x,k({className:d(b.error,l),ref:r},p),a)});C.displayName="@mantine/core/InputError";var I=(0,l.k)((e,{size:r})=>({description:{wordBreak:"break-word",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],fontSize:e.fn.size({size:r,sizes:e.fontSizes})-2,lineHeight:1.2,display:"block"}})),N=Object.defineProperty,T=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?N(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&R(e,t,r[t]);if(T)for(var t of T(r))z.call(r,t)&&R(e,t,r[t]);return e},A=(e,r)=>{var t={};for(var o in e)D.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&T)for(var o of T(e))0>r.indexOf(o)&&z.call(e,o)&&(t[o]=e[o]);return t};let $={size:"sm"},L=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("InputDescription",$,e),{children:a,className:l,classNames:i,styles:c,unstyled:s,size:u,__staticSelector:f}=t,p=A(t,["children","className","classNames","styles","unstyled","size","__staticSelector"]),{classes:b,cx:d}=I({size:u},{name:["InputWrapper",f],classNames:i,styles:c,unstyled:s});return o.createElement(O.x,_({color:"dimmed",className:d(b.description,l),ref:r,unstyled:s},p),a)});L.displayName="@mantine/core/InputDescription";let W=(0,o.createContext)({offsetBottom:!1,offsetTop:!1,describedBy:void 0}),M=W.Provider,B=()=>(0,o.useContext)(W);var H=Object.defineProperty,q=Object.defineProperties,F=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,X=(e,r,t)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Z=(e,r)=>{for(var t in r||(r={}))K.call(r,t)&&X(e,t,r[t]);if(U)for(var t of U(r))V.call(r,t)&&X(e,t,r[t]);return e},G=(e,r)=>q(e,F(r)),J=(0,l.k)(e=>({root:G(Z({},e.fn.fontStyles()),{lineHeight:e.lineHeight})})),Q=Object.defineProperty,Y=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable,en=(e,r,t)=>r in e?Q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ea=(e,r)=>{for(var t in r||(r={}))et.call(r,t)&&en(e,t,r[t]);if(er)for(var t of er(r))eo.call(r,t)&&en(e,t,r[t]);return e},el=(e,r)=>Y(e,ee(r)),ei=(e,r)=>{var t={};for(var o in e)et.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&er)for(var o of er(e))0>r.indexOf(o)&&eo.call(e,o)&&(t[o]=e[o]);return t};let ec={labelElement:"label",size:"sm",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},es=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("InputWrapper",ec,e),{className:a,label:l,children:i,required:s,id:u,error:f,description:p,labelElement:b,labelProps:d,descriptionProps:y,errorProps:m,classNames:g,styles:O,size:h,inputContainer:w,__staticSelector:j,unstyled:P,inputWrapperOrder:x,withAsterisk:k}=t,E=ei(t,["className","label","children","required","id","error","description","labelElement","labelProps","descriptionProps","errorProps","classNames","styles","size","inputContainer","__staticSelector","unstyled","inputWrapperOrder","withAsterisk"]),{classes:S,cx:I}=J(null,{classNames:g,styles:O,name:["InputWrapper",j],unstyled:P}),N={classNames:g,styles:O,unstyled:P,size:h,__staticSelector:j},T=u?`${u}-error`:null==m?void 0:m.id,D=u?`${u}-description`:null==y?void 0:y.id,z=`${f&&"boolean"!=typeof f?T:""} ${p?D:""}`,R=z.trim().length>0?z.trim():void 0,_=l&&o.createElement(v,ea(ea({key:"label",labelElement:b,id:u?`${u}-label`:void 0,htmlFor:u,required:"boolean"==typeof k?k:s},N),d),l),A=p&&o.createElement(L,el(ea(ea({key:"description"},y),N),{size:(null==y?void 0:y.size)||N.size,id:(null==y?void 0:y.id)||D}),p),$=o.createElement(o.Fragment,{key:"input"},w(i)),W="boolean"!=typeof f&&f&&o.createElement(C,el(ea(ea({},m),N),{size:(null==m?void 0:m.size)||N.size,key:"error",id:(null==m?void 0:m.id)||T}),f),B=x.map(e=>{switch(e){case"label":return _;case"input":return $;case"description":return A;case"error":return W;default:return null}});return o.createElement(M,{value:ea({describedBy:R},function(e,{hasDescription:r,hasError:t}){let o=e.findIndex(e=>"input"===e),n=e[o-1],a=e[o+1];return{offsetBottom:r&&"description"===a||t&&"error"===a,offsetTop:r&&"description"===n||t&&"error"===n}}(x,{hasDescription:!!A,hasError:!!W}))},o.createElement(c.x,ea({className:I(S.root,a),ref:r},E),B))});es.displayName="@mantine/core/InputWrapper";var eu=t(97818),ef=Object.defineProperty,ep=Object.getOwnPropertySymbols,eb=Object.prototype.hasOwnProperty,ed=Object.prototype.propertyIsEnumerable,ey=(e,r,t)=>r in e?ef(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,em=(e,r)=>{for(var t in r||(r={}))eb.call(r,t)&&ey(e,t,r[t]);if(ep)for(var t of ep(r))ed.call(r,t)&&ey(e,t,r[t]);return e},ev=(e,r)=>{var t={};for(var o in e)eb.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ep)for(var o of ep(e))0>r.indexOf(o)&&ed.call(e,o)&&(t[o]=e[o]);return t};let eg={},eO=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("InputPlaceholder",eg,e),{sx:a}=t,l=ev(t,["sx"]);return o.createElement(c.x,em({component:"span",sx:[e=>e.fn.placeholderStyles(),...(0,eu.R)(a)],ref:r},l))});eO.displayName="@mantine/core/InputPlaceholder";var eh=t(35227),ew=t(12756),ej=Object.defineProperty,eP=Object.defineProperties,ex=Object.getOwnPropertyDescriptors,ek=Object.getOwnPropertySymbols,eE=Object.prototype.hasOwnProperty,eS=Object.prototype.propertyIsEnumerable,eC=(e,r,t)=>r in e?ej(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eI=(e,r)=>{for(var t in r||(r={}))eE.call(r,t)&&eC(e,t,r[t]);if(ek)for(var t of ek(r))eS.call(r,t)&&eC(e,t,r[t]);return e},eN=(e,r)=>eP(e,ex(r)),eT=(e,r)=>{var t={};for(var o in e)eE.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ek)for(var o of ek(e))0>r.indexOf(o)&&eS.call(e,o)&&(t[o]=e[o]);return t};let eD={rightSectionWidth:36,size:"sm",variant:"default"},ez=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Input",eD,e),{className:a,invalid:l,required:i,disabled:s,variant:u,icon:f,style:p,rightSectionWidth:b,iconWidth:d,rightSection:y,rightSectionProps:m,radius:v,size:g,wrapperProps:O,classNames:h,styles:w,__staticSelector:j,multiline:P,sx:x,unstyled:k,pointer:E}=t,S=eT(t,["className","invalid","required","disabled","variant","icon","style","rightSectionWidth","iconWidth","rightSection","rightSectionProps","radius","size","wrapperProps","classNames","styles","__staticSelector","multiline","sx","unstyled","pointer"]),{offsetBottom:C,offsetTop:I,describedBy:N}=B(),{classes:T,cx:D}=(0,eh.Z)({radius:v,size:g,multiline:P,variant:u,invalid:l,rightSectionWidth:b,iconWidth:d,withRightSection:!!y,offsetBottom:C,offsetTop:I,pointer:E},{classNames:h,styles:w,name:["Input",j],unstyled:k}),{systemStyles:z,rest:R}=(0,ew.x)(S);return o.createElement(c.x,eI(eI({className:D(T.wrapper,a),sx:x,style:p},z),O),f&&o.createElement("div",{className:T.icon},f),o.createElement(c.x,eN(eI({component:"input"},R),{ref:r,required:i,"aria-invalid":l,"aria-describedby":N,disabled:s,className:D(T[`${u}Variant`],T.input,{[T.withIcon]:f,[T.invalid]:l,[T.disabled]:s})})),y&&o.createElement("div",eN(eI({},m),{className:T.rightSection}),y))});ez.displayName="@mantine/core/Input",ez.Wrapper=es,ez.Label=v,ez.Description=L,ez.Error=C,ez.Placeholder=eO;let eR=(0,a.F)(ez)},97951:function(e,r,t){"use strict";t.d(r,{m:function(){return eN}});var o=t(67294),n=t(58495);let a={context:"Tabs component was not found in the tree",value:"Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value"},[l,i]=function(e){let r=(0,o.createContext)(null),t=()=>{let t=(0,o.useContext)(r);if(null===t)throw Error(e);return t},n=({children:e,value:t})=>o.createElement(r.Provider,{value:t},e);return[n,t]}(a.context);var c=t(56817),s=t(89893),u=Object.defineProperty,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&d(e,t,r[t]);if(f)for(var t of f(r))b.call(r,t)&&d(e,t,r[t]);return e},m=(0,c.k)((e,r)=>{let t="vertical"===r.orientation;return{tabsList:y({display:"flex",flexWrap:"wrap",flexDirection:t?"column":"row",justifyContent:s.H[r.position],'& [role="tab"]':{flex:r.grow?1:void 0}},function({variant:e,orientation:r,inverted:t,placement:o},n){let a="vertical"===r;return"default"===e?{[a?"left"===o?"borderRight":"borderLeft":t?"borderTop":"borderBottom"]:`2px solid ${"dark"===n.colorScheme?n.colors.dark[4]:n.colors.gray[3]}`}:"outline"===e?{[a?"left"===o?"borderRight":"borderLeft":t?"borderTop":"borderBottom"]:`1px solid ${"dark"===n.colorScheme?n.colors.dark[4]:n.colors.gray[3]}`}:"pills"===e?{gap:`calc(${n.spacing.sm}px / 2)`}:{}}(r,e))}}),v=t(7414),g=Object.defineProperty,O=Object.defineProperties,h=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))j.call(r,t)&&x(e,t,r[t]);if(w)for(var t of w(r))P.call(r,t)&&x(e,t,r[t]);return e},E=(e,r)=>O(e,h(r)),S=(e,r)=>{var t={};for(var o in e)j.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&w)for(var o of w(e))0>r.indexOf(o)&&P.call(e,o)&&(t[o]=e[o]);return t};let C={grow:!1,position:"left"},I=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("TabsList",C,e),{children:a,className:l,grow:c,position:s}=t,u=S(t,["children","className","grow","position"]),{orientation:f,variant:p,color:b,radius:d,inverted:y,placement:g,classNames:O,styles:h,unstyled:w}=i(),{classes:j,cx:P}=m({orientation:f,grow:c,variant:p,color:b,position:s,radius:d,inverted:y,placement:g},{name:"Tabs",unstyled:w,classNames:O,styles:h});return o.createElement(v.x,E(k({},u),{className:P(j.tabsList,l),ref:r,role:"tablist","aria-orientation":f}),a)});I.displayName="@mantine/core/TabsList";var N=t(97818),T=(0,c.k)((e,{orientation:r})=>({panel:{flex:"vertical"===r?1:void 0}})),D=Object.defineProperty,z=Object.defineProperties,R=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,L=(e,r,t)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,W=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&L(e,t,r[t]);if(_)for(var t of _(r))$.call(r,t)&&L(e,t,r[t]);return e},M=(e,r)=>z(e,R(r)),B=(e,r)=>{var t={};for(var o in e)A.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&_)for(var o of _(e))0>r.indexOf(o)&&$.call(e,o)&&(t[o]=e[o]);return t};let H={},q=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("TabsPanel",H,e),{value:a,children:l,sx:c,className:s}=t,u=B(t,["value","children","sx","className"]),f=i(),{classes:p,cx:b}=T({orientation:f.orientation,variant:f.variant,color:f.color,radius:f.radius,inverted:f.inverted,placement:f.placement},{name:"Tabs",unstyled:f.unstyled,classNames:f.classNames,styles:f.styles}),d=f.value===a,y=f.keepMounted?l:d?l:null;return o.createElement(v.x,M(W({},u),{ref:r,sx:[{display:d?void 0:"none"},...(0,N.R)(c)],className:b(p.panel,s),role:"tabpanel",id:f.getPanelId(a),"aria-labelledby":f.getTabId(a)}),y)});function F(e,r){let t=e;for(;(t=t.parentElement)&&!t.matches(r););return t}q.displayName="@mantine/core/TabsPanel";var U=Object.defineProperty,K=Object.defineProperties,V=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,J=(e,r,t)=>r in e?U(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Q=(e,r)=>{for(var t in r||(r={}))Z.call(r,t)&&J(e,t,r[t]);if(X)for(var t of X(r))G.call(r,t)&&J(e,t,r[t]);return e},Y=(e,r)=>K(e,V(r)),ee=(0,c.k)((e,r)=>({tabLabel:{},tab:Q({position:"relative",padding:`${e.spacing.xs}px ${e.spacing.md}px`,paddingLeft:r.withIcon?e.spacing.xs:void 0,paddingRight:r.withRightSection?e.spacing.xs:void 0,fontSize:e.fontSizes.sm,whiteSpace:"nowrap",zIndex:0,display:"flex",alignItems:"center",justifyContent:"horizontal"===r.orientation?"center":void 0,lineHeight:1,"&:disabled":Q({opacity:.5,cursor:"not-allowed"},e.fn.hover({backgroundColor:"transparent"})),"&:focus":{zIndex:1}},function(e,{variant:r,orientation:t,color:o,radius:n,inverted:a,placement:l}){let i="vertical"===t,c=e.fn.variant({color:o,variant:"filled"}),s=e.fn.radius(n),u="vertical"===t?"left"===l?`${s}px 0 0 ${s}px`:` 0 ${s}px ${s}px 0`:a?`0 0 ${s}px ${s}px`:`${s}px ${s}px 0 0`;return"default"===r?Y(Q({[i?"left"===l?"borderRight":"borderLeft":a?"borderTop":"borderBottom"]:"2px solid transparent",[i?"left"===l?"marginRight":"marginLeft":a?"marginTop":"marginBottom"]:-2,borderRadius:u},e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]})),{"&[data-active]":Q({borderColor:c.background,color:"dark"===e.colorScheme?e.white:e.black},e.fn.hover({borderColor:c.background}))}):"outline"===r?{borderRadius:u,border:"1px solid transparent",[i?"left"===l?"borderRight":"borderLeft":a?"borderTop":"borderBottom"]:"none","&[data-active]":{borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],"&::before":{content:'""',backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,position:"absolute",bottom:i?0:a?"unset":-1,top:i?0:a?-1:"unset",[i?"width":"height"]:1,right:i?"left"===l?-1:"unset":0,left:i?"left"===l?"unset":-1:0}}}:"pills"===r?Y(Q({borderRadius:e.fn.radius(n)},e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]})),{"&[data-active]":Q({backgroundColor:c.background,color:e.white},e.fn.hover({backgroundColor:c.background}))}):{}}(e,r)),tabRightSection:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginLeft:7}},tabIcon:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginRight:7}}})),er=t(34736),et=Object.defineProperty,eo=Object.defineProperties,en=Object.getOwnPropertyDescriptors,ea=Object.getOwnPropertySymbols,el=Object.prototype.hasOwnProperty,ei=Object.prototype.propertyIsEnumerable,ec=(e,r,t)=>r in e?et(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,es=(e,r)=>{for(var t in r||(r={}))el.call(r,t)&&ec(e,t,r[t]);if(ea)for(var t of ea(r))ei.call(r,t)&&ec(e,t,r[t]);return e},eu=(e,r)=>eo(e,en(r)),ef=(e,r)=>{var t={};for(var o in e)el.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ea)for(var o of ea(e))0>r.indexOf(o)&&ei.call(e,o)&&(t[o]=e[o]);return t};let ep={},eb=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("TabsTab",ep,e),{value:a,children:l,onKeyDown:c,onClick:s,className:u,icon:f,rightSection:p,color:b}=t,d=ef(t,["value","children","onKeyDown","onClick","className","icon","rightSection","color"]),y=i(),m=!!f,v=!!p,{theme:g,classes:O,cx:h}=ee({withIcon:m||v&&!l,withRightSection:v||m&&!l,orientation:y.orientation,color:b||y.color,variant:y.variant,radius:y.radius,inverted:y.inverted,placement:y.placement},{name:"Tabs",unstyled:y.unstyled,classNames:y.classNames,styles:y.styles}),w=a===y.value,j=e=>{y.onTabChange(y.allowTabDeactivation&&a===y.value?null:a),null==s||s(e)};return o.createElement(er.k,eu(es({},d),{unstyled:y.unstyled,className:h(O.tab,u),"data-active":w||void 0,ref:r,type:"button",role:"tab",id:y.getTabId(a),"aria-selected":w,tabIndex:w||null===y.value?0:-1,"aria-controls":y.getPanelId(a),onClick:j,onKeyDown:function({parentSelector:e,siblingSelector:r,onKeyDown:t,loop:o=!0,activateOnFocus:n=!1,dir:a="rtl",orientation:l}){return i=>{var c;null==t||t(i);let s=Array.from((null==(c=F(i.currentTarget,e))?void 0:c.querySelectorAll(r))||[]).filter(r=>F(i.currentTarget,e)===F(r,e)),u=s.findIndex(e=>i.currentTarget===e),f=function(e,r,t){for(let o=e+1;o<r.length;o+=1)if(!r[o].disabled)return o;if(t){for(let n=0;n<r.length;n+=1)if(!r[n].disabled)return n}return e}(u,s,o),p=function(e,r,t){for(let o=e-1;o>=0;o-=1)if(!r[o].disabled)return o;if(t){for(let n=r.length-1;n>-1;n-=1)if(!r[n].disabled)return n}return e}(u,s,o),b="rtl"===a?p:f,d="rtl"===a?f:p;switch(i.key){case"ArrowRight":"horizontal"===l&&(i.stopPropagation(),i.preventDefault(),s[b].focus(),n&&s[b].click());break;case"ArrowLeft":"horizontal"===l&&(i.stopPropagation(),i.preventDefault(),s[d].focus(),n&&s[d].click());break;case"ArrowUp":"vertical"===l&&(i.stopPropagation(),i.preventDefault(),s[p].focus(),n&&s[p].click());break;case"ArrowDown":"vertical"===l&&(i.stopPropagation(),i.preventDefault(),s[f].focus(),n&&s[f].click());break;case"Home":i.stopPropagation(),i.preventDefault(),s[0].disabled||s[0].focus();break;case"End":{i.stopPropagation(),i.preventDefault();let y=s.length-1;s[y].disabled||s[y].focus()}}}}({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:y.activateTabWithKeyboard,loop:y.loop,dir:g.dir,orientation:y.orientation,onKeyDown:c})}),f&&o.createElement("div",{className:O.tabIcon},f),l&&o.createElement("div",{className:O.tabLabel},l),p&&o.createElement("div",{className:O.tabRightSection},p))});function ed(e,r){return t=>{if("string"!=typeof t||0===t.trim().length)throw Error(r);return`${e}-${t}`}}eb.displayName="@mantine/core/Tab";var ey=t(36289),em=t(15851);function ev({defaultValue:e,value:r,onTabChange:t,orientation:n,children:i,loop:c,id:s,activateTabWithKeyboard:u,allowTabDeactivation:f,variant:p,color:b,radius:d,inverted:y,placement:m,keepMounted:v=!0,classNames:g,styles:O,unstyled:h}){let w=(0,ey.M)(s),[j,P]=(0,em.C)({value:r,defaultValue:e,finalValue:null,onChange:t});return o.createElement(l,{value:{placement:m,value:j,orientation:n,id:w,loop:c,activateTabWithKeyboard:u,getTabId:ed(`${w}-tab`,a.value),getPanelId:ed(`${w}-panel`,a.value),onTabChange:P,allowTabDeactivation:f,variant:p,color:b,radius:d,inverted:y,keepMounted:v,classNames:g,styles:O,unstyled:h}},i)}ev.displayName="@mantine/core/TabsProvider";var eg=(0,c.k)((e,{orientation:r,placement:t})=>({root:{display:"vertical"===r?"flex":void 0,flexDirection:"right"===t?"row-reverse":"row"}})),eO=Object.defineProperty,eh=Object.defineProperties,ew=Object.getOwnPropertyDescriptors,ej=Object.getOwnPropertySymbols,eP=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,ek=(e,r,t)=>r in e?eO(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eE=(e,r)=>{for(var t in r||(r={}))eP.call(r,t)&&ek(e,t,r[t]);if(ej)for(var t of ej(r))ex.call(r,t)&&ek(e,t,r[t]);return e},eS=(e,r)=>eh(e,ew(r)),eC=(e,r)=>{var t={};for(var o in e)eP.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ej)for(var o of ej(e))0>r.indexOf(o)&&ex.call(e,o)&&(t[o]=e[o]);return t};let eI={orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},eN=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Tabs",eI,e),{defaultValue:a,value:l,orientation:i,loop:c,activateTabWithKeyboard:s,allowTabDeactivation:u,children:f,id:p,onTabChange:b,variant:d,color:y,className:m,unstyled:g,classNames:O,styles:h,radius:w,inverted:j,keepMounted:P,placement:x}=t,k=eC(t,["defaultValue","value","orientation","loop","activateTabWithKeyboard","allowTabDeactivation","children","id","onTabChange","variant","color","className","unstyled","classNames","styles","radius","inverted","keepMounted","placement"]),{classes:E,cx:S}=eg({orientation:i,color:y,variant:d,radius:w,inverted:j,placement:x},{unstyled:g,name:"Tabs",classNames:O,styles:h});return o.createElement(ev,{activateTabWithKeyboard:s,defaultValue:a,orientation:i,onTabChange:b,value:l,id:p,loop:c,allowTabDeactivation:u,color:y,variant:d,radius:w,inverted:j,keepMounted:P,placement:x,classNames:O,styles:h,unstyled:g},o.createElement(v.x,eS(eE({},k),{className:S(E.root,m),id:p,ref:r}),f))});eN.List=I,eN.Tab=eb,eN.Panel=q,eN.displayName="@mantine/core/Tabs"},44991:function(e,r,t){"use strict";t.d(r,{o:function(){return I}});var o=t(67294),n=t(58495),a=t(36289),l=t(12756),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&b(e,t,r[t]);if(u)for(var t of u(r))p.call(r,t)&&b(e,t,r[t]);return e},y=(e,r)=>c(e,s(r)),m=(e,r)=>{var t={};for(var o in e)f.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&u)for(var o of u(e))0>r.indexOf(o)&&p.call(e,o)&&(t[o]=e[o]);return t},v=t(94151),g=Object.defineProperty,O=Object.defineProperties,h=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))j.call(r,t)&&x(e,t,r[t]);if(w)for(var t of w(r))P.call(r,t)&&x(e,t,r[t]);return e},E=(e,r)=>O(e,h(r)),S=(e,r)=>{var t={};for(var o in e)j.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&w)for(var o of w(e))0>r.indexOf(o)&&P.call(e,o)&&(t[o]=e[o]);return t};let C={type:"text",size:"sm",__staticSelector:"TextInput"},I=(0,o.forwardRef)((e,r)=>{let t=function(e,r,t){let o=(0,n.N4)(e,r,t),{label:i,description:c,error:s,required:u,classNames:f,styles:p,className:b,unstyled:v,__staticSelector:g,sx:O,errorProps:h,labelProps:w,descriptionProps:j,wrapperProps:P,id:x,size:k,style:E,inputContainer:S,inputWrapperOrder:C,withAsterisk:I}=o,N=m(o,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","sx","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk"]),T=(0,a.M)(x),{systemStyles:D,rest:z}=(0,l.x)(N);return y(d({},z),{classNames:f,styles:p,unstyled:v,wrapperProps:d(d({label:i,description:c,error:s,required:u,classNames:f,className:b,__staticSelector:g,sx:O,errorProps:h,labelProps:w,descriptionProps:j,unstyled:v,styles:p,id:T,size:k,style:E,inputContainer:S,inputWrapperOrder:C,withAsterisk:I},P),D),inputProps:{required:u,classNames:f,styles:p,unstyled:v,id:T,size:k,__staticSelector:g,invalid:!!s}})}("TextInput",C,e),{inputProps:i,wrapperProps:c}=t,s=S(t,["inputProps","wrapperProps"]);return o.createElement(v.I.Wrapper,k({},c),o.createElement(v.I,E(k(k({},i),s),{ref:r})))});I.displayName="@mantine/core/TextInput"},98903:function(e,r,t){"use strict";t.d(r,{c:function(){return T}});var o=t(67294),n=t(64063),a=t.n(n);function l(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((r,t)=>{let o=e[t];return null!=o&&!1!==o&&(r[t]=o),r},{})}var i=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&f(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&f(e,t,r[t]);return e};function b(e,r){if(null===r||"object"!=typeof r)return{};let t=p({},r);return Object.keys(r).forEach(r=>{r.includes(`${String(e)}.`)&&delete t[r]}),t}function d(e,r){return!!r&&("boolean"==typeof r?r:!!Array.isArray(r)&&r.includes(e.replace(/[.][0-9]/g,".__MANTINE_FORM_INDEX__")))}function y(e){return"string"!=typeof e?[]:e.split(".")}function m(e,r,t){let o=y(e);if(0===o.length)return t;let n=function e(r){if("object"!=typeof r)return r;var t,o,n=Object.prototype.toString.call(r);if("[object Object]"===n){if(r.constructor!==Object&&"function"==typeof r.constructor)for(t in o=new r.constructor,r)r.hasOwnProperty(t)&&o[t]!==r[t]&&(o[t]=e(r[t]));else for(t in o={},r)"__proto__"===t?Object.defineProperty(o,t,{value:e(r[t]),configurable:!0,enumerable:!0,writable:!0}):o[t]=e(r[t]);return o}if("[object Array]"===n){for(o=Array(t=r.length);t--;)o[t]=e(r[t]);return o}return"[object Set]"===n?(o=new Set,r.forEach(function(r){o.add(e(r))}),o):"[object Map]"===n?(o=new Map,r.forEach(function(r,t){o.set(e(t),e(r))}),o):"[object Date]"===n?new Date(+r):"[object RegExp]"===n?((o=RegExp(r.source,r.flags)).lastIndex=r.lastIndex,o):"[object DataView]"===n?new r.constructor(e(r.buffer)):"[object ArrayBuffer]"===n?r.slice(0):"Array]"===n.slice(-6)?new r.constructor(r):r}(t);if(1===o.length)return n[o[0]]=r,n;let a=n[o[0]];for(let l=1;l<o.length-1;l+=1){if(void 0===a)return n;a=a[o[l]]}return a[o[o.length-1]]=r,n}function v(e,r){let t=y(e);if(0===t.length||"object"!=typeof r||null===r)return;let o=r[t[0]];for(let n=1;n<t.length&&void 0!==o;n+=1)o=o[t[n]];return o}function g(e){let r=l(e);return{hasErrors:Object.keys(r).length>0,errors:r}}function O(e,r){return"function"==typeof e?g(e(r)):g(function e(r,t,o="",n={}){return"object"!=typeof r||null===r?n:Object.keys(r).reduce((n,a)=>{let l=r[a],i=`${""===o?"":`${o}.`}${a}`,c=v(i,t),s=!1;return"function"==typeof l&&(n[i]=l(c,t,i)),"object"==typeof l&&Array.isArray(c)&&(s=!0,c.forEach((r,o)=>e(l,t,`${i}.${o}`,n))),"object"!=typeof l||"object"!=typeof c||null===c||s||e(l,t,i,n),n},n)}(e,r))}function h(e,r,t){if("string"!=typeof e)return{hasError:!1,error:null};let o=O(r,t),n=Object.keys(o.errors).find(r=>e.split(".").every((e,t)=>e===r.split(".")[t]));return{hasError:!!n,error:n?o.errors[n]:null}}function w(e,r){let t=Object.keys(e);if("string"==typeof r){let o=t.filter(e=>e.includes(`${r}.`));return e[r]||o.some(r=>e[r])||!1}return t.some(r=>e[r])}var j=Object.defineProperty,P=Object.defineProperties,x=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,C=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,I=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&C(e,t,r[t]);if(k)for(var t of k(r))S.call(r,t)&&C(e,t,r[t]);return e},N=(e,r)=>P(e,x(r));function T({initialValues:e={},initialErrors:r={},initialDirty:t={},initialTouched:n={},clearInputErrorOnChange:i=!0,validateInputOnChange:c=!1,validateInputOnBlur:s=!1,transformValues:u=e=>e,validate:f}={}){let[p,y]=(0,o.useState)(n),[g,j]=(0,o.useState)(t),[P,x]=(0,o.useState)(e),[k,E]=(0,o.useState)(l(r)),S=(0,o.useRef)(e),C=e=>{S.current=e},T=(0,o.useCallback)(()=>y({}),[]),D=e=>{C(e||P),j({})},z=(0,o.useCallback)(e=>E(r=>l("function"==typeof e?e(r):e)),[]),R=(0,o.useCallback)(()=>E({}),[]),_=(0,o.useCallback)(()=>{x(e),R(),D(e),T()},[]),A=(0,o.useCallback)((e,r)=>z(t=>N(I({},t),{[e]:r})),[]),$=(0,o.useCallback)(e=>z(r=>{if("string"!=typeof e)return r;let t=I({},r);return delete t[e],t}),[]),L=(0,o.useCallback)(e=>j(r=>{if("string"!=typeof e)return r;let t=b(e,r);return delete t[e],t}),[]),W=(0,o.useCallback)((e,r)=>{let t=d(e,c);L(e),y(r=>N(I({},r),{[e]:!0})),x(o=>{let n=m(e,r,o);if(t){let a=h(e,f,n);a.hasError?A(e,a.error):$(e)}return n}),!t&&i&&A(e,null)},[]),M=(0,o.useCallback)(e=>{x(r=>{let t="function"==typeof e?e(r):e;return I(I({},r),t)}),i&&R()},[]),B=(0,o.useCallback)((e,r)=>{L(e),x(t=>(function(e,{from:r,to:t},o){let n=v(e,o);if(!Array.isArray(n))return o;let a=[...n],l=n[r];return a.splice(r,1),a.splice(t,0,l),m(e,a,o)})(e,r,t))},[]),H=(0,o.useCallback)((e,r)=>{L(e),x(t=>(function(e,r,t){let o=v(e,t);return Array.isArray(o)?m(e,o.filter((e,t)=>t!==r),t):t})(e,r,t)),E(r=>b(e,r))},[]),q=(0,o.useCallback)((e,r,t)=>{L(e),x(o=>(function(e,r,t,o){let n=v(e,o);if(!Array.isArray(n))return o;let a=[...n];return a.splice("number"==typeof t?t:a.length,0,r),m(e,a,o)})(e,r,t,o))},[]),F=(0,o.useCallback)(()=>{let e=O(f,P);return E(e.errors),e},[P,f]),U=(0,o.useCallback)(e=>{let r=h(e,f,P);return r.hasError?A(e,r.error):$(e),r},[P,f]),K=(e,{type:r="input",withError:t="input"===r,withFocus:o=!0}={})=>{var n;let a=(n=r=>W(e,r),e=>{if(e){if("function"==typeof e)n(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:r}=e;r instanceof HTMLInputElement?"checkbox"===r.type?n(r.checked):n(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&n(r.value)}else n(e)}else n(e)}),l={onChange:a};return t&&(l.error=k[e]),"checkbox"===r?l.checked=v(e,P):l.value=v(e,P),o&&(l.onFocus=()=>y(r=>N(I({},r),{[e]:!0})),l.onBlur=()=>{if(d(e,s)){let r=h(e,f,P);r.hasError?A(e,r.error):$(e)}}),l},V=(e,r)=>t=>{null==t||t.preventDefault();let o=F();o.hasErrors?null==r||r(o.errors,P,t):e(u(P),t)},X=(0,o.useCallback)(e=>{e.preventDefault(),_()},[]),Z=e=>{let r=Object.keys(g).length>0;if(r)return w(g,e);if(e){let t=v(e,P),o=v(e,S.current);return!a()(t,o)}return!a()(P,S.current)},G=(0,o.useCallback)(e=>w(p,e),[p]),J=(0,o.useCallback)(e=>e?!h(e,f,P).hasError:!O(f,P).hasErrors,[P,f]);return{values:P,errors:k,setValues:M,setErrors:z,setFieldValue:W,setFieldError:A,clearFieldError:$,clearErrors:R,reset:_,validate:F,validateField:U,reorderListItem:B,removeListItem:H,insertListItem:q,getInputProps:K,onSubmit:V,onReset:X,isDirty:Z,isTouched:G,setTouched:y,setDirty:j,resetTouched:T,resetDirty:D,isValid:J}}},15851:function(e,r,t){"use strict";t.d(r,{C:function(){return n}});var o=t(67294);function n({value:e,defaultValue:r,finalValue:t,onChange:n=()=>{}}){let[a,l]=(0,o.useState)(void 0!==r?r:t),i=e=>{l(e),null==n||n(e)};return void 0!==e?[e,n,!0]:[a,i,!1]}},9276:function(e,r,t){"use strict";function o(e,r,t){return Math.min(Math.max(e,r),t)}t.d(r,{u:function(){return o}})},97818:function(e,r,t){"use strict";function o(e){return Array.isArray(e)?e:[e]}t.d(r,{R:function(){return o}})},20640:function(e,r,t){"use strict";var o=t(11742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,r){var t,a,l,i,c,s,u,f,p=!1;r||(r={}),l=r.debug||!1;try{if(c=o(),s=document.createRange(),u=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(t){if(t.stopPropagation(),r.format){if(t.preventDefault(),void 0===t.clipboardData){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[r.format]||n.default;window.clipboardData.setData(o,e)}else t.clipboardData.clearData(),t.clipboardData.setData(r.format,e)}r.onCopy&&(t.preventDefault(),r.onCopy(t.clipboardData))}),document.body.appendChild(f),s.selectNodeContents(f),u.addRange(s),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(d){l&&console.error("unable to copy using execCommand: ",d),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",e),r.onCopy&&r.onCopy(window.clipboardData),p=!0}catch(b){l&&console.error("unable to copy using clipboardData: ",b),l&&console.error("falling back to prompt"),t="message"in r?r.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",i=t.replace(/#{\s*key\s*}/g,a),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(s):u.removeAllRanges()),f&&document.body.removeChild(f),c()}return p}},64063:function(e){"use strict";e.exports=function e(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){if(r.constructor!==t.constructor)return!1;if(Array.isArray(r)){if((o=r.length)!=t.length)return!1;for(n=o;0!=n--;)if(!e(r[n],t[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if((o=(a=Object.keys(r)).length)!==Object.keys(t).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;for(n=o;0!=n--;){var o,n,a,l=a[n];if(!e(r[l],t[l]))return!1}return!0}return r!=r&&t!=t}},74300:function(e,r,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.CopyToClipboard=void 0;var n=i(t(67294)),a=i(t(20640)),l=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function u(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,r){return(f=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var y=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&f(e,r)}(y,e);var r,t,i,c=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=b(y);if(r){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,r){if(r&&("object"===o(r)||"function"==typeof r))return r;if(void 0!==r)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function y(){var e;!function(e,r){if(!(e instanceof r))throw TypeError("Cannot call a class as a function")}(this,y);for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return d(p(e=c.call.apply(c,[this].concat(t))),"onClick",function(r){var t=e.props,o=t.text,l=t.onCopy,i=t.children,c=t.options,s=n.default.Children.only(i),u=(0,a.default)(o,c);l&&l(o,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(r)}),e}return t=[{key:"render",value:function(){var e=this.props,r=(e.text,e.onCopy,e.options,e.children),t=function(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(e,l),o=n.default.Children.only(r);return n.default.cloneElement(o,s(s({},t),{},{onClick:this.onClick}))}}],u(y.prototype,t),i&&u(y,i),Object.defineProperty(y,"prototype",{writable:!1}),y}(n.default.PureComponent);r.CopyToClipboard=y,d(y,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,r,t){"use strict";var o=t(74300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var r=document.activeElement,t=[],o=0;o<e.rangeCount;o++)t.push(e.getRangeAt(o));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach(function(r){e.addRange(r)}),r&&r.focus()}}}}]);