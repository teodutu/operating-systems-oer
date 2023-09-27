"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[7387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Seg Fault Exit Code",l={unversionedId:"Lab/Compute/quiz/seg-fault-exit-code",id:"Lab/Compute/quiz/seg-fault-exit-code",title:"Seg Fault Exit Code",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/seg-fault-exit-code.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/seg-fault-exit-code",permalink:"/ec960feef1e0e81bd6f0a431dfec5e450cc8b2c4/Lab/Compute/quiz/seg-fault-exit-code",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seg-fault-exit-code"},"Seg Fault Exit Code"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"What is the exit code of the faulty child process spawned by ",(0,a.kt)("inlineCode",{parentName:"p"},"support/sum-array-bugs/seg-fault/sum_array_processes.d")," with more than 2 processes?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"11 because this is the code of the ",(0,a.kt)("inlineCode",{parentName:"li"},"SIGSEGV")," signal")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"11 because this code is always returned when a process ends with an error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"11 because this is the value of the least significant 4 bytes of the partial array sum calculated by the process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"6 because the child process was aborted"))),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,"We can obtain the number of the signal that killed a child process via the second argument of the ",(0,a.kt)("inlineCode",{parentName:"p"},"waitpid")," syscall.\nWe can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"WIFSIGNALED()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WTERMSIG()")," marcros.\nBy doing so, we see the exit code of the faulty child process is 11.\nWe can then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kill -l")," command to view the code of each signal and ",(0,a.kt)("inlineCode",{parentName:"p"},"SIGSEGV")," has the code 11."))}d.isMDXComponent=!0}}]);