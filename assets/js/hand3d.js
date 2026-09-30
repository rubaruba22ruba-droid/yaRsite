(()=>{var bl=0,hA=1,Cl=2;var ur=1,Co=2,xs=3,In=0,Gt=1,Yt=2,Bn=0,Ps=1,uA=2,dA=3,fA=4,Dl=5;var Di=100,Il=101,Bl=102,Rl=103,Ll=104,Ul=200,Nl=201,Fl=202,Ol=203,pA=204,mA=205,zl=206,kl=207,Ql=208,Gl=209,Vl=210,Hl=211,Wl=212,jl=213,Yl=214,no=0,io=1,so=2,$i=3,ro=4,oo=5,ao=6,Ao=7,gA=0,Xl=1,ql=2,xn=0,xA=1,PA=2,MA=3,dr=4,vA=5,yA=6,wA=7,$a="attached",Kl="detached",_A=300,di=301,Ii=302,Ms=303,Do=304,fr=306,Tn=1e3,an=1001,es=1002,vt=1003,Io=1004;var Bi=1005;var yt=1006,vs=1007;var Pn=1008;var Xt=1009,EA=1010,TA=1011,ys=1012,Bo=1013,Mn=1014,en=1015,vn=1016,Ro=1017,Lo=1018,ws=1020,SA=35902,bA=35899,CA=1021,DA=1022,tn=1023,Sn=1026,fi=1027,Uo=1028,No=1029,pi=1030,Fo=1031;var Oo=1033,pr=33776,mr=33777,gr=33778,xr=33779,zo=35840,ko=35841,Qo=35842,Go=35843,Vo=36196,Ho=37492,Wo=37496,jo=37488,Yo=37489,Pr=37490,Xo=37491,qo=37808,Ko=37809,Jo=37810,Zo=37811,$o=37812,ea=37813,ta=37814,na=37815,ia=37816,sa=37817,ra=37818,oa=37819,aa=37820,Aa=37821,ca=36492,la=36494,ha=36495,ua=36283,da=36284,Mr=36285,fa=36286;var _i=2300,Ei=2301,$r=2302,eA=2303,tA=2400,nA=2401,iA=2402,Jl=2500;var IA=0,vr=1,_s=2,Zl=3200;var pa=0,$l=1,Jn="",gt="srgb",kt="srgb-linear",Qs="linear",rt="srgb";var eo=7680;var eh=519,th=512,nh=513,ih=514,ma=515,sh=516,rh=517,ga=518,oh=519,BA=35044;var RA="300 es",pn=2e3,ts=2001;function au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Au(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ah(){let i=ns("canvas");return i.style.display="block",i}var Wc={},is=null;function Gs(...i){let e="THREE."+i.shift();is?is("log",e,...i):console.log(e,...i)}function Ah(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Ah(i);let e="THREE."+i.shift();if(is)is("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ze(...i){i=Ah(i);let e="THREE."+i.shift();if(is)is("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wi(...i){let e=i.join(" ");e in Wc||(Wc[e]=!0,De(...i))}function ch(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lh={[no]:io,[so]:ao,[ro]:Ao,[$i]:oo,[io]:no,[ao]:so,[Ao]:ro,[oo]:$i},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=1234567,zs=Math.PI/180,Ti=180/Math.PI;function mn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function LA(i,e){return(i%e+e)%e}function cu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lu(i,e,t){return i!==e?(t-i)/(e-i):0}function ks(i,e,t){return(1-t)*i+t*e}function hu(i,e,t,n){return ks(i,e,1-Math.exp(-t*n))}function uu(i,e=1){return e-Math.abs(LA(i,e*2)-e)}function du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mu(i,e){return i+Math.random()*(e-i)}function gu(i){return i*(.5-Math.random())}function xu(i){i!==void 0&&(jc=i);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pu(i){return i*zs}function Mu(i){return i*Ti}function vu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _u(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),A=r((e+n)/2),l=o((e+n)/2),u=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*l,c*u,c*h,a*A);break;case"YZY":i.set(c*h,a*l,c*u,a*A);break;case"ZXZ":i.set(c*u,c*h,a*l,a*A);break;case"XZX":i.set(a*l,c*g,c*d,a*A);break;case"YXY":i.set(c*d,a*l,c*g,a*A);break;case"ZYZ":i.set(c*g,c*d,a*l,a*A);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var UA={DEG2RAD:zs,RAD2DEG:Ti,generateUUID:mn,clamp:$e,euclideanModulo:LA,mapLinear:cu,inverseLerp:lu,lerp:ks,damp:hu,pingpong:uu,smoothstep:du,smootherstep:fu,randInt:pu,randFloat:mu,randFloatSpread:gu,seededRandom:xu,degToRad:Pu,radToDeg:Mu,isPowerOfTwo:vu,ceilPowerOfTwo:yu,floorPowerOfTwo:wu,setQuaternionFromProperEuler:_u,normalize:ot,denormalize:fn},kA=class kA{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kA.prototype.isVector2=!0;var He=kA,Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],A=n[s+1],l=n[s+2],u=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||c!==h||A!==d||l!==g){let p=c*h+A*d+l*g+u*v;p<0&&(h=-h,d=-d,g=-g,v=-v,p=-p);let f=1-a;if(p<.9995){let E=Math.acos(p),b=Math.sin(E);f=Math.sin(f*E)/b,a=Math.sin(a*E)/b,c=c*f+h*a,A=A*f+d*a,l=l*f+g*a,u=u*f+v*a}else{c=c*f+h*a,A=A*f+d*a,l=l*f+g*a,u=u*f+v*a;let E=1/Math.sqrt(c*c+A*A+l*l+u*u);c*=E,A*=E,l*=E,u*=E}}e[t]=c,e[t+1]=A,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],A=n[s+2],l=n[s+3],u=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+l*u+c*d-A*h,e[t+1]=c*g+l*h+A*u-a*d,e[t+2]=A*g+l*d+a*h-c*u,e[t+3]=l*g-a*u-c*h-A*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,A=a(n/2),l=a(s/2),u=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*l*u+A*d*g,this._y=A*d*u-h*l*g,this._z=A*l*g+h*d*u,this._w=A*l*u-h*d*g;break;case"YXZ":this._x=h*l*u+A*d*g,this._y=A*d*u-h*l*g,this._z=A*l*g-h*d*u,this._w=A*l*u+h*d*g;break;case"ZXY":this._x=h*l*u-A*d*g,this._y=A*d*u+h*l*g,this._z=A*l*g+h*d*u,this._w=A*l*u-h*d*g;break;case"ZYX":this._x=h*l*u-A*d*g,this._y=A*d*u+h*l*g,this._z=A*l*g-h*d*u,this._w=A*l*u+h*d*g;break;case"YZX":this._x=h*l*u+A*d*g,this._y=A*d*u+h*l*g,this._z=A*l*g-h*d*u,this._w=A*l*u-h*d*g;break;case"XZY":this._x=h*l*u-A*d*g,this._y=A*d*u-h*l*g,this._z=A*l*g+h*d*u,this._w=A*l*u+h*d*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],A=t[2],l=t[6],u=t[10],h=n+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-A)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(l-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+A)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-A)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+l)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+A)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,A=t._z,l=t._w;return this._x=n*l+o*a+s*A-r*c,this._y=s*l+o*c+r*a-n*A,this._z=r*l+o*A+n*c-s*a,this._w=o*l-n*a-s*c-r*A,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let A=Math.acos(a),l=Math.sin(A);c=Math.sin(c*A)/l,t=Math.sin(t*A)/l,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},QA=class QA{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,A=2*(o*s-a*n),l=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*A+o*u-a*l,this.y=n+c*l+a*A-r*u,this.z=s+c*u+r*l-o*A,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};QA.prototype.isVector3=!0;var U=QA,Ca=new U,Yc=new Qt,GA=class GA{constructor(e,t,n,s,r,o,a,c,A){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,A)}set(e,t,n,s,r,o,a,c,A){let l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],A=n[1],l=n[4],u=n[7],h=n[2],d=n[5],g=n[8],v=s[0],p=s[3],f=s[6],E=s[1],b=s[4],M=s[7],y=s[2],w=s[5],S=s[8];return r[0]=o*v+a*E+c*y,r[3]=o*p+a*b+c*w,r[6]=o*f+a*M+c*S,r[1]=A*v+l*E+u*y,r[4]=A*p+l*b+u*w,r[7]=A*f+l*M+u*S,r[2]=h*v+d*E+g*y,r[5]=h*p+d*b+g*w,r[8]=h*f+d*M+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],A=e[7],l=e[8];return t*o*l-t*a*A-n*r*l+n*a*c+s*r*A-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],A=e[7],l=e[8],u=l*o-a*A,h=a*c-l*r,d=A*r-o*c,g=t*u+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*A-l*n)*v,e[2]=(a*n-s*o)*v,e[3]=h*v,e[4]=(l*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*c-A*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),A=Math.sin(r);return this.set(n*c,n*A,-n*(c*o+A*a)+o+e,-s*A,s*c,-s*(-A*o+c*a)+a+t,0,0,1),this}scale(e,t){return wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Da.makeScale(e,t)),this}rotate(e){return wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};GA.prototype.isMatrix3=!0;var ke=GA,Da=new ke,Xc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eu(){let i={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[kt]:{primaries:e,whitePoint:n,transfer:Qs,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}var Xe=Eu();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Oi,co=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oi===void 0&&(Oi=ns("canvas")),Oi.width=e.width,Oi.height=e.height;let s=Oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tu=0,ss=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ia(s[o].image)):r.push(Ia(s[o]))}else r=Ia(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ia(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Su=0,Ba=new U,bt=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=an,s=an,r=yt,o=Pn,a=tn,c=Xt,A=i.DEFAULT_ANISOTROPY,l=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=mn(),this.name="",this.source=new ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=A,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_A)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=_A;bt.DEFAULT_ANISOTROPY=1;var VA=class VA{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,A=c[0],l=c[4],u=c[8],h=c[1],d=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(l-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(A+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(A+1)/2,M=(d+1)/2,y=(f+1)/2,w=(l+h)/4,S=(u+v)/4,x=(g+p)/4;return b>M&&b>y?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=S/n):M>y?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=S/r,s=x/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(h-l)*(h-l));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-v)/E,this.z=(h-l)/E,this.w=Math.acos((A+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};VA.prototype.isVector4=!0;var at=VA,lo=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new bt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ss(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends lo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vs=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ho=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bo=class bo{constructor(e,t,n,s,r,o,a,c,A,l,u,h,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,A,l,u,h,d,g,v,p)}set(e,t,n,s,r,o,a,c,A,l,u,h,d,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=A,f[6]=l,f[10]=u,f[14]=h,f[3]=d,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),A=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=o*l,d=o*u,g=a*l,v=a*u;t[0]=c*l,t[4]=-c*u,t[8]=A,t[1]=d+g*A,t[5]=h-v*A,t[9]=-a*c,t[2]=v-h*A,t[6]=g+d*A,t[10]=o*c}else if(e.order==="YXZ"){let h=c*l,d=c*u,g=A*l,v=A*u;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*A,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*l,d=c*u,g=A*l,v=A*u;t[0]=h-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*l,t[9]=v-h*a,t[2]=-o*A,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*l,d=o*u,g=a*l,v=a*u;t[0]=c*l,t[4]=g*A-d,t[8]=h*A+v,t[1]=c*u,t[5]=v*A+h,t[9]=d*A-g,t[2]=-A,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,d=o*A,g=a*c,v=a*A;t[0]=c*l,t[4]=v-h*u,t[8]=g*u+d,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-A*l,t[6]=d*u+g,t[10]=h-v*u}else if(e.order==="XZY"){let h=o*c,d=o*A,g=a*c,v=a*A;t[0]=c*l,t[4]=-u,t[8]=A*l,t[1]=h*u+v,t[5]=o*l,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*l,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bu,e,Cu)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ni.crossVectors(n,qt),ni.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ni.crossVectors(n,qt)),ni.normalize(),br.crossVectors(qt,ni),s[0]=ni.x,s[4]=br.x,s[8]=qt.x,s[1]=ni.y,s[5]=br.y,s[9]=qt.y,s[2]=ni.z,s[6]=br.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],A=n[12],l=n[1],u=n[5],h=n[9],d=n[13],g=n[2],v=n[6],p=n[10],f=n[14],E=n[3],b=n[7],M=n[11],y=n[15],w=s[0],S=s[4],x=s[8],_=s[12],D=s[1],L=s[5],F=s[9],k=s[13],B=s[2],Q=s[6],Y=s[10],G=s[14],se=s[3],X=s[7],ee=s[11],J=s[15];return r[0]=o*w+a*D+c*B+A*se,r[4]=o*S+a*L+c*Q+A*X,r[8]=o*x+a*F+c*Y+A*ee,r[12]=o*_+a*k+c*G+A*J,r[1]=l*w+u*D+h*B+d*se,r[5]=l*S+u*L+h*Q+d*X,r[9]=l*x+u*F+h*Y+d*ee,r[13]=l*_+u*k+h*G+d*J,r[2]=g*w+v*D+p*B+f*se,r[6]=g*S+v*L+p*Q+f*X,r[10]=g*x+v*F+p*Y+f*ee,r[14]=g*_+v*k+p*G+f*J,r[3]=E*w+b*D+M*B+y*se,r[7]=E*S+b*L+M*Q+y*X,r[11]=E*x+b*F+M*Y+y*ee,r[15]=E*_+b*k+M*G+y*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],A=e[13],l=e[2],u=e[6],h=e[10],d=e[14],g=e[3],v=e[7],p=e[11],f=e[15],E=c*d-A*h,b=a*d-A*u,M=a*h-c*u,y=o*d-A*l,w=o*h-c*l,S=o*u-a*l;return t*(v*E-p*b+f*M)-n*(g*E-p*y+f*w)+s*(g*b-v*y+f*S)-r*(g*M-v*w+p*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],A=e[6],l=e[10];return t*(o*l-a*A)-n*(r*l-a*c)+s*(r*A-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],A=e[7],l=e[8],u=e[9],h=e[10],d=e[11],g=e[12],v=e[13],p=e[14],f=e[15],E=t*a-n*o,b=t*c-s*o,M=t*A-r*o,y=n*c-s*a,w=n*A-r*a,S=s*A-r*c,x=l*v-u*g,_=l*p-h*g,D=l*f-d*g,L=u*p-h*v,F=u*f-d*v,k=h*f-d*p,B=E*k-b*F+M*L+y*D-w*_+S*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/B;return e[0]=(a*k-c*F+A*L)*Q,e[1]=(s*F-n*k-r*L)*Q,e[2]=(v*S-p*w+f*y)*Q,e[3]=(h*w-u*S-d*y)*Q,e[4]=(c*D-o*k-A*_)*Q,e[5]=(t*k-s*D+r*_)*Q,e[6]=(p*M-g*S-f*b)*Q,e[7]=(l*S-h*M+d*b)*Q,e[8]=(o*F-a*D+A*x)*Q,e[9]=(n*D-t*F-r*x)*Q,e[10]=(g*w-v*M+f*E)*Q,e[11]=(u*M-l*w-d*E)*Q,e[12]=(a*_-o*L-c*x)*Q,e[13]=(t*L-n*_+s*x)*Q,e[14]=(v*b-g*y-p*E)*Q,e[15]=(l*y-u*b+h*E)*Q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,A=r*o,l=r*a;return this.set(A*o+n,A*a-s*c,A*c+s*a,0,A*a+s*c,l*a+n,l*c-s*o,0,A*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,A=r+r,l=o+o,u=a+a,h=r*A,d=r*l,g=r*u,v=o*l,p=o*u,f=a*u,E=c*A,b=c*l,M=c*u,y=n.x,w=n.y,S=n.z;return s[0]=(1-(v+f))*y,s[1]=(d+M)*y,s[2]=(g-b)*y,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(h+f))*w,s[6]=(p+E)*w,s[7]=0,s[8]=(g+b)*S,s[9]=(p-E)*S,s[10]=(1-(h+v))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),c=zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ln.copy(this);let A=1/o,l=1/a,u=1/c;return ln.elements[0]*=A,ln.elements[1]*=A,ln.elements[2]*=A,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=pn,c=!1){let A=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===pn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ts)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return A[0]=l,A[4]=0,A[8]=h,A[12]=0,A[1]=0,A[5]=u,A[9]=d,A[13]=0,A[2]=0,A[6]=0,A[10]=g,A[14]=v,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pn,c=!1){let A=this.elements,l=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===pn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ts)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return A[0]=l,A[4]=0,A[8]=0,A[12]=h,A[1]=0,A[5]=u,A[9]=0,A[13]=d,A[2]=0,A[6]=0,A[10]=g,A[14]=v,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bo.prototype.isMatrix4=!0;var Qe=bo,zi=new U,ln=new Qe,bu=new U(0,0,0),Cu=new U(1,1,1),ni=new U,br=new U,qt=new U,Kc=new Qe,Jc=new Qt,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],A=s[5],l=s[9],u=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,A),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,A)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,A)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,A));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,A),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,A),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Du=0,Zc=new U,ki=new Qt,Nn=new Qe,Cr=new U,Is=new U,Iu=new U,Bu=new Qt,$c=new U(1,0,0),el=new U(0,1,0),tl=new U(0,0,1),nl={type:"added"},Ru={type:"removed"},Qi={type:"childadded",child:null},Ra={type:"childremoved",child:null},mt=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Vn,n=new Qt,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ke}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(el,e)}rotateZ(e){return this.rotateOnAxis(tl,e)}translateOnAxis(e,t){return Zc.copy(e).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(el,e)}translateZ(e){return this.translateOnAxis(tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Is,Cr,this.up):Nn.lookAt(Cr,Is,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Nn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let A=0,l=c.length;A<l;A++){let u=c[A];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,A=this.material.length;c<A;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),A=o(e.textures),l=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),A.length>0&&(n.textures=A),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let A in a){let l=a[A];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lu={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,A=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(A&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),f=this._getHandJoint(A,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let l=A.joints["index-finger-tip"],u=A.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=.02,g=.005;A.inputState.pinching&&h>d+g?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!A.inputState.pinching&&h<=d-g&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),A!==null&&(A.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=LA(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=La(o,r,e+1/3),this.g=La(o,r,e),this.b=La(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Xe.workingToColorSpace(Nt.copy(this),e),Math.round($e(Nt.r*255,0,255))*65536+Math.round($e(Nt.g*255,0,255))*256+Math.round($e(Nt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Nt.copy(this),t);let n=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,A,l=(a+o)/2;if(a===o)c=0,A=0;else{let u=o-a;switch(A=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=A,e.l=l,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=gt){Xe.workingToColorSpace(Nt.copy(this),e);let t=Nt.r,n=Nt.g,s=Nt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Dr);let n=ks(ii.h,Dr.h,t),s=ks(ii.s,Dr.s,t),r=ks(ii.l,Dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new Fe;Fe.NAMES=hh;var Ws=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hn=new U,Fn=new U,Ua=new U,On=new U,Gi=new U,Vi=new U,il=new U,Na=new U,Fa=new U,Oa=new U,za=new at,ka=new at,Qa=new at,Ai=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Fn.subVectors(n,t),Ua.subVectors(e,t);let o=hn.dot(hn),a=hn.dot(Fn),c=hn.dot(Ua),A=Fn.dot(Fn),l=Fn.dot(Ua),u=o*A-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,d=(A*c-a*l)*h,g=(o*l-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(o,On.y),c.addScaledVector(a,On.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return za.setScalar(0),ka.setScalar(0),Qa.setScalar(0),za.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Fn.subVectors(e,t),hn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Gi.subVectors(s,n),Vi.subVectors(r,n),Na.subVectors(e,n);let c=Gi.dot(Na),A=Vi.dot(Na);if(c<=0&&A<=0)return t.copy(n);Fa.subVectors(e,s);let l=Gi.dot(Fa),u=Vi.dot(Fa);if(l>=0&&u<=l)return t.copy(s);let h=c*u-l*A;if(h<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(Gi,o);Oa.subVectors(e,r);let d=Gi.dot(Oa),g=Vi.dot(Oa);if(g>=0&&d<=g)return t.copy(r);let v=d*A-c*g;if(v<=0&&A>=0&&g<=0)return a=A/(A-g),t.copy(n).addScaledVector(Vi,a);let p=l*g-d*u;if(p<=0&&u-l>=0&&d-g>=0)return il.subVectors(r,s),a=(u-l)/(u-l+(d-g)),t.copy(s).addScaledVector(il,a);let f=1/(p+v+h);return o=v*f,a=h*f,t.copy(n).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ir.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(e.matrixWorld),this.union(Ir)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Br.subVectors(this.max,Bs),Hi.subVectors(e.a,Bs),Wi.subVectors(e.b,Bs),ji.subVectors(e.c,Bs),si.subVectors(Wi,Hi),ri.subVectors(ji,Wi),Pi.subVectors(Hi,ji);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Pi.z,Pi.y,si.z,0,-si.x,ri.z,0,-ri.x,Pi.z,0,-Pi.x,-si.y,si.x,0,-ri.y,ri.x,0,-Pi.y,Pi.x,0];return!Ga(t,Hi,Wi,ji,Br)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Hi,Wi,ji,Br))?!1:(Rr.crossVectors(si,ri),t=[Rr.x,Rr.y,Rr.z],Ga(t,Hi,Wi,ji,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,Ir=new Zt,Hi=new U,Wi=new U,ji=new U,si=new U,ri=new U,Pi=new U,Bs=new U,Br=new U,Rr=new U,Mi=new U;function Ga(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);let a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),c=e.dot(Mi),A=t.dot(Mi),l=n.dot(Mi);if(Math.max(-Math.max(c,A,l),Math.min(c,A,l))>a)return!1}return!0}var Tt=new U,Lr=new He,Uu=0,Pt=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=BA,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var js=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nu=new Zt,Rs=new U,Va=new U,Ht=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Va)),this.expandByPoint(Rs.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fu=0,on=new Qe,Ha=new mt,Yi=new U,Kt=new Zt,Ls=new Zt,It=new U,Bt=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(au(e)?Ys:js)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Kt.min,Ls.min),Kt.expandByPoint(It),It.addVectors(Kt.max,Ls.max),Kt.expandByPoint(It)):(Kt.expandByPoint(Ls.min),Kt.expandByPoint(Ls.max))}Kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let A=0,l=a.count;A<l;A++)It.fromBufferAttribute(a,A),c&&(Yi.fromBufferAttribute(e,A),It.add(Yi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new U,c[x]=new U;let A=new U,l=new U,u=new U,h=new He,d=new He,g=new He,v=new U,p=new U;function f(x,_,D){A.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,D),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,D),l.sub(A),u.sub(A),d.sub(h),g.sub(h);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),p.copy(u).multiplyScalar(d.x).addScaledVector(l,-g.x).multiplyScalar(L),a[x].add(v),a[_].add(v),a[D].add(v),c[x].add(p),c[_].add(p),c[D].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,_=E.length;x<_;++x){let D=E[x],L=D.start,F=D.count;for(let k=L,B=L+F;k<B;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new U,M=new U,y=new U,w=new U;function S(x){y.fromBufferAttribute(s,x),w.copy(y);let _=a[x];b.copy(_),b.sub(y.multiplyScalar(y.dot(_))).normalize(),M.crossVectors(w,_);let L=M.dot(c[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,L)}for(let x=0,_=E.length;x<_;++x){let D=E[x],L=D.start,F=D.count;for(let k=L,B=L+F;k<B;k+=3)S(e.getX(k+0)),S(e.getX(k+1)),S(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,A=new U,l=new U,u=new U;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),A.fromBufferAttribute(n,p),a.add(l),c.add(l),A.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,A.x,A.y,A.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){let A=a.array,l=a.itemSize,u=a.normalized,h=new A.constructor(c.length*l),d=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*l;for(let f=0;f<l;f++)h[g++]=A[d++]}return new Pt(h,l,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],A=e(c,n);t.setAttribute(a,A)}let r=this.morphAttributes;for(let a in r){let c=[],A=r[a];for(let l=0,u=A.length;l<u;l++){let h=A[l],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let A=o[a];t.addGroup(A.start,A.count,A.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let A in c)c[A]!==void 0&&(e[A]=c[A]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let A=n[c];e.data.attributes[c]=A.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let A=this.morphAttributes[c],l=[];for(let u=0,h=A.length;u<h;u++){let d=A[u];l.push(d.toJSON(e.data))}l.length>0&&(s[c]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let A in s){let l=s[A];this.setAttribute(A,l.clone(t))}let r=e.morphAttributes;for(let A in r){let l=[],u=r[A];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(t));this.morphAttributes[A]=l}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let A=0,l=o.length;A<l;A++){let u=o[A];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=BA,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},zt=new U,as=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Gs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wa=new U,Ou=new U,zu=new ke,dn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wa.subVectors(n,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Wa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zu.getNormalMatrix(e),s=this.coplanarPoint(Wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ku=0,Wt=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Ps,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pA,this.blendDst=mA,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var kn=new U,ja=new U,Ur=new U,Nr=new U,Si=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ja.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(ja);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=Nr.dot(this.direction),c=-Nr.dot(Ur),A=Nr.lengthSq(),l=Math.abs(1-o*o),u,h,d,g;if(l>0)if(u=o*c-a,h=o*a-c,g=r*l,u>=0)if(h>=-g)if(h<=g){let v=1/l;u*=v,h*=v,d=u*(u+o*h+2*a)+h*(o*u+h+2*c)+A}else h=r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+A;else h=-r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+A;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+A):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+A):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+A);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+A;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ja).addScaledVector(Ur,h),d}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,A=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return A>=0?(n=(e.min.x-h.x)*A,s=(e.max.x-h.x)*A):(n=(e.max.x-h.x)*A,s=(e.min.x-h.x)*A),l>=0?(r=(e.min.y-h.y)*l,o=(e.max.y-h.y)*l):(r=(e.max.y-h.y)*l,o=(e.min.y-h.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,A=a.y,l=a.z,u=e.x-o.x,h=e.y-o.y,d=e.z-o.z,g=t.x-o.x,v=t.y-o.y,p=t.z-o.z,f=n.x-o.x,E=n.y-o.y,b=n.z-o.z,M=Math.abs(c),y=Math.abs(A),w=Math.abs(l),S,x,_,D,L,F,k,B,Q,Y,G,se;if(M>=y&&M>=w?(_=c,F=u,Q=g,se=f,c>=0?(S=A,x=l,D=h,L=d,k=v,B=p,Y=E,G=b):(S=l,x=A,D=d,L=h,k=p,B=v,Y=b,G=E)):y>=w?(_=A,F=h,Q=v,se=E,A>=0?(S=l,x=c,D=d,L=u,k=p,B=g,Y=b,G=f):(S=c,x=l,D=u,L=d,k=g,B=p,Y=f,G=b)):(_=l,F=d,Q=p,se=b,l>=0?(S=c,x=A,D=u,L=h,k=g,B=v,Y=f,G=E):(S=A,x=c,D=h,L=u,k=v,B=g,Y=E,G=f)),_===0)return null;let X=S/_,ee=x/_,J=1/_,Ue=D-X*F,be=L-ee*F,At=k-X*Q,qe=B-ee*Q,et=Y-X*se,W=G-ee*se,te=et*qe-W*At,j=Ue*W-be*et,ne=At*be-qe*Ue;if(s){if(te<0||j<0||ne<0)return null}else if((te<0||j<0||ne<0)&&(te>0||j>0||ne>0))return null;let re=te+j+ne;if(re===0)return null;let le=J*(te*F+j*Q+ne*se);return(re>0?le<0:le>0)?null:this.at(le/re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gn=class extends Wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=gA,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sl=new Qe,vi=new Si,Fr=new Ht,rl=new U,Or=new U,zr=new U,kr=new U,Ya=new U,Qr=new U,ol=new U,Gr=new U,wt=class extends mt{constructor(e=new Bt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let c=0,A=r.length;c<A;c++){let l=a[c],u=r[c];l!==0&&(Ya.fromBufferAttribute(u,e),o?Qr.addScaledVector(Ya,l):Qr.addScaledVector(Ya.sub(t),l))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(Fr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Fr,rl)===null||vi.origin.distanceToSquared(rl)>(e.far-e.near)**2))&&(sl.copy(r).invert(),vi.copy(e.ray).applyMatrix4(sl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,A=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],E=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=E,y=b;M<y;M+=3){let w=a.getX(M),S=a.getX(M+1),x=a.getX(M+2);s=Vr(this,f,e,n,A,l,u,w,S,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,f=v;p<f;p+=3){let E=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);s=Vr(this,o,e,n,A,l,u,E,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],E=Math.max(p.start,d.start),b=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=E,y=b;M<y;M+=3){let w=M,S=M+1,x=M+2;s=Vr(this,f,e,n,A,l,u,w,S,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=g,f=v;p<f;p+=3){let E=p,b=p+1,M=p+2;s=Vr(this,o,e,n,A,l,u,E,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Qu(i,e,t,n,s,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===In,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(i.matrixWorld);let A=t.ray.origin.distanceTo(Gr);return A<t.near||A>t.far?null:{distance:A,point:Gr.clone(),object:i}}function Vr(i,e,t,n,s,r,o,a,c,A){i.getVertexPosition(a,Or),i.getVertexPosition(c,zr),i.getVertexPosition(A,kr);let l=Qu(i,e,t,n,Or,zr,kr,ol);if(l){let u=new U;Ai.getBarycoord(ol,Or,zr,kr,u),s&&(l.uv=Ai.getInterpolatedAttribute(s,a,c,A,u,new He)),r&&(l.uv1=Ai.getInterpolatedAttribute(r,a,c,A,u,new He)),o&&(l.normal=Ai.getInterpolatedAttribute(o,a,c,A,u,new U),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let h={a,b:c,c:A,normal:new U,materialIndex:0};Ai.getNormal(Or,zr,kr,h.normal),l.face=h,l.barycoord=u}return l}var Us=new at,al=new at,Al=new at,Gu=new at,cl=new Qe,Hr=new U,Xa=new Ht,ll=new Qe,qa=new Si,Xs=class extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$a,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingBox.expandByPoint(Hr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ht),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingSphere.expandByPoint(Hr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(s),e.ray.intersectsSphere(Xa)!==!1&&(ll.copy(s).invert(),qa.copy(e.ray).applyMatrix4(ll),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$a?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kl?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;al.fromBufferAttribute(s.attributes.skinIndex,e),Al.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Us.copy(t),t.set(0,0,0,0)):(Us.set(...t,1),t.set(0,0,0)),Us.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Al.getComponent(r);if(o!==0){let a=al.getComponent(r);cl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gu.copy(Us).applyMatrix4(cl),o)}}return t.isVector4&&(t.w=Us.w),t.applyMatrix4(this.bindMatrixInverse)}},As=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},cs=class extends bt{constructor(e=null,t=1,n=1,s,r,o,a,c,A=vt,l=vt,u,h){super(null,o,a,c,A,l,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hl=new Qe,Vu=new Qe,qs=class i{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Vu;hl.multiplyMatrices(a,t[r]),hl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new cs(t,e,e,tn,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(De("Skeleton: No bone found with UUID:",r),o=new As),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Hn=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xi=new Qe,ul=new Qe,Wr=[],dl=new Zt,Hu=new Qe,Ns=new wt,Fs=new Ht,Ks=class extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),dl.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(dl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ht),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Fs.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),ul.multiplyMatrices(n,Xi),Ns.matrixWorld=ul,Ns.raycast(e,Wr);for(let o=0,a=Wr.length;o<a;o++){let c=Wr[o];c.instanceId=r,c.object=this,t.push(c)}Wr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(s*this.count),s,this.count,Uo,en));let r=this.morphTexture.source.data.data,o=0;for(let A=0;A<n.length;A++)o+=n[A];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yi=new Ht,Wu=new He(.5,.5),jr=new U,ls=class{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,o=new dn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],A=r[3],l=r[4],u=r[5],h=r[6],d=r[7],g=r[8],v=r[9],p=r[10],f=r[11],E=r[12],b=r[13],M=r[14],y=r[15];if(s[0].setComponents(A-o,d-l,f-g,y-E).normalize(),s[1].setComponents(A+o,d+l,f+g,y+E).normalize(),s[2].setComponents(A+a,d+u,f+v,y+b).normalize(),s[3].setComponents(A-a,d-u,f-v,y-b).normalize(),n)s[4].setComponents(c,h,p,M).normalize(),s[5].setComponents(A-c,d-h,f-p,y-M).normalize();else if(s[4].setComponents(A-c,d-h,f-p,y-M).normalize(),t===pn)s[5].setComponents(A+c,d+h,f+p,y+M).normalize();else if(t===ts)s[5].setComponents(c,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);let t=Wu.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(jr.x=s.normal.x>0?e.max.x:e.min.x,jr.y=s.normal.y>0?e.max.y:e.min.y,jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hs=class extends Wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new U,fo=new U,fl=new Qe,Os=new Si,Yr=new Ht,Ka=new U,pl=new U,bi=class extends mt{constructor(e=new Bt,t=new hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new Mt(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;fl.copy(s).invert(),Os.copy(e.ray).applyMatrix4(fl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,A=this.isLineSegments?2:1,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let v=d,p=g-1;v<p;v+=A){let f=l.getX(v),E=l.getX(v+1),b=Xr(this,e,Os,c,f,E,v);b&&t.push(b)}if(this.isLineLoop){let v=l.getX(g-1),p=l.getX(d),f=Xr(this,e,Os,c,v,p,g-1);f&&t.push(f)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,p=g-1;v<p;v+=A){let f=Xr(this,e,Os,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){let v=Xr(this,e,Os,c,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xr(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(uo.fromBufferAttribute(a,s),fo.fromBufferAttribute(a,r),t.distanceSqToSegment(uo,fo,Ka,pl)>n)return;Ka.applyMatrix4(i.matrixWorld);let A=e.ray.origin.distanceTo(Ka);if(!(A<e.near||A>e.far))return{distance:A,point:pl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ml=new U,gl=new U,Js=class extends bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ml.fromBufferAttribute(t,s),gl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ml.distanceTo(gl);e.setAttribute("lineDistance",new Mt(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zs=class extends bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},us=class extends Wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xl=new Qe,sA=new Si,qr=new Ht,Kr=new U,$s=class extends mt{constructor(e=new Bt,t=new us){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;xl.copy(s).invert(),sA.copy(e.ray).applyMatrix4(xl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,A=n.index,u=n.attributes.position;if(A!==null){let h=Math.max(0,o.start),d=Math.min(A.count,o.start+o.count);for(let g=h,v=d;g<v;g++){let p=A.getX(g);Kr.fromBufferAttribute(u,p),Pl(Kr,p,c,s,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,v=d;g<v;g++)Kr.fromBufferAttribute(u,g),Pl(Kr,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pl(i,e,t,n,s,r,o){let a=sA.distanceSqToPoint(i);if(a<t){let c=new U;sA.closestPointToPoint(i,c),c.applyMatrix4(n);let A=s.ray.origin.distanceTo(c);if(A<s.near||A>s.far)return;r.push({distance:A,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var er=class extends bt{constructor(e=[],t=di,n,s,r,o,a,c,A,l){super(e,t,n,s,r,o,a,c,A,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ds=class extends bt{constructor(e,t,n,s,r,o,a,c,A){super(e,t,n,s,r,o,a,c,A),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends bt{constructor(e,t,n=Mn,s,r,o,a=vt,c=vt,A,l=Sn,u=1){if(l!==Sn&&l!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,o,a,c,l,n,A),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},po=class extends ci{constructor(e,t=Mn,n=di,s,r,o=vt,a=vt,c,A=Sn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,s,r,o,a,c,A),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},tr=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fs=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],A=[],l=[],u=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(A,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(u,2));function g(v,p,f,E,b,M,y,w,S,x,_){let D=M/S,L=y/x,F=M/2,k=y/2,B=w/2,Q=S+1,Y=x+1,G=0,se=0,X=new U;for(let ee=0;ee<Y;ee++){let J=ee*L-k;for(let Ue=0;Ue<Q;Ue++){let be=Ue*D-F;X[v]=be*E,X[p]=J*b,X[f]=B,A.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[f]=w>0?1:-1,l.push(X.x,X.y,X.z),u.push(Ue/S),u.push(1-ee/x),G+=1}}for(let ee=0;ee<x;ee++)for(let J=0;J<S;J++){let Ue=h+J+Q*ee,be=h+J+Q*(ee+1),At=h+(J+1)+Q*(ee+1),qe=h+(J+1)+Q*ee;c.push(Ue,be,qe),c.push(be,At,qe),se+=6}a.addGroup(d,se,_),d+=se,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ps=class i extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let A=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],h=[],d=[],g=0,v=[],p=n/2,f=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function E(){let M=new U,y=new U,w=0,S=(t-e)/n;for(let x=0;x<=r;x++){let _=[],D=x/r,L=D*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,B=k*c+a,Q=Math.sin(B),Y=Math.cos(B);y.x=L*Q,y.y=-D*n+p,y.z=L*Y,u.push(y.x,y.y,y.z),M.set(Q,S,Y).normalize(),h.push(M.x,M.y,M.z),d.push(k,1-D),_.push(g++)}v.push(_)}for(let x=0;x<s;x++)for(let _=0;_<r;_++){let D=v[_][x],L=v[_+1][x],F=v[_+1][x+1],k=v[_][x+1];(e>0||_!==0)&&(l.push(D,L,k),w+=3),(t>0||_!==r-1)&&(l.push(L,F,k),w+=3)}A.addGroup(f,w,0),f+=w}function b(M){let y=g,w=new He,S=new U,x=0,_=M===!0?e:t,D=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*D,0),h.push(0,D,0),d.push(.5,.5),g++;let L=g;for(let F=0;F<=s;F++){let B=F/s*c+a,Q=Math.cos(B),Y=Math.sin(B);S.x=_*Y,S.y=p*D,S.z=_*Q,u.push(S.x,S.y,S.z),h.push(0,D,0),w.x=Q*.5+.5,w.y=Y*.5*D+.5,d.push(w.x,w.y),g++}for(let F=0;F<s;F++){let k=y+F,B=L+F;M===!0?l.push(B,B+1,k):l.push(B+1,B,k),x+=3}A.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var nr=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),A=a+1,l=c+1,u=e/a,h=t/c,d=[],g=[],v=[],p=[];for(let f=0;f<l;f++){let E=f*h-o;for(let b=0;b<A;b++){let M=b*u-r;g.push(M,-E,0),v.push(0,0,1),p.push(b/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let b=E+A*f,M=E+A*(f+1),y=E+1+A*(f+1),w=E+1+A*f;d.push(b,M,w),d.push(M,y,w)}this.setIndex(d),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(v,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ir=class i extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],A=[],l=[],u=[],h=new U,d=new U,g=new U;for(let v=0;v<=n;v++){let p=o+v/n*a;for(let f=0;f<=s;f++){let E=f/s*r;d.x=(e+t*Math.cos(p))*Math.cos(E),d.y=(e+t*Math.cos(p))*Math.sin(E),d.z=t*Math.sin(p),A.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),g.subVectors(d,h).normalize(),l.push(g.x,g.y,g.z),u.push(f/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let f=(s+1)*v+p-1,E=(s+1)*(v-1)+p-1,b=(s+1)*(v-1)+p,M=(s+1)*v+p;c.push(f,E,M),c.push(E,b,M)}this.setIndex(c),this.setAttribute("position",new Mt(A,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ml(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ml(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let s in n)e[s]=n[s]}return e}function Ml(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ju(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function NA(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var uh={clone:Ri,merge:Ft},Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wn=class extends Wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rt=class extends Wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var go=class extends Wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends Wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ai(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function to(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function qu(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function vl(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Ku(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Cn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends Cn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tA,endingEnd:tA}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nA:r=e,a=2*t-n;break;case iA:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nA:o=e,c=2*n-t;break;case iA:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let A=(n-t)*.5,l=this.valueSize;this._weightPrev=A/(t-a),this._weightNext=A/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,A=c-a,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,f=-h*p+2*h*v-h*g,E=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-d)*p+(1.5+d)*v+.5*g,M=d*p-d*v;for(let y=0;y!==a;++y)r[y]=f*o[l+y]+E*o[A+y]+b*o[c+y]+M*o[u+y];return r}},Mo=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,A=c-a,l=(n-t)/(s-t),u=1-l;for(let h=0;h!==a;++h)r[h]=o[A+h]*u+o[c+h]*l;return r}},vo=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yo=class extends Cn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,A=c-a,l=this.inTangents,u=this.outTangents;if(!l||!u){let g=(n-t)/(s-t),v=1-g;for(let p=0;p!==a;++p)r[p]=o[A+p]*v+o[c+p]*g;return r}let h=a*2,d=e-1;for(let g=0;g!==a;++g){let v=o[A+g],p=o[c+g],f=d*h+g*2,E=u[f],b=u[f+1],M=e*h+g*2,y=l[M],w=l[M+1],S=Zu(n,t,E,y,s);r[g]=dh(S,v,b,w,p)}return r}};function dh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ju(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Zu(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=dh(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Ju(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ai(t,this.TimeBufferType),this.values=ai(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ai(e.times,Array),values:ai(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),to(e.settings)&&(n.settings={inTangents:ai(e.settings.inTangents,Array),outTangents:ai(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _i:t=this.InterpolantFactoryMethodDiscrete;break;case Ei:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break;case eA:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _i;case this.InterpolantFactoryMethodLinear:return Ei;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return eA}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;to(this.settings)&&(yl(this.settings.inTangents,e),yl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ze("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Au(s))for(let a=0,c=s.length;a!==c;++a){let A=s[a];if(isNaN(A)){ze("KeyframeTrack: Value is not a valid number.",this,a,A),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,A=e[a],l=e[a+1];if(A!==l&&(a!==1||A!==e[0]))if(s)c=!0;else{let u=a*n,h=u-n,d=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[h+g]||v!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,A=0;A!==n;++A)t[c+A]=t[a+A];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,to(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Ei;var jn=class extends jt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=_i;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};sr.prototype.ValueTypeName="color";var Yn=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Yn.prototype.ValueTypeName="number";var wo=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),A=e*a;for(let l=A+a;A!==l;A+=4)Qt.slerpFlat(r,0,o,A-a,o,A,c);return r}},Xn=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Xn.prototype.ValueTypeName="quaternion";Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends jt{constructor(e,t,n){super(e,t,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=_i;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};li.prototype.ValueTypeName="vector";var rr=class{constructor(e="",t=-1,n=[],s=Jl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ed(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(jt.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],A=[];c.push((a+r-1)%r,a,(a+1)%r),A.push(0,1,0);let l=qu(c);c=vl(c,1,l),A=vl(A,1,l),!s&&c[0]===0&&(c.push(r),A.push(A[0])),o.push(new Yn(".morphTargetInfluences["+t[a].name+"]",c,A).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let A=e[a],l=A.name.match(r);if(l&&l.length>1){let u=l[1],h=s[u];h||(s[u]=h=[]),h.push(A)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function $u(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return li;case"color":return sr;case"quaternion":return Xn;case"bool":case"boolean":return jn;case"string":return qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ed(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$u(i.type);if(i.times===void 0){let n=[],s=[];Ku(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),to(i.settings)&&(t.settings={inTangents:ai(i.settings.inTangents,Float32Array),outTangents:ai(i.settings.outTangents,Float32Array)}),t}var En={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(wl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!wl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wl(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _o=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,A=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return A.push(l,u),this},this.removeHandler=function(l){let u=A.indexOf(l);return u!==-1&&A.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=A.length;u<h;u+=2){let d=A[u],g=A[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fh=new _o,Dn=class{constructor(e){this.manager=e!==void 0?e:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn={},rA=class extends Error{constructor(e,t){super(e),this.response=t}},ms=class extends Dn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=En.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:s});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(A=>{if(A.status===200||A.status===0){if(A.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||A.body===void 0||A.body.getReader===void 0)return A;let l=Qn[e],u=A.body.getReader(),h=A.headers.get("X-File-Size")||A.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0,v=0,p=new ReadableStream({start(f){E();function E(){u.read().then(({done:b,value:M})=>{if(b)f.close();else{v+=M.byteLength;let y=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let w=0,S=l.length;w<S;w++){let x=l[w];x.onProgress&&x.onProgress(y)}f.enqueue(M),E()}},b=>{f.error(b)})}}});return new Response(p)}else throw new rA(`fetch for "${A.url}" responded with ${A.status}: ${A.statusText}`,A)}).then(A=>{switch(c){case"arraybuffer":return A.arrayBuffer();case"blob":return A.blob();case"document":return A.text().then(l=>new DOMParser().parseFromString(l,a));case"json":return A.json();default:if(a==="")return A.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return A.arrayBuffer().then(g=>d.decode(g))}}}).then(A=>{En.add(`file:${e}`,A);let l=Qn[e];delete Qn[e];for(let u=0,h=l.length;u<h;u++){let d=l[u];d.onLoad&&d.onLoad(A)}}).catch(A=>{let l=Qn[e];if(l===void 0)throw this.manager.itemError(e),A;delete Qn[e];for(let u=0,h=l.length;u<h;u++){let d=l[u];d.onError&&d.onError(A)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qi=new WeakMap,Eo=class extends Dn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=En.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=qi.get(o);u===void 0&&(u=[],qi.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=ns("img");function c(){l(),t&&t(this);let u=qi.get(this)||[];for(let h=0;h<u.length;h++){let d=u[h];d.onLoad&&d.onLoad(this)}qi.delete(this),r.manager.itemEnd(e)}function A(u){l(),s&&s(u),En.remove(`image:${e}`);let h=qi.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(u)}qi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){a.removeEventListener("load",c,!1),a.removeEventListener("error",A,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",A,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),En.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var or=class extends Dn{constructor(e){super(e)}load(e,t,n,s){let r=new bt,o=new Eo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ci=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ar=class extends Ci{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ja=new Qe,_l=new U,El=new U,gs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),El.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(El),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ja,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,A=s?s.y/r.y:0;e.coordinateSystem===ts||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+A,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+A,0,0,.5,.5,0,0,0,1),t.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jr=new U,Zr=new Qt,_n=new U,Ar=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jr,Zr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Zr,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jr,Zr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Zr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new U,Tl=new He,Sl=new He,St=class extends Ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ti*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ti*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Tl,Sl),t.subVectors(Sl,Tl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,A=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/A,s*=o.width/c,n*=o.height/A}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},oA=class extends gs{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ti*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},cr=class extends Ci{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new oA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},aA=class extends gs{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0}},lr=class extends Ci{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new aA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},hi=class extends Ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let A=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=A*this.view.offsetX,o=r+A*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},AA=class extends gs{constructor(){super(new hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ui=class extends Ci{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new AA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Kn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Za=new WeakMap,hr=class extends Dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=En.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(A=>{Za.has(o)===!0?(s&&s(Za.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(A),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(A){return A.blob()}).then(function(A){return createImageBitmap(A,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(A){return En.add(`image-bitmap:${e}`,A),t&&t(A),r.manager.itemEnd(e),A}).catch(function(A){s&&s(A),Za.set(c,A),En.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});En.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ki=-90,Ji=1,To=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Ki,Ji,e,t);s.layers=this.layers,this.add(s);let r=new St(Ki,Ji,e,t);r.layers=this.layers,this.add(r);let o=new St(Ki,Ji,e,t);o.layers=this.layers,this.add(o);let a=new St(Ki,Ji,e,t);a.layers=this.layers,this.add(a);let c=new St(Ki,Ji,e,t);c.layers=this.layers,this.add(c);let A=new St(Ki,Ji,e,t);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let A of t)this.remove(A);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let A of t)this.add(A),A.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,A,l]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,A),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},So=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var FA="\\[\\]\\.:\\/",td=new RegExp("["+FA+"]","g"),OA="[^"+FA+"]",nd="[^"+FA.replace("\\.","")+"]",id=/((?:WC+[\/:])*)/.source.replace("WC",OA),sd=/(WCOD+)?/.source.replace("WCOD",nd),rd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",OA),od=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",OA),ad=new RegExp("^"+id+sd+rd+od+"$"),Ad=["material","materials","bones","map"],cA=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(td,"")}static parseTrackName(e){let t=ad.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ad.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let A=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===A){A=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(A!==void 0){if(e[A]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[A]}}let o=e[s];if(o===void 0){let A=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+A+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=cA;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d0=new Float32Array(1);var HA=class HA{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};HA.prototype.isMatrix2=!0;var lA=HA;function zA(i,e,t,n){let s=cd(n);switch(t){case CA:return i*e;case Uo:return i*e/s.components*s.byteLength;case No:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case Fo:return i*e*2/s.components*s.byteLength;case DA:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case Oo:return i*e*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:case Go:return Math.max(i,16)*Math.max(e,8)/4;case zo:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case Vo:case Ho:case jo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Pr:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ca:case la:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mr:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cd(i){switch(i){case Xt:case EA:return{byteLength:1,components:1};case ys:case TA:case vn:return{byteLength:2,components:1};case Ro:case Lo:return{byteLength:2,components:4};case Mn:case Bo:case en:return{byteLength:4,components:1};case SA:case bA:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Nh(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hd(i){let e=new WeakMap;function t(a,c){let A=a.array,l=a.usage,u=A.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,A,l),a.onUploadCallback();let d;if(A instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&A instanceof Float16Array)d=i.HALF_FLOAT;else if(A instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(A instanceof Int16Array)d=i.SHORT;else if(A instanceof Uint32Array)d=i.UNSIGNED_INT;else if(A instanceof Int32Array)d=i.INT;else if(A instanceof Int8Array)d=i.BYTE;else if(A instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:h,type:d,bytesPerElement:A.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,A){let l=c.array,u=c.updateRanges;if(i.bindBuffer(A,a),u.length===0)i.bufferSubData(A,0,l);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){let g=u[h],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];i.bufferSubData(A,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let A=e.get(a);if(A===void 0)e.set(a,t(a,c));else if(A.version<a.version){if(A.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(A.buffer,a,c),A.version=a.version}}return{get:s,remove:r,update:o}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:ud,alphahash_pars_fragment:dd,alphamap_fragment:fd,alphamap_pars_fragment:pd,alphatest_fragment:md,alphatest_pars_fragment:gd,aomap_fragment:xd,aomap_pars_fragment:Pd,batching_pars_vertex:Md,batching_vertex:vd,begin_vertex:yd,beginnormal_vertex:wd,bsdfs:_d,iridescence_fragment:Ed,bumpmap_pars_fragment:Td,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Dd,color_fragment:Id,color_pars_fragment:Bd,color_pars_vertex:Rd,color_vertex:Ld,common:Ud,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:zd,emissivemap_fragment:kd,emissivemap_pars_fragment:Qd,colorspace_fragment:Gd,colorspace_pars_fragment:Vd,envmap_fragment:Hd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:jd,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:rf,envmap_vertex:Xd,fog_vertex:qd,fog_pars_vertex:Kd,fog_fragment:Jd,fog_pars_fragment:Zd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:ef,lights_lambert_fragment:tf,lights_lambert_pars_fragment:nf,lights_pars_begin:sf,lights_toon_fragment:of,lights_toon_pars_fragment:af,lights_phong_fragment:Af,lights_phong_pars_fragment:cf,lights_physical_fragment:lf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:df,lights_fragment_end:ff,lightprobes_pars_fragment:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:Pf,map_fragment:Mf,map_pars_fragment:vf,map_particle_fragment:yf,map_particle_pars_fragment:wf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:Ef,morphinstance_vertex:Tf,morphcolor_vertex:Sf,morphnormal_vertex:bf,morphtarget_pars_vertex:Cf,morphtarget_vertex:Df,normal_fragment_begin:If,normal_fragment_maps:Bf,normal_pars_fragment:Rf,normal_pars_vertex:Lf,normal_vertex:Uf,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:zf,iridescence_pars_fragment:kf,opaque_fragment:Qf,packing:Gf,premultiplied_alpha_fragment:Vf,project_vertex:Hf,dithering_fragment:Wf,dithering_pars_fragment:jf,roughnessmap_fragment:Yf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Kf,shadowmap_vertex:Jf,shadowmask_pars_fragment:Zf,skinbase_vertex:$f,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:rp,tonemapping_pars_fragment:op,transmission_fragment:ap,transmission_pars_fragment:Ap,uv_pars_fragment:cp,uv_pars_vertex:lp,uv_vertex:hp,worldpos_vertex:up,background_vert:dp,background_frag:fp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:gp,cube_frag:xp,depth_vert:Pp,depth_frag:Mp,distance_vert:vp,distance_frag:yp,equirect_vert:wp,equirect_frag:_p,linedashed_vert:Ep,linedashed_frag:Tp,meshbasic_vert:Sp,meshbasic_frag:bp,meshlambert_vert:Cp,meshlambert_frag:Dp,meshmatcap_vert:Ip,meshmatcap_frag:Bp,meshnormal_vert:Rp,meshnormal_frag:Lp,meshphong_vert:Up,meshphong_frag:Np,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:zp,meshtoon_frag:kp,points_vert:Qp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Hp,sprite_vert:Wp,sprite_frag:jp},me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ln={basic:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ft([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ft([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ft([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ft([me.points,me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ft([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ft([me.common,me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ft([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ft([me.sprite,me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ft([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ft([me.lights,me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ln.physical={uniforms:Ft([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var xa={r:0,b:0,g:0},Yp=new Qe,Fh=new ke;Fh.set(-1,0,0,0,1,0,0,0,1);function Xp(i,e,t,n,s,r){let o=new Fe(0),a=s===!0?0:1,c,A,l=null,u=0,h=null;function d(E){let b=E.isScene===!0?E.background:null;if(b&&b.isTexture){let M=E.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(E){let b=!1,M=d(E);M===null?p(o,a):M&&M.isColor&&(p(M,1),b=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,b){let M=d(b);M&&(M.isCubeTexture||M.mapping===fr)?(A===void 0&&(A=new wt(new fs(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Ri(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(y,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(A)),A.material.uniforms.envMap.value=M,A.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,A.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&A.material.uniforms.backgroundRotation.value.premultiply(Fh),A.material.toneMapped=Xe.getTransfer(M.colorSpace)!==rt,(l!==M||u!==M.version||h!==i.toneMapping)&&(A.material.needsUpdate=!0,l=M,u=M.version,h=i.toneMapping),A.layers.enableAll(),E.unshift(A,A.geometry,A.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wt(new nr(2,2),new $t({name:"BackgroundMaterial",uniforms:Ri(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(l!==M||u!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,l=M,u=M.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(xa,NA(i)),t.buffers.color.setClear(xa.r,xa.g,xa.b,b,r)}function f(){A!==void 0&&(A.geometry.dispose(),A.material.dispose(),A=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,p(o,a)},render:g,addToRenderList:v,dispose:f}}function qp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(L,F,k,B,Q){let Y=!1,G=u(L,B,k,F);r!==G&&(r=G,A(r.object)),Y=d(L,B,k,Q),Y&&g(L,B,k,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(L,F,k,B),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function A(L){return i.bindVertexArray(L)}function l(L){return i.deleteVertexArray(L)}function u(L,F,k,B){let Q=B.wireframe===!0,Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);let G=L.isInstancedMesh===!0?L.id:0,se=Y[G];se===void 0&&(se={},Y[G]=se);let X=se[k.id];X===void 0&&(X={},se[k.id]=X);let ee=X[Q];return ee===void 0&&(ee=h(c()),X[Q]=ee),ee}function h(L){let F=[],k=[],B=[];for(let Q=0;Q<t;Q++)F[Q]=0,k[Q]=0,B[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:B,object:L,attributes:{},index:null}}function d(L,F,k,B){let Q=r.attributes,Y=F.attributes,G=0,se=k.getAttributes();for(let X in se)if(se[X].location>=0){let J=Q[X],Ue=Y[X];if(Ue===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Ue=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Ue=L.instanceColor)),J===void 0||J.attribute!==Ue||Ue&&J.data!==Ue.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(L,F,k,B){let Q={},Y=F.attributes,G=0,se=k.getAttributes();for(let X in se)if(se[X].location>=0){let J=Y[X];J===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let Ue={};Ue.attribute=J,J&&J.data&&(Ue.data=J.data),Q[X]=Ue,G++}r.attributes=Q,r.attributesNum=G,r.index=B}function v(){let L=r.newAttributes;for(let F=0,k=L.length;F<k;F++)L[F]=0}function p(L){f(L,0)}function f(L,F){let k=r.newAttributes,B=r.enabledAttributes,Q=r.attributeDivisors;k[L]=1,B[L]===0&&(i.enableVertexAttribArray(L),B[L]=1),Q[L]!==F&&(i.vertexAttribDivisor(L,F),Q[L]=F)}function E(){let L=r.newAttributes,F=r.enabledAttributes;for(let k=0,B=F.length;k<B;k++)F[k]!==L[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function b(L,F,k,B,Q,Y,G){G===!0?i.vertexAttribIPointer(L,F,k,Q,Y):i.vertexAttribPointer(L,F,k,B,Q,Y)}function M(L,F,k,B){v();let Q=B.attributes,Y=k.getAttributes(),G=F.defaultAttributeValues;for(let se in Y){let X=Y[se];if(X.location>=0){let ee=Q[se];if(ee===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){let J=ee.normalized,Ue=ee.itemSize,be=e.get(ee);if(be===void 0)continue;let At=be.buffer,qe=be.type,et=be.bytesPerElement,W=qe===i.INT||qe===i.UNSIGNED_INT||ee.gpuType===Bo;if(ee.isInterleavedBufferAttribute){let te=ee.data,j=te.stride,ne=ee.offset;if(te.isInstancedInterleavedBuffer){for(let re=0;re<X.locationSize;re++)f(X.location+re,te.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<X.locationSize;re++)p(X.location+re);i.bindBuffer(i.ARRAY_BUFFER,At);for(let re=0;re<X.locationSize;re++)b(X.location+re,Ue/X.locationSize,qe,J,j*et,(ne+Ue/X.locationSize*re)*et,W)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)f(X.location+te,ee.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<X.locationSize;te++)p(X.location+te);i.bindBuffer(i.ARRAY_BUFFER,At);for(let te=0;te<X.locationSize;te++)b(X.location+te,Ue/X.locationSize,qe,J,Ue*et,Ue/X.locationSize*te*et,W)}}else if(G!==void 0){let J=G[se];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(X.location,J);break;case 3:i.vertexAttrib3fv(X.location,J);break;case 4:i.vertexAttrib4fv(X.location,J);break;default:i.vertexAttrib1fv(X.location,J)}}}}E()}function y(){_();for(let L in n){let F=n[L];for(let k in F){let B=F[k];for(let Q in B){let Y=B[Q];for(let G in Y)l(Y[G].object),delete Y[G];delete B[Q]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let F=n[L.id];for(let k in F){let B=F[k];for(let Q in B){let Y=B[Q];for(let G in Y)l(Y[G].object),delete Y[G];delete B[Q]}}delete n[L.id]}function S(L){for(let F in n){let k=n[F];for(let B in k){let Q=k[B];if(Q[L.id]===void 0)continue;let Y=Q[L.id];for(let G in Y)l(Y[G].object),delete Y[G];delete Q[L.id]}}}function x(L){for(let F in n){let k=n[F],B=L.isInstancedMesh===!0?L.id:0,Q=k[B];if(Q!==void 0){for(let Y in Q){let G=Q[Y];for(let se in G)l(G[se].object),delete G[se];delete Q[Y]}delete k[B],Object.keys(k).length===0&&delete n[F]}}}function _(){D(),o=!0,r!==s&&(r=s,A(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:_,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function Kp(i,e,t){let n;function s(c){n=c}function r(c,A){i.drawArrays(n,c,A),t.update(A,n,1)}function o(c,A,l){l!==0&&(i.drawArraysInstanced(n,c,A,l),t.update(A,n,l))}function a(c,A,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,A,0,l);let h=0;for(let d=0;d<l;d++)h+=A[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Jp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==tn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let x=S===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Xt&&S!==en&&!x&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let A=t.precision!==void 0?t.precision:"highp",l=c(A);l!==A&&(De("WebGLRenderer:",A,"not supported, using",l,"instead."),A=l);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:A,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,maxSamples:y,samples:w}}function Zp(i){let e=this,t=null,n=0,s=!1,r=!1,o=new dn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||s;return s=h,n=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=l(u,h,0)},this.setState=function(u,h,d){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?l(null):A();else{let E=r?0:n,b=E*4,M=f.clippingState||null;c.value=M,M=l(g,h,b,d);for(let y=0;y!==b;++y)M[y]=t[y];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function A(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,h,d,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=d+v*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,M=d;b!==v;++b,M+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var Ts=4,$p=6,em=20,tm=256,yr=new hi,ph=new Fe,WA=null,jA=0,YA=0,XA=!1,nm=new U,Li=new U,bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=nm}=r;WA=this._renderer.getRenderTarget(),jA=this._renderer.getActiveCubeFace(),YA=this._renderer.getActiveMipmapLevel(),XA=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(WA,jA,YA),this._renderer.xr.enabled=XA,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),WA=this._renderer.getRenderTarget(),jA=this._renderer.getActiveCubeFace(),YA=this._renderer.getActiveMipmapLevel(),XA=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:vn,format:tn,colorSpace:kt,depthBuffer:!1},s=mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=im(r)),this._blurMaterial=rm(r,e,t),this._ggxMaterial=sm(r,e,t)}return s}_compileMaterial(e){let t=new wt(new Bt,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),A=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ph),u.toneMapping=xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new fs,new gn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,f=!1,E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,f=!0):(p.color.copy(ph),f=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(c.up.set(0,A[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[b],r.y,r.z)):M===1?(c.up.set(0,0,A[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[b],r.z)):(c.up.set(0,A[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[b]));let y=this._cubeSize;Es(s,M*y,b>2?y:0,y,y),u.setRenderTarget(s),f&&u.render(v,c),u.render(e,c)}u.toneMapping=d,u.autoClear=h,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===di||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,A=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(A*A-l*l),h=A*1.25,d=u*h,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-Ts?n-g+Ts:0),f=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,Es(r,p,f,3*v,2*v),s.setRenderTarget(r),s.render(a,yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Es(e,p,f,3*v,2*v),s.setRenderTarget(e),s.render(a,yr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let A=a.uniforms;A.envMap.value=e.texture,A.sigma.value=r,A.mipInt.value=this._lodMax-n;let l=this._sizeLods[s],u=3*l*(s>this._lodMax-Ts?s-this._lodMax+Ts:0),h=4*(this._cubeSize-l);Es(t,u,h,3*l,2*l),o.setRenderTarget(t),o.render(c,yr)}};function im(i){let e=[],t=[],n=i,s=i-Ts+1+$p;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,A=1+a,l=[c,c,A,c,A,A,c,c,A,A,c,A],u=6,h=6,d=3,g=new Float32Array(d*h*u),v=new Float32Array(d*h*u);for(let f=0;f<u;f++){let E=f%3*2/3-1,b=f>2?0:-1,M=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];g.set(M,d*h*f);for(let y=0;y<h;y++){let w=l[y*2]*2-1,S=l[y*2+1]*2-1;f===0?Li.set(1,S,w):f===1?Li.set(-w,1,-S):f===2?Li.set(-w,S,1):f===3?Li.set(-1,S,-w):f===4?Li.set(-w,-1,S):Li.set(w,S,-1),Li.toArray(v,(f*h+y)*d)}}let p=new Bt;p.setAttribute("position",new Pt(g,d)),p.setAttribute("outputDirection",new Pt(v,d)),t.push(new wt(p,null)),n>Ts&&n--}return{lodMeshes:t,sizeLods:e}}function mh(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sm(i,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function rm(i,e,t){return new $t({name:"SphericalGaussianBlur",defines:{SAMPLES:em,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function gh(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function xh(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ma=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fs(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Bn});r.uniforms.tEquirect.value=t;let o=new wt(s,r),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=yt),new To(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function om(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ms||d===Do)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Ma(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",A),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Ms||d===Do,v=d===di||d===Ii;if(g||v){let p=t.get(h),f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new bs(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let E=h.image;return g&&E&&E.height>0||v&&E&&c(E)?(n===null&&(n=new bs(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",l),p.texture):null}}}return h}function a(h,d){return d===Ms?h.mapping=di:d===Do&&(h.mapping=Ii),h}function c(h){let d=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function A(h){let d=h.target;d.removeEventListener("dispose",A);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function am(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&wi("WebGLRenderer: "+n+" extension not supported."),s}}}function Am(i,e,t,n){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function A(u){let h=[],d=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(d!==null){let E=d.array;v=d.version;for(let b=0,M=E.length;b<M;b+=3){let y=E[b+0],w=E[b+1],S=E[b+2];h.push(y,w,w,S,S,y)}}else{let E=g.array;v=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){let y=b+0,w=b+1,S=b+2;h.push(y,w,w,S,S,y)}}let p=new(g.count>=65535?Ys:js)(h,1);p.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function l(u){let h=r.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&A(u)}else A(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function cm(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*o),t.update(h,n,1)}function A(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,u*o,d),t.update(h,n,d))}function l(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,d);let v=0;for(let p=0;p<d;p++)v+=h[p];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=A,this.renderMultiDraw=l}function lm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hm(i,e,t){let n=new WeakMap,s=new at;function r(o,a,c){let A=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0,h=n.get(a);if(h===void 0||h.count!==u){let _=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",_)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let M=a.attributes.position.count*b,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*y*4*u),S=new Vs(w,M,y,u);S.type=en,S.needsUpdate=!0;let x=b*4;for(let D=0;D<u;D++){let L=p[D],F=f[D],k=E[D],B=M*y*4*D;for(let Q=0;Q<L.count;Q++){let Y=Q*x;d===!0&&(s.fromBufferAttribute(L,Q),w[B+Y+0]=s.x,w[B+Y+1]=s.y,w[B+Y+2]=s.z,w[B+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,Q),w[B+Y+4]=s.x,w[B+Y+5]=s.y,w[B+Y+6]=s.z,w[B+Y+7]=0),v===!0&&(s.fromBufferAttribute(k,Q),w[B+Y+8]=s.x,w[B+Y+9]=s.y,w[B+Y+10]=s.z,w[B+Y+11]=k.itemSize===4?s.w:1)}}h={count:u,texture:S,size:new He(M,y)},n.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<A.length;v++)d+=A[v];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",A)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function um(i,e,t,n,s){let r=new WeakMap;function o(A){let l=s.render.frame,u=A.geometry,h=e.get(A,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),A.isInstancedMesh&&(A.hasEventListener("dispose",c)===!1&&A.addEventListener("dispose",c),r.get(A)!==l&&(t.update(A.instanceMatrix,i.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,i.ARRAY_BUFFER),r.set(A,l))),A.isSkinnedMesh){let d=A.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function c(A){let l=A.target;l.removeEventListener("dispose",c),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:a}}var dm={[xA]:"LINEAR_TONE_MAPPING",[PA]:"REINHARD_TONE_MAPPING",[MA]:"CINEON_TONE_MAPPING",[dr]:"ACES_FILMIC_TONE_MAPPING",[yA]:"AGX_TONE_MAPPING",[wA]:"NEUTRAL_TONE_MAPPING",[vA]:"CUSTOM_TONE_MAPPING"};function fm(i,e,t,n,s,r){let o=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,A=new Bt;A.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),A.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let l=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new wt(A,l),h=new hi(-1,1,1,-1,0,1),d=null,g=null,v=!1,p,f=null,E=[],b=!1;this.setSize=function(M,y){o.setSize(M,y),a!==null&&a.setSize(M,y),c!==null&&c.setSize(M,y);for(let w=0;w<E.length;w++){let S=E[w];S.setSize&&S.setSize(M,y)}},this.setEffects=function(M){E=M,b=E.length>0&&E[0].isRenderPass===!0;let y=o.width,w=o.height;E.length>0&&a===null&&(a=new Vt(y,w,{type:vn,depthBuffer:!1,stencilBuffer:!1}),c=new Vt(y,w,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<E.length;S++){let x=E[S];x.setSize&&x.setSize(y,w)}},this.begin=function(M,y){if(v||M.toneMapping===xn&&E.length===0)return!1;if(f=y,y!==null){let w=y.width,S=y.height;(o.width!==w||o.height!==S)&&this.setSize(w,S)}return b===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=xn,!0},this.hasRenderPass=function(){return b},this.end=function(M,y){M.toneMapping=p,v=!0;let w=o,S=a;for(let x=0;x<E.length;x++){let _=E[x];_.enabled!==!1&&(_.render(M,S,w,y),_.needsSwap!==!1&&(w=S,S=S===a?c:a))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,l.defines={},Xe.getTransfer(d)===rt&&(l.defines.SRGB_TRANSFER="");let x=dm[g];x&&(l.defines[x]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(f),M.render(u,h),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),A.dispose(),l.dispose()}}var Oh=new bt,JA=new ci(1,1),zh=new Vs,kh=new ho,Qh=new er,Ph=[],Mh=[],vh=new Float32Array(16),yh=new Float32Array(9),wh=new Float32Array(4);function Cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wa(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Pm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Ct(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),Dt(t,n)}}function Mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Ct(t,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),Dt(t,n)}}function vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Ct(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),Dt(t,n)}}function ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function _m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Tm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Dm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(JA.compareFunction=t.isReversedDepthBuffer()?ga:ma,r=JA):r=Oh,t.setTexture2D(e||r,s)}function Im(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kh,s)}function Bm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qh,s)}function Rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zh,s)}function Lm(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return xm;case 35674:return Pm;case 35675:return Mm;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return wm;case 35668:case 35672:return _m;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Sm;case 36295:return bm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Rm}}function Um(i,e){i.uniform1fv(this.addr,e)}function Nm(i,e){let t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function Fm(i,e){let t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function Om(i,e){let t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function zm(i,e){let t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function km(i,e){let t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qm(i,e){let t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gm(i,e){i.uniform1iv(this.addr,e)}function Vm(i,e){i.uniform2iv(this.addr,e)}function Hm(i,e){i.uniform3iv(this.addr,e)}function Wm(i,e){i.uniform4iv(this.addr,e)}function jm(i,e){i.uniform1uiv(this.addr,e)}function Ym(i,e){i.uniform2uiv(this.addr,e)}function Xm(i,e){i.uniform3uiv(this.addr,e)}function qm(i,e){i.uniform4uiv(this.addr,e)}function Km(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=JA:o=Oh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Jm(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kh,r[o])}function Zm(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qh,r[o])}function $m(i,e,t){let n=this.cache,s=e.length,r=wa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zh,r[o])}function eg(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return zm;case 35675:return km;case 35676:return Qm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return Wm;case 5125:return jm;case 36294:return Ym;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}var ZA=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}},$A=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eg(t.type)}},ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},qA=/(\w+)(\])?(\[|\.)?/g;function _h(i,e){i.seq.push(e),i.map[e.id]=e}function tg(i,e,t){let n=i.name,s=n.length;for(qA.lastIndex=0;;){let r=qA.exec(n),o=qA.lastIndex,a=r[1],c=r[2]==="]",A=r[3];if(c&&(a=a|0),A===void 0||A==="["&&o+2===s){_h(t,A===void 0?new ZA(a,i,e):new $A(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ec(a),_h(t,u)),t=u}}}var Ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);tg(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Eh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ng=37297,ig=0;function sg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Th=new ke;function rg(i){Xe._getMatrix(Th,Xe.workingColorSpace,i);let e=`mat3( ${Th.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Qs:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sg(i.getShaderSource(e),a)}else return r}function og(i,e){let t=rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ag={[xA]:"Linear",[PA]:"Reinhard",[MA]:"Cineon",[dr]:"ACESFilmic",[yA]:"AgX",[wA]:"Neutral",[vA]:"Custom"};function Ag(i,e){let t=ag[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pa=new U;function cg(){Xe.getLuminanceCoefficients(Pa);let i=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function hg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ug(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function _r(i){return i!==""}function bh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(i){return i.replace(dg,pg)}var fg=new Map;function pg(i,e){let t=Ye[e];if(t===void 0){let n=fg.get(e);if(n!==void 0)t=Ye[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tc(t)}var mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(mg,gg)}function gg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xg={[ur]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function Pg(i){return xg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mg={[di]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE_UV"};function vg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Mg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yg={[Ii]:"ENVMAP_MODE_REFRACTION"};function wg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _g={[gA]:"ENVMAP_BLENDING_MULTIPLY",[Xl]:"ENVMAP_BLENDING_MIX",[ql]:"ENVMAP_BLENDING_ADD"};function Eg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_g[i.combine]||"ENVMAP_BLENDING_NONE"}function Tg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Pg(t),A=vg(t),l=wg(t),u=Eg(t),h=Tg(t),d=lg(t),g=hg(r),v=s.createProgram(),p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(p=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+A:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==xn?Ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,og("linearToOutputTexel",t.outputColorSpace),cg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=tc(o),o=bh(o,t),o=Ch(o,t),a=tc(a),a=bh(a,t),a=Ch(a,t),o=Dh(o),a=Dh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===RA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===RA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=E+p+o,M=E+f+a,y=Eh(s,s.VERTEX_SHADER,b),w=Eh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,y),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(L){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(y)||"",B=s.getShaderInfoLog(w)||"",Q=F.trim(),Y=k.trim(),G=B.trim(),se=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,w);else{let ee=Sh(s,y,"vertex"),J=Sh(s,w,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+ee+`
`+J)}else Q!==""?De("WebGLProgram: Program Info Log:",Q):(Y===""||G==="")&&(X=!1);X&&(L.diagnostics={runnable:se,programLog:Q,vertexShader:{log:Y,prefix:p},fragmentShader:{log:G,prefix:f}})}s.deleteShader(y),s.deleteShader(w),x=new Ss(s,v),_=ug(s,v)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,ng)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}var bg=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ic(e),t.set(e,n)),n}},ic=class{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}};function Cg(i){return i===pi||i===Pr||i===Mr}function Dg(i,e,t,n,s,r){let o=new Hs,a=new nc,c=new Set,A=[],l=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,_,D,L,F,k){let B=L.fog,Q=F.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||Y,G),X=se&&se.mapping===fr?se.image.height:null,ee=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let J=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ue=J!==void 0?J.length:0,be=0;Q.morphAttributes.position!==void 0&&(be=1),Q.morphAttributes.normal!==void 0&&(be=2),Q.morphAttributes.color!==void 0&&(be=3);let At,qe,et,W;if(ee){let ut=Ln[ee];At=ut.vertexShader,qe=ut.fragmentShader}else{At=x.vertexShader,qe=x.fragmentShader;let ut=a.getVertexShaderStage(x),it=a.getFragmentShaderStage(x);a.update(x,ut,it),et=ut.id,W=it.id}let te=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ne=F.isInstancedMesh===!0,re=F.isBatchedMesh===!0,le=!!x.map,Ge=!!x.matcap,ye=!!se,oe=!!x.aoMap,Ae=!!x.lightMap,Me=!!x.bumpMap&&x.wireframe===!1,Re=!!x.normalMap,We=!!x.displacementMap,_e=!!x.emissiveMap,Ne=!!x.metalnessMap,Je=!!x.roughnessMap,C=x.anisotropy>0,ft=x.clearcoat>0,tt=x.dispersion>0,T=x.retroreflectivity>0,m=x.iridescence>0,N=x.sheen>0,V=x.transmission>0,q=C&&!!x.anisotropyMap,ae=ft&&!!x.clearcoatMap,ce=ft&&!!x.clearcoatNormalMap,K=ft&&!!x.clearcoatRoughnessMap,$=m&&!!x.iridescenceMap,he=m&&!!x.iridescenceThicknessMap,Ie=N&&!!x.sheenColorMap,pe=N&&!!x.sheenRoughnessMap,ue=!!x.specularMap,Be=!!x.specularColorMap,Oe=!!x.specularIntensityMap,Ve=V&&!!x.transmissionMap,R=V&&!!x.thicknessMap,de=!!x.gradientMap,Z=!!x.alphaMap,fe=x.alphaTest>0,Pe=!!x.alphaHash,ie=!!x.extensions,Le=xn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Se={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:At,fragmentShader:qe,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:re,batchingColor:re&&F._colorsTexture!==null,instancing:ne,instancingColor:ne&&F.instanceColor!==null,instancingMorph:ne&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:le,matcap:Ge,envMap:ye,envMapMode:ye&&se.mapping,envMapCubeUVHeight:X,aoMap:oe,lightMap:Ae,bumpMap:Me,normalMap:Re,displacementMap:We,emissiveMap:_e,normalMapObjectSpace:Re&&x.normalMapType===$l,normalMapTangentSpace:Re&&x.normalMapType===pa,packedNormalMap:Re&&x.normalMapType===pa&&Cg(x.normalMap.format),metalnessMap:Ne,roughnessMap:Je,anisotropy:C,anisotropyMap:q,clearcoat:ft,clearcoatMap:ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:K,dispersion:tt,retroreflection:T,iridescence:m,iridescenceMap:$,iridescenceThicknessMap:he,sheen:N,sheenColorMap:Ie,sheenRoughnessMap:pe,specularMap:ue,specularColorMap:Be,specularIntensityMap:Oe,transmission:V,transmissionMap:Ve,thicknessMap:R,gradientMap:de,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:fe,alphaHash:Pe,combine:x.combine,mapUv:le&&g(x.map.channel),aoMapUv:oe&&g(x.aoMap.channel),lightMapUv:Ae&&g(x.lightMap.channel),bumpMapUv:Me&&g(x.bumpMap.channel),normalMapUv:Re&&g(x.normalMap.channel),displacementMapUv:We&&g(x.displacementMap.channel),emissiveMapUv:_e&&g(x.emissiveMap.channel),metalnessMapUv:Ne&&g(x.metalnessMap.channel),roughnessMapUv:Je&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:ae&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(x.sheenRoughnessMap.channel),specularMapUv:ue&&g(x.specularMap.channel),specularColorMapUv:Be&&g(x.specularColorMap.channel),specularIntensityMapUv:Oe&&g(x.specularIntensityMap.channel),transmissionMapUv:Ve&&g(x.transmissionMap.channel),thicknessMapUv:R&&g(x.thicknessMap.channel),alphaMapUv:Z&&g(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Re||C),vertexNormals:!!Q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(le||Z),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Q.attributes.normal===void 0&&Re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:j,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:be,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:le&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:_e&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yt,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(x){let _=[];if(x.shaderID?_.push(x.shaderID):(_.push(x.customVertexShaderID),_.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)_.push(D),_.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(f(_,x),E(_,x),_.push(i.outputColorSpace)),_.push(x.customProgramCacheKey),_.join()}function f(x,_){x.push(_.precision),x.push(_.outputColorSpace),x.push(_.envMapMode),x.push(_.envMapCubeUVHeight),x.push(_.mapUv),x.push(_.alphaMapUv),x.push(_.lightMapUv),x.push(_.aoMapUv),x.push(_.bumpMapUv),x.push(_.normalMapUv),x.push(_.displacementMapUv),x.push(_.emissiveMapUv),x.push(_.metalnessMapUv),x.push(_.roughnessMapUv),x.push(_.anisotropyMapUv),x.push(_.clearcoatMapUv),x.push(_.clearcoatNormalMapUv),x.push(_.clearcoatRoughnessMapUv),x.push(_.iridescenceMapUv),x.push(_.iridescenceThicknessMapUv),x.push(_.sheenColorMapUv),x.push(_.sheenRoughnessMapUv),x.push(_.specularMapUv),x.push(_.specularColorMapUv),x.push(_.specularIntensityMapUv),x.push(_.transmissionMapUv),x.push(_.thicknessMapUv),x.push(_.combine),x.push(_.fogExp2),x.push(_.sizeAttenuation),x.push(_.morphTargetsCount),x.push(_.morphAttributeCount),x.push(_.numSunLights),x.push(_.numDirLights),x.push(_.numPointLights),x.push(_.numSpotLights),x.push(_.numSpotLightMaps),x.push(_.numHemiLights),x.push(_.numRectAreaLights),x.push(_.numSunLightShadows),x.push(_.numDirLightShadows),x.push(_.numPointLightShadows),x.push(_.numSpotLightShadows),x.push(_.numSpotLightShadowsWithMaps),x.push(_.numLightProbes),x.push(_.shadowMapType),x.push(_.toneMapping),x.push(_.numClippingPlanes),x.push(_.numClipIntersection),x.push(_.depthPacking)}function E(x,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){let _=d[x.type],D;if(_){let L=Ln[_];D=uh.clone(L.uniforms)}else D=x.uniforms;return D}function M(x,_){let D=l.get(_);return D!==void 0?++D.usedTimes:(D=new Sg(i,_,x,s),A.push(D),l.set(_,D)),D}function y(x){if(--x.usedTimes===0){let _=A.indexOf(x);A[_]=A[A.length-1],A.pop(),l.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function S(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:b,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:A,dispose:S}}function Ig(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,v,p,f){let E=i[e];return E===void 0?(E={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:f},i[e]=E):(E.id=h.id,E.object=h,E.geometry=d,E.material=g,E.materialVariant=o(h),E.groupOrder=v,E.renderOrder=h.renderOrder,E.z=p,E.group=f),e++,E}function c(h,d,g,v,p,f,E){E.reversedDepth===!0&&(p=-p);let b=a(h,d,g,v,p,f);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function A(h,d,g,v,p,f){let E=a(h,d,g,v,p,f);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):t.unshift(E)}function l(h,d){t.length>1&&t.sort(h||Bg),n.length>1&&n.sort(d||Bh),s.length>1&&s.sort(d||Bh)}function u(){for(let h=e,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:A,finish:u,sort:l}}function Rg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Rh,i.set(n,[o])):s>=r.length?(o=new Rh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Ug(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ng=0;function Fg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Og(i){let e=new Lg,t=Ug(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)n.probe.push(new U);let s=new U,r=new Qe,o=new Qe;function a(A){let l=0,u=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,v=0,p=0,f=0,E=0,b=0,M=0,y=0,w=0,S=0,x=0,_=0,D=0;A.sort(Fg);for(let F=0,k=A.length;F<k;F++){let B=A[F],Q=B.color,Y=B.intensity,G=B.distance,se=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===pi?se=B.shadow.map.texture:se=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)l+=Q.r*Y,u+=Q.g*Y,h+=Q.b*Y;else if(B.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(B.sh.coefficients[X],Y);D++}else if(B.isSunLight){let X=e.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ee=B.shadow,J=t.get(B);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=se;let Ue=ee.getViewportCount();for(let be=0;be<Ue;be++)n.sunShadowMatrix[v+be]=ee.getMatrix(be),n.sunShadowCascade[v+be]=ee._cascadeData[be];v+=Ue,g++}n.sun[d]=X,d++}else if(B.isDirectionalLight){let X=e.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ee=B.shadow,J=t.get(B);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=B.shadow.matrix,y++}n.directional[p]=X,p++}else if(B.isSpotLight){let X=e.get(B);X.position.setFromMatrixPosition(B.matrixWorld),X.color.copy(Q).multiplyScalar(Y),X.distance=G,X.coneCos=Math.cos(B.angle),X.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),X.decay=B.decay,n.spot[E]=X;let ee=B.shadow;if(B.map&&(n.spotLightMap[x]=B.map,x++,ee.updateMatrices(B),B.castShadow&&_++),n.spotLightMatrix[E]=ee.matrix,B.castShadow){let J=t.get(B);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,n.spotShadow[E]=J,n.spotShadowMap[E]=se,S++}E++}else if(B.isRectAreaLight){let X=e.get(B);X.color.copy(Q).multiplyScalar(Y),X.halfWidth.set(B.width*.5,0,0),X.halfHeight.set(0,B.height*.5,0),n.rectArea[b]=X,b++}else if(B.isPointLight){let X=e.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),X.distance=B.distance,X.decay=B.decay,B.castShadow){let ee=B.shadow,J=t.get(B);J.shadowIntensity=ee.intensity,J.shadowBias=ee.bias,J.shadowNormalBias=ee.normalBias,J.shadowRadius=ee.radius,J.shadowMapSize=ee.mapSize,J.shadowCameraNear=ee.camera.near,J.shadowCameraFar=ee.camera.far,n.pointShadow[f]=J,n.pointShadowMap[f]=se,n.pointShadowMatrix[f]=B.shadow.matrix,w++}n.point[f]=X,f++}else if(B.isHemisphereLight){let X=e.get(B);X.skyColor.copy(B.color).multiplyScalar(Y),X.groundColor.copy(B.groundColor).multiplyScalar(Y),n.hemi[M]=X,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=h;let L=n.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==f||L.spotLength!==E||L.rectAreaLength!==b||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==S||L.numSpotMaps!==x||L.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=p,n.spot.length=E,n.rectArea.length=b,n.point.length=f,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+x-_,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=D,L.sunLength=d,L.directionalLength=p,L.pointLength=f,L.spotLength=E,L.rectAreaLength=b,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=S,L.numSpotMaps=x,L.numLightProbes=D,n.version=Ng++)}function c(A,l){let u=0,h=0,d=0,g=0,v=0,p=0,f=l.matrixWorldInverse;for(let E=0,b=A.length;E<b;E++){let M=A[E];if(M.isSunLight){let y=n.sun[u];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(f),u++}else if(M.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),h++}else if(M.isSpotLight){let y=n.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let y=n.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(f),p++}}}return{setup:a,setupView:c,state:n}}function Lh(i){let e=new Og(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function A(){e.setup(t)}function l(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:A,setupLightsView:l,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function zg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Lh(i),e.set(s,[a])):r>=o.length?(a=new Lh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Vg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Uh=new Qe,wr=new U,KA=new U;function Hg(i,e,t){let n=new ls,s=new He,r=new He,o=new at,a=new go,c=new xo,A={},l=t.maxTextureSize,u={[In]:Gt,[Gt]:In,[Yt]:Yt},h=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:kg,fragmentShader:Qg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new wt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let f=this.type;this.render=function(w,S,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Co&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let _=i.getRenderTarget(),D=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Bn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=f!==this.type;k&&S.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Q=>Q.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Q=w.length;B<Q;B++){let Y=w[B],G=Y.shadow;if(G===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let se=G.getFrameExtents();s.multiply(se),r.copy(G.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/se.x),s.x=r.x*se.x,G.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/se.y),s.y=r.y*se.y,G.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===xs){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vt(s.x,s.y,{format:pi,type:vn,minFilter:yt,magFilter:yt,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new ci(s.x,s.y,en),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=Sn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vt,G.map.depthTexture.magFilter=vt}else Y.isPointLight?(G.map=new Ma(s.x),G.map.depthTexture=new po(s.x,Mn)):(G.map=new Vt(s.x,s.y),G.map.depthTexture=new ci(s.x,s.y,Mn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=Sn,this.type===ur?(G.map.depthTexture.compareFunction=X?ga:ma,G.map.depthTexture.minFilter=yt,G.map.depthTexture.magFilter=yt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=vt,G.map.depthTexture.magFilter=vt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let ee=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,x);for(let J=0;J<ee;J++){let Ue=G.getCamera(J);if(Y.isPointLight){let be=G.camera,At=G.matrix,qe=Y.distance||be.far;qe!==be.far&&(be.far=qe,be.updateProjectionMatrix()),wr.setFromMatrixPosition(Y.matrixWorld),be.position.copy(wr),KA.copy(be.position),KA.add(Gg[J]),be.up.copy(Vg[J]),be.lookAt(KA),be.updateMatrixWorld(),At.makeTranslation(-wr.x,-wr.y,-wr.z),Uh.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Uh,be.coordinateSystem,be.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,J),i.clear();else{J===0&&(i.setRenderTarget(G.map),i.clear());let be=G.getViewport(J);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),F.viewport(o)}n=G.getFrustum(J),M(S,x,Ue,Y,this.type)}G.isPointLightShadow!==!0&&this.type===xs&&E(G,x),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(_,D,L)};function E(w,S){let x=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Vt(s.x,s.y,{format:pi,type:vn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,x,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,x,d,v,null)}function b(w,S,x,_){let D=null,L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)D=L;else if(D=x.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let F=D.uuid,k=S.uuid,B=A[F];B===void 0&&(B={},A[F]=B);let Q=B[k];Q===void 0&&(Q=D.clone(),B[k]=Q,S.addEventListener("dispose",y)),D=Q}if(D.visible=S.visible,D.wireframe=S.wireframe,_===xs?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:u[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let F=i.properties.get(D);F.light=x}return D}function M(w,S,x,_,D){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===xs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let k=e.update(w),B=w.material;if(Array.isArray(B)){let Q=k.groups;for(let Y=0,G=Q.length;Y<G;Y++){let se=Q[Y],X=B[se.materialIndex];if(X&&X.visible){let ee=b(w,X,_,D);w.onBeforeShadow(i,w,S,x,k,ee,se),i.renderBufferDirect(x,null,k,ee,w,se),w.onAfterShadow(i,w,S,x,k,ee,se)}}}else if(B.visible){let Q=b(w,B,_,D);w.onBeforeShadow(i,w,S,x,k,Q,null),i.renderBufferDirect(x,null,k,Q,w,null),w.onAfterShadow(i,w,S,x,k,Q,null)}}let F=w.children;for(let k=0,B=F.length;k<B;k++)M(F[k],S,x,_,D)}function y(w){w.target.removeEventListener("dispose",y);for(let x in A){let _=A[x],D=w.target.uuid;D in _&&(_[D].dispose(),delete _[D])}}}function Wg(i,e){function t(){let R=!1,de=new at,Z=null,fe=new at(0,0,0,0);return{setMask:function(Pe){Z!==Pe&&!R&&(i.colorMask(Pe,Pe,Pe,Pe),Z=Pe)},setLocked:function(Pe){R=Pe},setClear:function(Pe,ie,Le,Se,ut){ut===!0&&(Pe*=Se,ie*=Se,Le*=Se),de.set(Pe,ie,Le,Se),fe.equals(de)===!1&&(i.clearColor(Pe,ie,Le,Se),fe.copy(de))},reset:function(){R=!1,Z=null,fe.set(-1,0,0,0)}}}function n(){let R=!1,de=!1,Z=null,fe=null,Pe=null;return{setReversed:function(ie){if(de!==ie){let Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let Se=Pe;Pe=null,this.setClear(Se)}},getReversed:function(){return de},setTest:function(ie){ie?te(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(ie){Z!==ie&&!R&&(i.depthMask(ie),Z=ie)},setFunc:function(ie){if(de&&(ie=lh[ie]),fe!==ie){switch(ie){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ie}},setLocked:function(ie){R=ie},setClear:function(ie){Pe!==ie&&(Pe=ie,de&&(ie=1-ie),i.clearDepth(ie))},reset:function(){R=!1,Z=null,fe=null,Pe=null,de=!1}}}function s(){let R=!1,de=null,Z=null,fe=null,Pe=null,ie=null,Le=null,Se=null,ut=null;return{setTest:function(it){R||(it?te(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(it){de!==it&&!R&&(i.stencilMask(it),de=it)},setFunc:function(it,cn,yn){(Z!==it||fe!==cn||Pe!==yn)&&(i.stencilFunc(it,cn,yn),Z=it,fe=cn,Pe=yn)},setOp:function(it,cn,yn){(ie!==it||Le!==cn||Se!==yn)&&(i.stencilOp(it,cn,yn),ie=it,Le=cn,Se=yn)},setLocked:function(it){R=it},setClear:function(it){ut!==it&&(i.clearStencil(it),ut=it)},reset:function(){R=!1,de=null,Z=null,fe=null,Pe=null,ie=null,Le=null,Se=null,ut=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,A=new WeakMap,l={},u={},h={},d=new WeakMap,g=[],v=null,p=!1,f=null,E=null,b=null,M=null,y=null,w=null,S=null,x=new Fe(0,0,0),_=0,D=!1,L=null,F=null,k=null,B=null,Q=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,se=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=se>=2);let ee=null,J={},Ue=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),At=new at().fromArray(Ue),qe=new at().fromArray(be);function et(R,de,Z,fe){let Pe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(R,ie),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Z;Le++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(de+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return ie}let W={};W[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc($i),Me(!1),Re(hA),te(i.CULL_FACE),oe(Bn);function te(R){l[R]!==!0&&(i.enable(R),l[R]=!0)}function j(R){l[R]!==!1&&(i.disable(R),l[R]=!1)}function ne(R,de){return h[R]!==de?(i.bindFramebuffer(R,de),h[R]=de,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function re(R,de){let Z=g,fe=!1;if(R){Z=d.get(de),Z===void 0&&(Z=[],d.set(de,Z));let Pe=R.textures;if(Z.length!==Pe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Le=Pe.length;ie<Le;ie++)Z[ie]=i.COLOR_ATTACHMENT0+ie;Z.length=Pe.length,fe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Z)}function le(R){return v!==R?(i.useProgram(R),v=R,!0):!1}let Ge={[Di]:i.FUNC_ADD,[Il]:i.FUNC_SUBTRACT,[Bl]:i.FUNC_REVERSE_SUBTRACT};Ge[Rl]=i.MIN,Ge[Ll]=i.MAX;let ye={[Ul]:i.ZERO,[Nl]:i.ONE,[Fl]:i.SRC_COLOR,[pA]:i.SRC_ALPHA,[Vl]:i.SRC_ALPHA_SATURATE,[Ql]:i.DST_COLOR,[zl]:i.DST_ALPHA,[Ol]:i.ONE_MINUS_SRC_COLOR,[mA]:i.ONE_MINUS_SRC_ALPHA,[Gl]:i.ONE_MINUS_DST_COLOR,[kl]:i.ONE_MINUS_DST_ALPHA,[Hl]:i.CONSTANT_COLOR,[Wl]:i.ONE_MINUS_CONSTANT_COLOR,[jl]:i.CONSTANT_ALPHA,[Yl]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(R,de,Z,fe,Pe,ie,Le,Se,ut,it){if(R===Bn){p===!0&&(j(i.BLEND),p=!1);return}if(p===!1&&(te(i.BLEND),p=!0),R!==Dl){if(R!==f||it!==D){if((E!==Di||y!==Di)&&(i.blendEquation(i.FUNC_ADD),E=Di,y=Di),it)switch(R){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uA:i.blendFunc(i.ONE,i.ONE);break;case dA:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fA:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",R);break}else switch(R){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uA:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dA:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fA:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",R);break}b=null,M=null,w=null,S=null,x.set(0,0,0),_=0,f=R,D=it}return}Pe=Pe||de,ie=ie||Z,Le=Le||fe,(de!==E||Pe!==y)&&(i.blendEquationSeparate(Ge[de],Ge[Pe]),E=de,y=Pe),(Z!==b||fe!==M||ie!==w||Le!==S)&&(i.blendFuncSeparate(ye[Z],ye[fe],ye[ie],ye[Le]),b=Z,M=fe,w=ie,S=Le),(Se.equals(x)===!1||ut!==_)&&(i.blendColor(Se.r,Se.g,Se.b,ut),x.copy(Se),_=ut),f=R,D=!1}function Ae(R,de){R.side===Yt?j(i.CULL_FACE):te(i.CULL_FACE);let Z=R.side===Gt;de&&(Z=!Z),Me(Z),R.blending===Ps&&R.transparent===!1?oe(Bn):oe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let fe=R.stencilWrite;a.setTest(fe),fe&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(R){L!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),L=R)}function Re(R){R!==bl?(te(i.CULL_FACE),R!==F&&(R===hA?i.cullFace(i.BACK):R===Cl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),F=R}function We(R){R!==k&&(G&&i.lineWidth(R),k=R)}function _e(R,de,Z){R?(te(i.POLYGON_OFFSET_FILL),(B!==de||Q!==Z)&&(B=de,Q=Z,o.getReversed()&&(de=-de),i.polygonOffset(de,Z))):j(i.POLYGON_OFFSET_FILL)}function Ne(R){R?te(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Je(R){R===void 0&&(R=i.TEXTURE0+Y-1),ee!==R&&(i.activeTexture(R),ee=R)}function C(R,de,Z){Z===void 0&&(ee===null?Z=i.TEXTURE0+Y-1:Z=ee);let fe=J[Z];fe===void 0&&(fe={type:void 0,texture:void 0},J[Z]=fe),(fe.type!==R||fe.texture!==de)&&(ee!==Z&&(i.activeTexture(Z),ee=Z),i.bindTexture(R,de||W[R]),fe.type=R,fe.texture=de)}function ft(){let R=J[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function m(){try{i.texSubImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function N(){try{i.texSubImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function ae(){try{i.texStorage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function ce(){try{i.texStorage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function K(){try{i.texImage2D(...arguments)}catch(R){ze("WebGLState:",R)}}function $(){try{i.texImage3D(...arguments)}catch(R){ze("WebGLState:",R)}}function he(R){return u[R]!==void 0?u[R]:i.getParameter(R)}function Ie(R,de){u[R]!==de&&(i.pixelStorei(R,de),u[R]=de)}function pe(R){At.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),At.copy(R))}function ue(R){qe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),qe.copy(R))}function Be(R,de){let Z=A.get(de);Z===void 0&&(Z=new WeakMap,A.set(de,Z));let fe=Z.get(R);fe===void 0&&(fe=i.getUniformBlockIndex(de,R.name),Z.set(R,fe))}function Oe(R,de){let fe=A.get(de).get(R);c.get(de)!==fe&&(i.uniformBlockBinding(de,fe,R.__bindingPointIndex),c.set(de,fe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},u={},ee=null,J={},h={},d=new WeakMap,g=[],v=null,p=!1,f=null,E=null,b=null,M=null,y=null,w=null,S=null,x=new Fe(0,0,0),_=0,D=!1,L=null,F=null,k=null,B=null,Q=null,At.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:j,bindFramebuffer:ne,drawBuffers:re,useProgram:le,setBlending:oe,setMaterial:Ae,setFlipSided:Me,setCullFace:Re,setLineWidth:We,setPolygonOffset:_e,setScissorTest:Ne,activeTexture:Je,bindTexture:C,unbindTexture:ft,compressedTexImage2D:tt,compressedTexImage3D:T,texImage2D:K,texImage3D:$,pixelStorei:Ie,getParameter:he,updateUBOMapping:Be,uniformBlockBinding:Oe,texStorage2D:ae,texStorage3D:ce,texSubImage2D:m,texSubImage3D:N,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:pe,viewport:ue,reset:Ve}}function jg(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new He,l=new WeakMap,u=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,m){return g?new OffscreenCanvas(T,m):ns("canvas")}function p(T,m,N){let V=1,q=tt(T);if((q.width>N||q.height>N)&&(V=N/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let ae=Math.floor(V*q.width),ce=Math.floor(V*q.height);h===void 0&&(h=v(ae,ce));let K=m?v(ae,ce):h;return K.width=ae,K.height=ce,K.getContext("2d").drawImage(T,0,0,ae,ce),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ae+"x"+ce+")."),K}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function f(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,m,N,V,q,ae=!1){if(T!==null){if(i[T]!==void 0)return i[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce;V&&(ce=e.get("EXT_texture_norm16"),ce||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=m;if(m===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8),N===i.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),N===i.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),m===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),m===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8),N===i.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),N===i.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RG8UI),N===i.UNSIGNED_SHORT&&(K=i.RG16UI),N===i.UNSIGNED_INT&&(K=i.RG32UI),N===i.BYTE&&(K=i.RG8I),N===i.SHORT&&(K=i.RG16I),N===i.INT&&(K=i.RG32I)),m===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGB8UI),N===i.UNSIGNED_SHORT&&(K=i.RGB16UI),N===i.UNSIGNED_INT&&(K=i.RGB32UI),N===i.BYTE&&(K=i.RGB8I),N===i.SHORT&&(K=i.RGB16I),N===i.INT&&(K=i.RGB32I)),m===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),N===i.UNSIGNED_INT&&(K=i.RGBA32UI),N===i.BYTE&&(K=i.RGBA8I),N===i.SHORT&&(K=i.RGBA16I),N===i.INT&&(K=i.RGBA32I)),m===i.RGB&&(N===i.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),N===i.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),m===i.RGBA){let $=ae?Qs:Xe.getTransfer(q);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=$===rt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),N===i.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(T,m){let N;return T?m===null||m===Mn||m===ws?N=i.DEPTH24_STENCIL8:m===en?N=i.DEPTH32F_STENCIL8:m===ys&&(N=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Mn||m===ws?N=i.DEPTH_COMPONENT24:m===en?N=i.DEPTH_COMPONENT32F:m===ys&&(N=i.DEPTH_COMPONENT16),N}function w(T,m){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==vt&&T.minFilter!==yt?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function S(T){let m=T.target;m.removeEventListener("dispose",S),_(m),m.isVideoTexture&&l.delete(m),m.isHTMLTexture&&u.delete(m)}function x(T){let m=T.target;m.removeEventListener("dispose",x),L(m)}function _(T){let m=n.get(T);if(m.__webglInit===void 0)return;let N=T.source,V=d.get(N);if(V){let q=V[m.__cacheKey];q.usedTimes--,q.usedTimes===0&&D(T),Object.keys(V).length===0&&d.delete(N)}n.remove(T)}function D(T){let m=n.get(T);i.deleteTexture(m.__webglTexture);let N=T.source,V=d.get(N);delete V[m.__cacheKey],o.memory.textures--}function L(T){let m=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(m.__webglFramebuffer[V]))for(let q=0;q<m.__webglFramebuffer[V].length;q++)i.deleteFramebuffer(m.__webglFramebuffer[V][q]);else i.deleteFramebuffer(m.__webglFramebuffer[V]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[V])}else{if(Array.isArray(m.__webglFramebuffer))for(let V=0;V<m.__webglFramebuffer.length;V++)i.deleteFramebuffer(m.__webglFramebuffer[V]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let V=0;V<m.__webglColorRenderbuffer.length;V++)m.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[V]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let N=T.textures;for(let V=0,q=N.length;V<q;V++){let ae=n.get(N[V]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(N[V])}n.remove(T)}let F=0;function k(){F=0}function B(){return F}function Q(T){F=T}function Y(){let T=F;return T>=s.maxTextures&&De("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,T}function G(T){let m=[];return m.push(T.wrapS),m.push(T.wrapT),m.push(T.wrapR||0),m.push(T.magFilter),m.push(T.minFilter),m.push(T.anisotropy),m.push(T.internalFormat),m.push(T.format),m.push(T.type),m.push(T.generateMipmaps),m.push(T.premultiplyAlpha),m.push(T.flipY),m.push(T.unpackAlignment),m.push(T.colorSpace),m.join()}function se(T,m){let N=n.get(T);if(T.isVideoTexture&&C(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){let V=T.image;if(V===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,T,m);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+m)}function X(T,m){let N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){j(N,T,m);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+m)}function ee(T,m){let N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){j(N,T,m);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+m)}function J(T,m){let N=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){ne(N,T,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+m)}let Ue={[Tn]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[es]:i.MIRRORED_REPEAT},be={[vt]:i.NEAREST,[Io]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[vs]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},At={[th]:i.NEVER,[oh]:i.ALWAYS,[nh]:i.LESS,[ma]:i.LEQUAL,[ih]:i.EQUAL,[ga]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function qe(T,m){if(m.type===en&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===yt||m.magFilter===vs||m.magFilter===Bi||m.magFilter===Pn||m.minFilter===yt||m.minFilter===vs||m.minFilter===Bi||m.minFilter===Pn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ue[m.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ue[m.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ue[m.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,be[m.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,be[m.minFilter]),m.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,At[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===vt||m.minFilter!==Bi&&m.minFilter!==Pn||m.type===en&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function et(T,m){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",S));let V=m.source,q=d.get(V);q===void 0&&(q={},d.set(V,q));let ae=G(m);if(ae!==T.__cacheKey){q[ae]===void 0&&(q[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[ae].usedTimes++;let ce=q[T.__cacheKey];ce!==void 0&&(q[T.__cacheKey].usedTimes--,ce.usedTimes===0&&D(m)),T.__cacheKey=ae,T.__webglTexture=q[ae].texture}return N}function W(T,m,N){return Math.floor(Math.floor(T/N)/m)}function te(T,m,N,V){let ae=T.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,N,V,m.data);else{ae.sort((Ie,pe)=>Ie.start-pe.start);let ce=0;for(let Ie=1;Ie<ae.length;Ie++){let pe=ae[ce],ue=ae[Ie],Be=pe.start+pe.count,Oe=W(ue.start,m.width,4),Ve=W(pe.start,m.width,4);ue.start<=Be+1&&Oe===Ve&&W(ue.start+ue.count-1,m.width,4)===Oe?pe.count=Math.max(pe.count,ue.start+ue.count-pe.start):(++ce,ae[ce]=ue)}ae.length=ce+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Ie=0,pe=ae.length;Ie<pe;Ie++){let ue=ae[Ie],Be=Math.floor(ue.start/4),Oe=Math.ceil(ue.count/4),Ve=Be%m.width,R=Math.floor(Be/m.width),de=Oe,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Ve,R,de,Z,N,V,m.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function j(T,m,N){let V=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(V=i.TEXTURE_3D);let q=et(T,m),ae=m.source;t.bindTexture(V,T.__webglTexture,i.TEXTURE0+N);let ce=n.get(ae);if(ae.version!==ce.__version||q===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap!="undefined"&&m.image instanceof ImageBitmap)===!1){let Z=Xe.getPrimaries(Xe.workingColorSpace),fe=m.colorSpace===Jn?null:Xe.getPrimaries(m.colorSpace),Pe=m.colorSpace===Jn||Z===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let $=p(m.image,!1,s.maxTextureSize);$=ft(m,$);let he=r.convert(m.format,m.colorSpace),Ie=r.convert(m.type),pe=M(m.internalFormat,he,Ie,m.normalized,m.colorSpace,m.isVideoTexture);qe(V,m);let ue,Be=m.mipmaps,Oe=m.isVideoTexture!==!0,Ve=ce.__version===void 0||q===!0,R=ae.dataReady,de=w(m,$);if(m.isDepthTexture)pe=y(m.format===fi,m.type),Ve&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,pe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,pe,$.width,$.height,0,he,Ie,null));else if(m.isDataTexture)if(Be.length>0){Oe&&Ve&&t.texStorage2D(i.TEXTURE_2D,de,pe,Be[0].width,Be[0].height);for(let Z=0,fe=Be.length;Z<fe;Z++)ue=Be[Z],Oe?R&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ue.width,ue.height,he,Ie,ue.data):t.texImage2D(i.TEXTURE_2D,Z,pe,ue.width,ue.height,0,he,Ie,ue.data);m.generateMipmaps=!1}else Oe?(Ve&&t.texStorage2D(i.TEXTURE_2D,de,pe,$.width,$.height),R&&te(m,$,he,Ie)):t.texImage2D(i.TEXTURE_2D,0,pe,$.width,$.height,0,he,Ie,$.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Oe&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,pe,Be[0].width,Be[0].height,$.depth);for(let Z=0,fe=Be.length;Z<fe;Z++)if(ue=Be[Z],m.format!==tn)if(he!==null)if(Oe){if(R)if(m.layerUpdates.size>0){let Pe=zA(ue.width,ue.height,m.format,m.type);for(let ie of m.layerUpdates){let Le=ue.data.subarray(ie*Pe/ue.data.BYTES_PER_ELEMENT,(ie+1)*Pe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ie,ue.width,ue.height,1,he,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ue.width,ue.height,$.depth,he,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,pe,ue.width,ue.height,$.depth,0,ue.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ue.width,ue.height,$.depth,he,Ie,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,pe,ue.width,ue.height,$.depth,0,he,Ie,ue.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Oe&&Ve&&t.texStorage2D(i.TEXTURE_2D,de,pe,Be[0].width,Be[0].height);for(let Z=0,fe=Be.length;Z<fe;Z++)ue=Be[Z],m.format!==tn?he!==null?Oe?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,pe,ue.width,ue.height,0,ue.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?R&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ue.width,ue.height,he,Ie,ue.data):t.texImage2D(i.TEXTURE_2D,Z,pe,ue.width,ue.height,0,he,Ie,ue.data)}else if(m.isDataArrayTexture)if(Oe){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,pe,$.width,$.height,$.depth),R)if(m.layerUpdates.size>0){let Z=zA($.width,$.height,m.format,m.type);for(let fe of m.layerUpdates){let Pe=$.data.subarray(fe*Z/$.data.BYTES_PER_ELEMENT,(fe+1)*Z/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,$.width,$.height,1,he,Ie,Pe)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,he,Ie,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,$.width,$.height,$.depth,0,he,Ie,$.data);else if(m.isData3DTexture)Oe?(Ve&&t.texStorage3D(i.TEXTURE_3D,de,pe,$.width,$.height,$.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,he,Ie,$.data)):t.texImage3D(i.TEXTURE_3D,0,pe,$.width,$.height,$.depth,0,he,Ie,$.data);else if(m.isFramebufferTexture){if(Ve)if(Oe)t.texStorage2D(i.TEXTURE_2D,de,pe,$.width,$.height);else{let Z=$.width,fe=$.height;for(let Pe=0;Pe<de;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,pe,Z,fe,0,he,Ie,null),Z>>=1,fe>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),$.parentNode!==Z){Z.appendChild($),u.add(m),Z.onpaint=fe=>{let Pe=fe.changedElements;for(let ie of u)Pe.includes(ie.image)&&(ie.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Pe=i.RGBA,ie=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,ie,Le,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Oe&&Ve){let Z=tt(Be[0]);t.texStorage2D(i.TEXTURE_2D,de,pe,Z.width,Z.height)}for(let Z=0,fe=Be.length;Z<fe;Z++)ue=Be[Z],Oe?R&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,he,Ie,ue):t.texImage2D(i.TEXTURE_2D,Z,pe,he,Ie,ue);m.generateMipmaps=!1}else if(Oe){if(Ve){let Z=tt($);t.texStorage2D(i.TEXTURE_2D,de,pe,Z.width,Z.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ie,$)}else t.texImage2D(i.TEXTURE_2D,0,pe,he,Ie,$);f(m)&&E(V),ce.__version=ae.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function ne(T,m,N){if(m.image.length!==6)return;let V=et(T,m),q=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);let ae=n.get(q);if(q.version!==ae.__version||V===!0){t.activeTexture(i.TEXTURE0+N);let ce=Xe.getPrimaries(Xe.workingColorSpace),K=m.colorSpace===Jn?null:Xe.getPrimaries(m.colorSpace),$=m.colorSpace===Jn||ce===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let he=m.isCompressedTexture||m.image[0].isCompressedTexture,Ie=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!he&&!Ie?pe[ie]=p(m.image[ie],!0,s.maxCubemapSize):pe[ie]=Ie?m.image[ie].image:m.image[ie],pe[ie]=ft(m,pe[ie]);let ue=pe[0],Be=r.convert(m.format,m.colorSpace),Oe=r.convert(m.type),Ve=M(m.internalFormat,Be,Oe,m.normalized,m.colorSpace),R=m.isVideoTexture!==!0,de=ae.__version===void 0||V===!0,Z=q.dataReady,fe=w(m,ue);qe(i.TEXTURE_CUBE_MAP,m);let Pe;if(he){R&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ve,ue.width,ue.height);for(let ie=0;ie<6;ie++){Pe=pe[ie].mipmaps;for(let Le=0;Le<Pe.length;Le++){let Se=Pe[Le];m.format!==tn?Be!==null?R?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Se.width,Se.height,Be,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ve,Se.width,Se.height,0,Se.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Se.width,Se.height,Be,Oe,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ve,Se.width,Se.height,0,Be,Oe,Se.data)}}}else{if(Pe=m.mipmaps,R&&de){Pe.length>0&&fe++;let ie=tt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ve,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ie){R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Be,Oe,pe[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,pe[ie].width,pe[ie].height,0,Be,Oe,pe[ie].data);for(let Le=0;Le<Pe.length;Le++){let ut=Pe[Le].image[ie].image;R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,ut.width,ut.height,Be,Oe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ve,ut.width,ut.height,0,Be,Oe,ut.data)}}else{R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,Oe,pe[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ve,Be,Oe,pe[ie]);for(let Le=0;Le<Pe.length;Le++){let Se=Pe[Le];R?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Be,Oe,Se.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ve,Be,Oe,Se.image[ie])}}}f(m)&&E(i.TEXTURE_CUBE_MAP),ae.__version=q.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function re(T,m,N,V,q,ae){let ce=r.convert(N.format,N.colorSpace),K=r.convert(N.type),$=M(N.internalFormat,ce,K,N.normalized,N.colorSpace),he=n.get(m),Ie=n.get(N);if(Ie.__renderTarget=m,!he.__hasExternalTextures){let pe=Math.max(1,m.width>>ae),ue=Math.max(1,m.height>>ae);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ae,$,pe,ue,m.depth,0,ce,K,null):t.texImage2D(q,ae,$,pe,ue,0,ce,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Je(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,q,Ie.__webglTexture,0,Ne(m)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,q,Ie.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(T,m,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),m.depthBuffer){let V=m.depthTexture,q=V&&V.isDepthTexture?V.type:null,ae=y(m.stencilBuffer,q),ce=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Je(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(m),ae,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(m),ae,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ae,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,T)}else{let V=m.textures;for(let q=0;q<V.length;q++){let ae=V[q],ce=r.convert(ae.format,ae.colorSpace),K=r.convert(ae.type),$=M(ae.internalFormat,ce,K,ae.normalized,ae.colorSpace);Je(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(m),$,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(m),$,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,$,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(T,m,N){let V=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(m.depthTexture);if(q.__renderTarget=m,(!q.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,m.depthTexture.addEventListener("dispose",S)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),qe(i.TEXTURE_CUBE_MAP,m.depthTexture);let he=r.convert(m.depthTexture.format),Ie=r.convert(m.depthTexture.type),pe;m.depthTexture.format===Sn?pe=i.DEPTH_COMPONENT24:m.depthTexture.format===fi&&(pe=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,pe,m.width,m.height,0,he,Ie,null)}}else se(m.depthTexture,0);let ae=q.__webglTexture,ce=Ne(m),K=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,$=m.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===Sn)Je(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,ae,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,$,K,ae,0);else if(m.depthTexture.format===fi)Je(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,ae,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,$,K,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(T){let m=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){let V=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),V){let q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),m.__depthDisposeCallback=q}m.__boundDepthTexture=V}if(T.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let V=0;V<6;V++)Ge(m.__webglFramebuffer[V],T,V);else{let V=T.texture.mipmaps;V&&V.length>0?Ge(m.__webglFramebuffer[0],T,0):Ge(m.__webglFramebuffer,T,0)}else if(N){m.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[V]),m.__webglDepthbuffer[V]===void 0)m.__webglDepthbuffer[V]=i.createRenderbuffer(),le(m.__webglDepthbuffer[V],T,!1);else{let q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=m.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}else{let V=T.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),le(m.__webglDepthbuffer,T,!1);else{let q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(T,m,N){let V=n.get(T);m!==void 0&&re(V.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ye(T)}function Ae(T){let m=T.texture,N=n.get(T),V=n.get(m);T.addEventListener("dispose",x);let q=T.textures,ae=T.isWebGLCubeRenderTarget===!0,ce=q.length>1;if(ce||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=m.version,o.memory.textures++),ae){N.__webglFramebuffer=[];for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[K]=[];for(let $=0;$<m.mipmaps.length;$++)N.__webglFramebuffer[K][$]=i.createFramebuffer()}else N.__webglFramebuffer[K]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let K=0;K<m.mipmaps.length;K++)N.__webglFramebuffer[K]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ce)for(let K=0,$=q.length;K<$;K++){let he=n.get(q[K]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Je(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){let $=q[K];N.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[K]);let he=r.convert($.format,$.colorSpace),Ie=r.convert($.type),pe=M($.internalFormat,he,Ie,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),ue=Ne(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,pe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,N.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),le(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),qe(i.TEXTURE_CUBE_MAP,m);for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)re(N.__webglFramebuffer[K][$],T,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else re(N.__webglFramebuffer[K],T,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(m)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let K=0,$=q.length;K<$;K++){let he=q[K],Ie=n.get(he),pe=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ie.__webglTexture),qe(pe,he),re(N.__webglFramebuffer,T,he,i.COLOR_ATTACHMENT0+K,pe,0),f(he)&&E(pe)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,V.__webglTexture),qe(K,m),m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)re(N.__webglFramebuffer[$],T,m,i.COLOR_ATTACHMENT0,K,$);else re(N.__webglFramebuffer,T,m,i.COLOR_ATTACHMENT0,K,0);f(m)&&E(K),t.unbindTexture()}T.depthBuffer&&ye(T)}function Me(T){let m=T.textures;for(let N=0,V=m.length;N<V;N++){let q=m[N];if(f(q)){let ae=b(T),ce=n.get(q).__webglTexture;t.bindTexture(ae,ce),E(ae),t.unbindTexture()}}}let Re=[],We=[];function _e(T){if(T.samples>0){if(Je(T)===!1){let m=T.textures,N=T.width,V=T.height,q=i.COLOR_BUFFER_BIT,ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(T),K=m.length>1;if(K)for(let he=0;he<m.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let $=T.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<m.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let Ie=n.get(m[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,N,V,0,0,N,V,q,i.NEAREST),c===!0&&(Re.length=0,We.length=0,Re.push(i.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Re.push(ae),We.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let he=0;he<m.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);let Ie=n.get(m[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let m=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function Ne(T){return Math.min(s.maxSamples,T.samples)}function Je(T){let m=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function C(T){let m=o.render.frame;l.get(T)!==m&&(l.set(T,m),T.update())}function ft(T,m){let N=T.colorSpace,V=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==kt&&N!==Jn&&(Xe.getTransfer(N)===rt?(V!==tn||q!==Xt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",N)),m}function tt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(A.width=T.naturalWidth||T.width,A.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(A.width=T.displayWidth,A.height=T.displayHeight):(A.width=T.width,A.height=T.height),A}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.getTextureUnits=B,this.setTextureUnits=Q,this.setTexture2D=se,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=J,this.rebindTextures=oe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yg(i,e){function t(n,s=Jn){let r,o=Xe.getTransfer(s);if(n===Xt)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===SA)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bA)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===EA)return i.BYTE;if(n===TA)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===CA)return i.ALPHA;if(n===DA)return i.RGB;if(n===tn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===No)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===xr)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===ko||n===Qo||n===Go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Wo||n===jo||n===Yo||n===Pr||n===Xo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Ho)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jo)return r.COMPRESSED_R11_EAC;if(n===Yo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pr)return r.COMPRESSED_RG11_EAC;if(n===Xo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qo||n===Ko||n===Jo||n===Zo||n===$o||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===Aa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ea)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===la||n===ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ca)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===da||n===Mr||n===fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends bn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,A=null,l=null,u=null,h=null,d=null,g=null,v=typeof XRWebGLBinding!="undefined",p=new sc,f={},E=t.getContextAttributes(),b=null,M=null,y=[],w=[],S=new He,x=null,_=null,D=new St;D.viewport=new at;let L=new St;L.viewport=new at;let F=[D,L],k=new So,B=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=y[W];return te===void 0&&(te=new rs,y[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=y[W];return te===void 0&&(te=new rs,y[W]=te),te.getGripSpace()},this.getHand=function(W){let te=y[W];return te===void 0&&(te=new rs,y[W]=te),te.getHandSpace()};function Y(W){let te=w.indexOf(W.inputSource);if(te===-1)return;let j=y[te];j!==void 0&&(j.update(W.inputSource,W.frame,A||o),j.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",se);for(let W=0;W<y.length;W++){let te=w[W];te!==null&&(w[W]=null,y[W].disconnect(te))}B=null,Q=null,p.reset();for(let W in f)delete f[W];if(e.setRenderTarget(b),d=null,h=null,u=null,s=null,M=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(S.width,S.height,!1),_!==null){let W=_.camera;W.fov=_.fov,W.zoom=_.zoom,W.updateProjectionMatrix(),_=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||o},this.setReferenceSpace=function(W){A=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",se),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(S),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ne=null,re=null;E.depth&&(re=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=E.stencil?fi:Sn,ne=E.stencil?ws:Mn);let le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Vt(h.textureWidth,h.textureHeight,{format:tn,type:Xt,depthTexture:new ci(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let j={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Vt(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),A=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function se(W){for(let te=0;te<W.removed.length;te++){let j=W.removed[te],ne=w.indexOf(j);ne>=0&&(w[ne]=null,y[ne].disconnect(j))}for(let te=0;te<W.added.length;te++){let j=W.added[te],ne=w.indexOf(j);if(ne===-1){for(let le=0;le<y.length;le++)if(le>=w.length){w.push(j),ne=le;break}else if(w[le]===null){w[le]=j,ne=le;break}if(ne===-1)break}let re=y[ne];re&&re.connect(j)}}let X=new U,ee=new U;function J(W,te,j){X.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(j.matrixWorld);let ne=X.distanceTo(ee),re=te.projectionMatrix.elements,le=j.projectionMatrix.elements,Ge=re[14]/(re[10]-1),ye=re[14]/(re[10]+1),oe=(re[9]+1)/re[5],Ae=(re[9]-1)/re[5],Me=(re[8]-1)/re[0],Re=(le[8]+1)/le[0],We=Ge*Me,_e=Ge*Re,Ne=ne/(-Me+Re),Je=Ne*-Me;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Je),W.translateZ(Ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),re[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let C=Ge+Ne,ft=ye+Ne,tt=We-Je,T=_e+(ne-Je),m=oe*ye/ft*C,N=Ae*ye/ft*C;W.projectionMatrix.makePerspective(tt,T,m,N,C,ft),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Ue(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let te=W.near,j=W.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(j=p.depthFar)),k.near=L.near=D.near=te,k.far=L.far=D.far=j,(B!==k.near||Q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,Q=k.far),k.layers.mask=W.layers.mask|6,D.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let ne=W.parent,re=k.cameras;Ue(k,ne);for(let le=0;le<re.length;le++)Ue(re[le],ne);re.length===2?J(k,D,L):k.projectionMatrix.copy(D.projectionMatrix),_===null&&W.isPerspectiveCamera&&(_={camera:W,fov:W.fov,zoom:W.zoom}),be(W,k,ne)};function be(W,te,j){j===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(j.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ti*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(W){return f[W]};let At=null;function qe(W,te){if(l=te.getViewerPose(A||o),g=te,l!==null){let j=l.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ne=!1;j.length!==k.cameras.length&&(k.cameras.length=0,ne=!0);for(let ye=0;ye<j.length;ye++){let oe=j[ye],Ae=null;if(d!==null)Ae=d.getViewport(oe);else{let Re=u.getViewSubImage(h,oe);Ae=Re.viewport,ye===0&&(e.setRenderTargetTextures(M,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(M))}let Me=F[ye];Me===void 0&&(Me=new St,Me.layers.enable(ye),Me.viewport=new at,F[ye]=Me),Me.matrix.fromArray(oe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(oe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ye===0&&(k.matrix.copy(Me.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ne===!0&&k.cameras.push(Me)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ye=u.getDepthInformation(j[0]);ye&&ye.isValid&&ye.texture&&p.init(ye,s.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ye=0;ye<j.length;ye++){let oe=j[ye].camera;if(oe){let Ae=f[oe];Ae||(Ae=new tr,f[oe]=Ae);let Me=u.getCameraImage(oe);Ae.sourceTexture=Me}}}}for(let j=0;j<y.length;j++){let ne=w[j],re=y[j];ne!==null&&re!==void 0&&re.update(ne,te,A||o)}At&&At(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let et=new Nh;et.setAnimationLoop(qe),this.setAnimationLoop=function(W){At=W},this.dispose=function(){}}},Kg=new Qe,Gh=new ke;Gh.set(-1,0,0,0,1,0,0,0,1);function Jg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,NA(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,b,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),l(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,b):f.isSpriteMaterial?A(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Gt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Gt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=e.get(f),b=E.envMap,M=E.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Gh),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function A(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zg(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let w=y.program;n.uniformBlockBinding(M,w)}function A(M,y){let w=s[M.id];w===void 0&&(p(M),w=l(M),s[M.id]=w,M.addEventListener("dispose",E));let S=y.program;n.updateUBOMapping(M,S);let x=e.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function l(M){let y=u();M.__bindingPointIndex=y;let w=i.createBuffer(),S=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let y=s[M.id],w=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,_=w.length;x<_;x++){let D=w[x];if(Array.isArray(D))for(let L=0,F=D.length;L<F;L++)d(D[L],x,L,S);else d(D,x,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,w,S){if(v(M,y,w,S)===!0){let x=M.__offset,_=M.value;if(Array.isArray(_)){let D=0;for(let L=0;L<_.length;L++){let F=_[L],k=f(F);g(F,M.__data,D),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,y,w){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,w)}function v(M,y,w,S){let x=M.value,_=y+"_"+w;if(S[_]===void 0)return typeof x=="number"||typeof x=="boolean"?S[_]=x:ArrayBuffer.isView(x)?S[_]=x.slice():S[_]=x.clone(),!0;{let D=S[_];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return S[_]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function p(M){let y=M.uniforms,w=0,S=16;for(let _=0,D=y.length;_<D;_++){let L=Array.isArray(y[_])?y[_]:[y[_]];for(let F=0,k=L.length;F<k;F++){let B=L[F],Q=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,G=Q.length;Y<G;Y++){let se=Q[Y],X=f(se),ee=w%S,J=ee%X.boundary,Ue=ee+J;w+=J,Ue!==0&&S-Ue<X.storage&&(w+=S-Ue),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=X.storage}}}let x=w%S;return x>0&&(w+=S-x),M.__size=w,M.__cache={},this}function f(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),y}function E(M){let y=M.target;y.removeEventListener("dispose",E);let w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function b(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:A,dispose:b}}var $g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rn=null;function e0(){return Rn===null&&(Rn=new cs($g,16,16,pi,vn),Rn.name="DFG_LUT",Rn.minFilter=yt,Rn.magFilter=yt,Rn.wrapS=an,Rn.wrapT=an,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}var va=class{constructor(e={}){let{canvas:t=ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:A=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Xt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=d,p=new Set([Oo,Fo,No]),f=new Set([Xt,Mn,ys,ws,Ro,Lo]),E=new Uint32Array(4),b=new Int32Array(4),M=new U,y=null,w=null,S=[],x=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,L=!1,F=null,k=null,B=null,Q=null;this._outputColorSpace=gt;let Y=0,G=0,se=null,X=-1,ee=null,J=new at,Ue=new at,be=null,At=new Fe(0),qe=0,et=t.width,W=t.height,te=1,j=null,ne=null,re=new at(0,0,et,W),le=new at(0,0,et,W),Ge=!1,ye=new ls,oe=!1,Ae=!1,Me=new Qe,Re=new U,We=new at,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Je(){return se===null?te:1}let C=n;function ft(P,I){return t.getContext(P,I)}let tt,T,m,N,V,q,ae,ce,K,$,he,Ie,pe,ue,Be,Oe,Ve,R,de,Z,fe,Pe,ie;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:A,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",cn,!1),C===null){let I="webgl2";if(C=ft(I,P),C===null)throw ft(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(P){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),ze("WebGLRenderer: "+P.message),P}function Le(){tt=new am(C),tt.init(),fe=new Yg(C,tt),T=new Jp(C,tt,e,fe),m=new Wg(C,tt),T.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),k=C.createFramebuffer(),B=C.createFramebuffer(),Q=C.createFramebuffer(),N=new lm(C),V=new Ig,q=new jg(C,tt,m,V,T,fe,N),ae=new om(D),ce=new hd(C),Pe=new qp(C,ce),K=new Am(C,ce,N,Pe),$=new um(C,K,ce,Pe,N),R=new hm(C,T,q),Be=new Zp(V),he=new Dg(D,ae,tt,T,Pe,Be),Ie=new Jg(D,V),pe=new Rg,ue=new zg(tt),Ve=new Xp(D,ae,m,$,g,c),Oe=new Hg(D,$,T),ie=new Zg(C,N,T,m),de=new Kp(C,tt,N),Z=new cm(C,tt,N),N.programs=he.programs,D.capabilities=T,D.extensions=tt,D.properties=V,D.renderLists=pe,D.shadowMap=Oe,D.state=m,D.info=N}v!==Xt&&(_=new fm(v,t.width,t.height,a,s,r));let Se=new rc(D,C);this.xr=Se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let P=tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(P){P!==void 0&&(te=P,this.setSize(et,W,!1))},this.getSize=function(P){return P.set(et,W)},this.setSize=function(P,I,H=!0){if(Se.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}et=P,W=I,t.width=Math.floor(P*te),t.height=Math.floor(I*te),H===!0&&(t.style.width=P+"px",t.style.height=I+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,P,I)},this.getDrawingBufferSize=function(P){return P.set(et*te,W*te).floor()},this.setDrawingBufferSize=function(P,I,H){et=P,W=I,te=H,t.width=Math.floor(P*H),t.height=Math.floor(I*H),this.setViewport(0,0,P,I)},this.setEffects=function(P){if(v===Xt){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let I=0;I<P.length;I++)if(P[I].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(J)},this.getViewport=function(P){return P.copy(re)},this.setViewport=function(P,I,H,O){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,I,H,O),m.viewport(J.copy(re).multiplyScalar(te).round())},this.getScissor=function(P){return P.copy(le)},this.setScissor=function(P,I,H,O){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,I,H,O),m.scissor(Ue.copy(le).multiplyScalar(te).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(P){m.setScissorTest(Ge=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){ne=P},this.getClearColor=function(P){return P.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(P=!0,I=!0,H=!0){let O=0;if(P){let z=!1;if(se!==null){let xe=se.texture.format;z=p.has(xe)}if(z){let xe=se.texture.type,we=f.has(xe),ge=Ve.getClearColor(),Ee=Ve.getClearAlpha(),Ce=ge.r,je=ge.g,Ze=ge.b;we?(E[0]=Ce,E[1]=je,E[2]=Ze,E[3]=Ee,C.clearBufferuiv(C.COLOR,0,E)):(b[0]=Ce,b[1]=je,b[2]=Ze,b[3]=Ee,C.clearBufferiv(C.COLOR,0,b))}else O|=C.COLOR_BUFFER_BIT}I&&(O|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),F=P},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Ve.dispose(),pe.dispose(),ue.dispose(),V.dispose(),ae.dispose(),$.dispose(),Pe.dispose(),ie.dispose(),he.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Nc),Se.removeEventListener("sessionend",Fc),xi.stop()};function ut(P){P.preventDefault(),Gs("WebGLRenderer: Context Lost."),L=!0}function it(){Gs("WebGLRenderer: Context Restored."),L=!1;let P=N.autoReset,I=Oe.enabled,H=Oe.autoUpdate,O=Oe.needsUpdate,z=Oe.type;Le(),N.autoReset=P,Oe.enabled=I,Oe.autoUpdate=H,Oe.needsUpdate=O,Oe.type=z}function cn(P){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function yn(P){let I=P.target;I.removeEventListener("dispose",yn),eu(I)}function eu(P){tu(P),V.remove(P)}function tu(P){let I=V.get(P).programs;I!==void 0&&(I.forEach(function(H){he.releaseProgram(H)}),P.isShaderMaterial&&he.releaseShaderCache(P))}this.renderBufferDirect=function(P,I,H,O,z,xe){I===null&&(I=_e);let we=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=su(P,I,H,O,z);m.setMaterial(O,we);let Ee=H.index,Ce=1;if(O.wireframe===!0){if(Ee=K.getWireframeAttribute(H),Ee===void 0)return;Ce=2}let je=H.drawRange,Ze=H.attributes.position,Te=je.start*Ce,st=(je.start+je.count)*Ce;xe!==null&&(Te=Math.max(Te,xe.start*Ce),st=Math.min(st,(xe.start+xe.count)*Ce)),Ee!==null?(Te=Math.max(Te,0),st=Math.min(st,Ee.count)):Ze!=null&&(Te=Math.max(Te,0),st=Math.min(st,Ze.count));let Et=st-Te;if(Et<0||Et===1/0)return;Pe.setup(z,O,ge,H,Ee);let pt,lt=de;if(Ee!==null&&(pt=ce.get(Ee),lt=Z,lt.setIndex(pt)),z.isMesh)O.wireframe===!0?(m.setLineWidth(O.wireframeLinewidth*Je()),lt.setMode(C.LINES)):lt.setMode(C.TRIANGLES);else if(z.isLine){let Lt=O.linewidth;Lt===void 0&&(Lt=1),m.setLineWidth(Lt*Je()),z.isLineSegments?lt.setMode(C.LINES):z.isLineLoop?lt.setMode(C.LINE_LOOP):lt.setMode(C.LINE_STRIP)}else z.isPoints?lt.setMode(C.POINTS):z.isSprite&&lt.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Lt=z._multiDrawStarts,ve=z._multiDrawCounts,Ot=z._multiDrawCount,nt=Ee?ce.get(Ee).bytesPerElement:1,rn=V.get(O).currentProgram.getUniforms();for(let wn=0;wn<Ot;wn++)rn.setValue(C,"_gl_DrawID",wn),lt.render(Lt[wn]/nt,ve[wn])}else if(z.isInstancedMesh)lt.renderInstances(Te,Et,z.count);else if(H.isInstancedBufferGeometry){let Lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ve=Math.min(H.instanceCount,Lt);lt.renderInstances(Te,Et,ve)}else lt.render(Te,Et)};function Uc(P,I,H,O){F!==null&&P.isNodeMaterial&&F.setObject(O,P),oe===!0&&Be.setState(P,H,!1),P.transparent===!0&&P.side===Yt&&P.forceSinglePass===!1?(P.side=Gt,P.needsUpdate=!0,Sr(P,I,O),P.side=In,P.needsUpdate=!0,Sr(P,I,O),P.side=Yt):Sr(P,I,O)}this.compile=function(P,I,H=null){H===null&&(H=P),F!==null&&F.renderStart(P,I,H),w=ue.get(H),w.init(I),x.push(w),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),P!==H&&P.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Ae=this.localClippingEnabled,oe=Be.init(this.clippingPlanes,Ae),oe===!0&&Be.setGlobalState(this.clippingPlanes,I),F!==null&&Oe.render(w.state.shadowsArray,H,I);let O=new Set;return P.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let xe=z.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let ge=xe[we];Uc(ge,H,I,z),O.add(ge)}else Uc(xe,H,I,z),O.add(xe)}),w=x.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(P,I,H=null){let O=this.compile(P,I,H);return new Promise(z=>{function xe(){if(O.forEach(function(we){let Ee=V.get(we).currentProgram;(Ee===void 0||Ee.isReady())&&O.delete(we)}),O.size===0){z(P);return}setTimeout(xe,10)}tt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Sa=null;function nu(P){Sa&&Sa(P)}function Nc(){xi.stop()}function Fc(){xi.start()}let xi=new Nh;xi.setAnimationLoop(nu),typeof self!="undefined"&&xi.setContext(self),this.setAnimationLoop=function(P){Sa=P,Se.setAnimationLoop(P),P===null?xi.stop():xi.start()},Se.addEventListener("sessionstart",Nc),Se.addEventListener("sessionend",Fc),this.render=function(P,I){if(I!==void 0&&I.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(P,I);let H=Se.enabled===!0&&Se.isPresenting===!0,O=_!==null&&(se===null||H)&&_.begin(D,se);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(I),I=Se.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,I,se),w=ue.get(P,x.length),w.init(I),w.state.textureUnits=q.getTextureUnits(),x.push(w),Me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ye.setFromProjectionMatrix(Me,pn,I.reversedDepth),Ae=this.localClippingEnabled,oe=Be.init(this.clippingPlanes,Ae),y=pe.get(P,S.length),y.init(),S.push(y),Se.enabled===!0&&Se.isPresenting===!0){let we=D.xr.getDepthSensingMesh();we!==null&&ba(we,I,-1/0,D.sortObjects)}ba(P,I,0,D.sortObjects),y.finish(),F!==null&&F.updateLights(w.state.lightsArray),D.sortObjects===!0&&y.sort(j,ne),Ne=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ne&&Ve.addToRenderList(y,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Be.beginShadows();let z=w.state.shadowsArray;if(Oe.render(z,P,I),oe===!0&&Be.endShadows(),(O&&_.hasRenderPass())===!1){let we=y.opaque,ge=y.transmissive;if(w.setupLights(),I.isArrayCamera){let Ee=I.cameras;if(ge.length>0)for(let Ce=0,je=Ee.length;Ce<je;Ce++){let Ze=Ee[Ce];zc(we,ge,P,Ze)}Ne&&Ve.render(P);for(let Ce=0,je=Ee.length;Ce<je;Ce++){let Ze=Ee[Ce];Oc(y,P,Ze,Ze.viewport)}}else ge.length>0&&zc(we,ge,P,I),Ne&&Ve.render(P),Oc(y,P,I)}se!==null&&G===0&&(q.updateMultisampleRenderTarget(se),q.updateRenderTargetMipmap(se)),O&&_.end(D),P.isScene===!0&&P.onAfterRender(D,P,I),Pe.resetDefaultState(),X=-1,ee=null,x.pop(),x.length>0?(w=x[x.length-1],q.setTextureUnits(w.state.textureUnits),oe===!0&&Be.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,S.pop(),S.length>0?y=S[S.length-1]:y=null,F!==null&&F.renderEnd()};function ba(P,I,H,O){if(P.visible===!1)return;if(P.layers.test(I.layers)){if(P.isGroup)H=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(I);else if(P.isLightProbeGrid)w.pushLightProbeGrid(P);else if(P.isLight)w.pushLight(P),P.castShadow&&w.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ye)){O&&We.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Me);let we=$.update(P),ge=P.material;ge.visible&&y.push(P,we,ge,H,We.z,null,I)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ye))){let we=$.update(P),ge=P.material;if(O&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),We.copy(P.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),We.copy(we.boundingSphere.center)),We.applyMatrix4(P.matrixWorld).applyMatrix4(Me)),Array.isArray(ge)){let Ee=we.groups;for(let Ce=0,je=Ee.length;Ce<je;Ce++){let Ze=Ee[Ce],Te=ge[Ze.materialIndex];Te&&Te.visible&&y.push(P,we,Te,H,We.z,Ze,I)}}else ge.visible&&y.push(P,we,ge,H,We.z,null,I)}}let xe=P.children;for(let we=0,ge=xe.length;we<ge;we++)ba(xe[we],I,H,O)}function Oc(P,I,H,O){let{opaque:z,transmissive:xe,transparent:we}=P;w.setupLightsView(H),oe===!0&&Be.setGlobalState(D.clippingPlanes,H),O&&m.viewport(J.copy(O)),z.length>0&&Tr(z,I,H),xe.length>0&&Tr(xe,I,H),we.length>0&&Tr(we,I,H),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function zc(P,I,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let Te=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Vt(1,1,{generateMipmaps:!0,type:Te?vn:Xt,minFilter:Pn,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let xe=w.state.transmissionRenderTarget[O.id],we=O.viewport||J;xe.setSize(we.z*D.transmissionResolutionScale,we.w*D.transmissionResolutionScale);let ge=D.getRenderTarget(),Ee=D.getActiveCubeFace(),Ce=D.getActiveMipmapLevel();D.setRenderTarget(xe),D.getClearColor(At),qe=D.getClearAlpha(),qe<1&&D.setClearColor(16777215,.5),D.clear(),Ne&&Ve.render(H);let je=D.toneMapping;D.toneMapping=xn;let Ze=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),oe===!0&&Be.setGlobalState(D.clippingPlanes,O),Tr(P,H,O),q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let st=0,Et=I.length;st<Et;st++){let pt=I[st],{object:lt,geometry:Lt,material:ve,group:Ot}=pt;if(ve.side===Yt&&lt.layers.test(O.layers)){let nt=ve.side;ve.side=Gt,ve.needsUpdate=!0,kc(lt,H,O,Lt,ve,Ot),ve.side=nt,ve.needsUpdate=!0,Te=!0}}Te===!0&&(q.updateMultisampleRenderTarget(xe),q.updateRenderTargetMipmap(xe))}D.setRenderTarget(ge,Ee,Ce),D.setClearColor(At,qe),Ze!==void 0&&(O.viewport=Ze),D.toneMapping=je}function Tr(P,I,H){let O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,xe=P.length;z<xe;z++){let we=P[z],{object:ge,geometry:Ee,group:Ce}=we,je=we.material;je.allowOverride===!0&&O!==null&&(je=O),ge.layers.test(H.layers)&&kc(ge,I,H,Ee,je,Ce)}}function kc(P,I,H,O,z,xe){F!==null&&z.isNodeMaterial&&F.setObject(P,z),P.onBeforeRender(D,I,H,O,z,xe),P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),z.onBeforeRender(D,I,H,O,P,xe),z.transparent===!0&&z.side===Yt&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,D.renderBufferDirect(H,I,O,z,P,xe),z.side=In,z.needsUpdate=!0,D.renderBufferDirect(H,I,O,z,P,xe),z.side=Yt):D.renderBufferDirect(H,I,O,z,P,xe),P.onAfterRender(D,I,H,O,z,xe)}function Sr(P,I,H){I.isScene!==!0&&(I=_e);let O=V.get(P),z=w.state.lights,xe=w.state.shadowsArray,we=z.state.version,ge=he.getParameters(P,z.state,xe,I,H,w.state.lightProbeGridArray),Ee=he.getProgramCacheKey(ge),Ce=O.programs;O.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let je=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;O.envMap=ae.get(P.envMap||O.environment,je),O.envMapRotation=O.environment!==null&&P.envMap===null?I.environmentRotation:P.envMapRotation,Ce===void 0&&(P.addEventListener("dispose",yn),Ce=new Map,O.programs=Ce);let Ze=Ce.get(Ee);if(Ze!==void 0){if(O.currentProgram===Ze&&O.lightsStateVersion===we)return Gc(P,ge),Ze}else ge.uniforms=he.getUniforms(P),F!==null&&P.isNodeMaterial&&F.build(P,H,ge),P.onBeforeCompile(ge,D),Ze=he.acquireProgram(ge,Ee),Ce.set(Ee,Ze),O.uniforms=ge.uniforms;let Te=O.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Te.clippingPlanes=Be.uniform),Gc(P,ge),O.needsLights=ou(P),O.lightsStateVersion=we,O.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.sunLights.value=z.state.sun,Te.sunLightShadows.value=z.state.sunShadow,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.sunShadowMatrix.value=z.state.sunShadowMatrix,Te.sunShadowCascade.value=z.state.sunShadowCascade,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=w.state.lightProbeGridArray.length>0,O.currentProgram=Ze,O.uniformsList=null,Ze}function Qc(P){if(P.uniformsList===null){let I=P.currentProgram.getUniforms();P.uniformsList=Ss.seqWithValue(I.seq,P.uniforms)}return P.uniformsList}function Gc(P,I){let H=V.get(P);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function iu(P,I){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let H=0,O=P.length;H<O;H++){let z=P[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function su(P,I,H,O,z){I.isScene!==!0&&(I=_e),q.resetTextureUnits();let xe=I.fog,we=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ge=se===null?D.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xe.workingColorSpace,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ce=ae.get(O.envMap||we,Ee),je=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ze=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color,pt=xn;O.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(pt=D.toneMapping);let lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Lt=lt!==void 0?lt.length:0,ve=V.get(O),Ot=w.state.lights;if(oe===!0&&(Ae===!0||P!==ee)){let dt=P===ee&&O.id===X;Be.setState(O,P,dt)}let nt=!1;O.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ot.state.version||ve.outputColorSpace!==ge||z.isBatchedMesh&&ve.batching===!1||!z.isBatchedMesh&&ve.batching===!0||z.isBatchedMesh&&ve.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ve.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ve.instancing===!1||!z.isInstancedMesh&&ve.instancing===!0||z.isSkinnedMesh&&ve.skinning===!1||!z.isSkinnedMesh&&ve.skinning===!0||z.isInstancedMesh&&ve.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ve.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ve.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ve.instancingMorph===!1&&z.morphTexture!==null||ve.envMap!==Ce||O.fog===!0&&ve.fog!==xe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Be.numPlanes||ve.numIntersection!==Be.numIntersection)||ve.vertexAlphas!==je||ve.vertexTangents!==Ze||ve.morphTargets!==Te||ve.morphNormals!==st||ve.morphColors!==Et||ve.toneMapping!==pt||ve.morphTargetsCount!==Lt||!!ve.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,ve.__version=O.version);let rn=ve.currentProgram;nt===!0&&(rn=Sr(O,I,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,rn,ve));let wn=!1,$n=!1,Ni=!1,ct=rn.getUniforms(),xt=ve.uniforms;if(m.useProgram(rn.program)&&(wn=!0,$n=!0,Ni=!0),O.id!==X&&(X=O.id,$n=!0),ve.needsLights){let dt=iu(w.state.lightProbeGridArray,z);ve.lightProbeGrid!==dt&&(ve.lightProbeGrid=dt,$n=!0)}if(wn||ee!==P){m.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ct.setValue(C,"projectionMatrix",P.projectionMatrix),ct.setValue(C,"viewMatrix",P.matrixWorldInverse);let ti=ct.map.cameraPosition;ti!==void 0&&ti.setValue(C,Re.setFromMatrixPosition(P.matrixWorld)),T.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ct.setValue(C,"isOrthographic",P.isOrthographicCamera===!0),ee!==P&&(ee=P,$n=!0,Ni=!0)}if(ve.needsLights&&(Ot.state.sunShadowMap.length>0&&ct.setValue(C,"sunShadowMap",Ot.state.sunShadowMap,q),Ot.state.directionalShadowMap.length>0&&ct.setValue(C,"directionalShadowMap",Ot.state.directionalShadowMap,q),Ot.state.spotShadowMap.length>0&&ct.setValue(C,"spotShadowMap",Ot.state.spotShadowMap,q),Ot.state.pointShadowMap.length>0&&ct.setValue(C,"pointShadowMap",Ot.state.pointShadowMap,q)),z.isSkinnedMesh){ct.setOptional(C,z,"bindMatrix"),ct.setOptional(C,z,"bindMatrixInverse");let dt=z.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(C,"boneTexture",dt.boneTexture,q))}z.isBatchedMesh&&(ct.setOptional(C,z,"batchingTexture"),ct.setValue(C,"batchingTexture",z._matricesTexture,q),ct.setOptional(C,z,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",z._indirectTexture,q),ct.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",z._colorsTexture,q));let ei=H.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&R.update(z,H,rn),($n||ve.receiveShadow!==z.receiveShadow)&&(ve.receiveShadow=z.receiveShadow,ct.setValue(C,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(xt.envMapIntensity.value=I.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=e0()),$n){if(ct.setValue(C,"toneMappingExposure",D.toneMappingExposure),ve.needsLights&&ru(xt,Ni),xe&&O.fog===!0&&Ie.refreshFogUniforms(xt,xe),Ie.refreshMaterialUniforms(xt,O,te,W,w.state.transmissionRenderTarget[P.id]),ve.needsLights&&ve.lightProbeGrid){let dt=ve.lightProbeGrid;xt.probesSH.value=dt.texture,xt.probesMin.value.copy(dt.boundingBox.min),xt.probesMax.value.copy(dt.boundingBox.max),xt.probesResolution.value.copy(dt.resolution)}Ss.upload(C,Qc(ve),xt,q)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ss.upload(C,Qc(ve),xt,q),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ct.setValue(C,"center",z.center),ct.setValue(C,"modelViewMatrix",z.modelViewMatrix),ct.setValue(C,"normalMatrix",z.normalMatrix),ct.setValue(C,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let dt=O.uniformsGroups;for(let ti=0,Fi=dt.length;ti<Fi;ti++){let Hc=dt[ti];ie.update(Hc,rn),ie.bind(Hc,rn)}}return rn}function ru(P,I){P.ambientLightColor.needsUpdate=I,P.lightProbe.needsUpdate=I,P.sunLights.needsUpdate=I,P.sunLightShadows.needsUpdate=I,P.directionalLights.needsUpdate=I,P.directionalLightShadows.needsUpdate=I,P.pointLights.needsUpdate=I,P.pointLightShadows.needsUpdate=I,P.spotLights.needsUpdate=I,P.spotLightShadows.needsUpdate=I,P.rectAreaLights.needsUpdate=I,P.hemisphereLights.needsUpdate=I}function ou(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(P,I,H){let O=V.get(P);O.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),V.get(P.texture).__webglTexture=I,V.get(P.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,I){let H=V.get(P);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(P,I=0,H=0){se=P,Y=I,G=H;let O=null,z=!1,xe=!1;if(P){let ge=V.get(P);if(ge.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(C.FRAMEBUFFER,ge.__webglFramebuffer),J.copy(P.viewport),Ue.copy(P.scissor),be=P.scissorTest,m.viewport(J),m.scissor(Ue),m.setScissorTest(be),X=-1;return}else if(ge.__webglFramebuffer===void 0)q.setupRenderTarget(P);else if(ge.__hasExternalTextures)q.rebindTextures(P,V.get(P.texture).__webglTexture,V.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let je=P.depthTexture;if(ge.__boundDepthTexture!==je){if(je!==null&&V.has(je)&&(P.width!==je.image.width||P.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(P)}}let Ee=P.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(xe=!0);let Ce=V.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?O=Ce[I][H]:O=Ce[I],z=!0):P.samples>0&&q.useMultisampledRTT(P)===!1?O=V.get(P).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[H]:O=Ce,J.copy(P.viewport),Ue.copy(P.scissor),be=P.scissorTest}else J.copy(re).multiplyScalar(te).floor(),Ue.copy(le).multiplyScalar(te).floor(),be=Ge;if(H!==0&&(O=k),m.bindFramebuffer(C.FRAMEBUFFER,O)&&m.drawBuffers(P,O),m.viewport(J),m.scissor(Ue),m.setScissorTest(be),z){let ge=V.get(P.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,H)}else if(xe){let ge=I;for(let Ee=0;Ee<P.textures.length;Ee++){let Ce=V.get(P.textures[Ee]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,H,ge)}}else if(P!==null&&H!==0){let ge=V.get(P.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ge.__webglTexture,H)}X=-1};function Vc(P){let I=V.get(P);return(I.__readFormat!==P.format||I.__readType!==P.type)&&(I.__readFormat=P.format,I.__readType=P.type,I.__formatReadable=T.textureFormatReadable(P.format),I.__typeReadable=T.textureTypeReadable(P.type)),I}this.readRenderTargetPixels=function(P,I,H,O,z,xe,we,ge=0){if(!(P&&P.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=V.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){m.bindFramebuffer(C.FRAMEBUFFER,Ee);try{let Ce=P.textures[ge],je=Ce.format,Ze=Ce.type;P.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ge);let Te=Vc(Ce);if(Te.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=P.width-O&&H>=0&&H<=P.height-z&&C.readPixels(I,H,O,z,fe.convert(je),fe.convert(Ze),xe)}finally{let Ce=se!==null?V.get(se).__webglFramebuffer:null;m.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(P,I,H,O,z,xe,we,ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=V.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(I>=0&&I<=P.width-O&&H>=0&&H<=P.height-z){m.bindFramebuffer(C.FRAMEBUFFER,Ee);let Ce=P.textures[ge],je=Ce.format,Ze=Ce.type;P.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ge);let Te=Vc(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,st),C.bufferData(C.PIXEL_PACK_BUFFER,xe.byteLength,C.STREAM_READ),C.readPixels(I,H,O,z,fe.convert(je),fe.convert(Ze),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Et=se!==null?V.get(se).__webglFramebuffer:null;m.bindFramebuffer(C.FRAMEBUFFER,Et);let pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ch(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,st),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xe),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(st),C.deleteSync(pt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,I=null,H=0){let O=Math.pow(2,-H),z=Math.floor(P.image.width*O),xe=Math.floor(P.image.height*O),we=I!==null?I.x:0,ge=I!==null?I.y:0;q.setTexture2D(P,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,we,ge,z,xe),m.unbindTexture()},this.copyTextureToTexture=function(P,I,H=null,O=null,z=0,xe=0){let we,ge,Ee,Ce,je,Ze,Te,st,Et,pt=P.isCompressedTexture?P.mipmaps[xe]:P.image;if(H!==null)we=H.max.x-H.min.x,ge=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,je=H.min.y,Ze=H.isBox3?H.min.z:0;else{let xt=Math.pow(2,-z);we=Math.floor(pt.width*xt),ge=Math.floor(pt.height*xt),P.isDataArrayTexture?Ee=pt.depth:P.isData3DTexture?Ee=Math.floor(pt.depth*xt):Ee=1,Ce=0,je=0,Ze=0}O!==null?(Te=O.x,st=O.y,Et=O.z):(Te=0,st=0,Et=0);let lt=fe.convert(I.format),Lt=fe.convert(I.type),ve;I.isData3DTexture?(q.setTexture3D(I,0),ve=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(q.setTexture2DArray(I,0),ve=C.TEXTURE_2D_ARRAY):(q.setTexture2D(I,0),ve=C.TEXTURE_2D),m.activeTexture(C.TEXTURE0),m.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),m.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),m.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let Ot=m.getParameter(C.UNPACK_ROW_LENGTH),nt=m.getParameter(C.UNPACK_IMAGE_HEIGHT),rn=m.getParameter(C.UNPACK_SKIP_PIXELS),wn=m.getParameter(C.UNPACK_SKIP_ROWS),$n=m.getParameter(C.UNPACK_SKIP_IMAGES);m.pixelStorei(C.UNPACK_ROW_LENGTH,pt.width),m.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt.height),m.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),m.pixelStorei(C.UNPACK_SKIP_ROWS,je),m.pixelStorei(C.UNPACK_SKIP_IMAGES,Ze);let Ni=P.isDataArrayTexture||P.isData3DTexture,ct=I.isDataArrayTexture||I.isData3DTexture;if(P.isDepthTexture){let xt=V.get(P),ei=V.get(I),dt=V.get(xt.__renderTarget),ti=V.get(ei.__renderTarget);m.bindFramebuffer(C.READ_FRAMEBUFFER,dt.__webglFramebuffer),m.bindFramebuffer(C.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Fi=0;Fi<Ee;Fi++)Ni&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,V.get(P).__webglTexture,z,Ze+Fi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,V.get(I).__webglTexture,xe,Et+Fi)),C.blitFramebuffer(Ce,je,we,ge,Te,st,we,ge,C.DEPTH_BUFFER_BIT,C.NEAREST);m.bindFramebuffer(C.READ_FRAMEBUFFER,null),m.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||P.isRenderTargetTexture||V.has(P)){let xt=V.get(P),ei=V.get(I);m.bindFramebuffer(C.READ_FRAMEBUFFER,B),m.bindFramebuffer(C.DRAW_FRAMEBUFFER,Q);for(let dt=0;dt<Ee;dt++)Ni?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.__webglTexture,z,Ze+dt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xt.__webglTexture,z),ct?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ei.__webglTexture,xe,Et+dt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ei.__webglTexture,xe),z!==0?C.blitFramebuffer(Ce,je,we,ge,Te,st,we,ge,C.COLOR_BUFFER_BIT,C.NEAREST):ct?C.copyTexSubImage3D(ve,xe,Te,st,Et+dt,Ce,je,we,ge):C.copyTexSubImage2D(ve,xe,Te,st,Ce,je,we,ge);m.bindFramebuffer(C.READ_FRAMEBUFFER,null),m.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ct?P.isDataTexture||P.isData3DTexture?C.texSubImage3D(ve,xe,Te,st,Et,we,ge,Ee,lt,Lt,pt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(ve,xe,Te,st,Et,we,ge,Ee,lt,pt.data):C.texSubImage3D(ve,xe,Te,st,Et,we,ge,Ee,lt,Lt,pt):P.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,xe,Te,st,we,ge,lt,Lt,pt.data):P.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,xe,Te,st,pt.width,pt.height,lt,pt.data):C.texSubImage2D(C.TEXTURE_2D,xe,Te,st,we,ge,lt,Lt,pt);m.pixelStorei(C.UNPACK_ROW_LENGTH,Ot),m.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt),m.pixelStorei(C.UNPACK_SKIP_PIXELS,rn),m.pixelStorei(C.UNPACK_SKIP_ROWS,wn),m.pixelStorei(C.UNPACK_SKIP_IMAGES,$n),xe===0&&I.generateMipmaps&&C.generateMipmap(ve),m.unbindTexture()},this.initRenderTarget=function(P){V.get(P).__webglFramebuffer===void 0&&q.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?q.setTextureCube(P,0):P.isData3DTexture?q.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?q.setTexture2DArray(P,0):q.setTexture2D(P,0),m.unbindTexture()},this.resetState=function(){Y=0,G=0,se=null,m.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};function oc(i,e){if(e===IA)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===_s||e===vr){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===_s)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Vh(i){let e=new Map,t=new Map,n=i.clone();return Hh(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hh(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Hh(i.children[n],e.children[n],t)}var _a=class extends Dn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dc(t)}),this.register(function(t){return new fc(t)}),this.register(function(t){return new wc(t)}),this.register(function(t){return new _c(t)}),this.register(function(t){return new Ec(t)}),this.register(function(t){return new mc(t)}),this.register(function(t){return new gc(t)}),this.register(function(t){return new xc(t)}),this.register(function(t){return new Pc(t)}),this.register(function(t){return new uc(t)}),this.register(function(t){return new Mc(t)}),this.register(function(t){return new pc(t)}),this.register(function(t){return new yc(t)}),this.register(function(t){return new vc(t)}),this.register(function(t){return new lc(t)}),this.register(function(t){return new Ea(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ea(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tc(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let A=Kn.extractUrlBase(e);o=Kn.resolveURL(A,this.path)}else o=Kn.extractUrlBase(e);this.manager.itemStart(e);let a=function(A){s?s(A):console.error(A),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ms(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(A){try{r.parse(A,o,function(l){t(l),r.manager.itemEnd(e)},a)}catch(l){a(l)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===qh){try{o[Ke.KHR_BINARY_GLTF]=new Sc(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let A=new Lc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});A.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let u=this.pluginCallbacks[l](A);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let l=0;l<r.extensionsUsed.length;++l){let u=r.extensionsUsed[l],h=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new hc;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new bc(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new Cc;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new Dc;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}A.setExtensions(o),A.setPlugins(a),A.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function n0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function _t(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},lc=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],A,l=new Fe(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],kt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":A=new ui(l),A.target.position.set(0,0,-1),A.add(A.target);break;case"point":A=new lr(l),A.distance=u;break;case"spot":A=new cr(l),A.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,A.angle=c.spot.outerConeAngle,A.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,A.target.position.set(0,0,-1),A.add(A.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return A.position.set(0,0,0),Un(A,c),c.intensity!==void 0&&(A.intensity=c.intensity),A.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(A),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},hc=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return gn}extendParams(e,t,n){let s=[];e.color=new Fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(s)}},uc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},dc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(r,r)}return Promise.all(s)}},fc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},pc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},mc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],kt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},gc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},xc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(r[0],r[1],r[2],kt),Promise.all(s)}},Pc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Mc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(r[0],r[1],r[2],kt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,gt)),Promise.all(s)}},vc=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},yc=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return _t(this.parser,e,this.name)!==null?Rt:null}extendMaterialParams(e,t){let n=_t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},wc=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},_c=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let A=n.options.manager.getHandler(a.uri);A!==null&&(c=A)}return n.loadTextureImage(e,o.source,c)}},Ec=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let A=n.options.manager.getHandler(a.uri);A!==null&&(c=A)}return n.loadTextureImage(e,o.source,c)}},Ea=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,A=s.byteLength||0,l=s.count,u=s.byteStride,h=new Uint8Array(a,c,A);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(l,u,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(l*u);return o.decodeGltfBuffer(new Uint8Array(d),l,u,h,s.mode,s.filter),d})})}else return null}},Tc=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let A of s.primitives)if(A.mode!==An.TRIANGLES&&A.mode!==An.TRIANGLE_STRIP&&A.mode!==An.TRIANGLE_FAN&&A.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let A in o)a.push(this.parser.getDependency("accessor",o[A]).then(l=>(c[A]=l,c[A])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(A=>{let l=A.pop(),u=l.isGroup?l.children:[l],h=A[0].count,d=[];for(let g of u){let v=new Qe,p=new U,f=new Qt,E=new U(1,1,1),b=new Ks(g.geometry,g.material,h);for(let y=0;y<h;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&E.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,v.compose(p,f,E));let M=null;for(let y in c)if(y==="_COLOR_0"){let w=c[y];b.instanceColor=new Hn(w.array,w.itemSize,w.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(M===null){let S=b.geometry;M=new Bt,M.name=S.name;for(let x in S.attributes)M.setAttribute(x,S.attributes[x]);for(let x in S.morphAttributes)M.morphAttributes[x]=S.morphAttributes[x];S.index!==null&&M.setIndex(S.index),M.morphTargetsRelative=S.morphTargetsRelative;for(let x of S.groups)M.addGroup(x.start,x.count,x.materialIndex);S.boundingBox!==null&&(M.boundingBox=S.boundingBox.clone()),S.boundingSphere!==null&&(M.boundingSphere=S.boundingSphere.clone()),M.drawRange.start=S.drawRange.start,M.drawRange.count=S.drawRange.count,M.userData=Object.assign({},S.userData),b.geometry=M}let w=c[y];M.setAttribute(y,new Hn(w.array,w.itemSize,w.normalized))}mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},qh="glTF",Er=12,Wh={JSON:1313821514,BIN:5130562},Sc=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Er,r=new DataView(e,Er),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Wh.JSON){let A=new Uint8Array(e,Er+o,a);this.content=n.decode(A)}else if(c===Wh.BIN){let A=Er+o;this.body=e.slice(A,A+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},A={};for(let l in o){let u=Bc[l]||l.toLowerCase();a[u]=o[l]}for(let l in e.attributes){let u=Bc[l]||l.toLowerCase();if(o[l]!==void 0){let h=n.accessors[e.attributes[l]],d=Ds[h.componentType];A[u]=d.name,c[u]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(l){return new Promise(function(u,h){s.decodeDracoFile(l,function(d){for(let g in d.attributes){let v=d.attributes[g],p=c[g];p!==void 0&&(v.normalized=p)}u(d)},a,A,kt,h)})})}},Cc=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Dc=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Ta=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,A=a*3,l=s-t,u=(n-t)/l,h=u*u,d=h*u,g=e*A,v=g-A,p=-2*d+3*h,f=d-h,E=1-p,b=f-h+u;for(let M=0;M!==a;M++){let y=o[v+M+a],w=o[v+M+c]*l,S=o[g+M+a],x=o[g+M]*l;r[M]=E*y+b*w+p*S+f*x}return r}},i0=new Qt,Ic=class extends Ta{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return i0.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jh={9728:vt,9729:yt,9984:Io,9985:vs,9986:Bi,9987:Pn},Yh={33071:an,33648:es,10497:Tn},ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},s0={CUBICSPLINE:void 0,LINEAR:Ei,STEP:_i},Ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function r0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),i.DefaultMaterial}function Ui(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function o0(i,e,t){let n=!1,s=!1,r=!1;for(let A=0,l=e.length;A<l;A++){let u=e[A];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let A=0,l=e.length;A<l;A++){let u=e[A];if(n){let h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(h)}if(s){let h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(h)}if(r){let h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(A){let l=A[0],u=A[1],h=A[2];return n&&(i.morphAttributes.position=l),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function a0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function A0(i){let e,t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cc(t.attributes):e=i.indices+":"+cc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+cc(i.targets[n]);return e}function cc(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function c0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var l0=new Qe,Lc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new n0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new or(this.options.manager):this.textureLoader=new hr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ms(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ui(r,a,s),Un(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[A,l]of o.children.entries())r(l,a.children[A])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Kn.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ac[s.type],a=Ds[s.componentType],c=s.normalized===!0,A=new a(s.count*o);return Promise.resolve(new Pt(A,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ac[s.type],A=Ds[s.componentType],l=A.BYTES_PER_ELEMENT,u=l*c,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,p;if(d&&d!==u){let f=Math.floor(h/d),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,b=t.cache.get(E);b||(v=new A(a,f*d,s.count*d/l),b=new os(v,d/l),t.cache.add(E,b)),p=new as(b,c,h%d/l,g)}else a===null?v=new A(s.count*c):v=new A(a,h,s.count*c),p=new Pt(v,c,g);if(s.sparse!==void 0){let f=ac.SCALAR,E=Ds[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,y=new E(o[1],b,s.sparse.count*f),w=new A(o[2],M,s.sparse.count*c);a!==null&&(p=new Pt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let S=0,x=y.length;S<x;S++){let _=y[S];if(p.setX(_,w[S*c]),c>=2&&p.setY(_,w[S*c+1]),c>=3&&p.setZ(_,w[S*c+2]),c>=4&&p.setW(_,w[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let A=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=o.name||a.name||"",l.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(l.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return l.magFilter=jh[h.magFilter]||yt,l.minFilter=jh[h.minFilter]||Pn,l.wrapS=Yh[h.wrapS]||Tn,l.wrapT=Yh[h.wrapT]||Tn,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==vt&&l.minFilter!==yt,s.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=A,A}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",A=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){A=!0;let h=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(u){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){let p=new bt(v);p.needsUpdate=!0,h(p)}),t.load(Kn.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return A===!0&&a.revokeObjectURL(c),Un(u,o),u.userData.mimeType=o.mimeType||c0(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=l,l}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new us,Wt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new hs,Wt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},A=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let u=s[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),A.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let h=u.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],kt),a.opacity=h[3]}u.baseColorTexture!==void 0&&A.push(t.assignTexture(a,"map",u.baseColorTexture,gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(A.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),A.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),A.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Yt);let l=r.alphaMode||Ac.OPAQUE;if(l===Ac.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,l===Ac.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gn&&(A.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==gn&&(A.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gn){let u=r.emissiveFactor;a.emissive=new Fe().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&o!==gn&&A.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(A).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Un(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ui(s,u,r),u})}createUniqueName(e){let t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Xh(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let A=e[a],l=A0(A),u=s[l];if(u)o.push(u.promise);else{let h;A.extensions&&A.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?h=r(A):h=Xh(new Bt,A,t),A.mode===An.TRIANGLE_STRIP?h=h.then(d=>oc(d,vr)):A.mode===An.TRIANGLE_FAN&&(h=h.then(d=>oc(d,_s))),s[l]={primitive:A,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,A=o.length;c<A;c++){let l=o[c].material===void 0?r0(this.cache):this.getDependency("material",o[c].material);a.push(l)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let A=c.slice(0,c.length-1),l=c[c.length-1],u=[];for(let d=0,g=l.length;d<g;d++){let v=l[d],p=o[d],f,E=A[d];if(p.mode===An.TRIANGLES||p.mode===An.TRIANGLE_STRIP||p.mode===An.TRIANGLE_FAN||p.mode===void 0){let b=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");b&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=b&&M?new Xs(v,E):new wt(v,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(p.mode===An.LINES)f=new Js(v,E);else if(p.mode===An.LINE_STRIP)f=new bi(v,E);else if(p.mode===An.LINE_LOOP)f=new Zs(v,E);else if(p.mode===An.POINTS)f=new $s(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&a0(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Un(f,r),p.extensions&&Ui(s,f,p),t.assignFinalMaterial(f),u.push(f)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ui(s,u[0],r),u[0];let h=new Jt;r.extensions&&Ui(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(UA.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let A=0,l=o.length;A<l;A++){let u=o[A];if(u){a.push(u);let h=new Qe;r!==null&&h.fromArray(r.array,A*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[A])}return new qs(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],A=[],l=[];for(let u=0,h=s.channels.length;u<h;u++){let d=s.channels[u],g=s.samplers[d.sampler],v=d.target,p=v.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",E)),A.push(g),l.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(A),Promise.all(l)]).then(function(u){let h=u[0],d=u[1],g=u[2],v=u[3],p=u[4],f=[];for(let b=0,M=h.length;b<M;b++){let y=h[b],w=d[b],S=g[b],x=v[b],_=p[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let D=n._createAnimationTracks(y,w,S,x,_);if(D)for(let L=0;L<D.length;L++)f.push(D[L])}let E=new rr(r,void 0,f);return Un(E,s),E})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,A=s.weights.length;c<A;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let A=0,l=a.length;A<l;A++)o.push(n.getDependency("node",a[A]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(A){let l=A[0],u=A[1],h=A[2];h!==null&&l.traverse(function(d){d.isSkinnedMesh&&d.bind(h,l0)});for(let d=0,g=u.length;d<g;d++)l.add(u[d]);if(l.userData.pivot!==void 0&&u.length>0){let d=l.userData.pivot,g=u[0];l.pivot=new U().fromArray(d),l.position.x-=d[0],l.position.y-=d[1],l.position.z-=d[2],g.position.set(0,0,0),delete l.userData.pivot}return l})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(A){return A.createNodeMesh&&A.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(A){return s._getNodeRef(s.cameraCache,r.camera,A)})),s._invokeAll(function(A){return A.createNodeAttachment&&A.createNodeAttachment(e)}).forEach(function(A){a.push(A)}),this.nodeCache[e]=Promise.all(a).then(function(A){let l;if(r.isBone===!0?l=new As:A.length>1?l=new Jt:A.length===1?l=A[0]:l=new mt,l!==A[0])for(let u=0,h=A.length;u<h;u++)l.add(A[u]);if(r.name&&(l.userData.name=r.name,l.name=o),Un(l,r),r.extensions&&Ui(n,l,r),r.matrix!==void 0){let u=new Qe;u.fromArray(r.matrix),l.applyMatrix4(u)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);if(!s.associations.has(l))s.associations.set(l,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(l);s.associations.set(l,{...u})}return s.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Jt;n.name&&(r.name=s.createUniqueName(n.name)),Un(r,n),n.extensions&&Ui(t,r,n);let o=n.nodes||[],a=[];for(let c=0,A=o.length;c<A;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let l=0,u=c.length;l<u;l++){let h=c[l];h.parent!==null?r.add(Vh(h)):r.add(h)}let A=l=>{let u=new Map;for(let[h,d]of s.associations)(h instanceof Wt||h instanceof bt)&&u.set(h,d);return l.traverse(h=>{let d=s.associations.get(h);d!=null&&u.set(h,d)}),u};return s.associations=A(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function A(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}mi[r.path]===mi.weights?(A(e),e.isGroup&&e.children.forEach(A)):c.push(a);let l;switch(mi[r.path]){case mi.weights:l=Yn;break;case mi.rotation:l=Xn;break;case mi.translation:case mi.scale:l=li;break;default:n.itemSize===1?l=Yn:l=li;break}let u=s.interpolation!==void 0?s0[s.interpolation]:Ei,h=this._getArrayFromAccessor(n);for(let d=0,g=c.length;d<g;d++){let v=new l(c[d]+"."+mi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Rc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Xn?Ic:Ta;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function h0(i,e,t){let n=e.attributes,s=new Zt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,A=a.max;if(c!==void 0&&A!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(A[0],A[1],A[2])),a.normalized){let l=Rc(Ds[a.componentType]);s.min.multiplyScalar(l),s.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,c=new U;for(let A=0,l=r.length;A<l;A++){let u=r[A];if(u.POSITION!==void 0){let h=t.json.accessors[u.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){let v=Rc(Ds[h.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ht;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Xh(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Bc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Xe.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Un(i,e),h0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?o0(i,e.targets,t):i})}var Kh="Z2xURgIAAAA0bwEAXB4AAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2My4zLjMyIiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzI2XX1dLCJub2RlcyI6W3sibmFtZSI6IndyaXN0Iiwicm90YXRpb24iOlstMC41MDAwMDAwNTk2MDQ2NDQ4LC0wLjQ5OTk5OTk3MDE5NzY3NzYsLTAuNSwwLjVdLCJ0cmFuc2xhdGlvbiI6WzAuMDM5MTI2MDgzMjU0ODE0MTUsMC4wNTU3NzU0NzEwMzE2NjU4LDAuMDA5MTU3MTY2ODE2Mjk0MTkzXX0seyJuYW1lIjoidGh1bWItbWV0YWNhcnBhbCIsInJvdGF0aW9uIjpbLTAuNDY0MzMwMDc3MTcxMzI1NywwLjE1ODI1NzI5MDcyMDkzOTY0LC0wLjIwOTM2NTIxODg3Nzc5MjM2LDAuODQ1ODgzMjUwMjM2NTExMl0sInNjYWxlIjpbMSwwLjk5OTk5OTk0MDM5NTM1NTIsMV0sInRyYW5zbGF0aW9uIjpbMC4wMTk5NjgzNjQzODc3NTA2MjYsMC4wMTk4MTcwNDQ5NTg0NzIyNTIsLTAuMDE4ODcxMzMzNDUwMDc4OTY0XX0seyJuYW1lIjoidGh1bWItcGhhbGFueC1wcm94aW1hbCIsInJvdGF0aW9uIjpbLTAuNDE4MjY3MTMwODUxNzQ1NiwwLjAzNTE5NDQ2MDMwMjU5MTMyNCwtMC4yNTU5NDQ5NjcyNjk4OTc0NiwwLjg3MDgwNzg4NjEyMzY1NzJdLCJ0cmFuc2xhdGlvbiI6WzAuMDA0ODE4NDMzODk1NzA3MTMsLTAuMDAzNDQzMTc5NjUyMDk0ODQxLC0wLjAzNTc5ODU1NzEwMjY4MDIwNl19LHsibmFtZSI6InRodW1iLXBoYWxhbngtZGlzdGFsIiwicm90YXRpb24iOlstMC4zNDQ5NzE4MzU2MTMyNTA3MywwLjEwODc0ODA0MTA5MzM0OTQ2LC0wLjIwODU4MjE5MjY1OTM3ODA1LDAuOTA4NjU5MzM4OTUxMTEwOF0sInNjYWxlIjpbMSwxLjAwMDAwMDExOTIwOTI4OTYsMV0sInRyYW5zbGF0aW9uIjpbLTAuMDA0NTg1NzU1OTg4OTU1NDk4LC0wLjAyNzM0NzgwODcwMzc4MDE3NCwtMC4wNTc3NTUzNjU5Njc3NTA1NV19LHsibmFtZSI6InRodW1iLXRpcCIsInJvdGF0aW9uIjpbLTAuMzQzNDg1ODkxODE5MDAwMjQsMC4xMTQxNjYzMTkzNzAyNjk3OCwtMC4yMTQ4MzE5NDgyODAzMzQ0NywwLjkwNzEwMDIwMDY1MzA3NjJdLCJ0cmFuc2xhdGlvbiI6Wy0wLjAwOTc4NjAwMDQ3NTI4NzQzNywtMC4wMzU5MDI1NTk3NTcyMzI2NjYsLTAuMDY4NzQxNDU1Njc0MTcxNDVdfSx7Im5hbWUiOiJpbmRleC1maW5nZXItbWV0YWNhcnBhbCIsInJvdGF0aW9uIjpbLTAuNDgwMjExNzA0OTY5NDA2MTMsLTAuNDU0ODU5MDc3OTMwNDUwNDQsLTAuNTIxOTQ1NzE0OTUwNTYxNSwwLjUzODU4Mzg3NDcwMjQ1MzZdLCJzY2FsZSI6WzAuOTk5OTk5OTQwMzk1MzU1MiwwLjk5OTk5OTk0MDM5NTM1NTIsMC45OTk5OTk5NDAzOTUzNTUyXSwidHJhbnNsYXRpb24iOlswLjAzMjA2MjI1NDg0NjA5NjA0LDAuMDI2NTYyNzI5ODUwNDExNDE1LC0wLjAwMTAwNTU4MjUxMTQyNTAxODNdfSx7Im5hbWUiOiJpbmRleC1maW5nZXItcGhhbGFueC1wcm94aW1hbCIsInJvdGF0aW9uIjpbLTAuNTQyNTc5NTkxMjc0MjYxNSwtMC40NjM2OTUwNzkwODgyMTEwNiwtMC41MDI5MzA1ODE1Njk2NzE2LDAuNDg3NDk4ODc5NDMyNjc4Ml0sInRyYW5zbGF0aW9uIjpbMC4wMzE4MDk2MjQyODQ1MDU4NDQsLTAuMDMyNzczMjYzNzUyNDYwNDgsLTAuMDE0MzkzNTA5MzY1NjE4MjI5XX0seyJuYW1lIjoiaW5kZXgtZmluZ2VyLXBoYWxhbngtaW50ZXJtZWRpYXRlIiwicm90YXRpb24iOlstMC41MzcyNzIwMzYwNzU1OTIsLTAuNDg2OTU1NTgzMDk1NTUwNTQsLTAuNTA3NjIwMTU1ODExMzA5OCwwLjQ2NTMzMzE5MzU0MDU3MzFdLCJ0cmFuc2xhdGlvbiI6WzAuMDI4NTc1NjEwMzY5NDQzODkzLC0wLjA3Nzk3OTA1MDU3NjY4Njg2LC0wLjAxMjg2NDc1ODI2MDU0ODExNV19LHsibmFtZSI6ImluZGV4LWZpbmdlci1waGFsYW54LWRpc3RhbCIsInJvdGF0aW9uIjpbLTAuNTA3NTk2NTUyMzcxOTc4OCwtMC41NDIyODYwMzgzOTg3NDI3LC0wLjQ2MzEzMDU2MzQ5NzU0MzMzLDAuNDgzNTA5Nzc4OTc2NDQwNDNdLCJzY2FsZSI6WzAuOTk5OTk5OTQwMzk1MzU1MiwxLDAuOTk5OTk5OTQwMzk1MzU1Ml0sInRyYW5zbGF0aW9uIjpbMC4wMjYzNTcwNDUzOTcxNjI0MzcsLTAuMTAyMTQ0NTg0MDU5NzE1MjcsLTAuMDExNTM0NDU3MDk0OTY3MzY1XX0seyJuYW1lIjoiaW5kZXgtZmluZ2VyLXRpcCIsInJvdGF0aW9uIjpbLTAuNTEyNTEyMzg1ODQ1MTg0MywtMC41NDc3MDUzNTIzMDYzNjYsLTAuNDU4MDM1MTQxMjI5NjI5NSwwLjQ3NzAyNTk1NTkxNTQ1MTA1XSwic2NhbGUiOlsxLjAwMDAwMDExOTIwOTI4OTYsMSwxXSwidHJhbnNsYXRpb24iOlswLjAyNjk2NjkyOTQzNTcyOTk4LC0wLjExMzY0MTk5MjIxMTM0MTg2LC0wLjAxMDI2Nzg2MjExODc4MDYxM119LHsibmFtZSI6Im1pZGRsZS1maW5nZXItbWV0YWNhcnBhbCIsInJvdGF0aW9uIjpbLTAuNDYyMjYwMjE2NDc0NTMzMSwtMC41MTM2MzUwMzkzMjk1Mjg4LC0wLjU0MTc3NTU4NDIyMDg4NjIsMC40Nzg1MTIxMDgzMjU5NTgyNV0sInNjYWxlIjpbMSwxLjAwMDAwMDExOTIwOTI4OTYsMC45OTk5OTk5NDAzOTUzNTUyXSwidHJhbnNsYXRpb24iOlswLjAzMzA3MTk3MjQyOTc1MjM1LDAuMDI2NjY5MTIwNDE2MDQ1MTksMC4wMDU3Mjk3MzY3NjAyNTg2NzVdfSx7Im5hbWUiOiJtaWRkbGUtZmluZ2VyLXBoYWxhbngtcHJveGltYWwiLCJyb3RhdGlvbiI6Wy0wLjU0NTIxMjA5MDAxNTQxMTQsLTAuNTAxNDk1OTU3Mzc0NTcyOCwtMC41MDUxNjQ5ODA4ODgzNjY3LDAuNDQyNzc5ODk4NjQzNDkzNjVdLCJzY2FsZSI6WzAuOTk5OTk5OTQwMzk1MzU1MiwxLDAuOTk5OTk5OTQwMzk1MzU1Ml0sInRyYW5zbGF0aW9uIjpbMC4wMzY1ODI5MjQ0MjU2MDE5NiwtMC4wMzU4NzExNDgxMDk0MzYwMzUsMC4wMDc0MzEyNjQwMzU0MDM3Mjg1XX0seyJuYW1lIjoibWlkZGxlLWZpbmdlci1waGFsYW54LWludGVybWVkaWF0ZSIsInJvdGF0aW9uIjpbLTAuNTQ3NzM3NTk4NDE5MTg5NSwtMC41MTg2MTQ4ODgxOTEyMjMxLC0wLjQ5NjAxMzc5MDM2OTAzMzgsMC40MzAxMDc1MDQxMjk0MDk4XSwic2NhbGUiOlsxLDEsMC45OTk5OTk5NDAzOTUzNTUyXSwidHJhbnNsYXRpb24iOlswLjAzMjEwNDY0ODY0OTY5MjUzNSwtMC4wODIzMzk5OTQ2MDkzNTU5MywwLjAxMTc5NzQ2NDQ1MjY4MzkyNl19LHsibmFtZSI6Im1pZGRsZS1maW5nZXItcGhhbGFueC1kaXN0YWwiLCJyb3RhdGlvbiI6Wy0wLjQ4NDE0NTYxMTUyNDU4MTksLTAuNTc4NjUzNDU0NzgwNTc4NiwtMC40NjQwNzM2ODc3OTE4MjQzNCwwLjQ2NDExMDg4MTA5MDE2NDJdLCJzY2FsZSI6WzEuMDAwMDAwMTE5MjA5Mjg5NiwxLDFdLCJ0cmFuc2xhdGlvbiI6WzAuMDI5MzMzMzA4MzM5MTE4OTU4LC0wLjEwOTU4MDE0NDI4NjE1NTcsMC4wMTQ4NDMwOTk3NTA1Nzg0MDNdfSx7Im5hbWUiOiJtaWRkbGUtZmluZ2VyLXRpcCIsInJvdGF0aW9uIjpbLTAuNDgwNDEwODczODg5OTIzMSwtMC41NzY0MzM1OTg5OTUyMDg3LC0wLjQ2ODk3MTc4ODg4MzIwOTIzLDAuNDY1ODI3NDY1MDU3MzczMDVdLCJzY2FsZSI6WzEsMC45OTk5OTk5NDAzOTUzNTUyLDFdLCJ0cmFuc2xhdGlvbiI6WzAuMDMwMzYyNjc0OTY2NDU0NTA2LC0wLjEyMTYzMjIxODM2MDkwMDg4LDAuMDE2NDU5NTQ2OTgzMjQyMDM1XX0seyJuYW1lIjoicmluZy1maW5nZXItbWV0YWNhcnBhbCIsInJvdGF0aW9uIjpbLTAuNDcwNzE2OTUzMjc3NTg3OSwtMC41ODU0NDA2MzU2ODExNTIzLC0wLjUzMDY4Mzk5NDI5MzIxMjksMC4zOTI1MDQwMDY2MjQyMjE4XSwic2NhbGUiOlswLjk5OTk5OTc2MTU4MTQyMDksMC45OTk5OTk4MjExODYwNjU3LDFdLCJ0cmFuc2xhdGlvbiI6WzAuMDMzMDcxOTcyNDI5NzUyMzUsMC4wMjg3ODQ5NDM3NDQ1NDAyMTUsMC4wMTcyNTQ2OTE1NzA5OTcyMzhdfSx7Im5hbWUiOiJyaW5nLWZpbmdlci1waGFsYW54LXByb3hpbWFsIiwicm90YXRpb24iOlstMC41NTQ1MDA2OTkwNDMyNzM5LC0wLjU1Mzc5NDM4NDAwMjY4NTUsLTAuNDg4MDY2MjU2MDQ2Mjk1MTcsMC4zODQyMjk0MjE2MTU2MDA2XSwidHJhbnNsYXRpb24iOlswLjAzMjU5Njc3ODEyNDU3MDg1LC0wLjAyODkxODMxNjU4NzgwNTc0OCwwLjAyNjYyMjQxMDg2MzYzNzkyNF19LHsibmFtZSI6InJpbmctZmluZ2VyLXBoYWxhbngtaW50ZXJtZWRpYXRlIiwicm90YXRpb24iOlstMC41NDU5OTMyNjg0ODk4Mzc2LC0wLjU3ODYzMTIyMjI0ODA3NzQsLTAuNDkxMjgyMjg0MjU5Nzk2MTQsMC4zNTQ1Njg2OTAwNjE1NjkyXSwic2NhbGUiOlswLjk5OTk5OTk0MDM5NTM1NTIsMSwwLjk5OTk5OTg4MDc5MDcxMDRdLCJ0cmFuc2xhdGlvbiI6WzAuMDI4MjQxMjczMDE1NzM3NTM0LC0wLjA3MDUzODk3NTI5ODQwNDcsMC4wMzU5MTgyNjkzMDY0MjEyOF19LHsibmFtZSI6InJpbmctZmluZ2VyLXBoYWxhbngtZGlzdGFsIiwicm90YXRpb24iOlstMC41MTIyMzk0NTYxNzY3NTc4LC0wLjU3NjU3NDIwNjM1MjIzMzksLTAuNTAzMTE4ODcyNjQyNTE3MSwwLjM4OTkyODY2ODczNzQxMTVdLCJzY2FsZSI6WzEsMS4wMDAwMDAxMTkyMDkyODk2LDFdLCJ0cmFuc2xhdGlvbiI6WzAuMDI0OTU3NDcwNTk1ODM2NjQsLTAuMDk2MTEyNDA3NzQzOTMwODIsMC4wNDIzNDkzNjA4ODMyMzU5M119LHsibmFtZSI6InJpbmctZmluZ2VyLXRpcCIsInJvdGF0aW9uIjpbLTAuNTEwNjY5MjMxNDE0Nzk0OSwtMC41NzcyNzA3NDYyMzEwNzkxLC0wLjUwNTc3MTEwMDUyMTA4NzYsMC4zODc1MTg5NDIzNTYxMDk2XSwic2NhbGUiOlswLjk5OTk5OTgyMTE4NjA2NTcsMC45OTk5OTk4ODA3OTA3MTA0LDFdLCJ0cmFuc2xhdGlvbiI6WzAuMDI0MTgzODU0NDYwNzE2MjQ4LC0wLjEwNzc5NjY1NDEwNTE4NjQ2LDAuMDQ0Njc5ODM1NDM4NzI4MzNdfSx7Im5hbWUiOiJwaW5reS1maW5nZXItbWV0YWNhcnBhbCIsInJvdGF0aW9uIjpbLTAuNDU5Mzc0OTM0NDM0ODkwNzUsLTAuNjQyOTY3NzYwNTYyODk2NywtMC41MzQ3NjY2NzQwNDE3NDgsMC4yOTkzMTg4MjAyMzgxMTM0XSwic2NhbGUiOlswLjk5OTk5OTc2MTU4MTQyMDksMC45OTk5OTk4MjExODYwNjU3LDAuOTk5OTk5OTQwMzk1MzU1Ml0sInRyYW5zbGF0aW9uIjpbMC4wMjk3MDYyNTA4NzYxODgyNzgsMC4wMjE3MDE5MTE0NjQzMzM1MzQsMC4wMzIxNTU3NDEwMDYxMzU5NF19LHsibmFtZSI6InBpbmt5LWZpbmdlci1waGFsYW54LXByb3hpbWFsIiwicm90YXRpb24iOlstMC41MTgwMjgxOTk2NzI2OTksLTAuNTgwNzMyNTgzOTk5NjMzOCwtMC41MjQ1MTgwNzI2MDUxMzMxLDAuMzQ1MzY1NDk0NDg5NjY5OF0sInNjYWxlIjpbMC45OTk5OTk4ODA3OTA3MTA0LDAuOTk5OTk5OTQwMzk1MzU1MiwwLjk5OTk5OTk0MDM5NTM1NTJdLCJ0cmFuc2xhdGlvbiI6WzAuMDI1NDM0OTAwMDc1MTk3MjIsLTAuMDE4MTIwMzY3MDc5OTczMjIsMC4wNDQyMTEyNjA5NzQ0MDcxOTZdfSx7Im5hbWUiOiJwaW5reS1maW5nZXItcGhhbGFueC1pbnRlcm1lZGlhdGUiLCJyb3RhdGlvbiI6Wy0wLjUxNTk2MjcxOTkxNzI5NzQsLTAuNjI2NDE4NTMwOTQxMDA5NSwtMC40OTk2MzgwNTA3OTQ2MDE0NCwwLjMwMjg5Mjk4Mjk1OTc0NzNdLCJzY2FsZSI6WzEuMDAwMDAwMTE5MjA5Mjg5NiwxLDAuOTk5OTk5OTQwMzk1MzU1Ml0sInRyYW5zbGF0aW9uIjpbMC4wMjEwMDg4Mzc5NjgxMTEwMzgsLTAuMDUxNjI3NDQyMjQwNzE1MDMsMC4wNTE1MjQ2MzkxMjk2Mzg2N119LHsibmFtZSI6InBpbmt5LWZpbmdlci1waGFsYW54LWRpc3RhbCIsInJvdGF0aW9uIjpbLTAuNDg0MzgxMjI4Njg1Mzc5MDMsLTAuNjIxMjEyOTU5Mjg5NTUwOCwtMC41MDk1OTYzNDc4MDg4Mzc5LDAuMzQ2MDkzNzczODQxODU3OV0sInRyYW5zbGF0aW9uIjpbMC4wMTgxNTQyMDk0Nzk2ODk1OTgsLTAuMDcwNjI3NzQxNTE1NjM2NDQsMC4wNTgxMTIwNjI1MTM4MjgyOF19LHsibmFtZSI6InBpbmt5LWZpbmdlci10aXAiLCJyb3RhdGlvbiI6Wy0wLjQ5ODEwNTI1Nzc0OTU1NzUsLTAuNjMxNTkzMDQ4NTcyNTQwMywtMC40OTYzMjM4ODM1MzM0Nzc4LDAuMzI2NTY0MDEzOTU3OTc3M10sInNjYWxlIjpbMSwwLjk5OTk5OTk0MDM5NTM1NTIsMV0sInRyYW5zbGF0aW9uIjpbMC4wMTczNjQ0MjkzMDk5NjQxOCwtMC4wODIxMzE0ODI2NjA3NzA0MiwwLjA2MTA4ODIxOTI4NTAxMTI5XX0seyJtZXNoIjowLCJuYW1lIjoicl9oYW5kTWVzaE5vZGUiLCJza2luIjowfSx7ImNoaWxkcmVuIjpbMjUsMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNF0sIm5hbWUiOiJBcm1hdHVyZSJ9XSwibWF0ZXJpYWxzIjpbeyJuYW1lIjoibGFtYmVydDIiLCJwYnJNZXRhbGxpY1JvdWdobmVzcyI6eyJiYXNlQ29sb3JGYWN0b3IiOlswLjUsMC41LDAuNSwxXSwibWV0YWxsaWNGYWN0b3IiOjAsInJvdWdobmVzc0ZhY3RvciI6MC41NTI3ODY0MDk4NTQ4ODg5fX1dLCJtZXNoZXMiOlt7Im5hbWUiOiJNZXNoLjAwMSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIk5PUk1BTCI6MSwiVEVYQ09PUkRfMCI6MiwiSk9JTlRTXzAiOjMsIldFSUdIVFNfMCI6NH0sImluZGljZXMiOjUsIm1hdGVyaWFsIjowfV19XSwic2tpbnMiOlt7ImludmVyc2VCaW5kTWF0cmljZXMiOjYsImpvaW50cyI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjRdLCJuYW1lIjoiQXJtYXR1cmUifV0sImFjY2Vzc29ycyI6W3siYnVmZmVyVmlldyI6MCwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjEzNjAsIm1heCI6WzAuMDU4MzgxNDM4MjU1MzEwMDYsMC4wNzgxMzMwNjE1MjgyMDU4NywwLjA2NzQzODY0NzE1MDk5MzM1XSwibWluIjpbLTAuMDE4NjQwNDMyNTA2Nzk5Njk4LC0wLjEzMzkwNzgyNDc1NDcxNDk3LC0wLjA3ODQ2NzMyNDM3NjEwNjI2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxMzYwLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjEzNjAsInR5cGUiOiJWRUMyIn0seyJidWZmZXJWaWV3IjozLCJjb21wb25lbnRUeXBlIjo1MTIxLCJjb3VudCI6MTM2MCwidHlwZSI6IlZFQzQifSx7ImJ1ZmZlclZpZXciOjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxMzYwLCJ0eXBlIjoiVkVDNCJ9LHsiYnVmZmVyVmlldyI6NSwiY29tcG9uZW50VHlwZSI6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sJsvPjecQj4QPEg+R2Y3PgAWOz4DAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAgAAAwAAAAMCAAADAAAAAwIAAAMCAAADAgAAAwIAAAIDAAACAwAAAwAAAAMCAAADAAAAAwAAAAMCAAADAAAAAwIAAAMAAAADAAAAAwIAAAMCAAADAAAAAwAAAAMCAAADAAAAAwAAAAMCAAADAAAAAwIAAAMCAAADAAAAAgMBAAIDAAACAwAAAgMBAAIBAwACAwAAAgMAAAIDAQACAQMAAgMAAAIDAAACAQMAAgMAAAIBAwACAQMAAgMAAAIBAwACAwAAAgMBAAIDAAACAwEAAgMAAAMCAAADAgAAAgMAAAIDAAADAgAAAgMAAAIDAAADAgAAAgMAAAIDAAADAgAAAwIAAAIDAAADAgAAAgMAAAECBQABBQIAAQUCAAEFAgABBQIKAQUKAgEFCgABCgUAAAEAAAABCgAAAQAAAAEKDwABCgAAAQAAAAEAAAABAAAAAQAAAQUAAgEABQIBBQACAQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEQAAAREAAAERIAABESAAAREhAAERAAABESEAAREBIAEgAAABIAAAASAAAAEgAAABIAAAASAAAAERIAABESAAASEQAAERIAABIRAAAREgAAERIQABEQAAASAAAAEgAAABIAAAASAAAAEgAAABIAAAAREAAAERAAABEQAAAREAAAERAAABEQAAAREAAAERAAABIAAAASEQAAEgAAABIRAAASAAAAEgAAABIAAAASEQAAEgAAABIRAAASAAAAEhEAABIRAAASAAAAEhEAABIAAAAREAAAERAAABARCwAQEQAAERAAABARAAAREAAAERAAABARAAAQEQAAERAAABARAAAREAAAEBEAABEQAAAQEQsAERAAABARCwAREgAAEhEAABESAAAREgAAERIAABIRAAASEQAAERIAABESAAAREgAAERIAABESAAAREgAAERIAABIRAAASEQAAEhEAABESAAAREgAAERIAABESAAAREgAAFhcVABYXFQAWFRcAFhUXABYXFQAWFRcAFhcVABYXFQAWFwAAFhcAABYXAAAWFxUAFhcAABYXAAAWFxUAFwAAABcAAAAXAAAAFwAAABcAAAAXAAAAFxYAABcWAAAXFgAAFxYAABYXFQAWFRcAFhUXABcWAAAXAAAAFxYAABcAAAAXAAAAFwAAABcAAAAXAAAAFwAAABcAAAAXAAAAFwAAABYXFQAWFRcAFhUXABYVFwAXFgAAFxYAABcWAAAXAAAAFxYAABcAAAAXFgAAFxYAABcAAAAXFgAAFwAAABYVFwAWFRcAFhUXABYVFwAWFRcAFhUXABYVAAAWFRcAFhUXABYVAAAWFQAAFhUAABYVFwAWFRcAFhUAABYVAAAWFQAAFhUAABYVAAAWFxUAFhcAABcWAAAXFgAAFhcVABYXAAAXFgAAFhcAABcWAAAXFgAAFhcAABcWAAAXFgAAFxYAABYXAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIBwAACAcAAAgHAAAIBwAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAcAAAgHAAAIAAAACAAAAAgHAAAIBwAACAAAAAgAAAAIAAAACAcAAAgHAAAIAAAACAAAAAgHAAAIAAAABwYAAAcGAAAHBggABwYIAAcGCAAHBggABwYIAAcGCAAHBgAABwYIAAYLBQAGBQsABgsFBwYLBwUGCwUABgsFBwYLBQoGCwUABgsAAAYLBQcGBQcABgUHAAYFBwAGAAAABgUAAAYFBwAGBwALBgULAAYHAAAGBwAABwYAAAYHAAAHBgAABgcAAAcGAAAGBwAABwYAAAYHAAAGBwAABgcAAAcGAAAHCAYACAcAAAcIBgAIBwAACAcAAAgHAAAIBwAABwgGAAcIBgAIBwAABwgGAAgHAAAIBwAACAcAAAgHAAAIBwAACAcAAAgHAAAHCAAABwgAAAcIBgAGBwsABgcAAAYHCwAGBwAABgcLAAYHAAAGBwAABgcAAAYHAAAMCw0ADA0LAAwLDQAMCw0ADAsNAAwLDQANAAAADQAAAA0AAAANAAAADQAAAA0AAAAMDQsADAsNAAwNCwAMCw0ADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQwAAA0MAAANDAAADQwAAAwNAAAMDQAADA0AAAwNAAANAAAADQAAAA0MAAANAAAADQwAAA0AAAANAAAADQAAAA0AAAANAAAADQwAAA0MAAANAAAADQwAAAwLDQALDAAADAsAAAsMAAALDBAACwwQAAsMEAALDAAADQwAAA0MAAANDAAADA0AAAwNAAAMDQsADA0LAA0MAAANDAAADQwAAAoLAAAKCxAACgsQAAoLEAAKDwsQCg8LEAoLAAAKCwAACgAAAAoFAAAKAAAACgUAAA8QAAAPEAAADwoQCw8KEAsPFBAVDxQQFQ8QCwAPChALFA8QFRQPFRAUDxAVFA8QFRALDwoQCw8AEAsKDxALDwoGCwUKBgsFCgYLCgUGCwUKFRAUDxUQDxQQFQ8UEBUPFBALDxUQFRQPEAsPFQYFCwoGBQsKBgUAAAYFAAAGBQAABgULAAYFAAAGBQsABgULCgYLBQoGCwoFBgsKBQsGCgULBgoFCgsFBgUGCgsQCw8AEAsPABAPCwAQAAAAEAsRDxAPCgsKEAsPEBUPABAVDwAQABEAEBQRABUPFBAVEA8UFRAPFBUQFA8VDxQQDxUQFAEAAAABAAIAAQAAAAEAAAABAAAAAQAAAAEFAAABAAAAAQAKBQEACgUBAAoAAQAAAAEAAAABAAAAAAEKAAEAAAABAAAAAQAAAAEAAAACAwAAAAEAAAABAAAAAQAAAAEAAAsKEAYLChAGCwoGBQoLBQYKAQUQCgUBCwoFARAKBQELCg8BBQoPFAEKAQ8FCg8BFAoBDwUBCgUAAQoPBRQVEAAUFRAAFBUQABQVEAAUDxUQFBUPEA8UEBUUDxUQDxQQChQPFRAPChAUDwoQFAoPEAsKDxALCgsQDwoLBQYKCwUPDwoUEAoPEAEPChQQCg8QFQ8UChUPFAoVFA8VEBQPFRAUFQAAFA8VEBQVEAAUDxUQFAAAABQVAAAKDwEFCg8LEAoLDxADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAgAAAgEDAAIBAwACAwAAAgMAAAMCAAADAgAAAgMAAAMCAAACAwAAAwIAAAMCAAADAgAAAQAKBQEACg8BAAoPAQUCCgEFAgABBQIAAQUCAAIDAAACAwAABgULCgYLBQoLEAoPCxAKDwsKBhALCgYQEBUPFBAPCxUVEBQPFRQQABUUFgAVFBAAFRQAAAUGAQAFBgEABQYKCwUGCwABBQIAAQUAAgUBAgYFAQYCBQECBgUBAgYFAQIGBQECAAUBAgABBQIABQECAAUBAAAFAQIABQECBgUBBgAFBgEABQEGAAUBAgAFAQIABQECAAUBBgAFBgELBQEAAAUBAAADAgAAAwAAAAIDAQADAgAAAwIAAAIDAAADAgAAAQUKAgEKBQABCgAFAQAFCgMAAAADAAAAAwAAAAEKBQAFAQAAAAEAAAABAAABAAAAAAEAAAABAAAFAQAKAAUBCgABAAAFCgABBQAKAQAKAAAVFA8QFRQPEBQAAAAUAAAAFAAAABQAAAAUAAAAFBAVABQAAAAUEAAAFBUAABQVEAAVFBAAFRQQABUUDwAVFBYAFBUQABQVEAAUAAAAFAAAABQVAAAUFQAAFBUAABQVAAAUFQAAFAAAABQAAAAUAAAAAQoPAAEKDwAUAAAAFAAAABQAAAAUAAAAFAAAABQAAAAUAAAAABQAABQAAAAUAA8BDxQKABQPAAEUAA8BABQBDwAKDwEUAAAAFAAAABQAAAAADwAAAAAAAAAPFAEADwEAAA8AAAAUDwAADwAAABQPAAAUAAAAFAAAFAAAAAAUAAAUAAAAABQAAAABAAAAAQAAAAEAAAAUDwEAFA8BFAAAABQAAAAUAA8AABQPABQAAAAUAA8BFAAAAA8UEBUPFBAVDwoQCw8KEAsKBQsGCgULAA8KEAsPChALDxQQFRQPEBUPCgAQDwoAAA8KABAPCgAAFA8AEBQPAAAUDxAAFA8AABAPCxUPEAsAEA8VAA8QFRQKCwYQCgULBgoAAAAKAAsACgAAAAoAAAAPCgAADwAKAA8AFAAPAAAACg8AAAoPAAsPCgAADxQAAA8AEAAPFAAADxQAEBQPAAAUDwAAFA8AABQADwAUDwAACgsQBgoLEA8LChAGCxAKDwoLEAYKDwsQBQoGCwUKAQYFCgEABQoBAAUBCgAFCgABBQoAAAUKCwAPEBUADxAUFRUUFgAVFBAWFRQWABUUAAAVFAAAFRQAABUUDwAVFBAAFRAUDxUQDxQVFBAPEAsPABALDwAQCxEPEAsRDxAVDwAQERUUEBELFRALDwAQCxEPEBUPFBUWEAAVFgAAFRYUABUWFAAVFhAAFRYQABUWEAAVFhAAFRAWDwYHCwAGBwsABgcLAAYHCwAGBwAABgcAAAYHAAAGBwAACwwQBgsGEAoLEA8ACxAAAAsMEAALDBAACxAAAAsQCgwLCgwACwwAAAsMCgYLDAAACwYFDAsMBgALDAYACwYKABAUEQACAQAAAgEUAAIBAAACAQAAAgEAAAIBAAACAQAAAgEAAAIBAAACAQUAAgEAAAIBAAACAQUAAgEAAAsQAAALEAAACxAPBgsGChALBgoACwYFDAsKBhALBgoQCwYKDAsGCgALEAAACxAPDAsQAAALChAGDAsAAAwLAAAMCwAACwwAAAsMAAALDAAADA0LAAwNAAAMDQsADA0AAAwNCwAMDQAADAsAAAwLAAAMCwAADAsAAAsMAAALDAAADAsAAAwLDQALDAAADAsAAAsMAAAMDQAADA0AAAwNAAAMDQsACwwAAAsMAAALDAAACwwAAAsMAAALDAAACwwAAAYHCwAHCAYABwgGAAcIBgAHCAYABwgGAAcIBgAHBggABwgGAAcGCAAHBggABwYIABARFQAQEQsAEBEVABARAAAQERUAEBEAABARCwAQEQsAEBELAAwNCwAMDQsADA0LABEQAAAVFgAAFRYAABUWAAAVFgAAFRYAABUWAAAVFhAAFRYQABUWEAAUDxAAFAAPAAAPFAAUDxUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAA8AAAAUAAAAFAAAAAAAAAAPAAAAAAAAAQIFAAECAAABAgUAAgEAAAIBBQACAQUAAgEFAAIBBQACAQAAAQIUAAECAAACAQAAAQIAAAIBAAABAgAAAgEAAAECAAACAQAAAgEAAAECAAABAgAAAQIFAAECABQBAAIAAQACAAEAAgABAAIAAQACAAEFAgABAgUAAgEFAAIBBQACAQUAAgEFAAECBQABBQIAAQIFAAIBBQAUFRAAFBUQABQVEAAUFRAAFBUQABQVDxAUFRAPFA8VEA8QFBUUFRAPDxAVFA8QChUQDwsVCg8QCxAPCgsKCxAPCgsQDwsKEA8LChAPFBUQABQPAAEUDwAAFA8BAA8UCgEKDwUBCgUPAQoFCwEKBQsPCgULBgoPCxAFBgEABQYBAAUGAQAREBIAERIQABIRAAAREhAAEhEAABIAAAAREAAAERAAABIAAAASEQAAERAAABARCwASEQAAFhcVABcWAAAXAAAAFhcVABYXFQAWFxUAFhUXABcAAAAXFgAAFhUXABYVAAAXFgAAFxYAAAgHAAAIBwAACAcAAAgAAAAHCAYABwgGAAcGCAAIAAAABgUHAAcGCAAGBwAABwgAAAgHAAAIBwAACAcAAAwNCwAMCw0ADQwAAA0MAAAMDQsADQAAAA0MAAAMCw0ADAsNAAsMBgALDAAADA0AAAwNAAANDAAADQwAAA8UEBUKDwsQCgULABQPEBUQCw8KEAsKDxALDwABAgUAFAAAABQVAAABAgAAAQACABUUEAAGBQoABgUKAQUBBgIFAQIGBQEGAAUBAgAFAQIABQECBgECBQABAAIFABQAAAAUAAAAAAAAABQAAAAAAAAUAAAAFAAAABQPEBUPChALFRAPFBUQFA8VFhQAFRYQAAYHAAALBgoFCwwAAAYHAAAHBggABwgGAAAAAAAAAAAAAAAAAAAAAAABAAAAFBUAABQVEAAFAQIABQECABUUEA8VFBAAEA8LFRAPFRQVEBQPEAsKDwsKBgULChAGCwoQDwsKBgUQCw8KCxAKDxALCg8FBgEABQYLABQVEAAUFQAADwoQCw8KEAsPFBUQFA8VEAoFCwYFCgYLCg8LEAoLEAYPEAsVDxAVFBQVDxAFBgoLBgULCgYFCwoGBQsKBgUKCwYFCgsGCwUKBQEGAgUBCgIFAQIKBQEKAgUGCwoFBgoLBgULCgUGCgsFBgoLBQYKCwYFCwoGBQsKBQEKBgUBCgYFBgECBQYBAAUBBgoFCgEGBQoGAQUGCgEFBgEKBQYBAgUBBgIBBQIKAgMAAAIDAAACAQUAAgEFAAEACgABAgAAAAAAAAAAAAAAFAAAFAAPARQAAAAAAAAAAAAAAAECAAABAgUAEBELABUWEAAFBgoABQYKCwoFAAAPFAAABQYKCwUKBgsFCgYLBQoLBgsGCgULBgoFCwYKBQsFCgYFCgsGBQoGCwUKBgsFCgEGBQoBBgUBCgIBBQoCAQUCCgECBQAFAQIABQYBAAAAAAAPCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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awCLAHUAcwCMAIwAcwCNAHMAbwCNAI0AbwCOAG8AbgCOAI4AbgCPAIMAkABuAG4AkACPAGoAigBtAG0AigCRAJIAkwCUAJQAkwCVAJMAkgCWAJYAkgCXAJgAmQCaAJoAmQCbAJoAmwCcAJwAmwCdAJ4AnwCgAKAAnwChAJ4AmQCfAJ8AmQCYAKIAowCkAKQAowClAKYApwCjAKMApwClAKgAqQCqAKoAqQCrAKwArQCpAKkArQCrAK4ArwCsAKwArwCtALAAsQCuAK4AsQCvALIAogCzALMAogCkAIcAoQCGAIYAoQCfAJwAiQCaAJoAiQCIAJ8AmACGAIYAmACEAJoAiACYAJgAiACEAHYAkgB3AHcAkgCUAJIAdgCXAJcAdgB6AIEAtACAAIAAtAC1AHEAcgC2ALYAcgB9ALcAuAC5ALkAuAC6AHAAuwCCAIIAuwC8AGkAaAC9AL0AaAC+AGwAvwBoAGgAvwC+AHEAtgBwAHAAtgC7ALQAtwC1ALUAtwC5AMAAwQDCAMIAwQDDAMMAwQDEAMQAwQDFAL4AwQC9AL0AwQDAAMUAwQC/AL8AwQC+ALQAgQC2ALYAgQC7ALYAfQC0ALQAfQC3AH0AfAC3ALcAfAC4ALwAuwB/AH8AuwCBAMYAxQDHAMcAxQC/AMgAyQDAAMAAyQC9AMoAywDMAMwAywDNAM4AygDPAM8AygDMANAA0QDSANIA0QDTAMoA1ADLAMsA1ADVAMoAzgDUANQAzgDWANIA1wDQANAA1wDYANkA2gDbANsA2gDcAN0A2QDeAN4A2QDbAN8A4ADhAOEA4ADiAOMA5ADYANgA5ADlAOYA5wDoAOgA5wDpAOoA6wDsAOwA6wDtAOoA7gDrAOsA7gDvAOcA5gDwAPAA5gDgAOAA3wDwAPAA3wDxAPIA0QDzAPMA0QD0ANEA0AD0APQA0AD1ANgA5QDQANAA5QD1APYA9wDiAOIA9wD4APkA+gD7APsA+gD8APoA+QD9AP0A+QD+AOgA6QD/AP8A6QAAAc0AAQHMAMwAAQECAQMBAQEEAQQBAQHNAPMA9AAFAQUB9AAGAfQA9QAGAQYB9QAHAfUA5QAHAQcB5QAIAeUA5AAIAQgB5AAJAcwAAgHPAM8AAgEKAe0AAAHsAOwAAAHpAO8A7gDxAPEA7gDwAOkA5wDsAOwA5wDqAPAA7gDnAOcA7gDqANkA+QDaANoA+QD7AP4A+QDdAN0A+QDZAAIBAQELAQsBAQEMAQEBAwEMAQwBAwENAQUBBgEOAQ4BBgEPAQ8BBgEQARABBgEHARABBwERAREBBwEIAREBCAESARIBCAEJAQoBAgETARMBAgELAeMA2AAUARQB2ADXANcA0gAVARUB0gD3ABYBFwH6APoAFwH8ABgB0wDyAPIA0wDRANQAGQHVANUAGQEaARsBGQHWANYAGQHUABYBHAEZARkBHAEaARcBFgEbARsBFgEZAR0BHgEfAR8BHgEVAeEA4gAgASAB4gD4APcA9gAVARUB9gAfAdMA+ADSANIA+AD3ABgBIAHTANMAIAH4ABUBHgHXANcAHgEUASEBFwEiASIBFwEbAeAA5gDiAOIA5gD2APoA/QAWARYB/QAcAf8AHQHoAOgAHQEfAeYA6AD2APYA6AAfASMBJAElASUBJAEmASMBJQEnAScBJQEoASkBKgErASsBKgEsAS0BLgEvAS8BLgEwAS0BMQEuAS4BMQEyASsBMwEpASkBMwE0ATUBNgEzATMBNgE3ATgBOQE6AToBOQE7ATkBOAE8ATwBOAE9AT4BNQErASsBNQEzAT4BKwE/AT8BKwEsATcBNgFAAUABNgFBAUIBQwFEAUQBQwFFAUYBRwFIAUgBRwFJAUMBSgFFAUUBSgFLATABQQEvAS8BQQE2ATIBMQE/AT8BMQE+ATYBNQEvAS8BNQEtAT4BMQE1ATUBMQEtASMBOAEkASQBOAE6AT0BOAEnAScBOAEjAUwBTQFOAU4BTQFPAVABTAFRAVEBTAFOAVIBUwFUAVQBUwFVAVYBVwFYAVgBVwFZAVoBVgFbAVsBVgFYAU8BTQFcAVwBTQFdAUIBXgFDAUMBXgFfAWABYQFCAUIBYQFeAWIBYwFkAWQBYwFlAWIBZgFjAWMBZgFnAWYBRwFnAWcBRwFoAUcBRgFoAWgBRgFpAUoBQwFqAWoBQwFfAWsBbAFtAW0BbAFuATQBbAEpASkBbAFvAXABcQFyAXIBcQFzAXQBcAF1AXUBcAFyAXEBcAF2AXYBcAF3AXABdAF3AXcBdAF4AXkBegF7AXsBegFuAW8BfAEpASkBfAEqAXsBbgE0ATQBbgFsAW8BbAF9AX0BbAFrAXwBbwF+AX4BbwF9AW0BbgF/AX8BbgF6AYABgQFeAV4BgQFfAWEBggFeAV4BggGAAYMBhAFjAWMBhAFlAYUBgwFnAWcBgwFjAYYBhQFoAWgBhQFnAYcBhgFpAWkBhgFoAYEBiAFfAV8BiAFqAXYBdwE8ATwBdwE5ATsBOQF4AXgBOQF3AXsBNwF5AXkBNwFAAXsBNAE3ATcBNAEzAYkBigGLAYsBigGMAY0BiQGOAY4BiQGLAY8BkAGRAZEBkAGSAY8BkQGTAZMBkQGUAZUBlgGXAZcBlgGYAZkBmgGbAZsBmgGcAZkBnQGaAZoBnQGeAZ8BoAGhAaEBoAGiAaMBpAGlAaUBpAGmAacBqAGgAaABqAGpAaoBqwGsAawBqwGtAa0BqwGuAa4BqwGvAbABpwGfAZ8BpwGgAbABnwGxAbEBnwGyAagBswGpAakBswG0AbUBtgG3AbcBtgG4AZsBnAGoAagBnAGzAZ4BnQGxAbEBnQGwAagBpwGbAZsBpwGZAbABnQGnAacBnQGZAasBqgGPAY8BqgGQAasBjwGvAa8BjwGTAbkBugG7AbsBugG8Ab0BsgGhAaEBsgGfAb4BvwGtAa0BvwGsAcABwQHCAcIBwQHDAa4BxAGtAa0BxAG+AakBtAHFAcUBtAHGAaABqQGiAaIBqQHFAccByAHJAckByAHKAcgBywHKAcoBywHMAcgBxwHNAc0BxwHOAc8B0AHRAdEB0AHSAdMB1AHVAdUB1AHWAdQB0wHXAdcB0wHYAdkB0wHaAdoB0wHVAdsB3AHdAd0B3AHeAd8B4AHhAeEB4AHiAVAB4wFMAUwB4wHkAeUB5gHjAeMB5gHkAecB6AHpAekB6AHqAeoB6wHsAewB6wHtAe4BTQHkAeQBTQFMAV0BTQHvAe8BTQHuAV0B8AHxAfEB8AHyAfMBVgH0AfQBVgFaAVcBVgH1AfUBVgHzAVIBVwH2AfYBVwH1AVMBUgH3AfcBUgH2AfgB+QH6AfoB+QH7AfsB+QH8AfwB+QH9Ad8B/gHgAeAB/gH/AQACAQL+Af4BAQICAgMC3wEEAgQC3wHhAQUCBgIHAgcCBgIIAgkCCgILAgsCCgIMAg0CCQIOAg4CCQILAg8CZwAQAhACZwBlABECYAASAhICYABiABMCDwIUAhQCDwIQAmYAZwAVAhUCZwAWAmcADwIWAhYCDwIRAg8CEwIRAhECEwJgAFkAWgAXAhcCWgAYAhkCGgIbAhsCGgIcAhoCGQJcAFwAGQIdAh4CHAIfAh8CHAIaAhQCIAITAhMCIAIhAmEAYAAhAiECYAATAlwAWwAaAhoCWwAfAjcAIgI4ADgAIgJGABgANAAzADQAGAAXAD0AUgA/AD8AUgBQADQAFwA3ADcAFwAiAk0AMAAvADAATQBMABUAIgIUABQAIgIXAEUARwBEAEQARwBGACICFQBGAEYAFQBEACMCJAIlAiUCJAImAiUCJgJjAGMAJgJiACcCKAIpAikCKAIqAisCLAItAi0CLAIuAi8CMAIxAjECMAIyAisCMwI0AjQCMwI1AjYCNwI4AjgCNwI5AjgCOgI2AjYCOgI7AjwCPQI+Aj4CPQI/Aj4CQAI8AjwCQAJBAkACQgJBAkECQgJDAioCRAJFAkUCRAJGAkcCSAJJAkkCSAJKAksCRwJMAkwCRwJJAkwCTQJLAksCTQJOAk8CUAJRAlECUAJSAlMCTwJUAlQCTwJRAi0CVQIrAisCVQIzAlYCRgJXAlcCRgJEAlgCWQIEAAQAWQICAFoCAABZAlkCAAACAFsCXAJdAl0CXAJeAl8CYAJhAmECYAJiAgAAWgJbAlsCWgJcAmMCJABkAmQCJAAmAGUCZgJnAmcCZgJoAl0CXgJpAmkCXgJqAh0CawJsAmwCawJtAm4CbwJwAnACbwJxAnICYQJzAnMCYQJiAnQC7gF1AnUC7gHkAXYCdwJ4AngCdwJ5AnoCewLqAeoBewLrAXwCegLoAegBegLqAX0CfgJ/An8CfgKAAoEC8gGCAoIC8gHwAfUB8wGDAoMC8wGEAoUCZACGAoYCZABmAIcCiAKJAokCiAKKAosChwKMAowChwKJAo0CiwKOAo4CiwKMAo8CkAKRApECkAKSApMCkAKUApQCkAKVApACjwKVApUCjwKWApcClgKYApgClgKPApkCmgKVApUCmgKUApsCmQKWApYCmQKVApwCmwKXApcCmwKWAiMAIQCdAp0CIQCeAkIAQwCfAp8CQwBJAKACIgChAqECIgAjAEEAogJDAEMAogJKAGoCcgJpAmkCcgJzAqMCSAChAqECSABKAKECIwCjAqMCIwCdAlgApAKlAqUCWgBYAKUCpgJaAFoApgIYAhcCpwJZAFkApwJWAKECSgCgAqACSgCiAqgCqQIhACEAqQKeAiAAqgIhACEAqgKoAqsCNAKkAqQCNAKlAjQCNQKlAqUCNQKmAhUCrAJmAGYArAKGAhICYgCtAq0CYgAmAq0CJgKuAq4CJgIkAhICrwIRAhECrwIWAq0CsAISAhICsAKvArACrQKxArECrQKuAhUCFgKyArICFgKvArACswKvAq8CswKyArMCsAK0ArQCsAKxArUCsgK2ArYCsgKzArYCswK3ArcCswK0ArgCuQINAg0CuQIJAroCuwK8ArwCuwK9Ar4CvwLAAsACvwLBAsICwwK+Ar4CwwK/AsQCxQLGAsYCxQLHAsgCyQLCAsICyQLDArsCygK9Ar0CygLLAswCvgLNAs0CvgLAAr4CzALCAsICzALOAs8COQLQAtACOQI3ArsCugLRAtECugLSAsoCuwLTAtMCuwLRAjECMgLUAtQCMgLVAtYC1wLYAtgC1wLZAtcC2gLZAtkC2gLbAtEC0gLcAtwC0gLdAtMC0QLeAt4C0QLcAt8C1QLgAuAC1QIyAuAC4QLfAt8C4QLiAuMC5AJeAF4AbALjAtgC2QLlAuUC2QLmAucC5gLbAtsC5gLZAugC6QLqAuoC6QLrAuwC7QLuAu4C7QLvAvAC8QLvAu8C8QLuAvIC8wL0AvQC8wL1Al8A9gL3AvcC9gL4AvkC5AL6AvoC5ALjAuoC6wL5AvkC6wLkAvIC+wLcAtwC+wLeAvAC7wL8AvwC7wL9Av4C/QLtAu0C/QLvAv0C/gL/Av8C/gIAA/wC/QIBAwED/QL/AgIDAwPeAd4BAwPdAQQDBQPWAdYBBQPVAckBBgPHAccBBgMHA9YBCAMEAwQDCAMJAwoDAgMLAwsDAgPeAQwDDQMOAw4DDQMPAxADEQMSAxIDEQMTAxQDFQMWAxYDFQMXAxUDFAMDAgMCFAPfARgDGQPJAckBGQMGA9EBGgPPAc8BGgMbAxwDHQPRAdEBHQMaAx4DHwMgAyADHwMhAxoDIgMbAxsDIgMjAx0DJAMaAxoDJAMiAw8DHgMlAyUDHgMgAw4DDwMmAyYDDwMlAycDKAMlAyUDKAMmAxEDKQMTAxMDKQMqAxMDKgMrAysDKgMsAxIDEwMtAy0DEwMrAy4DLwMwAzADLwMxA/sB/AEwAzAD/AEuAzIDGAPKAcoBGAPJAcoBzAEyAzIDzAEzAzQDmgI1AzUDmgKZAjYDNQObApsCNQOZAjcDNgOcApwCNgObArICOAMVAhUCOAOsArICtQI4AzgDtQI5AzcDOgM2AzYDOgM7AzwD1AE9Az0D1AHXAdQBPAPWAdYBPAMIA34CfQI+Az4DfQI/A0ADfgJBA0EDfgI+A8YCxwJCA0IDxwJDA0QDuQJCA0IDuQLGAkUDCQJEA0QDCQK5AgkCRQMKAgoCRQNGA0cDfQJIA0gDfQJ/AkkDSgNLA0sDSgNMA00D6QHsAewB6QHqAewB7QFOA04D7QFPA+0BSQNPA08DSQNLA+sBUAPtAe0BUANJAwACFAMFAgUCFAMWA/4BAgL/Af8BAgJRA/4B3wEAAgAC3wEUAwUCBwIAAgACBwIBAgYCBQJSA1IDBQIWA1MDVAM/Az8DVAM+A1UDVgNDA0MDVgNCA0IDVgNEA0QDVgNXA0QDVwNFA0UDVwNYA0UDWANGA0YDWANZA1oDUwNbA1sDUwM/A08BXANOAU4BXANdA14DXwNVAVUBXwNUAV8DYANUAVQBYANZAWADYQNZAVkBYQNYAWEDYgNYAVgBYgNbAVwDTwFjA2MDTwFcAWQDuQFlA2UDuQFmA7kBuwFmA2YDuwFnA2gDaQNqA2oDaQNrA2sDaQNsA2wDaQNtA2wDbQNuA24DbQNvA24DbwNwA3ADbwNxA3IDZANzA3MDZANlA+wBTgNNA00DTgN0AzEAdQN2A3UDMQAuADUAdwN4A3cDNQAyADIAeQN3A3kDMgA2ADYAegN5A3oDNgA5AHoDOQB7A3sDOQA7AHwDPAB9A30DPAA+AEIAfgNAAEAAfgN/A30DPgCAA4ADPgBgAn4DQgCBA4EDQgCfAoADYAKCA4IDYAJfAoMDhAOFA4UDhAN2AoYDhwNzA3MDhwOIA4kDZQOFA4UDZQNmA3gCiQN2AnYCiQOFA3gCigOJA4kDigOGA4kDhgNlA2UDhgNzA4sDbgOMA4wDbgNwA/sBiwP6AfoBiwOMA40DjgOPA48DjgMxA2oDawONA40DawOOA2wDkANrA2sDkAOOA5ADMAOOA44DMAMxA5ADbAOLA4sDbANuAzADkAP7AfsBkAOLA5EDkgOMAYwBkgOLAZIDkwOLAYsBkwOOAZIDkQOUA5QDkQOVA5MDkgOWA5YDkgOUA5cDmAOZA5kDmAOaA5cDmwOYA5gDmwOcA50DngOfA58DngOgA50DnwO3AbcBnwOYAZ4DnQOhA6EDnQOiA7cBuAGdA50DuAGiA7cBmAG1AbUBmAGWAZ4DowOgA6ADowOkA6UDlQOmA6YDlQORA6MDngOnA6cDngOhA8ABwgGkAaQBwgGmAaMBpQGoA6gDpQGpA6oDnAOrA6sDnAObA6wDugFkA2QDugG5AWgDrQNpA2kDrQOuA64DrwNpA2kDrwNtA20DrwNvA28DrwOwA28DsANxA3EDsAOxA7IDrANyA3IDrANkA10DgAGzA7MDgAGCAbQDtQNrAWsBtQN9AbUDtgN9AX0BtgN+AXIBcwG3A7cDcwG4A3UBcgG5A7kDcgG3A7oDtANtAW0BtANrAX8BuwNtAW0BuwO6A7UDtAO8A7wDtAO9A7wDvgO1A7UDvgO2A0QBRQG4A7gDRQG3A0UBSwG3A7cDSwG5A70DtANJAUkBtAO6A7oDuwNJAUkBuwNIAb0DSQFmAWYBSQFHAb4DvANkAWQBvANiAbwDvQNiAWIBvQNmAb8DwAOlAKUAwAOkAKcAwQOlAKUAwQO/A8IDwwOrAKsAwwOqAK0AxAOrAKsAxAPCA68AxQOtAK0AxQPEA8UDrwDGA8YDrwCxAMADxwOkAKQAxwOzAKUBpgHIA8gDpgHJA8gDygOlAaUBygOpA4kBlwOKAYoBlwOZA4kBjQGXA5cDjQGbA8kDpgGXAZcBpgHCAckDlwGfA58DlwGYAaADpAPIA8gDpAPKA8gDyQOgA6ADyQOfA8IBwwGXAZcBwwGVAYoAiwCiAKIAiwCjAIsAywOjAKMAywOmAIwAjQCoAKgAjQCpAI0AjgCpAKkAjgCsAKwAjgCuAK4AjgCPAK4AjwCwALAAjwCQAJEAigCyALIAigCiAJkAtQCbAJsAtQC5AMIAwwCWAJYAwwCTAJMAwwCVAJUAwwDEAJsAuQCdAJ0AuQC6AKAAfgCeAJ4AfgCAAJ4AgACZAJkAgAC1AMwDzQMMAQwBzQMLAc4DzAMNAQ0BzAMMAc8D0AMPAQ8B0AMOAdEDzwMQARABzwMPAdID0QMRAREB0QMQAdMD0gMSARIB0gMRAc0D1AMLAQsB1AMTAdsBvwLcAdwBvwLDAr8C2wHBAsEC2wHVAysDugItAy0DugK8AiwD0gIrAysD0gK6At0C0gLWA9YD0gIsAyoD1wMsAywD1wPWA9wB2APeAd4B2AMLA9kD2gPbA9sD2gPcA9oD3QPcA9wD3QPeA90D3wPeA94D3wPgA98D4QPgA+AD4QPiA+MD5APlA+UD5APmA+cD6APjA+MD6APkA+kD6APqA+oD6APnA+sD7APtA+0D7APuA+8D8APxA/ED8APyA/MD9AP1A/UD9AP2A/cD+APcA9wD+APbA/kD9wPeA94D9wPcA/oD+QPgA+AD+QPeA/sD+gPiA+ID+gPgA+UD/APjA+MD/AP9A/0D/gPjA+MD/gPnA/4D/wPnA+cD/wPqA+ID6gP7A/sD6gP/A+0D7gMABAAE7gMBBPEDAgTvA+8DAgQDBPUDBATzA/MDBAQFBPMDBQQGBAYEBQQHBAgECQQKBAoECQQLBAwEDQQjAiMCDQQkAvgD9wMMBAwE9wMNBA0EDgQkAiQCDgSuAvcD+QMNBA0E+QMOBPkD+gMOBA4E+gMPBA4EDwSuAq4CDwSxAvoD+wMPBA8E+wMQBA8EEASxArECEAS0Ah8DEQQhAyEDEQQSBBEE/QMSBBIE/QP8AxMEEQQUBBQEEQQfA/4D/QMTBBME/QMRBBUEEwS3ArcCEwQUBP8D/gMVBBUE/gMTBLcCtAIVBBUEtAIQBPsD/wMQBBAE/wMVBPgC9gIWBBYE9gIXBAAEAQQXBBcEAQQWBOgCGATpAukCGAQZBBgEAwQZBBkEAwQCBO4CGgTsAuwCGgQbBBoEBQQbBBsEBQQEBPECHATuAu4CHAQaBAUEGgQHBAcEGgQcBPMCHQT1AvUCHQQeBAoEHwQIBAgEHwQgBB8E1gMgBCAE1gPXAyEEIgQjBCMEIgQkBCUEdgN1A3YDJQQmBH4DJAR/A38DJAQiBCQEfgMnBCcEfgOBAygEKQQqBCoEKQQrBCkELAQrBCsELAQtBCwELgQtBC0ELgQvBC4EMAQvBC8EMAQxBDIEMwQ0BDQEMwQ1BCwEdwN5A3cDLAQpBC4EeQN6A3kDLgQsBDAEegN7A3oDMAQuBDMEfAN9A3wDMwQyBCkEeAN3A3gDKQQoBCoEKwQ2BDYEKwQ3BCsELQQ3BDcELQQ4BC0ELwQ4BDgELwQ5BC8EMQQ5BDkEMQQ6BDQENQQ7BDsENQQ8BD0EIQRVAFUAIQQjBCMEJAQ+BD4EJAQnBD8EQARBBEEEQARCBEMEKgREBEQEKgQ2BCUERQQmBCYERQRGBMICzgLIAsgCzgJHBEgESQRKBEoESQRLBEkETARLBEsETARNBE4ETwRQBFAETwRRBE8EUgRRBFEEUgRTBFIEVARTBFMEVARVBFYEVwRYBFgEVwRZBDcCNgJIBEgENgJJBEwESQQ7AjsCSQQ2Aj0CPAJOBE4EPAJPBFIETwRBAkECTwQ8AlQEUgRDAkMCUgRBAlcEKAJZBFkEKAInAlcCRAJWBFYERAJXBEgEWgQ3AjcCWgTQAtgCWwTWAtYCWwRcBCoCKAJEAkQCKAJXBOEC4AJdBF0E4AJeBEgCRwIvAi8CRwIwAlACTwJcBFwETwLWAk8CUwLWAtYCUwLXAlUCLQJfBF8ELQJgBC0CLgJgBGAELgJhBDACXgQyAjICXgTgAl0EXgROAk4CXgRLAmAEYQRiBGIEYQRjBGQEYgRWAlYCYgRGAl8EYARkBGQEYARiBEkCSgJAAkACSgJCAkwCSQI+Aj4CSQJAAk0CTAI/Aj8CTAI+AlECUgI4AjgCUgI6AjgCOQJRAlECOQJUAkUCRgJjBGMERgJiBIECggJlBGUEggJmBM0CwALLAssCwAK9AvQBZwTzAfMBZwSEAj4EUwAjBCMEUwBVAGgEawBpBGkEawBpAMgAwABqBGoEwADCAL8AbADHAMcAbABrBJYAlwBsBGwElwBtBGwAbQBrBGsEbQBuBMsDiwBoBGgEiwBrAG0AkQBuBG4EkQBvBHAElABxBHEElACVAJcAegBtBG0EegB7AHIEsgBzBHMEsgCzAHkAdwBwBHAEdwCUAGkEaQDJAMkAaQC9AMQAxQB0BHQExQDGAAQBzQB1BHUEzQDLAP0A/gB2BHYE/gB3BMsA1QB1BHUE1QB4BHkE1gB6BHoE1gDOAHoEzgB7BHsEzgDPAHwE+wB9BH0E+wD8AP4A3QB3BHcE3QDeAM8ACgF7BHsECgF+BNwA2gB8BHwE2gD7AH4ECgF/BH8ECgETAdUAGgF4BHgEGgGABPwAFwF9BH0EFwEhAYAEGgGBBIEEGgEcASIBGwF5BHkEGwHWABwB/QCBBIEE/QB2BIIEOwGDBIMEOwF4ATwBPQGEBIQEPQGFBHUBuQOGBIYEuQOHBEQBiARCAUIBiARgAYkEOgGCBIIEOgE7AT0BJwGFBIUEJwEoASYBJAGJBIkEJAE6AVwBXQGKBIoEXQHxAYsESgGMBIwESgFqAY0EcwGOBI4EcwFxAYMEeAGPBI8EeAF0AY4EcQGQBJAEcQF2AY8EdAGGBIYEdAF1AXYBPAGQBJAEPAGEBIoBkQSMAYwBkQSSBK4BrwGTBJMErwGUBKsDmwOVBJUEmwONAZYEqgGXBJcEqgGsAa8BkwGUBJQEkwGUAZgEjgGZBJkEjgGTA5IBkAGWBJYEkAGqAXIDmgSyA7IDmgSbBJwEmQOdBJ0EmQOaA78BngSsAawBngSXBMQBrgGfBJ8ErgGTBCgDoAQmAyYDoATZARsDIwPNAc0BIwOhBM8BGwPOAc4BGwPNAcsByAGhBKEEyAHNAdABzwGiBKIEzwHOAccBBwPOAc4BBwOiBCYD2QEOAw4D2QHaAdMB2QHYAdgB2QGgBKMEEgPVA9UDEgMtA9UD2wGjBKME2wHdAYQDpAR2AnYCpASlBEoDSQOmBKYESQNQA0YEjgJBBEEEjgKnBFMCqATXAtcCqATaAqgEUwKpBKkEUwJUAjUEqgQ8BDwEqgSrBKwEgAJAA0ADgAJ+AvABrQSCAoICrQSuBK8EsASxBJMCkgKQAkUEjQJGBEYEjQKOApECkgKyBLMEsAS0BJgChQKXApcChQKGAqwCnAKGAoYCnAKXArUEtgSqBKoEtgSrBPQC9QK3BLcE9QK4BLkEugS7BLsEugQeBPQCtwS8BL0E8AL8Ar4EEAOjBKMEEAMSAwMDvgTdAd0BvgSjBL8EDAPaAdoBDAMOAwUDvwTVAdUBvwTaAZwCrAI3AzcDrAI4AzgDOQM3AzcDOQM6A0cDwARbA1sDwATBBFQDwgQ+Az4DwgRBA8EEwwRbA1sDwwRaA10DswNOAU4BswNRAYoExARcAVwBxARjA5oEcgOIA4gDcgNzA4UDZgODA4MDZgNnA4oDxQSGA4YDxQSHA6YDkQOSBJIEkQOMAZkEkwPGBMYEkwOWA2MDxASIAYgBxATHBIcEuQPIBMgEuQNLAckEuAONBI0EuANzAYgERAHJBMkERAG4A8gESwGLBIsESwFKAZEEigGcBJwEigGZA5UEjQGYBJgEjQGOAW8EkQByBHIEkQCyAMQAdASVAJUAdARxBMIAlgBqBGoElgBsBMEC1QO8ArwC1QMtA8oEywTMBMwEywTNBMwEuQTKBMoEuQS7BPUCHgS4BLgEHgS6BDYENwRkAGQANwRlADcEOARlAGUAOAQQAjgEOQQQAhACOQQUAjkEOgQUAhQCOgQgAjsEPAQeAh4CPAQcArYEzgSrBKsEzgQbAqcCPQRWAFYAPQRVAHECpwSMAowCpwSOAkQENgSFAoUCNgRkAM8EWgRKBM8ESgTQBKkEVALPAs8CVAI5AsACwQK9Ar0CwQK8AtEEkQLSBNIEkQKyBEQE0QRDBEME0QTSBNEERASYApgCRASFApEC0QSPAo8C0QSYAtME1ARNBE0E1ARLBEoESwTQBNAESwTUBNUE1gRTBFME1gRRBFAEUQTXBNcEUQTWBNgE1QRVBFUE1QRTBNkE2gQpAikC2gQnAtoE2wQnAicC2wRZBNoE2QR5AnkC2QTcBNUE2AR7AnsC2ATdBNYE1QR6AnoC1QR7AtcE1gR8AnwC1gR6AlgEWQTeBN4EWQTbBNsE2gR3AncC2gR5AtAE1ASAAoAC1AR/AtQE0wR/An8C0wRIA94E2wTfBN8E2wR3AmcE4ASEAoQC4AThBOIE4wTEAsQC4wTFAs8E0ASsBKwE0ASAAskCyALiBOIEyALjBAQC5AQDAgMC5ATlBOQECQPlBOUECQMIAw4C5gQNAg0C5gTnBOYECgPnBOcECgMLA/wB/QHoBOgE/QHpBDMD6gQyAzID6gTrBOsE6gQuAy4D6gQvA+gE6wT8AfwB6wQuAxgDMgPoBOgEMgPrBOwEPAPtBO0EPAM9AzwD7AQIAwgD7ATlBAMC5QQVAxUD5QTsBO4EuALnBOcEuAINAuEE7wSEAoQC7wSDAugE6QQYAxgD6QQZAxUD7AQXAxcD7ATtBJoCNAPhBOEENAPvBNgD7gQLAwsD7gTnBOAElALhBOEElAKaAkcE4wTIAkoEWgRIBJQC4ASTArEEZQRmBO8B7gHwBPAE7gF0AvAEdALxBPEEdALyBPEE8wTwBPAE8wT0BPIEdAL1BPUEdAJ1AvYE9wT4BPgE9wT5BPoE+wT8BPwE+wT9BPsE/gT9BP0E/gT/BPIE9QQABQAF9QQBBQIFAwX2BPYEAwX3BK8EZgQEBWYErwSxBGYEggIFBQUFggKuBCwCKwKrAqsCKwI0AgYFBwUCBQIFBwUDBQEF+gQABQAF+gT8BAgFCQX+BP4ECQX/BIgC9gSKAooC9gT4BAoFBgULBQYFCgUJBfwE/QTxBPEE/QTzBPEE8gT8BPwE8gQABQYFiAILBQsFiAIMBfkEDQX4BPgEDQWKAg4FZQIPBQ8FZQJnAiUAWAInACcAWAIEAGYCYwJoAmgCYwJkAkAEEAVCBEIEEAURBc4EEgUbAhsCEgUZAhIFawIZAhkCawIdAg8FZwIxADEAZwIvACYAJwArACsAJwAqABwAWwIdAB0AWwJdAicABAAqACoABAAFAGICYAI/AD8AYAI+AAEAAAAcABwAAABbAjwEqwQcAhwCqwQbAmcCaAIvAC8AaAJNAFAATwBzAnMCTwBpAoADEwV9A30DEwUzBE8AHQBpAmkCHQBdAiYAKwBkAmQCKwBLAFwAHQJeAF4AHQJsAiYERgRCBEIERgRBBHACcQKJAokCcQKMAj8AUABiAmICUABzAk0AaAJLAEsAaAJkAtQC1QJtAm0C1QJsAtUC3wJsAmwC3wLjAvMC8gLdAt0C8gLcAhQFHQQVBRUFHQQWBfoC4wLiAuIC4wLfAvsC8gK8BLwE8gL0Av8CAAPlAuUCAAMXBeUC5gL/Av8C5gIBA+YC5wIBAwED5wIYBQ8FEQUOBQ4FEQUQBQ8FdgMRBXYDDwUxABUFGQUUBRQFGQUaBcoEuwQaBRoFuwQUBd0CFgXzAvMCFgUdBLsEHgQUBRQFHgQdBCYEEQV2AxEFJgRCBDMEEwU1BDUEEwWqBIIDGwWAA4ADGwUTBRsFtQQTBRMFtQSqBBwFPwSnBKcEPwRBBPwCAQO9BL0EAQMYBW8CHAVxAnECHAWnBA0FcAKKAooCcAKJAlsE2AIXBRcF2ALlAlwDgQFdA10DgQGAAYQBgwFeA14DgwFfA4MBhQFfA18DhQFgA4UBhgFgA2ADhgFhA4YBhwFhA2EDhwFiA2MDiAFcA1wDiAGBAboBrAOVA5UDrAOUA6UDvAGVA5UDvAG6Aa4DrQOhA6EDrQOnA68DrgOiA6IDrgOhA7gBsAOiA6IDsAOvA7EDsAO2AbYBsAO4AbIDmwSWA5YDmwTGBJQDrAOWA5YDrAOyA8ADvwNPA08DvwNOA04DvwN0A3QDvwPBAwgCwwMHAgcCwwPCAwcCwgMBAgECwgPEAwECxAMCAgICxAPFAwICxQNRA1EDxQPGAx0FxwNMA0wDxwNLA8cDwANLA0sDwANPA80DzANTA1MDzANUA8wDzgNUA1QDzgPCBNADzwNVA1UDzwNWA1YDzwNXA1cDzwPRA1cD0QNYA1gD0QPSA1gD0gNZA1kD0gPTA8MEHgVaA1oDHgXUA9QDzQNaA1oDzQNTA4gBxwRqAWoBxwSMBMcDHQWzALMAHQVzBNQDHgUTARMBHgV/BB0DHAMUBBQEHAO3Au8BrQRdAV0BrQTwAfQE8wQfBR8F8wQgBf0E/wTzBPME/wQgBQoFIAUJBQkFIAX/BAgFBwUJBQkFBwUGBUcCSwIwAjACSwJeBF8AXQBcAF0AXwD3AsQBnwSaA5oDnwSdBMQBmgO+Ab4BmgOYA78BvgGcA5wDvgGYA54EvwGqA6oDvwGcA8UBxgHAAcABxgHBAaQBogHAAcABogHFAaEBogGjAaMBogGkAaMBqAOhAaEBqAO9AbcCHAO2ArYCHAMhBR8DJAMUBBQEJAMdA9cDKgMiBSIFKgMpA9wBwwLYA9gDwwLJAuIE7gTJAskC7gTYA7gC7gTEAsQC7gTiBMQCxgK4ArgCxgK5Al4A5AJfAF8A5ALrAl8A6wL2AvYC6wLpAvYC6QIXBBcE6QIZBAIEAAQZBBkEAAQXBAIE8QMABAAE8QPtA/ED8gPtA+0D8gPrA1cBUgFZAVkBUgFUAYMCIwX1AfUBIwX2Ae8EJAWDAoMCJAUjBSQF7wQlBSUF7wQ0AzUDJgU0AzQDJgUlBSYFNQM7AzsDNQM2A9IBIQXRAdEBIQUcA3UC5AEnBScF5AHmAX0CRwM/Az8DRwNbA98EdwKlBKUEdwJ2AooDeALcBNwEeAJ5AnUCJwX1BPUEJwUoBfUEKAUBBQEFKAUpBSoF+gQpBSkF+gQBBVAD6wHdBN0E6wF7AisF+wQqBSoF+wT6BCwF/gQrBSsF/gT7BC0FCAUsBSwFCAX+BC4FBwUtBS0FBwUIBQcFLgUDBQMFLgUvBQMFLwX3BPcELwUwBfcEMAX5BPkEMAUxBTEFMgX5BPkEMgUNBXACDQVuAm4CDQUyBSoEQwQoBCgEQwQzBTQFMwXSBNIEMwVDBNIEsgQ0BY0CswSLAocCiwK0BLQEiwKzBK8EBAUMBQwFBAULBQoFHwUgBR8FCgU1Ba0E7wH0BPQE7wHwBK0E9ASuBK4E9AQfBTUFBQUfBR8FBQWuBDUFCwUEBQsFNQUKBWYEBQUEBQQFBQU1BbQEDAWHAocCDAWIAgwFtASvBK8EtASwBIgCBgX2BPYEBgUCBSUDIAMnAycDIAMiBdcDIgUhAyEDIgUgAyEDEgTXA9cDEgQgBBIE/AMgBCAE/AMIBAkECATlA+UDCAT8A+UD5gMJBAkE5gM2BQ0DNwUPAw8DNwUeAx8DHgMkAyQDHgM3BRYF3QIfBB8E3QLWAxUFFgUKBAoEFgUfBAoECwQVBRUFCwQZBeED6QPiA+ID6QPqA/QD8wM4BTgF8wMGBDkFCwQ2BTYFCwQJBDoFGgU7BTsFGgUZBcsEygQ6BToFygQaBTsFGQU5BTkFGQULBDwFPQU+BT4FPQU/BT0FQAU/BT8FQAVBBUAFQgVBBUIFQwVBBUMFRAVBBUEFRAVFBUQFRgVFBUUFRgVHBUYFSAVHBUgFSQVHBUcFSQVKBUkFSwVKBUsFTAVKBUwFTQVKBUoFTQVOBU0FTwVOBfYB+QH3AfcB+QH4AfkB9gH9Af0B9gEjBf0BIwXpBOkEIwUkBeIBjwPhAeEBjwMxAwQC4QEvAy8D4QExAy8D6gQEAgQC6gTkBAwCUgMLAgsCUgMWAw4CCwIXAxcDCwIWAxcD7QQOAg4C7QTmBIoD5gHFBMUE5gHlAeYBigMnBScFigPcBCcF3AQoBSgF3ATZBCgF2QQpBSkF2QQpAqQEpgSlBKUEpgRQA90E3wRQA1AD3wSlBNgE3gTdBN0E3gTfBFUEWATYBNgEWATeBEcD6AHABMAE6AHnAUgDfAJHA0cDfALoAdME1wRIA0gD1wR8Ak0EUATTBNMEUATXBAkD5AQzAzMD5ATqBAQDCQPMAcwBCQMzAwoD5gQ9Az0D5gTtBAIDCgPXAdcBCgM9A+kEJAUZAxkDJAUlBRkDJQUGAwYDJQUmBQYDJgUHAwcDJgU7AwcDOwOiBKIEOwM6AzkD0AE6AzoD0AGiBNABOQPSAdIBOQO1ArYCIQW1ArUCIQXSAQUDBAPLAcsBBAPMAaEEvwTLAcsBvwQFAyMDDAOhBKEEDAO/BCIDDQMjAyMDDQMMAyQDNwUiAyIDNwUNAwMDAgPYAdgBAgPXAb4EAwOgBKAEAwPYAaAEKAO+BL4EKAMQAxEDEAMnAycDEAMoAyIFKQMnAycDKQMRA0wETgRNBE0ETgRQBDsCPQJMBEwEPQJOBD0COwI/Aj8COwI6AlICTQI6AjoCTQI/Ak0CUgJOAk4CUgJQAlwEXQRQAlACXQROAlsE4QJcBFwE4QJdBOECWwTiAuICWwQXBQAD+gIXBRcF+gLiAv4C+QIAAwAD+QL6Au0C6gL+Av4C6gL5Au0C7ALqAuoC7ALoAhgE6AIbBBsE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";var nn=U,u0=Qt,Zn=Qe,gi=(i,e,t)=>Math.max(e,Math.min(t,i)),Jh=i=>(i=gi(i,0,1),i*i*(3-2*i)),Zh=i=>(i=gi(i,0,1),1-Math.pow(1-i,3)),sn=(i,e,t)=>i+(e-i)*t;function $h(i,e){e=e||{};let t=!!e.reduce,n=new va({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});n.setClearColor(0,0),n.shadowMap.enabled=!0,n.shadowMap.type=Co,n.outputColorSpace=gt,n.toneMapping=dr,n.toneMappingExposure=1.05;let s=new Ws,r=new St(26,1,.05,20);r.position.set(0,0,1.15);let o=document.createElement("canvas");o.width=512,o.height=256;let a=new ds(o);a.mapping=Ms,a.colorSpace=gt;let c=new bs(n),A=null,l={top:[.16,.42,.85],hor:[.85,.93,1],gnd:[.55,.62,.32],sun:[1,.96,.85],sunDir:new nn(-.5,.5,.7).normalize(),key:""};function u(j,ne){return"rgb("+Math.round(gi(j[0]*(ne||1),0,1)*255)+","+Math.round(gi(j[1]*(ne||1),0,1)*255)+","+Math.round(gi(j[2]*(ne||1),0,1)*255)+")"}function h(){let j=o.getContext("2d"),ne=512,re=256,le=j.createLinearGradient(0,0,0,re);le.addColorStop(0,u(l.top)),le.addColorStop(.5,u(l.hor)),le.addColorStop(.52,u(l.gnd,.8)),le.addColorStop(1,u(l.gnd,.45)),j.fillStyle=le,j.fillRect(0,0,ne,re);let Ge=l.sunDir,ye=.5+Math.atan2(Ge.x,-Ge.z)/(2*Math.PI),oe=.5-Math.asin(gi(Ge.y,-1,1))/Math.PI,Ae=j.createRadialGradient(ye*ne,oe*re,0,ye*ne,oe*re,70);Ae.addColorStop(0,u(l.sun,1.4)),Ae.addColorStop(.15,u(l.sun,1)),Ae.addColorStop(1,"rgba(255,255,255,0)"),j.fillStyle=Ae,j.fillRect(0,0,ne,re),a.needsUpdate=!0,A&&A.dispose(),A=c.fromEquirectangular(a),s.environment=A.texture}let d=new ui(16773596,3.6);s.add(d),s.add(d.target),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),d.shadow.camera.left=-.3,d.shadow.camera.right=.3,d.shadow.camera.top=.3,d.shadow.camera.bottom=-.3,d.shadow.camera.near=.1,d.shadow.camera.far=4,d.shadow.bias=-6e-4,d.shadow.normalBias=.004,d.shadow.radius=4;let g=new ui(16738874,1.6);s.add(g);let v=new ar(12376319,9071176,.35);s.add(v);function p(){let ne=document.createElement("canvas");ne.width=ne.height=512;let re=ne.getContext("2d"),le=new Float32Array(512*512),Ge=7,ye=()=>(Ge=Ge*16807%2147483647)/2147483647;for(let Me=0;Me<5200;Me++){let Re=ye()*512,We=ye()*512,_e=.8+ye()*1.6;for(let Ne=-3;Ne<=3;Ne++)for(let Je=-3;Je<=3;Je++){let C=Math.sqrt(Je*Je+Ne*Ne);if(C<_e*2){let ft=(Math.floor(Re+Je)+512)%512,tt=(Math.floor(We+Ne)+512)%512;le[tt*512+ft]-=Math.exp(-C*C/(_e*_e))*.9}}}for(let Me=0;Me<120;Me++){let Re=ye()*512,We=ye()*512,_e=ye()*6.28,Ne=20+ye()*70;for(let Je=0;Je<Ne;Je++){Re+=Math.cos(_e)*1.2,We+=Math.sin(_e)*1.2,_e+=(ye()-.5)*.25;let C=(Math.floor(Re)+512)%512,ft=(Math.floor(We)+512)%512;le[ft*512+C]-=.7,le[(ft+1)%512*512+C]-=.3}}let oe=re.createImageData(512,512);for(let Me=0;Me<512;Me++)for(let Re=0;Re<512;Re++){let We=le[Me*512+(Re+1)%512]-le[Me*512+(Re-1+512)%512],_e=le[(Me+1)%512*512+Re]-le[(Me-1+512)%512*512+Re],Ne=-We*.6,Je=-_e*.6,C=1,ft=Math.sqrt(Ne*Ne+Je*Je+C*C),tt=(Me*512+Re)*4;oe.data[tt]=(Ne/ft*.5+.5)*255,oe.data[tt+1]=(Je/ft*.5+.5)*255,oe.data[tt+2]=(C/ft*.5+.5)*255,oe.data[tt+3]=255}re.putImageData(oe,0,0);let Ae=new ds(ne);return Ae.wrapS=Ae.wrapT=Tn,Ae.repeat.set(5,5),Ae.anisotropy=4,Ae}let f=new Rt({color:14918271,roughness:.5,metalness:0,vertexColors:!0,sheen:1,sheenColor:new Fe(1,.62,.52),sheenRoughness:.45,clearcoat:.18,clearcoatRoughness:.45,normalMap:p(),normalScale:new He(.45,.45),envMapIntensity:.65}),E=new Rt({color:15909558,roughness:.22,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.2}),b=new Wn({color:12107465,metalness:1,roughness:.28,envMapIntensity:1.3}),M=new Jt;s.add(M);let y={bones:{},rest:{},ready:!1,links:[],mesh:null},w={thumb:["thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip"],index:["index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip"],middle:["middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip"],ring:["ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip"],pinky:["pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]},S=["index","middle","ring","pinky"],x=Uint8Array.from(atob(Kh),j=>j.charCodeAt(0)).buffer;new _a().parse(x,"",j=>{let ne=j.scene;M.add(ne),ne.traverse(oe=>{oe.isBone&&(y.bones[oe.name]=oe,y.rest[oe.name]={p:oe.position.clone(),q:oe.quaternion.clone()}),oe.isSkinnedMesh&&(y.mesh=oe,oe.material=f,oe.frustumCulled=!1,oe.castShadow=!0,oe.receiveShadow=!0)});let re=y.mesh.geometry.attributes.position,le=new Float32Array(re.count*3),Ge=[];Object.keys(w).forEach(oe=>Ge.push(y.rest[w[oe][w[oe].length-1]].p));for(let oe=0;oe<re.count;oe++){let Ae=new nn(re.getX(oe),re.getY(oe),re.getZ(oe)),Me=1e9;Ge.forEach(We=>{Me=Math.min(Me,Ae.distanceTo(We))});let Re=ye(.03,0,Me);le[oe*3]=1,le[oe*3+1]=1-.1*Re,le[oe*3+2]=1-.13*Re}y.mesh.geometry.setAttribute("color",new Pt(le,3));function ye(oe,Ae,Me){let Re=gi((Me-oe)/(Ae-oe),0,1);return Re*Re*(3-2*Re)}_(),y.ready=!0,e.onReady&&e.onReady()});function _(){let j=new ps(1.5,1,.42,56,30,!0);j.translate(0,.21,0);let ne=j.attributes.position;for(let Ae=0;Ae<ne.count;Ae++){let Me=ne.getY(Ae),Re=Me/.42,We=Math.atan2(ne.getZ(Ae),ne.getX(Ae)),_e=1+.045*Math.sin(We*5+Re*6)*Math.min(1,Re*3)+.02*Math.sin(We*9-Re*11),Ne=(1+.55*Re)*_e;ne.setX(Ae,ne.getX(Ae)*.0262*Ne),ne.setZ(Ae,ne.getZ(Ae)*.0345*Ne)}j.computeVertexNormals();let re=new Rt({color:16118250,roughness:.82,sheen:1,sheenColor:new Fe(1,.96,.9),sheenRoughness:.5,side:Yt,envMapIntensity:.5}),le=new wt(j,re);le.castShadow=!0,le.receiveShadow=!0,le.position.set(.0372,.0475,.0122),M.add(le),y.arm=le;let Ge=new ps(1.06,1,.016,56,1,!1),ye=Ge.attributes.position;for(let Ae=0;Ae<ye.count;Ae++)ye.setX(Ae,ye.getX(Ae)*.0276),ye.setZ(Ae,ye.getZ(Ae)*.0364);Ge.computeVertexNormals();let oe=new wt(Ge,re);oe.position.set(.0372,.0475+.004,.0122),oe.castShadow=!0,M.add(oe);for(let Ae=0;Ae<8;Ae++){let Me=new wt(new ir(.0125,.0032,12,28),b);M.add(Me),y.links.push({m:Me,i:Ae,broken:!1,v:new nn,w:new nn})}}let D=new Zn,L=new u0,F=new nn;function k(j,ne,re,le,Ge,ye){let oe=new Zn;if(le){let Ae=y.rest[j[1]].p.clone();oe=new Zn().makeTranslation(Ae.x,Ae.y,Ae.z).multiply(new Zn().makeRotationAxis(Ge,le)).multiply(new Zn().makeTranslation(-Ae.x,-Ae.y,-Ae.z))}for(let Ae=0;Ae<j.length;Ae++){let Me=y.rest[j[Ae]];if(Ae>=1&&Ae<=ne.length&&ne[Ae-1]!==0){let _e=Me.p.clone().applyMatrix4(oe),Ne=re.clone().transformDirection(oe);oe=new Zn().makeTranslation(_e.x,_e.y,_e.z).multiply(new Zn().makeRotationAxis(Ne,ne[Ae-1])).multiply(new Zn().makeTranslation(-_e.x,-_e.y,-_e.z)).multiply(oe)}let Re=new Zn().compose(Me.p,Me.q,new nn(1,1,1));Re.premultiply(oe);let We=y.bones[j[Ae]];Re.decompose(We.position,We.quaternion,F)}}let B=new nn(0,0,1),Q=new nn(1,0,0),Y={s:1,x:0,y:0},G={t:0,mx:0,my:0,mxs:0,mys:0,broke:!1,flare:0},se=1.9,X=2.15,ee=2.4,J={flexSign:1,openCurl:[.3,.34,.2],fist:[1.25,1.55,1],per:[[0,-.06,-.04],[.06,.02,-.02],[.14,.1,.02],[.24,.16,.06]]};function Ue(j){if(!y.ready)return;let ne=J.flexSign;S.forEach((le,Ge)=>{let ye=j.curl[Ge],oe=J.per[Ge],Ae=1-ye,Me=(sn(J.openCurl[0],J.fist[0],ye)+oe[0]*Ae)*ne,Re=(sn(J.openCurl[1],J.fist[1],ye)+oe[1]*Ae)*ne,We=(sn(J.openCurl[2],J.fist[2],ye)+oe[2]*Ae)*ne,_e=(Ge-1.5)*.11*j.spread*(Ge===3?1.15:1);k(w[le],[Me,Re,We],B,_e,Q)});let re=j.curl[4];k(w.thumb,[sn(.05,.9,re)*ne,sn(.02,.8,re)*ne],new nn(0,.6,.8).normalize(),-j.thumbOut*.5,new nn(0,0,1))}function be(){let j=i.clientWidth||i.width,ne=i.clientHeight||i.height,re=Math.min(window.devicePixelRatio||1,2);n.setPixelRatio(re),n.setSize(j,ne,!1),r.aspect=j/ne,r.updateProjectionMatrix();let le=j/ne;Y.s=le<1.25?1.85:1,Y.x=le<1.25?-.02:0,Y.y=le<1.25?.03:0}function At(j){if(!j)return;let ne=[j.top,j.hor,j.gnd,j.sun].map(re=>re.map(le=>le.toFixed(2)).join(",")).join("|")+j.sunDir.map(re=>re.toFixed(2)).join(",");ne!==l.key&&(l.key=ne,l.top=j.top,l.hor=j.hor,l.gnd=j.gnd,l.sun=j.sun,l.sunDir.set(j.sunDir[0],j.sunDir[1],j.sunDir[2]).normalize(),h(),d.color.setRGB(j.sun[0],j.sun[1],j.sun[2]),d.position.copy(l.sunDir).multiplyScalar(2),g.position.copy(l.sunDir).multiplyScalar(-2).add(new nn(0,.4,-1)))}function qe(j){G.t+=j;let ne=G.t;G.mxs+=(G.mx-G.mxs)*(1-Math.exp(-j*3)),G.mys+=(G.my-G.mys)*(1-Math.exp(-j*3));let re=t?1:Zh((ne-X)/ee),le=ne<se?Math.sin(ne*40)*.01*Jh((ne-.7)/1):0,Ge=.5+.5*Math.sin(ne*.9),ye=[];for(let We=0;We<5;We++){let _e=t?1:Jh((ne-X-We*.1)/ee);ye.push(gi(1-_e+.05*Ge*_e+.03*Math.sin(ne*1.3+We)*_e+le*6,0,1.05))}let oe=t?1:Zh((ne-X+.3)/(ee+.8)),Ae=Math.sin(ne*.7)*re;Ue({curl:ye,spread:sn(.35,1+.12*Math.sin(ne*.8),re),thumbOut:sn(0,1,re)}),M.rotation.order="XYZ";let Me=Math.sin(ne*.55)*.05*re,Re=Math.cos(ne*.43)*.04*re;if(M.rotation.set(sn(.2,.45,oe)+G.mys*.1+Re,sn(-.75,-.9,oe)+G.mxs*.16+Me,sn(3.72,4,oe)-G.mxs*.08),M.position.set(sn(.09,.075,oe)+G.mxs*.02,sn(-.16,-.1,oe)+Ae*.006-le*.3-G.mys*.01,0),M.scale.setScalar((J.scale||sn(.78,.86,oe))*Y.s),M.position.x+=Y.x,M.position.y+=Y.y,J.rot&&(M.rotation.set(J.rot[0],J.rot[1],J.rot[2]),M.position.set(J.rot[3]||0,J.rot[4]||0,0)),y.ready){let We=y.rest.wrist.p;if(y.links.forEach(_e=>{if(!G.broke){let Ne=_e.i/y.links.length*Math.PI*2;_e.m.position.set(.0372+Math.cos(Ne)*.0312,.0475+.03+(_e.i%2?.003:-.003),.0122+Math.sin(Ne)*.0398),_e.m.rotation.set(0,-Ne+Math.PI/2,_e.i%2?Math.PI/2:0),_e.m.rotation.order="YXZ",_e.m.visible=!0}}),!G.broke&&ne>=se){G.broke=!0,G.flare=1,M.updateMatrixWorld(!0);let _e=M.localToWorld(new nn(.0372,.0475+.03,.0122));y.links.forEach(Ne=>{Ne.broken=!0;let Je=new nn;Ne.m.getWorldPosition(Je),s.attach(Ne.m),Ne.v.copy(Je).sub(_e).normalize().multiplyScalar(.1+Math.random()*.08),Ne.v.y+=.05+Math.random()*.05,Ne.w.set((Math.random()-.5)*7,(Math.random()-.5)*7,(Math.random()-.5)*7)}),t&&y.links.forEach(Ne=>{Ne.m.visible=!1}),e.onBreak&&e.onBreak()}G.broke&&y.links.forEach(_e=>{_e.m.visible&&(_e.v.y-=.9*j,_e.m.position.addScaledVector(_e.v,j),_e.m.rotation.x+=_e.w.x*j,_e.m.rotation.y+=_e.w.y*j,_e.m.rotation.z+=_e.w.z*j,_e.m.position.y<-.6&&(_e.m.visible=!1))})}G.flare=Math.max(0,G.flare-j*.6)}function et(){n.render(s,r)}function W(j){if(!W.on)return;let ne=Math.min((j-W.last)/1e3,.05);W.last=j,qe(ne),et(),requestAnimationFrame(W)}return W.on=!1,W.last=0,be(),h(),{S:y,st:G,P:J,root:M,camera:r,scene:s,layout:be,setSky:At,render:et,frame:j=>{G.t=j,qe(0),et()},reset:()=>{G.t=0,G.broke=!1,y.links.forEach(j=>{j.broken=!1,j.m.visible=!0,M.add(j.m)})},step:j=>{qe(j),et()},start:()=>{W.on||(W.on=!0,W.last=performance.now(),requestAnimationFrame(W))},stop:()=>{W.on=!1},pointer:(j,ne)=>{G.mx=j,G.my=ne}}}(function(){let i=document.getElementById("hand");if(!i)return;let e=!!(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches),t=null;try{let A=document.createElement("canvas");if(!(A.getContext("webgl2")||A.getContext("webgl")))throw new Error("no webgl");t=$h(i,{reduce:e,onBreak(){window.YVSky&&(window.YVSky.flareTarget=1)},onReady(){document.documentElement.classList.add("has-hand")}})}catch{i.style.display="none";return}let n=[{top:[.16,.42,.85],hor:[.85,.93,1],gnd:[.55,.62,.32],sun:[1,.96,.85]},{top:[.2,.42,.66],hor:[1,.72,.42],gnd:[.82,.52,.22],sun:[1,.8,.5]},{top:[.16,.14,.42],hor:[1,.52,.42],gnd:[.36,.2,.3],sun:[1,.62,.42]},{top:[.02,.04,.16],hor:[.2,.24,.45],gnd:[.06,.08,.16],sun:[.7,.78,1]}],s=(A,l,u)=>A.map((h,d)=>h+(l[d]-h)*u);function r(A){A=Math.max(0,Math.min(3,A));let l=Math.min(2,Math.floor(A)),u=A-l,h=n[l],d=n[l+1];return{top:s(h.top,d.top,u),hor:s(h.hor,d.hor,u),gnd:s(h.gnd,d.gnd,u),sun:s(h.sun,d.sun,u),sunDir:[-.55,.55,.62]}}let o=-9;function a(){let A=window.YVSky?window.YVSky.phase:0;Math.abs(A-o)>.04&&(o=A,t.setSky(r(A)))}a(),setInterval(a,250);let c=!0;window.addEventListener("pointermove",A=>t.pointer(A.clientX/innerWidth-.5,A.clientY/innerHeight-.5),{passive:!0}),window.addEventListener("resize",()=>{t.layout(),e&&t.render()}),"IntersectionObserver"in window&&new IntersectionObserver(A=>A.forEach(l=>{c=l.isIntersecting,c&&!document.hidden?t.start():t.stop()}),{threshold:0}).observe(i),document.addEventListener("visibilitychange",()=>{document.hidden?t.stop():c&&t.start()}),e?t.frame(99):t.start(),window.YVHand={replay(){t.reset()},api:t}})();})();
