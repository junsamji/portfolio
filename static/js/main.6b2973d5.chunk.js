(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{126:function(n,e,t){},127:function(n,e,t){},128:function(n,e,t){},129:function(n,e,t){"use strict";t.r(e);var c,i,r,o=t(0),a=t.n(o),s=t(49),d=t.n(s),j=t(23),l=t(2),h=t(10),b=t(16),x=t(17),O=t(53),m=t(1),u=x.a.ul(c||(c=Object(b.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n\n  li {\n    padding: 18px 10px;\n  }\n\n  @media {\n    flex-flow: column nowrap;\n    background-color: #282c34;\n    position: fixed;\n    transform: ",";\n    \n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 20vw;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n  }\n"])),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),p=function(n){console.log(n.func);return Object(m.jsx)(u,{open:n.open,children:[{name:"Home",path:"/"},{name:"About Us",path:"/about"},{name:"Contact Us",path:"/contract"}].map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:e.path,onClick:function(){n.func()},children:e.name},t)})}))})},f=x.a.div(i||(i=Object(b.a)(["\n  width: 3rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  color: white;\n\n  @media {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    \n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(n){return n.open?"rgb(208, 255, 0)":"#fff"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateX(100%)":"translateX(0)"}),(function(n){return n.open?0:1}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),v=function(){var n=Object(o.useState)(!1),e=Object(O.a)(n,2),t=e[0],c=e[1],i=function(){c(!t)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(f,{open:t,onClick:function(){return i()},children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]}),Object(m.jsx)(p,{open:t,func:i})]})},g=x.a.nav(r||(r=Object(b.a)(["\n  width: 100%;\n  height: 55px;\n  border-bottom: 0px solid #f1f1f1;\n  padding: 0 20px;\n  justify-content: space-between;\n  \n  .logo {\n    padding: 15px 0;\n  }\n"]))),w=function(){return Object(m.jsxs)(g,{children:[Object(m.jsx)("div",{className:"logo",children:"Junsam Ji"}),Object(m.jsx)(v,{})]})};t(126);var I=function(){return Object(m.jsxs)("div",{className:"divC",children:[Object(m.jsx)(h.AnimatedOnScroll,{animationOut:"fadeOut",animationInDuration:600,children:Object(m.jsxs)("div",{className:"homediv",children:[Object(m.jsx)("h1",{children:" Home abcd abcd abcd abcd abcd abcd abcd"}),Object(m.jsx)("h1",{children:" Home "}),Object(m.jsx)("h1",{children:" Home "}),Object(m.jsx)("h1",{children:" Home "}),Object(m.jsx)("h1",{children:" Home "})]})}),Object(m.jsx)(h.AnimatedOnScroll,{animationIn:"slideInUp",animationInDuration:1e3,children:Object(m.jsxs)("div",{className:"homediv",children:[Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"})]})}),Object(m.jsx)(h.AnimatedOnScroll,{animationIn:"slideInUp",animationInDuration:1e3,children:Object(m.jsxs)("div",{className:"homediv",children:[Object(m.jsx)("h1",{children:" Home "}),Object(m.jsx)("h1",{children:" Home "}),Object(m.jsx)("h1",{children:" Home "}),Object(m.jsx)("h1",{children:" Home "}),Object(m.jsx)("h1",{children:" Home "})]})}),Object(m.jsx)(h.AnimatedOnScroll,{animationIn:"slideInUp",animationInDuration:1e3,children:Object(m.jsxs)("div",{className:"homediv",children:[Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"}),Object(m.jsx)("h2",{children:"test"})]})})]})};t(127);var H=function(){return Object(m.jsx)("div",{className:"about-header",children:Object(m.jsx)("h1",{children:"About"})})};var N=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Not Found"})})};t(128);var A=function(){return Object(m.jsx)("div",{id:"wrap",children:Object(m.jsxs)(j.a,{basename:"/portfolio",children:[Object(m.jsx)("div",{id:"header",className:"App-header",children:Object(m.jsx)(w,{})}),Object(m.jsx)(h.AnimatedOnScroll,{animationIn:"fadeIn",animationInDuration:1e3,children:Object(m.jsx)("div",{id:"container",className:"App-content",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(m.jsx)(l.a,{path:"/about",component:H}),Object(m.jsx)(l.a,{component:N})]})})})]})})};d.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.6b2973d5.chunk.js.map