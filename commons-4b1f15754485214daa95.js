/*! For license information please see commons-4b1f15754485214daa95.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},"3Z9Z":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),o=n.n(i),s=n("q1tI"),c=n.n(s),l=n("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.noGutters,f=e.as,d=void 0===f?"div":f,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(l.a)(n,"row"),b=v+"-cols",m=[];return u.forEach((function(e){var t,n=p[e];delete p[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&m.push(""+b+a+"-"+t)})),c.a.createElement(d,Object(a.a)({ref:t},p,{className:o.a.apply(void 0,[i,v,s&&"no-gutters"].concat(m))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},ANPE:function(e,t,n){"use strict";function a(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var r=/([A-Z])/g;var i=/^ms-/;function o(e){return function(e){return e.replace(r,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(o(t))||function(e,t){return a(e).getComputedStyle(e,t)}(e).getPropertyValue(o(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!s.test(e))}(a)?n+=o(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(o(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},Ac47:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("wx14"),s=n("zLVn"),c=n("TSYQ"),l=n.n(c),u=n("vUet"),f=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,i=e.as,c=void 0===i?"div":i,f=e.className,d=Object(s.a)(e,["bsPrefix","fluid","as","className"]),p=Object(u.a)(n,"container"),v="string"==typeof a?"-"+a:"-fluid";return r.a.createElement(c,Object(o.a)({ref:t},d,{className:l()(f,a?""+p+v:p)}))}));f.displayName="Container",f.defaultProps={fluid:!1};var d=f,p=n("3Z9Z"),v=n("JI6e"),b=n("JCAc"),m=n("YdCC"),h=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.as,c=Object(s.a)(e,["bsPrefix","className","as"]);n=Object(u.a)(n,"navbar-brand");var f=i||(c.href?"a":"span");return r.a.createElement(f,Object(o.a)({},c,{ref:t,className:l()(a,n)}))}));h.displayName="NavbarBrand";var E,x=h,y=n("dI71"),g=n("ANPE"),O=n("CR+v"),j=n("dRu9"),N=n("Qg85"),w=n("z+q/"),C={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var P=((E={})[j.c]="collapse",E[j.d]="collapsing",E[j.b]="collapsing",E[j.a]="collapse show",E),S={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=C[e];return n+parseInt(Object(g.a)(t,a[0]),10)+parseInt(Object(g.a)(t,a[1]),10)}},k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",Object(w.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(y.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"==typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,a=t.onEntering,i=t.onEntered,c=t.onExit,u=t.onExiting,f=t.className,d=t.children,p=Object(s.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var v=Object(N.a)(this.handleEnter,n),b=Object(N.a)(this.handleEntering,a),m=Object(N.a)(this.handleEntered,i),h=Object(N.a)(this.handleExit,c),E=Object(N.a)(this.handleExiting,u);return r.a.createElement(j.e,Object(o.a)({addEndListener:O.a},p,{"aria-expanded":p.role?p.in:null,onEnter:v,onEntering:b,onEntered:m,onExit:h,onExiting:E}),(function(t,n){return r.a.cloneElement(d,Object(o.a)({},n,{className:l()(f,d.props.className,P[t],"width"===e.getDimension()&&"width")}))}))},t}(r.a.Component);k.defaultProps=S;var T=k,R=r.a.createContext(null),I=r.a.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,i=Object(s.a)(e,["children","bsPrefix"]);return a=Object(u.a)(a,"navbar-collapse"),r.a.createElement(R.Consumer,null,(function(e){return r.a.createElement(T,Object(o.a)({in:!(!e||!e.expanded)},i),r.a.createElement("div",{ref:t,className:a},n))}))}));I.displayName="NavbarCollapse";var D=I,L=n("ZCiN"),A=r.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.children,f=e.label,d=e.as,p=void 0===d?"button":d,v=e.onClick,b=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(u.a)(n,"navbar-toggler");var m=Object(a.useContext)(R)||{},h=m.onToggle,E=m.expanded,x=Object(L.a)((function(e){v&&v(e),h&&h()}));return"button"===p&&(b.type="button"),r.a.createElement(p,Object(o.a)({},b,{ref:t,onClick:x,"aria-label":f,className:l()(i,n,!E&&"collapsed")}),c||r.a.createElement("span",{className:n+"-icon"}))}));A.displayName="NavbarToggle",A.defaultProps={label:"Toggle navigation"};var K=A,q=r.a.createContext(),M=function(e,t){return null!=e?String(e):t||null},_=q,V=r.a.forwardRef((function(e,t){var n=Object(b.a)(e,{expanded:"onToggle"}),i=n.bsPrefix,c=n.expand,f=n.variant,d=n.bg,p=n.fixed,v=n.sticky,m=n.className,h=n.children,E=n.as,x=void 0===E?"nav":E,y=n.expanded,g=n.onToggle,O=n.onSelect,j=n.collapseOnSelect,N=Object(s.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);i=Object(u.a)(i,"navbar");var w=Object(a.useCallback)((function(){O&&O.apply(void 0,arguments),j&&y&&g(!1)}),[O,j,y,g]);void 0===N.role&&"nav"!==x&&(N.role="navigation");var C=i+"-expand";"string"==typeof c&&(C=C+"-"+c);var P=Object(a.useMemo)((function(){return{onToggle:function(){return g(!y)},bsPrefix:i,expanded:y}}),[i,y,g]);return r.a.createElement(R.Provider,{value:P},r.a.createElement(_.Provider,{value:w},r.a.createElement(x,Object(o.a)({ref:t},N,{className:l()(m,i,c&&C,f&&i+"-"+f,d&&"bg-"+d,v&&"sticky-"+v,p&&"fixed-"+p)}),h)))}));V.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},V.displayName="Navbar",V.Brand=x,V.Toggle=K,V.Collapse=D,V.Text=Object(m.a)("navbar-text",{Component:"span"});var U=V,z=(n("K9S6"),r.a.createContext(null)),Y=Function.prototype.bind.call(Function.prototype.call,[].slice);var Q=n("YGJp"),J=n("lcWJ"),Z=r.a.createContext(null),B=r.a.createContext(null),F=function(){},G=r.a.forwardRef((function(e,t){var n,i,c=e.as,l=void 0===c?"ul":c,u=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(s.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(Q.a)(),m=Object(a.useRef)(!1),h=Object(a.useContext)(_),E=Object(a.useContext)(B);E&&(d=d||"tablist",f=E.activeKey,n=E.getControlledId,i=E.getControllerId);var x=Object(a.useRef)(null),y=function(e){if(!x.current)return null;var t,n,a=(t=x.current,n="[data-rb-event-key]:not(.disabled)",Y(t.querySelectorAll(n))),r=x.current.querySelector(".active"),i=a.indexOf(r);if(-1===i)return null;var o=i+e;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},g=function(e,t){null!=e&&(u&&u(e,t),h&&h(e,t))};Object(a.useEffect)((function(){if(x.current&&m.current){var e=x.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var O=Object(J.a)(t,x);return r.a.createElement(_.Provider,{value:g},r.a.createElement(Z.Provider,{value:{role:d,activeKey:M(f),getControlledId:n||F,getControllerId:i||F}},r.a.createElement(l,Object(o.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}t&&(e.preventDefault(),g(t.dataset.rbEventKey,e),m.current=!0,b())},ref:O,role:d}))))})),W=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.children,c=e.as,f=void 0===c?"div":c,d=Object(s.a)(e,["bsPrefix","className","children","as"]);return n=Object(u.a)(n,"nav-item"),r.a.createElement(f,Object(o.a)({},d,{ref:t,className:l()(a,n)}),i)}));W.displayName="NavItem";var X=W,H=n("dbZe"),$=(n("2W6z"),r.a.forwardRef((function(e,t){var n=e.active,i=e.className,c=e.tabIndex,u=e.eventKey,f=e.onSelect,d=e.onClick,p=e.as,v=Object(s.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),b=M(u,v.href),m=Object(a.useContext)(_),h=Object(a.useContext)(Z),E=n;if(h){v.role||"tablist"!==h.role||(v.role="tab");var x=h.getControllerId(b),y=h.getControlledId(b);v["data-rb-event-key"]=b,v.id=x||v.id,v["aria-controls"]=y||v["aria-controls"],E=null==n&&null!=b?h.activeKey===b:n}"tab"===v.role&&(v.tabIndex=E?c:-1,v["aria-selected"]=E);var g=Object(L.a)((function(e){d&&d(e),null!=b&&(f&&f(b,e),m&&m(b,e))}));return r.a.createElement(p,Object(o.a)({},v,{ref:t,onClick:g,className:l()(i,E&&"active")}))})));$.defaultProps={disabled:!1};var ee=$,te={disabled:!1,as:H.a},ne=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.disabled,i=e.className,c=e.href,f=e.eventKey,d=e.onSelect,p=e.as,v=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(u.a)(n,"nav-link"),r.a.createElement(ee,Object(o.a)({},v,{href:c,ref:t,eventKey:f,as:p,disabled:a,onSelect:d,className:l()(i,n,a&&"disabled")}))}));ne.displayName="NavLink",ne.defaultProps=te;var ae=ne,re=r.a.forwardRef((function(e,t){var n,i,c,f=Object(b.a)(e,{activeKey:"onSelect"}),d=f.as,p=void 0===d?"div":d,v=f.bsPrefix,m=f.variant,h=f.fill,E=f.justify,x=f.navbar,y=f.className,g=f.children,O=f.activeKey,j=Object(s.a)(f,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);v=Object(u.a)(v,"nav");var N=Object(a.useContext)(R),w=Object(a.useContext)(z);return N?(i=N.bsPrefix,x=null==x||x):w&&(c=w.cardHeaderBsPrefix),r.a.createElement(G,Object(o.a)({as:p,ref:t,activeKey:O,className:l()(y,(n={},n[v]=!x,n[i+"-nav"]=x,n[c+"-"+m]=!!c,n[v+"-"+m]=!!m,n[v+"-fill"]=h,n[v+"-justified"]=E,n))},j),g)}));re.displayName="Nav",re.defaultProps={justify:!1,fill:!1},re.Item=X,re.Link=ae;var ie=re,oe=n("uEY5"),se=n.n(oe),ce=function(e){e.siteTitle;var t=Object(a.useState)(!1);t[0],t[1];return r.a.createElement(d,{fluid:!0},r.a.createElement(p.a,{className:se.a.siteTitleContainer+" pt-3"},r.a.createElement(v.a,null,r.a.createElement(i.Link,{to:"/"},r.a.createElement("h1",{className:se.a.siteTitle},"Julian Inwood"),r.a.createElement("p",{className:se.a.siteSubtitle},"Software developer (web) - Bristol")))),r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement(U,{className:""},r.a.createElement(U.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(U.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ie,{className:"ml-auto"},r.a.createElement(i.Link,{className:"nav-link",to:"/projects"},"Projects"),r.a.createElement(i.Link,{className:"nav-link",to:"/about"},"About")))))))};ce.defaultProps={siteTitle:""};var le=ce;n("q4sD"),n("rMck"),n("Vr40"),t.a=function(e){var t=e.children,n=Object(i.useStaticQuery)("3649515864");return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,r.a.createElement(le,{siteTitle:n.site.siteMetadata.title}),r.a.createElement("div",{className:"p-3 container"},t)))}},"CR+v":function(e,t,n){"use strict";var a=n("ctsM"),r=n("ANPE"),i=!1,o=!1;try{var s={get passive(){return i=!0},get once(){return o=i=!0}};a.a&&(window.addEventListener("test",s,s),window.removeEventListener("test",s,!0))}catch(d){}var c=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!o){var r=a.once,s=a.capture,c=n;!o&&r&&(c=n.__once||function e(a){this.removeEventListener(t,e,s),n.call(this,a)},n.__once=c),e.addEventListener(t,c,i?a:s)}e.addEventListener(t,n,a)};var l=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var u=function(e,t,n,a){return c(e,t,n,a),function(){l(e,t,n,a)}};a.a&&window;function f(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=u(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}t.a=function(e,t,n){var a,i,o;null==n&&(a=e,i=Object(r.a)(a,"transitionDuration")||"",o=-1===i.indexOf("ms")?1e3:1,n=parseFloat(i)*o||0);var s=f(e,n),c=u(e,"transitionend",t);return function(){s(),c()}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("RUBk");var a=n("wx14"),r=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function c(e,t){return Object.keys(t).reduce((function(n,c){var l,u=n,f=u[o(c)],d=u[c],p=Object(r.a)(u,[o(c),c].map(s)),v=t[c],b=function(e,t,n){var a=Object(i.useRef)(void 0!==e),r=Object(i.useState)(t),o=r[0],s=r[1],c=void 0!==e,l=a.current;return a.current=c,!c&&l&&o!==t&&s(t),[c?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),s(e)}),[n])]}(d,f,e[v]),m=b[0],h=b[1];return Object(a.a)({},p,((l={})[c]=m,l[v]=h,l))}),e)}n("dI71"),n("94VI")},JI6e:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),o=n.n(i),s=n("q1tI"),c=n.n(s),l=n("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.as,f=void 0===s?"div":s,d=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(n,"col"),v=[],b=[];return u.forEach((function(e){var t,n,a,r=d[e];if(delete d[e],null!=r&&"object"==typeof r){var i=r.span;t=void 0===i||i,n=r.offset,a=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&v.push(!0===t?""+p+o:""+p+o+"-"+t),null!=a&&b.push("order"+o+"-"+a),null!=n&&b.push("offset"+o+"-"+n)})),v.length||v.push(p),c.a.createElement(f,Object(a.a)({},d,{ref:t,className:o.a.apply(void 0,[i].concat(v,b))}))}));f.displayName="Col",t.a=f},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function a(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}return(0,i.default)(a)};var a,r=n("pvIh"),i=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,a=n.propTypes,i=n.defaultProps,o=n.allowFallback,s=void 0!==o&&o,c=n.displayName,l=void 0===c?e.name||e.displayName:c,u=function(t,n){return e(t,n)};return Object.assign(r.default.forwardRef||!s?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:l,propTypes:a,defaultProps:i})};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a}},Qg85:function(e,t,n){"use strict";n("RUBk");t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Vr40:function(e,t,n){},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),o=n.n(i),s=/-(.)/g;var c=n("q1tI"),l=n.n(c),u=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,i=n.displayName,s=void 0===i?f(e):i,c=n.Component,d=void 0===c?"div":c,p=n.defaultProps,v=l.a.forwardRef((function(t,n){var i=t.className,s=t.bsPrefix,c=t.as,f=void 0===c?d:c,p=Object(r.a)(t,["className","bsPrefix","as"]),v=Object(u.a)(s,e);return l.a.createElement(f,Object(a.a)({ref:n,className:o()(i,v)},p))}));return v.defaultProps=p,v.displayName=s,v}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI");var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},ctsM:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},dRu9:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return v}));var a=n("zLVn"),r=n("dI71"),i=n("q1tI"),o=n.n(i),s=n("i8i4"),c=n.n(s),l=!1,u=o.a.createContext(null),f="exited",d="entering",p="entered",v="exiting",b=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=f,a.appearStatus=d):r=p:r=t.unmountOnExit||t.mountOnEnter?"unmounted":f,a.state={status:r},a.nextCallback=null,a}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:f}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==p&&(t=d):n!==d&&n!==p||(t=v)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===d?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===f&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[c.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),u=a?s.appear:s.enter;!e&&!n||l?this.safeSetState({status:p},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:d},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:p},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!l?(this.props.onExit(a),this.safeSetState({status:v},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(u.Provider,{value:null},"function"==typeof n?n(e,r):o.a.cloneElement(o.a.Children.only(n),r))},t}(o.a.Component);function m(){}b.contextType=u,b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},b.UNMOUNTED="unmounted",b.EXITED=f,b.ENTERING=d,b.ENTERED=p,b.EXITING=v;t.e=b},dbZe:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("q1tI"),o=n.n(i),s=n("Qg85");function c(e){return!e||"#"===e.trim()}var l=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,f=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(l||c(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return c(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.a.createElement(i,Object(a.a)({ref:t},f,{onClick:d,onKeyDown:Object(s.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},lcWJ:function(e,t,n){"use strict";var a=n("q1tI"),r=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,i,o){var s=r||"<<anonymous>>",c=o||a;if(null==n[a])return t?new Error("Required "+i+" `"+c+"` was not specified in `"+s+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),f=6;f<l;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,a,s,i,c].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},q4sD:function(e,t,n){},rMck:function(e,t,n){},uEY5:function(e,t,n){e.exports={siteTitle:"header-module--site-title--oZ2ke",siteTitleContainer:"header-module--site-title-container--3Fwiz",siteSubtitle:"header-module--site-subtitle--3j3Sa"}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("wx14"),n("QA0p");var a=n("q1tI"),r=n.n(a),i=r.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(a.useContext)(i);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},"z+q/":function(e,t,n){"use strict";function a(e){e.offsetHeight}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=commons-4b1f15754485214daa95.js.map