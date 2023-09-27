"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Time Server",c={unversionedId:"Lab/Application Interaction/time-server",id:"Lab/Application Interaction/time-server",title:"Time Server",description:"Check out the code in support/time-server/server.c and support/time-server/client.c.",source:"@site/docs/Lab/Application Interaction/time-server.md",sourceDirName:"Lab/Application Interaction",slug:"/Lab/Application Interaction/time-server",permalink:"/68ea2c6e2cbb1d259e69010614b8e433256dadb5/Lab/Application Interaction/time-server",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Application Interaction",permalink:"/68ea2c6e2cbb1d259e69010614b8e433256dadb5/Lab/Application Interaction/overview"},next:{title:"Password Cracker",permalink:"/68ea2c6e2cbb1d259e69010614b8e433256dadb5/Lab/Application Interaction/password-cracker"}},p={},l=[{value:"Python Version",id:"python-version",level:2},{value:"Practice",id:"practice",level:3}],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-server"},"Time Server"),(0,a.kt)("p",null,"Check out the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/time-server/server.c")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"support/time-server/client.c"),"."),(0,a.kt)("p",null,"This is a simple program consisting of a server and a client.\nThe server uses a tcp socket to wait for connections.\nOnce a client has connected, the server will send the current time to it.\nThe client will then print the received time to the console."),(0,a.kt)("p",null,"Let's build and run this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ make\ngcc -Wall -o server server.c\ngcc -Wall -o client client.c\nstudent@os:~/.../support/time-server$ ./server\n")),(0,a.kt)("p",null,"Then, in another terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ ./client 127.0.0.1 2000\nThe time is Thu Sep  1 11:48:03 2022\n")),(0,a.kt)("h2",{id:"python-version"},"Python Version"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"support/time-server/python")," we have the equivalent python implementation for both the server and client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 server.py\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 client.py 127.0.0.1 2000\nThe time is Thu Sep  1 11:58:01 2022\n")),(0,a.kt)("h3",{id:"practice"},"Practice"),(0,a.kt)("p",null,"Try to figure out the protocol used by the server and the client.\nYou can do this by reading the source code, corroborated with information obtained at runtime."),(0,a.kt)("p",null,"Run the server again (the version in C), but instead of running the client, let's run ",(0,a.kt)("inlineCode",{parentName:"p"},"netcat")," and pipe the output to ",(0,a.kt)("inlineCode",{parentName:"p"},"hexdump"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"nc -d 127.0.0.1 2000 | hexdump -C\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/68ea2c6e2cbb1d259e69010614b8e433256dadb5/Lab/Application%20Interaction/quiz/time-server"},"Quiz")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/68ea2c6e2cbb1d259e69010614b8e433256dadb5/Lab/Application%20Interaction/quiz/time-server-interop"},"Quiz")))}d.isMDXComponent=!0}}]);