"use strict";(self.webpackChunklukewire129_github_io=self.webpackChunklukewire129_github_io||[]).push([[79],{676:(t,e,o)=>{o.d(e,{A:()=>u});o(43);var a=o(475),n=o(464),s=o(579);function r(t){const e=new Date-new Date(t),o=Math.floor(e/1e3),a=Math.floor(o/60),n=Math.floor(a/60),s=Math.floor(n/24),r=Math.floor(s/7),d=Math.floor(s/30);return d>0?`${d} month(s) ago`:r>0?`${r} week(s) ago`:s>0?`${s} day(s) ago`:n>0?`${n} hour(s) ago`:a>0?`${a} minute(s) ago`:`${o} second(s) ago`}const d=n.Ay.div`
  max-width: 900px;
  background-color: #ffffff;
  /* 카드 배경색 */
  border: 1px solid #d1d1d1;
  /* 카드 경계선 추가 */
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 카드 그림자 효과 */
  padding: 40px;
`,i=(0,n.Ay)(a.N_)`
  color: #007acc;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;const c=function(t){const{data:e}=t;return(0,s.jsxs)(d,{children:[(0,s.jsx)(i,{to:"/postdetail",state:{data:e.path},children:e.metadata.title}),(0,s.jsx)("p",{style:{fontSize:"18px"},children:r(e.metadata.date)}),(0,s.jsx)("p",{style:{fontSize:"18px"},children:e.metadata.subtitle})]})};const l=n.Ay.div`
  display: grid;
  gap: 20px;
`;const u=function(t){const{post:e}=t;return(0,s.jsx)(l,{children:e&&e.map((t=>function(t){for(let e in t)return!1;return!0}(t.metadata)?null:(0,s.jsx)(c,{data:t})))})}},79:(t,e,o)=>{o.r(e),o.d(e,{default:()=>d});var a=o(43),n=o(136),s=o(676),r=(o(468),o(579));const d=function(){const[t,e]=(0,a.useState)([]);return(0,a.useEffect)((()=>{n.s.get("/recentblogs.json").then((t=>{const{code:o,data:a}=t;console.log(a),e(a.files.sort(((t,e)=>new Date(e.metadata.date)-new Date(t.metadata.date))))}))}),[]),(0,r.jsx)(s.A,{post:t})}}}]);
//# sourceMappingURL=79.68a8975a.chunk.js.map