(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{4820:function(e,t,r){Promise.resolve().then(r.bind(r,8639))},8639:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(4317),s=r(7394),u=r(562);function c(){let[e,t]=(0,u.useState)(!1),[r,c]=(0,u.useState)(!0),[a,l]=(0,u.useState)(""),[i,d]=(0,u.useState)(""),o=(0,u.useRef)(""),x=e=>{if(t(!0),0!==e.length){let t=!1,r=0;for(let n=0;n<e.length;n++)if("\uD83D"===e[n]){switch(e[n+1]){case"\uDFE6":case"\uDFE8":o.current+="\uD83D\uDFE8",t=!0;break;case"\uDFE7":case"\uDFE9":o.current+="\uD83D\uDFE6",t=!0;break;default:o.current+=e[n];continue}switch(e[n+1]){case"\uDFE6":case"\uDFE7":r|=2;break;case"\uDFE8":case"\uDFE9":r|=1;break;default:o.current+=e[n];continue}n++}else"⬜"===e[n]||"⬛"===e[n]?(o.current+="⬛",t=!0):o.current+=e[n];t&&3!==r?(c(!1),l(o.current)):l("Wordle의 결과가 아닌 것 같습니다 :(\n")}else l("값을 입력해주세요 :(")},b=()=>{t(!1),c(!0),d("")},h=()=>{navigator.clipboard.writeText(a),d("클립보드에 복사 완료 \uD83D\uDE0E")};return e?(0,n.jsx)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:a}),(0,n.jsx)("br",{}),0!==i.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:i}),(0,n.jsx)("br",{})]}):null,r?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"bg-d-green bt-drac",onClick:h,children:"공유하기"})," "]}),(0,n.jsx)("button",{className:"bg-d-pink bt-drac",onClick:b,children:"다시하기"})]}),{}):(0,n.jsx)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h1",{className:"text-3xl",children:["Wordle 결과를",(0,n.jsx)("br",{}),"우크라이나 국기",(0,n.jsx)("br",{}),(0,n.jsx)(s.default,{src:"/imgs/wd2uk/favicon.ico",alt:"UK flag",width:32,height:32,className:"inline"}),"\xa0색으로 변환"]}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x(e.currentTarget[0].value)},children:[(0,n.jsx)("textarea",{autoFocus:!0,required:!0,rows:6,cols:10,placeholder:"Wordle 결과를 붙여넣고 버튼을 누르세요.",className:"mt-[24px] p-[12px] rounded-[8px] text-center bg-current-line"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{type:"submit",className:"mt-[12px] bg-d-green bt-drac",children:"변환하기"})]})]}),{})}}},function(e){e.O(0,[394,323,74,560],function(){return e(e.s=4820)}),_N_E=e.O()}]);