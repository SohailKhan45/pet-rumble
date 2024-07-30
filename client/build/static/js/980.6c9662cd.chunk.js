/*! For license information please see 980.6c9662cd.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[980],{1803:(t,e,n)=>{n.d(e,{Xe:()=>k});var o,i=n(5043),s=Object.defineProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))a.call(e,n)&&h(t,n,e[n]);if(r)for(var n of r(e))l.call(e,n)&&h(t,n,e[n]);return t},u=(t,e)=>{var n={};for(var o in t)a.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&r)for(var o of r(t))e.indexOf(o)<0&&l.call(t,o)&&(n[o]=t[o]);return n};(t=>{const e=class{constructor(t,n,o,i){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=4*t+17;let r=[];for(let e=0;e<this.size;e++)r.push(!1);for(let e=0;e<this.size;e++)this.modules.push(r.slice()),this.isFunction.push(r.slice());this.drawFunctionPatterns();const a=this.addEccAndInterleave(o);if(this.drawCodewords(a),-1==i){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);const n=this.getPenaltyScore();n<t&&(i=e,t=n),this.applyMask(e)}}s(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(n,o){const i=t.QrSegment.makeSegments(n);return e.encodeSegments(i,o)}static encodeBinary(n,o){const i=t.QrSegment.makeBytes(n);return e.encodeSegments([i],o)}static encodeSegments(t,n){let i,r,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,u=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(e.MIN_VERSION<=l&&l<=h&&h<=e.MAX_VERSION)||c<-1||c>7)throw new RangeError("Invalid value");for(i=l;;i++){const o=8*e.getNumDataCodewords(i,n),s=a.getTotalBits(t,i);if(s<=o){r=s;break}if(i>=h)throw new RangeError("Data too long")}for(const o of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])u&&r<=8*e.getNumDataCodewords(i,o)&&(n=o);let d=[];for(const e of t){o(e.mode.modeBits,4,d),o(e.numChars,e.mode.numCharCountBits(i),d);for(const t of e.getData())d.push(t)}s(d.length==r);const f=8*e.getNumDataCodewords(i,n);s(d.length<=f),o(0,Math.min(4,f-d.length),d),o(0,(8-d.length%8)%8,d),s(d.length%8==0);for(let e=236;d.length<f;e^=253)o(e,8,d);let p=[];for(;8*p.length<d.length;)p.push(0);return d.forEach(((t,e)=>p[e>>>3]|=t<<7-(7&e))),new e(i,n,p,c)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let o=0;o<e;o++)0==n&&0==o||0==n&&o==e-1||n==e-1&&0==o||this.drawAlignmentPattern(t[n],t[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let i=0;i<10;i++)n=n<<1^1335*(n>>>9);const o=21522^(e<<10|n);s(o>>>15==0);for(let s=0;s<=5;s++)this.setFunctionModule(8,s,i(o,s));this.setFunctionModule(8,7,i(o,6)),this.setFunctionModule(8,8,i(o,7)),this.setFunctionModule(7,8,i(o,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,i(o,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,i(o,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,i(o,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;s(e>>>18==0);for(let n=0;n<18;n++){const t=i(e,n),o=this.size-11+n%3,s=Math.floor(n/3);this.setFunctionModule(o,s,t),this.setFunctionModule(s,o,t)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let o=-4;o<=4;o++){const i=Math.max(Math.abs(o),Math.abs(n)),s=t+o,r=e+n;0<=s&&s<this.size&&0<=r&&r<this.size&&this.setFunctionModule(s,r,2!=i&&4!=i)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)this.setFunctionModule(t+o,e+n,1!=Math.max(Math.abs(o),Math.abs(n)))}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const n=this.version,o=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(n,o))throw new RangeError("Invalid argument");const i=e.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][n],r=e.ECC_CODEWORDS_PER_BLOCK[o.ordinal][n],a=Math.floor(e.getNumRawDataModules(n)/8),l=i-a%i,h=Math.floor(a/i);let c=[];const u=e.reedSolomonComputeDivisor(r);for(let s=0,f=0;s<i;s++){let n=t.slice(f,f+h-r+(s<l?0:1));f+=n.length;const o=e.reedSolomonComputeRemainder(n,u);s<l&&n.push(0),c.push(n.concat(o))}let d=[];for(let e=0;e<c[0].length;e++)c.forEach(((t,n)=>{(e!=h-r||n>=l)&&d.push(t[e])}));return s(d.length==a),d}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let e=this.size-1;e>=1;e-=2){6==e&&(e=5);for(let o=0;o<this.size;o++)for(let s=0;s<2;s++){const r=e-s,a=0==(e+1&2)?this.size-1-o:o;!this.isFunction[a][r]&&n<8*t.length&&(this.modules[a][r]=i(t[n>>>3],7-(7&n)),n++)}}s(n==8*t.length)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let o;switch(t){case 0:o=(n+e)%2==0;break;case 1:o=e%2==0;break;case 2:o=n%3==0;break;case 3:o=(n+e)%3==0;break;case 4:o=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:o=n*e%2+n*e%3==0;break;case 6:o=(n*e%2+n*e%3)%2==0;break;case 7:o=((n+e)%2+n*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][n]&&o&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let s=0;s<this.size;s++){let n=!1,o=0,i=[0,0,0,0,0,0,0];for(let r=0;r<this.size;r++)this.modules[s][r]==n?(o++,5==o?t+=e.PENALTY_N1:o>5&&t++):(this.finderPenaltyAddHistory(o,i),n||(t+=this.finderPenaltyCountPatterns(i)*e.PENALTY_N3),n=this.modules[s][r],o=1);t+=this.finderPenaltyTerminateAndCount(n,o,i)*e.PENALTY_N3}for(let s=0;s<this.size;s++){let n=!1,o=0,i=[0,0,0,0,0,0,0];for(let r=0;r<this.size;r++)this.modules[r][s]==n?(o++,5==o?t+=e.PENALTY_N1:o>5&&t++):(this.finderPenaltyAddHistory(o,i),n||(t+=this.finderPenaltyCountPatterns(i)*e.PENALTY_N3),n=this.modules[r][s],o=1);t+=this.finderPenaltyTerminateAndCount(n,o,i)*e.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let n=0;n<this.size-1;n++){const o=this.modules[s][n];o==this.modules[s][n+1]&&o==this.modules[s+1][n]&&o==this.modules[s+1][n+1]&&(t+=e.PENALTY_N2)}let n=0;for(const e of this.modules)n=e.reduce(((t,e)=>t+(e?1:0)),n);const o=this.size*this.size,i=Math.ceil(Math.abs(20*n-10*o)/o)-1;return s(0<=i&&i<=9),t+=i*e.PENALTY_N4,s(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(1==this.version)return[];{const t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2));let n=[6];for(let o=this.size-7;n.length<t;o-=e)n.splice(1,0,o);return n}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;n-=(25*e-10)*e-55,t>=7&&(n-=36)}return s(208<=n&&n<=29648),n}static getNumDataCodewords(t,n){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let n=[];for(let e=0;e<t-1;e++)n.push(0);n.push(1);let o=1;for(let i=0;i<t;i++){for(let t=0;t<n.length;t++)n[t]=e.reedSolomonMultiply(n[t],o),t+1<n.length&&(n[t]^=n[t+1]);o=e.reedSolomonMultiply(o,2)}return n}static reedSolomonComputeRemainder(t,n){let o=n.map((t=>0));for(const i of t){const t=i^o.shift();o.push(0),n.forEach(((n,i)=>o[i]^=e.reedSolomonMultiply(n,t)))}return o}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let o=7;o>=0;o--)n=n<<1^285*(n>>>7),n^=(e>>>o&1)*t;return s(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];s(e<=3*this.size);const n=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)}};let n=e;function o(t,e,n){if(e<0||e>31||t>>>e!=0)throw new RangeError("Value out of range");for(let o=e-1;o>=0;o--)n.push(t>>>o&1)}function i(t,e){return 0!=(t>>>e&1)}function s(t){if(!t)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;const r=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)o(n,8,e);return new r(r.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!r.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let n=0;n<t.length;){const i=Math.min(t.length-n,3);o(parseInt(t.substr(n,i),10),3*i+1,e),n+=i}return new r(r.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!r.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e,n=[];for(e=0;e+2<=t.length;e+=2){let i=45*r.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));i+=r.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),o(i,11,n)}return e<t.length&&o(r.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,n),new r(r.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:r.isNumeric(t)?[r.makeNumeric(t)]:r.isAlphanumeric(t)?[r.makeAlphanumeric(t)]:[r.makeBytes(r.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)o(t,8,e);else if(t<16384)o(2,2,e),o(t,14,e);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");o(6,3,e),o(t,21,e)}return new r(r.Mode.ECI,0,e)}static isNumeric(t){return r.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return r.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const o of t){const t=o.mode.numCharCountBits(e);if(o.numChars>=1<<t)return 1/0;n+=4+t+o.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)"%"!=t.charAt(n)?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let a=r;a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=a})(o||(o={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.ordinal=t,this.formatBits=e}};let n=e;n.LOW=new e(0,1),n.MEDIUM=new e(1,0),n.QUARTILE=new e(2,3),n.HIGH=new e(3,2),t.Ecc=n})(e=t.QrCode||(t.QrCode={}))})(o||(o={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.modeBits=t,this.numBitsCharCount=e}numCharCountBits(t){return this.numBitsCharCount[Math.floor((t+7)/17)]}};let n=e;n.NUMERIC=new e(1,[10,12,14]),n.ALPHANUMERIC=new e(2,[9,11,13]),n.BYTE=new e(4,[8,16,16]),n.KANJI=new e(8,[8,10,12]),n.ECI=new e(7,[0,0,0]),t.Mode=n})(e=t.QrSegment||(t.QrSegment={}))})(o||(o={}));var d=o,f={L:d.QrCode.Ecc.LOW,M:d.QrCode.Ecc.MEDIUM,Q:d.QrCode.Ecc.QUARTILE,H:d.QrCode.Ecc.HIGH},p=128,m="L",g="#FFFFFF",w="#000000",E=!1,M=4,v=.1;function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=[];return t.forEach((function(t,o){let i=null;t.forEach((function(s,r){if(!s&&null!==i)return n.push("M".concat(i+e," ").concat(o+e,"h").concat(r-i,"v1H").concat(i+e,"z")),void(i=null);if(r!==t.length-1)s&&null===i&&(i=r);else{if(!s)return;null===i?n.push("M".concat(r+e,",").concat(o+e," h1v1H").concat(r+e,"z")):n.push("M".concat(i+e,",").concat(o+e," h").concat(r+1-i,"v1H").concat(i+e,"z"))}}))})),n.join("")}function C(t,e){return t.slice().map(((t,n)=>n<e.y||n>=e.y+e.h?t:t.map(((t,n)=>(n<e.x||n>=e.x+e.w)&&t))))}function b(t,e,n,o){if(null==o)return null;const i=n?M:0,s=t.length+2*i,r=Math.floor(e*v),a=s/e,l=(o.width||r)*a,h=(o.height||r)*a,c=null==o.x?t.length/2-l/2:o.x*a,u=null==o.y?t.length/2-h/2:o.y*a;let d=null;if(o.excavate){let t=Math.floor(c),e=Math.floor(u);d={x:t,y:e,w:Math.ceil(l+c-t),h:Math.ceil(h+u-e)}}return{x:c,y:u,h:h,w:l,excavation:d}}var R=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function k(t){const e=t,{value:n,size:o=p,level:s=m,bgColor:r=g,fgColor:a=w,includeMargin:l=E,style:h,imageSettings:v}=e,k=u(e,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),N=null==v?void 0:v.src,A=(0,i.useRef)(null),S=(0,i.useRef)(null),[I,P]=(0,i.useState)(!1);(0,i.useEffect)((()=>{if(null!=A.current){const t=A.current,e=t.getContext("2d");if(!e)return;let i=d.QrCode.encodeText(n,f[s]).getModules();const h=l?M:0,c=i.length+2*h,u=b(i,o,l,v),p=S.current,m=null!=u&&null!==p&&p.complete&&0!==p.naturalHeight&&0!==p.naturalWidth;m&&null!=u.excavation&&(i=C(i,u.excavation));const g=window.devicePixelRatio||1;t.height=t.width=o*g;const w=o/c*g;e.scale(w,w),e.fillStyle=r,e.fillRect(0,0,c,c),e.fillStyle=a,R?e.fill(new Path2D(y(i,h))):i.forEach((function(t,n){t.forEach((function(t,o){t&&e.fillRect(o+h,n+h,1,1)}))})),m&&e.drawImage(p,u.x+h,u.y+h,u.w,u.h)}})),(0,i.useEffect)((()=>{P(!1)}),[N]);const L=c({height:o,width:o},h);let O=null;return null!=N&&(O=i.createElement("img",{src:N,key:N,style:{display:"none"},onLoad:()=>{P(!0)},ref:S})),i.createElement(i.Fragment,null,i.createElement("canvas",c({style:L,height:o,width:o,ref:A},k)),O)}},2285:(t,e,n)=>{n.d(e,{yXR:()=>i});var o=n(6688);function i(t){return(0,o.k5)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.00098 20V14C4.00098 9.58172 7.5827 6 12.001 6C16.4193 6 20.001 9.58172 20.001 14V20H21.001V22H3.00098V20H4.00098ZM6.00098 14H8.00098C8.00098 11.7909 9.79184 10 12.001 10V8C8.68727 8 6.00098 10.6863 6.00098 14ZM11.001 2H13.001V5H11.001V2ZM19.7792 4.80761L21.1934 6.22183L19.0721 8.34315L17.6578 6.92893L19.7792 4.80761ZM2.80859 6.22183L4.22281 4.80761L6.34413 6.92893L4.92991 8.34315L2.80859 6.22183Z"}}]})(t)}},4163:(t,e,n)=>{n.d(e,{RXm:()=>i});var o=n(6688);function i(t){return(0,o.k5)({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"}}]})(t)}},8968:(t,e,n)=>{n.d(e,{A:()=>h});var o=n(5043);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i.apply(this,arguments)}var s=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),r=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function l(t,e,n,o,i){return function(t,e,n,o,i){var s=(t-n)/(e-n);if(0===s)return o;if(1===s)return i;for(var r="#",a=1;a<6;a+=2){var l=parseInt(o.substr(a,2),16),h=parseInt(i.substr(a,2),16),c=Math.round((1-s)*l+s*h).toString(16);1===c.length&&(c="0"+c),r+=c}return r}(t,e,n,a(o),a(i))}var h=function(t){function e(e){t.call(this,e);var n=e.height,o=e.width,i=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,o=e.h,i=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,i));s!==o&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,n=e.h,o=e.N,i=e.B,s=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-i;(!o||a<250||s&&n<=r||!s&&n>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.m=function(t){this.L(t.touches[0].clientX)},e.prototype.M=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,s=t.className,r=t.offColor,a=t.onColor,h=t.offHandleColor,c=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,f=t.checkedHandleIcon,p=t.uncheckedHandleIcon,m=t.boxShadow,g=t.activeBoxShadow,w=t.height,E=t.width,M=t.borderRadius,v=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),y=this.state,C=y.h,b=y.N,R=y.j,k={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:w/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},N={height:w,width:E,margin:Math.max(0,(this.t-w)/2),position:"relative",background:l(C,this.i,this.o,r,a),borderRadius:"number"==typeof M?M:w/2,cursor:n?"default":"pointer",WebkitTransition:b?null:"background 0.25s",MozTransition:b?null:"background 0.25s",transition:b?null:"background 0.25s"},A={height:w,width:Math.min(1.5*w,E-(this.t+w)/2+1),position:"relative",opacity:(C-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"},S={height:w,width:Math.min(1.5*w,E-(this.t+w)/2+1),position:"absolute",opacity:1-(C-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:l(C,this.i,this.o,h,c),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof M?M-1:"50%",position:"absolute",transform:"translateX("+C+"px)",top:Math.max(0,(w-this.t)/2),outline:0,boxShadow:R?g:m,border:0,WebkitTransition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:b?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},P={height:this.t,width:this.t,opacity:Math.max(2*(1-(C-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"},L={height:this.t,width:this.t,opacity:Math.max(2*((C-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:b?null:"opacity 0.25s",MozTransition:b?null:"opacity 0.25s",transition:b?null:"opacity 0.25s"};return o.createElement("div",{className:s,style:k},o.createElement("div",{className:"react-switch-bg",style:N,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&o.createElement("div",{style:A},u),d&&o.createElement("div",{style:S},d)),o.createElement("div",{className:"react-switch-handle",style:I,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.m,onTouchEnd:n?null:this.M,onTouchCancel:n?null:this.O},p&&o.createElement("div",{style:P},p),f&&o.createElement("div",{style:L},f)),o.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:r,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56}}}]);
//# sourceMappingURL=980.6c9662cd.chunk.js.map