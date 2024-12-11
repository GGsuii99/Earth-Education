!function(){"use strict";function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,n,t,r,o){for(n=n.split?n.split("."):n,r=0;r<n.length;r++)e=e?e[n[r]]:o;return e===o?t:e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var u,s="TRUE"===("pbjs_debug",(u=window.location.search,u?u.replace(/^\?/,"").split("&").reduce((function(e,n){var t=r(n.split("="),2),o=t[0],i=t[1];return/\[\]$/.test(o)?(e[o=o.replace("[]","")]=e[o]||[],e[o].push(i)):e[o]=i||"",e}),{}):{}).pbjs_debug||"").toUpperCase(),f={random:!0,fixed:!0},d={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},l="*",g=function(){var n,t,o,u=[],g=null;function b(){function e(e){return c[e].val}function i(e,n){c[e].val=n}n={};var c={publisherDomain:{set:function(e){null!=e&&E("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"),i("publisherDomain",e)}},priceGranularity:{val:d.MEDIUM,set:function(e){l(e)&&("string"==typeof e?i("priceGranularity",u(e)?e:d.MEDIUM):D(e)&&(i("customPriceBucket",e),i("priceGranularity",d.CUSTOM),w("Using custom price granularity")))}},customPriceBucket:{val:{},set:function(){}},mediaTypePriceGranularity:{val:{},set:function(n){null!=n&&i("mediaTypePriceGranularity",Object.keys(n).reduce((function(t,r){return l(n[r])?"string"==typeof n?t[r]=u(n[r])?n[r]:e("priceGranularity"):D(n)&&(t[r]=n[r],w("Using custom price granularity for ".concat(r))):E("Invalid price granularity for media type: ".concat(r)),t}),{}))}},bidderSequence:{val:"random",set:function(e){f[e]?i("bidderSequence",e):E("Invalid order: ".concat(e,". Bidder Sequence was not set."))}},auctionOptions:{val:{},set:function(e){(function(e){if(!D(e))return E("Auction Options must be an object"),!1;for(var n=0,t=Object.keys(e);n<t.length;n++){var r=t[n];if("secondaryBidders"!==r&&"suppressStaleRender"!==r)return E("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!U(e[r]))return E("Auction Options ".concat(r," must be of type Array")),!1;if(!e[r].every(S))return E("Auction Options ".concat(r," must be only string")),!1}else if("suppressStaleRender"===r&&!B(e[r],"Boolean"))return E("Auction Options ".concat(r," must be of type boolean")),!1}return!0})(e)&&i("auctionOptions",e)}}},a={debug:s,bidderTimeout:3e3,enableSendAllBids:!0,useBidCache:!1,deviceAccess:!0,timeoutBuffer:400,disableAjaxTimeout:!1,maxNestedIframes:10,maxBid:5e3};function u(e){return t=function(n){return e===d[n]},(n=Object.keys(d))&&n.find(t,undefined);var n,t}function l(e){if(!e)return A("Prebid Error: no value passed to `setPriceGranularity()`"),!1;if("string"==typeof e)u(e)||E("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if(D(e)&&!function(e){if(n=e,!(n&&(U(n)||S(n)?n.length>0:!(Object.keys(n).length<=0))&&e.buckets&&Array.isArray(e.buckets)))return!1;var n,t=!0;return e.buckets.forEach((function(e){e.max&&e.increment||(t=!1)})),t}(e))return A("Invalid custom price value passed to `setPriceGranularity()`"),!1;return!0}Object.defineProperties(a,Object.fromEntries(Object.entries(c).map((function(n){var t=r(n,2),o=t[0],c=t[1];return[o,Object.assign({get:e.bind(null,o),set:i.bind(null,o),enumerable:!0},c)]})))),t&&_(Object.keys(t).reduce((function(e,n){return t[n]!==a[n]&&(e[n]=a[n]||{}),e}),{})),t=a,o={}}function p(){if(g&&o&&D(o[g])){var e=o[g];return function(){return Array.from.apply(Array,arguments)}(new Set(Object.keys(t).concat(Object.keys(e)))).reduce((function(n,r){return void 0===e[r]?n[r]=t[r]:void 0===t[r]?n[r]=e[r]:D(e[r])?n[r]=q({},t[r],e[r]):n[r]=e[r],n}),{})}return Object.assign({},t)}var y=[p,function(){var e=p();return Object.defineProperty(e,"ortb2",{get:function(){throw new Error("invalid access to 'orbt2' config - use request parameters instead")}}),e}].map((function(e){return function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var n=arguments.length<=0?void 0:arguments[0];return n?c(e(),n):p()}return R.apply(void 0,arguments)}})),h=r(y,2),v=h[0],m=h[1],O=[m,v].map((function(e){return function(){var n=e.apply(void 0,arguments);return n&&"object"===i(n)&&(n=I(n)),n}})),j=r(O,2),k=j[0],C=j[1];function P(e){if(D(e)){var r=Object.keys(e),o={};r.forEach((function(r){var i=e[r];D(n[r])&&D(i)&&(i=Object.assign({},n[r],i));try{o[r]=t[r]=i}catch(e){E("Cannot set config for property ".concat(r," : "),e)}})),_(o)}else A("setConfig options must be an object")}function R(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t;if("string"!=typeof n&&(o=n,n=l,r=t||{}),"function"==typeof o){var i={topic:n,callback:o};return u.push(i),r.init&&o(n===l?m():e({},n,m(n))),function(){u.splice(u.indexOf(i),1)}}A("listener must be a function")}function _(n){var t=Object.keys(n);u.filter((function(e){return n=t,r=e.topic,n&&n.includes(r,undefined)||!1;var n,r})).forEach((function(t){t.callback(e({},t.topic,n[t.topic]))})),u.filter((function(e){return e.topic===l})).forEach((function(e){return e.callback(n)}))}function x(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{t(e),e.bidders.forEach((function(t){o[t]||(o[t]={}),Object.keys(e.config).forEach((function(r){var i=e.config[r];if(D(i)){var c=n?q:Object.assign;o[t][r]=c({},o[t][r]||{},i)}else o[t][r]=i}))}))}catch(e){A(e)}function t(e){if(!D(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!D(e.config))throw"setBidderConfig bidder options must contain a config object"}}function G(e,n){g=e;try{return n()}finally{T()}}function T(){g=null}return b(),{getCurrentBidder:function(){return g},resetBidder:T,getConfig:m,getAnyConfig:v,readConfig:k,readAnyConfig:C,setConfig:P,mergeConfig:function(n){if(D(n)){var t=q(p(),n);return P(function(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){e(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({},t)),t}A("mergeConfig input must be an object")},setDefaults:function(e){D(n)?(Object.assign(n,e),Object.assign(t,e)):A("defaults must be an object")},resetConfig:b,runWithBidder:G,callbackWithBidder:function(e){return function(n){return function(){if("function"==typeof n){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return G(e,n.bind.apply(n,[this].concat(r)))}E("config.callbackWithBidder callback is not a function")}}},setBidderConfig:x,getBidderConfig:function(){return o},mergeBidderConfig:function(e){return x(e,!0)}}}();function b(e){var n,t,r;if(Array.isArray(e)){for(t=Array(n=e.length);n--;)t[n]=(r=e[n])&&"object"==typeof r?b(r):r;return t}if("[object Object]"===Object.prototype.toString.call(e)){for(n in t={},e)"__proto__"===n?Object.defineProperty(t,n,{value:b(e[n]),configurable:!0,enumerable:!0,writable:!0}):t[n]=(r=e[n])&&"object"==typeof r?b(r):r;return t}return e}var p=window,y=p.pbjs=p.pbjs||{};y.cmd=y.cmd||[],y.que=y.que||[],p===window&&(p._pbjsGlobals=p._pbjsGlobals||[],p._pbjsGlobals.push("pbjs"));var h=Object.prototype.toString,v=Boolean(window.console),m=Boolean(v&&window.console.log),O=(Boolean(v&&window.console.info),Boolean(v&&window.console.warn)),j=Boolean(v&&window.console.error);function w(){C()&&m&&console.log.apply(console,k(arguments,"MESSAGE:"))}function E(){C()&&O&&console.warn.apply(console,k(arguments,"WARNING:"))}function A(){C()&&j&&console.error.apply(console,k(arguments,"ERROR:"))}function k(e,n){e=[].slice.call(e);var t=g.getCurrentBidder();return n&&e.unshift(n),t&&e.unshift(r("#aaa")),e.unshift(r("#3b88c3")),e.unshift("%cPrebid"+(t?"%c".concat(t):"")),e;function r(e){return"display: inline-block; color: #fff; background: ".concat(e,"; padding: 1px 4px; border-radius: 3px;")}}function C(){return!!g.getConfig("debug")}function B(e,n){return h.call(e)==="[object "+n+"]"}function S(e){return B(e,"String")}var P,R,U=Array.isArray.bind(Array);function D(e){return B(e,"Object")}function I(e){return b(e)||{}}function _(e,n){if(n<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));var t=0;return function(){++t===n&&e.apply(this,arguments)}}function x(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.checkTypes,o=void 0!==r&&r;if(e===n)return!0;if("object"!==i(e)||null===e||"object"!==i(n)||null===n||o&&e.constructor!==n.constructor)return!1;var c=Object.keys(e);if(c.length!==Object.keys(n).length)return!1;for(var a=0,u=c;a<u.length;a++){var s=u[a];if(!n.hasOwnProperty(s))return!1;if(!x(e[s],n[s],{checkTypes:o}))return!1}return!0}function q(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(!r.length)return n;var c=r.shift();if(D(n)&&D(c)){var a=function(t){D(c[t])?(n[t]||Object.assign(n,e({},t,{})),q(n[t],c[t])):U(c[t])?n[t]?U(n[t])&&c[t].forEach((function(e){for(var r=1,o=0;o<n[t].length;o++)if(x(n[t][o],e)){r=0;break}r&&n[t].push(e)})):Object.assign(n,e({},t,o(c[t]))):Object.assign(n,e({},t,c[t]))};for(var u in c)a(u)}return q.apply(void 0,[n].concat(r))}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.setTimeout;this.setTimeout=void 0===n?window.setTimeout.bind(window):n,this.logger=e.logger,this.rules=[]}function T(e,n){var t=n.hook,r=n.logger;P=Y.bind({overrides:e,logger:r}),t.get("addBidResponse").before(P,5),R=z.bind({overrides:e,logger:r}),t.get("addBidderRequests").before(R,5)}function M(e){var n=e.hook;n.get("addBidResponse").getHooks({hook:P}).remove(),n.get("addBidderRequests").getHooks({hook:R}).remove()}function N(e,n,t){return!(!e.bidder||e.bidder===n)||!(!e.adUnitCode||e.adUnitCode===t)}function W(e,n){return Array.isArray(e)&&-1===e.indexOf(n)}function K(e,n,t,r){return Object.keys(e).filter((function(e){return-1===["adUnitCode","bidder"].indexOf(e)})).reduce((function(n,o){return r.logMessage("bidder overrides changed '".concat(n.adUnitCode,"/").concat(n.bidderCode,"' ").concat(t,".").concat(o," from '").concat(n[o],".js' to '").concat(e[o],"'")),n[o]=e[o],n.isDebug=!0,n}),n)}function Y(e,n,t,r){var o=this.overrides,i=this.logger;W(o.bidders,t.bidderCode)?i.logWarn("bidder '".concat(t.bidderCode,"' excluded from auction by bidder overrides")):(Array.isArray(o.bids)&&o.bids.forEach((function(e){N(e,t.bidderCode,n)||K(e,t,"bidder",i)})),e(n,t,r))}function z(e,n){var t=this.overrides,r=this.logger,o=n.filter((function(e){return!W(t.bidders,e.bidderCode)||(r.logWarn("bidRequest '".concat(e.bidderCode,"' excluded from auction by bidder overrides")),!1)}));Array.isArray(t.bidRequests)&&o.forEach((function(e){t.bidRequests.forEach((function(n){e.bids.forEach((function(t){N(n,e.bidderCode,t.adUnitCode)||K(n,t,"bidRequest",r)}))}))})),e(o)}function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){e(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}Number.isInteger.bind(Number),Object.assign(G.prototype,{DEFAULT_RULE_OPTIONS:{delay:0},serializeConfig:function(e){var n=this;return e.filter((function(e,t){var r=x(e,JSON.parse(JSON.stringify(e)),{checkTypes:!0});return r||c(e,"options.suppressWarnings")||n.logger.logWarn("Bid interceptor rule definition #".concat(t+1," is not serializable and will be lost after a refresh. Rule definition: "),e),r}))},updateConfig:function(e){var n=this;this.rules=(e.intercept||[]).map((function(e,t){return n.rule(e,t+1)}))},rule:function(e,n){return{no:n,match:this.matcher(e.when,n),replace:this.replacer(e.then,n),options:Object.assign({},this.DEFAULT_RULE_OPTIONS,e.options),paapi:this.paapiReplacer(e.paapi||[],n)}},matcher:function(e,n){if("function"==typeof e)return e;if("object"!==i(e))return this.logger.logError("Invalid 'when' definition for debug bid interceptor (in rule #".concat(n,")")),function(){return!1};function t(n,c){var a=c.ref,u=void 0===a?e:a,s=c.args,f=void 0===s?[]:s;return Object.entries(u).map((function(e){var c=r(e,2),a=c[0],u=c[1],s=n[a];return u instanceof RegExp?null!=u.exec(s):"function"==typeof u?!!u.apply(void 0,[s].concat(o(f))):"object"===i(u)?t(s,{ref:u,args:f}):s===u})).every((function(e){return e}))}return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t(e,{args:r})}},replacer:function(e,n){var t,c=this;return null===e?function(){return null}:("function"==typeof(e=e||{})?t=function(n){var t=n.args;return e.apply(void 0,o(t))}:"object"!==i(e)?(this.logger.logError("Invalid 'then' definition for debug bid interceptor (in rule #".concat(n,")")),t=function(){return{}}):t=function(n){var c=n.args,a=n.ref,u=void 0===a?e:a,s=Array.isArray(u)?[]:{};return Object.entries(u).forEach((function(e){var n=r(e,2),a=n[0],u=n[1];"function"==typeof u?s[a]=u.apply(void 0,o(c)):null!=u&&"object"===i(u)?s[a]=t({args:c,ref:u}):s[a]=u})),s},function(e){for(var n=c.responseDefaults(e),r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return q(n,t({args:[e].concat(o)})),n.hasOwnProperty("ad")||n.hasOwnProperty("adUrl")||(n.ad=c.defaultAd(e,n)),n.isDebug=!0,n})},paapiReplacer:function(e,n){return Array.isArray(e)?function(){return e}:"function"==typeof e?e:void this.logger.logError("Invalid 'paapi' definition for debug bid interceptor (in rule #".concat(n,")"))},responseDefaults:function(e){return{requestId:e.bidId,cpm:3.5764,currency:"EUR",width:300,height:250,ttl:360,creativeId:"mock-creative-id",netRevenue:!1,meta:{}}},defaultAd:function(e,n){return"<html><head><style>#ad {width: ".concat(n.width,"px;height: ").concat(n.height,'px;background-color: #f6f6ae;color: #85144b;padding: 5px;text-align: center;display: flex;flex-direction: column;align-items: center;justify-content: center;}#bidder {font-family: monospace;font-weight: normal;}#title {font-size: x-large;font-weight: bold;margin-bottom: 5px;}#body {font-size: large;margin-top: 5px;}</style></head><body><div id="ad"><div id="title">Mock ad: <span id="bidder">').concat(e.bidder,'</span></div><div id="body">').concat(n.width,"x").concat(n.height,"</div></div></body></html>")},match:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return this.rules.find((function(n){return n.match.apply(n,[e].concat(t))}))},matchAll:function(e,n){var t=this,r=[],o=[];return e.forEach((function(e){var i=t.match(e,n);null!=i?r.push({rule:i,bid:e}):o.push(e)})),[r,o]},intercept:function(e){var n=this,t=e.bids,o=e.bidRequest,i=e.addBid,c=e.addPaapiConfig,a=e.done;null==t&&(t=o.bids);var u=r(this.matchAll(t,o),2),s=u[0],f=u[1];if(s.length>0){var d=_(a,s.length);s.forEach((function(e){var t=e.rule.replace(e.bid,o),r=e.rule.paapi(e.bid,o),a=e.rule.options.delay;n.logger.logMessage("Intercepted bid request (matching rule #".concat(e.rule.no,"), mocking response in ").concat(a,"ms. Request, response, PAAPI configs:"),e.bid,t,r),n.setTimeout((function(){t&&i(t,e.bid),r.forEach((function(n){return c(n,e.bid,o)})),d()}),a)})),t=(o=I(o)).bids=f}else this.setTimeout(a,0);return{bids:t,bidRequest:o}}});var J,F=[],$=!1;function Q(e,n){var t=n.fromSession,r=void 0!==t&&t,o=n.config,i=n.hook,c=n.logger;o.setConfig({debug:!0}),J.updateConfig(e),Z(!0),M({hook:i}),T(e,{hook:i,logger:c}),$||($=!0,c.logMessage("Debug overrides enabled".concat(r?" from session":"")))}function V(e){var n=e.hook,t=e.logger;J.updateConfig({}),Z(!1),M({hook:n}),$&&($=!1,t.logMessage("Debug overrides disabled"))}function X(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.sessionStorage,r=void 0===t?window.sessionStorage:t,o=n.DEBUG_KEY;if(e.enabled){e.intercept&&((e=I(e)).intercept=J.serializeConfig(e.intercept));try{r.setItem(o,JSON.stringify(e))}catch(e){}}else try{r.removeItem(o)}catch(e){}}function Z(e){F.forEach((function(e){var n=r(e,2),t=n[0],o=n[1];t().getHooks({hook:o}).remove()})),e&&F.forEach((function(e){var n=r(e,2),t=n[0],o=n[1];t().before(o)}))}function ee(e,n){var t=function(){var e;return(e=J).intercept.apply(e,arguments)};F.push([e,function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];n.apply(void 0,[e,t].concat(o))}])}function ne(e,n,t,r,o,i,c,a){var u=_(a.onCompletion,2),s=n({bids:r,bidRequest:o,addBid:a.onBid,addPaapiConfig:function(e,n){return a.onPaapi({bidId:n.bidId,config:e})},done:u});r=s.bids,o=s.bidRequest,0===r.length?u():e(t,r,o,i,c,L(L({},a),{},{onCompletion:u}))}function te(e){var n=e.DEBUG_KEY,t=e.config,r=e.hook,i=e.createBid,c=e.logger;J=new G({logger:c});var a=function(e){var n=e.createBid;return function(e,t,r,i,c,a){var u,s=a.onResponse,f=a.onError,d=a.onBid,l=a.onFledge,g=_((function(){return s.apply(void 0,o(u))}),i.length+1);function b(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];u=n,g()}function p(e,t){d({adUnit:t.adUnitCode,bid:Object.assign(n(1,t),e)})}if((i=i.map((function(e){return t({bidRequest:e,addBid:p,addPaapiConfig:function(e,n,t){l({adUnitCode:n.adUnitCode,ortb2:t.ortb2,ortb2Imp:n.ortb2Imp,config:e})},done:g}).bidRequest})).filter((function(e){return e.bids.length>0}))).length>0){var y=new Set;i.forEach((function(e){return e.bids.forEach((function(e){return y.add(e.bidId)}))})),(r=I(r)).ad_units.forEach((function(e){e.bids=e.bids.filter((function(e){return y.has(e.bid_id)}))})),r.ad_units=r.ad_units.filter((function(e){return e.bids.length>0})),e(r,i,c,{onResponse:b,onError:f,onBid:d})}else b(!0,[])}}({createBid:i});ee((function(){return r.get("processBidderRequests")}),ne),ee((function(){return r.get("processPBSRequest")}),a),function(e){var n,t=e.DEBUG_KEY,r=e.storage,o=e.config,i=e.hook,c=e.logger;try{r=r||window.sessionStorage,n=JSON.parse(r.getItem(t))}catch(e){}n&&Q(n,{fromSession:!0,config:o,hook:i,logger:c})}({DEBUG_KEY:n,config:t,hook:r,logger:c}),t.getConfig("debugging",(function(e){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.getStorage,r=void 0===t?function(){return window.sessionStorage}:t,o=n.DEBUG_KEY,i=n.config,c=n.hook,a=n.logger;if(null!=e){var u;try{u=r()}catch(e){a.logError("sessionStorage is not available: debugging configuration will not persist on page reload",e)}null!=u&&X(e,{sessionStorage:u,DEBUG_KEY:o}),e.enabled?Q(e,{config:i,hook:c,logger:a}):V({hook:c,logger:a})}}(e.debugging,{DEBUG_KEY:n,config:t,hook:r,logger:c})}),{init:!0})}window._pbjsGlobals.forEach((function(e){window[e]&&!0===window[e]._installDebugging&&(window[e]._installDebugging=te)}))}();