(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39894,e=>{"use strict";var i=e.i(64900),t=e.i(74442),a=e.i(1272),s=e.i(88765),l=e.i(34395);let r=l.default.div.withConfig({displayName:"logosgrid-styles__StyledGroup",componentId:"sc-255f16e7-0"})`
  height: 100%;
  width: 100% !important;
`,o=l.default.div.withConfig({displayName:"logosgrid-styles__Item",componentId:"sc-255f16e7-1"})`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 15px;
  padding: var(--space-md);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    background: var(--bg-light);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

    img {
      transform: scale(1.05);
    }
  }

  img {
    transition: transform 0.3s ease;
  }
`;var d=e.i(86301);let n=({logos:e})=>{let[l]=(0,t.useState)(e);return(0,i.jsx)("div",{className:"logosgrid",children:(0,i.jsx)(r,{className:"content",children:l.map(e=>(0,i.jsxs)(o,{children:[(0,i.jsxs)("div",{className:"img-contain",style:{position:"relative"},children:[(0,i.jsx)(a.default,{href:`/logo/${e.id}`,children:(0,i.jsx)(s.default,{src:e.img,alt:e.name,width:300,height:300,style:{width:"100%",height:"auto"}})}),"Available"!==e.availability&&(0,i.jsx)("span",{className:"tag",children:e.availability})]}),(0,i.jsx)(a.default,{href:`/logo/${e.id}`,children:(0,i.jsx)("h3",{style:{color:"blue"},children:e.name})})]},e.id))})})};n.propTypes={logos:d.default.array},e.s(["default",0,n],39894)}]);