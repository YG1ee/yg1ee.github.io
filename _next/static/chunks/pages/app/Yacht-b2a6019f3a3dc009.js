(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{8395:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/Yacht",function(){return r(4785)}])},9847:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var s=r(5893),l=r(9008),a=r.n(l);function c(e){let{title:t}=e;return(0,s.jsxs)(a(),{children:[(0,s.jsx)("meta",{name:"title",content:t}),(0,s.jsx)("title",{children:t})]})}},352:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(5893),l=r(1664),a=r.n(l),c=r(9847);function n(e){let{program:t,title:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{title:r}),(0,s.jsxs)("div",{className:"w-5/6 max-w-4xl mx-auto pb-16",children:[(0,s.jsx)("p",{className:"mt-12 mb-16 mx-4 w-fit text-d-green hover:text-d-yellow transition duration-500",children:(0,s.jsx)(a(),{href:"/",children:"\uD83C\uDFE0 홈으로 돌아가기"})}),t]})]})}},4785:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var s=r(5893),l=r(7294),a=r(5675),c=r.n(a),n=r(352);let d=["에이스","듀얼","트리플","쿼드","펜타","헥사"],i=["Choice.svg","4 of a Kind.svg","Full House.svg","S. Straight.svg","L. Straight.svg","Yacht.svg"],x=d.map((e,t)=>(0,s.jsx)(c(),{src:"/imgs/yacht/svgs/dice".concat(t+1,".svg"),width:32,height:32,className:"px-1 mx-2",alt:d[t+1]},"dice".concat(t+1)));function o(){let[e,t]=(0,l.useState)([[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0]]),[r,a]=(0,l.useState)([[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0]]),o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;for(let t=0;t<6;t++)-1!==e[t]&&(r+=e[t]);return t&&r>=63&&(r+=35),r},[m,u]=(0,l.useState)(!1),[b,h]=(0,l.useState)(!1),[p,g]=(0,l.useState)([!1,!1,!1]),j=r=>{let{player:l,eye:a}=r;return(0,s.jsx)("div",{className:"border-r-4 border-black w-[90px] h-14 flex relative ".concat(a%2?"bg-gray-50 text-comment":"bg-gray-400 text-foreground"),children:(0,s.jsxs)("div",{className:"self-center w-[90px] mx-auto",children:[-1===e[l][a-1]?(0,s.jsx)("form",{onSubmit:r=>{r.preventDefault(),e[l][a-1]=parseInt(r.currentTarget[0].value),e[l][6]=o(e[l],1),h(!1),g(e=>Array(e.length).fill(!1)),t([...e])},onBlur:e=>{let t=document.createElement("button");e.target.appendChild(t),t.click(),e.target.removeChild(t)},className:"inline",children:(0,s.jsx)("input",{type:"number",min:0,step:a,max:5*a,pattern:"\\d*",required:!0,className:"w-[50px] text-center bg-black text-foreground"})}):(0,s.jsx)("p",{className:"w-[50px] inline-block font-bold text-center ".concat(e[l][a-1]?e[l][a-1]<3*a?"text-d-orange drop-shadow-sm":e[l][a-1]===5*a?"text-purple-500 drop-shadow-sm":e[l][a-1]>3*a?"text-blue-500 drop-shadow-sm":"text-black":"text-d-red"),onClick:()=>{b&&(e[l][a-1]=-1,e[l][6]=o(e[l],1),t([...e]))},children:e[l][a-1]}),"\xa0점"]})})},f=t=>{let{player:r}=t;return(0,s.jsx)("div",{className:"text-comment flex border-r-4 border-black w-[90px] h-8 bg-gray-50",children:(0,s.jsx)("p",{className:"self-center mx-auto",children:e[r][6]<98?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-black font-bold text-center",children:e[r][6]}),"\xa0/ 63\xa0점"]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-black font-bold text-center".concat(e[r][6]>=98?" text-d-purple":""),children:e[r][6]}),"\xa0점"]})})})},N=e=>{let{player:t,order:l}=e;return(0,s.jsx)("div",{className:"border-r-4 border-black w-[90px] h-14 flex ".concat(l%2?"bg-gray-400 text-foreground":"bg-gray-50 text-comment"),children:(0,s.jsxs)("div",{className:"self-center mx-auto",children:[-1===r[t][l-1]?(0,s.jsx)("form",{onSubmit:e=>{e.preventDefault(),r[t][l-1]=parseInt(e.currentTarget[0].value),r[t][6]=o(r[t]),h(!1),g(e=>Array(e.length).fill(!1)),a([...r])},className:"inline",onBlur:e=>{let t=document.createElement("button");e.target.appendChild(t),t.click(),e.target.removeChild(t)},children:l<4?(0,s.jsx)("input",{type:"number",min:0,max:30,pattern:"\\d*",required:!0,className:"w-[50px] text-center bg-black text-foreground placeholder:italic placeholder:text-gray-600"}):(0,s.jsxs)("select",{className:"bg-black text-current-line w-[50px] rounded-[4px]",children:[(0,s.jsx)("option",{value:4===l?15:5===l?30:50,children:4===l?15:5===l?30:50}),(0,s.jsx)("option",{value:0,children:"0"})]})}):(0,s.jsx)("p",{className:"w-[50px] inline-block font-bold text-center ".concat(r[t][l-1]?"text-black":"text-d-red"),onClick:()=>{b&&(r[t][l-1]=-1,r[t][6]=o(r[t]),a([...r]))},children:r[t][l-1]}),"\xa0점"]})})},v=e=>{let{player:t}=e;return(0,s.jsx)("div",{className:"text-foreground flex border-r-4 border-black w-[90px] h-8 bg-gray-400",children:(0,s.jsxs)("p",{className:"self-center mx-auto",children:[(0,s.jsx)("input",{value:r[t][6],className:"w-[40px] bg-transparent text-black font-bold text-center",disabled:!0}),"\xa0점"]})})},y=t=>{let{player:l}=t;return(0,s.jsx)("div",{className:"mt-1 mb-2 text-foreground",children:(0,s.jsx)("div",{className:"border-r-4 border-b-4 border-black w-[90px] flex relative bg-current-line",children:(0,s.jsxs)("div",{className:"self-center mx-auto",children:[(0,s.jsx)("input",{value:e[l][6]+r[l][6],className:"w-[40px] bg-transparent text-center font-bold text-d-cyan",disabled:!0}),"\xa0점"]})})})},w=l=>{let{player:c}=l;return(0,s.jsxs)("div",{className:"score",children:[(0,s.jsx)("div",{className:"mt-8 text-foreground",children:(0,s.jsxs)("p",{className:"w-[90px] border-r-4 border-t-4 border-black bg-gray-400",onClick:()=>{},children:["P",c+1,"\xa0",(0,s.jsxs)("span",{className:"font-bold text-d-cyan",children:["(",[...e[c],...r[c]].reduce((e,t)=>-1!==t?e+1:e,-2),")"]})]})}),(0,s.jsx)("div",{className:"mt-1",children:i.map((e,t)=>(0,s.jsx)(j,{player:c,eye:t+1},"upper_".concat(t+1)))}),(0,s.jsx)(f,{player:c}),(0,s.jsx)("div",{className:"mt-1",children:i.map((e,t)=>(0,s.jsx)(N,{player:c,order:t+1},"lower_".concat(t+1)))}),(0,s.jsx)(v,{player:c}),(0,s.jsx)(y,{player:c}),-1!==[...e[c],...r[c]].reduce((e,t)=>-1!==t?e+t:e)?p[c]?(0,s.jsx)("button",{className:"bg-d-red bt-drac",onClick:()=>{e[c]=[-1,-1,-1,-1,-1,-1,0],t([...e]),r[c]=[-1,-1,-1,-1,-1,-1,0],a([...r]),h(!1),g(e=>(e[c]=!1,[...e]))},children:"진짜죠?"}):(0,s.jsx)("button",{className:"bg-d-red bt-drac",onClick:()=>g(e=>(e[c]=!0,[...e])),children:"초기화"}):null]},"score_player_".concat(c+1))},k=e=>{let{eye:t}=e,r=d[t-1],l=x[t-1];return(0,s.jsx)("div",{className:"flex justify-center ".concat(t%2?"text-comment":"text-foreground"),children:(0,s.jsxs)("div",{className:"border-x-4 border-black w-[110px] h-14 flex py-2 ".concat(t%2?"bg-gray-50":"bg-gray-400"),children:[l,(0,s.jsx)("p",{className:"self-center font-semibold",children:r})]})})},_=e=>{let{order:t}=e;return(0,s.jsx)("div",{className:"flex justify-center text-[14px] ".concat(t%2?"text-foreground":"text-comment"),children:(0,s.jsxs)("div",{className:"w-[110px] h-14 flex border-x-4 border-black py-2 ".concat(t%2?"bg-gray-400":"bg-gray-50"),children:[(0,s.jsx)(c(),{width:32,height:40,src:"/imgs/yacht/svgs/"+i[t-1],className:"text-8 pt-2 mx-2 py-2 px-1",alt:i[t-1]}),(0,s.jsx)("p",{className:"self-center font-semibold",children:1===t?"초이스":2===t?"4카드":3===t?"풀하우스":4===t?"S.스트":5===t?"L.스트":"요트"})]})})},C=()=>(0,s.jsxs)("div",{className:"legend",children:[(0,s.jsx)("p",{className:"mt-8 text-foreground w-[110px] font-semibold border-x-4 border-t-4 border-black bg-gray-400",children:"족보"}),(0,s.jsx)("div",{className:"mt-1",children:i.map((e,t)=>(0,s.jsx)(k,{eye:t+1},"upper_".concat(t+1)))}),(0,s.jsx)("div",{className:"flex justify-center text-comment",children:(0,s.jsx)("div",{className:"w-[110px] h-8 flex border-x-4 border-black bg-gray-50",children:(0,s.jsxs)("p",{className:"self-center mx-auto font-semibold",children:["상체 합계 ",(0,s.jsx)("small",{className:"text-12px",children:"(+35)"})]})})}),(0,s.jsx)("div",{className:"mt-1",children:i.map((e,t)=>(0,s.jsx)(_,{order:t+1},"lower_".concat(t+1)))}),(0,s.jsx)("div",{className:"flex justify-center text-current-line",children:(0,s.jsx)("div",{className:"w-[110px] h-8 flex border-x-4 border-black bg-gray-400",children:(0,s.jsx)("p",{className:"self-center mx-auto font-semibold",children:"하체 합계"})})}),(0,s.jsx)("p",{className:"mt-1 mb-2 text-foreground w-[110px] font-semibold border-x-4 border-b-4 border-black bg-current-line",children:"총계"}),b?(0,s.jsx)("button",{className:"bg-d-yellow bt-drac",onClick:()=>{h(!1),g(e=>Array(e.length).fill(!1))},children:"수정완료"}):(0,s.jsx)("button",{className:"bg-d-orange bt-drac",onClick:()=>{h(!0),g(e=>Array(e.length).fill(!1))},children:"수정하기"}),(0,s.jsx)("div",{className:"h-[12px]"})]}),S=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mt-[10px] flex justify-center",children:(0,s.jsx)(c(),{src:"https://cdn.discordapp.com/attachments/781379080125677601/1083458930581196830/cO6Nr4y.png",width:200,height:200,className:"rounded-xl",alt:"yacht dice"})}),(0,s.jsxs)("div",{className:"mt-8 leading-8",children:[(0,s.jsx)("p",{children:(0,s.jsx)("span",{children:"플레이어 조작"})}),(0,s.jsxs)("p",{className:"mt-1",children:[(0,s.jsx)("button",{className:"bg-d-green bt-drac",onClick:()=>{t(e=>[...e,[-1,-1,-1,-1,-1,-1,0]]),a(e=>[...e,[-1,-1,-1,-1,-1,-1,0]]),g(e=>[...e,!1])},children:"추가"}),(0,s.jsx)("button",{className:"ml-3 bg-d-pink bt-drac",onClick:()=>{e.length>1&&(t(e=>{let t=[...e];return t.splice(e.length-1,1),t}),a(e=>{let t=[...e];return t.splice(e.length-1,1),t}),g(e=>{let t=[...e];return t.splice(e.length-1,1),t}))},children:"제거"})]})]}),(0,s.jsx)("div",{className:"overflow-auto hide-scrollbar w-fit mx-auto",children:(0,s.jsxs)("div",{className:"flex mx-auto",children:[(0,s.jsx)(C,{}),e.map((e,t)=>(0,s.jsx)(w,{player:t},"player_".concat(t+1)))]})})]});return(0,s.jsx)(n.Z,{program:S,title:"Yacht Dice 점수판"})}}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=8395)}),_N_E=e.O()}]);