(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),i=a(5),c=a(6),o=a(9),l=a(7),u=a(8);function h(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function m(e){return e[Math.floor(Math.random()*e.length)]}function p(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(m(e),"-").concat(m(e),"-").concat(m(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{required:!0,type:"text",placeholder:"Store Name",defaultValue:p(),ref:this.myInput}),r.a.createElement("button",{type:"submit"},"Visit Store ->"))}}]),t}(n.Component),f=a(12),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"of"}," The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,this.props.tagline)))}}]),t}(n.Component),b=a(17),g=a.n(b),y=a(22),E=a(16),O=a(31),j=a.n(O),k=a(15),w=a.n(k),S=w.a.initializeApp({apiKey:"AIzaSyCL7i2Px1qbBXQOq7ntXVP0mWJq8aWCRfE",authDomain:"catch-of-the-day-howard.firebaseapp.com",databaseURL:"https://catch-of-the-day-howard.firebaseio.com"}),F=j.a.createClass(S.database()),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){if(e.preventDefault(),a.nameRef.current.value||a.priceRef.current.value||a.descRef.current.value||a.imageRef.current.value){var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{ref:this.nameRef,placeholder:"name",name:"name",type:"text"}),r.a.createElement("input",{ref:this.priceRef,placeholder:"price",name:"price",type:"text"}),r.a.createElement("select",{ref:this.statusRef,name:"status",id:""},r.a.createElement("option",{value:"available"},"Fresh"),r.a.createElement("option",{value:"unavailable"},"Sold Out")),r.a.createElement("textarea",{ref:this.descRef,name:"desc",placeholder:"desc"}),r.a.createElement("input",{ref:this.imageRef,placeholder:"image",name:"image",type:"text"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(n.Component),N=a(20),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value,n=Object(f.a)({},a.props.fish,Object(N.a)({},e.target.name,t));console.log(n),a.props.updateFish(a.props.fishKey,n)},a.handleDelete=function(){a.props.deleteFish(a.props.fishKey)},a.state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.fish,t=e.name,a=e.price,n=e.status,s=e.desc,i=e.image;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{onChange:this.handleChange,name:"name",type:"text",value:t}),r.a.createElement("input",{onChange:this.handleChange,name:"price",type:"text",value:a}),r.a.createElement("select",{onChange:this.handleChange,name:"status",value:n},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{onChange:this.handleChange,name:"desc",type:"text",value:s}),r.a.createElement("input",{onChange:this.handleChange,type:"text",name:"image",value:i}),r.a.createElement("button",{onClick:this.handleDelete},"Remove Fish"))}}]),t}(n.Component),x=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With Github"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log In With Facebook"))},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(){var e=Object(y.a)(g.a.mark(function e(t){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,F.fetch(a.props.storeId,{context:Object(E.a)(Object(E.a)(a))});case 3:if(n=e.sent,console.log("store ",n),n.owner){e.next=8;break}return e.next=8,F.post("".concat(a.props.storeId,"/owner"),{data:t.user.uid});case 8:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(w.a.auth["".concat(e,"AuthProvider")]);S.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(y.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.auth().signOut();case 2:a.setState({uid:null});case 3:case"end":return e.stop()}},e)})),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, you are not the owner!"),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map(function(t){console.log(t);var a=e.props.fishes[t];return r.a.createElement(R,{key:t,fishKey:t,deleteFish:e.props.deleteFish,updateFish:e.props.updateFish,fish:a})}),r.a.createElement(C,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(x,{authenticate:this.authenticate})}}]),t}(n.Component),T=a(18),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props,n=t.fishes,s=t.order,i=n[e],c=s[e],o=i&&"available"===i.status;return i?o?r.a.createElement(T.CSSTransition,{classNames:"order",key:e,timeout:{enter:500,exist:500}},r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(T.TransitionGroup,{component:"span",className:"count"},r.a.createElement(T.CSSTransition,{classNames:"count",key:c,timeout:{enter:200,exit:200}},r.a.createElement("span",null,c))),"lbs ",i?i.name:"","  ","",h(c*i.price)),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7"))):r.a.createElement("li",null,"Sorry ",i?i.name:"fish"," is no longer available"):null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fishes,a=e.order,n=Object.keys(a),s=n.reduce(function(e,n){var r=t[n],s=a[n];return r&&"available"===r.status?e+s*r.price:e},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(T.TransitionGroup,{component:"ul",className:"order"},n.map(this.renderOrder)),r.a.createElement("div",{className:"total"},r.a.createElement("strong",null,h(s))))}}]),t}(n.Component),D={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.details,a=e.addToOrder,n=e.orderKey,s=t.desc,i=t.image,c=t.name,o=t.price,l="available"===t.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:i,alt:""}),r.a.createElement("h3",{className:"fish-name"},c,r.a.createElement("span",{className:"price"},h(o))),r.a.createElement("p",null,s),r.a.createElement("button",{onClick:function(){return a(n)},disabled:!l},l?"Add To Order":"Sold Out"))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).addFish=function(e){var t=Object(f.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.loadSampleFishes=function(){a.setState({fishes:D})},a.addToOrder=function(e){var t=Object(f.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(f.a)({},a.state.order);delete t[e],a.setState({order:t})},a.updateFish=function(e,t){var n=Object(f.a)({},a.state.fishes);n[e]=t,console.log("fishes ",n),a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(f.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.state={fishes:{},order:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=F.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(e,t){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){F.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return console.log("app props ",this.props),r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(v,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){var a=e.state.fishes[t];return r.a.createElement(L,{orderKey:t,key:t,details:a,addToOrder:e.addToOrder})}))),r.a.createElement(A,{removeFromOrder:this.removeFromOrder,fishes:this.state.fishes,order:this.state.order,addToOrder:this.addToOrder}),r.a.createElement(I,{storeId:this.props.match.params.storeId,deleteFish:this.deleteFish,updateFish:this.updateFish,loadSampleFishes:this.loadSampleFishes,addFish:this.addFish,fishes:this.state.fishes}))}}]),t}(n.Component),P=a(65),W=a(67),K=a(66),J=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found"))},q=function(){return r.a.createElement(P.a,null,r.a.createElement(W.a,null,r.a.createElement(K.a,{exact:!0,path:"/",component:d}),r.a.createElement(K.a,{path:"/store/:storeId",component:M}),r.a.createElement(K.a,{component:J})))};a(62);Object(s.render)(r.a.createElement(q,null),document.getElementById("main"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1d766fc9.chunk.js.map