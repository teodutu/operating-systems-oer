"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[9995],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(v,l(l({ref:r},c),{},{components:t})):n.createElement(v,l({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4653:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={},l="`sender.py` and `receiver.py` Client-Server Parallel",o={unversionedId:"Lab/IO/quiz/client-server-sender-receiver",id:"Lab/IO/quiz/client-server-sender-receiver",title:"`sender.py` and `receiver.py` Client-Server Parallel",description:"Question Text",source:"@site/docs/Lab/IO/quiz/client-server-sender-receiver.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/client-server-sender-receiver",permalink:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/quiz/client-server-sender-receiver",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"senderpy-and-receiverpy-client-server-parallel"},(0,a.kt)("inlineCode",{parentName:"h1"},"sender.py")," and ",(0,a.kt)("inlineCode",{parentName:"h1"},"receiver.py")," Client-Server Parallel"),(0,a.kt)("h2",{id:"question-text"},"Question Text"),(0,a.kt)("p",null,"Drawing a parallel from the UDP examples in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/send-receive/"),", which of the sender and receiver is similar to the server and which is similar to the client?"),(0,a.kt)("h2",{id:"question-answers"},"Question Answers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"both are similar to clients")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"both are similar to servers"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"receiver.py")," is similar to a server and ",(0,a.kt)("inlineCode",{parentName:"li"},"sender.py")," is similar to a client")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"receiver.py")," is similar to a client and ",(0,a.kt)("inlineCode",{parentName:"li"},"sender.py")," is similar to a server")),(0,a.kt)("h2",{id:"feedback"},"Feedback"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," is the passive component.\nIt has to be started first and then waits for ",(0,a.kt)("inlineCode",{parentName:"p"},"sender.py")," (the client) to send data.\nFurthermore, you can only have ",(0,a.kt)("strong",{parentName:"p"},"one")," ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver.py")," running at the same time (remember the ",(0,a.kt)("a",{parentName:"p",href:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/quiz/bind-error-cause"},"multiple ",(0,a.kt)("inlineCode",{parentName:"a"},"bind()")," bug"),") and multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"sender.py"),"s."))}d.isMDXComponent=!0}}]);