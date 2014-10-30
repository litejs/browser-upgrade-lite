/*! litejs.com/MIT-LICENSE.txt */
!function(f){function a(a,b){c[a]||(c[a]=new e("a,b,c","var P='prototype';"+b),g.push(a))}var b,d,c,e=Function,h=escape,g=f._patched=[];e.Nop=function(){};c=e.prototype;a("bind","var t=this;b=[].slice.call(arguments,1);c=function(){return t.apply(this instanceof c?this:a,b.concat.apply(b,arguments))};if(t[P])c[P]=t[P];return c");c=Object;a("create","b=Function.Nop;b[P]=a;return new b");a("keys","c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c");c=Array;a("isArray","return a instanceof Array");
c=c.prototype;d="if(t[i]===a)return i;return -1";a("indexOf","var t=this,l=t.length,o=[],i=-1;i+=b|0;while(++i<l)"+d);a("lastIndexOf","var t=this,l=t.length,o=[],i=-1;i=(b|0)||l;i>--l&&(i=l)||i<0&&(i+=l);++i;while(--i>-1)"+d);b="var t=this,l=t.length,o=[],i=-1;if(arguments.length<2)b=t";d="b=a.call(null,b,t[i],i,t);return b";a("reduce",b+"[++i];while(++i<l)"+d);a("reduceRight",b+"[--l];i=l;while(i--)"+d);b="var t=this,l=t.length,o=[],i=-1;while(++i<l)if(i in t)";a("forEach",b+"a.call(b,t[i],i,t)");
a("every",b+"if(!a.call(b,t[i],i,t))return!1;return!0");d=";return o";a("map",b+"o[i]=a.call(b,t[i],i,t)"+d);b+="if(a.call(b,t[i],i,t))";a("filter",b+"o.push(t[i])"+d);a("some",b+"return!0;return!1");c=String.prototype;a("trim","return this.replace(/^\\s+|\\s+$/g,'')");c=Date;a("now","return+new Date");c=c.prototype;a("toISOString","return this.format('isoUtcDateTime')");f.JSON||(g.push("JSON"),f.JSON={map:{"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t",'"':'\\"',"\\":"\\\\"},parse:new e("t",
"return new Function('return('+t+')')()"),stringify:new e("o","if(o==null)return'null';if(o instanceof Date)return'\"'+o.toISOString()+'\"';var i,s=[],c;if(Array.isArray(o)){for(i=o.length;i--;s[i]=JSON.stringify(o[i]));return'['+s.join()+']'}c=typeof o;if(c=='string'){for(i=o.length;c=o.charAt(--i);s[i]=JSON.map[c]||(c<' '?'\\\\u00'+((c=c.charCodeAt(0))|4)+(c%16).toString(16):c));return'\"'+s.join('')+'\"'}if(c=='object'){for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&s.push(JSON.stringify(i)+':'+JSON.stringify(o[i]));return'{'+s.join()+'}'}return''+o")});
"a"!=h("a",0)&&(g.push("escape"),f.escape=function(a){return h(a)})}(this);
