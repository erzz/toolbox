"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[4212],{30217:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(96540);var o=s(34164),a=s(68207),r=s(204),n=s(11926),l=s(60569),u=s(37220),i=s(9303),h=s(95921);const c={authorListItem:"authorListItem_n3yI"};var g=s(74848);function p(t){let{author:e}=t;return(0,g.jsx)("li",{className:c.authorListItem,children:(0,g.jsx)(h.A,{as:"h2",author:e,count:e.count})})}function d(t){let{authors:e}=t;return(0,g.jsx)("section",{className:(0,o.A)("margin-vert--lg",c.authorsListSection),children:(0,g.jsx)("ul",{children:e.map((t=>(0,g.jsx)(p,{author:t},t.key)))})})}function m(t){let{authors:e,sidebar:s}=t;const h=(0,n.uz)();return(0,g.jsxs)(a.e3,{className:(0,o.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsListPage),children:[(0,g.jsx)(a.be,{title:h}),(0,g.jsx)(u.A,{tag:"blog_authors_list"}),(0,g.jsxs)(l.A,{sidebar:s,children:[(0,g.jsx)(i.A,{as:"h1",children:h}),(0,g.jsx)(d,{authors:e})]})]})}},11926:(t,e,s)=>{s.d(e,{Y4:()=>c,ZD:()=>l,np:()=>h,uz:()=>i,wI:()=>u});s(96540);var o=s(50539),a=s(81430),r=s(74848);function n(){const{selectMessage:t}=(0,a.W)();return e=>t(e,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function l(t){const e=n();return(0,o.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:e(t.count),tagName:t.label})}function u(t){const e=n();return(0,o.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:e(t.count),authorName:t.name||t.key})}const i=()=>(0,o.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function h(){return(0,r.jsx)(o.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function c(){return(0,r.jsx)(o.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);