(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{5760:function(e,r,t){Promise.resolve().then(t.bind(t,8113))},8113:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Wordl}});var n=t(7437),s=t(6691),u=t.n(s),c=t(2265);function Wordl(){let[e,r]=(0,c.useState)(!1),[t,s]=(0,c.useState)(!0),[a,l]=(0,c.useState)(""),[i,d]=(0,c.useState)(""),o=(0,c.useRef)(""),printUK=e=>{if(r(!0),0!==e.length){let r=!1,t=0;for(let n=0;n<e.length;n++)if("\uD83D"===e[n]){switch(e[n+1]){case"\uDFE6":case"\uDFE8":o.current+="\uD83D\uDFE8",r=!0;break;case"\uDFE7":case"\uDFE9":o.current+="\uD83D\uDFE6",r=!0;break;default:o.current+=e[n];continue}switch(e[n+1]){case"\uDFE6":case"\uDFE7":t|=2;break;case"\uDFE8":case"\uDFE9":t|=1;break;default:o.current+=e[n];continue}n++}else"⬜"===e[n]||"⬛"===e[n]?(o.current+="⬛",r=!0):o.current+=e[n];r&&3!==t?(s(!1),l(o.current)):l("Wordle의 결과가 아닌 것 같습니다 :(\n")}else l("값을 입력해주세요 :(")},retryUK=()=>{r(!1),s(!0),d("")},shareUK=()=>{navigator.clipboard.writeText(a),d("클립보드에 복사 완료 \uD83D\uDE0E")};return e?(0,n.jsx)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:a}),(0,n.jsx)("br",{}),0!==i.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:i}),(0,n.jsx)("br",{})]}):null,t?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"bg-d-green bt-drac",onClick:shareUK,children:"공유하기"})," "]}),(0,n.jsx)("button",{className:"bg-d-pink bt-drac",onClick:retryUK,children:"다시하기"})]}),{}):(0,n.jsx)(()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h1",{className:"text-3xl",children:["Wordle 결과를",(0,n.jsx)("br",{}),"우크라이나 국기",(0,n.jsx)("br",{}),(0,n.jsx)(u(),{src:"/imgs/wd2uk/favicon.ico",alt:"UK flag",width:32,height:32,className:"inline"}),"\xa0색으로 변환"]}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),printUK(e.currentTarget[0].value)},children:[(0,n.jsx)("textarea",{autoFocus:!0,required:!0,rows:6,cols:10,placeholder:"Wordle 결과를 붙여넣고 버튼을 누르세요.",className:"mt-[24px] p-[12px] rounded-[8px] text-center bg-current-line"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{type:"submit",className:"mt-[12px] bg-d-green bt-drac",children:"변환하기"})]})]}),{})}}},function(e){e.O(0,[986,971,472,744],function(){return e(e.s=5760)}),_N_E=e.O()}]);