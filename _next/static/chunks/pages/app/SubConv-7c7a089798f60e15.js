(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{7697:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/SubConv",function(){return n(1153)}])},9847:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),s=n(9008),i=n.n(s);function l(e){let{title:t}=e;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("meta",{name:"title",content:t}),(0,r.jsx)("title",{children:t})]})}},352:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),s=n(1664),i=n.n(s),l=n(9847);function c(e){let{program:t,title:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{title:n}),(0,r.jsxs)("div",{className:"w-5/6 max-w-4xl mx-auto pb-16",children:[(0,r.jsx)("p",{className:"mt-12 mb-16 mx-4 w-fit text-d-green hover:text-d-yellow transition duration-500",children:(0,r.jsx)(i(),{href:"/",children:"\uD83C\uDFE0 홈으로 돌아가기"})}),t]})]})}},1153:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),s=n(352),i=n(5675),l=n.n(i);function c(){let e=e=>{let t=new FileReader;return t.readAsText(e,"utf-8"),new Promise((e,n)=>t.onload=()=>{if(null===t.result||"string"!=typeof t.result)return n(-1);let r=t.result.split(/\r\n|\n/),s=[],i=3,l=!1;for(let e in r)r[e].includes("-->")?(l||(l=!0),s.push("".concat(i/3,"\n")),s.push("".concat(r[e].replaceAll(".",","),"\n")),i++):(i%3==1||i%3==2)&&(s.push("".concat(r[e],"\n")),i++);e(s)})},t=async t=>{if(!t.name.includes(".vtt"))return -1;let n=await e(t),r=document.createElement("a");if("string"==typeof n[0])return -1;let s=new Blob(n,{type:"text/plain"});r.href=URL.createObjectURL(s),r.download=t.name.replace("vtt","srt"),r.click(),r.remove()},n=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(l(),{src:"/imgs/subconv/sub_icon.svg",width:150,height:150,className:"mx-auto",alt:"자막 변환기 로고"}),(0,r.jsx)("div",{className:"text-d-purple text-[24px]",children:(0,r.jsx)("b",{children:"vtt → srt 변환기"})}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault();let n=e.currentTarget[0].files;if(n)for(let e=0;e<n.length;e++)t(n[e])},className:"mt-[32px]",children:[(0,r.jsx)("input",{type:"file",accept:".vtt",className:"w-60 file:bg-[#8be9fd] file:border-[#8be9fd] file:rounded-[4px] file:font-base file:text-sm",multiple:!0,required:!0}),(0,r.jsx)("button",{type:"submit",className:"mt-[20px] block mx-auto bg-d-green bt-drac",children:"변환하기"})]})]})});return(0,r.jsx)(s.Z,{program:n,title:"자막 파일 형식 변환기"})}}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=7697)}),_N_E=e.O()}]);