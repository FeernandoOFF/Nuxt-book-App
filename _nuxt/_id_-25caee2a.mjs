import{u as d,T as r,_ as l}from"./config-7d148d42.mjs";import{_ as p,u,w as f,o as m,c as h,a as k,b as a,t as o}from"./entry-7e79981c.mjs";const b={async setup(i,{expose:_}){_();let e,t;const{params:{id:s}}=u(),{data:c}=([e,t]=f(()=>d(`book-${s}`,()=>$fetch(`${r}/book/${s}`))),e=await e,t(),e),n={bookId:s,data:c,TAPADOO_URL:r};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},x={class:"title"},y={class:"authorName"},A={class:"bookMetadata"};function w(i,_,e,t,s,c){const n=l;return m(),h(n,{link:"/",icon:"\u21BA"},{default:k(()=>[a("div",x,[a("h2",null,"Book Title: "+o(t.data.title),1),a("p",null,[a("span",y,o(t.data.author),1),a("span",A," $ "+o(t.data.price)+" - "+o(t.data.currencyCode),1)])]),a("section",null,[a("p",null,o(t.data.description),1)])]),_:1})}var $=p(b,[["render",w]]);export{$ as default};