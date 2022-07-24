(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(54),i=n.n(r),s=(n(71),n(5)),o=n(11),l=n(6),d=n(60),j=n(88),u=n(90),b=n(87),O=n(58),h=n(8);function p(e,t){return 1===t?e:e+"s"}function m(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var x=n(61),f=n(25),g="UPDATE_PRODUCTS",v="ADD_TO_CART",y="ADD_MULTIPLE_TO_CART",w="REMOVE_FROM_CART",_="UPDATE_CART_QUANTITY",k="TOGGLE_CART",N="UPDATE_CATEGORIES",C="UPDATE_CURRENT_CATEGORY",S=function(e,t){switch(t.type){case g:return Object(s.a)(Object(s.a)({},e),{},{products:Object(f.a)(t.products)});case v:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(f.a)(e.cart),[t.product])});case y:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(f.a)(e.cart),Object(f.a)(t.products))});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case w:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case k:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case N:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(f.a)(t.categories)});case C:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var T=n(1),E=["value"],A=Object(c.createContext)(),$=A.Provider,I=function(e){e.value;var t,n=Object(x.a)(e,E),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(S,t)),r=Object(h.a)(a,2),i=r[0],o=r[1];return Object(T.jsx)($,Object(s.a)({value:[i,o]},n))},D=function(){return Object(c.useContext)(A)};var P,Q,R,F,U,L=function(e){var t=D(),n=Object(h.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,l=e._id,d=e.price,j=e.quantity,u=c.cart;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(T.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(T.jsx)("p",{children:i})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[j," ",p("item",j)," in stock"]}),Object(T.jsxs)("span",{children:["$",d]})]}),Object(T.jsx)("button",{onClick:function(){var t=u.find((function(e){return e._id===l}));t?(a({type:_,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},q=n(62),W=n(22),B=n(89),G=Object(B.a)(P||(P=Object(W.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Y=Object(B.a)(Q||(Q=Object(W.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),M=(Object(B.a)(R||(R=Object(W.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(B.a)(F||(F=Object(W.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),H=Object(B.a)(U||(U=Object(W.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),J=n.p+"static/media/spinner.689d9a07.gif";var z=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(q.b)(G),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:g,products:o.products}),o.products.forEach((function(e){m("products","put",e)}))):s||m("products","get").then((function(e){a({type:g,products:e})}))}),[o,s,a]),Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(T.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(T.jsx)(L,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(T.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(T.jsx)("img",{src:J,alt:"loading"}):null]})};var V=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(q.b)(M),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:N,categories:o.categories}),o.categories.forEach((function(e){m("categories","put",e)}))):s||m("categories","get").then((function(e){a({type:N,categories:e})}))}),[o,s,a]),Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(T.jsx)("button",{onClick:function(){var t;t=e._id,a({type:C,currentCategory:t})},children:e.name},e._id)}))]})},K=n(16),X=n(24),Z=n(55),ee=n(84),te=function(e){var t=e.item,n=D(),c=Object(h.a)(n,2)[1];return Object(T.jsxs)("div",{className:"flex-row",children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[t.name,", $",t.price]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{children:"Qty:"}),Object(T.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:w,_id:t._id}),m("cart","delete",Object(s.a)({},t))):(c({type:_,_id:t._id,purchaseQuantity:parseInt(n)}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(T.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:w,_id:e._id}),m("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ne=n(56),ce=n(57),ae=n(45),re=n.n(ae),ie=new(function(){function e(){Object(ne.a)(this,e)}return Object(ce.a)(e,[{key:"getProfile",value:function(){return re()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return re()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),se=(n(76),Object(Z.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),oe=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(ee.a)(Y),i=Object(h.a)(r,2),s=i[0],o=i[1].data;function l(){a({type:k})}return Object(c.useEffect)((function(){o&&se.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(X.a)(Object(K.a)().mark((function e(){var t;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:t=e.sent,a({type:y,products:Object(f.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(T.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(T.jsxs)("div",{children:[n.cart.map((function(e){return Object(T.jsx)(te,{item:e},e._id)})),Object(T.jsxs)("div",{className:"flex-row space-between",children:[Object(T.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ie.loggedIn()?Object(T.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{products:e}})},children:"Checkout"}):Object(T.jsx)("span",{children:"(log in to check out)"})]})]}):Object(T.jsxs)("h3",{children:[Object(T.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(T.jsx)("div",{className:"cart-closed",onClick:l,children:Object(T.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},le=function(){return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(V,{}),Object(T.jsx)(z,{}),Object(T.jsx)(oe,{})]})};var de=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.g)().id,i=Object(c.useState)({}),d=Object(h.a)(i,2),j=d[0],u=d[1],b=Object(q.b)(G),O=b.loading,p=b.data,x=n.products,f=n.cart;return Object(c.useEffect)((function(){x.length?u(x.find((function(e){return e._id===r}))):p?(a({type:g,products:p.products}),p.products.forEach((function(e){m("products","put",e)}))):O||m("products","get").then((function(e){a({type:g,products:e})}))}),[x,p,O,a,r]),Object(T.jsxs)(T.Fragment,{children:[j&&f?Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(T.jsx)("h2",{children:j.name}),Object(T.jsx)("p",{children:j.description}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Price:"}),"$",j.price," ",Object(T.jsx)("button",{onClick:function(){var e=f.find((function(e){return e._id===r}));e?(a({type:_,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},j),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(T.jsx)("button",{disabled:!f.find((function(e){return e._id===j._id})),onClick:function(){a({type:w,_id:j._id}),m("cart","delete",Object(s.a)({},j))},children:"Remove from Cart"})]}),Object(T.jsx)("img",{src:"/images/".concat(j.image),alt:j.name})]}):null,O?Object(T.jsx)("img",{src:J,alt:"loading"}):null,Object(T.jsx)(oe,{})]})};var je,ue,be,Oe=function(e){var t=e.children;return Object(T.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},he=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(Oe,{children:[Object(T.jsx)("h1",{children:"404 Page Not Found"}),Object(T.jsx)("h1",{children:Object(T.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},pe=n(29),me=n(85),xe=Object(B.a)(je||(je=Object(W.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),fe=Object(B.a)(ue||(ue=Object(W.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ge=Object(B.a)(be||(be=Object(W.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ve=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(me.a)(xe),l=Object(h.a)(i,2),d=l[0],j=l[1].error,u=function(){var e=Object(X.a)(Object(K.a)().mark((function e(t){var n,c;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,ie.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(pe.a)({},n,c)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(T.jsx)("h2",{children:"Login"}),Object(T.jsxs)("form",{onSubmit:u,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(T.jsx)("div",{children:Object(T.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ye=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(me.a)(ge),l=Object(h.a)(i,1)[0],d=function(){var e=Object(X.a)(Object(K.a)().mark((function e(t){var n,c;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,ie.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(pe.a)({},n,c)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(T.jsx)("h2",{children:"Signup"}),Object(T.jsxs)("form",{onSubmit:d,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(T.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(T.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var we=function(){return Object(T.jsxs)("header",{className:"flex-row px-1",children:[Object(T.jsx)("h1",{children:Object(T.jsxs)(o.b,{to:"/",children:[Object(T.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(T.jsx)("nav",{children:ie.loggedIn()?Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)("a",{href:"/",onClick:function(){return ie.logout()},children:"Logout"})})]}):Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var _e=function(){var e=Object(me.a)(fe),t=Object(h.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(X.a)(Object(K.a)().mark((function e(){var n,c,a,r;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(T.jsx)("div",{children:Object(T.jsxs)(Oe,{children:[Object(T.jsx)("h1",{children:"Success!"}),Object(T.jsx)("h2",{children:"Thank you for your purchase!"}),Object(T.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ke=function(){var e,t=Object(q.b)(H).data;return t&&(e=t.user),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(T.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(T.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(T.jsx)("p",{children:a})]}),Object(T.jsx)("div",{children:Object(T.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},Ne=Object(d.a)({uri:"/graphql"}),Ce=Object(O.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Se=new j.a({link:Ce.concat(Ne),cache:new u.a});var Te=function(){return Object(T.jsx)(b.a,{client:Se,children:Object(T.jsx)(o.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(I,{children:[Object(T.jsx)(we,{}),Object(T.jsxs)(l.c,{children:[Object(T.jsx)(l.a,{path:"/",element:Object(T.jsx)(le,{})}),Object(T.jsx)(l.a,{path:"/login",element:Object(T.jsx)(ve,{})}),Object(T.jsx)(l.a,{path:"/signup",element:Object(T.jsx)(ye,{})}),Object(T.jsx)(l.a,{path:"/success",element:Object(T.jsx)(_e,{})}),Object(T.jsx)(l.a,{path:"/orderHistory",element:Object(T.jsx)(ke,{})}),Object(T.jsx)(l.a,{path:"/products/:id",element:Object(T.jsx)(de,{})}),Object(T.jsx)(l.a,{path:"*",element:Object(T.jsx)(he,{})})]})]})})})})},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(Te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}},[[77,1,2]]]);
//# sourceMappingURL=main.0f430760.chunk.js.map