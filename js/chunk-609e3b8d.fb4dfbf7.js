(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-609e3b8d"],{"046d":function(e,t,n){"use strict";var i=n("4d6f"),a=n.n(i);a.a},"3bee":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUxpcebm5unp6ebm5ufn5+bm5ubm5ufn5+bm5mAXUVgAAAAIdFJOUwDNHY9AsOloBEydDgAAA+lJREFUaN61WlFv0zAQTtN02WPHQOQxE1LZY8YY6mMR0tbHbBMij2NMI48FAcojWZPUPxvQHMeO7+xLzPyyKa0vvu/uvrvz1fPQ5V+cHdznzf3B9Y/YG76CEyatw9XA7f5P1lufBp3iVcS0Vb6hv/6Egesl8RBBxpBVx277/0ogYBlEjLlI8DNmXFubFr+YZX0173/PrOuZaf+UEdaGDkDz4vr09Owy7wGJCzhXvnjYxpB/cUJTIsTDRwmtBlNiKX1Hc/wPkiI7eP/M7C+h5GEJiGBk8TfJR0EcF1Z/lSQAOPpCxwb191B8p9Q/PLJirDjaXPtMHO/K5KpHKAoTEW7mYFlihlhaAeBA5rAvhKRYU4ylvunYHih9d7kBIUzsnDeD3jWlIfi4MoAX1vQDdEd4kJ7lVARkfWtdgzlNwELTgdugidFE/UX+yNfswM9UGZjyTn5S9CAPzXR7pPlNC2OsxkFtdN45AGOqnugWFlDoRmvN/qDK2xgpoAIe8jMHKMnIfqecoHWcWIbgwcwgKaRXIisEU3UOk6Dy0qVqEzjZ9XgikFklxwMxRCkw6s4VGCBAGbDVO+7cKjUlOz0ZTjrT70MUp7IXwLRhF78F6gULE9N2ii+xjC0YHKwvM7EtxzAsjMl83VrHxzCcmsuJvUd0BBobNAjYykStcfvPCg2CW2NBtemOggUBQpRC9X3YVddwFGoRPeeMvMOCYGtJUDfcWBUWBHi5UnDzF5AbiCC4w9PLmr85A3K1CILS0B20ukdAUjunlBv7HKNI99aAUcqNCS6gIHQGrYCamzOBgqAilAklIEAUbOb+aqoI2GhUYS3YpjwGNG0DYsHmLIB7O4BBPkwFXUAxBMSG+0E63oy6AKIjtQIyPRaGuHINRuOC0nzscQGPfvd7bDhvYUaiE8pO/B1JaZU4yWBSbXXfg5OzndYjjv4ErpDoiWXqltqS1muSocm1ezHUg5HTOxNgVKMLDG6O7fgSZw3nd1qRVXXKjCvzbjqwxhWaSRf91ehSl7NiPbrYdi/3jw1RI0KiR9FKwzEzcbC55Unl4zSjm6627UvGtn39NpLeeFYqIuXo1jcw318sNCvM+kyRmdv/f47y3NT+2y8gPr8F6FAiu9D1CqQFpRx0CVMCWSCl7J8AruV8ESWuwlL6AWoQFzsKgudu/+91IPlCEk3bM+KVaIZm7YikBH4p634t7Hwx7Xw17n457zwecB9QmEYkr9/JI5IVdUjjDRzSwGOij5f9adkTDqpIo7Krpx3W2ceFVsaxDCxjz0kCcegaue13Hxv3HF9QwHdvwPK/9bY3w0bnXn/COHh4z2OI8POBP8Z2wt92qWGeAAAAAElFTkSuQmCC"},"4d6f":function(e,t,n){},5118:function(e,t,n){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var i,a=1,o={},s=!1,c=e.document,r=Object.getPrototypeOf&&Object.getPrototypeOf(e);r=r&&r.setTimeout?r:e,"[object process]"==={}.toString.call(e.process)?p():m()?A():e.MessageChannel?g():c&&"onreadystatechange"in c.createElement("script")?v():h(),r.setImmediate=l,r.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return o[a]=s,i(a),a++}function u(e){delete o[e]}function d(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i);break}}function f(e){if(s)setTimeout(f,0,e);else{var t=o[e];if(t){s=!0;try{d(t)}finally{u(e),s=!1}}}}function p(){i=function(e){t.nextTick(function(){f(e)})}}function m(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function A(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),i=function(n){e.postMessage(t+n,"*")}}function g(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},i=function(t){e.port2.postMessage(t)}}function v(){var e=c.documentElement;i=function(t){var n=c.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function h(){i=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},7097:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"singer"},[n("top",{attrs:{pic2:e.p1}}),n("list",{attrs:{options:e.p}})],1)},a=[],o=n("68a7"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gedan"},[i("div",{staticClass:"bgc"},[i("div",{staticClass:"top",on:{click:e.returns}},[i("img",{staticStyle:{width:"100%"},attrs:{src:n("3bee"),alt:""}})])]),i("div",{staticClass:"bottom"},[i("md-card-media",[e.pic2.length?i("swiper",{staticClass:"bottom_img",attrs:{options:e.swiperOption}},e._l(e.pic2,function(t,n){return i("swiper-slide",{key:n},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://127.0.0.1:3000"+t.simg,expression:"'http://127.0.0.1:3000'+p.simg"}],staticStyle:{width:"100%"},attrs:{alt:""},on:{click:function(n){return e.go(t.id)}}}),i("p",[e._v(e._s(t.sname))])])}),1):e._e()],1)],1)])},c=[],r=(n("5118"),{props:["pic2"],data:function(){return{swiperOption:{slidesPerView:3,spaceBetween:30,freeMode:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pagination:{el:".swiper-pagination",clickable:!0}}}}},methods:{go:function(e){this.$router.push("player/"+e)},returns:function(){history.go(-1)}}}),l=r,u=(n("046d"),n("2877")),d=Object(u["a"])(l,s,c,!1,null,"3e9f2851",null),f=d.exports,p={data:function(){return{p:[],p1:[]}},components:{list:o["a"],top:f},created:function(){this.getsinger()},methods:{getsinger:function(){var e=this;this.axios.get("/getmusiclist").then(function(t){var n=t.data;for(var i in n)e.p.push(n[i]);var a=n.filter(function(e,t,n){return!(t<n.length-1)||e.lid!=n[t+1].lid});for(var o in a)e.p1.push(a[o])})}}},m=p,A=Object(u["a"])(m,i,a,!1,null,"bd0cc422",null);t["default"]=A.exports}}]);
//# sourceMappingURL=chunk-609e3b8d.fb4dfbf7.js.map