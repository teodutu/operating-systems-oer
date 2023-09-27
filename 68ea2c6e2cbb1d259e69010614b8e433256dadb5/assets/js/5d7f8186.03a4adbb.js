"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[4426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=i,d=p["".concat(u,".").concat(b)]||p[b]||f[b]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},o="String Buffer Overflow",l={unversionedId:"Lab/Data/quiz/string-buff-over",id:"Lab/Data/quiz/string-buff-over",title:"String Buffer Overflow",description:"Question Text",source:"@site/docs/Lab/Data/quiz/string-buff-over.md",sourceDirName:"Lab/Data/quiz",slug:"/Lab/Data/quiz/string-buff-over",permalink:"/68ea2c6e2cbb1d259e69010614b8e433256dadb5/Lab/Data/quiz/string-buff-over",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"string-buffer-overflow"},"String Buffer Overflow"),(0,i.kt)("h2",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"Why does the buffer overflow occur?"),(0,i.kt)("h2",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the initial string, declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"main()"),", does not contain a terminating null byte.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the buffer is not large enough to store the copied bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"memcpy()")," skips the copying of terminating null bytes."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memcpy()")," copies 4 bytes, whereas the size of the string, including the terminating null byte, is 5.")),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,'The string "soso" has length equal to 4, however, 5 bytes are actually used to store it, including the terminating null byte.\nEven though the buffer declared in ',(0,i.kt)("inlineCode",{parentName:"p"},"fun()")," is not large enough to store the 5 bytes, the underlying issue is that we copying just 4 bytes, thus skipping the null byte."))}f.isMDXComponent=!0}}]);