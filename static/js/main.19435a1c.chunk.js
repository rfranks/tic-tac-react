(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],{44:function(e,t,a){e.exports=a(59)},49:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),l=(a(49),a(101)),o=a(60),s=a(90),u=a(100),m=a(88),h=Object(m.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6),textAlign:"center"},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",textAlign:"left"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},paper:{padding:e.spacing(2),margin:e.spacing(4),display:"flex",overflow:"auto",flexDirection:"column"},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),p=a(31),g=a(11),d=a(12),f=a(27),y=a(14),E=a(13),v=a(102),w=a(91),b=a(99),x=a(92),O=a(94),j=a(98),k=a(97),S=a(93),N=a(95),q=a(96),C=a(37),I=a(38),F=a(32),T=a(33),W=(a(53),function(e){var t=e.data,a=e.title,c=e.x,i=e.y,l=Object(n.useRef)(null),o=80,s=60,u=80,m=60,h=500-m-s,p=300-o-u,g=["#3f51b5","#61dafb","#b33535","#283250"];return Object(n.useEffect)((function(){if(t&&l.current){var e=Object(C.a)(l.current),n=Object(I.a)(t,(function(e){return e[c]})),r=Object(F.b)().domain([0,n]).range([0,h]),s=Object(F.a)().domain(t.map((function(e){return e[i]}))).range([0,p]).paddingInner(.25);e=e.append("g").attr("transform","translate(".concat(m,", ").concat(o,")")),a&&e.append("g").attr("class","bar-header").attr("transform","translate(0, ".concat(-o/2,")")).append("text").append("tspan").text(a),e.selectAll(".bar").data(t).enter().append("rect").attr("class","bar").attr("y",(function(e){return s(e[i])})).attr("width",(function(e){return r(e[c])})).attr("height",s.bandwidth()).style("fill",(function(e,t){return g[t%4]}));var d=Object(T.a)(r);e.append("g").attr("class","x axis").attr("transform","translate(0,".concat(p+u/3,")")).call(d);var f=Object(T.b)(s).tickSize(0);e.append("g").attr("class","y axis").attr("transform","translate(".concat(-m/3,",0)")).call(f)}}),[t]),r.a.createElement("svg",{className:"bar-chart-container",width:h+m+s,height:p+o+u,role:"img",ref:l})}),_=(a(54),function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.winning,a=e.player,n=["square",t?"square--winner":""].join(" ");return r.a.createElement("button",{className:n,onClick:this.props.onClick},a)}}]),a}(r.a.Component)),B=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"renderSquare",value:function(e){var t=this,a=this.props.squares[e],n=a.player,c=a.winning;return r.a.createElement(_,{player:n,winning:c,onClick:function(a){t.props.onClick(e),0===a.target.innerText.trim().length&&function(){var e=a.target.classList;e.remove("flipInY"),setTimeout((function(){e.add("flipInY")}),0)}()}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"tic-tac-board"},r.a.createElement("div",{className:"tic-tac-board__row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"tic-tac-board__row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"tic-tac-board__row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.a.Component),A=(a(55),[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]),M=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).goToMove=n.goToMove.bind(Object(f.a)(n)),n.state=n.newGame(),n}return Object(d.a)(a,[{key:"calculateWinner",value:function(e){for(var t=0;t<A.length;t++){var a=Object(p.a)(A[t],3),n=a[0],r=a[1],c=a[2];if(e[n].player&&e[n].player===e[r].player&&e[n].player===e[c].player)return e[n].winning=e[r].winning=e[c].winning=!0,e[n].player}return 9===this.currentStep()?"-":null}},{key:"currentGame",value:function(){var e=this.state.wins;return e.x+e.o+e.scratch+1}},{key:"currentPlayer",value:function(){return this.currentStep()%2===0?"X":"O"}},{key:"currentStep",value:function(){return this.state.history.length-1}},{key:"handleClick",value:function(e){var t=this.state,a=t.history,n=t.wins,r=a[this.currentStep()].squares,c=this.calculateWinner(r);if(!c&&!r[e].player){var i=new Array(9).fill("");i.forEach((function(e,t){var a=r[t],n=a.player,c=a.winning;i[t]={player:n,winning:c}})),i[e].player=this.currentPlayer(),!(c=this.calculateWinner(i))&&8===this.currentStep()&&(c="-"),c?"-"!==c?Audio.play("/tic-tac-react/sounds/NFF-level-up.wav"):Audio.play("/tic-tac-react/sounds/NFF-gameover.wav"):Audio.play("/tic-tac-react/sounds/NFF-ping.wav"),this.setState({history:a.concat([{squares:i}]),wins:{x:"X"===c?n.x+1:n.x,o:"O"===c?n.o+1:n.o,scratch:"-"===c?n.scratch+1:n.scratch}})}}},{key:"newGame",value:function(){var e={history:[{squares:new Array(9).fill("")}],wins:{x:this.state?this.state.wins.x:0,o:this.state?this.state.wins.o:0,scratch:this.state?this.state.wins.scratch:0}};return e.history.forEach((function(e){for(var t=0;t<9;t++)e.squares[t]={player:null,winning:!1}})),Audio.play("/tic-tac-react/sounds/NFF-new-game.wav"),e}},{key:"goToMove",value:function(e){this.setState({history:this.state.history.slice(0,e+1),wins:this.state.wins})}},{key:"render",value:function(){var e=this;if(!this.state)return null;var t=this.state.history,a=t[this.currentStep()],n=[{player:"X",wins:this.state.wins.x},{player:"O",wins:this.state.wins.o},{player:"-",wins:this.state.wins.scratch}],c=this.state.wins,i=this.calculateWinner(a.squares),l=this.props.classes,u=i?"-"===i?"It's a scratch!":"Winner: "+i:"It's "+this.currentPlayer()+"'s turn";return r.a.createElement("div",{className:l.heroButtons},r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){e.setState(e.newGame())}},"New game")),r.a.createElement(w.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(x.a,null,r.a.createElement(o.a,{variant:"h5",align:"center",color:"textSecondary"},u),r.a.createElement(B,{className:"tic-tac-game",squares:a.squares,onClick:function(t){return e.handleClick(t)}}))),r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(x.a,null,r.a.createElement(G,{history:t,goToMove:this.goToMove,winner:i}))),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(D,{wins:n,records:c}))))}}]),a}(r.a.Component),D=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.wins,a=e.records,n=a.o+a.x+a.scratch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(x.a,null,r.a.createElement(o.a,{variant:"h4",color:"primary",gutterBottom:!0},"Stats"),r.a.createElement(S.a,null,r.a.createElement(O.a,{size:"small"},r.a.createElement(N.a,null,r.a.createElement(q.a,null,r.a.createElement(k.a,null,"Player"),r.a.createElement(k.a,{align:"right"},"Wins"),r.a.createElement(k.a,{align:"right"},"Losses"),r.a.createElement(k.a,{align:"right"},"Scratch"),r.a.createElement(k.a,{align:"right"},"%"))),r.a.createElement(j.a,null,r.a.createElement(q.a,{key:"x"},r.a.createElement(k.a,{component:"th",scope:"row"},"X"),r.a.createElement(k.a,{align:"right"},a.x),r.a.createElement(k.a,{align:"right"},a.o),r.a.createElement(k.a,{align:"right"},a.scratch),r.a.createElement(k.a,{align:"right"},n?a.x/n:0)),r.a.createElement(q.a,{key:"o"},r.a.createElement(k.a,{component:"th",scope:"row"},"O"),r.a.createElement(k.a,{align:"right"},a.o),r.a.createElement(k.a,{align:"right"},a.x),r.a.createElement(k.a,{align:"right"},a.scratch),r.a.createElement(k.a,{align:"right"},n?a.o/n:0))))))),r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(x.a,null,r.a.createElement(o.a,{variant:"h4",color:"primary",gutterBottom:!0},"Games played"),r.a.createElement(o.a,{variant:"h1",color:"textSecondary"},n))),r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(x.a,null,r.a.createElement(o.a,{variant:"h4",color:"primary",gutterBottom:!0},"Scratches"),r.a.createElement(o.a,{variant:"h1",color:"textSecondary"},a.scratch))),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(x.a,null,r.a.createElement(o.a,{variant:"h4",color:"primary",gutterBottom:!0},"Wins by player"),r.a.createElement(W,{data:t,title:"",x:"wins",y:"player"})))))}}]),a}(r.a.Component),G=function(e){Object(y.a)(a,e);var t=Object(E.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.goToMove,a=e.history,n=e.winner,c=a.map((function(e,c){var i=c===a.length-1,l=i&&n?"-"===n?"It's a scratch!":n+" wins!":c?c%2===0?"O":"X":"";return r.a.createElement(r.a.Fragment,{key:"tic-tac-game__move"+c},c?r.a.createElement(r.a.Fragment,null,i&&n?"":r.a.createElement(b.a,{color:"primary"},"redo"),r.a.createElement("span",null,l)):"",i&&n?"":r.a.createElement(v.a,{variant:c?"outlined":"contained",className:"tic-tac-game__move fadeIn",size:"small",color:"primary",onClick:function(){return t(c)}},c||r.a.createElement(b.a,null,"home")))}));return r.a.createElement("div",{className:"tic-tac-game__moves"},r.a.createElement(o.a,{variant:"h4",color:"primary",gutterBottom:!0},"History"),c)}}]),a}(r.a.Component),P=M;a(58);function X(){return r.a.createElement(o.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(u.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}function Y(){var e=h();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroContent},r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(o.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},r.a.createElement("div",{className:"fadeInDown"},"Welcome to"),r.a.createElement("span",{className:"fadeInDown delay--short"},"Tic"),r.a.createElement("span",{className:"fadeInDown delay"},"-Tac-"),r.a.createElement(u.a,{href:"https://reactjs.org/"},r.a.createElement("span",{className:"fadeInDown delay--long react-logo--large flipInY"}))),r.a.createElement(P,{classes:"{classes}"})))),r.a.createElement("footer",{className:e.footer},r.a.createElement(o.a,{variant:"subtitle1",align:"center",color:"textSecondary"},"Powered by ",r.a.createElement(u.a,{href:"https://reactjs.org/"},r.a.createElement("div",{className:"react-logo--small"}))),r.a.createElement(X,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.19435a1c.chunk.js.map