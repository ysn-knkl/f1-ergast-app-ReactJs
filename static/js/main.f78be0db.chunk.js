(this["webpackJsonpergast-project"]=this["webpackJsonpergast-project"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(9),i=c.n(s),a=(c(35),c(36),c(64)),j=(c(17),c(16)),d=c.n(j),o=c(26),l=c(8),h=c(63),b=c(11),u=c.n(b),O=c(1),x=function(e){var t=e.racer,c=e.championID;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("tr",{className:"tableId",style:c===t.Results[0].Driver.driverId?{backgroundColor:"#20c997"}:null,children:[Object(O.jsx)("td",{children:t.Circuit.circuitName}),Object(O.jsx)("td",{children:"".concat(t.Results[0].Driver.givenName," ").concat(t.Results[0].Driver.familyName)}),Object(O.jsx)("td",{children:t.Results[0].Constructor.name}),Object(O.jsx)("td",{children:t.Results[0].laps}),Object(O.jsx)("td",{children:t.Results[0].grid}),Object(O.jsx)("td",{children:t.Results[0].Time.time}),Object(O.jsx)("td",{children:t.Results[0].points})]})})},f=c(66),m=function(e){var t=e.setYear,c=e.championID,r=e.closeResult,s=Object(n.useState)([]),i=Object(l.a)(s,2),a=i[0],j=i[1];return Object(n.useEffect)((function(){u()({method:"get",url:"http://ergast.com/api/f1/".concat(t,"/results/1.json")}).then((function(e){j(e.data.MRData.RaceTable.Races)}))}),[]),Object(O.jsx)("div",{children:Object(O.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,className:"border border-3",children:[Object(O.jsxs)("thead",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsxs)("th",{colSpan:"6",className:"hover-cursor",onClick:function(){return r()},children:["Season:",t," Race Results"]}),Object(O.jsx)("th",{colSpan:"1",className:"hover-cursor",onClick:function(){return r()},children:Object(O.jsx)(f.a,{})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Circuit Name"}),Object(O.jsx)("th",{children:"Winner"}),Object(O.jsx)("th",{children:"Constructor"}),Object(O.jsx)("th",{children:"Laps"}),Object(O.jsx)("th",{children:"Grid"}),Object(O.jsx)("th",{children:"Time"}),Object(O.jsx)("th",{children:"Points"})]})]}),Object(O.jsx)("tbody",{children:a.map((function(e,t){return Object(O.jsx)(x,{racer:e,championID:c},t)}))})]})})},p=c(67),v={component:{backgroundColor:"#e5e5e5"}},g=function(e){var t=e.user,c=e.closeHandle,r=e.clickIndex,s=e.index,i=Object(n.useState)(r===s),a=Object(l.a)(i,2),j=a[0],d=a[1],o=Object(n.useState)(null),b=Object(l.a)(o,2),u=b[0],x=b[1],f=Object(n.useState)(""),g=Object(l.a)(f,2),S=g[0],D=g[1];return Object(n.useEffect)((function(){s!==r&&d(!1)}),[r]),Object(O.jsx)("div",{style:v.component,children:j?Object(O.jsx)(m,{setYear:u,championID:S,closeResult:function(){return d(!1)}}):Object(O.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,className:"border border-1 border-dark hover-cursor",onClick:function(){return e=t.season,n=t.DriverStandings[0].Driver.driverId,d(!0),x(e),D(n),void c(s);var e,n},children:[Object(O.jsxs)("thead",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsxs)("th",{colSpan:"4","data-testid":"champ-info",children:["Season:",t.season," Champion"]}),Object(O.jsx)("th",{colSpan:"1",children:Object(O.jsx)(p.a,{})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Driver"}),Object(O.jsx)("th",{children:"Constructor"}),Object(O.jsx)("th",{children:"Points"}),Object(O.jsx)("th",{children:"Round"}),Object(O.jsx)("th",{children:"Wins"})]})]}),Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"".concat(t.DriverStandings[0].Driver.givenName," ").concat(t.DriverStandings[0].Driver.familyName)}),Object(O.jsx)("td",{children:t.DriverStandings[0].Constructors[0].name}),Object(O.jsx)("td",{children:t.DriverStandings[0].points}),Object(O.jsx)("td",{children:t.round}),Object(O.jsx)("td",{children:t.DriverStandings[0].wins})]})})]})})},S=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),i=Object(l.a)(s,2),a=i[0],j=i[1];Object(n.useEffect)((function(){c.length<1&&h()}),[]);var h=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()({method:"get",url:"https://ergast.com/api/f1/driverstandings/1.json?limit=60&offset=55"}).then((function(e){r(e.data.MRData.StandingsTable.StandingsLists)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"p-3 row",children:c.map((function(e,t){return Object(O.jsx)(g,{user:e,clickIndex:a,index:t,closeHandle:function(e){return j(e)}},t)}))})},D=c(65),R=c.p+"static/media/f1-logo.bf0bfd54.png",C=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(D.a,{bg:"dark",variant:"dark",expand:"true",children:Object(O.jsx)(a.a,{children:Object(O.jsx)(D.a.Brand,{href:"#home",children:Object(O.jsx)("img",{alt:"",src:R,width:"40",height:"40",className:"d-inline-block align-top"})})})})})};var k=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(C,{}),Object(O.jsx)(a.a,{children:Object(O.jsx)(S,{})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),N()}},[[60,1,2]]]);
//# sourceMappingURL=main.f78be0db.chunk.js.map