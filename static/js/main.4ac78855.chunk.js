(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(28),o=n.n(s),r=n(19),i=n(10),l=n(11),j=n(13),u=n(12),d=n(6),p=n(2),h=n(1);var b=function(){return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("h1",{children:"About"}),Object(h.jsx)("p",{children:"This is the Post Manager App"})]})};var x=function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"My Blog App"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(d.b,{className:"linkStyle",to:"/",children:"Home"})," |",Object(h.jsx)(d.b,{className:"linkStyle",to:"/about",children:" About"})]})]})};var O=function(t){var e=t.post,n=t.delPost,c=Object(p.e)();return Object(h.jsxs)("li",{className:"data",children:[Object(h.jsx)("p",{onClick:function(){return c.push("/postdata/".concat(e.id))},children:e.title}),Object(h.jsx)("button",{onClick:function(){return n(e.id)},children:"X"})]})};var f=function(t){var e=t.posting,n=t.delPost;return Object(h.jsx)("ul",{className:"post-data",children:e.map((function(t,e){return Object(h.jsx)(O,{post:t,delPost:n},e)}))})};var m=function(){return Object(h.jsx)("div",{children:"My Blog Post Deatils"})},v=n(14),g=n.n(v),y=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={text:""},t.onChange=function(e){t.setState({text:e.target.value})},t.onSubmit=function(e){e.preventDefault(),""!==t.state.text&&(t.props.newPost(t.state.text),t.setState({text:""}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"new-post",children:Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter text",value:this.state.text,onChange:this.onChange}),Object(h.jsx)("button",{children:"Add"})]})})}}]),n}(a.a.Component),P=y,S=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={posting:[]},t.newPost=function(e){g.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({posting:[e.data].concat(Object(r.a)(t.state.posting))})}))},t.delPost=function(e){g.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({posting:Object(r.a)(t.state.posting.filter((function(t){return t.id!==e})))})}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;g.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){t.setState({posting:e.data})}))}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"myBlog",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(p.a,{exact:!0,path:"/",render:function(e){return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(P,{newPost:t.newPost}),Object(h.jsx)(f,{posting:t.state.posting,delPost:t.delPost})]})}}),Object(h.jsx)(p.a,{exact:!0,path:"/about",component:b}),Object(h.jsx)(p.a,{exact:!0,path:"/postdata/:id",children:Object(h.jsx)(m,{})})]})})}}]),n}(c.Component),k=S;n(62);o.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.4ac78855.chunk.js.map