/*! For license information please see 7.1d3ad262.chunk.js.LICENSE.txt */
(this.webpackJsonpanilist=this.webpackJsonpanilist||[]).push([[7],{173:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n(11),a=n(12),c=n(13),i=n(1),s=n.n(i),u=n(9),l=n(2),d=n(55),f=n(56),p=n(57),b=n(20),m=n.n(b),h=n.p+"static/media/404.68a4955d.svg",j=n(0),y=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("div",{className:"back-to-home rounded d-none d-sm-block",children:Object(j.jsx)(u.b,{to:"/index",className:"btn btn-icon btn-soft-primary",children:Object(j.jsx)("i",{children:Object(j.jsx)(m.a,{icon:"home",className:"icons"})})})}),Object(j.jsx)("section",{className:"bg-home d-flex align-items-center",children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(f.a,{className:"justify-content-center",children:Object(j.jsxs)(p.a,{lg:8,md:12,className:"text-center",children:[Object(j.jsx)("img",{src:h,className:"img-fluid",alt:""}),Object(j.jsx)("div",{className:"text-uppercase mt-4 display-3",children:"Oh ! no"}),Object(j.jsx)("div",{className:"text-capitalize text-dark mb-4 error-page",children:"Page Not Found"}),Object(j.jsxs)("p",{className:"text-muted para-desc mx-auto",children:["Start working with"," ",Object(j.jsx)("span",{className:"text-primary fw-bold",children:"Landrick"})," ","that can provide everything you need to generate awareness, drive traffic, connect."]})]})}),Object(j.jsx)(f.a,{children:Object(j.jsxs)(p.a,{md:"12",className:"text-center",children:[Object(j.jsx)(u.b,{to:"#",onClick:this.props.history.goBack,className:"btn btn-outline-primary mt-4",children:"Go Back"})," ",Object(j.jsx)(u.b,{to:"/",className:"btn btn-primary mt-4 ms-2",children:"Go To Home"})]})})]})})]})}}]),n}(i.Component);t.default=Object(l.h)(y)},45:function(e,t,n){"use strict";n.d(t,"m",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return d})),n.d(t,"p",(function(){return p})),n.d(t,"o",(function(){return m})),n.d(t,"n",(function(){return h})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return y})),n.d(t,"i",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return E})),n.d(t,"e",(function(){return k}));var r,o=n(7),a=n.n(o);function c(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&c(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function l(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function d(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var b="object"===typeof window&&window.Element||function(){};var m=a.a.oneOfType([a.a.string,a.a.func,function(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]),h=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},y=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],g={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},v=!("undefined"===typeof window||!window.document||!window.document.createElement);function x(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function O(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function w(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!O(e))return!1;var t=x(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&v){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function N(e){return null!==e&&(Array.isArray(e)||v&&"number"===typeof e.length)}function E(e,t){var n=w(e);return t?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var k=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},46:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},55:function(e,t,n){"use strict";var r=n(3),o=n(8),a=n(1),c=n.n(a),i=n(7),s=n.n(i),u=n(46),l=n.n(u),d=n(45),f=["className","cssModule","fluid","tag"],p={tag:d.n,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},b=function(e){var t=e.className,n=e.cssModule,a=e.fluid,i=e.tag,s=Object(o.a)(e,f),u="container";!0===a?u="container-fluid":a&&(u="container-"+a);var p=Object(d.j)(l()(t,u),n);return c.a.createElement(i,Object(r.a)({},s,{className:p}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},56:function(e,t,n){"use strict";var r=n(3),o=n(8),a=n(1),c=n.n(a),i=n(7),s=n.n(i),u=n(46),l=n.n(u),d=n(45),f=["className","cssModule","noGutters","tag","form","widths"],p=s.a.oneOfType([s.a.number,s.a.string]),b={tag:d.n,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,i=e.tag,s=e.form,u=e.widths,p=Object(o.a)(e,f),b=[];u.forEach((function(t,n){var r=e[t];if(delete p[t],r){var o=!n;b.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.j)(l()(t,a?"no-gutters":null,s?"form-row":"row",b),n);return c.a.createElement(i,Object(r.a)({},p,{className:m}))};h.propTypes=b,h.defaultProps=m,t.a=h},57:function(e,t,n){"use strict";var r=n(3),o=n(8),a=n(1),c=n.n(a),i=n(7),s=n.n(i),u=n(46),l=n.n(u),d=n(45),f=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),b=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),m={tag:d.n,xs:b,sm:b,md:b,lg:b,xl:b,className:s.a.string,cssModule:s.a.object,widths:s.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,a=e.widths,i=e.tag,s=Object(o.a)(e,f),u=[];a.forEach((function(t,r){var o=e[t];if(delete s[t],o||""===o){var a=!r;if(Object(d.h)(o)){var c,i=a?"-":"-"+t+"-",f=j(a,t,o.size);u.push(Object(d.j)(l()(((c={})[f]=o.size||""===o.size,c["order"+i+o.order]=o.order||0===o.order,c["offset"+i+o.offset]=o.offset||0===o.offset,c)),n))}else{var p=j(a,t,o);u.push(p)}}})),u.length||u.push("col");var p=Object(d.j)(l()(t,u),n);return c.a.createElement(i,Object(r.a)({},s,{className:p}))};y.propTypes=m,y.defaultProps=h,t.a=y}}]);
//# sourceMappingURL=7.1d3ad262.chunk.js.map