(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{5328:function(e,t,r){Promise.resolve().then(r.bind(r,3819))},3819:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return SubConv}});var n,o=r(7437),s=r(952);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var subicon=function(e){return s.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"#fff",stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 24 24"},e),n||(n=s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})))};function SubConv(){let convertFile=e=>{let t=new FileReader;return t.readAsText(e,"utf-8"),new Promise((e,r)=>t.onload=()=>{if(null===t.result||"string"!=typeof t.result)return r(-1);let n=t.result.split(/\r\n|\n/),o=[],s=3,i=!1;for(let e in n)n[e].includes("-->")?(i||(i=!0),o.push("".concat(s/3,"\n")),o.push("".concat(n[e].replaceAll(".",","),"\n")),s++):(s%3==1||s%3==2)&&(o.push("".concat(n[e],"\n")),s++);e(o)})},exportFile=async e=>{if(!e.name.includes(".vtt"))return -1;let t=await convertFile(e),r=document.createElement("a");if("string"==typeof t[0])return -1;let n=new Blob(t,{type:"text/plain"});r.href=URL.createObjectURL(n),r.download=e.name.replace("vtt","srt"),r.click(),r.remove()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(subicon,{className:"h-40 w-40 mx-auto text-black","aria-label":"Subtitle Icon"}),(0,o.jsx)("div",{className:"text-d-purple text-[24px]",children:(0,o.jsx)("b",{children:"vtt → srt 변환기"})}),(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=e.currentTarget[0].files;if(t)for(let e=0;e<t.length;e++)exportFile(t[e])},className:"mt-[32px]",children:[(0,o.jsx)("input",{type:"file",accept:".vtt",className:"w-60 file:bg-[#8be9fd] file:border-[#8be9fd] file:rounded-[4px] file:font-base file:text-sm",multiple:!0,required:!0}),(0,o.jsx)("button",{type:"submit",className:"mt-[20px] block mx-auto bg-d-green bt-drac",children:"변환하기"})]})]})})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},7673:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,s={};function E(e,t,r){this.props=e,this.context=t,this.refs=s,this.updater=r||n}function F(){}function G(e,t,r){this.props=e,this.context=t,this.refs=s,this.updater=r||n}E.prototype.isReactComponent={},E.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},F.prototype=E.prototype;var i=G.prototype=new F;i.constructor=G,o(i,E.prototype),i.isPureReactComponent=!0;var a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var o,s={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(s[o]=t[o]);var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){for(var f=Array(u),p=0;p<u;p++)f[p]=arguments[p+2];s.children=f}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===s[o]&&(s[o]=u[o]);return{$$typeof:r,type:e,key:i,ref:l,props:s,_owner:null}}},952:function(e,t,r){"use strict";e.exports=r(7673)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=5328)}),_N_E=e.O()}]);