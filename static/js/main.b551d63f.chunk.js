(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],{41:function(e,a,t){e.exports=t(57)},46:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),o=(t(46),t(99)),i=t(58),s=t(88),m=t(98),u=t(86),p=Object(u.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6),textAlign:"center"},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",textAlign:"left"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},paper:{padding:e.spacing(2),margin:e.spacing(4),display:"flex",overflow:"auto",flexDirection:"column"},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),g=t(29),d=t(22),f=t(100),E=t(89),h=t(97),v=t(90),y=t(92),w=t(96),b=t(95),x=t(91),k=t(93),N=t(94),j=t(33),O=t(34),I=t(27),S=t(28),C=(t(50),function(e){var a=e.data,t=e.title,c=e.xLabel,l=e.yLabel,o=Object(n.useRef)(null),i=80,s=60,m=80,u=60,p=500-u-s,g=300-i-m,d=["#3f51b5","#61dafb","#b33535","#283250"];return Object(n.useEffect)((function(){if(a&&o.current){var e=Object(j.a)(o.current),n=Object(O.a)(a,(function(e){return e[c]})),r=Object(I.b)().domain([0,n]).range([0,p]),s=Object(I.a)().domain(a.map((function(e){return e[l]}))).range([0,g]).paddingInner(.25);e=e.append("g").attr("transform","translate(".concat(u,", ").concat(i,")")),t&&e.append("g").attr("class","bar-header").attr("transform","translate(0, ".concat(-i/2,")")).append("text").append("tspan").text(t),e.selectAll(".bar").data(a).enter().append("rect").attr("class","bar").attr("y",(function(e){return s(e[l])})).attr("width",(function(e){return r(e[c])})).attr("height",s.bandwidth()).style("fill",(function(e,a){return d[a%4]}));var f=Object(S.a)(r);e.append("g").attr("class","x axis").attr("transform","translate(0,".concat(g+m/3,")")).call(f);var E=Object(S.b)(s).tickSize(0);e.append("g").attr("class","y axis").attr("transform","translate(".concat(-u/3,",0)")).call(E)}}),[a,d,g,m,u,i,t,p,c,l]),r.a.createElement("svg",{className:"bar-chart-container",width:p+u+s,height:g+i+m,role:"img",ref:o})});C.defaultProps={title:"",xLabel:"",yLabel:""};var q=C,B=(t(51),function(e){var a=e.onSquareClick,t=e.player,n=e.position,c=e.winning,l=["square",void 0!==c&&c?"square--winner":""].join(" ");return r.a.createElement("button",{type:"button",className:l,onClick:function(e){if(void 0!==t&&null!==t)e&&e.preventDefault();else if(a(n),e){var r=e.target.classList;r.remove("flipInY"),setTimeout((function(){r.add("flipInY")}),0)}}},t)});B.defaultProps={player:null};var F=B,A=(t(52),function(e){var a=e.squares,t=e.onSquareClick,n=!1,c=function(e){n||t(e)};return r.a.createElement("div",{className:"tic-tac-board"},[[0,1,2],[3,4,5],[6,7,8]].map((function(e,t){var l=t;return r.a.createElement("div",{key:l,className:"tic-tac-board__row"},e.map((function(e){var t=a[e],l=t.player,o=t.winning;return n=n||o,r.a.createElement(F,{key:e,position:e,player:l,winning:o,onSquareClick:c})})))})))}),L=(t(53),function(e){var a=null;return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(t){var n=Object(d.a)(t,3),r=n[0],c=n[1],l=n[2];e[r].player&&e[r].player===e[c].player&&e[r].player===e[l].player&&(e[r].winning=!0,e[c].winning=!0,e[l].winning=!0,a=e[r].player)})),a}),W=function(e){return 0===e.length?0:e.length-1},D=function(e){return W(e)%2===0?"X":"O"},T=function(e){return e[W(e)].squares},_=function(e,a){return W(a)===(e?8:9)&&null===L(e||T(a))};function P(e){var a=e.wins,t=[{player:"X",wins:a.x},{player:"O",wins:a.o},{player:"-",wins:a.scratch}],n=a.o+a.x+a.scratch;return r.a.createElement(E.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(v.a,null,r.a.createElement(i.a,{variant:"h4",color:"primary",gutterBottom:!0},"Stats"),r.a.createElement(x.a,null,r.a.createElement(y.a,{size:"small"},r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(b.a,null,"Player"),r.a.createElement(b.a,{align:"right"},"Wins"),r.a.createElement(b.a,{align:"right"},"Losses"),r.a.createElement(b.a,{align:"right"},"Scratch"),r.a.createElement(b.a,{align:"right"},"%"))),r.a.createElement(w.a,null,r.a.createElement(N.a,{key:"x"},r.a.createElement(b.a,{component:"th",scope:"row"},"X"),r.a.createElement(b.a,{align:"right"},a.x),r.a.createElement(b.a,{align:"right"},a.o),r.a.createElement(b.a,{align:"right"},a.scratch),r.a.createElement(b.a,{align:"right"},n?a.x/n:0)),r.a.createElement(N.a,{key:"o"},r.a.createElement(b.a,{component:"th",scope:"row"},"O"),r.a.createElement(b.a,{align:"right"},a.o),r.a.createElement(b.a,{align:"right"},a.x),r.a.createElement(b.a,{align:"right"},a.scratch),r.a.createElement(b.a,{align:"right"},n?a.o/n:0))))))),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(v.a,null,r.a.createElement(i.a,{variant:"h4",color:"primary",gutterBottom:!0},"Games played"),r.a.createElement(i.a,{variant:"h1",color:"textSecondary"},n))),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(v.a,null,r.a.createElement(i.a,{variant:"h4",color:"primary",gutterBottom:!0},"Scratches"),r.a.createElement(i.a,{variant:"h1",color:"textSecondary"},a.scratch))),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(v.a,null,r.a.createElement(i.a,{variant:"h4",color:"primary",gutterBottom:!0},"Wins by player"),r.a.createElement(q,{data:t,title:"",xLabel:"wins",yLabel:"player"}))))}function G(e){var a=e.onGoToMove,t=e.moves,n=e.winner;if(void 0===t||null===t)return null;var c="-"===n?"It's a scratch!":"".concat(n," wins!"),l=t.map((function(e,l){var o=l,i=l===t.length-1,s=l%2===0?"O":"X",m=i&&n?c:r.a.createElement(f.a,{variant:l?"outlined":"contained",className:"tic-tac-game__move fadeIn",size:"small",color:"primary",onClick:function(){return a(l)}},l?s:r.a.createElement(h.a,null,"home")),u=i?"":r.a.createElement(h.a,{color:"primary"},"redo");return r.a.createElement(r.a.Fragment,{key:"tic-tac-game__move".concat(o)},m,u)}));return r.a.createElement("div",{className:"tic-tac-game__moves"},r.a.createElement(i.a,{variant:"h4",color:"primary",gutterBottom:!0},"History"),l)}G.defaultProps={winner:null};var Y=function(e){var a=e.classes,t=Object(n.useState)([]),c=Object(d.a)(t,2),l=c[0],o=c[1],m=Object(n.useRef)({x:0,o:0,scratch:0}),u=function(){for(var e={squares:[]},a=0;a<9;a+=1)e.squares.push({player:null,winning:!1});l.length>0&&Audio.play&&Audio.play("/tic-tac-react/sounds/NFF-new-game.wav"),o([e])};if(0===l.length)return u(),null;var p=L(T(l)),h=_(null,l)?"It's a scratch!":"It's ".concat(D(l),"'s turn"),y=null!==p?"Winner: ".concat(p):h;return r.a.createElement("div",{className:a.heroButtons},r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:u},"New game")),r.a.createElement(E.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(v.a,null,r.a.createElement(i.a,{variant:"h5",align:"center",color:"textSecondary"},y),r.a.createElement(A,{className:"tic-tac-game",squares:T(l),onSquareClick:function(e){var a=T(l),t=new Array(9).fill("");t.forEach((function(e,n){var r=a[n],c=r.player,l=r.winning;t[n]={player:c,winning:l}})),t[e].player=D(l);var n=L(t);_(t,l)?(m.current.scratch+=1,m.current=Object(g.a)({},m.current)):null!==n&&(m.current[n.toLowerCase()]+=1,m.current=Object(g.a)({},m.current)),o(l.concat([{squares:t}])),Audio.play&&(n?Audio.play("/tic-tac-react/sounds/NFF-level-up.wav"):Audio.play(_(null,l)?"/tic-tac-react/sounds/NFF-gameover.wav":"/tic-tac-react/sounds/NFF-ping.wav"))}}))),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(v.a,null,r.a.createElement(G,{moves:l,onGoToMove:function(e){o(l.slice(0,e+1))},winner:p}))),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(P,{wins:m.current}))))};t(56);function M(){return r.a.createElement(i.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(m.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}function X(){var e=p()||{};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroContent},r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(i.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},r.a.createElement("div",{className:"fadeInDown"},"Welcome to"),r.a.createElement("span",{className:"fadeInDown delay--short"},"Tic"),r.a.createElement("span",{className:"fadeInDown delay"},"-Tac-"),r.a.createElement(m.a,{href:"https://reactjs.org/"},r.a.createElement("span",{className:"fadeInDown delay--long react-logo--large flipInY"}))),r.a.createElement(Y,{classes:"{classes}"})))),r.a.createElement("footer",{className:e.footer},r.a.createElement(i.a,{variant:"subtitle1",align:"center",color:"textSecondary"},"Powered by"," ",r.a.createElement(m.a,{href:"https://reactjs.org/"},r.a.createElement("div",{className:"react-logo--small"}))),r.a.createElement(M,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.b551d63f.chunk.js.map