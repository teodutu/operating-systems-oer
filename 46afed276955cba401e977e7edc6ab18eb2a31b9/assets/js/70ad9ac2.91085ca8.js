"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[9173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},l="Time Slice Value",o={unversionedId:"Lab/Compute/quiz/time-slice-value",id:"Lab/Compute/quiz/time-slice-value",title:"Time Slice Value",description:"Question Text",source:"@site/docs/Lab/Compute/quiz/time-slice-value.md",sourceDirName:"Lab/Compute/quiz",slug:"/Lab/Compute/quiz/time-slice-value",permalink:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/Compute/quiz/time-slice-value",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time-slice-value"},"Time Slice Value"),(0,i.kt)("h2",{id:"question-text"},"Question Text"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/setitimer.2.html"},"man page"),", what is the time slice used by the scheduler in ",(0,i.kt)("inlineCode",{parentName:"p"},"libult.so"),"?"),(0,i.kt)("h2",{id:"question-answers"},"Question Answers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"100 milliseconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"10 microseconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"100 microseconds"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"10 milliseconds")),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"The code we're interested in lies in the function ",(0,i.kt)("inlineCode",{parentName:"p"},"init_profiling_timer()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C"},"const struct itimerval timer = {\n    { 0, 10000 },\n    { 0, 1 }  // arms the timer as soon as possible\n};\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/setitimer.2.html"},"man page")," gives the following definition the ",(0,i.kt)("inlineCode",{parentName:"p"},"struct itimerval"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C"},"struct itimerval {\n    struct timeval it_interval; /* Interval for periodic timer */\n    struct timeval it_value;    /* Time until next expiration */\n};\n\nstruct timeval {\n    time_t      tv_sec;         /* seconds */\n    suseconds_t tv_usec;        /* microseconds */\n};\n")),(0,i.kt)("p",null,"So when constructing the ",(0,i.kt)("inlineCode",{parentName:"p"},"timer")," variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"{ 0, 10000 }")," means 0 seconds and 10000 microseconds, i.e. 0 seconds and 10 milliseconds."))}m.isMDXComponent=!0}}]);