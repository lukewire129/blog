"use strict";(self.webpackChunkreactstudyblog=self.webpackChunkreactstudyblog||[]).push([[79],{676:(t,a,e)=>{e.d(a,{A:()=>f});e(43);var o=e(475),n=e(464),s=e(579);function r(t){const a=new Date-new Date(t),e=Math.floor(a/1e3),o=Math.floor(e/60),n=Math.floor(o/60),s=Math.floor(n/24),r=Math.floor(s/7),d=Math.floor(s/30);return d>0?`${d} month(s) ago`:r>0?`${r} week(s) ago`:s>0?`${s} day(s) ago`:n>0?`${n} hour(s) ago`:o>0?`${o} minute(s) ago`:`${e} second(s) ago`}const d=n.Ay.div`
  max-width: 900px;
  background-color: #ffffff;
  /* 카드 배경색 */
  border: 1px solid #d1d1d1;
  /* 카드 경계선 추가 */
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 카드 그림자 효과 */
  padding: 40px;
`,c=(0,n.Ay)(o.N_)`
  color: #007acc;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;const l=function(t){const{data:a}=t;return(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{to:"/postdetail",state:{data:a.path},children:a.metadata.title}),(0,s.jsx)("p",{style:{fontSize:"18px"},children:r(a.metadata.date)}),(0,s.jsx)("p",{style:{fontSize:"18px"},children:a.metadata.subtitle})]})};const i=n.Ay.div`
  display: grid;
  gap: 20px;
`;const f=function(t){const{post:a}=t;return(0,s.jsx)(i,{children:a&&a.map((t=>function(t){for(let a in t)return!1;return!0}(t.metadata)?null:(0,s.jsx)(l,{data:t})))})}},79:(t,a,e)=>{e.r(a),e.d(a,{default:()=>d});var o=e(43),n=e(136),s=e(676),r=(e(468),e(579));const d=function(){const[t,a]=(0,o.useState)([]);return(0,o.useEffect)((()=>{n.s.get("/recentblogs.json").then((t=>{const{code:e,data:o}=t;console.log(o),a(o.files.sort(((t,a)=>new Date(a.metadata.date)-new Date(t.metadata.date))))}))}),[]),(0,r.jsx)(s.A,{post:t})}}}]);
//# sourceMappingURL=79.8f1ae5e7.chunk.js.map