"use strict";var precacheConfig=[["/proj3_2-pathtracer-jmoon1506/gl/index.html","105a535d38f45e601c71d3e2b58f39be"],["/proj3_2-pathtracer-jmoon1506/gl/static/css/main.c452231c.css","9c3a1c366332aa6e46f7c67f0ed61cfc"],["/proj3_2-pathtracer-jmoon1506/gl/static/js/main.8b9d4eff.js","e1ce5dd22a9b910a319b1b61aba6e59a"],["/proj3_2-pathtracer-jmoon1506/gl/static/media/displacement2.30f924e7.png","30f924e7709dd66610d7bc221f0b62f5"],["/proj3_2-pathtracer-jmoon1506/gl/static/media/negx.9801efa7.jpg","9801efa794aee5a5e8174ce0b7e5db94"],["/proj3_2-pathtracer-jmoon1506/gl/static/media/negy.89a84f86.jpg","89a84f86138e2c04d4153cac9cd5d15c"],["/proj3_2-pathtracer-jmoon1506/gl/static/media/negz.93ddca20.jpg","93ddca2043d48af80e279d408ae72ae9"],["/proj3_2-pathtracer-jmoon1506/gl/static/media/posx.d28d8900.jpg","d28d89004f7b92a5d4fcf483008ec73d"],["/proj3_2-pathtracer-jmoon1506/gl/static/media/posy.684b9b64.jpg","684b9b64999cd41971ce19a485fb08ef"],["/proj3_2-pathtracer-jmoon1506/gl/static/media/posz.fe12b4ee.jpg","fe12b4ee015194a00647bc7b1542c8b9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/proj3_2-pathtracer-jmoon1506/gl/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});