"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:3},a="\ud83d\udfe2 Role Prompting",s={unversionedId:"basics/roles",id:"basics/roles",title:"\ud83d\udfe2 Role Prompting",description:"Another prompting technique is to assign a role to the AI. For example, your",source:"@site/docs/basics/roles.md",sourceDirName:"basics",slug:"/basics/roles",permalink:"/pt/docs/basics/roles",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/roles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Dando Instru\xe7\xf5es",permalink:"/pt/docs/basics/instructions"},next:{title:'\ud83d\udfe2 A "Standard" Prompt',permalink:"/pt/docs/basics/standard_prompt"}},l={},p=[{value:"Notes",id:"notes",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-role-prompting"},"\ud83d\udfe2 Role Prompting"),(0,o.kt)("p",null,'Another prompting technique is to assign a role to the AI. For example, your\nprompt could start off with "You are a doctor" or "You are a lawyer" and then\nask the AI to answer some medical or legal question. Here is an example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"You are a brilliant mathematician who can solve any problem in the world.\nAttempt to solve the following problem:\n\nWhat is 100*100/400*56?\n\n// highlight-start\nThe answer is 1400.\n// highlight-end\n")),(0,o.kt)("p",null,"The AI's (GPT-3 davinci-003) answer is highlighted in green:"),(0,o.kt)("p",null,"This is a correct answer, but if the AI had simply been prompted with ",(0,o.kt)("inlineCode",{parentName:"p"},"What is 100*100/400*56?"),",\nit would have answered ",(0,o.kt)("inlineCode",{parentName:"p"},"280")," (incorrect). "),(0,o.kt)("p",null,"When assigning a role to the AI, we are giving it some context. This context\nhelps the AI understand the question better. With better understanding of the question,\nthe AI often gives better answers."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"This technique is no longer as effective with more modern AIs (e.g. GPT-3 davinci-003).\nHowever, I did use GPT-3 davinci-003 for this example, so it seems that\nrole prompting is still at least a somewhat effective tool."),(0,o.kt)("p",null,"\ud83d\udea7 This page needs citations \ud83d\udea7"))}m.isMDXComponent=!0}}]);