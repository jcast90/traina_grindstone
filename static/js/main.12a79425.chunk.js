(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.834adf72.svg"},function(e,t,a){(function(t){var n=e.exports&&"undefined"!==typeof t?t:this||window;(n._gsQueue||(n._gsQueue=[])).push(function(){var e,t=n.document,a=t.defaultView?t.defaultView.getComputedStyle:function(){},c=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,s=-1!==((n.navigator||{}).userAgent||"").indexOf("Edge");function r(e,t,a,n,c,s){return a=(parseFloat(a||0)-parseFloat(e||0))*c,n=(parseFloat(n||0)-parseFloat(t||0))*s,Math.sqrt(a*a+n*n)}function i(e){return"string"!==typeof e&&e.nodeType||(e=n.TweenLite.selector(e)).length&&(e=e[0]),e}function l(e){if(!e)return 0;var t,a,n,s,l,o,h,p=(e=i(e)).tagName.toLowerCase(),f=1,u=1;"non-scaling-stroke"===e.getAttribute("vector-effect")&&(f=(u=e.getScreenCTM()).a,u=u.d);try{a=e.getBBox()}catch(d){}if(a&&(a.width||a.height)||"rect"!==p&&"circle"!==p&&"ellipse"!==p||(a={width:parseFloat(e.getAttribute("rect"===p?"width":"circle"===p?"r":"rx")),height:parseFloat(e.getAttribute("rect"===p?"height":"circle"===p?"r":"ry"))},"rect"!==p&&(a.width*=2,a.height*=2)),"path"===p)s=e.style.strokeDasharray,e.style.strokeDasharray="none",t=e.getTotalLength()||0,f!==u&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(f+u)/2,e.style.strokeDasharray=s;else if("rect"===p)t=2*a.width*f+2*a.height*u;else if("line"===p)t=r(a.x,a.y,a.x+a.width,a.y+a.height,f,u);else if("polyline"===p||"polygon"===p)for(n=e.getAttribute("points").match(c)||[],"polygon"===p&&n.push(n[0],n[1]),t=0,l=2;l<n.length;l+=2)t+=r(n[l-2],n[l-1],n[l],n[l+1],f,u)||0;else"circle"!==p&&"ellipse"!==p||(o=a.width/2*f,h=a.height/2*u,t=Math.PI*(3*(o+h)-Math.sqrt((3*o+h)*(o+3*h))));return t||0}function o(e,t){if(!e)return[0,0];e=i(e),t=t||l(e)+1;var n=a(e),c=n.strokeDasharray||"",s=parseFloat(n.strokeDashoffset),r=c.indexOf(",");return r<0&&(r=c.indexOf(" ")),(c=r<0?t:parseFloat(c.substr(0,r))||1e-5)>t&&(c=t),[Math.max(0,-s),Math.max(0,c-s)]}(e=n._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.1.5",global:!0,overwriteProps:["drawSVG"],init:function(e,t,n,c){if(!e.getBBox)return!1;var r,i,h,p,f=l(e)+1;return this._style=e.style,"function"===typeof t&&(t=t(c,e)),!0===t||"true"===t?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function(e,t,a){var n,c,s=e.indexOf(" ");return-1===s?(n=void 0!==a?a+"":e,c=e):(n=e.substr(0,s),c=e.substr(s+1)),(n=-1!==n.indexOf("%")?parseFloat(n)/100*t:parseFloat(n))>(c=-1!==c.indexOf("%")?parseFloat(c)/100*t:parseFloat(c))?[c,n]:[n,c]}(t,f,(r=o(e,f))[0]),this._length=f+10,0===r[0]&&0===i[0]?(h=Math.max(1e-5,i[1]-f),this._dash=f+h,this._offset=f-r[1]+h,this._addTween(this,"_offset",this._offset,f-i[1]+h,"drawSVG")):(this._dash=r[1]-r[0]||1e-6,this._offset=-r[0],this._addTween(this,"_dash",this._dash,i[1]-i[0]||1e-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-i[0],"drawSVG")),s&&"butt"!==(i=(p=a(e)).strokeLinecap)&&i!==p.strokeLinejoin&&(i=parseFloat(p.strokeMiterlimit),this._addTween(e.style,"strokeMiterlimit",i,i+1e-4,"strokeMiterlimit")),!0},set:function(e){this._firstPT&&(this._super.setRatio.call(this,e),this._style.strokeDashoffset=this._offset,this._style.strokeDasharray=1===e||0===e?this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._dash+"px,"+this._length+"px")}})).getLength=l,e.getPosition=o}),n._gsDefine&&n._gsQueue.pop()(),e.exports&&(a(0),e.exports=(n.GreenSockGlobals||n).DrawSVGPlugin)}).call(this,a(7))},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(10),r=a.n(s),i=(a(16),a(2)),l=a(3),o=a(5),h=a(4),p=a(6),f=a(8),u=(a(18),a(19),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={animationComplete:!1},a.completed=function(){a.props.handleComplete(!0)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){f.b.set(".svg-line",{visibility:"visible"});var e=new f.a({onComplete:this.completed});e.fromTo(".svg-line",5,{drawSVG:0,opacity:0},{drawSVG:"102%",opacity:1},"-=1").delay(1),e.fromTo(".App-logo",2,{left:"50%",top:"50%",height:"500px",transform:"translate(-50%,-50%)",position:"absolute"},{left:"0px",top:"10px",height:"90px",transform:"translate(0%,0%)"},"-=1","ease").delay(1),e.fromTo(".svg-line",2,{fill:"none"},{fill:"#fff"},"-=1").delay(3)}},{key:"render",value:function(){return c.a.createElement("div",{class:"logo__wrapper"},c.a.createElement("svg",{x:"0px",y:"0px",className:"App-logo",height:"150px",width:"400px",viewBox:"0 0 111 50"}," ",c.a.createElement("g",null," ",c.a.createElement("g",null," ",c.a.createElement("g",null," ",c.a.createElement("path",{className:"svg-line",d:"M63.2,32.5V16.3l-8.8,0.5v0.8c2.2,0,2.8,0.8,2.8,1.9v13c0,0.9-0.6,1.3-2.8,1.4v0.8h11.4v-0.8\nC63.6,33.8,63.2,33.4,63.2,32.5z"})," ")," ",c.a.createElement("g",null," ",c.a.createElement("path",{className:"svg-line",d:"M11.7,32.9c-1.8,0-2.3-1.1-2.3-3.3V18.3h5.5v-1.7H9.4V9.9l-5.9,1.7v5L0,17.3v1.1h3.4v10.9c0,4.3,2.7,5.7,5.9,5.7\nc3.2,0,4.7-1.4,5.8-4.4l-0.9-0.4C13.4,32,12.5,32.9,11.7,32.9z"})," ")," ",c.a.createElement("g",null," ",c.a.createElement("path",{className:"svg-line",d:"M29.9,16.2c-0.1,0-0.3,0-0.4,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0\nc-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c-1.3,0.5-2.5,1.4-3.3,2.8v0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1\nc-0.1,0.2-0.2,0.4-0.3,0.6v-3.7l-8.6,0.5v0.8c2.2,0,2.6,0.8,2.6,1.9v13c0,0.9-0.4,1.3-2.6,1.4v0.8h12.2v-0.8\nc-3-0.1-3.6-0.4-3.6-1.4V21.1c0,0,0,0,0,0c0.8-1.3,2.2-2.2,2.9-2.3c0,0,0,0,0,0c-0.1,0.4-0.2,0.9-0.2,1.3c0,1.6,1.2,3.1,3.3,3.1\nc1.8,0,3.1-1.4,3.1-3.5C33.7,17.7,32.4,16.2,29.9,16.2z"})," ")," ",c.a.createElement("g",null," ",c.a.createElement("path",{className:"svg-line",d:"M87.3,32.5V22c0-3.8-1.5-5.9-4.9-5.9c-2.5,0-5.1,1.5-6.7,3.9v-1.4v-3.5V8.5l0,0C75.5,3.8,71.2,0,66,0c0,0,0,0,0,0\nc-4.6,0-9.9,3.5-9.6,9.5c0.1,1.1,0.5,2.2,1.3,3c0.6,0.6,1.4,1.1,2.6,1.1c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5\nc-0.2,0-0.4,0-0.6,0.1c-0.2,0-0.4,0.1-0.6,0.2c0,0-0.1,0-0.1,0.1c-0.3,0.1-0.6-0.1-0.7-0.2c-0.2-0.3-0.2-1,0.1-1.5\nc1.5-2.6,4.4-4.3,7.8-4.3c4.8,0,8.7,3.6,8.7,8c0,4-3.2,7.4-7.4,7.9c-0.1,0-0.2,0-0.3,0v0c0,0,0,0,0,0v0.8c0,0,0,0,0,0v0\nc2.2,0,2.6,0.8,2.6,1.9v0.7v12.2c0,0.9-0.4,1.3-2.6,1.4v0.8h10.6v-0.8c-1.3,0-1.9-0.4-1.9-1.4V21.1c1-1.2,1.9-1.9,3.1-1.9\nc1.8,0,2.5,0.8,2.5,2.9v10.4c0,0.9-0.6,1.3-2,1.4v0.8h10.6v-0.8C87.7,33.8,87.3,33.4,87.3,32.5z"})," ")," ",c.a.createElement("g",null," ",c.a.createElement("path",{className:"svg-line",d:"M110.7,32.5c-2,0.9-2.7,0.6-2.7-1.4v-8.5c0-2.7-0.9-4.5-2.6-5.5c-1.2-0.7-2.9-1.1-5-1.1c-6,0-8.4,1.5-8.4,3.9\nc0,1.6,1.3,2.9,3,2.9c1.9,0,3-1.1,3-2.9c0-0.8-0.3-1.5-0.8-2.1c0.1-0.1,1.1-0.8,2.2-0.8c1.6,0,2.5,0.6,2.7,2.5\nc0,0.3,0.1,0.7,0.1,1.1v3.6c-1.6,0.4-6,0-8.7,1.5c-1.6,0.9-2.5,2.6-2.5,4.2c0,2.3,1.7,4.9,5.6,4.9c2.6,0,4.4-1.5,5.8-3h0.2\nc0.4,2,1.6,3,4.2,3c1.7,0,3-0.7,4.4-1.8L110.7,32.5z M102,30.5c-0.5,0.8-1.5,1.7-2.4,1.7c-1.5,0-2.5-0.9-2.5-2.8c0-2.9,1-3.6,4.9-4\nV30.5z"})," ")," ",c.a.createElement("g",null," ",c.a.createElement("path",{className:"svg-line",d:"M51.3,31.2v-8.5c0-2.7-0.9-4.5-2.6-5.5c-1.2-0.7-2.9-1.1-5-1.1c-6,0-8.4,1.5-8.4,3.9c0,1.6,1.3,2.9,3,2.9\nc1.9,0,3-1.1,3-2.9c0-0.8-0.3-1.5-0.8-2.1c0.1-0.1,1.1-0.8,2.2-0.8c1.6,0,2.5,0.6,2.7,2.5c0,0.3,0.1,0.7,0.1,1.1v3.6\nc-1.6,0.4-6,0-8.7,1.5c-1.6,0.9-2.5,2.6-2.5,4.2c0,2.3,1.7,4.9,5.6,4.9c2.6,0,4.4-1.5,5.8-3h0.2c0.4,2,1.6,3,4.2,3\nc1.7,0,3-0.7,4.4-1.8L54,32.5C52.1,33.5,51.3,33.1,51.3,31.2z M45.4,30.5c-0.5,0.8-1.5,1.7-2.4,1.7c-1.5,0-2.5-0.9-2.5-2.8\nc0-2.9,1-3.6,4.9-4V30.5z"})," ")," ")," ")," "))}}]),t}(n.Component)),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"fillerbox"},c.a.createElement("h1",{className:"white-text"}," Test "),c.a.createElement("div",{className:"fillerbox"}),c.a.createElement("div",{className:"fillerbox"}),c.a.createElement("div",{className:"fillerbox"}),c.a.createElement("div",{className:"fillerbox"}))}}]),t}(n.Component),m=(a(20),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={animationComplete:!1},a.handleComplete=function(e){e&&a.setState({animationComplete:!0})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(u,{handleComplete:this.handleComplete})),this.state.animationComplete?c.a.createElement(d,null):null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.12a79425.chunk.js.map