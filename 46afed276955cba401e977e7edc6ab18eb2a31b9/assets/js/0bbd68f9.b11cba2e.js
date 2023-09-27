"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[9041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="Malloc `brk()`",i={unversionedId:"Lab/Data/quiz/malloc-brk",id:"Lab/Data/quiz/malloc-brk",title:"Malloc `brk()`",description:"Question Text",source:"@site/docs/Lab/Data/quiz/malloc-brk.md",sourceDirName:"Lab/Data/quiz",slug:"/Lab/Data/quiz/malloc-brk",permalink:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/Data/quiz/malloc-brk",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"malloc-brk"},"Malloc ",(0,a.kt)("inlineCode",{parentName:"h1"},"brk()")),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"When does ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc()")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"brk()"),"?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"brk()")," is outdated, ",(0,a.kt)("inlineCode",{parentName:"li"},"malloc()")," always uses ",(0,a.kt)("inlineCode",{parentName:"li"},"mmap()"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When it allocates a small chunk of memory")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When it allocates an array")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When it's working with dynamic libraries"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"malloc()")," uses both ",(0,a.kt)("inlineCode",{parentName:"p"},"brk()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mmap()"),", but preffers ",(0,a.kt)("inlineCode",{parentName:"p"},"brk()")," for small chunks of memory to keep granular allocations in a contiguous area.\nThis way, ",(0,a.kt)("inlineCode",{parentName:"p"},"free()"),' does not necessarily return the memory to the OS as it might only mark the zone as "free" within ',(0,a.kt)("inlineCode",{parentName:"p"},"libc"),"'s allocator and reuse it for later allocations."))}m.isMDXComponent=!0}}]);