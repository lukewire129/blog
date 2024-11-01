"use strict";(self.webpackChunkreactstudyblog=self.webpackChunkreactstudyblog||[]).push([[306],{676:(t,a,o)=>{o.d(a,{A:()=>p});o(43);var e=o(475),s=o(464),n=o(579);function r(t){const a=new Date-new Date(t),o=Math.floor(a/1e3),e=Math.floor(o/60),s=Math.floor(e/60),n=Math.floor(s/24),r=Math.floor(n/7),d=Math.floor(n/30);return d>0?`${d} month(s) ago`:r>0?`${r} week(s) ago`:n>0?`${n} day(s) ago`:s>0?`${s} hour(s) ago`:e>0?`${e} minute(s) ago`:`${o} second(s) ago`}const d=s.Ay.div`
  max-width: 900px;
  background-color: #ffffff;
  /* 카드 배경색 */
  border: 1px solid #d1d1d1;
  /* 카드 경계선 추가 */
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* 카드 그림자 효과 */
  padding: 40px;
`,c=(0,s.Ay)(e.N_)`
  color: #007acc;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
`;const l=function(t){const{data:a}=t,o=a.path.split("/")[1],e=a.path.split("/")[2],s=a.path.split("/")[3];return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{to:`/postdetail?category=${o}&title=${e}&name=${s}`,children:a.metadata.title}),(0,n.jsx)("p",{style:{fontSize:"18px"},children:r(a.metadata.date)}),(0,n.jsx)("p",{style:{fontSize:"18px"},children:a.metadata.subtitle})]})};const i=s.Ay.div`
  display: grid;
  gap: 20px;
`;const p=function(t){const{post:a}=t;return(0,n.jsx)(i,{children:a&&a.map((t=>function(t){for(let a in t)return!1;return!0}(t.metadata)?null:(0,n.jsx)(l,{data:t})))})}},306:(t,a,o)=>{o.r(a),o.d(a,{default:()=>d});var e=o(216),s=o(676),n=(o(468),o(43)),r=o(579);const d=function(){const t=(0,e.zy)().state;return(0,n.useEffect)((()=>{0===t.type&&console.log(t.data.blogs)}),[t]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["\uac80\uc0c9 \uacb0\uacfc :"," ",0===t.type?t.data.categoryname:t.data.tagname]}),(0,r.jsx)(s.A,{post:t.data.blogs}),";"]})}}}]);
//# sourceMappingURL=306.9a2dfb63.chunk.js.map