(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{112:function(e,t,r){Promise.resolve().then(r.bind(r,1677))},1677:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n,o=r(4317),a=r(7972);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var i=function(e){return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"#fff",stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 24 24"},e),n||(n=a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z"})))};function l(){let e=e=>{let t=new FileReader;return t.readAsText(e,"utf-8"),new Promise((e,r)=>t.onload=()=>{if(null===t.result||"string"!=typeof t.result)return r(-1);let n=t.result.split(/\r\n|\n/),o=[],a=3,c=!1;for(let e in n)n[e].includes("-->")?(c||(c=!0),o.push("".concat(a/3,"\n")),o.push("".concat(n[e].replaceAll(".",","),"\n")),a++):(a%3==1||a%3==2)&&(o.push("".concat(n[e],"\n")),a++);e(o)})},t=async t=>{if(!t.name.includes(".vtt"))return -1;let r=await e(t);if("string"!=typeof r[0])return -1;let n=document.createElement("a"),o=new Blob(r,{type:"text/plain"}),a=URL.createObjectURL(o);n.href=a,n.download=t.name.replace("vtt","srt"),n.click(),n.remove(),URL.revokeObjectURL(a)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(i,{className:"h-40 w-40 mx-auto text-black","aria-label":"Subtitle Icon"}),(0,o.jsx)("div",{className:"text-d-purple text-[24px]",children:(0,o.jsx)("b",{children:"vtt → srt 변환기"})}),(0,o.jsxs)("form",{onSubmit:e=>{e.preventDefault();let{files:r}=e.currentTarget.CSV;if(r)for(let e=0;e<r.length;e++)t(r[e])},className:"mt-[32px]",children:[(0,o.jsx)("input",{type:"file",id:"CSV",accept:".vtt",className:"w-60 file:bg-[#8be9fd] file:border-[#8be9fd] file:rounded-[4px] file:font-base file:text-sm",multiple:!0,required:!0}),(0,o.jsx)("button",{type:"submit",className:"mt-[20px] block mx-auto bg-d-green bt-drac",children:"변환하기"})]})]})})}},5121:function(e,t){"use strict";var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,a={};function c(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}function i(){}function l(e,t,r){this.props=e,this.context=t,this.refs=a,this.updater=r||n}c.prototype.isReactComponent={},c.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},c.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=c.prototype;var s=l.prototype=new i;s.constructor=l,o(s,c.prototype),s.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var o,a={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)u.call(t,o)&&!f.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];a.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:c,ref:i,props:a,_owner:null}}},7972:function(e,t,r){"use strict";e.exports=r(5121)}},function(e){e.O(0,[323,74,560],function(){return e(e.s=112)}),_N_E=e.O()}]);