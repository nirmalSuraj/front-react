(this["webpackJsonpit-project-frontend"]=this["webpackJsonpit-project-frontend"]||[]).push([[0],{52:function(e,t,n){},61:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),o=n(22),r=n.n(o),c=(n(61),n(30)),i=n(6),l=n(27),j=n.n(l),b=n(52),d=n.n(b),u=n(53),m=n(76),h=n(77),p=n(33),O=n(24),x=n(17),f=n(18),y=function(){function e(){Object(x.a)(this,e)}return Object(f.a)(e,[{key:"Cookie",value:function(e){var t=e.length+1,n=document.cookie.split(";").map((function(e){return e.trim()})).filter((function(n){return n.substring(0,t)==="".concat(e,"=")})).map((function(e){return decodeURIComponent(e.substring(t))}))[0]||null;return n}},{key:"AuthSession",value:function(e){return null!==this.Cookie(e)&&("true"==this.Cookie(e)||"flase"==this.Cookie(e))}},{key:"GetCookies",value:function(e){var t=this.Cookie(e);return null!==t&&t}},{key:"SetCookie",value:function(e,t,n){var s="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),s="; expires="+a.toUTCString()}return document.cookie=e+"="+(t||"")+s+"; path=/",null!==this.GetCookies(e)}},{key:"DeleteCookie",value:function(e){return document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",!0}}]),e}(),v=new y,C=new(function(){function e(){Object(x.a)(this,e)}return Object(f.a)(e,[{key:"AuthSession",value:function(e){return v.AuthSession(e)}}]),e}()),g=new(function(){function e(){Object(x.a)(this,e)}return Object(f.a)(e,[{key:"Auth",value:function(){return C.AuthSession("auth")}},{key:"destroy",value:function(e){"undefined"!==typeof e&&e>=400&&404!=e&&v.DeleteCookie("auth")}}]),e}()),k=n(0),A=v.GetCookies("base"),N=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=(t[0],t[1]),a=Object(s.useState)(!1),o=Object(i.a)(a,2),r=(o[0],o[1]),c=Object(s.useState)([]),l=Object(i.a)(c,2),j=(l[0],l[1]);return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),console.log(),fetch(A+"/api/Auth/loginout",{method:"GET",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control","Access-Control-Allow-Methods":"OPTIONS, GET, POST"}}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.hasError||"object"==typeof e.errors){var t=[];if("object"==typeof e.errors)for(var s=0,a=Object.entries(e.errors);s<a.length;s++){var o=Object(i.a)(a[s],2),c=o[0],l=o[1];t.push("-"+c+": "+l)}else t.push(e.error);n(!0),j(t)}else n(!1);e.hasError||void 0!==e.errors?r(!1):(v.DeleteCookie("auth"),v.DeleteCookie("token"),r(!0),window.location.reload())})).catch((function(e){return console.log(e)}))},children:"Log out"})})},T=function(e){Object(u.a)(e);var t=g.Auth();return Object(k.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(p.a.Brand,{href:"#home",children:"IT Project Comparison"}),Object(k.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(k.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(k.jsxs)(h.a,{className:"me-auto",children:[t?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(h.a.Link,{as:O.b,to:"/home",children:"Home"}),Object(k.jsx)(h.a.Link,{as:O.b,to:"/UserHistory",children:"User History"}),Object(k.jsx)(h.a.Link,{as:O.b,to:"/contact",children:"Contact Us"}),Object(k.jsx)(h.a.Item,{className:"ml-auto",children:Object(k.jsx)(N,{})})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(h.a.Link,{as:O.b,to:"/home",children:"Home"}),Object(k.jsx)(h.a.Link,{as:O.b,to:"/register",children:"Registeren"}),Object(k.jsx)(h.a.Link,{as:O.b,to:"/login",children:"Login"})]}),Object(k.jsxs)("div",{className:"ml-5",children:[Object(k.jsx)("input",{type:"button",onClick:function(){v.SetCookie("base","https://localhost:44391",2),v.SetCookie("checkBase","flase",2),v.DeleteCookie("auth"),v.DeleteCookie("token"),window.location.reload()},value:"Local",className:"flase"==v.GetCookies("checkBase")?"btn btn-success":"btn btn-info"}),Object(k.jsx)("input",{type:"button",onClick:function(){v.SetCookie("base","https://project202220220524193351.azurewebsites.net",2),v.SetCookie("checkBase","true",2),v.DeleteCookie("auth"),v.DeleteCookie("token"),window.location.reload()},value:"DB",className:"flase"==v.GetCookies("checkBase")?"btn btn-info":"btn btn-success"})]})]})})]})})},S=n(9),w=n(28),I=n(49),E=n(10),P=n(78),D=function(){function e(t,n){Object(x.a)(this,e),this.arrayCompany=void 0,this.fieldOfcompanyObject=void 0,this.input1=void 0,this.input2=void 0,this.arrayCompany=t,this.fieldOfcompanyObject=n}return Object(f.a)(e,[{key:"compareInputsAndReturnColor",value:function(e,t){return e>t?"text-success":e==t?"":"text-danger"}},{key:"ByIndex",value:function(e){if(void 0!=this.arrayCompany&&void 0!=this.arrayCompany){var t=this.fieldOfcompanyObject,n=this.arrayCompany[0==e?0:1],s=this.arrayCompany[0==e?1:0],a=t,o=t;if(void 0!=typeof n[a]&&void 0!=typeof s[o]){var r,c,i=null!==(r=n[a])&&void 0!==r?r:0,l=null!==(c=s[o])&&void 0!==c?c:0;this.input1=+i,this.input2=+l}return this}return null}},{key:"Compare",value:function(){if(void 0!=this.input1&&void 0!=this.input2){var e=this.input1,t=this.input2;switch(this.fieldOfcompanyObject){case"companyProfit":case"debt":case"equitity":case"depositDate":return this.compareInputsAndReturnColor(+e,+t);default:return"black"}}return"black"}}],[{key:"Company",value:function(t,n){return new e(t,n)}}]),e}(),F=function(e){var t=e.companyInfo;return Object(k.jsx)(k.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,n){var s,a,o;return Object(k.jsx)("div",{className:"col-md-3  mt-5 ml-5",children:Object(k.jsx)(P.a,{style:{width:"100%",minHeight:"400px"},children:Object(k.jsxs)(P.a.Body,{children:[Object(k.jsx)(P.a.Title,{children:e.name}),Object(k.jsxs)(P.a.Text,{children:["VAT : ",e.vat," "]}),Object(k.jsxs)(P.a.Text,{children:["Adress: ",e.address]}),Object(k.jsxs)(P.a.Text,{children:["Publishing Date: ",e.depositDate]}),Object(k.jsxs)(P.a.Text,{className:null===(s=D.Company(t,"equitity").ByIndex(n))||void 0===s?void 0:s.Compare(),children:["Equity: ",e.equitity," "]}),Object(k.jsxs)(P.a.Text,{className:null===(a=D.Company(t,"debt").ByIndex(n))||void 0===a?void 0:a.Compare(),children:["Debts: ",e.debt," "]}),Object(k.jsxs)(P.a.Text,{className:null===(o=D.Company(t,"companyProfit").ByIndex(n))||void 0===o?void 0:o.Compare(),children:["Profit: ",e.companyProfit]})]})})})}))})},H=v.GetCookies("base"),V=function(e){var t=e.companyInfo,n=e.companyVAT,a=e.setCompanyInfo,o=Object(s.useState)(!1),r=Object(i.a)(o,2),l=r[0],b=r[1],d=Object(s.useState)(!1),u=Object(i.a)(d,2),m=u[0],h=u[1],p=Object(s.useState)(!0),O=Object(i.a)(p,2),x=(O[0],O[1]);Object(s.useEffect)((function(){Promise.all([f()])}),[]);var f=function(){var e=Object(c.a)(j.a.mark((function e(){var t,s,o,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0),t=[],s=0,o=0;case 4:if(!(o<n.length)){e.next=24;break}return e.prev=5,s+=1,r="".concat(H,"/nbbapi/").concat(n[o]),e.next=10,fetch("".concat(r),{method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*"}});case 10:return c=e.sent,e.next=13,c.json();case 13:i=e.sent,C(i.finalCompanyData[0]),t=[].concat(Object(w.a)(t),Object(w.a)(i.finalCompanyData)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),y(s);case 21:o++,e.next=4;break;case 24:a(t),x(!1);case 26:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(){return e.apply(this,arguments)}}(),y=function(e){console.log(e),1===e?b(!0):(2===e||b(!0),h(!0))},C=function(){var e=Object(c.a)(j.a.mark((function e(t){var n,s,a,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),s={address:t.address,companyProfit:t.companyProfit.toString(),debt:t.debt.toString(),depositDate:null===(n=t.depositDate)||void 0===n?void 0:n.toString(),equitity:t.equitity.toString(),name:t.name,vat:t.vat},console.log(s),!g.Auth()){e.next=26;break}return e.prev=4,e.next=7,fetch(H+"/api/history/history",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control","Access-Control-Allow-Methods":"POST",Authorization:"Bearer ".concat(v.GetCookies("token"))}});case 7:if((a=e.sent).ok){e.next=10;break}throw new Error("Error! status: ".concat(a.status));case 10:return e.next=12,a.json();case 12:return o=e.sent,console.log("result is: ",JSON.stringify(o)),e.abrupt("return",o);case 17:if(e.prev=17,e.t0=e.catch(4),!(e.t0 instanceof Error)){e.next=24;break}return console.log("error message: ",e.t0.message),e.abrupt("return",e.t0.message);case 24:return console.log("unexpected error: ",e.t0),e.abrupt("return","An unexpected error occurred");case 26:x(!1);case 27:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}();return!1===l&&!1===m?Object(k.jsx)("div",{className:"d-flex justify-content-around",children:Object(k.jsx)(F,{companyInfo:t})}):!0===l&&!1===m?Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Failed to find the first result, please try again with a valid VAT number!"}),Object(k.jsx)(F,{companyInfo:t})]}):!1===l&&!0===m?Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Failed to find the second result, please try again with a valid VAT number!"}),Object(k.jsx)(F,{companyInfo:t})]}):Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Failed to find any results, please try again using valid VAT numbers!"})},B=function(e){var t=e.companyInfo,n=e.companyVAT,s=e.vatArray,a=e.submit,o=e.setCompanyInfo,r=e.setVatArray,c=function(e){10===e.target.value.split("").length&&/^[0-9\b]+$/.test(e.target.value)&&r([].concat(Object(w.a)(s),[e.target.value]))};e.userSessionHistoryCompanies;return 0!==n.length?Object(k.jsxs)("main",{children:[Object(k.jsx)("h1",{children:"NBB Company Comparison"}),Object(k.jsxs)("p",{children:["Welcome to the Company Comparison Project.",Object(k.jsx)("br",{}),"Enter two company VAT numbers to compare both key figures."]}),Object(k.jsxs)(E.a,{children:[Object(k.jsxs)(E.a.Group,{className:"mb-3",controlId:"formCompany1",onChange:c,children:[Object(k.jsx)(E.a.Label,{children:"Company1VAT"}),Object(k.jsx)(E.a.Control,{type:"VAT",placeholder:"Enter VATNumber"}),Object(k.jsx)(E.a.Text,{className:"text-muted"})]}),Object(k.jsxs)(E.a.Group,{className:"mb-3",controlId:"formCompany2",onChange:c,children:[Object(k.jsx)(E.a.Label,{children:"Company2VAT"}),Object(k.jsx)(E.a.Control,{type:"VAT",placeholder:"Enter VATNumber"}),Object(k.jsx)(E.a.Text,{className:"text-muted"})]}),Object(k.jsx)(I.a,{variant:"primary",type:"submit",onClick:function(e){window.location.reload()},children:"Clear"})]}),Object(k.jsx)(V,{companyVAT:n,companyInfo:t,setCompanyInfo:o})]}):Object(k.jsxs)("main",{children:[Object(k.jsx)("h1",{children:"NBB Company Comparison"}),Object(k.jsxs)("p",{children:["Welcome to the Company Comparison Project.",Object(k.jsx)("br",{}),"Enter two company VAT numbers to compare both key figures."]}),Object(k.jsxs)(E.a,{children:[Object(k.jsxs)(E.a.Group,{className:"mb-3",controlId:"formCompany1",onChange:c,children:[Object(k.jsx)(E.a.Label,{children:"Company1VAT"}),Object(k.jsx)(E.a.Control,{type:"text",placeholder:"Enter VATNumber"}),Object(k.jsx)(E.a.Text,{className:"text-muted"})]}),Object(k.jsxs)(E.a.Group,{className:"mb-3",controlId:"formCompany2",onChange:c,children:[Object(k.jsx)(E.a.Label,{children:"Company2VAT"}),Object(k.jsx)(E.a.Control,{type:"text",placeholder:"Enter VATNumber",pattern:"[0-9]",required:!0}),Object(k.jsx)(E.a.Text,{className:"text-muted"})]}),Object(k.jsx)(I.a,{variant:"primary",type:"submit",onClick:a,children:"Submit"})]})]})},G=function(e){var t=e.companyInfo,n=e.companyVAT,s=e.vatArray,a=e.setVatArray,o=e.submit,r=e.setCompanyInfo,c=e.userSessionHistoryCompanies;return Object(k.jsx)("main",{children:Object(k.jsx)(B,{companyVAT:n,submit:o,vatArray:s,setVatArray:a,companyInfo:t,setCompanyInfo:r,userSessionHistoryCompanies:c})})},L=function(e){var t=e.userSessionHistoryCompanies,n=Object(s.useState)(!1),a=Object(i.a)(n,2),o=a[0];a[1];return!1===o?Object(k.jsx)("div",{children:Object(k.jsx)("div",{className:"col d-flex justify-content-center",children:null===t||void 0===t?void 0:t.map((function(e){return Object(k.jsx)(P.a,{style:{width:"60%"},children:Object(k.jsxs)(P.a.Body,{children:[Object(k.jsx)(P.a.Title,{children:e.name}),Object(k.jsxs)(P.a.Text,{children:["VAT : ",e.vat," "]}),Object(k.jsxs)(P.a.Text,{children:["Adress: ",e.address]}),Object(k.jsxs)(P.a.Text,{children:["Publishing Date: ",e.depositDate]}),Object(k.jsxs)(P.a.Text,{children:["Equity: ",e.equitity]}),Object(k.jsxs)(P.a.Text,{children:["Debts: ",e.debt]}),Object(k.jsxs)(P.a.Text,{children:["Profit: ",e.companyProfit]})]})})}))})}):Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Contact"}),Object(k.jsxs)("p",{children:["This is the Contact screen. You can contact me at ",Object(k.jsx)("a",{href:"mailto:test@test.com"}),"."]}),Object(k.jsxs)("form",{children:[Object(k.jsx)("label",{children:"Email"}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"email",name:"email"}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:"Message"}),Object(k.jsx)("br",{}),Object(k.jsx)("textarea",{name:"message"}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{type:"submit",children:"Send"})]})]})},q=function(e){var t=e.companyInfo;return Object(k.jsx)(k.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(k.jsx)("div",{className:"col-md-3  mt-5 ml-5",children:Object(k.jsx)(P.a,{style:{width:"100%",minHeight:"400px"},children:Object(k.jsxs)(P.a.Body,{children:[Object(k.jsx)(P.a.Title,{children:e.name}),Object(k.jsxs)(P.a.Text,{children:["VAT : ",e.vat," "]}),Object(k.jsxs)(P.a.Text,{children:["Adress: ",e.address]}),Object(k.jsxs)(P.a.Text,{children:["Publishing Date: ",e.depositDate]}),Object(k.jsxs)(P.a.Text,{children:["Equity: ",e.equitity]}),Object(k.jsxs)(P.a.Text,{children:["Debts: ",e.debt]}),Object(k.jsxs)(P.a.Text,{children:["Profit: ",e.companyProfit]})]})})})}))})},X=function(e){var t=e.userSessionHistoryCompanies,n=(e.setHistoryCompanies,t);return n.length>0?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(q,{companyInfo:n})}):Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Failed to find any results, please try again using valid VAT numbers!"})},M=function(e){var t=e.userSessionHistoryCompanies,n=e.setHistoryCompanies,s=e.setSearch;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-6",children:Object(k.jsx)("input",{type:"text",className:"form-contol mt-5 ",onChange:function(e){s(e.target.value)}})})}),Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col-12 mt-5",children:[" ",Object(k.jsx)("h1",{className:"text-center",children:" History"})]})}),Object(k.jsx)("div",{className:"row",children:Object(k.jsx)(X,{userSessionHistoryCompanies:t,setHistoryCompanies:n})})]})},U=v.GetCookies("base"),J=function(e){var t=e.setAuth,n=(e.loggedin,Object(s.useState)({Email:"",Password:""})),a=Object(i.a)(n,2),o=a[0],r=a[1],c=Object(s.useState)(!1),l=Object(i.a)(c,2),j=(l[0],l[1]),b=Object(s.useState)(!1),d=Object(i.a)(b,2),u=(d[0],d[1]),m=Object(s.useState)([]),h=Object(i.a)(m,2),p=(h[0],h[1]),O=function(e){for(var t={Email:"",Password:""},n=0,s=Object.entries(o);n<s.length;n++){var a=Object(i.a)(s[n],2),c=a[0],l=a[1];t[c]=l}t[e.target.id]=e.target.value,r(t)};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"row mt-5",children:Object(k.jsx)("div",{className:"col-md-6 col-sm-12 offset-md-3",children:Object(k.jsxs)("form",{action:"",children:[Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(k.jsx)("input",{type:"email",className:"form-control",id:"Email","aria-describedby":"emailHelp",onChange:O})]}),Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{htmlFor:"examplePasssword1",className:"form-label",children:"Password"}),Object(k.jsx)("input",{type:"password",className:"form-control",id:"Password","aria-describedby":"emailHelp",onChange:O})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),console.log(o),fetch(U+"/api/Auth/login",{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control","Access-Control-Allow-Methods":"OPTIONS, GET, POST"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.hasError||"object"==typeof e.errors){var n=[];if("object"==typeof e.errors)for(var s=0,a=Object.entries(e.errors);s<a.length;s++){var o=Object(i.a)(a[s],2),r=o[0],c=o[1];n.push("-"+r+": "+c)}else n.push(e.error);j(!0),p(n)}else j(!1);e.hasError||void 0!==e.errors?u(!1):(v.SetCookie("auth","true",1),v.SetCookie("token",e.token,1),console.log(e),u(!0),t(!0),window.location.replace("home"))})).catch((function(e){return console.log(e)}))},children:"Log In"})]})})})})},R=function(e){var t=e.setAuth,n=e.loggedin;return Object(k.jsx)("div",{children:Object(k.jsx)(J,{setAuth:t,loggedin:n})})},z=Object(s.createContext)({companies:[]}),W=function(e){var t=e.type,n=e.msg;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"alert alert-".concat(t),role:"alert",children:n.map((function(e){return Object(k.jsx)("p",{children:e})}))})})},Y=v.GetCookies("base"),$=function(){var e=Object(s.useState)({Email:"",LastName:"",Password:"",FristName:"",ConfirmPassword:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)(!1),r=Object(i.a)(o,2),c=r[0],l=r[1],j=Object(s.useState)(!1),b=Object(i.a)(j,2),d=b[0],u=b[1],m=Object(s.useState)([]),h=Object(i.a)(m,2),p=h[0],O=h[1],x=function(e){for(var t={Email:"user",LastName:"",Password:"",FristName:"",ConfirmPassword:""},s=0,o=Object.entries(n);s<o.length;s++){var r=Object(i.a)(o[s],2),c=r[0],l=r[1];t[c]=l}t[e.target.id]=e.target.value,a(t)};return Object(k.jsxs)(k.Fragment,{children:[c&&Object(k.jsx)(W,{type:"danger mt-5 col-6 offset-md-3",msg:p}),d&&Object(k.jsx)(W,{type:"success text-center mt-5 col-6 offset-md-3",msg:["Done"]}),Object(k.jsx)("div",{className:"row mt-5",children:Object(k.jsx)("div",{className:"col-md-6 col-sm-12 offset-md-3",children:Object(k.jsxs)("form",{action:"",children:[Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(k.jsx)("input",{type:"email",className:"form-control",id:"Email","aria-describedby":"emailHelp",onChange:x})]}),Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Achter naam"}),Object(k.jsx)("input",{type:"email",className:"form-control",id:"LastName","aria-describedby":"emailHelp",onChange:x})]}),Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Voornaam"}),Object(k.jsx)("input",{type:"email",className:"form-control",id:"FristName","aria-describedby":"emailHelp",onChange:x})]}),Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Paswoord"}),Object(k.jsx)("input",{type:"email",className:"form-control",id:"Password","aria-describedby":"emailHelp",onChange:x})]}),Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Herhaal"}),Object(k.jsx)("input",{type:"email",className:"form-control",id:"ConfirmPassword","aria-describedby":"emailHelp",onChange:x})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),fetch(Y+"/api/register",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control","Access-Control-Allow-Methods":"OPTIONS, GET, POST"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.hasError||"object"==typeof e.errors){var t=[];if("object"==typeof e.errors)for(var n=0,s=Object.entries(e.errors);n<s.length;n++){var a=Object(i.a)(s[n],2),o=a[0],r=a[1];t.push("-"+o+": "+r)}else t.push(e.error);l(!0),O(t)}else l(!1);e.hasError||void 0!==e.errors?u(!1):u(!0)})).catch((function(e){return console.log(e)}))},children:"Submit"})]})})})]})},K=function(){return Object(k.jsx)($,{})},Q=v.GetCookies("base");var Z=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)([]),r=Object(i.a)(o,2),l=r[0],b=(r[1],Object(s.useState)([])),u=Object(i.a)(b,2),h=u[0],p=u[1],x=Object(s.useState)([]),f=Object(i.a)(x,2),y=f[0],C=f[1],A=Object(s.useState)([]),N=Object(i.a)(A,2),w=N[0],I=N[1],E=Object(s.useState)(!1),P=Object(i.a)(E,2),D=P[0],F=P[1],H=Object(s.useState)(!1),V=Object(i.a)(H,2),B=V[0],q=V[1],X=Object(s.useState)(""),U=Object(i.a)(X,2),J=U[0],W=U[1],Y=function(){var e=Object(c.a)(j.a.mark((function e(){var t,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),t="".concat(Q,"/api/history/history/all"),J.length>0&&(t="".concat(Q,"/api/history/").concat(J,"/history")),e.next=6,fetch(t,{method:"GET",headers:{"content-type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(v.GetCookies("token"))}});case 6:return n=e.sent,g.destroy(n.status),e.next=10,n.json();case 10:return s=e.sent,e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){""==v.GetCookies("base")&&(v.SetCookie("base","https://localhost:44391",2),v.SetCookie("checkBase","flase",2),v.DeleteCookie("auth"),v.DeleteCookie("token")),g.Auth()&&Y().then((function(e){null!=e.sendOBJ&&(a(e.sendOBJ.history),q(!1),console.log(B))}))}),[D,J]),Object(k.jsx)(z.Provider,{value:{companies:l},children:Object(k.jsx)("div",{className:"".concat(d.a.App),children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(T,{}),Object(k.jsx)(m.a,{children:Object(k.jsxs)(S.d,{children:[Object(k.jsx)(S.b,{path:"/home",exact:!0,children:Object(k.jsx)(G,{vatArray:y,setVatArray:C,submit:function(e){e.preventDefault(),p(y),C([])},companyVAT:h,companyInfo:w,setCompanyInfo:I,userSessionHistoryCompanies:n})}),Object(k.jsx)(S.b,{path:"/contact",exact:!0,children:Object(k.jsx)(L,{userSessionHistoryCompanies:n})}),Object(k.jsx)(S.b,{path:"/UserHistory",exact:!0,children:Object(k.jsx)(M,{userSessionHistoryCompanies:n,setHistoryCompanies:a,setSearch:function(e){W(e)}})}),Object(k.jsx)(S.b,{path:"/Login",exact:!0,children:Object(k.jsx)(R,{setAuth:F,loggedin:D})}),Object(k.jsx)(S.b,{path:"/register",exact:!0,children:Object(k.jsx)(K,{})}),Object(k.jsx)(S.b,{exact:!0,path:"/",children:Object(k.jsx)(S.a,{to:"/home"})})]})})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),o(e),r(e)}))};n(73);r.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(Z,{})}),document.getElementById("root")),_()}},[[74,1,2]]]);
//# sourceMappingURL=main.2ce10fce.chunk.js.map