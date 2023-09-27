"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="Parent of `sleep` Processes",p={unversionedId:"Lab/Compute/quiz/parent-of-sleep-processes",id:"Lab/Compute/quiz/parent-of-sleep-processes",title:"Parent of `sleep` Processes",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/parent-of-sleep-processes.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/parent-of-sleep-processes",permalink:"/ec960feef1e0e81bd6f0a431dfec5e450cc8b2c4/Lab/Compute/quiz/parent-of-sleep-processes",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parent-of-sleep-processes"},"Parent of ",(0,o.kt)("inlineCode",{parentName:"h1"},"sleep")," Processes"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Who is the parent of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep")," processes?\nWhy?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py")," because it is the one who created them")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bash")," because it is ",(0,o.kt)("inlineCode",{parentName:"p"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemd")," because this is the default process that adopts orphans")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemd")," because it is ",(0,o.kt)("inlineCode",{parentName:"li"},"sleepy_creator.py"),"'s parent and when a process dies, its parent adopts its orphan children")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"When a process dies without waiting for the termination of all its children, those processes are now orphans.\nThen the ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," process adopts those orphan processes by default.\nOn older Linux systems, it was the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," process who adopted orphans."))}d.isMDXComponent=!0}}]);