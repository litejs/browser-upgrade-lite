!function(h){if(!h.atob){for(var k=64,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),g={"=":0};g[f[--k]]=k;);h.btoa=function(a){for(var e=[],b,c=0,d=a.length;c<d;)b=a.charCodeAt(c++)<<16|a.charCodeAt(c++)<<8|a.charCodeAt(c++),e.push(f[b>>18&63],f[b>>12&63],f[b>>6&63],f[b&63]);(d%=3)&&e.splice(d-3,2,1==d?"==":"=");return e.join("")};h.atob=function(a){var e=[],b,c=0,d=a.length;for(a=a.split("");c<d;)b=g[a[c++]]<<18|g[a[c++]]<<12|g[a[c++]]<<6|g[a[c++]],e.push(b>>16&255,
b>>8&255,b&255);"="==a[d-1]&&(e.length-="="==a[d-2]?2:1);return String.fromCharCode.apply(null,e)}}}(this);