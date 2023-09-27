"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Zero-Copy",s={unversionedId:"Lab/IO/zero-copy",id:"Lab/IO/zero-copy",title:"Zero-Copy",description:"Imagine a server that responds with files that it stores locally.",source:"@site/docs/Lab/IO/zero-copy.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/zero-copy",permalink:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/zero-copy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"I/O Internals",permalink:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/io-internals"},next:{title:"Asynchronous I/O",permalink:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/async-io"}},l={},p=[{value:"Practice: Measure It",id:"practice-measure-it",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zero-copy"},"Zero-Copy"),(0,a.kt)("p",null,"Imagine a server that responds with files that it stores locally.\nIts actions would be those highlighted in the image below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Receive a new request and extract the filename"),(0,a.kt)("li",{parentName:"ol"},"Read the filename from the disk into memory"),(0,a.kt)("li",{parentName:"ol"},"Send the file from memory to the client")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Client-Server Steps",src:n(2287).Z,width:"502",height:"752"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The quiz below is tricky, yet very important."),"\n",(0,a.kt)("strong",{parentName:"p"},"Do NOT skip it in order for this section to make sense!")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/quiz/server-copies"},"Quiz")),(0,a.kt)("p",null,"As you might have guessed, 2 of these copies are useless.\nSince the app doesn't modify the file, there's no need for it to store the file in its own buffer.\nIt would be more efficient to use ",(0,a.kt)("strong",{parentName:"p"},"a single")," kernel buffer as intermediate storage between the disk and the NIC, as shown in the image below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Copies - Zero-Copy",src:n(8409).Z,width:"562",height:"472"})),(0,a.kt)("p",null,'For an easier comparison with the "classic" ',(0,a.kt)("inlineCode",{parentName:"p"},"read()")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"send()")," model, here's the first version again:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Copies - Read-Send",src:n(4432).Z,width:"572",height:"652"})),(0,a.kt)("p",null,"It should be obvious that the former approach is more efficient than the latter.\nThe syscall with which we can leverage ",(0,a.kt)("strong",{parentName:"p"},"zero-copy")," is called ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/sendfile.2.html"},(0,a.kt)("inlineCode",{parentName:"a"},"sendfile()")),"."),(0,a.kt)("h2",{id:"practice-measure-it"},"Practice: Measure It"),(0,a.kt)("p",null,"So we have all the reasons to believe zero-copy is the faster of the two approaches we know.\nBut belief alone is meaningless.\nLet's test it!"),(0,a.kt)("p",null,"First, look at the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"support/zero-copy/server.py"),".\nIt spawns 2 threads.\nOne of them listens on port 8081 and serves connections via ",(0,a.kt)("inlineCode",{parentName:"p"},"read()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"send()"),".\nThe other listens on port 8082 and serves connections via ",(0,a.kt)("inlineCode",{parentName:"p"},"sendfile()"),".\nAs you can see, the difference between them is minimal."),(0,a.kt)("p",null,"First generate the test file using the Makefile.\nThen start the server in one terminal.\nNow, in another one, use ",(0,a.kt)("inlineCode",{parentName:"p"},"benchmark_client.py")," to benchmark both implementations.\nBelow are some generic results.\nYours might differ by quite a lot, as they depend on your disk, your NIC, your kernel, your Python version, the load on your system etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/zero-copy$ python3 benchmark_client.py read-send\nTime taken: 7.175773588009179 seconds\n\nstudent@os:/.../support/zero-copy$ python3 benchmark_client.py sendfile\nTime taken: 3.71454380400246 seconds\n")),(0,a.kt)("p",null,"This is quite good!\nUsing ",(0,a.kt)("inlineCode",{parentName:"p"},"sendfile()")," halves the number of copies needed from 4 to 2.\nThus, it makes sense for the running time to ",(0,a.kt)("em",{parentName:"p"},"roughly")," halve as well."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/46afed276955cba401e977e7edc6ab18eb2a31b9/Lab/IO/quiz/fewer-than-2-copies"},"Quiz")),(0,a.kt)("p",null,"You can read a slightly more detailed article about zero-copy ",(0,a.kt)("a",{parentName:"p",href:"https://developer.ibm.com/articles/j-zerocopy/"},"here"),"."))}u.isMDXComponent=!0},2287:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client-server-file-c21c08a102e6557188be7f080092a12c.svg"},4432:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-copies-normal-7e82d53d42a478d0313cb85917335f94.svg"},8409:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/server-copies-zero-copy-fc1fa1195f2444d92486d7d63dfc81a3.svg"}}]);