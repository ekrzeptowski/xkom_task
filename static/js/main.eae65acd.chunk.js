(this.webpackJsonpxkom_task=this.webpackJsonpxkom_task||[]).push([[0],{14:function(e,t,c){e.exports={space:"Seat_space__3RthE",seat:"Seat_seat__L6rL3",reserved:"Seat_reserved__3CsKd",selected:"Seat_selected__2HjUd",legend:"Seat_legend__2z_u-"}},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(17),r=c.n(s),i=c(30),o=c(6),l=c(12),d=c(46),j=c(48),u=c(28),b=c(49),m=c(7),h=c(13),O=c(20),f=Object(O.b)({name:"reservation",initialState:{selected:[],seatsNumber:1,seatsTogether:!1},reducers:{saveSettings:function(e,t){e.selected=[],e.seatsNumber=t.payload.seatsNumber,e.seatsTogether=t.payload.seatsTogether},addSelected:function(e,t){e.selected=[].concat(Object(h.a)(e.selected),[t.payload])},removeSelected:function(e,t){e.selected=e.selected.filter((function(e){return e.id!==t.payload.id}))}}}),x=f.actions,v=x.saveSettings,p=x.addSelected,g=x.removeSelected,y=function(e){return e.reservation},N=f.reducer,w=c(2);function k(){var e=Object(m.b)(),t=Object(o.f)(),c=Object(m.c)(y),n=Object(a.useState)(c.seatsNumber),s=Object(l.a)(n,2),r=s[0],i=s[1],h=Object(a.useState)(c.seatsTogether),O=Object(l.a)(h,2),f=O[0],x=O[1];return Object(w.jsx)(d.a,{className:"d-flex min-vh-100 justify-content-center align-items-center",children:Object(w.jsxs)(j.a,{onSubmit:function(c){c.preventDefault(),r&&(e(v({seatsNumber:r,seatsTogether:f})),t.push("/reservation"))},children:[Object(w.jsxs)(j.a.Group,{as:j.a.Row,controlId:"seatsNumber",children:[Object(w.jsx)(j.a.Label,{column:!0,children:"Liczba miejsc:"}),Object(w.jsx)(u.a,{children:Object(w.jsx)(j.a.Control,{value:r,onChange:function(e){return i(e.target.value)},required:!0,type:"number",min:"1"})})]}),Object(w.jsx)(j.a.Check,{custom:!0,name:"isNextSeat",className:"mb-3",id:"isNextSeat",checked:f,onChange:function(e){return x(e.target.checked)},label:"Czy miejsca maj\u0105 by\u0107 obok siebie?"}),Object(w.jsx)(b.a,{block:!0,type:"submit",variant:"outline-primary",children:"Wybierz miejsca"})]})})}var S=c(29),_=c.n(S),z=c(47);var M=c(14),C=c.n(M),T=function(e,t){return e.selected.some((function(e){var c,a,n,s;return(null===(c=t.cords)||void 0===c?void 0:c.x)===(null===(a=e.cords)||void 0===a?void 0:a.x)&&(null===(n=t.cords)||void 0===n?void 0:n.y)===(null===(s=e.cords)||void 0===s?void 0:s.y)}))},E=function(e){var t=e.seat,c=e.selected,n=e.onClick,s=Object(m.b)(),r=Object(m.c)(y),i=Object(a.useState)(t&&T(r,t)),o=Object(l.a)(i,2),d=o[0],j=o[1];Object(a.useEffect)((function(){j(t&&T(r,t))}),[r,t]);var u=function(){n(),d?(j(!1),s(g(t))):r.selected.length<r.seatsNumber?(j(!0),s(p(t))):(s(g(r.selected[0])),s(p(t)))};return Object(w.jsx)("div",{className:C.a.space,children:t&&Object(w.jsx)("div",{className:"".concat(C.a.seat," ").concat(t.reserved?C.a.reserved:""," ").concat(c||d?C.a.selected:""," ").concat(t.id?"":C.a.legend),onClick:function(){return!t.reserved&&t.id&&u()}})})};function I(){var e=Object(o.f)(),t=Object(m.b)(),c=Object(m.c)(y),n=Object(a.useState)(!1),s=Object(l.a)(n,2),r=s[0],i=s[1],j=_()("/xkom_task/seats.json"),O=j.isLoading,f=j.data,x=(null===f||void 0===f?void 0:f.seats)||f,v=x&&Math.max.apply(Math,Object(h.a)(x.map((function(e){return e.cords.x})))),g=x&&Math.max.apply(Math,Object(h.a)(x.map((function(e){return e.cords.y})))),N=x&&Object(h.a)(Array(v+1)).map((function(){return Object(h.a)(Array(g+1)).map((function(){return null}))}));x&&f.seats.forEach((function(e){N[e.cords.x][e.cords.y]=e}));var k=Object(a.useMemo)((function(){return function(e,t,c){if(e){var a=[];if(e.forEach((function(e){e.forEach((function(n,s){if(n)if(c){for(var r=[],i=0;i<t.seatsNumber;i++){var o,l;(null===(o=e[s+i])||void 0===o?void 0:o.id)&&!(null===(l=e[s+i])||void 0===l?void 0:l.reserved)?r.push(e[s+i]):r=[]}r.length===parseInt(t.seatsNumber,10)&&a.push(r)}else a.push(n)}))})),c){var n=Math.floor(Math.random()*a.length);return a[n]}return a.sort((function(){return Math.random()-Math.random()})).slice(0,parseInt(t.seatsNumber,10))}}(N,c,c.seatsTogether)}),[N,c]);Object(a.useEffect)((function(){0===c.selected.length&&!r&&(null===k||void 0===k?void 0:k.length)>0&&k.forEach((function(e){return t(p(e))}))}),[t,k,c.selected.length,r]);return O?Object(w.jsx)(d.a,{className:"d-flex min-vh-100 justify-content-center align-items-center",children:Object(w.jsx)("p",{children:"Prosz\u0119 czeka\u0107. Trwa \u0142adowanie danych."})}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(z.a,{className:"fit-content",children:[N&&N.map((function(e,t){return Object(w.jsx)(z.a,{noGutters:!0,className:"flex-nowrap",children:e.map((function(e,c){return Object(w.jsx)(E,{seat:e,onClick:function(){return i(!0)}},"".concat(c,", ").concat(t))}))},t)})),Object(w.jsxs)(z.a,{noGutters:!0,className:"mt-2 align-items-center w-100",children:[Object(w.jsxs)(u.a,{sm:"auto",className:"d-flex flex-grow-1",children:[Object(w.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(w.jsx)(E,{seat:{}}),Object(w.jsx)("span",{children:"Miejsca dost\u0119pne"})]}),Object(w.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(w.jsx)(E,{seat:{reserved:!0}}),Object(w.jsx)("span",{children:"Miejsca zarezerwowane"})]}),Object(w.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(w.jsx)(E,{seat:{},selected:!0}),Object(w.jsx)("span",{children:"Tw\xf3j wyb\xf3r"})]})]}),Object(w.jsx)(u.a,{children:Object(w.jsx)(b.a,{as:"input",type:"button",value:"Rezerwuj",variant:"outline-primary",onClick:function(){c.selected.length===parseInt(c.seatsNumber,10)&&e.push("/summary")}})})]})]})})}function L(){var e=Object(m.c)(y);return Object(w.jsxs)(d.a,{children:[Object(w.jsx)("h1",{className:"h3 font-weight-bold",children:"Twoja rezerwacja przebieg\u0142a pomy\u015blnie!"}),Object(w.jsx)("br",{}),Object(w.jsx)("h2",{className:"h4",children:"Wybra\u0142e\u015b miejsca:"}),Object(w.jsx)("ul",{className:"text-monospace list-dash pl-0",children:e.selected.map((function(e){return Object(w.jsxs)("li",{children:["rz\u0105d x",e.cords.x,", miejsce y",e.cords.y," (id",e.id,")"]},e.id)}))}),Object(w.jsx)("p",{className:"font-weight-bold",children:"Dzi\u0119kujemy! W razie problem\xf3w prosimy o kontakt z dzia\u0142em administracji."})]})}c(44);var W=function(){return Object(w.jsx)(i.a,{children:Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{path:"/reservation",children:Object(w.jsx)(I,{})}),Object(w.jsx)(o.a,{path:"/summary",children:Object(w.jsx)(L,{})}),Object(w.jsx)(o.a,{path:"/",children:Object(w.jsx)(k,{})})]})})},G=Object(O.a)({reducer:{reservation:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(m.a,{store:G,children:Object(w.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.eae65acd.chunk.js.map