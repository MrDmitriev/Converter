(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{88:function(n,t,e){"use strict";e.r(t);var r,c,a,i,o,u,s,b,l,d,j,p,h=e(5),x=e(1),f=e.n(x),O=e(22),v=e.n(O),g=e(6),y=e(17),m=e(54),w=e(2),k=g.b.div(r||(r=Object(h.a)(["\n\tdisplay: flex;\n\tflex-direction: ",";\n\talign-items: ",";\n\tjustify-content: ",";\n\tmargin: ",";\n"])),(function(n){return n.direction||"row"}),(function(n){return n.align||"stretch"}),(function(n){return n.justify||"stretch"}),(function(n){return n.margin||"0"})),R=function(n){return Object(w.jsx)(k,Object(m.a)({},n))},T=g.b.thead(c||(c=Object(h.a)(["\n"]))),C=g.b.th(a||(a=Object(h.a)(["\n\tbackground: #d367a1;\n\tpadding: 20px;\n\ttext-align: left;\n\tborder-bottom: 0.1px dashed white;\n\tposition: sticky;\n  top: 0;\n"]))),z=function(n){var t=n.currencyTableHeaders,e=void 0===t?[]:t;return Object(w.jsx)(T,{children:Object(w.jsx)("tr",{children:e.map((function(n){return Object(w.jsx)(C,{children:n},n)}))})})},H=g.b.td(i||(i=Object(h.a)(["\npadding: 20px;\ntext-align: left;\nborder-bottom: 0.1px dashed white;\n"]))),E=function(n){var t=n.row;return Object(w.jsx)("tr",{children:t.map((function(n,t){return Object(w.jsx)(H,{children:n},t)}))})},M=function(n){var t=n.currencyTableRows,e=void 0===t?[]:t;return Object(w.jsx)("tbody",{children:e.map((function(n){return Object(w.jsx)(E,{row:n},n[3])}))})},S=g.b.div(o||(o=Object(h.a)(["\n\toverflow-y: auto;\n\toverflow-x: hidden;\n  height: 410px;\n"]))),A=g.b.table(u||(u=Object(h.a)(["\n\tborder-collapse: collapse;        \n\twidth: 100%;\n\n"]))),L=function(n){var t=n.currencyTableHeaders,e=n.currencyTableRows;return Object(w.jsx)(S,{children:Object(w.jsxs)(A,{children:[Object(w.jsx)(z,{currencyTableHeaders:t}),Object(w.jsx)(M,{currencyTableRows:e})]})})},N=e(27),Q=e(55),F=function(n){return"string"===typeof n?Number(n.replace(/,/,".")):n},I=g.b.form(s||(s=Object(h.a)(["\n\tpadding: 20px;\n"]))),J=g.b.label(b||(b=Object(h.a)(["\n\tpadding-right: 10px;\n\tfont-size: 25px;\n"]))),K=g.b.input(l||(l=Object(h.a)(["\n\ttext-align: center;\n\tmax-width: 200px;\n\tborder-radius: 5px;\n\tborder-width: 0.7px;\n\tmargin: 10px 20px;\n\topacity: 0.5;\n\tbackground-color: transparent;\n\ttext-align: center;\n\tfont-size: 40px;\n\tcolor: white;\n\t::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n\t}\n\t:focus-visible{\n\t\toutline: none;\n\t\topacity: 0.7;\n\t\tcolor: black;\n\t}\n"]))),P=g.b.select(d||(d=Object(h.a)(["\n\tfont-size: 25px;\n\tborder-radius: 5px;\n\tborder-color: transparent;\n\tbackground-color: transparent;\n\tvertical-align: super;\n\tmargin: 0 10px;\n\topacity: 0.5;\n\t:focus-visible{\n\t\toutline: none;\n\t\topacity: 0.7;\n\t\tcolor: black;\n\t}\n"]))),Z=function(n){var t=n.currencyRatesMap,e=void 0===t?{}:t,r=Object.keys(e),c=Object(x.useState)(100),a=Object(N.a)(c,2),i=a[0],o=a[1],u=Object(x.useState)(100),s=Object(N.a)(u,2),b=s[0],l=s[1],d=Object(x.useState)(r[0]),j=Object(N.a)(d,2),p=j[0],h=j[1],f=function(n){var t=e[p],r=F((n/t).toFixed(2));l(r)};return Object(x.useEffect)((function(){f(i)}),[p]),Object(w.jsxs)(I,{children:[Object(w.jsxs)(J,{children:[Object(w.jsx)(K,{type:"number",name:"converterInputValue",value:i,min:1,onChange:function(n){var t=F(n.target.value);n.target.value&&(o(t),f(t))}}),Object(w.jsx)(P,{disabled:!0,children:Object(w.jsx)("option",{value:"CZK",children:"CZK"})})]}),Object(w.jsx)("br",{}),Object(w.jsxs)(J,{children:[Object(w.jsx)(K,{onChange:function(n){var t=F(n.target.value);n.target.value&&(l(t),function(n){var t=e[p],r=F((n*t).toFixed(2));o(r)}(t))},type:"number",name:"converterOutputAmount",value:b,min:1}),Object(w.jsx)(P,{name:"currencyCodesList",onChange:function(n){h(n.target.value)},children:r.map((function(n){return Object(w.jsx)("option",{value:n,children:n},n)}))})]})]})},B=e(30),U=e.n(B),V=e(52),$=e(53),_=e.n($),q={api:{baseUrl:"/",currencyRatesEndpointTxt:"/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt",withCredentials:!0}},D=function(){var n=Object(V.a)(U.a.mark((function n(){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_.a.get(q.api.currencyRatesEndpointTxt);case 3:return t=n.sent,n.abrupt("return",null===t||void 0===t?void 0:t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log("An error occured, #api/getCurrencyRates:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),G=g.b.h1(j||(j=Object(h.a)(["\ncolor: white;\npadding-bottom: 50px;\n"]))),W=function(n){var t=n.children;return Object(w.jsx)(G,{children:t})},X=g.b.div(p||(p=Object(h.a)(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\tpadding: 2rem;\n\tbackground-image: linear-gradient(to right, #fc5c7d, #6a82fb);\n\tcolor: white;\n"])));var Y,nn=function(){var n=Object(y.useQuery)("currencyRates",D),t=n.isLoading,e=n.isError,r=n.data,c=n.error;if(t)return Object(w.jsx)("span",{children:"Loading..."});if(e)return Object(w.jsxs)("span",{children:["`Error: $",null===c||void 0===c?void 0:c.message,"`"]});var a=function(n){var t=n.split("\n"),e=Object(Q.a)(t),r=(e[0],e[1]),c=e.slice(2),a={},i=r.split("|"),o=c.filter((function(n){return!!n})).map((function(n){return n.split("|")}));return o.forEach((function(n){var t=+n[2],e=n[3],r=Number(n[4].replace(/,/,"."));a.hasOwnProperty(e)||(a[e]=r/t)})),{currencyTableHeaders:i,currencyTableRows:o,currencyRatesMap:a}}(r),i=a.currencyTableHeaders,o=void 0===i?[]:i,u=a.currencyTableRows,s=a.currencyRatesMap;return Object(w.jsxs)(X,{className:"App",children:[Object(w.jsx)(R,{justify:"center",children:Object(w.jsx)(W,{children:"Currency converter"})}),Object(w.jsxs)(R,{justify:"space-around",children:[Object(w.jsx)(L,{currencyTableHeaders:o,currencyTableRows:u}),Object(w.jsx)(Z,{currencyRatesMap:s})]})]})},tn=Object(g.a)(Y||(Y=Object(h.a)(["\n* {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\t\n\tfont-family: consolas;\n}\n\n::-webkit-scrollbar {\n\t\twidth: 8px;\n\t}\n\n\t::-webkit-scrollbar-track {\n  background: #f1f1f12e;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #ae7a857a;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #d367a1;\n}\n"]))),en=new y.QueryClient;v.a.render(Object(w.jsx)(f.a.StrictMode,{children:Object(w.jsxs)(y.QueryClientProvider,{client:en,children:[Object(w.jsx)(tn,{}),Object(w.jsx)(nn,{})]})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.37c600c1.chunk.js.map