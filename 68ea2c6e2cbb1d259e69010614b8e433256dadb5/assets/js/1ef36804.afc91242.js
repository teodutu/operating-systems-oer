"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,d=p["".concat(c,".").concat(h)]||p[h]||f[h]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Fewer than Two Copies",s={unversionedId:"Lab/IO/quiz/fewer-than-2-copies",id:"Lab/IO/quiz/fewer-than-2-copies",title:"Fewer than Two Copies",description:"Question Text",source:"@site/docs/Lab/IO/quiz/fewer-than-2-copies.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/fewer-than-2-copies",permalink:"/68ea2c6e2cbb1d259e69010614b8e433256dadb5/Lab/IO/quiz/fewer-than-2-copies",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fewer-than-two-copies"},"Fewer than Two Copies"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Can zero-copy be implemented so as to copy the file fewer than 2 times?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Zero-Copy",src:r(8409).Z,width:"562",height:"472"})),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Yes, by copying the file straight from the disk to the network")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Yes, by sending the file straight from the kernel buffer to the network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Yes, by copying the file directly from the storage to the NIC's buffer"))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,'The truth is that we can\'t have fewer copies while using a server with a common PC-like architecture.\nThe disk is not directly connected to the internet, so the file cannot be sent directly from there.\nThe only place from where we can send data to the Web is the NIC.\nThen we need the intermediary storage in that kernel buffer because the disk and the NIC aren\'t dirrectly connected.\nThey are both connected to the CPU via the motherboard, so it\'s the CPU\'s job to do the transfer.\nFor this, it needs a "temporary buffer".\nThen the NIC needs its own buffer because the speed of the network may be slower than the speed at which it receives data from the kernel, so it needs some memory where to place the "surplus" while waiting for the network to "clear".'))}f.isMDXComponent=!0},8409:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-copies-zero-copy-fc1fa1195f2444d92486d7d63dfc81a3.svg"}}]);