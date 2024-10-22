"use strict";(self.webpackChunkreactstudyblog=self.webpackChunkreactstudyblog||[]).push([[893],{893:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var o=a(43),s=a(921),n=a(475),r=a(464),d=a(579);function c(t){const e=new Date-new Date(t),a=Math.floor(e/1e3),o=Math.floor(a/60),s=Math.floor(o/60),n=Math.floor(s/24),r=Math.floor(n/7),d=Math.floor(n/30);return d>0?`${d} month(s) ago`:r>0?`${r} week(s) ago`:n>0?`${n} day(s) ago`:s>0?`${s} hour(s) ago`:o>0?`${o} minute(s) ago`:`${a} second(s) ago`}const i=r.Ay.div`
  background-color: #ffffff;
  /* 카드 배경색 */
  border: 1px solid #d1d1d1;
  /* 카드 경계선 추가 */
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 카드 그림자 효과 */
  padding: 40px;
`,l=(0,r.Ay)(n.N_)`
  color: #007acc;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;const u=function(t){const{data:e}=t;return(0,d.jsxs)(i,{children:[(0,d.jsx)(l,{to:"/postdetail",state:{data:e.path},children:e.metadata.title}),(0,d.jsx)("p",{style:{fontSize:"18px"},children:c(e.metadata.date)}),(0,d.jsx)("p",{style:{fontSize:"18px"},children:e.metadata.subtitle})]})};const f=r.Ay.div`
  display: grid;
  gap: 20px;
`;const p=function(t){const{post:e}=t;return(0,d.jsx)(f,{children:e&&e.map((t=>function(t){for(let e in t)return!1;return!0}(t.metadata)?null:(0,d.jsx)(u,{data:t})))})};a(468);const h=function(){const[t,e]=(0,o.useState)([]);return(0,o.useEffect)((()=>{s.s.get("/recentblogs.json").then((t=>{const{code:a,data:o}=t;console.log(o),e(o.files.sort(((t,e)=>new Date(e.metadata.date)-new Date(t.metadata.date))))}))}),[]),(0,d.jsx)("div",{className:"main",children:(0,d.jsx)(p,{post:t})})}},921:(t,e,a)=>{a.d(e,{s:()=>o});const o=a(213).A.create({baseURL:"https://lukewire129.github.io/data"})},468:()=>{}}]);
//# sourceMappingURL=893.fddcca10.chunk.js.map