"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6901],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,d=m["".concat(o,".").concat(u)]||m[u]||f[u]||l;return a?n.createElement(d,s(s({ref:t},p),{},{components:a})):n.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={},s="System Call Wrappers",i={unversionedId:"Lab/Software Stack/syscall-wrapper",id:"Lab/Software Stack/syscall-wrapper",title:"System Call Wrappers",description:"The support/syscall-wrapper/ folder stores the implementation of a simple program written in C (main.c) that calls the write() and exit() functions.",source:"@site/docs/Lab/Software Stack/syscall-wrapper.md",sourceDirName:"Lab/Software Stack",slug:"/Lab/Software Stack/syscall-wrapper",permalink:"/ec960feef1e0e81bd6f0a431dfec5e450cc8b2c4/Lab/Software Stack/syscall-wrapper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Analyzing the Software Stack",permalink:"/ec960feef1e0e81bd6f0a431dfec5e450cc8b2c4/Lab/Software Stack/basic-syscall"},next:{title:"Common Functions",permalink:"/ec960feef1e0e81bd6f0a431dfec5e450cc8b2c4/Lab/Software Stack/common-functions"}},o={},c=[{value:"Practice",id:"practice",level:2}],p={toc:c},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-call-wrappers"},"System Call Wrappers"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"support/syscall-wrapper/")," folder stores the implementation of a simple program written in C (",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),") that calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," functions.\nThe functions are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"syscall.asm")," as wrappers around corresponding system calls.\nEach function invokes the corresponding system call using the specific system call ID and the arguments provided for the function call."),(0,r.kt)("p",null,"The implementation of the two wrapper functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"syscall.asm")," is very simple, as the function arguments are passed in the same registers required by the system call.\nThis is because of the overlap of the first three registers for the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X86_calling_conventions#System_V_AMD64_ABI"},"x86_64 Linux function calling convention")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"x86_64 Linux system call convention"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"syscall.h")," contains the declaration of the two functions and is included in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.c"),".\nThis way, C programs can be written that make function calls that end up making system calls."),(0,r.kt)("p",null,"Let's build, run and trace system calls for the program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/syscall-wrapper$ ls\nmain.c  Makefile  syscall.h  syscall.s\n\nstudent@os:~/.../lab/support/syscall-wrapper$ make\ngcc -c -o main.o main.c\nnasm -f elf64 -o syscall.o syscall.s\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  main.o syscall.o   -o main\n\nstudent@os:~/.../lab/support/syscall-wrapper$ ls\nmain  main.c  main.o  Makefile  syscall.h  syscall.o  syscall.s\n\nstudent@os:~/.../software-stack/lab/syscall-wrapper$ ./main\nHello, world!\n\nstudent@os:~/.../lab/support/syscall-wrapper$ strace ./main\nexecve("./main", ["./main"], 0x7ffee60fb590 /* 63 vars */) = 0\nwrite(1, "Hello, world!\\n", 14Hello, world!\n)         = 14\nexit(0)                                 = ?\n+++ exited with 0 +++\n')),(0,r.kt)("p",null,"The trace is similar to the previous example, showing the ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," system calls."),(0,r.kt)("p",null,"By creating system call wrappers as C functions, we are now relieved of the burden of writing assembly language code.\nOf course, there has to be an initial implementation of wrapper functions written in assembly language;\nbut, after that, we can use C only."),(0,r.kt)("h2",{id:"practice"},"Practice"),(0,r.kt)("p",null,"Update the files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"support/syscall-wrapper/")," folder to make ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call available as a wrapper.\nMake a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call to read data from standard input in a buffer.\nThen call ",(0,r.kt)("inlineCode",{parentName:"p"},"write()")," to print data from that buffer."),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," system call returns the number of bytes ",(0,r.kt)("inlineCode",{parentName:"p"},"read"),".\nUse that as the argument to the subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," call that prints read data."),(0,r.kt)("p",null,"We can see that it's easier to have wrapper calls and write most of the code in C than in assembly language."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ec960feef1e0e81bd6f0a431dfec5e450cc8b2c4/Lab/Software%20Stack/quiz/syscall-wrapper"},"Quiz")))}f.isMDXComponent=!0}}]);