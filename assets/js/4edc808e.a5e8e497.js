"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[308],{5482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"index","title":"Introduction","description":"What is this?","source":"@site/docs/index.mdx","sourceDirName":".","slug":"/","permalink":"/docs/","draft":false,"unlisted":false,"editUrl":"https://github.com/erzz/toolbox/tree/main/packages/create-docusaurus/templates/shared/docs/index.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"mainSidebar","next":{"title":"Tutorial and Guides","permalink":"/docs/category/tutorial-and-guides"}}');var s=n(74848),i=n(28453);const a={sidebar_position:0},r="Introduction",l={},c=[{value:"What is this?",id:"what-is-this",level:2},{value:"Why?",id:"why",level:2},{value:"How can I use this?",id:"how-can-i-use-this",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsx)(t.h2,{id:"what-is-this",children:"What is this?"}),"\n",(0,s.jsx)(t.p,{children:"A collection of reusable workflows, actions, and other GitHub-related content that I use frequently."}),"\n",(0,s.jsx)(t.h2,{id:"why",children:"Why?"}),"\n",(0,s.jsx)(t.p,{children:"So I can use it of course! But also, if you wish, you can use it all too."}),"\n",(0,s.jsx)(t.p,{children:"Even better, if you want a fix, have a suggestion, want to add some workflows or actions, go for it!"}),"\n",(0,s.jsx)(t.h2,{id:"how-can-i-use-this",children:"How can I use this?"}),"\n",(0,s.jsx)(t.p,{children:"Reusable workflows are like a pipeline in a box. If you have ever tried to keep workflows consistent\nacross multiple repositories, you know how much of a pain it can be. Especially when various actions\nand libs need to be updated over time within workflows that can be 1000's of lines of YAML. This is\nwhere reusable workflows come in."}),"\n",(0,s.jsx)(t.p,{children:"A reusable workflow combines numerous related jobs into a single workflow with a specific purpose.\nWhen the workflows is updated, all repositories that use it will automatically get the changes."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["As a good demonstrative case, the ",(0,s.jsx)(t.a,{href:"/docs/workflows/container/",children:"container"})," workflow doesn't\njust build a container image, it also authenticates with the registry, pushes the result to the\nregistry, checks it for security and best practices, handles things like automatic tagging and\nmore - all with a few lines of yaml!"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"name: Container\n\non: push\n\njobs:\n  container:\n    uses: erzz/toolbox/.github/workflows/container.yml@v1\n    with:\n      image: my-image\n    secrets:\n      wip: ${{ secrets.YOUR_SECRET }}\n      service-account: ${{ secrets.YOUR_SECRET }}\n"})}),"\n",(0,s.jsx)(t.p,{children:"That's it! As you build more and more images for different projects the only thing you are likely to\nchange is the image name. Everything else is handled for you."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);