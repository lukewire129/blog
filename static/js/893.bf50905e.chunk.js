"use strict";(self.webpackChunkreactstudyblog=self.webpackChunkreactstudyblog||[]).push([[893],{893:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var o=a(43),n=a(921),s=a(475),r=a(464),d=a(579);function c(t){const e=new Date-new Date(t),a=Math.floor(e/1e3),o=Math.floor(a/60),n=Math.floor(o/60),s=Math.floor(n/24),r=Math.floor(s/7),d=Math.floor(s/30);return d>0?`${d} month(s) ago`:r>0?`${r} week(s) ago`:s>0?`${s} day(s) ago`:n>0?`${n} hour(s) ago`:o>0?`${o} minute(s) ago`:`${a} second(s) ago`}const i=(0,r.Ay)(s.N_)`
  color: gray;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;const l=function(t){const{data:e}=t;return(0,d.jsxs)("div",{style:{minWidth:"769px",justifyContent:"center"},children:[(0,d.jsx)(i,{to:"/postdetail",state:{data:e.path},children:e.metadata.title}),(0,d.jsx)("p",{style:{fontSize:"18px"},children:c(e.metadata.date)}),(0,d.jsx)("p",{style:{fontSize:"18px"},children:e.metadata.subtitle}),(0,d.jsx)("hr",{style:{background:"#f5f5f5",height:"1px",border:"0"}})]})};const u=function(t){const{post:e}=t;return(0,d.jsx)("div",{style:{width:"58.33333%",padding:".75rem"},children:e&&e.map((t=>function(t){for(let e in t)return!1;return!0}(t.metadata)?null:(0,d.jsx)(l,{data:t})))})};const f=function(){const[t,e]=(0,o.useState)([]);return(0,o.useEffect)((()=>{n.s.get("/recentblogs.json").then((t=>{const{code:a,data:o}=t;console.log(o),e(o.files.sort(((t,e)=>new Date(e.metadata.date)-new Date(t.metadata.date))))}))}),[]),(0,d.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:(0,d.jsx)(u,{post:t})})}},921:(t,e,a)=>{a.d(e,{s:()=>o});const o=a(213).A.create({baseURL:"https://lukewire129.github.io/data"})}}]);
//# sourceMappingURL=893.bf50905e.chunk.js.map