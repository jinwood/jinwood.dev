(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},gZkK:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("Wbzz"),o=n("9eSz"),i=n.n(o),l=n("3Z9Z"),u=n("JI6e"),s=n("Ac47"),d=n("wx14"),f=n("zLVn"),m=n("ZCiN");var b=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},p=n("XcHJ"),v=n("i52p"),h=Math.pow(2,31)-1;function g(){var e=Object(p.a)(),t=Object(a.useRef)();return Object(v.a)((function(){return clearTimeout(t.current)})),Object(a.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=h?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=h?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),h)}(t,a,Date.now()+r))},clear:n}}),[])}var O=n("TSYQ"),j=n.n(O),w=n("CR+v"),E=n("dRu9"),y=n("JCAc"),k=n("YdCC"),x=Object(k.a)("carousel-caption",{Component:"div"}),I=Object(k.a)("carousel-item");function C(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}var N=n("dbZe"),S=n("vUet"),T=n("z+q/"),R={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var M=r.a.forwardRef((function(e,t){var n=Object(y.a)(e,{activeIndex:"onSelect"}),c=n.as,o=void 0===c?"div":c,i=n.bsPrefix,l=n.slide,u=n.fade,s=n.controls,p=n.indicators,v=n.activeIndex,h=n.onSelect,O=n.onSlide,k=n.onSlid,x=n.interval,I=n.keyboard,R=n.onKeyDown,M=n.pause,L=n.onMouseOver,A=n.onMouseOut,z=n.wrap,P=n.touch,D=n.onTouchStart,J=n.onTouchMove,q=n.onTouchEnd,H=n.prevIcon,Z=n.prevLabel,K=n.nextIcon,W=n.nextLabel,X=n.className,V=n.children,F=Object(f.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Q=Object(S.a)(i,"carousel"),Y=Object(a.useRef)(null),B=Object(a.useState)("next"),U=B[0],G=B[1],$=Object(a.useState)(!1),_=$[0],ee=$[1],te=Object(a.useState)(v),ne=te[0],ae=te[1];_||v===ne||(Y.current?(G(Y.current),Y.current=null):G(v>ne?"next":"prev"),l&&ee(!0),ae(v));var re=r.a.Children.toArray(V).filter(r.a.isValidElement).length,ce=Object(a.useCallback)((function(e){if(!_){var t=ne-1;if(t<0){if(!z)return;t=re-1}Y.current="prev",h(t,e)}}),[_,ne,h,z,re]),oe=Object(m.a)((function(e){if(!_){var t=ne+1;if(t>=re){if(!z)return;t=0}Y.current="next",h(t,e)}})),ie=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{element:ie.current,prev:ce,next:oe}}));var le=Object(m.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&oe()})),ue="next"===U?"left":"right";b((function(){l||(O&&O(ne,ue),k&&k(ne,ue))}),[ne]);var se=Q+"-item-"+U,de=Q+"-item-"+ue,fe=Object(a.useCallback)((function(e){Object(T.a)(e),O&&O(ne,ue)}),[O,ne,ue]),me=Object(a.useCallback)((function(){ee(!1),k&&k(ne,ue)}),[k,ne,ue]),be=Object(a.useCallback)((function(e){if(I&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ce(e);case"ArrowRight":return e.preventDefault(),void oe(e)}R&&R(e)}),[I,R,ce,oe]),pe=Object(a.useState)(!1),ve=pe[0],he=pe[1],ge=Object(a.useCallback)((function(e){"hover"===M&&he(!0),L&&L(e)}),[M,L]),Oe=Object(a.useCallback)((function(e){he(!1),A&&A(e)}),[A]),je=Object(a.useRef)(0),we=Object(a.useRef)(0),Ee=Object(a.useState)(!1),ye=Ee[0],ke=Ee[1],xe=g(),Ie=Object(a.useCallback)((function(e){je.current=e.touches[0].clientX,we.current=0,P&&ke(!0),D&&D(e)}),[P,D]),Ce=Object(a.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-je.current,J&&J(e)}),[J]),Ne=Object(a.useCallback)((function(e){if(P){var t=we.current;if(Math.abs(t)<=40)return;t>0?ce(e):oe(e)}xe.set((function(){ke(!1)}),x),q&&q(e)}),[P,ce,oe,xe,x,q]),Se=null!=x&&!ve&&!ye&&!_,Te=Object(a.useRef)();Object(a.useEffect)((function(){if(Se)return Te.current=setInterval(document.visibilityState?le:oe,x),function(){clearInterval(Te.current)}}),[Se,oe,x,le]);var Re=Object(a.useMemo)((function(){return p&&Array.from({length:re},(function(e,t){return function(e){h(t,e)}}))}),[p,re,h]);return r.a.createElement(o,Object(d.a)({ref:ie},F,{onKeyDown:be,onMouseOver:ge,onMouseOut:Oe,onTouchStart:Ie,onTouchMove:Ce,onTouchEnd:Ne,className:j()(X,Q,l&&"slide",u&&Q+"-fade")}),p&&r.a.createElement("ol",{className:Q+"-indicators"},C(V,(function(e,t){return r.a.createElement("li",{key:t,className:t===ne?"active":null,onClick:Re[t]})}))),r.a.createElement("div",{className:Q+"-inner"},C(V,(function(e,t){var n=t===ne;return l?r.a.createElement(E.e,{in:n,onEnter:n?fe:null,onEntered:n?me:null,addEndListener:w.a},(function(t){return r.a.cloneElement(e,{className:j()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&de)})})):r.a.cloneElement(e,{className:j()(e.props.className,n&&"active")})}))),s&&r.a.createElement(r.a.Fragment,null,(z||0!==v)&&r.a.createElement(N.a,{className:Q+"-control-prev",onClick:ce},H,Z&&r.a.createElement("span",{className:"sr-only"},Z)),(z||v!==re-1)&&r.a.createElement(N.a,{className:Q+"-control-next",onClick:oe},K,W&&r.a.createElement("span",{className:"sr-only"},W))))}));M.displayName="Carousel",M.defaultProps=R,M.Caption=x,M.Item=I;var L=M;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.size,c=z(e,["color","size"]);return r.a.createElement("svg",A({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},c),r.a.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}))}));P.defaultProps={color:"currentColor",size:"1em"};var D=P,J=function(e){var t=e.data;return r.a.createElement(L,{interval:7e3,nextIcon:r.a.createElement(D,null),prevIcon:r.a.createElement(D,null)},t.map((function(e){return r.a.createElement(I,{key:e.node.id},r.a.createElement(i.a,{fluid:e.node.childImageSharp.fluid}))})))};t.default=function(){var e=Object(c.useStaticQuery)("2203441874"),t=e.allFile,n=e.jinwoodImage;return r.a.createElement(s.a,null,r.a.createElement("div",{className:"container content"},r.a.createElement(l.a,null,r.a.createElement(u.a,{md:8},r.a.createElement("h3",null,"jinwood.github.io"),r.a.createElement("p",null,"I built this site during 2020 when I decided I wanted to retire my old express blog, which was built many moons ago and became somewhat neglected. This is still a work in progress, and I intend to add a blog and some other bits and pieces I've been working on to the projects page."),r.a.createElement("p",null,"It's built using gatsby.js - a fantastic tool for creating static sites with react. Has some really great features, like serving filesystem assets using graphql, PWA support out the box, etc. It took me a couple of evenings to get the bulk of it set up, and now I'm just tweaking, refining and adding features. Overall it's been a very pleasant experience."),r.a.createElement("p",null,"Take a look at the source"," ",r.a.createElement("a",{href:"https://github.com/jinwood/jinwood.github.io/tree/develop",target:"blank"},"here."))),r.a.createElement(u.a,null,r.a.createElement(i.a,{className:"rounded mb-3",fluid:n.childImageSharp.fluid}))),r.a.createElement(l.a,null,r.a.createElement(u.a,{md:6}),r.a.createElement(u.a,{md:6},r.a.createElement("h3",null,"Letme CMS & Caseworking"))),r.a.createElement(l.a,null,r.a.createElement(u.a,{md:6},r.a.createElement(J,{data:t.edges})),r.a.createElement(u.a,null,r.a.createElement("p",null,"Letme was an exciting startup in the property rental space. I was the first developer on a team of three tasked with building out an ecommerce website, caseworking, crm, marketing and callcenter system."),r.a.createElement("p",null,"The caseworking / crm system were both built using React and flux (this is going back a while!). Everything ran off a .NET core backend using a microservices architecture. We had seperate services for each unit of the business, including users, properties, comms, marketing, etc."),r.a.createElement("p",null,"The goal of the project was to build a completely integrated system, including a customer faceing website. A user could enter letme's onboarding journey, and an agent could view their history using our CRM. All communications through text, email (including automated marketing), phone calls etc would appear on their customer profile. Whilst we were successful in producing this system, it presented some interesting challenges, such as tracing erros / issues across multiple services, performance etc.")))))}},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(e){var t,n,r=(t=e,(n=Object(a.useRef)(t)).current=t,n);Object(a.useEffect)((function(){return function(){return r.current()}}),[])}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-077626e7086c4dd044d3.js.map