/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-banner-tools",
factory: function (require) {
var plugin=(()=>{var jr=Object.create,he=Object.defineProperty;var We=Object.getOwnPropertyDescriptor;var Pr=Object.getOwnPropertyNames;var Hr=Object.getPrototypeOf,$r=Object.prototype.hasOwnProperty;var Nr=e=>he(e,"__esModule",{value:!0});var me=e=>{if(typeof require!="undefined")return require(e);throw new Error('Dynamic require of "'+e+'" is not supported')};var V=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),qr=(e,r)=>{for(var a in r)he(e,a,{get:r[a],enumerable:!0})},Gr=(e,r,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Pr(r))!$r.call(e,i)&&i!=="default"&&he(e,i,{get:()=>r[i],enumerable:!(a=We(r,i))||a.enumerable});return e},je=e=>Gr(Nr(he(e!=null?jr(Hr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Pe=(e,r,a,i)=>{for(var t=i>1?void 0:i?We(r,a):r,u=e.length-1,c;u>=0;u--)(c=e[u])&&(t=(i?c(r,a,t):c(t))||t);return i&&t&&he(r,a,t),t};var Ye=V((Rt,ye)=>{"use strict";var Xe=Xe||function(){var e=0,r=1,a=2,i=3,t={},u={font:"Standard",fontPath:"./fonts"};function c(f,v){var l={},h,p,d,k,R=[[16384,"vLayout",a],[8192,"vLayout",r],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",a],[64,"hLayout",r],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(h=v!==null?v:f,p=0,d=R.length;p<d;)k=R[p],h>=k[0]?(h=h-k[0],l[k[1]]=typeof l[k[1]]=="undefined"?k[2]:l[k[1]]):k[1]!=="vLayout"&&k[1]!=="hLayout"&&(l[k[1]]=!1),p++;return typeof l.hLayout=="undefined"?f===0?l.hLayout=r:f===-1?l.hLayout=e:l.hRule1||l.hRule2||l.hRule3||l.hRule4||l.hRule5||l.hRule6?l.hLayout=i:l.hLayout=a:l.hLayout===a&&(l.hRule1||l.hRule2||l.hRule3||l.hRule4||l.hRule5||l.hRule6)&&(l.hLayout=i),typeof l.vLayout=="undefined"?l.vRule1||l.vRule2||l.vRule3||l.vRule4||l.vRule5?l.vLayout=i:l.vLayout=e:l.vLayout===a&&(l.vRule1||l.vRule2||l.vRule3||l.vRule4||l.vRule5)&&(l.vLayout=i),l}function y(f,v,l){return f===v&&f!==l?f:!1}function g(f,v){var l="|/\\[]{}()<>";if(f==="_"){if(l.indexOf(v)!==-1)return v}else if(v==="_"&&l.indexOf(f)!==-1)return f;return!1}function F(f,v){var l="| /\\ [] {} () <>",h=l.indexOf(f),p=l.indexOf(v);return h!==-1&&p!==-1&&h!==p&&Math.abs(h-p)!==1?l.substr(Math.max(h,p),1):!1}function q(f,v){var l="[] {} ()",h=l.indexOf(f),p=l.indexOf(v);return h!==-1&&p!==-1&&Math.abs(h-p)<=1?"|":!1}function _(f,v){var l="/\\ \\/ ><",h={"0":"|","3":"Y","6":"X"},p=l.indexOf(f),d=l.indexOf(v);return p!==-1&&d!==-1&&d-p==1?h[p]:!1}function E(f,v,l){return f===l&&v===l?l:!1}function I(f,v){return f===v?f:!1}function L(f,v){var l="|/\\[]{}()<>";if(f==="_"){if(l.indexOf(v)!==-1)return v}else if(v==="_"&&l.indexOf(f)!==-1)return f;return!1}function A(f,v){var l="| /\\ [] {} () <>",h=l.indexOf(f),p=l.indexOf(v);return h!==-1&&p!==-1&&h!==p&&Math.abs(h-p)!==1?l.substr(Math.max(h,p),1):!1}function O(f,v){return f==="-"&&v==="_"||f==="_"&&v==="-"?"=":!1}function $(f,v){return f==="|"&&v==="|"?"|":!1}function N(f,v,l){return v===" "||v===""||v===l&&f!==" "?f:v}function z(f,v,l){if(l.fittingRules.vLayout===e)return"invalid";var h,p=Math.min(f.length,v.length),d,k,R=!1,m;if(p===0)return"invalid";for(h=0;h<p;h++)if(d=f.substr(h,1),k=v.substr(h,1),d!==" "&&k!==" "){if(l.fittingRules.vLayout===r)return"invalid";if(l.fittingRules.vLayout===a)return"end";if($(d,k)){R=R||!1;continue}if(m=!1,m=l.fittingRules.vRule1?I(d,k):m,m=!m&&l.fittingRules.vRule2?L(d,k):m,m=!m&&l.fittingRules.vRule3?A(d,k):m,m=!m&&l.fittingRules.vRule4?O(d,k):m,R=!0,!m)return"invalid"}return R?"end":"valid"}function G(f,v,l){for(var h=f.length,p=f.length,d=v.length,k,R,m,M=1,H,n,o;M<=h;){for(k=f.slice(Math.max(0,p-M),p),R=v.slice(0,Math.min(h,M)),m=R.length,o="",H=0;H<m;H++)if(n=z(k[H],R[H],l),n==="end")o=n;else if(n==="invalid"){o=n;break}else o===""&&(o="valid");if(o==="invalid"){M--;break}if(o==="end")break;o==="valid"&&M++}return Math.min(h,M)}function K(f,v,l){var h,p=Math.min(f.length,v.length),d,k,R="",m;for(h=0;h<p;h++)d=f.substr(h,1),k=v.substr(h,1),d!==" "&&k!==" "?l.fittingRules.vLayout===r||l.fittingRules.vLayout===a?R+=N(d,k):(m=!1,m=l.fittingRules.vRule5?$(d,k):m,m=!m&&l.fittingRules.vRule1?I(d,k):m,m=!m&&l.fittingRules.vRule2?L(d,k):m,m=!m&&l.fittingRules.vRule3?A(d,k):m,m=!m&&l.fittingRules.vRule4?O(d,k):m,R+=m):R+=N(d,k);return R}function Le(f,v,l,h){var p=f.length,d=v.length,k=f.slice(0,Math.max(0,p-l)),R=f.slice(Math.max(0,p-l),p),m=v.slice(0,Math.min(l,d)),M,H,n,o=[],s,b=[];for(H=R.length,M=0;M<H;M++)M>=d?n=R[M]:n=K(R[M],m[M],h),o.push(n);return s=v.slice(Math.min(l,d),d),b.concat(k,o,s)}function be(f,v){var l,h=f.length,p="";for(l=0;l<v;l++)p+=" ";for(l=0;l<h;l++)f[l]+=p}function Oe(f,v,l){var h=f[0].length,p=v[0].length,d;return h>p?be(v,h-p):p>h&&be(f,p-h),d=G(f,v,l),Le(f,v,d,l)}function Ce(f,v,l){if(l.fittingRules.hLayout===e)return 0;var h,p=f.length,d=v.length,k=p,R=1,m=!1,M=!1,H,n,o,s;if(p===0)return 0;e:for(;R<=k;){for(H=f.substr(p-R,R),n=v.substr(0,Math.min(R,d)),h=0;h<Math.min(R,d);h++)if(o=H.substr(h,1),s=n.substr(h,1),o!==" "&&s!==" "){if(l.fittingRules.hLayout===r){R=R-1;break e}else if(l.fittingRules.hLayout===a){(o===l.hardBlank||s===l.hardBlank)&&(R=R-1);break e}else if(m=!0,M=!1,M=l.fittingRules.hRule1?y(o,s,l.hardBlank):M,M=!M&&l.fittingRules.hRule2?g(o,s,l.hardBlank):M,M=!M&&l.fittingRules.hRule3?F(o,s,l.hardBlank):M,M=!M&&l.fittingRules.hRule4?q(o,s,l.hardBlank):M,M=!M&&l.fittingRules.hRule5?_(o,s,l.hardBlank):M,M=!M&&l.fittingRules.hRule6?E(o,s,l.hardBlank):M,!M){R=R-1;break e}}if(m)break;R++}return Math.min(k,R)}function oe(f,v,l,h){var p,d,k,R=[],m,M,H,n,o,s,b,w;for(p=0;p<h.height;p++){b=f[p],w=v[p],o=b.length,s=w.length,m=o-l,M=b.substr(0,Math.max(0,m)),H="";var x=b.substr(Math.max(0,o-l),l),j=w.substr(0,Math.min(l,s));for(d=0;d<l;d++){var P=d<o?x.substr(d,1):" ",C=d<s?j.substr(d,1):" ";if(P!==" "&&C!==" ")if(h.fittingRules.hLayout===r)H+=N(P,C,h.hardBlank);else if(h.fittingRules.hLayout===a)H+=N(P,C,h.hardBlank);else{var T="";T=!T&&h.fittingRules.hRule1?y(P,C,h.hardBlank):T,T=!T&&h.fittingRules.hRule2?g(P,C,h.hardBlank):T,T=!T&&h.fittingRules.hRule3?F(P,C,h.hardBlank):T,T=!T&&h.fittingRules.hRule4?q(P,C,h.hardBlank):T,T=!T&&h.fittingRules.hRule5?_(P,C,h.hardBlank):T,T=!T&&h.fittingRules.hRule6?E(P,C,h.hardBlank):T,T=T||N(P,C,h.hardBlank),H+=T}else H+=N(P,C,h.hardBlank)}l>=s?n="":n=w.substr(l,Math.max(0,s-l)),R[p]=M+H+n}return R}function ee(f){var v=[],l;for(l=0;l<f;l++)v[l]="";return v}function Q(f,v,l){return f.reduce(function(h,p){return oe(h,p.fig,p.overlap,l)},ee(v))}function Ie(f,v,l){for(var h={},p=f.length;--p;){var d=Q(f.slice(0,p),v,l);if(re(d)<=l.width){h.outputFigText=d,p<f.length?h.chars=f.slice(p):h.chars=[];break}}return h}function Be(f,v,l){var h,p,d,k=0,R,m,M,H=l.height,n=[],o,s,b,w=[],x,j,P,C,T;for(m=ee(H),l.width>0&&l.whitespaceBreak&&(b={chars:[],overlap:k}),l.printDirection===1&&(f=f.split("").reverse().join("")),M=f.length,h=0;h<M;h++)if(x=f.substr(h,1),j=x.match(/\s/),p=v[x.charCodeAt(0)],C=null,p){if(l.fittingRules.hLayout!==e){for(k=1e4,R=0;R<l.height;R++)k=Math.min(k,Ce(m[R],p[R],l));k=k===1e4?0:k}if(l.width>0&&(l.whitespaceBreak?(P=Q(b.chars.concat([{fig:p,overlap:k}]),H,l),C=Q(w.concat([{fig:P,overlap:b.overlap}]),H,l),o=re(C)):(C=oe(m,p,k,l),o=re(C)),o>=l.width&&h>0&&(l.whitespaceBreak?(m=Q(w.slice(0,-1),H,l),w.length>1&&(n.push(m),m=ee(H)),w=[]):(n.push(m),m=ee(H)))),l.width>0&&l.whitespaceBreak&&((!j||h===M-1)&&b.chars.push({fig:p,overlap:k}),j||h===M-1)){for(T=null;C=Q(b.chars,H,l),o=re(C),o>=l.width;)T=Ie(b.chars,H,l),b={chars:T.chars},n.push(T.outputFigText);o>0&&(T?w.push({fig:C,overlap:1}):w.push({fig:C,overlap:b.overlap})),j&&(w.push({fig:p,overlap:k}),m=ee(H)),h===M-1&&(m=Q(w,H,l)),b={chars:[],overlap:k};continue}m=oe(m,p,k,l)}return re(m)>0&&n.push(m),l.showHardBlanks!==!0&&n.forEach(function(Z){for(M=Z.length,R=0;R<M;R++)Z[R]=Z[R].replace(new RegExp("\\"+l.hardBlank,"g")," ")}),n}var ue=function(f,v){var l=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],h={},p,d;if(f==="default")for(d=0;d<l.length;d++)h[l[d]]=v.fittingRules[l[d]];else if(f==="full")h={hLayout:e,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(f==="fitted")h={hLayout:r,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(f==="controlled smushing")h={hLayout:i,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(f==="universal smushing")h={hLayout:a,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return h},Te=function(f,v){var l=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],h={},p,d;if(f==="default")for(d=0;d<l.length;d++)h[l[d]]=v.fittingRules[l[d]];else if(f==="full")h={vLayout:e,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(f==="fitted")h={vLayout:r,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(f==="controlled smushing")h={vLayout:i,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(f==="universal smushing")h={vLayout:a,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return h},re=function(f){return Math.max.apply(Math,f.map(function(v,l){return v.length}))},fe=function(f,v,l){l=l.replace(/\r\n/g,`
`).replace(/\r/g,`
`);var h=l.split(`
`),p=[],d,k,R;for(k=h.length,d=0;d<k;d++)p=p.concat(Be(h[d],t[f],v));for(k=p.length,R=p[0],d=1;d<k;d++)R=Oe(R,p[d],v);return R?R.join(`
`):""},B=function(f,v,l){B.text(f,v,l)};B.text=function(f,v,l){var h="";f=f+"",typeof arguments[1]=="function"&&(l=v,v={},v.font=u.font),typeof v=="string"?(h=v,v={}):(v=v||{},h=v.font||u.font),B.loadFont(h,function(p,d){if(p)return l(p);l(null,fe(h,te(d,v),f))})},B.textSync=function(f,v){var l="";f=f+"",typeof v=="string"?(l=v,v={}):(v=v||{},l=v.font||u.font);var h=te(B.loadFontSync(l),v);return fe(l,h,f)};function te(f,v){var l=JSON.parse(JSON.stringify(f)),h,p;if(typeof v.horizontalLayout!="undefined"){h=ue(v.horizontalLayout,f);for(p in h)h.hasOwnProperty(p)&&(l.fittingRules[p]=h[p])}if(typeof v.verticalLayout!="undefined"){h=Te(v.verticalLayout,f);for(p in h)h.hasOwnProperty(p)&&(l.fittingRules[p]=h[p])}return l.printDirection=typeof v.printDirection!="undefined"?v.printDirection:f.printDirection,l.showHardBlanks=v.showHardBlanks||!1,l.width=v.width||-1,l.whitespaceBreak=v.whitespaceBreak||!1,l}return B.metadata=function(f,v){f=f+"",B.loadFont(f,function(l,h){if(l){v(l);return}v(null,h,t[f].comment)})},B.defaults=function(f){if(typeof f=="object"&&f!==null)for(var v in f)f.hasOwnProperty(v)&&(u[v]=f[v]);return JSON.parse(JSON.stringify(u))},B.parseFont=function(f,v){v=v.replace(/\r\n/g,`
`).replace(/\r/g,`
`),t[f]={};var l=v.split(`
`),h=l.splice(0,1)[0].split(" "),p=t[f],d={};if(d.hardBlank=h[0].substr(5,1),d.height=parseInt(h[1],10),d.baseline=parseInt(h[2],10),d.maxLength=parseInt(h[3],10),d.oldLayout=parseInt(h[4],10),d.numCommentLines=parseInt(h[5],10),d.printDirection=h.length>=6?parseInt(h[6],10):0,d.fullLayout=h.length>=7?parseInt(h[7],10):null,d.codeTagCount=h.length>=8?parseInt(h[8],10):null,d.fittingRules=c(d.oldLayout,d.fullLayout),p.options=d,d.hardBlank.length!==1||isNaN(d.height)||isNaN(d.baseline)||isNaN(d.maxLength)||isNaN(d.oldLayout)||isNaN(d.numCommentLines))throw new Error("FIGlet header contains invalid values.");var k=[],R;for(R=32;R<=126;R++)k.push(R);if(k=k.concat(196,214,220,228,246,252,223),l.length<d.numCommentLines+d.height*k.length)throw new Error("FIGlet file is missing data.");var m,M,H=!1;for(p.comment=l.splice(0,d.numCommentLines).join(`
`),p.numChars=0;l.length>0&&p.numChars<k.length;){for(m=k[p.numChars],p[m]=l.splice(0,d.height),R=0;R<d.height;R++)typeof p[m][R]=="undefined"?p[m][R]="":(M=new RegExp("\\"+p[m][R].substr(p[m][R].length-1,1)+"+$"),p[m][R]=p[m][R].replace(M,""));p.numChars++}for(;l.length>0;){if(m=l.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(m))m=parseInt(m,16);else if(/^0[0-7]+$/.test(m))m=parseInt(m,8);else if(/^[0-9]+$/.test(m))m=parseInt(m,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(m))m=parseInt(m,16);else{if(m==="")break;console.log("Invalid data:"+m),H=!0;break}for(p[m]=l.splice(0,d.height),R=0;R<d.height;R++)typeof p[m][R]=="undefined"?p[m][R]="":(M=new RegExp("\\"+p[m][R].substr(p[m][R].length-1,1)+"+$"),p[m][R]=p[m][R].replace(M,""));p.numChars++}if(H===!0)throw new Error("Error parsing data.");return d},B.loadFont=function(f,v){if(t[f]){v(null,t[f].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(u.fontPath+"/"+f+".flf").then(function(l){if(l.ok)return l.text();throw console.log("Unexpected response",l),new Error("Network response was not ok.")}).then(function(l){v(null,B.parseFont(f,l))}).catch(v)},B.loadFontSync=function(f){if(t[f])return t[f].options;throw new Error("synchronous font loading is not implemented for the browser")},B.preloadFonts=function(f,v){var l=[];f.reduce(function(h,p){return h.then(function(){return fetch(u.fontPath+"/"+p+".flf").then(d=>d.text()).then(function(d){l.push(d)})})},Promise.resolve()).then(function(h){for(var p in f)f.hasOwnProperty(p)&&B.parseFont(f[p],l[p]);v&&v()})},B.figFonts=t,B}();typeof ye!="undefined"&&typeof ye.exports!="undefined"&&(ye.exports=Xe)});var Ke=V((wt,Je)=>{var Y=Ye(),Re=me("fs"),He=me("path"),we=He.join(__dirname,"/../fonts/");Y.loadFont=function(e,r){if(Y.figFonts[e]){r(null,Y.figFonts[e].options);return}Re.readFile(He.join(we,e+".flf"),{encoding:"utf-8"},function(a,i){if(a)return r(a);i=i+"";try{r(null,Y.parseFont(e,i))}catch(t){r(t)}})};Y.loadFontSync=function(e){if(Y.figFonts[e])return Y.figFonts[e].options;var r=Re.readFileSync(He.join(we,e+".flf"),{encoding:"utf-8"});return r=r+"",Y.parseFont(e,r)};Y.fonts=function(e){var r=[];Re.readdir(we,function(a,i){if(a)return e(a);i.forEach(function(t){/\.flf$/.test(t)&&r.push(t.replace(/\.flf$/,""))}),e(null,r)})};Y.fontsSync=function(){var e=[];return Re.readdirSync(we).forEach(function(r){/\.flf$/.test(r)&&e.push(r.replace(/\.flf$/,""))}),e};Je.exports=Y});var er=V((xt,Qe)=>{"use strict";var zr=/[|\\{}()[\]^$+*?.]/g;Qe.exports=function(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(zr,"\\$&")}});var tr=V((kt,rr)=>{"use strict";rr.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var Ne=V((St,sr)=>{var ne=tr(),nr={};for(var $e in ne)ne.hasOwnProperty($e)&&(nr[ne[$e]]=$e);var S=sr.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var W in S)if(S.hasOwnProperty(W)){if(!("channels"in S[W]))throw new Error("missing channels property: "+W);if(!("labels"in S[W]))throw new Error("missing channel labels property: "+W);if(S[W].labels.length!==S[W].channels)throw new Error("channel and label counts mismatch: "+W);ar=S[W].channels,ir=S[W].labels,delete S[W].channels,delete S[W].labels,Object.defineProperty(S[W],"channels",{value:ar}),Object.defineProperty(S[W],"labels",{value:ir})}var ar,ir;S.rgb.hsl=function(e){var r=e[0]/255,a=e[1]/255,i=e[2]/255,t=Math.min(r,a,i),u=Math.max(r,a,i),c=u-t,y,g,F;return u===t?y=0:r===u?y=(a-i)/c:a===u?y=2+(i-r)/c:i===u&&(y=4+(r-a)/c),y=Math.min(y*60,360),y<0&&(y+=360),F=(t+u)/2,u===t?g=0:F<=.5?g=c/(u+t):g=c/(2-u-t),[y,g*100,F*100]};S.rgb.hsv=function(e){var r,a,i,t,u,c=e[0]/255,y=e[1]/255,g=e[2]/255,F=Math.max(c,y,g),q=F-Math.min(c,y,g),_=function(E){return(F-E)/6/q+1/2};return q===0?t=u=0:(u=q/F,r=_(c),a=_(y),i=_(g),c===F?t=i-a:y===F?t=1/3+r-i:g===F&&(t=2/3+a-r),t<0?t+=1:t>1&&(t-=1)),[t*360,u*100,F*100]};S.rgb.hwb=function(e){var r=e[0],a=e[1],i=e[2],t=S.rgb.hsl(e)[0],u=1/255*Math.min(r,Math.min(a,i));return i=1-1/255*Math.max(r,Math.max(a,i)),[t,u*100,i*100]};S.rgb.cmyk=function(e){var r=e[0]/255,a=e[1]/255,i=e[2]/255,t,u,c,y;return y=Math.min(1-r,1-a,1-i),t=(1-r-y)/(1-y)||0,u=(1-a-y)/(1-y)||0,c=(1-i-y)/(1-y)||0,[t*100,u*100,c*100,y*100]};function Dr(e,r){return Math.pow(e[0]-r[0],2)+Math.pow(e[1]-r[1],2)+Math.pow(e[2]-r[2],2)}S.rgb.keyword=function(e){var r=nr[e];if(r)return r;var a=Infinity,i;for(var t in ne)if(ne.hasOwnProperty(t)){var u=ne[t],c=Dr(e,u);c<a&&(a=c,i=t)}return i};S.keyword.rgb=function(e){return ne[e]};S.rgb.xyz=function(e){var r=e[0]/255,a=e[1]/255,i=e[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var t=r*.4124+a*.3576+i*.1805,u=r*.2126+a*.7152+i*.0722,c=r*.0193+a*.1192+i*.9505;return[t*100,u*100,c*100]};S.rgb.lab=function(e){var r=S.rgb.xyz(e),a=r[0],i=r[1],t=r[2],u,c,y;return a/=95.047,i/=100,t/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,u=116*i-16,c=500*(a-i),y=200*(i-t),[u,c,y]};S.hsl.rgb=function(e){var r=e[0]/360,a=e[1]/100,i=e[2]/100,t,u,c,y,g;if(a===0)return g=i*255,[g,g,g];i<.5?u=i*(1+a):u=i+a-i*a,t=2*i-u,y=[0,0,0];for(var F=0;F<3;F++)c=r+1/3*-(F-1),c<0&&c++,c>1&&c--,6*c<1?g=t+(u-t)*6*c:2*c<1?g=u:3*c<2?g=t+(u-t)*(2/3-c)*6:g=t,y[F]=g*255;return y};S.hsl.hsv=function(e){var r=e[0],a=e[1]/100,i=e[2]/100,t=a,u=Math.max(i,.01),c,y;return i*=2,a*=i<=1?i:2-i,t*=u<=1?u:2-u,y=(i+a)/2,c=i===0?2*t/(u+t):2*a/(i+a),[r,c*100,y*100]};S.hsv.rgb=function(e){var r=e[0]/60,a=e[1]/100,i=e[2]/100,t=Math.floor(r)%6,u=r-Math.floor(r),c=255*i*(1-a),y=255*i*(1-a*u),g=255*i*(1-a*(1-u));switch(i*=255,t){case 0:return[i,g,c];case 1:return[y,i,c];case 2:return[c,i,g];case 3:return[c,y,i];case 4:return[g,c,i];case 5:return[i,c,y]}};S.hsv.hsl=function(e){var r=e[0],a=e[1]/100,i=e[2]/100,t=Math.max(i,.01),u,c,y;return y=(2-a)*i,u=(2-a)*t,c=a*t,c/=u<=1?u:2-u,c=c||0,y/=2,[r,c*100,y*100]};S.hwb.rgb=function(e){var r=e[0]/360,a=e[1]/100,i=e[2]/100,t=a+i,u,c,y,g;t>1&&(a/=t,i/=t),u=Math.floor(6*r),c=1-i,y=6*r-u,(u&1)!=0&&(y=1-y),g=a+y*(c-a);var F,q,_;switch(u){default:case 6:case 0:F=c,q=g,_=a;break;case 1:F=g,q=c,_=a;break;case 2:F=a,q=c,_=g;break;case 3:F=a,q=g,_=c;break;case 4:F=g,q=a,_=c;break;case 5:F=c,q=a,_=g;break}return[F*255,q*255,_*255]};S.cmyk.rgb=function(e){var r=e[0]/100,a=e[1]/100,i=e[2]/100,t=e[3]/100,u,c,y;return u=1-Math.min(1,r*(1-t)+t),c=1-Math.min(1,a*(1-t)+t),y=1-Math.min(1,i*(1-t)+t),[u*255,c*255,y*255]};S.xyz.rgb=function(e){var r=e[0]/100,a=e[1]/100,i=e[2]/100,t,u,c;return t=r*3.2406+a*-1.5372+i*-.4986,u=r*-.9689+a*1.8758+i*.0415,c=r*.0557+a*-.204+i*1.057,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*12.92,u=u>.0031308?1.055*Math.pow(u,1/2.4)-.055:u*12.92,c=c>.0031308?1.055*Math.pow(c,1/2.4)-.055:c*12.92,t=Math.min(Math.max(0,t),1),u=Math.min(Math.max(0,u),1),c=Math.min(Math.max(0,c),1),[t*255,u*255,c*255]};S.xyz.lab=function(e){var r=e[0],a=e[1],i=e[2],t,u,c;return r/=95.047,a/=100,i/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,t=116*a-16,u=500*(r-a),c=200*(a-i),[t,u,c]};S.lab.xyz=function(e){var r=e[0],a=e[1],i=e[2],t,u,c;u=(r+16)/116,t=a/500+u,c=u-i/200;var y=Math.pow(u,3),g=Math.pow(t,3),F=Math.pow(c,3);return u=y>.008856?y:(u-16/116)/7.787,t=g>.008856?g:(t-16/116)/7.787,c=F>.008856?F:(c-16/116)/7.787,t*=95.047,u*=100,c*=108.883,[t,u,c]};S.lab.lch=function(e){var r=e[0],a=e[1],i=e[2],t,u,c;return t=Math.atan2(i,a),u=t*360/2/Math.PI,u<0&&(u+=360),c=Math.sqrt(a*a+i*i),[r,c,u]};S.lch.lab=function(e){var r=e[0],a=e[1],i=e[2],t,u,c;return c=i/360*2*Math.PI,t=a*Math.cos(c),u=a*Math.sin(c),[r,t,u]};S.rgb.ansi16=function(e){var r=e[0],a=e[1],i=e[2],t=1 in arguments?arguments[1]:S.rgb.hsv(e)[2];if(t=Math.round(t/50),t===0)return 30;var u=30+(Math.round(i/255)<<2|Math.round(a/255)<<1|Math.round(r/255));return t===2&&(u+=60),u};S.hsv.ansi16=function(e){return S.rgb.ansi16(S.hsv.rgb(e),e[2])};S.rgb.ansi256=function(e){var r=e[0],a=e[1],i=e[2];if(r===a&&a===i)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;var t=16+36*Math.round(r/255*5)+6*Math.round(a/255*5)+Math.round(i/255*5);return t};S.ansi16.rgb=function(e){var r=e%10;if(r===0||r===7)return e>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var a=(~~(e>50)+1)*.5,i=(r&1)*a*255,t=(r>>1&1)*a*255,u=(r>>2&1)*a*255;return[i,t,u]};S.ansi256.rgb=function(e){if(e>=232){var r=(e-232)*10+8;return[r,r,r]}e-=16;var a,i=Math.floor(e/36)/5*255,t=Math.floor((a=e%36)/6)/5*255,u=a%6/5*255;return[i,t,u]};S.rgb.hex=function(e){var r=((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255),a=r.toString(16).toUpperCase();return"000000".substring(a.length)+a};S.hex.rgb=function(e){var r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var a=r[0];r[0].length===3&&(a=a.split("").map(function(y){return y+y}).join(""));var i=parseInt(a,16),t=i>>16&255,u=i>>8&255,c=i&255;return[t,u,c]};S.rgb.hcg=function(e){var r=e[0]/255,a=e[1]/255,i=e[2]/255,t=Math.max(Math.max(r,a),i),u=Math.min(Math.min(r,a),i),c=t-u,y,g;return c<1?y=u/(1-c):y=0,c<=0?g=0:t===r?g=(a-i)/c%6:t===a?g=2+(i-r)/c:g=4+(r-a)/c+4,g/=6,g%=1,[g*360,c*100,y*100]};S.hsl.hcg=function(e){var r=e[1]/100,a=e[2]/100,i=1,t=0;return a<.5?i=2*r*a:i=2*r*(1-a),i<1&&(t=(a-.5*i)/(1-i)),[e[0],i*100,t*100]};S.hsv.hcg=function(e){var r=e[1]/100,a=e[2]/100,i=r*a,t=0;return i<1&&(t=(a-i)/(1-i)),[e[0],i*100,t*100]};S.hcg.rgb=function(e){var r=e[0]/360,a=e[1]/100,i=e[2]/100;if(a===0)return[i*255,i*255,i*255];var t=[0,0,0],u=r%1*6,c=u%1,y=1-c,g=0;switch(Math.floor(u)){case 0:t[0]=1,t[1]=c,t[2]=0;break;case 1:t[0]=y,t[1]=1,t[2]=0;break;case 2:t[0]=0,t[1]=1,t[2]=c;break;case 3:t[0]=0,t[1]=y,t[2]=1;break;case 4:t[0]=c,t[1]=0,t[2]=1;break;default:t[0]=1,t[1]=0,t[2]=y}return g=(1-a)*i,[(a*t[0]+g)*255,(a*t[1]+g)*255,(a*t[2]+g)*255]};S.hcg.hsv=function(e){var r=e[1]/100,a=e[2]/100,i=r+a*(1-r),t=0;return i>0&&(t=r/i),[e[0],t*100,i*100]};S.hcg.hsl=function(e){var r=e[1]/100,a=e[2]/100,i=a*(1-r)+.5*r,t=0;return i>0&&i<.5?t=r/(2*i):i>=.5&&i<1&&(t=r/(2*(1-i))),[e[0],t*100,i*100]};S.hcg.hwb=function(e){var r=e[1]/100,a=e[2]/100,i=r+a*(1-r);return[e[0],(i-r)*100,(1-i)*100]};S.hwb.hcg=function(e){var r=e[1]/100,a=e[2]/100,i=1-a,t=i-r,u=0;return t<1&&(u=(i-t)/(1-t)),[e[0],t*100,u*100]};S.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};S.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};S.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};S.gray.hsl=S.gray.hsv=function(e){return[0,0,e[0]]};S.gray.hwb=function(e){return[0,100,e[0]]};S.gray.cmyk=function(e){return[0,0,0,e[0]]};S.gray.lab=function(e){return[e[0],0,0]};S.gray.hex=function(e){var r=Math.round(e[0]/100*255)&255,a=(r<<16)+(r<<8)+r,i=a.toString(16).toUpperCase();return"000000".substring(i.length)+i};S.rgb.gray=function(e){var r=(e[0]+e[1]+e[2])/3;return[r/255*100]}});var or=V((At,lr)=>{var _e=Ne();function Ur(){for(var e={},r=Object.keys(_e),a=r.length,i=0;i<a;i++)e[r[i]]={distance:-1,parent:null};return e}function Vr(e){var r=Ur(),a=[e];for(r[e].distance=0;a.length;)for(var i=a.pop(),t=Object.keys(_e[i]),u=t.length,c=0;c<u;c++){var y=t[c],g=r[y];g.distance===-1&&(g.distance=r[i].distance+1,g.parent=i,a.unshift(y))}return r}function Wr(e,r){return function(a){return r(e(a))}}function Xr(e,r){for(var a=[r[e].parent,e],i=_e[r[e].parent][e],t=r[e].parent;r[t].parent;)a.unshift(r[t].parent),i=Wr(_e[r[t].parent][t],i),t=r[t].parent;return i.conversion=a,i}lr.exports=function(e){for(var r=Vr(e),a={},i=Object.keys(r),t=i.length,u=0;u<t;u++){var c=i[u],y=r[c];y.parent!==null&&(a[c]=Xr(c,r))}return a}});var fr=V((Mt,ur)=>{var qe=Ne(),Yr=or(),ae={},Jr=Object.keys(qe);function Kr(e){var r=function(a){return a==null?a:(arguments.length>1&&(a=Array.prototype.slice.call(arguments)),e(a))};return"conversion"in e&&(r.conversion=e.conversion),r}function Zr(e){var r=function(a){if(a==null)return a;arguments.length>1&&(a=Array.prototype.slice.call(arguments));var i=e(a);if(typeof i=="object")for(var t=i.length,u=0;u<t;u++)i[u]=Math.round(i[u]);return i};return"conversion"in e&&(r.conversion=e.conversion),r}Jr.forEach(function(e){ae[e]={},Object.defineProperty(ae[e],"channels",{value:qe[e].channels}),Object.defineProperty(ae[e],"labels",{value:qe[e].labels});var r=Yr(e),a=Object.keys(r);a.forEach(function(i){var t=r[i];ae[e][i]=Zr(t),ae[e][i].raw=Kr(t)})});ur.exports=ae});var cr=V((Et,hr)=>{"use strict";var ie=fr(),xe=(e,r)=>function(){return`[${e.apply(ie,arguments)+r}m`},ke=(e,r)=>function(){let a=e.apply(ie,arguments);return`[${38+r};5;${a}m`},Se=(e,r)=>function(){let a=e.apply(ie,arguments);return`[${38+r};2;${a[0]};${a[1]};${a[2]}m`};function Qr(){let e=new Map,r={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};r.color.grey=r.color.gray;for(let t of Object.keys(r)){let u=r[t];for(let c of Object.keys(u)){let y=u[c];r[c]={open:`[${y[0]}m`,close:`[${y[1]}m`},u[c]=r[c],e.set(y[0],y[1])}Object.defineProperty(r,t,{value:u,enumerable:!1}),Object.defineProperty(r,"codes",{value:e,enumerable:!1})}let a=t=>t,i=(t,u,c)=>[t,u,c];r.color.close="[39m",r.bgColor.close="[49m",r.color.ansi={ansi:xe(a,0)},r.color.ansi256={ansi256:ke(a,0)},r.color.ansi16m={rgb:Se(i,0)},r.bgColor.ansi={ansi:xe(a,10)},r.bgColor.ansi256={ansi256:ke(a,10)},r.bgColor.ansi16m={rgb:Se(i,10)};for(let t of Object.keys(ie)){if(typeof ie[t]!="object")continue;let u=ie[t];t==="ansi16"&&(t="ansi"),"ansi16"in u&&(r.color.ansi[t]=xe(u.ansi16,0),r.bgColor.ansi[t]=xe(u.ansi16,10)),"ansi256"in u&&(r.color.ansi256[t]=ke(u.ansi256,0),r.bgColor.ansi256[t]=ke(u.ansi256,10)),"rgb"in u&&(r.color.ansi16m[t]=Se(u.rgb,0),r.bgColor.ansi16m[t]=Se(u.rgb,10))}return r}Object.defineProperty(hr,"exports",{enumerable:!0,get:Qr})});var vr=V((Ft,gr)=>{"use strict";gr.exports=(e,r)=>{r=r||process.argv;let a=e.startsWith("-")?"":e.length===1?"-":"--",i=r.indexOf(a+e),t=r.indexOf("--");return i!==-1&&(t===-1?!0:i<t)}});var dr=V((Lt,pr)=>{"use strict";var et=me("os"),J=vr(),U=process.env,se;J("no-color")||J("no-colors")||J("color=false")?se=!1:(J("color")||J("colors")||J("color=true")||J("color=always"))&&(se=!0);"FORCE_COLOR"in U&&(se=U.FORCE_COLOR.length===0||parseInt(U.FORCE_COLOR,10)!==0);function rt(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function tt(e){if(se===!1)return 0;if(J("color=16m")||J("color=full")||J("color=truecolor"))return 3;if(J("color=256"))return 2;if(e&&!e.isTTY&&se!==!0)return 0;let r=se?1:0;if(process.platform==="win32"){let a=et.release().split(".");return Number(process.versions.node.split(".")[0])>=8&&Number(a[0])>=10&&Number(a[2])>=10586?Number(a[2])>=14931?3:2:1}if("CI"in U)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(a=>a in U)||U.CI_NAME==="codeship"?1:r;if("TEAMCITY_VERSION"in U)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(U.TEAMCITY_VERSION)?1:0;if(U.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in U){let a=parseInt((U.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(U.TERM_PROGRAM){case"iTerm.app":return a>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(U.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(U.TERM)||"COLORTERM"in U?1:(U.TERM==="dumb",r)}function Ge(e){let r=tt(e);return rt(r)}pr.exports={supportsColor:Ge,stdout:Ge(process.stdout),stderr:Ge(process.stderr)}});var wr=V((Ot,Rr)=>{"use strict";var nt=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,br=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,at=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,it=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,st=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a","\x07"]]);function mr(e){return e[0]==="u"&&e.length===5||e[0]==="x"&&e.length===3?String.fromCharCode(parseInt(e.slice(1),16)):st.get(e)||e}function lt(e,r){let a=[],i=r.trim().split(/\s*,\s*/g),t;for(let u of i)if(!isNaN(u))a.push(Number(u));else if(t=u.match(at))a.push(t[2].replace(it,(c,y,g)=>y?mr(y):g));else throw new Error(`Invalid Chalk template style argument: ${u} (in style '${e}')`);return a}function ot(e){br.lastIndex=0;let r=[],a;for(;(a=br.exec(e))!==null;){let i=a[1];if(a[2]){let t=lt(i,a[2]);r.push([i].concat(t))}else r.push([i])}return r}function yr(e,r){let a={};for(let t of r)for(let u of t.styles)a[u[0]]=t.inverse?null:u.slice(1);let i=e;for(let t of Object.keys(a))if(Array.isArray(a[t])){if(!(t in i))throw new Error(`Unknown Chalk style: ${t}`);a[t].length>0?i=i[t].apply(i,a[t]):i=i[t]}return i}Rr.exports=(e,r)=>{let a=[],i=[],t=[];if(r.replace(nt,(u,c,y,g,F,q)=>{if(c)t.push(mr(c));else if(g){let _=t.join("");t=[],i.push(a.length===0?_:yr(e,a)(_)),a.push({inverse:y,styles:ot(g)})}else if(F){if(a.length===0)throw new Error("Found extraneous } in Chalk template literal");i.push(yr(e,a)(t.join(""))),t=[],a.pop()}else t.push(q)}),i.push(t.join("")),a.length>0){let u=`Chalk template literal is missing ${a.length} closing bracket${a.length===1?"":"s"} (\`}\`)`;throw new Error(u)}return i.join("")}});var Ar=V((Ct,ge)=>{"use strict";var ze=er(),D=cr(),De=dr().stdout,ut=wr(),_r=process.platform==="win32"&&!(process.env.TERM||"").toLowerCase().startsWith("xterm"),xr=["ansi","ansi","ansi256","ansi16m"],kr=new Set(["gray"]),le=Object.create(null);function Sr(e,r){r=r||{};let a=De?De.level:0;e.level=r.level===void 0?a:r.level,e.enabled="enabled"in r?r.enabled:e.level>0}function ce(e){if(!this||!(this instanceof ce)||this.template){let r={};return Sr(r,e),r.template=function(){let a=[].slice.call(arguments);return ct.apply(null,[r.template].concat(a))},Object.setPrototypeOf(r,ce.prototype),Object.setPrototypeOf(r.template,r),r.template.constructor=ce,r.template}Sr(this,e)}_r&&(D.blue.open="[94m");for(let e of Object.keys(D))D[e].closeRe=new RegExp(ze(D[e].close),"g"),le[e]={get(){let r=D[e];return Ae.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}};le.visible={get(){return Ae.call(this,this._styles||[],!0,"visible")}};D.color.closeRe=new RegExp(ze(D.color.close),"g");for(let e of Object.keys(D.color.ansi))kr.has(e)||(le[e]={get(){let r=this.level;return function(){let i={open:D.color[xr[r]][e].apply(null,arguments),close:D.color.close,closeRe:D.color.closeRe};return Ae.call(this,this._styles?this._styles.concat(i):[i],this._empty,e)}}});D.bgColor.closeRe=new RegExp(ze(D.bgColor.close),"g");for(let e of Object.keys(D.bgColor.ansi)){if(kr.has(e))continue;let r="bg"+e[0].toUpperCase()+e.slice(1);le[r]={get(){let a=this.level;return function(){let t={open:D.bgColor[xr[a]][e].apply(null,arguments),close:D.bgColor.close,closeRe:D.bgColor.closeRe};return Ae.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}}}var ft=Object.defineProperties(()=>{},le);function Ae(e,r,a){let i=function(){return ht.apply(i,arguments)};i._styles=e,i._empty=r;let t=this;return Object.defineProperty(i,"level",{enumerable:!0,get(){return t.level},set(u){t.level=u}}),Object.defineProperty(i,"enabled",{enumerable:!0,get(){return t.enabled},set(u){t.enabled=u}}),i.hasGrey=this.hasGrey||a==="gray"||a==="grey",i.__proto__=ft,i}function ht(){let e=arguments,r=e.length,a=String(arguments[0]);if(r===0)return"";if(r>1)for(let t=1;t<r;t++)a+=" "+e[t];if(!this.enabled||this.level<=0||!a)return this._empty?"":a;let i=D.dim.open;_r&&this.hasGrey&&(D.dim.open="");for(let t of this._styles.slice().reverse())a=t.open+a.replace(t.closeRe,t.open)+t.close,a=a.replace(/\r?\n/g,`${t.close}$&${t.open}`);return D.dim.open=i,a}function ct(e,r){if(!Array.isArray(r))return[].slice.call(arguments,1).join(" ");let a=[].slice.call(arguments,2),i=[r.raw[0]];for(let t=1;t<r.length;t++)i.push(String(a[t-1]).replace(/[{}\\]/g,"\\$&")),i.push(String(r.raw[t]));return ut(e,i.join(""))}Object.defineProperties(ce.prototype,le);ge.exports=ce();ge.exports.supportsColor=De;ge.exports.default=ge.exports});var Mr=V((It,Me)=>{(function(e){var r=/^\s+/,a=/\s+$/,i=0,t=e.round,u=e.min,c=e.max,y=e.random;function g(n,o){if(n=n||"",o=o||{},n instanceof g)return n;if(!(this instanceof g))return new g(n,o);var s=F(n);this._originalInput=n,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=t(100*this._a)/100,this._format=o.format||s.format,this._gradientType=o.gradientType,this._r<1&&(this._r=t(this._r)),this._g<1&&(this._g=t(this._g)),this._b<1&&(this._b=t(this._b)),this._ok=s.ok,this._tc_id=i++}g.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},getLuminance:function(){var n=this.toRgb(),o,s,b,w,x,j;return o=n.r/255,s=n.g/255,b=n.b/255,o<=.03928?w=o/12.92:w=e.pow((o+.055)/1.055,2.4),s<=.03928?x=s/12.92:x=e.pow((s+.055)/1.055,2.4),b<=.03928?j=b/12.92:j=e.pow((b+.055)/1.055,2.4),.2126*w+.7152*x+.0722*j},setAlpha:function(n){return this._a=fe(n),this._roundA=t(100*this._a)/100,this},toHsv:function(){var n=I(this._r,this._g,this._b);return{h:n.h*360,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=I(this._r,this._g,this._b),o=t(n.h*360),s=t(n.s*100),b=t(n.v*100);return this._a==1?"hsv("+o+", "+s+"%, "+b+"%)":"hsva("+o+", "+s+"%, "+b+"%, "+this._roundA+")"},toHsl:function(){var n=_(this._r,this._g,this._b);return{h:n.h*360,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=_(this._r,this._g,this._b),o=t(n.h*360),s=t(n.s*100),b=t(n.l*100);return this._a==1?"hsl("+o+", "+s+"%, "+b+"%)":"hsla("+o+", "+s+"%, "+b+"%, "+this._roundA+")"},toHex:function(n){return A(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return O(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:t(this._r),g:t(this._g),b:t(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+t(this._r)+", "+t(this._g)+", "+t(this._b)+")":"rgba("+t(this._r)+", "+t(this._g)+", "+t(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:t(B(this._r,255)*100)+"%",g:t(B(this._g,255)*100)+"%",b:t(B(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+t(B(this._r,255)*100)+"%, "+t(B(this._g,255)*100)+"%, "+t(B(this._b,255)*100)+"%)":"rgba("+t(B(this._r,255)*100)+"%, "+t(B(this._g,255)*100)+"%, "+t(B(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Te[A(this._r,this._g,this._b,!0)]||!1},toFilter:function(n){var o="#"+$(this._r,this._g,this._b,this._a),s=o,b=this._gradientType?"GradientType = 1, ":"";if(n){var w=g(n);s="#"+$(w._r,w._g,w._b,w._a)}return"progid:DXImageTransform.Microsoft.gradient("+b+"startColorstr="+o+",endColorstr="+s+")"},toString:function(n){var o=!!n;n=n||this._format;var s=!1,b=this._a<1&&this._a>=0,w=!o&&b&&(n==="hex"||n==="hex6"||n==="hex3"||n==="hex4"||n==="hex8"||n==="name");return w?n==="name"&&this._a===0?this.toName():this.toRgbString():(n==="rgb"&&(s=this.toRgbString()),n==="prgb"&&(s=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(s=this.toHexString()),n==="hex3"&&(s=this.toHexString(!0)),n==="hex4"&&(s=this.toHex8String(!0)),n==="hex8"&&(s=this.toHex8String()),n==="name"&&(s=this.toName()),n==="hsl"&&(s=this.toHslString()),n==="hsv"&&(s=this.toHsvString()),s||this.toHexString())},clone:function(){return g(this.toString())},_applyModification:function(n,o){var s=n.apply(null,[this].concat([].slice.call(o)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(K,arguments)},brighten:function(){return this._applyModification(Le,arguments)},darken:function(){return this._applyModification(be,arguments)},desaturate:function(){return this._applyModification(N,arguments)},saturate:function(){return this._applyModification(z,arguments)},greyscale:function(){return this._applyModification(G,arguments)},spin:function(){return this._applyModification(Oe,arguments)},_applyCombination:function(n,o){return n.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(Ie,arguments)},complement:function(){return this._applyCombination(Ce,arguments)},monochromatic:function(){return this._applyCombination(Be,arguments)},splitcomplement:function(){return this._applyCombination(Q,arguments)},triad:function(){return this._applyCombination(oe,arguments)},tetrad:function(){return this._applyCombination(ee,arguments)}},g.fromRatio=function(n,o){if(typeof n=="object"){var s={};for(var b in n)n.hasOwnProperty(b)&&(b==="a"?s[b]=n[b]:s[b]=p(n[b]));n=s}return g(n,o)};function F(n){var o={r:0,g:0,b:0},s=1,b=null,w=null,x=null,j=!1,P=!1;return typeof n=="string"&&(n=M(n)),typeof n=="object"&&(m(n.r)&&m(n.g)&&m(n.b)?(o=q(n.r,n.g,n.b),j=!0,P=String(n.r).substr(-1)==="%"?"prgb":"rgb"):m(n.h)&&m(n.s)&&m(n.v)?(b=p(n.s),w=p(n.v),o=L(n.h,b,w),j=!0,P="hsv"):m(n.h)&&m(n.s)&&m(n.l)&&(b=p(n.s),x=p(n.l),o=E(n.h,b,x),j=!0,P="hsl"),n.hasOwnProperty("a")&&(s=n.a)),s=fe(s),{ok:j,format:n.format||P,r:u(255,c(o.r,0)),g:u(255,c(o.g,0)),b:u(255,c(o.b,0)),a:s}}function q(n,o,s){return{r:B(n,255)*255,g:B(o,255)*255,b:B(s,255)*255}}function _(n,o,s){n=B(n,255),o=B(o,255),s=B(s,255);var b=c(n,o,s),w=u(n,o,s),x,j,P=(b+w)/2;if(b==w)x=j=0;else{var C=b-w;switch(j=P>.5?C/(2-b-w):C/(b+w),b){case n:x=(o-s)/C+(o<s?6:0);break;case o:x=(s-n)/C+2;break;case s:x=(n-o)/C+4;break}x/=6}return{h:x,s:j,l:P}}function E(n,o,s){var b,w,x;n=B(n,360),o=B(o,100),s=B(s,100);function j(T,Z,X){return X<0&&(X+=1),X>1&&(X-=1),X<1/6?T+(Z-T)*6*X:X<1/2?Z:X<2/3?T+(Z-T)*(2/3-X)*6:T}if(o===0)b=w=x=s;else{var P=s<.5?s*(1+o):s+o-s*o,C=2*s-P;b=j(C,P,n+1/3),w=j(C,P,n),x=j(C,P,n-1/3)}return{r:b*255,g:w*255,b:x*255}}function I(n,o,s){n=B(n,255),o=B(o,255),s=B(s,255);var b=c(n,o,s),w=u(n,o,s),x,j,P=b,C=b-w;if(j=b===0?0:C/b,b==w)x=0;else{switch(b){case n:x=(o-s)/C+(o<s?6:0);break;case o:x=(s-n)/C+2;break;case s:x=(n-o)/C+4;break}x/=6}return{h:x,s:j,v:P}}function L(n,o,s){n=B(n,360)*6,o=B(o,100),s=B(s,100);var b=e.floor(n),w=n-b,x=s*(1-o),j=s*(1-w*o),P=s*(1-(1-w)*o),C=b%6,T=[s,j,x,x,P,s][C],Z=[P,s,s,j,x,x][C],X=[x,x,P,s,s,j][C];return{r:T*255,g:Z*255,b:X*255}}function A(n,o,s,b){var w=[h(t(n).toString(16)),h(t(o).toString(16)),h(t(s).toString(16))];return b&&w[0].charAt(0)==w[0].charAt(1)&&w[1].charAt(0)==w[1].charAt(1)&&w[2].charAt(0)==w[2].charAt(1)?w[0].charAt(0)+w[1].charAt(0)+w[2].charAt(0):w.join("")}function O(n,o,s,b,w){var x=[h(t(n).toString(16)),h(t(o).toString(16)),h(t(s).toString(16)),h(d(b))];return w&&x[0].charAt(0)==x[0].charAt(1)&&x[1].charAt(0)==x[1].charAt(1)&&x[2].charAt(0)==x[2].charAt(1)&&x[3].charAt(0)==x[3].charAt(1)?x[0].charAt(0)+x[1].charAt(0)+x[2].charAt(0)+x[3].charAt(0):x.join("")}function $(n,o,s,b){var w=[h(d(b)),h(t(n).toString(16)),h(t(o).toString(16)),h(t(s).toString(16))];return w.join("")}g.equals=function(n,o){return!n||!o?!1:g(n).toRgbString()==g(o).toRgbString()},g.random=function(){return g.fromRatio({r:y(),g:y(),b:y()})};function N(n,o){o=o===0?0:o||10;var s=g(n).toHsl();return s.s-=o/100,s.s=te(s.s),g(s)}function z(n,o){o=o===0?0:o||10;var s=g(n).toHsl();return s.s+=o/100,s.s=te(s.s),g(s)}function G(n){return g(n).desaturate(100)}function K(n,o){o=o===0?0:o||10;var s=g(n).toHsl();return s.l+=o/100,s.l=te(s.l),g(s)}function Le(n,o){o=o===0?0:o||10;var s=g(n).toRgb();return s.r=c(0,u(255,s.r-t(255*-(o/100)))),s.g=c(0,u(255,s.g-t(255*-(o/100)))),s.b=c(0,u(255,s.b-t(255*-(o/100)))),g(s)}function be(n,o){o=o===0?0:o||10;var s=g(n).toHsl();return s.l-=o/100,s.l=te(s.l),g(s)}function Oe(n,o){var s=g(n).toHsl(),b=(s.h+o)%360;return s.h=b<0?360+b:b,g(s)}function Ce(n){var o=g(n).toHsl();return o.h=(o.h+180)%360,g(o)}function oe(n){var o=g(n).toHsl(),s=o.h;return[g(n),g({h:(s+120)%360,s:o.s,l:o.l}),g({h:(s+240)%360,s:o.s,l:o.l})]}function ee(n){var o=g(n).toHsl(),s=o.h;return[g(n),g({h:(s+90)%360,s:o.s,l:o.l}),g({h:(s+180)%360,s:o.s,l:o.l}),g({h:(s+270)%360,s:o.s,l:o.l})]}function Q(n){var o=g(n).toHsl(),s=o.h;return[g(n),g({h:(s+72)%360,s:o.s,l:o.l}),g({h:(s+216)%360,s:o.s,l:o.l})]}function Ie(n,o,s){o=o||6,s=s||30;var b=g(n).toHsl(),w=360/s,x=[g(n)];for(b.h=(b.h-(w*o>>1)+720)%360;--o;)b.h=(b.h+w)%360,x.push(g(b));return x}function Be(n,o){o=o||6;for(var s=g(n).toHsv(),b=s.h,w=s.s,x=s.v,j=[],P=1/o;o--;)j.push(g({h:b,s:w,v:x})),x=(x+P)%1;return j}g.mix=function(n,o,s){s=s===0?0:s||50;var b=g(n).toRgb(),w=g(o).toRgb(),x=s/100,j={r:(w.r-b.r)*x+b.r,g:(w.g-b.g)*x+b.g,b:(w.b-b.b)*x+b.b,a:(w.a-b.a)*x+b.a};return g(j)},g.readability=function(n,o){var s=g(n),b=g(o);return(e.max(s.getLuminance(),b.getLuminance())+.05)/(e.min(s.getLuminance(),b.getLuminance())+.05)},g.isReadable=function(n,o,s){var b=g.readability(n,o),w,x;switch(x=!1,w=H(s),w.level+w.size){case"AAsmall":case"AAAlarge":x=b>=4.5;break;case"AAlarge":x=b>=3;break;case"AAAsmall":x=b>=7;break}return x},g.mostReadable=function(n,o,s){var b=null,w=0,x,j,P,C;s=s||{},j=s.includeFallbackColors,P=s.level,C=s.size;for(var T=0;T<o.length;T++)x=g.readability(n,o[T]),x>w&&(w=x,b=g(o[T]));return g.isReadable(n,b,{level:P,size:C})||!j?b:(s.includeFallbackColors=!1,g.mostReadable(n,["#fff","#000"],s))};var ue=g.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Te=g.hexNames=re(ue);function re(n){var o={};for(var s in n)n.hasOwnProperty(s)&&(o[n[s]]=s);return o}function fe(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function B(n,o){v(n)&&(n="100%");var s=l(n);return n=u(o,c(0,parseFloat(n))),s&&(n=parseInt(n*o,10)/100),e.abs(n-o)<1e-6?1:n%o/parseFloat(o)}function te(n){return u(1,c(0,n))}function f(n){return parseInt(n,16)}function v(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function l(n){return typeof n=="string"&&n.indexOf("%")!=-1}function h(n){return n.length==1?"0"+n:""+n}function p(n){return n<=1&&(n=n*100+"%"),n}function d(n){return e.round(parseFloat(n)*255).toString(16)}function k(n){return f(n)/255}var R=function(){var n="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",s="(?:"+o+")|(?:"+n+")",b="[\\s|\\(]+("+s+")[,|\\s]+("+s+")[,|\\s]+("+s+")\\s*\\)?",w="[\\s|\\(]+("+s+")[,|\\s]+("+s+")[,|\\s]+("+s+")[,|\\s]+("+s+")\\s*\\)?";return{CSS_UNIT:new RegExp(s),rgb:new RegExp("rgb"+b),rgba:new RegExp("rgba"+w),hsl:new RegExp("hsl"+b),hsla:new RegExp("hsla"+w),hsv:new RegExp("hsv"+b),hsva:new RegExp("hsva"+w),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function m(n){return!!R.CSS_UNIT.exec(n)}function M(n){n=n.replace(r,"").replace(a,"").toLowerCase();var o=!1;if(ue[n])n=ue[n],o=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var s;return(s=R.rgb.exec(n))?{r:s[1],g:s[2],b:s[3]}:(s=R.rgba.exec(n))?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=R.hsl.exec(n))?{h:s[1],s:s[2],l:s[3]}:(s=R.hsla.exec(n))?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=R.hsv.exec(n))?{h:s[1],s:s[2],v:s[3]}:(s=R.hsva.exec(n))?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=R.hex8.exec(n))?{r:f(s[1]),g:f(s[2]),b:f(s[3]),a:k(s[4]),format:o?"name":"hex8"}:(s=R.hex6.exec(n))?{r:f(s[1]),g:f(s[2]),b:f(s[3]),format:o?"name":"hex"}:(s=R.hex4.exec(n))?{r:f(s[1]+""+s[1]),g:f(s[2]+""+s[2]),b:f(s[3]+""+s[3]),a:k(s[4]+""+s[4]),format:o?"name":"hex8"}:(s=R.hex3.exec(n))?{r:f(s[1]+""+s[1]),g:f(s[2]+""+s[2]),b:f(s[3]+""+s[3]),format:o?"name":"hex"}:!1}function H(n){var o,s;return n=n||{level:"AA",size:"small"},o=(n.level||"AA").toUpperCase(),s=(n.size||"small").toLowerCase(),o!=="AA"&&o!=="AAA"&&(o="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:o,size:s}}typeof Me!="undefined"&&Me.exports?Me.exports=g:typeof define=="function"&&define.amd?define(function(){return g}):window.tinycolor=g})(Math)});var Fr=V((Er,Ee)=>{(function(e,r){typeof Ee!="undefined"&&Ee.exports?Ee.exports=r(Mr()):typeof define=="function"&&define.amd?define(["tinycolor2"],r):e.tinygradient=r(e.tinycolor)})(Er,function(e){"use strict";var r={r:256,g:256,b:256,a:1},a={h:360,s:1,v:1,a:1};function i(_,E,I){var L={};for(var A in _)_.hasOwnProperty(A)&&(L[A]=I===0?0:(E[A]-_[A])/I);return L}function t(_,E,I,L){var A={};for(var O in E)E.hasOwnProperty(O)&&(A[O]=_[O]*I+E[O],A[O]=A[O]<0?A[O]+L[O]:L[O]!==1?A[O]%L[O]:A[O]);return A}function u(_,E,I){for(var L=_.color.toRgb(),A=E.color.toRgb(),O=[_.color],$=i(L,A,I),N,z=1;z<I;z++)N=t($,L,z,r),O.push(e(N));return O}function c(_,E,I,L){var A=_.color.toHsv(),O=E.color.toHsv(),$=[_.color],N=i(A,O,I),z,G;A.h<=O.h&&!L||A.h>=O.h&&L?z=O.h-A.h:L?z=360-O.h+A.h:z=360-A.h+O.h,N.h=Math.pow(-1,L?1:0)*Math.abs(z)/I;for(var K=1;K<I;K++)G=t(N,A,K,a),$.push(e(G));return $}function y(_,E){var I=_.length;if(E=parseInt(E),isNaN(E)||E<2)throw new Error("Invalid number of steps (< 2)");if(E<I)throw new Error("Number of steps cannot be inferior to number of stops");for(var L=[],A=1;A<I;A++){var O=(E-1)*(_[A].pos-_[A-1].pos);L.push(Math.max(1,Math.round(O)))}for(var $=1,N=I-1;N--;)$+=L[N];for(;$!==E;)if($<E){var z=Math.min.apply(null,L);L[L.indexOf(z)]++,$++}else{var G=Math.max.apply(null,L);L[L.indexOf(G)]--,$--}return L}function g(_,E,I,L){if(E<0||E>1)throw new Error("Position must be between 0 and 1");for(var A,O,$=0,N=_.length;$<N-1;$++)if(E>=_[$].pos&&E<_[$+1].pos){A=_[$],O=_[$+1];break}A||(A=O=_[_.length-1]);var z=i(A.color[I](),O.color[I](),(O.pos-A.pos)*100),G=t(z,A.color[I](),Math.round((E-A.pos)*100),L);return e(G)}var F=function(_){if(arguments.length===1){if(!(arguments[0]instanceof Array))throw new Error('"stops" is not an array');_=arguments[0]}else _=Array.prototype.slice.call(arguments);if(!(this instanceof F))return new F(_);if(_.length<2)throw new Error("Invalid number of stops (< 2)");var E=_[0].pos!==void 0,I=_.length,L=-1;this.stops=_.map(function(A,O){var $=A.pos!==void 0;if(E^$)throw new Error("Cannot mix positionned and not posionned color stops");if($){if(A={color:e(A.color),pos:A.pos},A.pos<0||A.pos>1)throw new Error("Color stops positions must be between 0 and 1");if(A.pos<=L)throw new Error("Color stops positions are not ordered");L=A.pos}else A={color:e(A),pos:O/(I-1)};return A}),this.stops[0].pos!==0&&this.stops.unshift({color:this.stops[0].color,pos:0}),this.stops[this.stops.length-1].pos!==1&&this.stops.push({color:this.stops[this.stops.length-1].color,pos:1})};F.prototype.reverse=function(){var _=[];return this.stops.forEach(function(E){_.push({color:E.color,pos:1-E.pos})}),new F(_.reverse())},F.prototype.rgb=function(_){for(var E=y(this.stops,_),I=[],L=0,A=this.stops.length;L<A-1;L++)I=I.concat(u(this.stops[L],this.stops[L+1],E[L]));return I.push(this.stops[A-1].color),I},F.prototype.hsv=function(_,E){for(var I=y(this.stops,_),L=E===!0,A=typeof E=="string",O=[],$,N,z,G=0,K=this.stops.length;G<K-1;G++)$=this.stops[G].color.toHsv(),N=this.stops[G+1].color.toHsv(),A&&(z=$.h<N.h&&N.h-$.h<180||$.h>N.h&&$.h-N.h>180),$.s===0||N.s===0?O=O.concat(u(this.stops[G],this.stops[G+1],I[G])):O=O.concat(c(this.stops[G],this.stops[G+1],I[G],E==="long"&&z||E==="short"&&!z||!A&&L));return O.push(this.stops[K-1].color),O},F.prototype.css=function(_,E){_=_||"linear",E=E||(_==="linear"?"to right":"ellipse at center");var I=_+"-gradient("+E;return this.stops.forEach(function(L){I+=", "+L.color.toRgbString()+" "+L.pos*100+"%"}),I+=")",I},F.prototype.rgbAt=function(_){return g(this.stops,_,"toRgb",r)},F.prototype.hsvAt=function(_){return g(this.stops,_,"toHsv",a)};var q={rgb:1,hsv:2,css:2,rgbAt:1,hsvAt:1};return Object.keys(q).forEach(function(_){F[_]=function(){var E=Array.prototype.slice.call(arguments),I=E.splice(-q[_]),L=new F(E);return L[_].apply(L,I)}}),F})});var Br=V((Bt,Fe)=>{"use strict";var Lr=Ar(),gt=Fr(),Or=/\s/g;function Ue(...e){let r=gt.apply(this,e),a=(i,t)=>vt(i?i.toString():"",r,t);return a.multiline=(i,t)=>pt(i?i.toString():"",r,t),a}var Cr=(e,r,a)=>r.interpolation.toLowerCase()==="hsv"?e.hsv(a,r.hsvSpin.toLowerCase()):e.rgb(a);function vt(e,r,a){let i=Ir(a),t=Math.max(e.replace(Or,"").length,r.stops.length),u=Cr(r,i,t),c="";for(let y of e)c+=y.match(Or)?y:Lr.hex(u.shift().toHex())(y);return c}function pt(e,r,a){let i=Ir(a),t=e.split(`
`),u=Math.max.apply(null,t.map(g=>g.length).concat([r.stops.length])),c=Cr(r,i,u),y=[];for(let g of t){let F=c.slice(0),q="";for(let _ of g)q+=Lr.hex(F.shift().toHex())(_);y.push(q)}return y.join(`
`)}function Ir(e){let r=Object.assign({interpolation:"rgb",hsvSpin:"short"},e);if(e!==void 0&&typeof e!="object")throw new TypeError(`Expected \`options\` to be an \`object\`, got \`${typeof e}\``);if(typeof r.interpolation!="string")throw new TypeError(`Expected \`options.interpolation\` to be a \`string\`, got \`${typeof r.interpolation}\``);if(r.interpolation.toLowerCase()==="hsv"&&typeof r.hsvSpin!="string")throw new TypeError(`Expected \`options.hsvSpin\` to be a \`string\`, got \`${typeof r.hsvSpin}\``);return r}var ve={atlas:{colors:["#feac5e","#c779d0","#4bc0c8"],options:{}},cristal:{colors:["#bdfff3","#4ac29a"],options:{}},teen:{colors:["#77a1d3","#79cbca","#e684ae"],options:{}},mind:{colors:["#473b7b","#3584a7","#30d2be"],options:{}},morning:{colors:["#ff5f6d","#ffc371"],options:{interpolation:"hsv"}},vice:{colors:["#5ee7df","#b490ca"],options:{interpolation:"hsv"}},passion:{colors:["#f43b47","#453a94"],options:{}},fruit:{colors:["#ff4e50","#f9d423"],options:{}},instagram:{colors:["#833ab4","#fd1d1d","#fcb045"],options:{}},retro:{colors:["#3f51b1","#5a55ae","#7b5fac","#8f6aae","#a86aa4","#cc6b8e","#f18271","#f3a469","#f7c978"],options:{}},summer:{colors:["#fdbb2d","#22c1c3"],options:{}},rainbow:{colors:["#ff0000","#ff0100"],options:{interpolation:"hsv",hsvSpin:"long"}},pastel:{colors:["#74ebd5","#74ecd5"],options:{interpolation:"hsv",hsvSpin:"long"}}};Fe.exports=Ue;for(let e in ve)Fe.exports[e]=r=>new Ue(ve[e].colors)(r,ve[e].options),Fe.exports[e].multiline=r=>new Ue(ve[e].colors).multiline(r,ve[e].options)});var mt={};qr(mt,{default:()=>bt});var pe=je(me("clipanion")),Ve=je(Ke());var Ze=`flf2a$ 7 7 13 0 7 0 64 0
Font Author: ?

More Info:

https://web.archive.org/web/20120819044459/http://www.roysac.com/thedrawfonts-tdf.asp

FIGFont created with: http://patorjk.com/figfont-editor
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
\u2588\u2588\u2557@
\u2588\u2588\u2551@
\u2588\u2588\u2551@
\u255A\u2550\u255D@
\u2588\u2588\u2557@
\u255A\u2550\u255D@
   @@
@
@
@
@
@
@
@@
 \u2588\u2588\u2557 \u2588\u2588\u2557 @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2588\u2588\u2554\u2550\u2588\u2588\u2554\u255D@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2588\u2588\u2554\u2550\u2588\u2588\u2554\u255D@
 \u255A\u2550\u255D \u255A\u2550\u255D @
         @@
\u2584\u2584\u2588\u2588\u2588\u2584\u2584\xB7@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u255A\u2550\u2580\u2580\u2580\u2550\u2550\u255D@
        @@
\u2588\u2588\u2557 \u2588\u2588\u2557@
\u255A\u2550\u255D\u2588\u2588\u2554\u255D@
  \u2588\u2588\u2554\u255D @
 \u2588\u2588\u2554\u255D  @
\u2588\u2588\u2554\u255D\u2588\u2588\u2557@
\u255A\u2550\u255D \u255A\u2550\u255D@
       @@
   \u2588\u2588\u2557   @
   \u2588\u2588\u2551   @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2588\u2588\u2554\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2588\u2551  @
\u255A\u2550\u2550\u2550\u2550\u2550\u255D  @
         @@
@
@
@
@
@
@
@@
 \u2588\u2588\u2557@
\u2588\u2588\u2554\u255D@
\u2588\u2588\u2551 @
\u2588\u2588\u2551 @
\u255A\u2588\u2588\u2557@
 \u255A\u2550\u255D@
    @@
\u2588\u2588\u2557 @
\u255A\u2588\u2588\u2557@
 \u2588\u2588\u2551@
 \u2588\u2588\u2551@
\u2588\u2588\u2554\u255D@
\u255A\u2550\u255D @
    @@
      @
\u2584 \u2588\u2588\u2557\u2584@
 \u2588\u2588\u2588\u2588\u2557@
\u2580\u255A\u2588\u2588\u2554\u2580@
  \u255A\u2550\u255D @
      @
      @@
@
@
@
@
@
@
@@
   @
   @
   @
   @
\u2584\u2588\u2557@
\u255A\u2550\u255D@
   @@
      @
      @
\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u255D@
      @
      @
      @@
   @
   @
   @
   @
\u2588\u2588\u2557@
\u255A\u2550\u255D@
   @@
    \u2588\u2588\u2557@
   \u2588\u2588\u2554\u255D@
  \u2588\u2588\u2554\u255D @
 \u2588\u2588\u2554\u255D  @
\u2588\u2588\u2554\u255D   @
\u255A\u2550\u255D    @
       @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
 \u2588\u2588\u2557@
\u2588\u2588\u2588\u2551@
\u255A\u2588\u2588\u2551@
 \u2588\u2588\u2551@
 \u2588\u2588\u2551@
 \u255A\u2550\u255D@
    @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2557@
 \u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2550\u255D @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2557@
 \u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u255A\u2550\u2550\u2550\u2550\u2550\u255D @
        @@
\u2588\u2588\u2557  \u2588\u2588\u2557@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551@
     \u2588\u2588\u2551@
     \u255A\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551@
    \u2588\u2588\u2554\u255D@
   \u2588\u2588\u2554\u255D @
   \u2588\u2588\u2551  @
   \u255A\u2550\u255D  @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u255D @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
 \u255A\u2550\u2550\u2550\u2588\u2588\u2551@
 \u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u255D @
        @@
   @
\u2588\u2588\u2557@
\u255A\u2550\u255D@
\u2588\u2588\u2557@
\u255A\u2550\u255D@
   @
   @@
   @
\u2588\u2588\u2557@
\u255A\u2550\u255D@
\u2584\u2588\u2557@
\u2580\u2550\u255D@
   @
   @@
  \u2588\u2588\u2557@
 \u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u255D @
\u255A\u2588\u2588\u2557 @
 \u255A\u2588\u2588\u2557@
  \u255A\u2550\u255D@
     @@
@
@
@
@
@
@
@@
\u2588\u2588\u2557  @
\u255A\u2588\u2588\u2557 @
 \u255A\u2588\u2588\u2557@
 \u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u255D @
\u255A\u2550\u255D  @
     @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2557@
  \u2584\u2588\u2588\u2588\u2554\u255D@
  \u2580\u2580\u2550\u2550\u255D @
  \u2588\u2588\u2557   @
  \u255A\u2550\u255D   @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551\u2588\u2588\u2557\u2588\u2588\u2551@
\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551@
\u255A\u2588\u2551\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u255D\u255A\u2550\u2550\u2550\u255D @
         @@
 \u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u255A\u2550\u2550\u2550\u2550\u2550\u255D @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2551     @
\u2588\u2588\u2551     @
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u255A\u2550\u2550\u2550\u2550\u2550\u255D @
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2557  @
\u2588\u2588\u2554\u2550\u2550\u255D  @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2557  @
\u2588\u2588\u2554\u2550\u2550\u255D  @
\u2588\u2588\u2551     @
\u255A\u2550\u255D     @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D @
\u2588\u2588\u2551  \u2588\u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
\u2588\u2588\u2557  \u2588\u2588\u2557@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2557@
\u2588\u2588\u2551@
\u2588\u2588\u2551@
\u2588\u2588\u2551@
\u2588\u2588\u2551@
\u255A\u2550\u255D@
   @@
     \u2588\u2588\u2557@
     \u2588\u2588\u2551@
     \u2588\u2588\u2551@
\u2588\u2588   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u255D @
        @@
\u2588\u2588\u2557  \u2588\u2588\u2557@
\u2588\u2588\u2551 \u2588\u2588\u2554\u255D@
\u2588\u2588\u2588\u2588\u2588\u2554\u255D @
\u2588\u2588\u2554\u2550\u2588\u2588\u2557 @
\u2588\u2588\u2551  \u2588\u2588\u2557@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2557     @
\u2588\u2588\u2551     @
\u2588\u2588\u2551     @
\u2588\u2588\u2551     @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551@
\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551@
\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551@
\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551@
\u255A\u2550\u255D     \u255A\u2550\u255D@
           @@
\u2588\u2588\u2588\u2557   \u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551@
\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551@
\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551@
\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D@
          @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2550\u255D @
\u2588\u2588\u2551     @
\u255A\u2550\u255D     @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551\u2584\u2584 \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2580\u2580\u2550\u255D @
         @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D@
   \u2588\u2588\u2551   @
   \u2588\u2588\u2551   @
   \u2588\u2588\u2551   @
   \u255A\u2550\u255D   @
         @@
\u2588\u2588\u2557   \u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
\u2588\u2588\u2557   \u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D@
 \u255A\u2588\u2588\u2588\u2588\u2554\u255D @
  \u255A\u2550\u2550\u2550\u255D  @
         @@
\u2588\u2588\u2557    \u2588\u2588\u2557@
\u2588\u2588\u2551    \u2588\u2588\u2551@
\u2588\u2588\u2551 \u2588\u2557 \u2588\u2588\u2551@
\u2588\u2588\u2551\u2588\u2588\u2588\u2557\u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2554\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u255D\u255A\u2550\u2550\u255D @
          @@
\u2588\u2588\u2557  \u2588\u2588\u2557@
\u255A\u2588\u2588\u2557\u2588\u2588\u2554\u255D@
 \u255A\u2588\u2588\u2588\u2554\u255D @
 \u2588\u2588\u2554\u2588\u2588\u2557 @
\u2588\u2588\u2554\u255D \u2588\u2588\u2557@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2557   \u2588\u2588\u2557@
\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D@
 \u255A\u2588\u2588\u2588\u2588\u2554\u255D @
  \u255A\u2588\u2588\u2554\u255D  @
   \u2588\u2588\u2551   @
   \u255A\u2550\u255D   @
         @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2588\u2588\u2588\u2554\u255D@
  \u2588\u2588\u2588\u2554\u255D @
 \u2588\u2588\u2588\u2554\u255D  @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u255D@
\u2588\u2588\u2551 @
\u2588\u2588\u2551 @
\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u255D@
    @@
@
@
@
@
@
@
@@
\u2588\u2588\u2588\u2557@
\u255A\u2588\u2588\u2551@
 \u2588\u2588\u2551@
 \u2588\u2588\u2551@
\u2588\u2588\u2588\u2551@
\u255A\u2550\u2550\u255D@
    @@
 \u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2588\u2588\u2557@
\u255A\u2550\u255D\u255A\u2550\u255D@
      @
      @
      @
      @@
        @
        @
        @
        @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
@
@
@
@
@
@
@@
 \u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u255A\u2550\u2550\u2550\u2550\u2550\u255D @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2551     @
\u2588\u2588\u2551     @
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u255A\u2550\u2550\u2550\u2550\u2550\u255D @
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2557  @
\u2588\u2588\u2554\u2550\u2550\u255D  @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2557  @
\u2588\u2588\u2554\u2550\u2550\u255D  @
\u2588\u2588\u2551     @
\u255A\u2550\u255D     @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D @
\u2588\u2588\u2551  \u2588\u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
\u2588\u2588\u2557  \u2588\u2588\u2557@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2557@
\u2588\u2588\u2551@
\u2588\u2588\u2551@
\u2588\u2588\u2551@
\u2588\u2588\u2551@
\u255A\u2550\u255D@
   @@
     \u2588\u2588\u2557@
     \u2588\u2588\u2551@
     \u2588\u2588\u2551@
\u2588\u2588   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u255D @
        @@
\u2588\u2588\u2557  \u2588\u2588\u2557@
\u2588\u2588\u2551 \u2588\u2588\u2554\u255D@
\u2588\u2588\u2588\u2588\u2588\u2554\u255D @
\u2588\u2588\u2554\u2550\u2588\u2588\u2557 @
\u2588\u2588\u2551  \u2588\u2588\u2557@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2557     @
\u2588\u2588\u2551     @
\u2588\u2588\u2551     @
\u2588\u2588\u2551     @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551@
\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551@
\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551@
\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551@
\u255A\u2550\u255D     \u255A\u2550\u255D@
           @@
\u2588\u2588\u2588\u2557   \u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551@
\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551@
\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551@
\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D@
          @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2550\u255D @
\u2588\u2588\u2551     @
\u255A\u2550\u255D     @
        @@
 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551\u2584\u2584 \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2580\u2580\u2550\u255D @
         @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2557 @
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557@
\u2588\u2588\u2551  \u2588\u2588\u2551@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D@
   \u2588\u2588\u2551   @
   \u2588\u2588\u2551   @
   \u2588\u2588\u2551   @
   \u255A\u2550\u255D   @
         @@
\u2588\u2588\u2557   \u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u2550\u2550\u2550\u255D @
         @@
\u2588\u2588\u2557   \u2588\u2588\u2557@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u2588\u2588\u2551   \u2588\u2588\u2551@
\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D@
 \u255A\u2588\u2588\u2588\u2588\u2554\u255D @
  \u255A\u2550\u2550\u2550\u255D  @
         @@
\u2588\u2588\u2557    \u2588\u2588\u2557@
\u2588\u2588\u2551    \u2588\u2588\u2551@
\u2588\u2588\u2551 \u2588\u2557 \u2588\u2588\u2551@
\u2588\u2588\u2551\u2588\u2588\u2588\u2557\u2588\u2588\u2551@
\u255A\u2588\u2588\u2588\u2554\u2588\u2588\u2588\u2554\u255D@
 \u255A\u2550\u2550\u255D\u255A\u2550\u2550\u255D @
          @@
\u2588\u2588\u2557  \u2588\u2588\u2557@
\u255A\u2588\u2588\u2557\u2588\u2588\u2554\u255D@
 \u255A\u2588\u2588\u2588\u2554\u255D @
 \u2588\u2588\u2554\u2588\u2588\u2557 @
\u2588\u2588\u2554\u255D \u2588\u2588\u2557@
\u255A\u2550\u255D  \u255A\u2550\u255D@
        @@
\u2588\u2588\u2557   \u2588\u2588\u2557@
\u255A\u2588\u2588\u2557 \u2588\u2588\u2554\u255D@
 \u255A\u2588\u2588\u2588\u2588\u2554\u255D @
  \u255A\u2588\u2588\u2554\u255D  @
   \u2588\u2588\u2551   @
   \u255A\u2550\u255D   @
         @@
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2588\u2588\u2588\u2554\u255D@
  \u2588\u2588\u2588\u2554\u255D @
 \u2588\u2588\u2588\u2554\u255D  @
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557@
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D@
        @@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@`;var Tr=je(Br());Ve.default.parseFont("ANSI Shadow",Ze);var de=class extends pe.Command{async execute(){let r=Ve.default.textSync(this.text,{font:"ANSI Shadow",width:80});this.context.stdout.write(`

`),this.context.stdout.write(Tr.default.instagram(r)),this.context.stdout.write(`

`)}};Pe([pe.Command.String({required:!0})],de.prototype,"text",2),Pe([pe.Command.Path("banner")],de.prototype,"execute",1);de.usage=pe.Command.Usage({description:"Showing logo",details:"This command will print big logo",examples:[["Show logo to the user","yarn banner <text>"]]});var dt={commands:[de]},bt=dt;return mt;})();
/*!
 * TinyGradient 0.4.3
 * Copyright 2014-2018 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
return plugin;
}
};
