!function(g){function c(a){if(!(this instanceof c&&e(a)))throw Error("Use: new Promise(fn)");this._d=[];k(this,a)}function k(a,b,f,c){function d(b){if(!f)for(a._s=c||!1,a._v=b,f=0;b=a._d[f++];)l(a,b)}try{b(function(b){b===a&&d(new TypeError("A promise resolved with itself"));if(!f)try{(f=m(b))?k(a,f):d(b,c=!0)}catch(e){d(e)}},d)}catch(e){d(e)}}function l(a,b){null===a._s?a._d.push(b):p(function(f){f=b[+a._s];if(e(f))try{b[3](f(a._v))}catch(c){b[2](c)}else b[+a._s+2](a._v)})}function m(a,b){return a&&
("object"==typeof a||e(a))&&e(b=a.then)&&b.bind(a)}function e(a){return"function"==typeof a}var n,h=g.Promise,p=g.setImmediate||function(a){setTimeout(a,1)};g.Promise=h&&new h(function(a){n=a})&&e(n)?h:c;c.prototype={_s:null,then:function(a,b){var f=this;return new c(function(c,d){l(f,[b,a,d,c])})},"catch":function(a){return this.then(null,a)}};c.all=function(a){return new c(function(b,c){function e(d,g){try{(g=m(a[d]))?g(function(b){a[d]=b;e(d)},c):--h||b(a)}catch(k){c(k)}}var d=0,g=a.length,h=g;
if(g)for(a=a.slice();d<g;)e(d++);else b([])})};c.resolve=function(a){return a instanceof c?a:new c(function(b){b(a)})};c.reject=function(a){return new c(function(b,c){c(a)})};c.race=function(a){return new c(function(b,c,e,d){for(d=0;e=a[d++];)e.then(b,c)})}}(this);