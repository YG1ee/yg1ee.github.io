(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{2808:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/program/Yacht",function(){return r(4422)}])},9249:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var l=r(5893),a=r(1664),s=r.n(a);function c(e){let{program:t}=e;return(0,l.jsxs)("div",{className:"w-5/6 max-w-4xl mx-auto pb-16",children:[(0,l.jsx)("p",{className:"mt-12 mb-16 w-fit text-green hover:text-yellow transition duration-500",children:(0,l.jsx)(s(),{href:"/",children:"\uD83C\uDFE0 홈으로 돌아가기"})}),t]})}},4422:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var l=r(5893),a=r(7294),s=r(6154),c=r(5675),n=r.n(c),x=r(9249);let i=["에이스","듀얼","트리플","쿼드","펜타","헥사"],d=["Choice.svg","4 of a Kind.svg","Full House.svg","S. Straight.svg","L. Straight.svg","Yacht.svg"],o=[];for(let e=0;e<6;e++)o.push((0,l.jsx)("img",{src:"/imgs/yacht/svgs/dice".concat(e+1,".svg"),width:32,height:32,className:"px-[4px] mx-[8px]",alt:i[e+1]},"dice".concat(e+1)));function m(){let[e,t]=(0,a.useState)(3),[r,c]=(0,a.useState)([[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0]]),[m,p]=(0,a.useState)([[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0],[-1,-1,-1,-1,-1,-1,0]]),[b,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let t=!1;for(let l=0;l<e;l++){for(let e=0;e<6;e++)if(-1===r[l][e]||-1===m[l][e]){t=!0;break}if(t)break}u(!t)},[m,e,r]);let h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=0;for(let t=0;t<6;t++)-1!==e[t]&&(r+=e[t]);return t&&r>=63&&(r+=35),r},[g,f]=(0,a.useState)(!1),[j,N]=(0,a.useState)(!1),[v,y]=(0,a.useState)([!1,!1,!1]),k=e=>{let{player:t,eye:a}=e;return(0,l.jsx)("div",{className:"border-r-4 border-black w-[90px] h-[60px] flex relative ".concat(a%2?"bg-gray-50 text-comment":"bg-gray-400 text-foreground"),children:(0,l.jsxs)("div",{className:"self-center w-[90px] mx-auto",children:[-1===r[t][a-1]?(0,l.jsx)("form",{onSubmit:e=>{e.preventDefault(),r[t][a-1]=parseInt(e.target[0].value),r[t][6]=h(r[t],1),N(!1),y(e=>Array(e.length).fill(!1)),c([...r])},onBlur:e=>{let t=document.createElement("button");e.target.appendChild(t),t.click(),e.target.removeChild(t)},className:"inline",children:(0,l.jsx)("input",{type:"number",min:0,step:a,max:5*a,pattern:"\\d*",required:!0,className:"w-[50px] text-center bg-black text-foreground"})}):(0,l.jsx)("p",{className:"w-[50px] inline-block font-bold text-center ".concat(r[t][a-1]?"text-black":"text-red"),onClick:()=>{j&&(r[t][a-1]=-1,r[t][6]=h(r[t],1),c([...r]))},children:r[t][a-1]}),"\xa0점"]})})},w=e=>{let{player:t}=e;return(0,l.jsx)("div",{className:"text-comment flex border-r-4 border-black w-[90px] h-[32px] bg-gray-50",children:(0,l.jsxs)("p",{className:"self-center mx-auto",children:[(0,l.jsx)("span",{className:"text-black font-bold text-center".concat(r[t][6]>=98?" purple":""),children:r[t][6]}),"\xa0/ 63\xa0점"]})})},_=e=>{let{player:t,order:r}=e;return(0,l.jsx)("div",{className:"border-r-4 border-black w-[90px] h-[56px] flex relative ".concat(r%2?"bg-gray-400 text-foreground":"bg-gray-50 text-comment"),children:(0,l.jsxs)("div",{className:"self-center mx-auto",children:[-1===m[t][r-1]?(0,l.jsx)("form",{onSubmit:e=>{e.preventDefault(),m[t][r-1]=parseInt(e.target[0].value),m[t][6]=h(m[t]),N(!1),y(e=>Array(e.length).fill(!1)),p([...m])},className:"inline",onBlur:e=>{let t=document.createElement("button");e.target.appendChild(t),t.click(),e.target.removeChild(t)},children:r<4?(0,l.jsx)("input",{type:"number",min:0,max:30,pattern:"\\d*",required:!0,className:"w-[50px] text-center bg-black text-foreground placeholder:italic placeholder:text-gray-600"}):(0,l.jsxs)("select",{className:"bg-black text-current-line w-[50px] rounded-[4px]",children:[(0,l.jsx)("option",{value:4===r?15:5===r?30:50,children:4===r?15:5===r?30:50}),(0,l.jsx)("option",{value:0,children:"0"})]})}):(0,l.jsx)("p",{className:"w-[50px] inline-block font-bold text-center ".concat(m[t][r-1]?"text-black":"text-red"),onClick:()=>{j&&(m[t][r-1]=-1,m[t][6]=h(m[t]),p([...m]))},children:m[t][r-1]}),"\xa0점"]})})},C=e=>{let{player:t}=e;return(0,l.jsx)("div",{className:"text-foreground flex border-r-4 border-black w-[90px] h-[32px] bg-gray-400",children:(0,l.jsxs)("p",{className:"self-center mx-auto",children:[(0,l.jsx)("input",{value:m[t][6],className:"w-[40px] bg-transparent text-black font-bold text-center",disabled:!0}),"\xa0점"]})})},S=e=>{let{player:t}=e;return(0,l.jsx)("div",{className:"mt-[4px] mb-[8px] text-foreground",children:(0,l.jsx)("div",{className:"border-r-4 border-b-4 border-black w-[90px] flex relative bg-current-line",children:(0,l.jsxs)("div",{className:"self-center mx-auto",children:[(0,l.jsx)("input",{value:r[t][6]+m[t][6],className:"w-[40px] bg-transparent text-center font-bold text-cyan",disabled:!0}),"\xa0점"]})})})},E=e=>{let{player:t}=e;return(0,l.jsxs)("div",{className:"score",children:[(0,l.jsx)("div",{className:"mt-[32px] text-foreground",children:(0,l.jsxs)("p",{className:"w-[90px] border-r-4 border-t-4 border-black bg-gray-400",onClick:()=>{},children:["P",t+1," ",(0,l.jsxs)("span",{className:"font-bold text-cyan",children:["(",[...r[t],...m[t]].reduce((e,t)=>-1!==t?e+1:e,-2),")"]})]})}),(0,l.jsx)("div",{className:"mt-[4px]",children:d.map((e,r)=>(0,l.jsx)(k,{player:t,eye:r+1},"upper_".concat(r+1)))}),(0,l.jsx)(w,{player:t}),(0,l.jsx)("div",{className:"mt-[4px]",children:d.map((e,r)=>(0,l.jsx)(_,{player:t,order:r+1},"lower_".concat(r+1)))}),(0,l.jsx)(C,{player:t}),(0,l.jsx)(S,{player:t}),-1!==[...r[t],...m[t]].reduce((e,t)=>-1!==t?e+t:e)?v[t]?(0,l.jsx)("button",{className:"bg-red bt-drac",onClick:()=>{r[t]=[-1,-1,-1,-1,-1,-1,0],c([...r]),m[t]=[-1,-1,-1,-1,-1,-1,0],p([...m]),N(!1),y(e=>(e[t]=!1,[...e]))},children:"진짜죠?"}):(0,l.jsx)("button",{className:"bg-red bt-drac",onClick:()=>y(e=>(e[t]=!0,[...e])),children:"초기화"}):null]},"score_player_".concat(t+1))},A=e=>{let{eye:t}=e,r=i[t-1],a=o[t-1];return(0,l.jsx)("div",{className:"flex justify-center ".concat(t%2?"text-comment":"text-foreground"),children:(0,l.jsxs)("div",{className:"border-x-4 border-black w-[120px] h-[60px] flex py-[8px] ".concat(t%2?"bg-gray-50":"bg-gray-400"),children:[a,(0,l.jsx)("p",{className:"self-center font-semibold",children:r})]})})},D=e=>{let{order:t}=e;return(0,l.jsx)("div",{className:"flex justify-center text-[14px] ".concat(t%2?"text-foreground":"text-comment"),children:(0,l.jsxs)("div",{className:"w-[120px] h-[56px] flex border-x-4 border-black py-[8px] ".concat(t%2?"bg-gray-400":"bg-gray-50"),children:[(0,l.jsx)("img",{width:32,height:40,src:"/imgs/yacht/svgs/"+d[t-1],className:"text-[32px] pt-[8px] mx-[8px] py-[8px] px-[4px]",alt:d[t-1]}),(0,l.jsx)("p",{className:"self-center font-semibold",children:1===t?"초이스":2===t?"4카드":3===t?"풀하우스":4===t?"S.스트":5===t?"L.스트":"요트"})]})})},O=()=>(0,l.jsxs)("div",{className:"legend",children:[(0,l.jsx)("p",{className:"mt-[32px] text-foreground w-[120px] font-semibold border-x-4 border-t-4 border-black bg-gray-400",children:"족보"}),(0,l.jsx)("div",{className:"mt-[4px]",children:d.map((e,t)=>(0,l.jsx)(A,{eye:t+1},"upper_".concat(t+1)))}),(0,l.jsx)("div",{className:"flex justify-center text-comment",children:(0,l.jsx)("div",{className:"w-[120px] h-[32px] flex border-x-4 border-black bg-gray-50",children:(0,l.jsxs)("p",{className:"self-center mx-auto font-semibold",children:["상체 합계 ",(0,l.jsx)("span",{className:"text-12px",children:"(+35)"})]})})}),(0,l.jsx)("div",{className:"mt-[4px]",children:d.map((e,t)=>(0,l.jsx)(D,{order:t+1},"lower_".concat(t+1)))}),(0,l.jsx)("div",{className:"flex justify-center text-current-line",children:(0,l.jsx)("div",{className:"w-[120px] h-[32px] flex border-x-4 border-black bg-gray-400",children:(0,l.jsx)("p",{className:"self-center mx-auto font-semibold",children:"하체 합계"})})}),(0,l.jsx)("p",{className:"mt-[4px] mb-[8px] text-foreground w-[120px] font-semibold border-x-4 border-b-4 border-black bg-current-line",children:"총계"}),j?(0,l.jsx)("button",{className:"bg-yellow bt-drac",onClick:()=>{N(!1),y(e=>Array(e.length).fill(!1))},children:"수정완료"}):(0,l.jsx)("button",{className:"bg-orange bt-drac",onClick:()=>{N(!0),y(e=>Array(e.length).fill(!1))},children:"수정하기"}),(0,l.jsx)("div",{className:"h-[12px]"})]}),B=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"mt-[10px] flex justify-center",children:(0,l.jsx)(n(),{src:"https://cdn.discordapp.com/attachments/781379080125677601/1083458930581196830/cO6Nr4y.png",width:200,height:200,alt:"yacht dice"})}),(0,l.jsxs)("div",{className:"mt-[32px] leading-8",children:[(0,l.jsx)("p",{children:(0,l.jsx)("span",{children:"플레이어 조작"})}),(0,l.jsxs)("p",{className:"mt-[4px]",children:[(0,l.jsx)("button",{className:"bg-green bt-drac mr-3",onClick:()=>{t(e=>e+1),c(e=>[...e,[-1,-1,-1,-1,-1,-1,0]]),p(e=>[...e,[-1,-1,-1,-1,-1,-1,0]]),y(e=>[...e,!1])},children:"추가"}),(0,l.jsx)("button",{className:"bg-pink bt-drac",onClick:()=>{e>1&&(t(e=>e-1),c(e=>{let t=[...e];return t.splice(e.length-1,1),t}),p(e=>{let t=[...e];return t.splice(e.length-1,1),t}),y(e=>{let t=[...e];return t.splice(e.length-1,1),t}))},children:"제거"})]})]}),(0,l.jsx)("div",{className:"overflow-auto hide-scrollbar",children:(0,l.jsxs)("div",{className:"flex mx-auto max-w-min",children:[(0,l.jsx)(O,{}),Array(e).fill(1).map((e,t)=>(0,l.jsx)(E,{player:t},"player_".concat(t+1)))]})}),b?(0,l.jsx)("button",{className:"mt-[8px] bg-purple bt-drac",onClick:()=>s.Z.post("".concat((void 0).VITE_DB_URL,"/api/yacht/save"),{upper_score:r,lower_score:m}).then(e=>"OK"!==e.data?alert("저장 오류"):alert("저장 성공")).catch(e=>{console.log(e),alert("통신 오류")}),children:"결과 저장하기"}):null]});return(0,l.jsx)(x.Z,{program:B})}}},function(e){e.O(0,[664,675,154,774,888,179],function(){return e(e.s=2808)}),_N_E=e.O()}]);