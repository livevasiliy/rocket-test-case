(this["webpackJsonprocket-test-case"]=this["webpackJsonprocket-test-case"]||[]).push([[0],{25:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},26:function(e,n,t){e.exports=t.p+"static/media/github.104e26e5.svg"},28:function(e,n,t){e.exports=t(54)},33:function(e,n,t){},34:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(21),l=t.n(c),i=(t(33),t(4)),o=(t(34),t(7)),u=t.n(o),s=t(27),f=t(2),m=t(3);function p(){var e=Object(f.a)(["\n    font-size: 14px;\n    font-weight: 400;\n    margin-left: 1rem;\n    color: #ffffff;\n"]);return p=function(){return e},e}function d(){var e=Object(f.a)(["\n    font-size: 18px;\n    margin: 0.5rem 1rem;\n    color: #ffffff;\n"]);return d=function(){return e},e}function h(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: #343a40;\n"]);return h=function(){return e},e}function x(){var e=Object(f.a)(["\n    display: flex;    \n    height: 150px;\n    font-size: 16px;\n    -webkit-box-shadow: 10px 10px 14px -4px rgba(0,0,0,0.28);\n    -moz-box-shadow: 10px 10px 14px -4px rgba(0,0,0,0.28);\n    box-shadow: 10px 10px 14px -4px rgba(0,0,0,0.28);\n"]);return x=function(){return e},e}function g(){var e=Object(f.a)(["\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n"]);return g=function(){return e},e}var b=m.a.div(g()),v=m.a.div(x()),E=m.a.div(h()),j=m.a.h2(d()),w=m.a.h5(p()),O=function(e){var n=e.project;return(r.a.createElement("div",{className:"col-12 col-md-6",key:n.id},r.a.createElement(b,null,r.a.createElement(v,{className:"card"},r.a.createElement(E,null,r.a.createElement(j,null,n.title),r.a.createElement("div",null,r.a.createElement(w,null,n.name),r.a.createElement(w,null,"nickname: ",n.username)))))))};function k(){var e=Object(f.a)(["\n    display: flex;\n    width: 100%;\n    height: 40px;\n    padding: 20px;\n    margin: 10px;\n    font-style: italic;\n    font-weight: 400;\n    -webkit-box-shadow: 10px 10px 14px 0px rgb(0,0,0,0.13);\n    -moz-box-shadow: 10px 10px 14px 0px rgba(0,0,0,0.13);\n    box-shadow: 10px 10px 14px 0px rgba(0,0,0,0.13);\n"]);return k=function(){return e},e}var y=m.a.input(k()),N=function(e){var n=e.placeholder,t=e.value,a=e.className,c=e.handleChange;return(r.a.createElement(y,{placeholder:n,value:t,className:a,onChange:c}))},z=function(e){var n=e.users,t=Object(a.useState)([]),c=Object(i.a)(t,2),l=c[0],o=c[1],f=Object(a.useState)(""),m=Object(i.a)(f,2),p=m[0],d=m[1],h=Object(a.useState)([]),x=Object(i.a)(h,2),g=x[0],b=x[1];function v(e){return n.find((function(n){return n.id===e}))}Object(a.useEffect)((function(){n.map((function(e){return u.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(e.id)).then((function(e){o((function(n){return[e.data].concat(Object(s.a)(n))}))}))}))}),[n]),Object(a.useEffect)((function(){var e=l.map((function(e){return e.filter((function(e){return e.title.toLowerCase().includes(p)}))}));b(e)}),[p,l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{value:p,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",handleChange:function(e){d(e.target.value)}}),g.map((function(e){return e.map((function(e){return r.a.createElement(O,{project:{id:e.id,title:e.title,username:v(e.userId).username,name:v(e.userId).name},key:e.id})}))})))},C=t(25),S=t.n(C),I=t(26),F=t.n(I),J=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand flex-wrap",href:"/"},r.a.createElement("img",{src:S.a,width:"50",height:"60",className:"d-inline-block align-middle",alt:"Rocket Test Case",loading:"lazy"}),r.a.createElement("span",null,"Rocket Test Case")),r.a.createElement("a",{className:"ml-auto",href:"https://github.com/livevasiliy/rocket-test-case",title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434"},r.a.createElement("img",{src:F.a,width:"50",height:"60",className:"d-inline-block align-middle",alt:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",loading:"lazy"})))};function R(){var e=Object(f.a)(["\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: 100%;\n   height: 60px;\n   padding: 0.5rem 1rem;\n   background-color: #343a40;\n   color: #ffffff;\n   text-align: center;\n   font-size: 22px;\n   font-weight: 600;\n   line-height: 18px;\n"]);return R=function(){return e},e}var T=m.a.div(R()),A=function(){return r.a.createElement(T,null,r.a.createElement("span",null,"\u0412\u0430\u0441\u0438\u043b\u0438\u0439 \u041f\u0438\u0432\u043e\u0432\u0430\u0440\u043e\u0432, 2020"))},B=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){u.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){c(e.data)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement("div",{className:"App container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(z,{users:t}))),r.a.createElement(A,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2f34b7f9.chunk.js.map