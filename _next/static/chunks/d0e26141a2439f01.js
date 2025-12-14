(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9105,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},32711,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},49369,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(92381)._(e.r(32711)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${o}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},58522,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(74442);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},26364,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return x},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let g="undefined"!=typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},43831,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(26364),o=e.r(72654);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},16063,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},1272,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},useLinkStatus:function(){return v}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(92381),i=e.r(64900),s=a._(e.r(74442)),l=e.r(49369),c=e.r(17935),u=e.r(58522),d=e.r(26364),f=e.r(78242);e.r(9105);let p=e.r(2448),h=e.r(43831),g=e.r(88675);function m(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function y(t){var r;let n,o,a,[l,y]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:x,as:j,children:_,prefetch:w=null,passHref:P,replace:O,shallow:T,scroll:C,onClick:E,onMouseEnter:S,onTouchStart:k,legacyBehavior:N=!1,onNavigate:R,ref:L,unstable_dynamicOnHover:I,...A}=t;n=_,N&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let U=s.default.useContext(c.AppRouterContext),M=!1!==w,F=!1!==w?null===(r=w)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:$,as:z}=s.default.useMemo(()=>{let e=m(x);return{href:e,as:j?m(j):e}},[x,j]);if(N){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(n)}let B=N?o&&"object"==typeof o&&o.ref:L,D=s.default.useCallback(e=>(null!==U&&(v.current=(0,p.mountLinkInstance)(e,$,U,F,M,y)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[M,$,U,F,y]),K={ref:(0,u.useMergedRef)(D,B),onClick(t){N||"function"!=typeof E||E(t),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,r,n,o,a,i,l){if("undefined"!=typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(66676);s.default.startTransition(()=>{d(n||r,a?"replace":"push",i??!0,o.current)})}}(t,$,z,v,O,C,R)},onMouseEnter(e){N||"function"!=typeof S||S(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){N||"function"!=typeof k||k(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,d.isAbsoluteUrl)(z)?K.href=z:N&&!P&&("a"!==o.type||"href"in o.props)||(K.href=(0,f.addBasePath)(z)),a=N?s.default.cloneElement(o,K):(0,i.jsx)("a",{...A,...K,children:n}),(0,i.jsx)(b.Provider,{value:l,children:a})}e.r(16063);let b=(0,s.createContext)(p.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},27630,(e,t,r)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},62386,(e,t,r)=>{"use strict";var n=e.r(27630);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},86301,(e,t,r)=>{t.exports=e.r(62386)()},79585,e=>{"use strict";e.i(80041);var t=e.i(64900);e.i(74442);var r=e.i(1272),n=e.i(88765),o=e.i(86301),a=e.i(34395);let i=a.default.header.withConfig({displayName:"header-styles__Head",componentId:"sc-ae9c87aa-0"})`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  padding: var(--space-md) var(--space-lg);
  transition: all 0.3s ease;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-md);
  }
`,s=a.default.div.withConfig({displayName:"header-styles__Logo",componentId:"sc-ae9c87aa-1"})`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  
  img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: rotate(-5deg) scale(1.05);
  }

  h1 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.25rem;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
`,l=a.default.nav.withConfig({displayName:"header-styles__Nav",componentId:"sc-ae9c87aa-2"})`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: var(--space-sm);
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      
      a {
        display: block;
        padding: var(--space-sm) var(--space-md);
        color: var(--text-dark);
        font-weight: 500;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: all 0.3s ease;
        border-radius: var(--radius-sm);

        &:hover {
          color: var(--primary-color);
          background: rgba(255, 55, 0, 0.05);
        }

        &.active {
          color: var(--primary-color);
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-xs);

      li a {
        padding: var(--space-xs) var(--space-sm);
        font-size: 0.85rem;
      }
    }
  }
`,c=({siteTitle:e})=>(0,t.jsxs)(i,{children:[(0,t.jsx)(r.default,{href:"/",children:(0,t.jsxs)(s,{children:[(0,t.jsx)(n.default,{src:"/libre-logos/images/ll-logo.svg",alt:"Libre Logos",width:50,height:50}),(0,t.jsx)("h1",{children:e})]})}),(0,t.jsx)(l,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:"/",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:"/all",children:"All Logos"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:"/available",children:"Available"})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:"/claimed",children:"Claimed"})})]})})]});c.propTypes={siteTitle:o.default.string},c.defaultProps={siteTitle:""},e.s(["default",0,c],79585)},22412,e=>{"use strict";var t=e.i(64900);e.i(74442);var r=e.i(34395);let n=r.default.footer.withConfig({displayName:"footer-styles__FooterWrapper",componentId:"sc-c4e8f4ca-0"})`
  background: var(--text-dark);
  color: var(--bg-white);
  margin-top: var(--space-2xl);
`,o=r.default.div.withConfig({displayName:"footer-styles__FooterContent",componentId:"sc-c4e8f4ca-1"})`
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-lg);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    padding: var(--space-2xl) var(--space-xl);
  }
`,a=r.default.div.withConfig({displayName:"footer-styles__FooterSection",componentId:"sc-c4e8f4ca-2"})`
  h4 {
    color: var(--bg-white);
    font-size: 1.125rem;
    margin-bottom: var(--space-md);
    font-weight: 700;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: var(--space-sm) 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: var(--space-sm);
  }

  a {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      color: var(--primary-color);
      transform: translateX(4px);
    }
  }
`,i=r.default.div.withConfig({displayName:"footer-styles__Blurb",componentId:"sc-c4e8f4ca-3"})`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;e.s(["default",0,()=>(0,t.jsxs)(n,{children:[(0,t.jsxs)(o,{children:[(0,t.jsxs)(a,{children:[(0,t.jsx)("h4",{children:"About Libre Logos"}),(0,t.jsx)("p",{children:"Free, exclusive logos for open source projects and NGOs. Each logo is claimed once with full copyright transfer."}),(0,t.jsxs)("ul",{style:{marginTop:"var(--space-md)"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/enjeck/libre-logos#readme",children:"About"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/enjeck/libre-logos/blob/main/CONTRIBUTING.md",children:"Contribute"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://github.com/enjeck/libre-logos",children:"GitHub"})})]})]}),(0,t.jsxs)(a,{children:[(0,t.jsx)("h4",{children:"Stay Updated"}),(0,t.jsx)("p",{children:"Star and watch the repository on GitHub to be notified when new logos are added."}),(0,t.jsx)("a",{href:"https://github.com/enjeck/libre-logos",style:{marginTop:"var(--space-md)",padding:"10px 20px",background:"var(--primary-color)",color:"white",borderRadius:"var(--radius-sm)",fontWeight:"600"},children:"Watch on GitHub"})]})]}),(0,t.jsx)(i,{children:(0,t.jsxs)("p",{children:["Copyright © ",new Date().getFullYear()," Libre Logos. All rights reserved."]})})]})],22412)},66103,(e,t,r)=>{t.exports=e.r(5731)},95242,e=>{"use strict";var t=e.i(64900),r=e.i(74442),n=e.i(66103),o=e.i(34395);function a({children:e}){let[a]=(0,r.useState)(()=>new o.ServerStyleSheet);return(0,n.useServerInsertedHTML)(()=>{let e=a.getStyleElement();return a.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}e.s(["default",()=>a])}]);