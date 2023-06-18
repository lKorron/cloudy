(self["webpackChunkcloudy"]=self["webpackChunkcloudy"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){var r=n(6339),i=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,d,f,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(d in t){if(h=t[d],e.dontCallGetSet?(p=i(l,d),f=p&&p.value):f=l[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&o(h,"sham",!0),s(l,d,h,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),d=n(5465),f=n(6200),h=n(3501),p="Object already initialized",v=a.TypeError,m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw v(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},o=function(e){return b.has(e)}}else{var _=f("state");h[_]=!0,r=function(e,t){if(l(e,_))throw v(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},o=function(e){return l(e,_)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,d=u.get,f=Object.defineProperty,h=s&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),v=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||a&&e.name!==t)&&(s?f(e,"name",{value:t,configurable:!0}):e.name=t),h&&n&&o(n,"arity")&&e.length!==n.arity&&f(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return o(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=v((function(){return i(this)&&d(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",h="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&h in n&&!n[h]){var r=l(e,t);r&&r[h]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,d=l&&l["for"],f=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):f(t)}return u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(e){var t=i(this),n=o(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var d=0;d<r;d++)t[d]=arguments[d]}return s(t,n+r)}})},2087:function(e,t,n){var r=n(7854),i=n(9781),o=n(7045),s=n(7066),a=n(7293),c=r.RegExp,u=c.prototype,l=i&&a((function(){var e=!0;try{c(".","d")}catch(l){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in e&&(o.hasIndices="d"),o)i(s,o[s]);var a=Object.getOwnPropertyDescriptor(u,"flags").get.call(t);return a!==r||n!==r}));l&&o(u,"flags",{configurable:!0,get:s})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),d=n(6277),f=n(3678),h=n(1060),p=n(9781),v=n(1913),m="DOMException",g=o("Error"),y=o(m),b=function(){u(this,_);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=g(t);return i.name=m,a(r,"stack",s(1,h(i.stack,1))),l(r,this,b),r},_=b.prototype=y.prototype,w="stack"in g(m),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!E&&!(E.writable&&E.configurable),k=w&&!S&&!I;r({global:!0,constructor:!0,forced:v||k},{DOMException:k?b:y});var O=o(m),T=O.prototype;if(T.constructor!==O)for(var A in v||a(T,"constructor",s(1,O)),f)if(c(f,A)){var R=f[A],C=R.s;c(O,C)||a(O,C,s(6,R.c))}},1125:function(e,t,n){"use strict";n.d(t,{Xb:function(){return mt},v0:function(){return Tr},Aj:function(){return Et},w$:function(){return yt},e5:function(){return gt},w7:function(){return St},ck:function(){return _t}});n(7658);var r=n(223),i=n(7077),o=n(5168);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),d=new o.Yd("@firebase/auth");function f(e,...t){d.logLevel<=o["in"].ERROR&&d.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r.LL("auth","Firebase",i);return o.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const o=n.initialize({options:t});return o}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,i,o={}){return L(e,o,(async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function L(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw V(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);h(e,a)}}catch(o){if(o instanceof r.ZR)throw o;h(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const o=await M(e,t,n,r,i);return"mfaPendingCredential"in o&&h(e,"multi-factor-auth-required",{_serverResponse:o}),o}function j(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?C(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),o=q(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:H(W(o.auth_time)),issuedAtTime:H(W(o.iat)),expirationTime:H(W(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function q(e){var t;const[n,i,o]=e.split(".");if(void 0===n||void 0===i||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===(t=s)||void 0===t?void 0:t.toString()),null}}function J(e){const t=q(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&G(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function G({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,B(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new X(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Q(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await L(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=j(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:I,stsTokenManager:E}=t;g(b&&E,e,"internal-error");const S=re.fromJSON(this.name,E);g("string"===typeof b,e,"internal-error"),ie(l,e.name),ie(d,e.name),g("boolean"===typeof _,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),ie(f,e.name),ie(h,e.name),ie(p,e.name),ie(v,e.name),ie(m,e.name),ie(y,e.name);const k=new oe({uid:b,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(k.providerData=I.map((e=>Object.assign({},e)))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ve(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ye(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ie(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${o}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Z(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Oe(e){return(0,r.m9)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=Oe(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Re(t),{host:s,port:a}=Ce(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ne()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ce(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Pe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Pe(t)}}}function Pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ne(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}async function Le(e,t){return M(e,"POST","/v1/accounts:sendOobCode",D(e,t))}async function Ue(e,t){return Le(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function je(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function Fe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ve(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ve(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Me(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="http://localhost";class He extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new He(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new He(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:Be,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function We(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function qe(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Je={["USER_NOT_FOUND"]:"user-not-found"};async function Ke(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),Je)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return We(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ke(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xe(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],o=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return o||i||n||t||e}class Ze{constructor(e){var t,n,i,o,s,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Ye(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Xe(e);try{return new Ze(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(){this.providerId=Qe.PROVIDER_ID}static credential(e,t){return Ve._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ze.parseLink(t);return g(n,"argument-error"),Ve._fromEmailAndCode(e,n.code,n.tenantId)}}Qe.PROVIDER_ID="password",Qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends tt{constructor(){super("facebook.com")}static credential(e){return He._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com",nt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return He._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com",rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends tt{constructor(){super("github.com")}static credential(e){return He._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch(t){return null}}}it.GITHUB_SIGN_IN_METHOD="github.com",it.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends tt{constructor(){super("twitter.com")}static credential(e,t){return He._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ot.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return U(e,"POST","/v1/accounts:signUp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot.TWITTER_SIGN_IN_METHOD="twitter.com",ot.PROVIDER_ID="twitter.com";class at{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=ct(n),s=new at({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ct(n);return new at({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ut.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ut(e,t,n,r)}}function lt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ut._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return at._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ft(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await K(e,lt(i,o,t,e),n);g(r.idToken,i,"internal-error");const s=q(r.idToken);g(s,i,"internal-error");const{sub:a}=s;return g(e.uid===a,i,"user-mismatch"),at._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===(r=s)||void 0===r?void 0:r.code)&&h(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n=!1){const r="signIn",i=await lt(e,r,t),o=await at._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function pt(e,t){return ht(Oe(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(e,t,n){var r;g((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),g("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(g(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(g(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t,n){const r=Oe(e),i=await st(r,{returnSecureToken:!0,email:t,password:n}),o=await at._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function gt(e,t,n){return pt((0,r.m9)(e),Qe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:i};t&&vt(n.auth,o,t);const{email:s}=await Ue(n.auth,o);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bt(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await K(i,bt(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function wt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function It(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function Et(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function St(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Ot(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const Tt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tt,"1"),this.storage.removeItem(Tt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){const e=(0,r.z$)();return fe(e)||ye(e)}const Ct=1e3,Pt=10;class Nt extends At{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rt()&&Ie(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Pt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ct)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nt.type="LOCAL";const xt=Nt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends At{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dt.type="SESSION";const Mt=Dt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ut(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Lt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.receivers=[];class Ft{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=jt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function $t(e){Vt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return"undefined"!==typeof Vt()["WorkerGlobalScope"]&&"function"===typeof Vt()["importScripts"]}async function Ht(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function zt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Wt(){return Bt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="firebaseLocalStorageDb",Jt=1,Kt="firebaseLocalStorage",Gt="fbase_key";class Yt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Xt(e,t){return e.transaction([Kt],t?"readwrite":"readonly").objectStore(Kt)}function Zt(){const e=indexedDB.deleteDatabase(qt);return new Yt(e).toPromise()}function Qt(){const e=indexedDB.open(qt,Jt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Kt,{keyPath:Gt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Kt)?t(n):(n.close(),await Zt(),t(await Qt()))}))}))}async function en(e,t,n){const r=Xt(e,!0).put({[Gt]:t,value:n});return new Yt(r).toPromise()}async function tn(e,t){const n=Xt(e,!1).get(t),r=await new Yt(n).toPromise();return void 0===r?null:r.value}function nn(e,t){const n=Xt(e,!0).delete(t);return new Yt(n).toPromise()}const rn=800,on=3;class sn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>on)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ut._getInstance(Wt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ht(),!this.activeServiceWorker)return;this.sender=new Ft(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&zt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qt();return await en(e,Tt,"1"),await nn(e,Tt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>en(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>tn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>nn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xt(e,!1).getAll();return new Yt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),rn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}sn.type="LOCAL";const an=sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function un(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function dn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ln().appendChild(r)}))}function fn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
fn("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="recaptcha";async function pn(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===hn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await kt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await cn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ze(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(e){this.providerId=vn.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return pn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vn.credentialFromTaggedObject(t)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mn(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.PROVIDER_ID="phone",vn.PHONE_SIGN_IN_METHOD="phone";class gn extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yn(e){return ht(e.auth,new gn(e),e.bypassAuthState)}function bn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ft(n,new gn(e),e.bypassAuthState)}async function _n(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),dt(n,new gn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yn;case"linkViaPopup":case"linkViaRedirect":return _n;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:h(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new R(2e3,1e4);class En extends wn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=jt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,In.get())};e()}}En.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn="pendingRedirect",kn=new Map;class On extends wn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=kn.get(this.auth._key());if(!e){try{const t=await Tn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}kn.set(this.auth._key(),e)}return this.bypassAuthState||kn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Tn(e,t){const n=Cn(t),r=Rn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function An(e,t){kn.set(e._key(),t)}function Rn(e){return w(e._redirectPersistence)}function Cn(e){return ce(Sn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t,n=!1){const r=Oe(e),i=mn(r,t),o=new On(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nn=6e5;class xn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ln(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Mn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dn(e))}saveEventToCache(e){this.cachedEventUids.add(Dn(e)),this.lastProcessedEventTime=Date.now()}}function Dn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Mn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ln(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fn=/^https?/;async function Vn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Un(e);for(const r of t)try{if($n(r))return}catch(n){}h(e,"unauthorized-domain")}function $n(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Fn.test(n))return!1;if(jn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new R(3e4,6e4);function Hn(){const e=Vt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function zn(e){return new Promise(((t,n)=>{var r,i,o;function s(){Hn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hn(),n(p(e,"network-request-failed"))},timeout:Bn.get()})}if(null===(i=null===(r=Vt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Vt().gapi)||void 0===o?void 0:o.load)){const t=fn("iframefcb");return Vt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},dn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Wn=null,e}))}let Wn=null;function qn(e){return Wn=Wn||zn(e),Wn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new R(5e3,15e3),Kn="__/auth/iframe",Gn="emulator/auth/iframe",Yn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,Gn):`https://${e.config.authDomain}/${Kn}`,o={apiKey:t.apiKey,appName:e.name,v:i.Jn},s=Xn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,r.xO)(o).slice(1)}`}async function Qn(e){const t=await qn(e),n=Vt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Vt().setTimeout((()=>{r(i)}),Jn.get());function s(){Vt().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tr=500,nr=600,rr="_blank",ir="http://localhost";class or{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function sr(e,t,n,i=tr,o=nr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},er),{width:i.toString(),height:o.toString(),top:s,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=he(l)?rr:n),de(l)&&(t=t||ir,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(l)&&"_self"!==c)return ar(t||"",c),new or(null);const f=window.open(t||"",c,d);g(f,e,"popup-blocked");try{f.focus()}catch(h){}return new or(f)}function ar(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="__/auth/handler",ur="emulator/auth/handler";function lr(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i.Jn,eventId:s};if(t instanceof et){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${dr(e)}?${(0,r.xO)(u).slice(1)}`}function dr({config:e}){return e.emulator?C(e,ur):`https://${e.authDomain}/${cr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="webStorageSupport";class hr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mt,this._completeRedirectFn=Pn,this._overrideRedirectResult=An}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=lr(e,t,n,S(),r);return sr(e,o,jt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),$t(lr(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Qn(e),n=new xn(e);return t.register("authEvent",(t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(fr,{type:fr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[fr];void 0!==i&&t(!!i),h(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||fe()||ye()}}const pr=hr;class vr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class mr extends vr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new mr(e)}_finalizeEnroll(e,t,n){return Ot(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return un(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gr{constructor(){}static assertion(e){return mr._fromCredential(e)}}gr.FACTOR_ID="phone";var yr="@firebase/auth",br="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ir(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},a=new ke(t,r,i);return E(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new _r(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(yr,br,wr(e)),(0,i.KN)(yr,br,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=300,Sr=(0,r.Pz)("authIdTokenMaxAge")||Er;let kr=null;const Or=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sr)return;const i=null===n||void 0===n?void 0:n.token;kr!==i&&(kr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=I(e,{popupRedirectResolver:pr,persistence:[an,xt,Mt]}),o=(0,r.Pz)("authTokenSyncURL");if(o){const e=Or(o);It(n,e,(()=>e(n.currentUser))),wt(n,(t=>e(t)))}const s=(0,r.q4)("auth");return s&&Ae(n,`http://${s}`),n}Ir("Browser")},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return O},L:function(){return a},LL:function(){return C},P0:function(){return E},Pz:function(){return k},Sg:function(){return T},UG:function(){return d},ZR:function(){return R},aH:function(){return S},b$:function(){return h},eu:function(){return m},hl:function(){return v},m9:function(){return H},ne:function(){return F},pd:function(){return j},q4:function(){return I},ru:function(){return f},tV:function(){return c},uI:function(){return l},vZ:function(){return D},w1:function(){return p},xO:function(){return L},xb:function(){return x},z$:function(){return u},zd:function(){return U}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function f(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return"object"===typeof indexedDB}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>g().__FIREBASE_DEFAULTS__,b=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},_=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},w=()=>{try{return y()||b()||_()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},I=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=e=>{const t=I(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},S=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},k=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=A,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?P(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new R(r,s,n);return a}}function P(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(M(n)&&M(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function U(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=$(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},3990:function(e,t,n){"use strict";n.d(t,{C1:function(){return u},Do:function(){return o},is:function(){return s}});n(7658);function r(e,t){return Array.isArray(e)?e[0]:e[t]}function i(e){return null===e||void 0===e||""===e||!(!Array.isArray(e)||0!==e.length)}const o=e=>{if(i(e))return!0;const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(e)?e.every((e=>t.test(String(e)))):t.test(String(e))},s=(e,t)=>{const n=r(t,"other");return e===n};function a(e){return null===e||void 0===e}function c(e){return Array.isArray(e)&&0===e.length}const u=e=>!a(e)&&!c(e)&&!1!==e&&!!String(e).trim().length},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return o},Fl:function(){return qe},IU:function(){return Ae},Jd:function(){return E},PG:function(){return Se},SU:function(){return Fe},Um:function(){return we},Vh:function(){return He},WL:function(){return $e},X$:function(){return T},X3:function(){return Te},XI:function(){return Le},Xl:function(){return Re},dq:function(){return De},iH:function(){return Me},j:function(){return k},lk:function(){return S},qj:function(){return _e},qq:function(){return b},yT:function(){return Oe}});n(7658);var r=n(7139);let i;class o{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},f=new WeakMap;let h=0,p=1;const v=30;let m;const g=Symbol(""),y=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=m,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=m,m=this,w=!0,p=1<<++h,h<=v?l(this):_(this),this.fn()}finally{h<=v&&d(this),p=1<<--h,m=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const I=[];function E(){I.push(w),w=!1}function S(){const e=I.pop();w=void 0===e||e}function k(e,t,n){if(w&&m){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;O(r,i)}}function O(e,t){let n=!1;h<=v?u(e)||(e.n|=p,n=!c(e)):n=!e.has(m),n&&(e.add(m),m.deps.push(e))}function T(e,t,n,i,o,s){const c=f.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);c.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(g)),(0,r._N)(e)&&u.push(c.get(y)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(g)),(0,r._N)(e)&&u.push(c.get(y)));break;case"set":(0,r._N)(e)&&u.push(c.get(g));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(a(e))}}function A(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==m||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const C=(0,r.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),N=U(),x=U(!1,!0),D=U(!0),M=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=Ae(this)[t].apply(this,e);return S(),n}})),e}function U(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ge:me:t?ve:pe).get(n))return n;const s=(0,r.kJ)(n);if(!e&&s&&(0,r.RI)(M,i))return Reflect.get(M,i,o);const a=Reflect.get(n,i,o);return((0,r.yk)(i)?P.has(i):C(i))?a:(e||k(n,"get",i),t?a:De(a)?s&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ie(a):_e(a):a)}}const j=V(),F=V(!0);function V(e=!1){return function(t,n,i,o){let s=t[n];if(ke(s)&&De(s)&&!De(i))return!1;if(!e&&(Oe(i)||ke(i)||(s=Ae(s),i=Ae(i)),!(0,r.kJ)(t)&&De(s)&&!De(i)))return s.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,o);return t===Ae(o)&&(a?(0,r.aU)(i,s)&&T(t,"set",n,i,s):T(t,"add",n,i)),c}}function $(e,t){const n=(0,r.RI)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&T(e,"delete",t,void 0,i),o}function B(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&P.has(t)||k(e,"has",t),n}function H(e){return k(e,"iterate",(0,r.kJ)(e)?"length":g),Reflect.ownKeys(e)}const z={get:N,set:j,deleteProperty:$,has:B,ownKeys:H},W={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},q=(0,r.l7)({},z,{get:x,set:F}),J=e=>e,K=e=>Reflect.getPrototypeOf(e);function G(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),o=Ae(t);n||(t!==o&&k(i,"get",t),k(i,"get",o));const{has:s}=K(i),a=r?J:n?Pe:Ce;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function X(e,t=!1){return e=e["__v_raw"],!t&&k(Ae(e),"iterate",g),Reflect.get(e,"size",e)}function Z(e){e=Ae(e);const t=Ae(this),n=K(t),r=n.has.call(t,e);return r||(t.add(e),T(t,"add",e,e)),this}function Q(e,t){t=Ae(t);const n=Ae(this),{has:i,get:o}=K(n);let s=i.call(n,e);s||(e=Ae(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?(0,r.aU)(t,a)&&T(n,"set",e,t,a):T(n,"add",e,t),this}function ee(e){const t=Ae(this),{has:n,get:r}=K(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&T(t,"delete",e,void 0,o),s}function te(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&T(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ae(o),a=t?J:e?Pe:Ce;return!e&&k(s,"iterate",g),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const o=this["__v_raw"],s=Ae(o),a=(0,r._N)(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),d=n?J:t?Pe:Ce;return!t&&k(s,"iterate",u?y:g),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return G(this,e)},get size(){return X(this)},has:Y,add:Z,set:Q,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return G(this,e,!1,!0)},get size(){return X(this)},has:Y,add:Z,set:Q,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return G(this,e,!0)},get size(){return X(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return G(this,e,!0,!0)},get size(){return X(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[se,ae,ce,ue]=oe();function le(e,t){const n=t?e?ue:ce:e?ae:se;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,o)}const de={get:le(!1,!1)},fe={get:le(!1,!0)},he={get:le(!0,!1)};const pe=new WeakMap,ve=new WeakMap,me=new WeakMap,ge=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function _e(e){return ke(e)?e:Ee(e,!1,z,de,pe)}function we(e){return Ee(e,!1,q,fe,ve)}function Ie(e){return Ee(e,!0,W,he,me)}function Ee(e,t,n,i,o){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Se(e){return ke(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Oe(e){return!(!e||!e["__v_isShallow"])}function Te(e){return Se(e)||ke(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ce=e=>(0,r.Kn)(e)?_e(e):e,Pe=e=>(0,r.Kn)(e)?Ie(e):e;function Ne(e){w&&m&&(e=Ae(e),O(e.dep||(e.dep=a())))}function xe(e,t){e=Ae(e),e.dep&&A(e.dep)}function De(e){return!(!e||!0!==e.__v_isRef)}function Me(e){return Ue(e,!1)}function Le(e){return Ue(e,!0)}function Ue(e,t){return De(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ce(e)}get value(){return Ne(this),this._value}set value(e){const t=this.__v_isShallow||Oe(e)||ke(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ce(e),xe(this,e))}}function Fe(e){return De(e)?e.value:e}const Ve={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $e(e){return Se(e)?e:new Proxy(e,Ve)}class Be{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function He(e,t,n){const r=e[t];return De(r)?r:new Be(e,t,n)}var ze;class We{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ze]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,xe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t,n=!1){let i,o;const s=(0,r.mf)(e);s?(i=e,o=r.dG):(i=e.get,o=e.set);const a=new We(i,o,s||!o,n);return a}ze="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},FN:function(){return yn},Fl:function(){return Dn},HY:function(){return Ut},JJ:function(){return W},Jd:function(){return Oe},Ko:function(){return Be},LL:function(){return je},P$:function(){return re},Q2:function(){return Fe},Q6:function(){return ue},U2:function(){return oe},Uk:function(){return an},Us:function(){return Pt},WI:function(){return He},Wm:function(){return nn},Y3:function(){return b},Y8:function(){return ee},YP:function(){return G},ZK:function(){return o},_:function(){return tn},aZ:function(){return le},bv:function(){return Ee},f3:function(){return q},h:function(){return Mn},iD:function(){return Kt},ic:function(){return ke},j4:function(){return Gt},kq:function(){return cn},m0:function(){return J},nK:function(){return ce},up:function(){return Le},w5:function(){return L},wg:function(){return Ht},wy:function(){return Ne}});n(7658),n(541);var r=n(4870),i=n(7139);function o(e,...t){}function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){c(o,t,n)}return i}function a(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{c(e,t,n)})),o}const o=[];for(let i=0;i<e.length;i++)o.push(a(e[i],t,n,r));return o}function c(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}u(e,n,i,r)}function u(e,t,n,r=!0){console.error(e)}let l=!1,d=!1;const f=[];let h=0;const p=[];let v=null,m=0;const g=Promise.resolve();let y=null;function b(e){const t=y||g;return e?t.then(this?e.bind(this):e):t}function _(e){let t=h+1,n=f.length;while(t<n){const r=t+n>>>1,i=T(f[r]);i<e?t=r+1:n=r}return t}function w(e){f.length&&f.includes(e,l&&e.allowRecurse?h+1:h)||(null==e.id?f.push(e):f.splice(_(e.id),0,e),I())}function I(){l||d||(d=!0,y=g.then(R))}function E(e){const t=f.indexOf(e);t>h&&f.splice(t,1)}function S(e){(0,i.kJ)(e)?p.push(...e):v&&v.includes(e,e.allowRecurse?m+1:m)||p.push(e),I()}function k(e,t=(l?h+1:0)){for(0;t<f.length;t++){const e=f[t];e&&e.pre&&(f.splice(t,1),t--,e())}}function O(e){if(p.length){const e=[...new Set(p)];if(p.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>T(e)-T(t))),m=0;m<v.length;m++)v[m]();v=null,m=0}}const T=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=T(e)-T(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function R(e){d=!1,l=!0,f.sort(A);i.dG;try{for(h=0;h<f.length;h++){const e=f[h];e&&!1!==e.active&&s(e,null,14)}}finally{h=0,f.length=0,O(e),l=!1,y=null,(f.length||p.length)&&R(e)}}new Set;new Map;function C(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let o=n;const s=t.startsWith("update:"),c=s&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:s}=r[e]||i.kT;s&&(o=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(o=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&s&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&a(l,e,6,o);const d=r[u+"Once"];if(d){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,a(d,e,6,o)}}function P(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=P(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.kJ)(s)?s.forEach((e=>a[e]=null)):(0,i.l7)(a,s),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let x=null,D=null;function M(e){const t=x;return x=e,D=e&&e.type.__scopeId||null,t}function L(e,t=x,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&qt(-1);const i=M(t);let o;try{o=e(...n)}finally{M(i),r._d&&qt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[a],slots:u,attrs:l,emit:d,render:f,renderCache:h,data:p,setupState:v,ctx:m,inheritAttrs:g}=e;let y,b;const _=M(e);try{if(4&n.shapeFlag){const e=o||r;y=un(f.call(e,e,h,s,v,p,m)),b=l}else{const e=t;0,y=un(e.length>1?e(s,{attrs:l,slots:u,emit:d}):e(s,null)),b=t.props?l:j(l)}}catch(I){$t.length=0,c(I,e,1),y=nn(Ft)}let w=y;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(i.tR)&&(b=F(b,a)),w=sn(w,b))}return n.dirs&&(w=sn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,M(_),y}const j=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},F=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function V(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||$(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?$(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!N(u,n))return!0}}return!1}function $(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!N(n,o))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):S(e)}function W(e,t){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[e]=t}else 0}function q(e,t,n=!1){const r=gn||x;if(r){const o=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function J(e,t){return Y(e,null,t)}const K={};function G(e,t,n){return Y(e,t,n)}function Y(e,t,{immediate:n,deep:o,flush:c,onTrack:u,onTrigger:l}=i.kT){const d=gn;let f,h,p=!1,v=!1;if((0,r.dq)(e)?(f=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(f=()=>e,o=!0):(0,i.kJ)(e)?(v=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),f=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Q(e):(0,i.mf)(e)?s(e,d,2):void 0))):f=(0,i.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return h&&h(),a(e,d,3,[g])}:i.dG,t&&o){const e=f;f=()=>Q(e())}let m,g=e=>{h=I.onStop=()=>{s(e,d,4)}};if(Sn){if(g=i.dG,t?n&&a(t,d,3,[f(),v?[]:void 0,g]):f(),"sync"!==c)return i.dG;{const e=Un();m=e.__watcherHandles||(e.__watcherHandles=[])}}let y=v?new Array(e.length).fill(K):K;const b=()=>{if(I.active)if(t){const e=I.run();(o||p||(v?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(h&&h(),a(t,d,3,[e,y===K?void 0:v&&y[0]===K?[]:y,g]),y=e)}else I.run()};let _;b.allowRecurse=!!t,"sync"===c?_=b:"post"===c?_=()=>Ct(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),_=()=>w(b));const I=new r.qq(f,_);t?n?b():y=I.run():"post"===c?Ct(I.run.bind(I),d&&d.suspense):I.run();const E=()=>{I.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,I)};return m&&m.push(E),E}function X(e,t,n){const r=this.proxy,o=(0,i.HD)(e)?e.includes(".")?Z(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.mf)(t)?s=t:(s=t.handler,n=t);const a=gn;bn(this);const c=Y(o,s.bind(r),n);return a?bn(a):_n(),c}function Z(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Q(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Q(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Q(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Q(e,t)}));else if((0,i.PO)(e))for(const n in e)Q(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ee((()=>{e.isMounted=!0})),Oe((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=yn(),i=ee();let o;return()=>{const s=t.default&&ue(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==Ft){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return se(a);const l=ae(a);if(!l)return se(a);const d=oe(l,c,i,n);ce(l,d);const f=n.subTree,h=f&&ae(f);let p=!1;const{getTransitionKey:v}=l.type;if(v){const e=v();void 0===o?o=e:e!==o&&(o=e,p=!0)}if(h&&h.type!==Ft&&(!Xt(l,h)||p)){const e=oe(h,c,i,n);if(ce(h,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},se(a);"in-out"===u&&l.type!==Ft&&(e.delayLeave=(e,t,n)=>{const r=ie(i,h);r[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},re=ne;function ie(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oe(e,t,n,r){const{appear:o,mode:s,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:b,onAppearCancelled:_}=t,w=String(e.key),I=ie(n,e),E=(e,t)=>{e&&a(e,r,9,t)},S=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:s,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!o)return;r=g||u}t._leaveCb&&t._leaveCb(!0);const i=I[w];i&&Xt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=d,i=f;if(!n.isMounted){if(!o)return;t=y||l,r=b||d,i=_||f}let s=!1;const a=e._enterCb=t=>{s||(s=!0,E(t?i:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),E(n?m:v,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?S(p,[t,s]):s()},clone(e){return oe(e,t,n,r)}};return k}function se(e){if(fe(e))return e=sn(e),e.children=null,e}function ae(e){return fe(e)?e.children?e.children[0]:void 0:e}function ce(e,t){6&e.shapeFlag&&e.component?ce(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Ut?(128&s.patchFlag&&i++,r=r.concat(ue(s.children,t,a))):(t||s.type!==Ft)&&r.push(null!=a?sn(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function le(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const de=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function he(e,t){return(0,i.kJ)(e)?e.some((e=>he(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function pe(e,t){me(e,"a",t)}function ve(e,t){me(e,"da",t)}function me(e,t,n=gn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(_e(t,r,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ge(r,t,n,e),e=e.parent}}function ge(e,t,n,r){const o=_e(t,e,r,!0);Te((()=>{(0,i.Od)(r[t],o)}),n)}function ye(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function be(e){return 128&e.shapeFlag?e.ssContent:e}function _e(e,t,n=gn,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),bn(n);const o=a(t,n,e,i);return _n(),(0,r.lk)(),o});return i?o.unshift(s):o.push(s),s}}const we=e=>(t,n=gn)=>(!Sn||"sp"===e)&&_e(e,((...e)=>t(...e)),n),Ie=we("bm"),Ee=we("m"),Se=we("bu"),ke=we("u"),Oe=we("bum"),Te=we("um"),Ae=we("sp"),Re=we("rtg"),Ce=we("rtc");function Pe(e,t=gn){_e("ec",e,t)}function Ne(e,t){const n=x;if(null===n)return e;const r=Pn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=i.kT]=t[s];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Q(n),o.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function xe(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let c=0;c<o.length;c++){const u=o[c];s&&(u.oldValue=s[c].value);let l=u.dir[i];l&&((0,r.Jd)(),a(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const De="components",Me="directives";function Le(e,t){return Ve(De,e,!0,t)||e}const Ue=Symbol();function je(e){return(0,i.HD)(e)?Ve(De,e,!1)||e:e||Ue}function Fe(e){return Ve(Me,e)}function Ve(e,t,n=!0,r=!1){const o=x||gn;if(o){const n=o.type;if(e===De){const e=Nn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const s=$e(o[e]||n[e],t)||$e(o.appContext[e],t);return!s&&r?n:s}}function $e(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Be(e,t,n,r){let o;const s=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[r]=o),o}function He(e,t,n={},r,i){if(x.isCE||x.parent&&de(x.parent)&&x.parent.isCE)return"default"!==t&&(n.name=t),nn("slot",n,r&&r());let o=e[t];o&&o._c&&(o._d=!1),Ht();const s=o&&ze(o(n)),a=Gt(Ut,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function ze(e){return e.some((e=>!Yt(e)||e.type!==Ft&&!(e.type===Ut&&!ze(e.children))))?e:null}const We=e=>e?wn(e)?Pn(e)||e.proxy:We(e.parent):null,qe=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>We(e.parent),$root:e=>We(e.root),$emit:e=>e.emit,$options:e=>et(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=b.bind(e.proxy)),$watch:e=>X.bind(e)}),Je=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Ke={get({_:e},t){const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:u,appContext:l}=e;let d;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Je(o,t))return c[t]=1,o[t];if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=2,s[t];if((d=e.propsOptions[0])&&(0,i.RI)(d,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Ge&&(c[t]=0)}}const f=qe[t];let h,p;return f?("$attrs"===t&&(0,r.j)(e,"get",t),f(e)):(h=u.__cssModules)&&(h=h[t])?h:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Je(o,t)?(o[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Je(t,a)||(c=s[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(qe,a)||(0,i.RI)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ge=!0;function Ye(e){const t=et(e),n=e.proxy,o=e.ctx;Ge=!1,t.beforeCreate&&Ze(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:d,created:f,beforeMount:h,mounted:p,beforeUpdate:v,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:I,render:E,renderTracked:S,renderTriggered:k,errorCaptured:O,serverPrefetch:T,expose:A,inheritAttrs:R,components:C,directives:P,filters:N}=t,x=null;if(d&&Xe(d,o,x,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ge=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const s=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Dn({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Qe(u[r],o,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{W(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(f&&Ze(f,e,"c"),D(Ie,h),D(Ee,p),D(Se,v),D(ke,m),D(pe,g),D(ve,y),D(Pe,O),D(Ce,S),D(Re,k),D(Oe,_),D(Te,I),D(Ae,T),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=R&&(e.inheritAttrs=R),C&&(e.components=C),P&&(e.directives=P)}function Xe(e,t,n=i.dG,o=!1){(0,i.kJ)(e)&&(e=ot(e));for(const s in e){const n=e[s];let a;a=(0,i.Kn)(n)?"default"in n?q(n.from||s,n.default,!0):q(n.from||s):q(n),(0,r.dq)(a)&&o?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[s]=a}}function Ze(e,t,n){a((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Qe(e,t,n,r){const o=r.includes(".")?Z(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&G(o,n)}else if((0,i.mf)(e))G(o,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Qe(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&G(o,r,e)}else 0}function et(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let u;return c?u=c:o.length||n||r?(u={},o.length&&o.forEach((e=>tt(u,e,a,!0))),tt(u,t,a)):u=t,(0,i.Kn)(t)&&s.set(t,u),u}function tt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&tt(e,o,n,!0),i&&i.forEach((t=>tt(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=nt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const nt={data:rt,props:at,emits:at,methods:at,computed:at,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:at,directives:at,watch:ct,provide:rt,inject:it};function rt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function it(e,t){return at(ot(e),ot(t))}function ot(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function st(e,t){return e?[...new Set([].concat(e,t))]:t}function at(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function ct(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=st(e[r],t[r]);return n}function ut(e,t,n,o=!1){const s={},a={};(0,i.Nj)(a,Zt,1),e.propsDefaults=Object.create(null),dt(e,t,s,a);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=o?s:(0,r.Um)(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function lt(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(s),[l]=e.propsOptions;let d=!1;if(!(o||c>0)||16&c){let r;dt(e,t,s,a)&&(d=!0);for(const o in u)t&&((0,i.RI)(t,o)||(r=(0,i.rs)(o))!==o&&(0,i.RI)(t,r))||(l?!n||void 0===n[o]&&void 0===n[r]||(s[o]=ft(l,u,o,void 0,e,!0)):delete s[o]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],d=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(N(e.emitsOptions,o))continue;const c=t[o];if(l)if((0,i.RI)(a,o))c!==a[o]&&(a[o]=c,d=!0);else{const t=(0,i._A)(o);s[t]=ft(l,u,t,c,e,!1)}else c!==a[o]&&(a[o]=c,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function dt(e,t,n,o){const[s,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let d;s&&(0,i.RI)(s,d=(0,i._A)(r))?a&&a.includes(d)?(c||(c={}))[d]=l:n[d]=l:N(e.emitsOptions,r)||r in o&&l===o[r]||(o[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),o=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ft(s,t,c,o[c],e,!(0,i.RI)(o,c))}}return u}function ft(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=o;n in i?r=i[n]:(bn(o),r=i[n]=e.call(null,t),_n())}else r=e}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ht(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ht(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(s))for(let d=0;d<s.length;d++){0;const e=(0,i._A)(s[d]);pt(e)&&(a[e]=i.kT)}else if(s){0;for(const e in s){const t=(0,i._A)(e);if(pt(t)){const n=s[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=gt(Boolean,r.type),n=gt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function pt(e){return"$"!==e[0]}function vt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function mt(e,t){return vt(e)===vt(t)}function gt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>mt(t,e))):(0,i.mf)(t)&&mt(t,e)?0:-1}const yt=e=>"_"===e[0]||"$stable"===e,bt=e=>(0,i.kJ)(e)?e.map(un):[un(e)],_t=(e,t,n)=>{if(t._n)return t;const r=L(((...e)=>bt(t(...e))),n);return r._c=!1,r},wt=(e,t,n)=>{const r=e._ctx;for(const o in e){if(yt(o))continue;const n=e[o];if((0,i.mf)(n))t[o]=_t(o,n,r);else if(null!=n){0;const e=bt(n);t[o]=()=>e}}},It=(e,t)=>{const n=bt(t);e.slots.default=()=>n},Et=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):wt(t,e.slots={})}else e.slots={},t&&It(e,t);(0,i.Nj)(e.slots,Zt,1)},St=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:((0,i.l7)(o,t),n||1!==e||delete o._):(s=!t.$stable,wt(t,o)),a=t}else t&&(It(e,t),a={default:1});if(s)for(const i in o)yt(i)||i in a||delete o[i]};function kt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ot=0;function Tt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const o=kt(),s=new Set;let a=!1;const c=o.app={_uid:Ot++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:jn,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&(0,i.mf)(e.install)?(s.add(e),e.install(c,...t)):(0,i.mf)(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(i,s,u){if(!a){0;const l=nn(n,r);return l.appContext=o,s&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Pn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function At(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>At(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(de(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:d}=e;const f=t&&t.r,h=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==d&&((0,i.HD)(f)?(h[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(d))s(d,l,12,[u,h]);else{const t=(0,i.HD)(d),o=(0,r.dq)(d);if(t||o){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,d)?p[d]:h[d]:d.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(h[d]=[c],(0,i.RI)(p,d)&&(p[d]=h[d])):(d.value=[c],e.k&&(h[e.k]=d.value))}else t?(h[d]=u,(0,i.RI)(p,d)&&(p[d]=u)):o&&(d.value=u,e.k&&(h[e.k]=u))};u?(r.id=-1,Ct(r,n)):r()}else 0}}function Rt(){}const Ct=z;function Pt(e){return Nt(e)}function Nt(e,t){Rt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:d,setElementText:f,parentNode:h,nextSibling:p,setScopeId:v=i.dG,insertStaticContent:m}=e,g=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xt(e,t)&&(r=Z(e),J(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case jt:y(e,t,n,r);break;case Ft:b(e,t,n,r);break;case Vt:null==e&&_(t,n,r,s);break;case Ut:D(e,t,n,r,i,o,s,a,c);break;default:1&d?T(e,t,n,r,i,o,s,a,c):6&d?M(e,t,n,r,i,o,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,i,o,s,a,c,ee)}null!=l&&i&&At(l,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},T=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?A(t,n,r,i,o,s,a,c):P(e,t,i,o,s,a,c)},A=(e,t,n,r,s,u,l,d)=>{let h,p;const{type:v,props:m,shapeFlag:g,transition:y,dirs:b}=e;if(h=e.el=c(e.type,u,m&&m.is,m),8&g?f(h,e.children):16&g&&C(e.children,h,null,r,s,u&&"foreignObject"!==v,l,d),b&&xe(e,null,r,"created"),m){for(const t in m)"value"===t||(0,i.Gg)(t)||a(h,t,null,m[t],u,e.children,r,s,X);"value"in m&&a(h,"value",null,m.value),(p=m.onVnodeBeforeMount)&&hn(p,r,e)}R(h,e,e.scopeId,l,r),b&&xe(e,null,r,"beforeMount");const _=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;_&&y.beforeEnter(h),o(h,t,n),((p=m&&m.onVnodeMounted)||_||b)&&Ct((()=>{p&&hn(p,r,e),_&&y.enter(h),b&&xe(e,null,r,"mounted")}),s)},R=(e,t,n,r,i)=>{if(n&&v(e,n),r)for(let o=0;o<r.length;o++)v(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?ln(e[u]):un(e[u]);g(null,c,t,n,r,i,o,s,a)}},P=(e,t,n,r,o,s,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||i.kT,v=t.props||i.kT;let m;n&&xt(n,!1),(m=v.onVnodeBeforeUpdate)&&hn(m,n,t,e),h&&xe(t,e,n,"beforeUpdate"),n&&xt(n,!0);const g=o&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,u,n,r,g,s):c||H(e,t,u,null,n,r,g,s,!1),l>0){if(16&l)x(u,t,p,v,n,r,o);else if(2&l&&p.class!==v.class&&a(u,"class",null,v.class,o),4&l&&a(u,"style",p.style,v.style,o),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const s=i[t],c=p[s],l=v[s];l===c&&"value"!==s||a(u,s,c,l,o,e.children,n,r,X)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=d||x(u,t,p,v,n,r,o);((m=v.onVnodeUpdated)||h)&&Ct((()=>{m&&hn(m,n,t,e),h&&xe(t,e,n,"updated")}),r)},N=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Ut||!Xt(c,u)||70&c.shapeFlag)?h(c.el):n;g(c,u,l,null,r,i,o,s,!0)}},x=(e,t,n,r,o,s,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,o,s,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],d=n[u];l!==d&&"value"!==u&&a(e,u,d,l,c,t.children,o,s,X)}"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,s,a,c,l)=>{const d=t.el=e?e.el:u(""),f=t.anchor=e?e.anchor:u("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:v}=t;v&&(c=c?c.concat(v):v),null==e?(o(d,n,r),o(f,n,r),C(t.children,n,f,i,s,a,c,l)):h>0&&64&h&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&Dt(e,t,!0)):H(e,t,n,f,i,s,a,c,l)},M=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):j(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=mn(e,r,i);if(fe(e)&&(a.ctx.renderer=ee),kn(a),a.asyncDep){if(i&&i.registerDep(a,F),!e.el){const e=a.subTree=nn(Ft);b(null,e,t,n)}}else F(a,e,t,n,i,o,s)},j=(e,t,n)=>{const r=t.component=e.component;if(V(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,o,s,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:o,parent:u,vnode:l}=e,d=n;0,xt(e,!1),n?(n.el=l.el,$(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&hn(t,u,n,l),xt(e,!0);const f=U(e);0;const p=e.subTree;e.subTree=f,g(p,f,h(p.el),Z(p),e,s,a),n.el=f.el,null===d&&B(e,f.el),o&&Ct(o,s),(t=n.props&&n.props.onVnodeUpdated)&&Ct((()=>hn(t,u,n,l)),s)}else{let r;const{el:c,props:u}=t,{bm:l,m:d,parent:f}=e,h=de(t);if(xt(e,!1),l&&(0,i.ir)(l),!h&&(r=u&&u.onVnodeBeforeMount)&&hn(r,f,t),xt(e,!0),c&&ne){const n=()=>{e.subTree=U(e),ne(c,e.subTree,e,s,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,g(null,r,n,o,e,s,a),t.el=r.el}if(d&&Ct(d,s),!h&&(r=u&&u.onVnodeMounted)){const e=t;Ct((()=>hn(r,f,e)),s)}(256&t.shapeFlag||f&&de(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&Ct(e.a,s),e.isMounted=!0,t=n=o=null}},l=e.effect=new r.qq(u,(()=>w(d)),e.scope),d=e.update=()=>l.run();d.id=e.uid,xt(e,!0),d()},$=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,lt(e,t.props,i,n),St(e,t.children,n),(0,r.Jd)(),k(),(0,r.lk)()},H=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void W(u,d,n,r,i,o,s,a,c);if(256&h)return void z(u,d,n,r,i,o,s,a,c)}8&p?(16&l&&X(u,i,o),d!==u&&f(n,d)):16&l?16&p?W(u,d,n,r,i,o,s,a,c):X(u,i,o,!0):(8&l&&f(n,""),16&p&&C(d,n,r,i,o,s,a,c))},z=(e,t,n,r,o,s,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,d=t.length,f=Math.min(l,d);let h;for(h=0;h<f;h++){const r=t[h]=u?ln(t[h]):un(t[h]);g(e[h],r,n,null,o,s,a,c,u)}l>d?X(e,o,s,!0,!1,f):C(t,n,r,o,s,a,c,u,f)},W=(e,t,n,r,o,s,a,c,u)=>{let l=0;const d=t.length;let f=e.length-1,h=d-1;while(l<=f&&l<=h){const r=e[l],i=t[l]=u?ln(t[l]):un(t[l]);if(!Xt(r,i))break;g(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=h){const r=e[f],i=t[h]=u?ln(t[h]):un(t[h]);if(!Xt(r,i))break;g(r,i,n,null,o,s,a,c,u),f--,h--}if(l>f){if(l<=h){const e=h+1,i=e<d?t[e].el:r;while(l<=h)g(null,t[l]=u?ln(t[l]):un(t[l]),n,i,o,s,a,c,u),l++}}else if(l>h)while(l<=f)J(e[l],o,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=h;l++){const e=t[l]=u?ln(t[l]):un(t[l]);null!=e.key&&m.set(e.key,l)}let y,b=0;const _=h-v+1;let w=!1,I=0;const E=new Array(_);for(l=0;l<_;l++)E[l]=0;for(l=p;l<=f;l++){const r=e[l];if(b>=_){J(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=v;y<=h;y++)if(0===E[y-v]&&Xt(r,t[y])){i=y;break}void 0===i?J(r,o,s,!0):(E[i-v]=l+1,i>=I?I=i:w=!0,g(r,t[i],n,null,o,s,a,c,u),b++)}const S=w?Mt(E):i.Z6;for(y=S.length-1,l=_-1;l>=0;l--){const e=v+l,i=t[e],f=e+1<d?t[e+1].el:r;0===E[l]?g(null,i,n,f,o,s,a,c,u):w&&(y<0||l!==S[y]?q(i,n,f,2):y--)}}},q=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Ut){o(s,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Vt)return void I(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),o(s,t,n),Ct((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,u):u()}else o(s,t,n)},J=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:f}=e;if(null!=a&&At(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&f,p=!de(e);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&hn(v,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&xe(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(o!==Ut||d>0&&64&d)?X(u,t,n,!1,!0):(o===Ut&&384&d||!i&&16&l)&&X(c,t,n),r&&K(e)}(p&&(v=s&&s.onVnodeUnmounted)||h)&&Ct((()=>{v&&hn(v,t,e),h&&xe(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ut)return void G(n,r);if(t===Vt)return void S(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},G=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:o,update:s,subTree:a,um:c}=e;r&&(0,i.ir)(r),o.stop(),s&&(s.active=!1,J(a,e,t,n)),c&&Ct(c,t),Ct((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)J(e[s],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),k(),O(),t._vnode=e},ee={p:g,um:J,m:q,r:K,mt:L,mc:C,pc:H,pbc:N,n:Z,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Q,hydrate:te,createApp:Tt(Q,te)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Dt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=ln(o[i]),t.el=e.el),n||Dt(e,t)),t.type===jt&&(t.el=e.el)}}function Mt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Lt=e=>e.__isTeleport;const Ut=Symbol(void 0),jt=Symbol(void 0),Ft=Symbol(void 0),Vt=Symbol(void 0),$t=[];let Bt=null;function Ht(e=!1){$t.push(Bt=e?null:[])}function zt(){$t.pop(),Bt=$t[$t.length-1]||null}let Wt=1;function qt(e){Wt+=e}function Jt(e){return e.dynamicChildren=Wt>0?Bt||i.Z6:null,zt(),Wt>0&&Bt&&Bt.push(e),e}function Kt(e,t,n,r,i,o){return Jt(tn(e,t,n,r,i,o,!0))}function Gt(e,t,n,r,i){return Jt(nn(e,t,n,r,i,!0))}function Yt(e){return!!e&&!0===e.__v_isVNode}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Zt="__vInternal",Qt=({key:e})=>null!=e?e:null,en=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:x,r:e,k:t,f:!!n}:e:null;function tn(e,t=null,n=null,r=0,o=null,s=(e===Ut?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qt(t),ref:t&&en(t),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:x};return c?(dn(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Wt>0&&!a&&Bt&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Bt.push(u),u}const nn=rn;function rn(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==Ue||(e=Ft),Yt(e)){const r=sn(e,t,!0);return n&&dn(r,n),Wt>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if(xn(e)&&(e=e.__vccOpts),t){t=on(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:H(e)?128:Lt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return tn(e,t,n,o,s,c,a,!0)}function on(e){return e?(0,r.X3)(e)||Zt in e?(0,i.l7)({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:a}=e,c=t?fn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Qt(c),ref:t&&t.ref?n&&o?(0,i.kJ)(o)?o.concat(en(t)):[o,en(t)]:en(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ut?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return u}function an(e=" ",t=0){return nn(jt,null,e,t)}function cn(e="",t=!1){return t?(Ht(),Gt(Ft,null,e)):nn(Ft,null,e)}function un(e){return null==e||"boolean"===typeof e?nn(Ft):(0,i.kJ)(e)?nn(Ut,null,e.slice()):"object"===typeof e?ln(e):nn(jt,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function dn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),dn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Zt in t?3===r&&x&&(1===x.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=x}}else(0,i.mf)(t)?(t={default:t,_ctx:x},n=32):(t=String(t),64&r?(n=16,t=[an(t)]):n=8);e.children=t,e.shapeFlag|=n}function fn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.kJ)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function hn(e,t,n,r=null){a(e,t,7,[n,r])}const pn=kt();let vn=0;function mn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||pn,a={uid:vn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ht(o,s),emitsOptions:P(o,s),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:o.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=C.bind(null,a),e.ce&&e.ce(a),a}let gn=null;const yn=()=>gn||x,bn=e=>{gn=e,e.scope.on()},_n=()=>{gn&&gn.scope.off(),gn=null};function wn(e){return 4&e.vnode.shapeFlag}let In,En,Sn=!1;function kn(e,t=!1){Sn=t;const{props:n,children:r}=e.vnode,i=wn(e);ut(e,n,i,t),Et(e,r);const o=i?On(e,t):void 0;return Sn=!1,o}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ke));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Cn(e):null;bn(e),(0,r.Jd)();const a=s(o,e,0,[e.props,n]);if((0,r.lk)(),_n(),(0,i.tI)(a)){if(a.then(_n,_n),t)return a.then((n=>{Tn(e,n,t)})).catch((t=>{c(t,e,0)}));e.asyncDep=a}else Tn(e,a,t)}else An(e,t)}function Tn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),An(e,n)}function An(e,t,n){const o=e.type;if(!e.render){if(!t&&In&&!o.render){const t=o.template||et(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:s},r),a);o.render=In(t,c)}}e.render=o.render||i.dG,En&&En(e)}bn(e),(0,r.Jd)(),Ye(e),(0,r.lk)(),_n()}function Rn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Cn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Rn(e))},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in qe?qe[n](e):void 0},has(e,t){return t in e||t in qe}}))}function Nn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function xn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,Sn);function Mn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Yt(t)?nn(e,null,[t]):nn(e,t):nn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Yt(n)&&(n=[n]),nn(e,t,n))}const Ln=Symbol(""),Un=()=>{{const e=q(Ln);return e}};const jn="3.2.45"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return se},bM:function(){return ee},iM:function(){return oe},nr:function(){return Q},ri:function(){return de},uT:function(){return D}});n(7658);var r=n(7139),i=n(3396);n(4870);const o="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null,a=s&&s.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?s.createElementNS(o,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const i=e.style,o=(0,r.HD)(n);if(n&&!o){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=v(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const h=["Webkit","Moz","ms"],p={};function v(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<h.length;r++){const n=h[r]+i;if(n in e)return p[t]=n}return t}const m="http://www.w3.org/1999/xlink";function g(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(m,t.slice(6,t.length)):e.setAttributeNS(m,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function y(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function w(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=E(t);if(r){const s=o[t]=T(r,i);b(e,n,s,a)}else s&&(_(e,n,s,a),o[t]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function E(e){let t;if(I.test(e)){let n;t={};while(n=e.match(I))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const k=Promise.resolve(),O=()=>S||(k.then((()=>S=0)),S=Date.now());function T(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=O(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,C=(e,t,n,i,o=!1,s,a,c,d)=>{"class"===t?u(e,i,o):"style"===t?l(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||w(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,i,o))?y(e,t,i,s,a,c,d):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),g(e,t,i,o))};function P(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",x="animation",D=(e,{slots:t})=>(0,i.h)(i.P$,j(e),t);D.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},L=(D.props=(0,r.l7)({},i.P$.props,M),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in M||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=F(o),m=v&&v[0],g=v&&v[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:S=b,onAppearCancelled:k=_}=t,O=(e,t,n)=>{B(e,t?d:c),B(e,t?l:a),n&&n()},T=(e,t)=>{e._isLeaving=!1,B(e,f),B(e,p),B(e,h),t&&t()},A=e=>(t,n)=>{const r=e?S:b,o=()=>O(t,e,n);L(r,[t,o]),H((()=>{B(t,e?u:s),$(t,e?d:c),U(r)||W(t,i,m,o)}))};return(0,r.l7)(t,{onBeforeEnter(e){L(y,[e]),$(e,s),$(e,a)},onBeforeAppear(e){L(E,[e]),$(e,u),$(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>T(e,t);$(e,f),G(),$(e,h),H((()=>{e._isLeaving&&(B(e,f),$(e,p),U(w)||W(e,i,g,n))})),L(w,[e,n])},onEnterCancelled(e){O(e,!1),L(_,[e])},onAppearCancelled(e){O(e,!0),L(k,[e])},onLeaveCancelled(e){T(e),L(I,[e])}})}function F(e){if(null==e)return null;if((0,r.Kn)(e))return[V(e.enter),V(e.leave)];{const t=V(e);return[t,t]}}function V(e){const t=(0,r.He)(e);return t}function $(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function H(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function W(e,t,n,r){const i=e._endId=++z,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=q(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,f),o()},f=t=>{t.target===e&&++l>=c&&d()};setTimeout((()=>{l<c&&d()}),a+1),e.addEventListener(u,f)}function q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${N}Delay`),o=r(`${N}Duration`),s=J(i,o),a=r(`${x}Delay`),c=r(`${x}Duration`),u=J(a,c);let l=null,d=0,f=0;t===N?s>0&&(l=N,d=s,f=o.length):t===x?u>0&&(l=x,d=u,f=c.length):(d=Math.max(s,u),l=d>0?s>u?N:x:null,f=l?l===N?o.length:c.length:0);const h=l===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:l,timeout:d,propCount:f,hasTransform:h}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>K(t)+K(e[n]))))}function K(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function G(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Y=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function X(e){e.target.composing=!0}function Z(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Q={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=Y(o);const s=i||o.props&&"number"===o.props.type;b(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),s&&(i=(0,r.He)(i)),e._assign(i)})),n&&b(e,"change",(()=>{e.value=e.value.trim()})),t||(b(e,"compositionstart",X),b(e,"compositionend",Z),b(e,"change",Z))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=Y(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ee={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=(0,r.DM)(t);b(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(ne(e)):ne(e)));e._assign(e.multiple?o?new Set(t):t:t[0])})),e._assign=Y(i)},mounted(e,{value:t}){te(e,t)},beforeUpdate(e,t,n){e._assign=Y(n)},updated(e,{value:t}){te(e,t)}};function te(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=ne(o);if(n)(0,r.kJ)(t)?o.selected=(0,r.hq)(t,s)>-1:o.selected=t.has(s);else if((0,r.WV)(ne(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ne(e){return"_value"in e?e._value:e.value}const re=["ctrl","shift","alt","meta"],ie={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>re.some((n=>e[`${n}Key`]&&!t.includes(n)))},oe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ie[t[e]];if(r&&r(n,t))return}return e(n,...r)},se={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ae(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),ae(e,!0),r.enter(e)):r.leave(e,(()=>{ae(e,!1)})):ae(e,t))},beforeUnmount(e,{value:t}){ae(e,t)}};function ae(e,t){e.style.display=t?e._vod:"none"}const ce=(0,r.l7)({patchProp:C},c);let ue;function le(){return ue||(ue=(0,i.Us)(ce))}const de=(...e)=>{const t=le().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=fe(e);if(!i)return;const o=t._component;(0,r.mf)(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function fe(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},DM:function(){return x},E9:function(){return ie},F7:function(){return k},Gg:function(){return W},HD:function(){return L},He:function(){return ne},Kn:function(){return j},NO:function(){return E},Nj:function(){return te},Od:function(){return A},PO:function(){return H},Pq:function(){return h},RI:function(){return C},S0:function(){return z},W7:function(){return B},WV:function(){return m},Z6:function(){return w},_A:function(){return K},_N:function(){return N},aU:function(){return Q},dG:function(){return I},e1:function(){return o},fY:function(){return r},hR:function(){return Z},hq:function(){return g},ir:function(){return ee},j5:function(){return s},kC:function(){return X},kJ:function(){return P},kT:function(){return _},l7:function(){return T},mf:function(){return M},rs:function(){return Y},tI:function(){return F},tR:function(){return O},yA:function(){return p},yk:function(){return U},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);function s(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?l(r):s(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||j(e)?e:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(e){const t={};return e.replace(u,"").split(a).forEach((e=>{if(e){const n=e.split(c);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(L(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(j(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",h=r(f);function p(e){return!!e||""===e}function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=U(e),r=U(t),n||r)return e===t;if(n=P(e),r=P(t),n||r)return!(!n||!r)&&v(e,t);if(n=j(e),r=j(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>L(e)?e:null==e?"":P(e)||j(e)&&(e.toString===V||!M(e.toString))?JSON.stringify(e,b,2):String(e),b=(e,t)=>t&&t.__v_isRef?b(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:x(t)?{[`Set(${t.size})`]:[...t.values()]}:!j(t)||P(t)||H(t)?t:String(t),_={},w=[],I=()=>{},E=()=>!1,S=/^on[^a-z]/,k=e=>S.test(e),O=e=>e.startsWith("onUpdate:"),T=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,C=(e,t)=>R.call(e,t),P=Array.isArray,N=e=>"[object Map]"===$(e),x=e=>"[object Set]"===$(e),D=e=>"[object Date]"===$(e),M=e=>"function"===typeof e,L=e=>"string"===typeof e,U=e=>"symbol"===typeof e,j=e=>null!==e&&"object"===typeof e,F=e=>j(e)&&M(e.then)&&M(e.catch),V=Object.prototype.toString,$=e=>V.call(e),B=e=>$(e).slice(8,-1),H=e=>"[object Object]"===$(e),z=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,K=q((e=>e.replace(J,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,Y=q((e=>e.replace(G,"-$1").toLowerCase())),X=q((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=q((e=>e?`on${X(e)}`:"")),Q=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let re;const ie=()=>re||(re="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3051:function(e){!function(t,n){e.exports=n()}(0,(function(){var e="__v-click-outside",t="undefined"!=typeof window,n="undefined"!=typeof navigator,r=t&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],i=function(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)},o=function(t,n){var o=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||r,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe),capture:Boolean(e.capture)}}(n.value),s=o.handler,a=o.middleware,c=o.detectIframe,u=o.capture;if(o.isActive){if(t[e]=o.events.map((function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(e){var t=e.el,n=e.event,r=e.handler,o=e.middleware,s=n.path||n.composedPath&&n.composedPath();(s?s.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:r,middleware:o})}({el:t,event:e,handler:s,middleware:a})},capture:u}})),c){var l={event:"blur",srcTarget:window,handler:function(e){return function(e){var t=e.el,n=e.event,r=e.handler,o=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:r,middleware:o})}),0)}({el:t,event:e,handler:s,middleware:a})},capture:u};t[e]=[].concat(t[e],[l])}t[e].forEach((function(n){var r=n.event,i=n.srcTarget,o=n.handler;return setTimeout((function(){t[e]&&i.addEventListener(r,o,u)}),0)}))}},s=function(t){(t[e]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,e.capture)})),delete t[e]},a=t?{beforeMount:o,updated:function(e,t){var n=t.value,r=t.oldValue;JSON.stringify(n)!==JSON.stringify(r)&&(s(e),o(e,{value:n}))},unmounted:s}:{};return{install:function(e){e.directive("click-outside",a)},directive:a}}))},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",o="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},5708:function(e,t,n){"use strict";n.d(t,{Bc:function(){return ze},aH:function(){return d},gN:function(){return De},l0:function(){return $e}});n(2087),n(7658),n(2801),n(541);var r=n(3396),i=n(4870);
/**
  * vee-validate v4.7.3
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function o(e){return"function"===typeof e}function s(e){return null===e||void 0===e}const a=e=>null!==e&&!!e&&"object"===typeof e&&!Array.isArray(e);function c(e){return Number(e)>=0}function u(e){const t=parseFloat(e);return isNaN(t)?e:t}const l={};function d(e,t){h(e,t),l[e]=t}function f(e){return l[e]}function h(e,t){if(!o(t))throw new Error(`Extension Error: The validator '${e}' must be a function.`)}const p=Symbol("vee-validate-form"),v=Symbol("vee-validate-field-instance"),m=Symbol("Default empty value"),g="undefined"!==typeof window;function y(e){return o(e)&&!!e.__locatorRef}function b(e){return!!e&&o(e.validate)}function _(e){return"checkbox"===e||"radio"===e}function w(e){return a(e)||Array.isArray(e)}function I(e){return Array.isArray(e)?0===e.length:a(e)&&0===Object.keys(e).length}function E(e){return/^\[.+\]$/i.test(e)}function S(e){return k(e)&&e.multiple}function k(e){return"SELECT"===e.tagName}function O(e,t){const n=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return"select"===e&&"multiple"in t&&n}function T(e,t){return!O(e,t)&&"file"!==t.type&&!_(t.type)}function A(e){return R(e)&&e.target&&"submit"in e.target}function R(e){return!!e&&(!!("undefined"!==typeof Event&&o(Event)&&e instanceof Event)||!(!e||!e.srcElement))}function C(e,t){return t in e&&e[t]!==m}function P(e,t){if(e===t)return!0;if(e&&t&&"object"===typeof e&&"object"===typeof t){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;0!==r--;)if(!P(e[r],t[r]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;for(r of e.entries())if(!P(r[1],t.get(r[0])))return!1;return!0}if(N(e)&&N(t))return e.size===t.size&&(e.name===t.name&&(e.lastModified===t.lastModified&&e.type===t.type));if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;0!==r--;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;0!==r--;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!==r--;){var o=i[r];if(!P(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function N(e){return!!g&&e instanceof File}function x(e,t,n){"object"===typeof n.value&&(n.value=D(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function D(e){if("object"!==typeof e)return e;var t,n,r,i=0,o=Object.prototype.toString.call(e);if("[object Object]"===o?r=Object.create(e.__proto__||null):"[object Array]"===o?r=Array(e.length):"[object Set]"===o?(r=new Set,e.forEach((function(e){r.add(D(e))}))):"[object Map]"===o?(r=new Map,e.forEach((function(e,t){r.set(D(t),D(e))}))):"[object Date]"===o?r=new Date(+e):"[object RegExp]"===o?r=new RegExp(e.source,e.flags):"[object DataView]"===o?r=new e.constructor(D(e.buffer)):"[object ArrayBuffer]"===o?r=e.slice(0):"Array]"===o.slice(-6)&&(r=new e.constructor(e)),r){for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)x(r,n[i],Object.getOwnPropertyDescriptor(e,n[i]));for(i=0,n=Object.getOwnPropertyNames(e);i<n.length;i++)Object.hasOwnProperty.call(r,t=n[i])&&r[t]===e[t]||x(r,t,Object.getOwnPropertyDescriptor(e,t))}return r||e}function M(e){return E(e)?e.replace(/\[|\]/gi,""):e}function L(e,t,n){if(!e)return n;if(E(t))return e[M(t)];const r=(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce(((e,t)=>w(e)&&t in e?e[t]:n),e);return r}function U(e,t,n){if(E(t))return void(e[M(t)]=n);const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let o=0;o<r.length;o++){if(o===r.length-1)return void(i[r[o]]=n);r[o]in i&&!s(i[r[o]])||(i[r[o]]=c(r[o+1])?[]:{}),i=i[r[o]]}}function j(e,t){Array.isArray(e)&&c(t)?e.splice(Number(t),1):a(e)&&delete e[t]}function F(e,t){if(E(t))return void delete e[M(t)];const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let o=0;o<n.length;o++){if(o===n.length-1){j(r,n[o]);break}if(!(n[o]in r)||s(r[n[o]]))break;r=r[n[o]]}const i=n.map(((t,r)=>L(e,n.slice(0,r).join("."))));for(let o=i.length-1;o>=0;o--)I(i[o])&&(0!==o?j(i[o-1],n[o-1]):j(e,n[0]))}function V(e){return Object.keys(e)}function $(e,t){const n=(0,r.FN)();return(null===n||void 0===n?void 0:n.provides[e])||(0,r.f3)(e,t)}function B(e){(0,r.ZK)(`[vee-validate]: ${e}`)}function H(e,t,n){if(Array.isArray(e)){const n=[...e],r=n.findIndex((e=>P(e,t)));return r>=0?n.splice(r,1):n.push(t),n}return P(e,t)?n:t}function z(e,t){let n,r;return function(...i){const o=this;return n||(n=!0,setTimeout((()=>n=!1),t),r=e.apply(o,i)),r}}function W(e,t=0){let n=null,r=[];return function(...i){return n&&window.clearTimeout(n),n=window.setTimeout((()=>{const t=e(...i);r.forEach((e=>e(t))),r=[]}),t),new Promise((e=>r.push(e)))}}function q(e,t){return a(t)&&t.number?u(e):e}function J(e,t){let n;return async function(...r){const i=e(...r);n=i;const o=await i;return i!==n||(n=void 0,t(o,r)),o}}function K({get:e,set:t}){const n=(0,i.iH)(D(e()));return(0,r.YP)(e,(e=>{P(e,n.value)||(n.value=D(e))}),{deep:!0}),(0,r.YP)(n,(n=>{P(n,e())||t(D(n))}),{deep:!0}),n}const G=(e,t,n)=>t.slots.default?"string"!==typeof e&&e?{default:()=>{var e,r;return null===(r=(e=t.slots).default)||void 0===r?void 0:r.call(e,n())}}:t.slots.default(n()):t.slots.default;function Y(e){if(X(e))return e._value}function X(e){return"_value"in e}function Z(e){if(!R(e))return e;const t=e.target;if(_(t.type)&&X(t))return Y(t);if("file"===t.type&&t.files){const e=Array.from(t.files);return t.multiple?e:e[0]}if(S(t))return Array.from(t.options).filter((e=>e.selected&&!e.disabled)).map(Y);if(k(t)){const e=Array.from(t.options).find((e=>e.selected));return e?Y(e):t.value}return t.value}function Q(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?a(e)&&e._$$isNormalized?e:a(e)?Object.keys(e).reduce(((t,n)=>{const r=ee(e[n]);return!1!==e[n]&&(t[n]=te(r)),t}),t):"string"!==typeof e?t:e.split("|").reduce(((e,t)=>{const n=ne(t);return n.name?(e[n.name]=te(n.params),e):e}),t):t}function ee(e){return!0===e?[]:Array.isArray(e)||a(e)?e:[e]}function te(e){const t=e=>"string"===typeof e&&"@"===e[0]?re(e.slice(1)):e;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce(((n,r)=>(n[r]=t(e[r]),n)),{})}const ne=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function re(e){const t=t=>{const n=L(t,e)||t[e];return n};return t.__locatorRef=e,t}function ie(e){return Array.isArray(e)?e.filter(y):V(e).filter((t=>y(e[t]))).map((t=>e[t]))}const oe={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let se=Object.assign({},oe);const ae=()=>se;async function ce(e,t,n={}){const r=null===n||void 0===n?void 0:n.bails,i={name:(null===n||void 0===n?void 0:n.name)||"{field}",rules:t,bails:null===r||void 0===r||r,formData:(null===n||void 0===n?void 0:n.values)||{}},o=await ue(i,e),s=o.errors;return{errors:s,valid:!s.length}}async function ue(e,t){if(b(e.rules))return le(t,e.rules,{bails:e.bails});if(o(e.rules)||Array.isArray(e.rules)){const n={field:e.name,form:e.formData,value:t},r=Array.isArray(e.rules)?e.rules:[e.rules],i=r.length,o=[];for(let s=0;s<i;s++){const i=r[s],a=await i(t,n),c="string"!==typeof a&&a;if(c)continue;const u="string"===typeof a?a:fe(n);if(o.push(u),e.bails)return{errors:o}}return{errors:o}}const n=Object.assign(Object.assign({},e),{rules:Q(e.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let o=0;o<s;o++){const s=i[o],a=await de(n,t,{name:s,params:n.rules[s]});if(a.error&&(r.push(a.error),e.bails))return{errors:r}}return{errors:r}}async function le(e,t,n){var r;const i=await t.validate(e,{abortEarly:null===(r=n.bails)||void 0===r||r}).then((()=>[])).catch((e=>{if("ValidationError"===e.name)return e.errors;throw e}));return{errors:i}}async function de(e,t,n){const r=f(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=he(n.params,e.formData),o={field:e.name,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:i})},s=await r(t,i,o);return"string"===typeof s?{error:s}:{error:s?void 0:fe(o)}}function fe(e){const t=ae().generateMessage;return t?t(e):"Field is invalid"}function he(e,t){const n=e=>y(e)?e(t):e;return Array.isArray(e)?e.map(n):Object.keys(e).reduce(((t,r)=>(t[r]=n(e[r]),t)),{})}async function pe(e,t){const n=await e.validate(t,{abortEarly:!1}).then((()=>[])).catch((e=>{if("ValidationError"!==e.name)throw e;return e.inner||[]})),r={},i={};for(const o of n){const e=o.errors;r[o.path]={valid:!e.length,errors:e},e.length&&(i[o.path]=e[0])}return{valid:!n.length,results:r,errors:i}}async function ve(e,t,n){const r=V(e),i=r.map((async r=>{var i,o,s;const a=await ce(L(t,r),e[r],{name:(null===(i=null===n||void 0===n?void 0:n.names)||void 0===i?void 0:i[r])||r,values:t,bails:null===(s=null===(o=null===n||void 0===n?void 0:n.bailsMap)||void 0===o?void 0:o[r])||void 0===s||s});return Object.assign(Object.assign({},a),{path:r})}));let o=!0;const s=await Promise.all(i),a={},c={};for(const u of s)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(o=!1,c[u.path]=u.errors[0]);return{valid:o,results:a,errors:c}}let me=0;function ge(e,t){const{value:n,initialValue:r,setInitialValue:i}=ye(e,t.modelValue,t.form),{errorMessage:o,errors:s,setErrors:a}=_e(e,t.form),c=be(n,r,s),u=me>=Number.MAX_SAFE_INTEGER?0:++me;function l(e){var t;"value"in e&&(n.value=e.value),"errors"in e&&a(e.errors),"touched"in e&&(c.touched=null!==(t=e.touched)&&void 0!==t?t:c.touched),"initialValue"in e&&i(e.initialValue)}return{id:u,path:e,value:n,initialValue:r,meta:c,errors:s,errorMessage:o,setState:l}}function ye(e,t,n){const o=(0,i.iH)((0,i.SU)(t));function s(){return n?L(n.meta.value.initialValues,(0,i.SU)(e),(0,i.SU)(o)):(0,i.SU)(o)}function a(t){n?n.stageInitialValue((0,i.SU)(e),t,!0):o.value=t}const c=(0,r.Fl)(s);if(!n){const e=(0,i.iH)(s());return{value:e,initialValue:c,setInitialValue:a}}const u=t?(0,i.SU)(t):L(n.values,(0,i.SU)(e),(0,i.SU)(c));n.stageInitialValue((0,i.SU)(e),u,!0);const l=(0,r.Fl)({get(){return L(n.values,(0,i.SU)(e))},set(t){n.setFieldValue((0,i.SU)(e),t)}});return{value:l,initialValue:c,setInitialValue:a}}function be(e,t,n){const o=(0,i.qj)({touched:!1,pending:!1,valid:!0,validated:!!(0,i.SU)(n).length,initialValue:(0,r.Fl)((()=>(0,i.SU)(t))),dirty:(0,r.Fl)((()=>!P((0,i.SU)(e),(0,i.SU)(t))))});return(0,r.YP)(n,(e=>{o.valid=!e.length}),{immediate:!0,flush:"sync"}),o}function _e(e,t){function n(e){return e?Array.isArray(e)?e:[e]:[]}if(!t){const e=(0,i.iH)([]);return{errors:e,errorMessage:(0,r.Fl)((()=>e.value[0])),setErrors:t=>{e.value=n(t)}}}const o=(0,r.Fl)((()=>t.errorBag.value[(0,i.SU)(e)]||[]));return{errors:o,errorMessage:(0,r.Fl)((()=>o.value[0])),setErrors:r=>{t.setFieldErrorBag((0,i.SU)(e),n(r))}}}let we;z((()=>{setTimeout((async()=>{await(0,r.Y3)(),null===we||void 0===we||we.sendInspectorState(Ie),null===we||void 0===we||we.sendInspectorTree(Ie)}),100)}),100);const Ie="vee-validate-inspector";function Ee(e,t,n){return _(null===n||void 0===n?void 0:n.type)?Te(e,t,n):Se(e,t,n)}function Se(e,t,n){const{initialValue:s,validateOnMount:a,bails:c,type:u,checkedValue:l,label:d,validateOnValueUpdate:f,uncheckedValue:h,controlled:m,keepValueOnUnmount:g,modelPropName:y,syncVModel:_,form:w}=ke((0,i.SU)(e),n),I=m?$(p):void 0,E=w||I;let S=!1;const{id:k,value:O,initialValue:T,meta:A,setState:R,errors:C,errorMessage:N}=ge(e,{modelValue:s,form:E});_&&Ae({value:O,prop:y,handleChange:B});const x=()=>{A.touched=!0},M=(0,r.Fl)((()=>{let n=(0,i.SU)(t);const r=(0,i.SU)(null===E||void 0===E?void 0:E.schema);return r&&!b(r)&&(n=Oe(r,(0,i.SU)(e))||n),b(n)||o(n)||Array.isArray(n)?n:Q(n)}));async function U(t){var n,r;return(null===E||void 0===E?void 0:E.validateSchema)?null!==(n=(await E.validateSchema(t)).results[(0,i.SU)(e)])&&void 0!==n?n:{valid:!0,errors:[]}:ce(O.value,M.value,{name:(0,i.SU)(d)||(0,i.SU)(e),values:null!==(r=null===E||void 0===E?void 0:E.values)&&void 0!==r?r:{},bails:c})}const j=J((async()=>(A.pending=!0,A.validated=!0,U("validated-only"))),(e=>(S&&(e.valid=!0,e.errors=[]),R({errors:e.errors}),A.pending=!1,e))),F=J((async()=>U("silent")),(e=>(S&&(e.valid=!0),A.valid=e.valid,e)));function V(e){return"silent"===(null===e||void 0===e?void 0:e.mode)?F():j()}function B(e,t=!0){const n=Z(e);O.value=n,!f&&t&&j()}function H(e){A.touched=e}let z;(0,r.bv)((()=>{if(a)return j();E&&E.validateSchema||F()}));let W=D(O.value);function q(){z=(0,r.YP)(O,((e,t)=>{if(P(e,t)&&P(e,W))return;const n=f?j:F;n(),W=D(e)}),{deep:!0})}function K(e){var t;null===z||void 0===z||z();const n=e&&"value"in e?e.value:T.value;R({value:D(n),initialValue:D(n),touched:null!==(t=null===e||void 0===e?void 0:e.touched)&&void 0!==t&&t,errors:(null===e||void 0===e?void 0:e.errors)||[]}),A.pending=!1,A.validated=!1,F(),(0,r.Y3)((()=>{q()}))}function G(e){O.value=e}function Y(e){R({errors:Array.isArray(e)?e:[e]})}q();const X={id:k,name:e,label:d,value:O,meta:A,errors:C,errorMessage:N,type:u,checkedValue:l,uncheckedValue:h,bails:c,keepValueOnUnmount:g,resetField:K,handleReset:()=>K(),validate:V,handleChange:B,handleBlur:x,setState:R,setTouched:H,setErrors:Y,setValue:G};if((0,r.JJ)(v,X),(0,i.dq)(t)&&"function"!==typeof(0,i.SU)(t)&&(0,r.YP)(t,((e,t)=>{P(e,t)||(A.validated?j():F())}),{deep:!0}),!E)return X;E.register(X),(0,r.Jd)((()=>{S=!0,E.unregister(X)}));const ee=(0,r.Fl)((()=>{const e=M.value;return!e||o(e)||b(e)||Array.isArray(e)?{}:Object.keys(e).reduce(((t,n)=>{const r=ie(e[n]).map((e=>e.__locatorRef)).reduce(((e,t)=>{const n=L(E.values,t)||E.values[t];return void 0!==n&&(e[t]=n),e}),{});return Object.assign(t,r),t}),{})}));return(0,r.YP)(ee,((e,t)=>{if(!Object.keys(e).length)return;const n=!P(e,t);n&&(A.validated?j():F())})),X}function ke(e,t){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:e,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0,controlled:!0});if(!t)return n();const r="valueProp"in t?t.valueProp:t.checkedValue,i="standalone"in t?!t.standalone:t.controlled;return Object.assign(Object.assign(Object.assign({},n()),t||{}),{controlled:null===i||void 0===i||i,checkedValue:r})}function Oe(e,t){if(e)return e[t]}function Te(e,t,n){const o=(null===n||void 0===n?void 0:n.standalone)?void 0:$(p),s=null===n||void 0===n?void 0:n.checkedValue,a=null===n||void 0===n?void 0:n.uncheckedValue;function c(e){const t=e.handleChange,n=(0,r.Fl)((()=>{const t=(0,i.SU)(e.value),n=(0,i.SU)(s);return Array.isArray(t)?t.findIndex((e=>P(e,n)))>=0:P(n,t)}));function c(r,c=!0){var u;if(n.value===(null===(u=null===r||void 0===r?void 0:r.target)||void 0===u?void 0:u.checked))return void(c&&e.validate());let l=Z(r);o||(l=H((0,i.SU)(e.value),(0,i.SU)(s),(0,i.SU)(a))),t(l,c)}return Object.assign(Object.assign({},e),{checked:n,checkedValue:s,uncheckedValue:a,handleChange:c})}return c(Se(e,t,n))}function Ae({prop:e,value:t,handleChange:n}){const i=(0,r.FN)();if(!i)return void 0;const o=e||"modelValue",s=`update:${o}`;o in i.props&&((0,r.YP)(t,(e=>{P(e,Re(i,o))||i.emit(s,e)})),(0,r.YP)((()=>Re(i,o)),(e=>{if(e===m&&void 0===t.value)return;const r=e===m?void 0:e;P(r,q(t.value,i.props.modelModifiers))||n(r)})))}function Re(e,t){return e.props[t]}const Ce=(0,r.aZ)({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>ae().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:m},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(e,t){const n=(0,i.Vh)(e,"rules"),o=(0,i.Vh)(e,"name"),s=(0,i.Vh)(e,"label"),a=(0,i.Vh)(e,"uncheckedValue"),c=(0,i.Vh)(e,"keepValue"),{errors:u,value:l,errorMessage:d,validate:f,handleChange:h,handleBlur:p,setTouched:v,resetField:m,handleReset:g,meta:y,checked:b,setErrors:w}=Ee(o,n,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:xe(e,t),checkedValue:t.attrs.value,uncheckedValue:a,label:s,validateOnValueUpdate:!1,keepValueOnUnmount:c}),I=function(e,n=!0){h(e,n),t.emit("update:modelValue",l.value)},E=e=>{_(t.attrs.type)||(l.value=Z(e))},S=function(e){E(e),t.emit("update:modelValue",l.value)},k=(0,r.Fl)((()=>{const{validateOnInput:n,validateOnChange:r,validateOnBlur:i,validateOnModelUpdate:o}=Ne(e),s=[p,t.attrs.onBlur,i?f:void 0].filter(Boolean),a=[e=>I(e,n),t.attrs.onInput].filter(Boolean),c=[e=>I(e,r),t.attrs.onChange].filter(Boolean),u={name:e.name,onBlur:s,onInput:a,onChange:c,"onUpdate:modelValue":e=>I(e,o)};_(t.attrs.type)&&b&&(u.checked=b.value);const d=Pe(e,t);return T(d,t.attrs)&&(u.value=l.value),u}));function O(){return{field:k.value,value:l.value,meta:y,errors:u.value,errorMessage:d.value,validate:f,resetField:m,handleChange:I,handleInput:S,handleReset:g,handleBlur:p,setTouched:v,setErrors:w}}return t.expose({setErrors:w,setTouched:v,reset:m,validate:f,handleChange:h}),()=>{const n=(0,r.LL)(Pe(e,t)),i=G(n,t,O);return n?(0,r.h)(n,Object.assign(Object.assign({},t.attrs),k.value),i):i}}});function Pe(e,t){let n=e.as||"";return e.as||t.slots.default||(n="input"),n}function Ne(e){var t,n,r,i;const{validateOnInput:o,validateOnChange:s,validateOnBlur:a,validateOnModelUpdate:c}=ae();return{validateOnInput:null!==(t=e.validateOnInput)&&void 0!==t?t:o,validateOnChange:null!==(n=e.validateOnChange)&&void 0!==n?n:s,validateOnBlur:null!==(r=e.validateOnBlur)&&void 0!==r?r:a,validateOnModelUpdate:null!==(i=e.validateOnModelUpdate)&&void 0!==i?i:c}}function xe(e,t){return _(t.attrs.type)?C(e,"modelValue")?e.modelValue:void 0:C(e,"modelValue")?e.modelValue:t.attrs.value}const De=Ce;let Me=0;function Le(e){var t;const n=Me++,o=new Set;let s=!1;const a=(0,i.iH)({}),c=(0,i.iH)(!1),u=(0,i.iH)(0),l=[],d=(0,i.qj)(D((0,i.SU)(null===e||void 0===e?void 0:e.initialValues)||{})),{errorBag:f,setErrorBag:h,setFieldErrorBag:v}=Fe(null===e||void 0===e?void 0:e.initialErrors),m=(0,r.Fl)((()=>V(f.value).reduce(((e,t)=>{const n=f.value[t];return n&&n.length&&(e[t]=n[0]),e}),{})));function g(e){const t=a.value[e];return Array.isArray(t)?t[0]:t}function y(e){return!!a.value[e]}const _=(0,r.Fl)((()=>V(a.value).reduce(((e,t)=>{const n=g(t);return n&&(e[t]=(0,i.SU)(n.label||n.name)||""),e}),{}))),w=(0,r.Fl)((()=>V(a.value).reduce(((e,t)=>{var n;const r=g(t);return r&&(e[t]=null===(n=r.bails)||void 0===n||n),e}),{}))),E=Object.assign({},(null===e||void 0===e?void 0:e.initialErrors)||{}),S=null!==(t=null===e||void 0===e?void 0:e.keepValuesOnUnmount)&&void 0!==t&&t,{initialValues:k,originalInitialValues:O,setInitialValues:T}=je(a,d,null===e||void 0===e?void 0:e.initialValues),R=Ue(a,d,O,m),C=(0,r.Fl)((()=>[...o,...V(a.value)].reduce(((e,t)=>{const n=L(d,t);return U(e,t,n),e}),{}))),N=null===e||void 0===e?void 0:e.validationSchema,x=W(ge,5),M=W(ge,5),j=J((async e=>"silent"===await e?x():M()),((e,[t])=>{const n=q.fieldsByPath.value||{},r=V(q.errorBag.value),i=[...new Set([...V(e.results),...V(n),...r])];return i.reduce(((r,i)=>{const o=n[i],s=(e.results[i]||{errors:[]}).errors,a={errors:s,valid:!s.length};if(r.results[i]=a,a.valid||(r.errors[i]=a.errors[0]),!o)return X(i,s),r;if(G(o,(e=>e.meta.valid=a.valid)),"silent"===t)return r;const c=Array.isArray(o)?o.some((e=>e.meta.validated)):o.meta.validated;return"validated-only"!==t||c?(G(o,(e=>e.setState({errors:a.errors}))),r):r}),{valid:e.valid,results:{},errors:{}})}));function $(e){return function(t,n){return function(r){return r instanceof Event&&(r.preventDefault(),r.stopPropagation()),ie(V(a.value).reduce(((e,t)=>(e[t]=!0,e)),{})),c.value=!0,u.value++,le().then((i=>{const o=D(d);if(i.valid&&"function"===typeof t){const n=D(C.value);return t(e?n:o,{evt:r,controlledValues:n,setErrors:Z,setFieldError:X,setTouched:ie,setFieldTouched:re,setValues:ee,setFieldValue:Q,resetForm:oe})}i.valid||"function"!==typeof n||n({values:o,evt:r,errors:i.errors,results:i.results})})).then((e=>(c.value=!1,e)),(e=>{throw c.value=!1,e}))}}}const B=$(!1),z=B;z.withControlled=$(!0);const q={formId:n,fieldsByPath:a,values:d,controlledValues:C,errorBag:f,errors:m,schema:N,submitCount:u,meta:R,isSubmitting:c,fieldArrays:l,keepValuesOnUnmount:S,validateSchema:(0,i.SU)(N)?j:void 0,validate:le,register:ce,unregister:ue,setFieldErrorBag:v,validateField:de,setFieldValue:Q,setValues:ee,setErrors:Z,setFieldError:X,setFieldTouched:re,setTouched:ie,resetForm:oe,handleSubmit:z,stageInitialValue:he,unsetInitialValue:fe,setFieldInitialValue:me,useFieldModel:ne};function K(e){return Array.isArray(e)}function G(e,t){return Array.isArray(e)?e.forEach(t):t(e)}function Y(e){Object.values(a.value).forEach((t=>{t&&G(t,e)}))}function X(e,t){v(e,t)}function Z(e){h(e)}function Q(e,t,{force:n}={force:!1}){var r;const o=a.value[e],c=D(t);if(!o)return void U(d,e,c);if(K(o)&&"checkbox"===(null===(r=o[0])||void 0===r?void 0:r.type)&&!Array.isArray(t)){const n=D(H(L(d,e)||[],t,void 0));return void U(d,e,n)}let u=c;K(o)||"checkbox"!==o.type||n||s||(u=D(H(L(d,e),t,(0,i.SU)(o.uncheckedValue)))),U(d,e,u)}function ee(e){V(d).forEach((e=>{delete d[e]})),V(e).forEach((t=>{Q(t,e[t])})),l.forEach((e=>e&&e.reset()))}function te(e){const{value:t}=ye(e,void 0,q);return(0,r.YP)(t,(()=>{y((0,i.SU)(e))||le({mode:"validated-only"})}),{deep:!0}),o.add((0,i.SU)(e)),t}function ne(e){return Array.isArray(e)?e.map(te):te(e)}function re(e,t){const n=a.value[e];n&&G(n,(e=>e.setTouched(t)))}function ie(e){V(e).forEach((t=>{re(t,!!e[t])}))}function oe(e){s=!0,Y((e=>e.resetField()));const t=(null===e||void 0===e?void 0:e.values)?e.values:O.value;T(t),ee(t),(null===e||void 0===e?void 0:e.touched)&&ie(e.touched),Z((null===e||void 0===e?void 0:e.errors)||{}),u.value=(null===e||void 0===e?void 0:e.submitCount)||0,(0,r.Y3)((()=>{s=!1}))}function se(e,t){const n=(0,i.Xl)(e),r=t;if(!a.value[r])return void(a.value[r]=n);const o=a.value[r];o&&!Array.isArray(o)&&(a.value[r]=[o]),a.value[r]=[...a.value[r],n]}function ae(e,t){const n=t,r=a.value[n];if(r)if(K(r)||e.id!==r.id){if(K(r)){const t=r.findIndex((t=>t.id===e.id));if(-1===t)return;r.splice(t,1),r.length||delete a.value[n]}}else delete a.value[n]}function ce(e){const t=(0,i.SU)(e.name);se(e,t),(0,i.dq)(e.name)&&(0,r.YP)(e.name,(async(t,n)=>{await(0,r.Y3)(),ae(e,n),se(e,t),(m.value[n]||m.value[t])&&(X(n,void 0),de(t)),await(0,r.Y3)(),y(n)||F(d,n)}));const n=(0,i.SU)(e.errorMessage);n&&(null===E||void 0===E?void 0:E[t])!==n&&de(t),delete E[t]}function ue(e){const t=(0,i.SU)(e.name),n=a.value[t],o=!!n&&K(n);ae(e,t),(0,r.Y3)((()=>{var r;const s=null!==(r=(0,i.SU)(e.keepValueOnUnmount))&&void 0!==r?r:(0,i.SU)(S),c=L(d,t),u=o&&(n===a.value[t]||!a.value[t]);if(u&&!s)if(Array.isArray(c)){const n=c.findIndex((t=>P(t,(0,i.SU)(e.checkedValue))));if(n>-1){const e=[...c];e.splice(n,1),Q(t,e,{force:!0})}}else c===(0,i.SU)(e.checkedValue)&&F(d,t);if(!y(t)){if(X(t,void 0),s)return;if(o&&Array.isArray(c)&&!I(c))return;F(d,t)}}))}async function le(e){const t=(null===e||void 0===e?void 0:e.mode)||"force";if("force"===t&&Y((e=>e.meta.validated=!0)),q.validateSchema)return q.validateSchema(t);const n=await Promise.all(Object.values(a.value).map((t=>{const n=Array.isArray(t)?t[0]:t;return n?n.validate(e).then((e=>({key:(0,i.SU)(n.name),valid:e.valid,errors:e.errors}))):Promise.resolve({key:"",valid:!0,errors:[]})}))),r={},o={};for(const i of n)r[i.key]={valid:i.valid,errors:i.errors},i.errors.length&&(o[i.key]=i.errors[0]);return{valid:n.every((e=>e.valid)),results:r,errors:o}}async function de(e){const t=a.value[e];return t?Array.isArray(t)?t.map((e=>e.validate()))[0]:t.validate():((0,r.ZK)(`field with name ${e} was not found`),Promise.resolve({errors:[],valid:!0}))}function fe(e){F(k.value,e)}function he(t,n,r=!1){U(d,t,n),me(t,n),r&&!(null===e||void 0===e?void 0:e.initialValues)&&U(O.value,t,D(n))}function me(e,t){U(k.value,e,D(t))}async function ge(){const e=(0,i.SU)(N);if(!e)return{valid:!0,results:{},errors:{}};const t=b(e)?await pe(e,d):await ve(e,d,{names:_.value,bailsMap:w.value});return t}const be=z(((e,{evt:t})=>{A(t)&&t.target.submit()}));return(0,r.bv)((()=>{(null===e||void 0===e?void 0:e.initialErrors)&&Z(e.initialErrors),(null===e||void 0===e?void 0:e.initialTouched)&&ie(e.initialTouched),(null===e||void 0===e?void 0:e.validateOnMount)?le():q.validateSchema&&q.validateSchema("silent")})),(0,i.dq)(N)&&(0,r.YP)(N,(()=>{var e;null===(e=q.validateSchema)||void 0===e||e.call(q,"validated-only")})),(0,r.JJ)(p,q),Object.assign(Object.assign({},q),{handleReset:()=>oe(),submitForm:be})}function Ue(e,t,n,o){const s={touched:"some",pending:"some",valid:"every"},a=(0,r.Fl)((()=>!P(t,(0,i.SU)(n))));function c(){const t=Object.values(e.value).flat(1).filter(Boolean);return V(s).reduce(((e,n)=>{const r=s[n];return e[n]=t[r]((e=>e.meta[n])),e}),{})}const u=(0,i.qj)(c());return(0,r.m0)((()=>{const e=c();u.touched=e.touched,u.valid=e.valid,u.pending=e.pending})),(0,r.Fl)((()=>Object.assign(Object.assign({initialValues:(0,i.SU)(n)},u),{valid:u.valid&&!V(o.value).length,dirty:a.value})))}function je(e,t,n){const o=(0,i.iH)(D((0,i.SU)(n))||{}),s=(0,i.iH)(D((0,i.SU)(n))||{});function a(n,r=!1){o.value=D(n),s.value=D(n),r&&V(e.value).forEach((n=>{const r=e.value[n],i=Array.isArray(r)?r.some((e=>e.meta.touched)):null===r||void 0===r?void 0:r.meta.touched;if(!r||i)return;const s=L(o.value,n);U(t,n,D(s))}))}return(0,i.dq)(n)&&(0,r.YP)(n,(e=>{a(e,!0)}),{deep:!0}),{initialValues:o,originalInitialValues:s,setInitialValues:a}}function Fe(e){const t=(0,i.iH)({});function n(e){return Array.isArray(e)?e:e?[e]:[]}function r(e,r){r?t.value[e]=n(r):delete t.value[e]}function o(e){t.value=V(e).reduce(((t,r)=>{const i=e[r];return i&&(t[r]=n(i)),t}),{})}return e&&o(e),{errorBag:t,setErrorBag:o,setFieldErrorBag:r}}const Ve=(0,r.aZ)({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,t){const n=(0,i.Vh)(e,"initialValues"),o=(0,i.Vh)(e,"validationSchema"),s=(0,i.Vh)(e,"keepValues"),{errors:a,values:c,meta:u,isSubmitting:l,submitCount:d,controlledValues:f,validate:h,validateField:p,handleReset:v,resetForm:m,handleSubmit:g,setErrors:y,setFieldError:b,setFieldValue:_,setValues:w,setFieldTouched:I,setTouched:E}=Le({validationSchema:o.value?o:void 0,initialValues:n,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:s}),S=g(((e,{evt:t})=>{A(t)&&t.target.submit()}),e.onInvalidSubmit),k=e.onSubmit?g(e.onSubmit,e.onInvalidSubmit):S;function O(e){R(e)&&e.preventDefault(),v(),"function"===typeof t.attrs.onReset&&t.attrs.onReset()}function T(t,n){const r="function"!==typeof t||n?n:t;return g(r,e.onInvalidSubmit)(t)}function C(){return{meta:u.value,errors:a.value,values:c,isSubmitting:l.value,submitCount:d.value,controlledValues:f.value,validate:h,validateField:p,handleSubmit:T,handleReset:v,submitForm:S,setErrors:y,setFieldError:b,setFieldValue:_,setValues:w,setFieldTouched:I,setTouched:E,resetForm:m}}return t.expose({setFieldError:b,setErrors:y,setFieldValue:_,setValues:w,setFieldTouched:I,setTouched:E,resetForm:m,validate:h,validateField:p}),function(){const n="form"===e.as?e.as:(0,r.LL)(e.as),i=G(n,t,C);if(!e.as)return i;const o="form"===e.as?{novalidate:!0}:{};return(0,r.h)(n,Object.assign(Object.assign(Object.assign({},o),t.attrs),{onSubmit:k,onReset:O}),i)}}}),$e=Ve;function Be(e){const t=$(p,void 0),n=(0,i.iH)([]),o=()=>{},a={fields:n,remove:o,push:o,swap:o,insert:o,update:o,replace:o,prepend:o,move:o};if(!t)return B("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),a;if(!(0,i.SU)(e))return B("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),a;const c=t.fieldArrays.find((t=>(0,i.SU)(t.path)===(0,i.SU)(e)));if(c)return c;let u=0;function l(){const r=L(null===t||void 0===t?void 0:t.values,(0,i.SU)(e),[])||[];n.value=r.map(f),d()}function d(){const e=n.value.length;for(let t=0;t<e;t++){const r=n.value[t];r.isFirst=0===t,r.isLast=t===e-1}}function f(r){const o=u++,s={key:o,value:K({get(){const s=L(null===t||void 0===t?void 0:t.values,(0,i.SU)(e),[])||[],a=n.value.findIndex((e=>e.key===o));return-1===a?r:s[a]},set(e){const t=n.value.findIndex((e=>e.key===o));-1!==t?b(t,e):B("Attempting to update a non-existent array item")}}),isFirst:!1,isLast:!1};return s}function h(r){const o=(0,i.SU)(e),s=L(null===t||void 0===t?void 0:t.values,o);if(!s||!Array.isArray(s))return;const a=[...s];a.splice(r,1),null===t||void 0===t||t.unsetInitialValue(o+`[${r}]`),null===t||void 0===t||t.setFieldValue(o,a),n.value.splice(r,1),d()}function v(r){const o=(0,i.SU)(e),a=L(null===t||void 0===t?void 0:t.values,o),c=s(a)?[]:a;if(!Array.isArray(c))return;const u=[...c];u.push(r),null===t||void 0===t||t.stageInitialValue(o+`[${u.length-1}]`,r),null===t||void 0===t||t.setFieldValue(o,u),n.value.push(f(r)),d()}function m(r,o){const s=(0,i.SU)(e),a=L(null===t||void 0===t?void 0:t.values,s);if(!Array.isArray(a)||!(r in a)||!(o in a))return;const c=[...a],u=[...n.value],l=c[r];c[r]=c[o],c[o]=l;const f=u[r];u[r]=u[o],u[o]=f,null===t||void 0===t||t.setFieldValue(s,c),n.value=u,d()}function g(r,o){const s=(0,i.SU)(e),a=L(null===t||void 0===t?void 0:t.values,s);if(!Array.isArray(a)||a.length<r)return;const c=[...a],u=[...n.value];c.splice(r,0,o),u.splice(r,0,f(o)),null===t||void 0===t||t.setFieldValue(s,c),n.value=u,d()}function y(n){const r=(0,i.SU)(e);null===t||void 0===t||t.setFieldValue(r,n),l()}function b(n,r){const o=(0,i.SU)(e),s=L(null===t||void 0===t?void 0:t.values,o);!Array.isArray(s)||s.length-1<n||(null===t||void 0===t||t.setFieldValue(`${o}[${n}]`,r),null===t||void 0===t||t.validate({mode:"validated-only"}))}function _(r){const o=(0,i.SU)(e),a=L(null===t||void 0===t?void 0:t.values,o),c=s(a)?[]:a;if(!Array.isArray(c))return;const u=[r,...c];null===t||void 0===t||t.stageInitialValue(o+`[${u.length-1}]`,r),null===t||void 0===t||t.setFieldValue(o,u),n.value.unshift(f(r)),d()}function w(r,o){const a=(0,i.SU)(e),c=L(null===t||void 0===t?void 0:t.values,a),u=s(c)?[]:[...c];if(!Array.isArray(c)||!(r in c)||!(o in c))return;const l=[...n.value],f=l[r];l.splice(r,1),l.splice(o,0,f);const h=u[r];u.splice(r,1),u.splice(o,0,h),null===t||void 0===t||t.setFieldValue(a,u),n.value=l,d()}l();const I={fields:n,remove:h,push:v,swap:m,insert:g,update:b,replace:y,prepend:_,move:w};return t.fieldArrays.push(Object.assign({path:e,reset:l},I)),(0,r.Jd)((()=>{const n=t.fieldArrays.findIndex((t=>(0,i.SU)(t.path)===(0,i.SU)(e)));n>=0&&t.fieldArrays.splice(n,1)})),I}(0,r.aZ)({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(e,t){const{push:n,remove:r,swap:o,insert:s,replace:a,update:c,prepend:u,move:l,fields:d}=Be((0,i.Vh)(e,"name"));function f(){return{fields:d.value,push:n,remove:r,swap:o,insert:s,update:c,replace:a,prepend:u,move:l}}return t.expose({push:n,remove:r,swap:o,insert:s,update:c,replace:a,prepend:u,move:l}),()=>{const e=G(void 0,t,f);return e}}});const He=(0,r.aZ)({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=(0,r.f3)(p,void 0),i=(0,r.Fl)((()=>null===n||void 0===n?void 0:n.errors.value[e.name]));function o(){return{message:i.value}}return()=>{if(!i.value)return;const n=e.as?(0,r.LL)(e.as):e.as,s=G(n,t,o),a=Object.assign({role:"alert"},t.attrs);return n||!Array.isArray(s)&&s||!(null===s||void 0===s?void 0:s.length)?!Array.isArray(s)&&s||(null===s||void 0===s?void 0:s.length)?(0,r.h)(n,a,s):(0,r.h)(n||"span",a,i.value):s}}}),ze=He},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return ve},qX:function(){return de},Xd:function(){return le},Mq:function(){return ge},ZF:function(){return me},KN:function(){return ye}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,h=new WeakMap,p=new WeakMap,v=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(I(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),v.set(t,e),t}function g(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(d.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return h.set(r,t.sort?t.sort():[t]),I(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),v.set(t,e)),t}const E=e=>v.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=I(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(I(s.result),e.oldVersion,e.newVersion,I(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],T=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return T.set(t,o),o}b((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(C(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function C(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",N="0.8.4",x=new i.Yd("@firebase/app"),D="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",W="@firebase/installations",q="@firebase/installations-compat",J="@firebase/messaging",K="@firebase/messaging-compat",G="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",Z="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.14.0",oe="[DEFAULT]",se={[P]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[W]:"fire-iid",[q]:"fire-iid-compat",[J]:"fire-fcm",[K]:"fire-fcm-compat",[G]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[Z]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new o.LL("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw he.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw he.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw he.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(s,u),u}function ge(e=oe){const t=ae.get(e);if(!t&&e===oe)return me();if(!t)throw he.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}le(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Ie=null;function Ee(){return Ie||(Ie=S(be,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw he.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Se(e){var t;try{const t=await Ee();return t.transaction(we).objectStore(we).get(Oe(e))}catch(n){if(n instanceof o.ZR)x.warn(n.message);else{const e=he.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});x.warn(e.message)}}}async function ke(e,t){var n;try{const n=await Ee(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Oe(e)),r.done}catch(r){if(r instanceof o.ZR)x.warn(r.message);else{const e=he.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});x.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=1024,Ae=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ce(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ce(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Te){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),xe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function xe(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){le(new r.wA("platform-logger",(e=>new R(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Re(e)),"PRIVATE")),ye(P,N,e),ye(P,N,"esm2017"),ye("fire-js","")}De("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},2483:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return V},rH:function(){return Ke}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof window;function s(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const d=/\/$/,f=e=>e.replace(d,"");function h(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=w(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function v(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&g(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return l(e)?_(e,t):l(t)?_(t,e):e===t}function _(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function S(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),f(e)}const k=/^[^#]+#/;function O(e,t){return e.replace(k,"#")+t}function T(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=T(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function C(e,t){const n=history.state?history.state.position-t:-1;return n+e}const P=new Map;function N(e,t){P.set(e,t)}function x(e){const t=P.get(e);return P.delete(e),t}let D=()=>location.protocol+"//"+location.host;function M(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),v(n,"")}const s=v(n,e);return s+r+i}function L(e,t,n,r){let i=[],o=[],s=null;const c=({state:o})=>{const a=M(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){s=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function f(){for(const e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:l,destroy:f}}function U(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function j(e){const{history:t,location:n}=window,r={value:M(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:D()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=a({},t.state,U(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function c(e,n){const s=a({},i.value,t.state,{forward:e,scroll:A()});o(s.current,s,!0);const c=a({},U(r.value,e,null),{position:s.position+1},n);o(e,c,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:s}}function F(e){e=S(e);const t=j(e),n=L(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:O.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),F(e)}function $(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var W;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(W||(W={}));function q(e,t){return a(new Error,{type:e,[z]:!0},t)}function J(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const K="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},G,t),r=[];let i=n.start?"^":"";const o=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Y,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;o.push({name:e,repeatable:n,optional:c});const l=u||K;if(l!==K){s+=10;try{new RegExp(`(${l})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+d.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(l(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:o,parse:c,stringify:u}}function Z(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Q(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Z(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function d(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ne.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}function ie(e,t,n){const r=X(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function oe(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,c=ae(e);c.aliasOf=r&&r.record;const d=de(t,e),f=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,p;for(const t of f){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(h=ie(t,n,d),r?r.alias.push(h):(p=p||h,p!==h&&p.alias.push(h),i&&e.name&&!ue(h)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&l(h)}return p?()=>{s(p)}:u}function s(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Q(e,n[t])>=0&&(e.record.path!==n[t].record.path||!fe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ue(e)&&r.set(e.record.name,e)}function d(e,t){let i,o,s,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw q(1,{location:e});0,s=i.record.name,c=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),o=i.stringify(c)}else if("path"in e)o=e.path,i=n.find((e=>e.re.test(o))),i&&(c=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw q(1,{location:e,currentLocation:t});s=i.record.name,c=a({},t.params,e.params),o=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:o,params:c,matched:u,meta:le(u)}}return t=de({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:d,removeRoute:s,getRoutes:c,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ue(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function de(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fe(e,t){return t.children.some((t=>t===e||fe(e,t)))}const he=/#/g,pe=/&/g,ve=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,be=/%5B/g,_e=/%5D/g,we=/%5E/g,Ie=/%60/g,Ee=/%7B/g,Se=/%7C/g,ke=/%7D/g,Oe=/%20/g;function Te(e){return encodeURI(""+e).replace(Se,"|").replace(be,"[").replace(_e,"]")}function Ae(e){return Te(e).replace(Ee,"{").replace(ke,"}").replace(we,"^")}function Re(e){return Te(e).replace(ye,"%2B").replace(Oe,"+").replace(he,"%23").replace(pe,"%26").replace(Ie,"`").replace(Ee,"{").replace(ke,"}").replace(we,"^")}function Ce(e){return Re(e).replace(me,"%3D")}function Pe(e){return Te(e).replace(he,"%23").replace(ge,"%3F")}function Ne(e){return null==e?"":Pe(e).replace(ve,"%2F")}function xe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),o=xe(n<0?e:e.slice(0,n)),s=n<0?null:xe(e.slice(n+1));if(o in t){let e=t[o];l(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Ce(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ue=Symbol(""),je=Symbol(""),Fe=Symbol(""),Ve=Symbol(""),$e=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function He(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((s,a)=>{const c=e=>{!1===e?a(q(4,{from:n,to:t})):e instanceof Error?a(e):$(e)?a(q(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const o of e){0;for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(We(a)){const s=a.__vccOpts||a,c=s[t];c&&i.push(He(c,n,r,o,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const a=s(i)?i.default:i;o.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&He(u,n,r,o,e)()}))))}}}return i}function We(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function qe(e){const t=(0,r.f3)(Fe),n=(0,r.f3)(Ve),o=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),s=(0,r.Fl)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(g.bind(null,r));if(s>-1)return s;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(g.bind(null,e[t-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Ye(n.params,o.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,o.value.params)));function l(n={}){return Ge(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}const Je=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=(0,i.qj)(qe(e)),{options:o}=(0,r.f3)(Fe),s=(0,r.Fl)((()=>({[Ze(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ze(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ke=Je;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ze=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)($e),s=(0,r.Fl)((()=>e.route||o.value)),c=(0,r.f3)(je,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(je,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Ue,l),(0,r.JJ)($e,s);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,l.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&g(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,c=l.value,u=c&&c.components[o];if(!u)return et(n.default,{Component:u,route:i});const f=c.props[o],h=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=e=>{e.component.isUnmounted&&(c.instances[o]=null)},v=(0,r.h)(u,a({},h,t,{onVnodeUnmounted:p,ref:d}));return et(n.default,{Component:v,route:i})||v}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Qe;function nt(e){const t=oe(e.routes,e),n=e.parseQuery||De,s=e.stringifyQuery||Me,d=e.history;const f=Be(),v=Be(),g=Be(),y=(0,i.XI)(H);let b=H;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(e=>""+e)),w=c.bind(null,Ne),E=c.bind(null,xe);function S(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function P(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=h(n,e,r.path),o=t.resolve({path:i.path},r),s=d.createHref(i.fullPath);return a(i,o,{params:E(o.params),hash:xe(i.hash),redirectedFrom:void 0,href:s})}let i;if("path"in e)i=a({},e,{path:h(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:w(e.params)}),r.params=w(r.params)}const o=t.resolve(i,r),c=e.hash||"";o.params=_(E(o.params));const u=p(s,a({},e,{hash:Ae(c),path:o.path})),l=d.createHref(u);return a({fullPath:u,hash:c,query:s===Me?Le(e.query):e.query||{}},o,{redirectedFrom:void 0,href:l})}function D(e){return"string"===typeof e?h(n,e,y.value.path):a({},e)}function M(e,t){if(b!==e)return q(8,{from:t,to:e})}function L(e){return F(e)}function U(e){return L(a(D(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function F(e,t){const n=b=P(e),r=y.value,i=e.state,o=e.force,c=!0===e.replace,u=j(n);if(u)return F(a(D(u),{state:"object"===typeof u?a({},i,u.state):i,force:o,replace:c}),t||n);const l=n;let d;return l.redirectedFrom=t,!o&&m(s,r,n)&&(d=q(16,{to:l,from:r}),ne(r,r,!0,!1)),(d?Promise.resolve(d):$(l,r)).catch((e=>J(e)?J(e,2)?e:te(e):Q(e,l,r))).then((e=>{if(e){if(J(e,2))return F(a({replace:c},D(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:o}),t||l)}else e=W(l,r,!0,c,i);return z(l,r,e),e}))}function V(e,t){const n=M(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,i,o]=it(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(He(r,e,t))}));const s=V.bind(null,e,t);return n.push(s),rt(n).then((()=>{n=[];for(const r of f.list())n.push(He(r,e,t));return n.push(s),rt(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(He(r,e,t))}));return n.push(s),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(He(i,e,t));else n.push(He(r.beforeEnter,e,t));return n.push(s),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(o,"beforeRouteEnter",e,t),n.push(s),rt(n)))).then((()=>{n=[];for(const r of v.list())n.push(He(r,e,t));return n.push(s),rt(n)})).catch((e=>J(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of g.list())r(e,t,n)}function W(e,t,n,r,i){const s=M(e,t);if(s)return s;const c=t===H,u=o?history.state:{};n&&(r||c?d.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):d.push(e.fullPath,i)),y.value=e,ne(e,t,n,c),te()}let K;function G(){K||(K=d.listen(((e,t,n)=>{if(!ae.listening)return;const r=P(e),i=j(r);if(i)return void F(a(i,{replace:!0}),r).catch(u);b=r;const s=y.value;o&&N(C(s.fullPath,n.delta),A()),$(r,s).catch((e=>J(e,12)?e:J(e,2)?(F(e.to,r).then((e=>{J(e,20)&&!n.delta&&n.type===I.pop&&d.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&d.go(-n.delta,!1),Q(e,r,s)))).then((e=>{e=e||W(r,s,!1),e&&(n.delta&&!J(e,8)?d.go(-n.delta,!1):n.type===I.pop&&J(e,20)&&d.go(-1,!1)),z(r,s,e)})).catch(u)})))}let Y,X=Be(),Z=Be();function Q(e,t,n){te(e);const r=Z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Y&&y.value!==H?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return Y||(Y=!e,G(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&x(C(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&R(e))).catch((e=>Q(e,t,n)))}const re=e=>d.go(e);let ie;const se=new Set,ae={currentRoute:y,listening:!0,addRoute:S,removeRoute:k,hasRoute:T,getRoutes:O,resolve:P,options:e,push:L,replace:U,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:f.add,beforeResolve:v.add,afterEach:g.add,onError:Z.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),o&&!ie&&y.value===H&&(ie=!0,L(d.location).catch((e=>{0})));const n={};for(const i in H)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Fe,t),e.provide(Ve,(0,i.qj)(n)),e.provide($e,y);const s=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(b=H,K&&K(),K=null,y.value=H,ie=!1,Y=!1),s()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>g(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>g(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.78e44aef.js.map