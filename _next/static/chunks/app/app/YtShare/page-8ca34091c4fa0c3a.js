(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{2197:function(e,t,s){Promise.resolve().then(s.bind(s,405))},405:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return YtShare}});var a=s(7437),n=s(6691),r=s.n(n),l=s(2265);function YtShare(){let e=(0,l.useRef)(""),[t,s]=(0,l.useState)(!0),[n,u]=(0,l.useState)(!1),[c,i]=(0,l.useState)(""),[h,x]=(0,l.useState)(""),shareYT=t=>{let{input_link:a,use_ts:n,hrs:r,min:l,sec:h}=t,d=["?v=","&v=","shorts/","youtu.be/"],m=-1,o=0;if(!n||0===r&&0===l&&0===h||r<0||l<0||h<0||(o=3600*r+60*l+h),c.length>0)e.current=c,m=0;else{let t=0;for(;t<d.length&&!((m=a.indexOf(d[t]))>-1);t++);if(m>-1){let s=m+d[t].length,n=s+11;e.current="https://youtu.be/"+a.slice(s,n)}}m>-1?(n&&0!==o&&(e.current+="&t="+o),navigator.clipboard.writeText(e.current),x("클립보드에 복사 완료 \uD83D\uDE0E"),i(e.current)):(u(!0),-1!==a.search("youtu.be")?(x("이미 변환이 완료된 링크네요 \uD83D\uDE05"),i(e.current)):x("유튜브 영상 링크가 아닌 것 같습니다 \uD83D\uDE44")),s(!1)},d=(0,a.jsx)("button",{onClick:()=>{s(!0),i(""),u(!1)},className:"bg-d-pink bt-drac",children:"다시하기"});return(0,a.jsxs)("div",{className:"m-2.5",children:[(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(r(),{src:"/imgs/ytshare/ytShare_w.png",width:"200",height:"200",priority:!0,alt:"ytShare logo"})}),(0,a.jsx)("div",{className:"text-d-purple",children:(0,a.jsxs)("b",{children:["모바일에서도 타임스탬프를 추가해서",(0,a.jsx)("br",{}),"유튜브 링크를 편하게 공유해보세요"]})}),(0,a.jsx)(()=>{let[e,s]=(0,l.useState)(""),[r,u]=(0,l.useState)(0),[i,x]=(0,l.useState)(0),[m,o]=(0,l.useState)(0),[p,b]=(0,l.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("br",{}),(0,a.jsx)("h3",{className:"text-d-yellow font-bold mb-3",children:"유튜브 링크"}),(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault(),shareYT({input_link:e,use_ts:p,hrs:r,min:i,sec:m})},children:[t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:(0,a.jsx)("input",{type:"text",onChange:e=>s(e.target.value),placeholder:"공유할 유튜브 링크",className:"p-1.5 text-sm text-[#F8F8F2] w-72 bg-[#44475A] mb-5"})}),(0,a.jsxs)("h4",{className:"text-d-pink font-bold mb-2.5",children:[(0,a.jsx)("label",{htmlFor:"use_ts",children:"타임스탬프 사용\xa0\xa0"}),(0,a.jsx)("input",{type:"checkbox",id:"use_ts",onChange:e=>b(e.target.checked)})]}),(0,a.jsx)("p",{children:p?(0,a.jsxs)("div",{className:"mb-5",children:[(0,a.jsx)("input",{type:"number",min:0,max:999,value:r,onChange:e=>u(parseInt(e.target.value)),className:"w-20 pl-1.5 text-black",placeholder:"시"}),"\xa0",(0,a.jsx)("input",{type:"number",min:0,max:59,value:i,onChange:e=>x(parseInt(e.target.value)),className:"w-20 pl-1.5 text-black",placeholder:"분"}),"\xa0",(0,a.jsx)("input",{type:"number",min:0,max:59,value:m,onChange:e=>o(parseInt(e.target.value)),className:"w-20 pl-1.5 text-black",placeholder:"초"})]}):null})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"mb-2.5",children:c}),(0,a.jsx)("p",{className:"mb-2.5",children:h})]}),n?"":(0,a.jsx)("button",{type:"submit",className:"bg-d-green bt-drac",children:"공유하기"}),t||n?"":(0,a.jsx)(a.Fragment,{children:" "}),t?"":d]})]})},{})]})}}},function(e){e.O(0,[986,971,472,744],function(){return e(e.s=2197)}),_N_E=e.O()}]);