(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{9980:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/YtShare",function(){return n(6070)}])},9847:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),r=n(9008),a=n.n(r);function l(e){let{title:t}=e;return(0,s.jsxs)(a(),{children:[(0,s.jsx)("meta",{name:"title",content:t}),(0,s.jsx)("title",{children:t})]})}},352:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(5893),r=n(1664),a=n.n(r),l=n(9847);function u(e){let{program:t,title:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{title:n}),(0,s.jsxs)("div",{className:"w-5/6 max-w-4xl mx-auto pb-16",children:[(0,s.jsx)("p",{className:"mt-12 mb-16 mx-4 w-fit text-d-green hover:text-d-yellow transition duration-500",children:(0,s.jsx)(a(),{href:"/",children:"\uD83C\uDFE0 홈으로 돌아가기"})}),t]})]})}},6070:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(5893),r=n(352),a=n(5675),l=n.n(a),u=n(7294);function c(){let e=(0,u.useRef)(""),[t,n]=(0,u.useState)(!0),[a,c]=(0,u.useState)(!1),[i,x]=(0,u.useState)(""),[h,d]=(0,u.useState)(""),o=t=>{let{input_link:s,use_ts:r,hrs:a,min:l,sec:u}=t,h=["?v=","&v=","shorts/","youtu.be/"],o=-1,m=0;if(!r||0===a&&0===l&&0===u||a<0||l<0||u<0||(m=3600*a+60*l+u),i.length>0)e.current=i,o=0;else{let t=0;for(;t<h.length&&!((o=s.indexOf(h[t]))>-1);t++);if(o>-1){let n=o+h[t].length;e.current="https://youtu.be/"+s.slice(n,n+11)}}o>-1?(r&&0!==m&&(e.current+="&t="+m),navigator.clipboard.writeText(e.current),d("클립보드에 복사 완료 \uD83D\uDE0E"),x(e.current)):(c(!0),-1!==s.search("youtu.be")?(d("이미 변환이 완료된 링크네요 \uD83D\uDE05"),x(e.current)):d("유튜브 영상 링크가 아닌 것 같습니다 \uD83D\uDE44")),n(!1)},m=()=>{n(!0),x(""),c(!1)},p=(0,s.jsx)("button",{onClick:m,className:"bg-d-pink bt-drac",children:"다시하기"}),j=()=>{let[e,n]=(0,u.useState)(""),[r,l]=(0,u.useState)(0),[c,x]=(0,u.useState)(0),[d,m]=(0,u.useState)(0),[j,b]=(0,u.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("h3",{className:"text-d-yellow font-bold mb-3",children:"유튜브 링크"}),(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault(),o({input_link:e,use_ts:j,hrs:r,min:c,sec:d})},children:[t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsx)("input",{type:"text",onChange:e=>n(e.target.value),placeholder:"공유할 유튜브 링크",className:"p-1.5 text-sm text-[#F8F8F2] w-72 bg-[#44475A] mb-5"})}),(0,s.jsxs)("h4",{className:"text-d-pink font-bold mb-2.5",children:[(0,s.jsx)("label",{htmlFor:"use_ts",children:"타임스탬프 사용\xa0\xa0"}),(0,s.jsx)("input",{type:"checkbox",id:"use_ts",onChange:e=>b(e.target.checked)})]}),(0,s.jsx)("p",{children:j?(0,s.jsxs)("div",{className:"mb-5",children:[(0,s.jsx)("input",{type:"number",min:0,max:999,value:r,onChange:e=>l(parseInt(e.target.value)),className:"w-20 pl-1.5 text-black",placeholder:"시"}),"\xa0",(0,s.jsx)("input",{type:"number",min:0,max:59,value:c,onChange:e=>x(parseInt(e.target.value)),className:"w-20 pl-1.5 text-black",placeholder:"분"}),"\xa0",(0,s.jsx)("input",{type:"number",min:0,max:59,value:d,onChange:e=>m(parseInt(e.target.value)),className:"w-20 pl-1.5 text-black",placeholder:"초"})]}):null})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"mb-2.5",children:i}),(0,s.jsx)("p",{className:"mb-2.5",children:h})]}),a?"":(0,s.jsx)("button",{type:"submit",className:"bg-d-green bt-drac",children:"공유하기"}),t||a?"":(0,s.jsx)(s.Fragment,{children:" "}),t?"":p]})]})},b=(0,s.jsxs)("div",{className:"m-2.5",children:[(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(l(),{src:"/imgs/ytshare/ytShare_w.png",width:"200",height:"200",alt:"ytShare logo"})}),(0,s.jsx)("div",{className:"text-d-purple",children:(0,s.jsxs)("b",{children:["모바일에서도 타임스탬프를 추가해서",(0,s.jsx)("br",{}),"유튜브 링크를 편하게 공유해보세요"]})}),(0,s.jsx)(j,{})]});return(0,s.jsx)(r.Z,{program:b,title:"유튜브 공유 프로그램"})}}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=9980)}),_N_E=e.O()}]);