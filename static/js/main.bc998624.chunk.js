(this.webpackJsonpservicechannel=this.webpackJsonpservicechannel||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),s=a(29),c=a(30),i=a(9),u="FETCH_POSTS_BEGIN",d="FETCH_POSTS_SUCCESS",m="FETCH_POSTS_FAILURE",p=a(26),E=a.n(p);var g={getPosts:function(){return console.log("PostSerive ::getPost : "),E.a.get("https://www.reddit.com/subreddits/popular.json?raw_json=1").then((function(e){return function(e){200!==e.status&&console.log("PostSerive :: API ERROR  ");return e.data.data.children}(e)}))}};var v={getPosts:function(){return function(e){e({type:u}),g.getPosts().then((function(t){return e({type:d,payload:{postsData:t}})}),(function(t){return e(function(e){return{type:m,payload:{error:e}}}(t))}))}}},f=function(e){var t=e.post.data;return r.a.createElement("div",{className:"postCard",onClick:function(){return e.onSelection(t)}},r.a.createElement("div",{className:"cardHeader"}),r.a.createElement("div",{className:"cardBody"},r.a.createElement("div",null,r.a.createElement("label",null,"ID : "),t.id),r.a.createElement("div",null,r.a.createElement("label",null,"Name : "),t.name),r.a.createElement("img",{className:t.banner_background_image?"postImg":"hide",src:t.banner_background_image,alt:"post bg",height:"142",width:"142"})))},b=function(e){var t=e.post;return console.log("PostDetails :: props : ",t),r.a.createElement("div",{className:"postDetails"},r.a.createElement("div",{className:"detailHeader"}),r.a.createElement("div",{className:"detailBody"},r.a.createElement("div",{className:"postLabel"},r.a.createElement("label",null,"ID : "),t.id),r.a.createElement("div",{className:"postLabel"},r.a.createElement("label",null,"Name : "),t.name),r.a.createElement("img",{className:"postImg",src:t.banner_background_image,alt:"post bg",height:"142",width:"142"})))},h=(a(57),Object(i.b)((function(e){return{postsData:e.postReducer.postsData}}),(function(e){return{getPosts:function(){return e(v.getPosts())}}}))((function(e){var t=e.getPosts,a=e.postsData,l=Object(n.useState)({}),o=Object(c.a)(l,2),s=o[0],i=o[1];Object(n.useEffect)((function(){t()}),[t]);return r.a.createElement("div",{className:"postList"},r.a.createElement("div",{className:"scrollArea"},a&&a.length>0&&a.map((function(e,t){return r.a.createElement(f,{key:t,post:e,onSelection:function(e){return t=e,console.log("PostList ::onSelectHandler thisPost : ",t),void i(t);var t}})}))),r.a.createElement("div",{className:"postDetailWrapper"},r.a.createElement(b,{post:s})))}))),S=(a(58),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},"Service Channel - Project"),r.a.createElement("div",{className:"desc"},"List of Post and its details"))}),N=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,"Service Channel - Project",r.a.createElement("span",null,"\xa9 ",(new Date).getFullYear())))};a(59);var P=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"appContainer"},r.a.createElement(S,null),r.a.createElement(h,null),r.a.createElement(N,null)))},_=a(4),y=a(28),O=a(10),j={postsData:[],loading:!1,error:{}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(O.a)({},e,{loading:!0,error:null});case d:return console.log(" FETCH_POSTS_SUCCESS :: payload : ",t.payload),Object(O.a)({},e,{loading:!1,postsData:t.payload.postsData});case m:return console.log(" FETCH_POSTS_FAILURE :: payload : ",t.payload.error),Object(O.a)({},e,{loading:!1,error:t.payload.error.message,postsData:[]});default:return e}},D=Object(_.c)({postReducer:C}),w=Object(_.d)(D,Object(_.a)(y.a));o.a.render(r.a.createElement(i.a,{store:w},r.a.createElement(P,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.bc998624.chunk.js.map