(this.webpackJsonpcognitotest=this.webpackJsonpcognitotest||[]).push([[0],{23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),u=n(17),o=n.n(u),a=(n(23),n(6)),s=n.n(a),i=n(14),j=n(18),l=n(8),b=n(3),f=n(5),O=new f.d({UserPoolId:"eu-west-2_Cv2kBw6cS",ClientId:"41dj7de1t0qrns7mj8h1n57qfs"}),h=n(0),v=Object(c.createContext)(),d=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],u=n[1];Object(c.useEffect)((function(){o().then((function(e){u(!0)}))}),[]);var o=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var n=O.getCurrentUser();n?n.getSession(function(){var c=Object(l.a)(s.a.mark((function c(r,u){var o;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!r){c.next=4;break}t(),c.next=8;break;case 4:return c.next=6,new Promise((function(e,t){n.getUserAttributes((function(n,c){if(n)t(n);else{var r,u={},o=Object(j.a)(c);try{for(o.s();!(r=o.n()).done;){var a=r.value,s=a.Name,i=a.Value;u[s]=i}}catch(n){o.e(n)}finally{o.f()}e(u)}}))}));case 6:o=c.sent,e(Object(i.a)(Object(i.a)({user:n},u),o));case 8:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()):t()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,c){var r=new f.b({Username:t,Pool:O}),u=new f.a({Username:t,Password:n});r.authenticateUser(u,{onSuccess:function(t){console.log("onSuccess:",t),e(t)},onFailure:function(e){console.error("onFailure:",e),c(e)},newPasswordRequired:function(t){console.log("newPasswordRequired:",t),e(t)}})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsx)(v.Provider,{value:{authenticate:a,getSession:o,logout:function(){var e=O.getCurrentUser();e&&(e.signOut(),u(!1))},status:r,setStatus:u},children:e.children})};var g=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(""),o=Object(b.a)(u,2),a=o[0],s=o[1],i=Object(c.useState)(""),j=Object(b.a)(i,2),l=j[0],v=j[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.signUp(n,l,[new f.c({Name:"email",Value:a})],[],(function(e,t){e&&console.log(e),console.log(t)}))},children:[Object(h.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("input",{value:l,onChange:function(e){return v(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Signup"})]})})};var x=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(""),o=Object(b.a)(u,2),a=o[0],s=o[1],i=Object(c.useContext)(v),j=i.authenticate,l=i.setStatus;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(n,a).then((function(e){console.log("Logged in!",e),l(!0)})).catch((function(e){console.error("Failed to login!",e)}))},children:[Object(h.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Login"})]})})},p=function(){var e=Object(c.useContext)(v),t=e.logout,n=e.status;return Object(h.jsx)("div",{children:n?Object(h.jsxs)("div",{children:["You are logged in. ",Object(h.jsx)("button",{onClick:t,children:"Logout"})]}):"Please login below"})},m=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(""),o=Object(b.a)(u,2),a=o[0],s=o[1],i=Object(c.useContext)(v),j=i.getSession,l=i.authenticate;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j().then((function(e){var t=e.user;l(t.username,n).then((function(){t.changePassword(n,a,(function(e,t){e&&console.error(e),console.log(t)}))})).catch((function(e){return console.error(e)}))})).catch((function(e){console.error(e)}))},children:[Object(h.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Change password"})]})})},S=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(""),o=Object(b.a)(u,2),a=o[0],s=o[1],i=Object(c.useContext)(v),j=i.getSession,l=i.authenticate;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j().then((function(e){var t=e.user;l(t.username,a).then((function(){var e=[new f.c({Name:"email",Value:n})];t.updateAttributes(e,(function(e,t){e&&console.error(e),console.log(t)}))})).catch((function(e){return console.error(e)}))})).catch((function(e){console.error(e)}))},children:[Object(h.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Change email"})]})})},w=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(""),o=Object(b.a)(u,2),a=o[0],s=o[1],i=Object(c.useContext)(v),j=i.getSession,l=i.authenticate;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j().then((function(e){var t=e.user;l(t.username,a).then((function(){var e=[new f.c({Name:"username",Value:n})];t.updateAttributes(e,(function(e,t){e&&console.error(e),console.log(t)}))})).catch((function(e){return console.error(e)}))})).catch((function(e){console.error(e)}))},children:[Object(h.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Change username"})]})})},C=function(){var e=Object(c.useContext)(v).status;return Object(h.jsx)("div",{children:e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Settings"}),Object(h.jsx)(m,{}),Object(h.jsx)(S,{}),Object(h.jsx)(w,{})]})})},P=function(){var e=Object(c.useState)(1),t=Object(b.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(""),o=Object(b.a)(u,2),a=o[0],s=o[1],i=Object(c.useState)(""),j=Object(b.a)(i,2),l=j[0],v=j[1],d=Object(c.useState)(""),g=Object(b.a)(d,2),x=g[0],p=g[1],m=Object(c.useState)(""),S=Object(b.a)(m,2),w=S[0],C=S[1],P=function(){return new f.b({Username:a.toLowerCase(),Pool:O})};return Object(h.jsxs)("div",{children:[1===n&&Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P().forgotPassword({onSuccess:function(e){console.log("onSuccess:",e)},onFailure:function(e){console.log("onFailure:",e)},inputVerificationCode:function(e){console.log("Input code:",e),r(2)}})},children:[Object(h.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Send verification code"})]}),2===n&&Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x===w?P().confirmPassword(l,x,{onSuccess:function(e){console.log("onSuccess:",e)},onFailure:function(e){console.error("onFailure:",e)}}):console.error("Passwords are not the same")},children:[Object(h.jsx)("input",{value:l,onChange:function(e){return v(e.target.value)}}),Object(h.jsx)("input",{value:x,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("input",{value:w,onChange:function(e){return C(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Change password"})]})]})},y=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],u=Object(c.useContext)(v).getSession;Object(c.useEffect)((function(){u().then((function(e){r(e["custom:plan"])}))}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Update your plan:"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u().then((function(e){var t=e.user,c=[new f.c({Name:"custom:plan",Value:n})];t.updateAttributes(c,(function(e,t){e&&console.error(e),console.log(t)}))}))},children:[Object(h.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Change plan"})]})]})},k=function(){var e=Object(c.useState)(0),t=Object(b.a)(e,2),n=t[0],r=(t[1],function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://2w66akdpjh.execute-api.eu-west-2.amazonaws.com/dev/random-number?min=1&max=100",e.next=3,fetch("https://2w66akdpjh.execute-api.eu-west-2.amazonaws.com/dev/random-number?min=1&max=100",{method:"OPTIONS"}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["Random number: ",n]}),Object(h.jsx)("button",{onClick:r,children:"Fetch new number"})]})},F=function(){return Object(h.jsxs)(d,{children:[Object(h.jsx)(p,{}),Object(h.jsx)(g,{}),Object(h.jsx)(x,{}),Object(h.jsx)(P,{}),Object(h.jsx)(C,{}),Object(h.jsx)(y,{}),Object(h.jsx)(k,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,u=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),u(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),U()}},[[32,1,2]]]);
//# sourceMappingURL=main.1680af61.chunk.js.map