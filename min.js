!function(g){function a(a,b,c,d){if(d||!a[b])a[b]=new e("a,b,c","var P='"+f+"';"+c),h.push(b)}var b,c=Object,f="prototype",d=Array[f],l=String[f],e=Function,k=escape,h=g._patched=[];e.Nop=function(){};a(e[f],"bind","var t=this;b=[].slice.call(arguments,1);c=function(){return t.apply(this instanceof c?this:a,b.concat.apply(b,arguments))};if(t[P])c[P]=t[P];return c");a(c,"create","b=Function.Nop;b[P]=a;return new b");a(c,"keys","c=[];for(b in a)a.hasOwnProperty(b)&&c.push(b);return c");a(Array,"isArray",
"return a instanceof Array");c="if(t[i]===a)return i;return -1";a(d,"indexOf","var t=this,l=t.length,o=[],i=-1;i+=b|0;while(++i<l)"+c);a(d,"lastIndexOf","var t=this,l=t.length,o=[],i=-1;i=(b|0)||l;i>--l&&(i=l)||i<0&&(i+=l);++i;while(--i>-1)"+c);b="var t=this,l=t.length,o=[],i=-1;if(arguments.length<2)b=t";c="b=a.call(null,b,t[i],i,t);return b";a(d,"reduce",b+"[++i];while(++i<l)"+c);a(d,"reduceRight",b+"[--l];i=l;while(i--)"+c);b="var t=this,l=t.length,o=[],i=-1;while(++i<l)if(i in t)";a(d,"forEach",
b+"a.call(b,t[i],i,t)");a(d,"every",b+"if(!a.call(b,t[i],i,t))return!1;return!0");c=";return o";a(d,"map",b+"o[i]=a.call(b,t[i],i,t)"+c);b+="if(a.call(b,t[i],i,t))";a(d,"filter",b+"o.push(t[i])"+c);a(d,"some",b+"return!0;return!1");a(l,"trim","return this.replace(/^\\s+|\\s+$/g, '')");a(Date[f],"toISOString","return this.format('isoUtcDateTime')");a(Date,"now","return+new Date");g.JSON||(h.push("JSON"),g.JSON={map:{"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t",'"':'\\"',"\\":"\\\\"},parse:new e("t",
"return new Function('return('+t+')')()"),stringify:new e("o","if(o==null)return'null';if(o instanceof Date)return'\"'+o.toISOString()+'\"';var i,s=[],c;if(Array.isArray(o)){for(i=o.length;i--;s[i]=JSON.stringify(o[i]));return'['+s.join()+']'}c=typeof o;if(c=='string'){for(i=o.length;c=o.charAt(--i);s[i]=JSON.map[c]||(c<' '?'\\\\u00'+((c=c.charCodeAt(0))|4)+(c%16).toString(16):c));return'\"'+s.join('')+'\"'}if(c=='object'){for(i in o)o.hasOwnProperty(i)&&s.push(JSON.stringify(i)+':'+JSON.stringify(o[i]));return'{'+s.join()+'}'}return''+o")});
"a"!=k("a",0)&&(h.push("escape"),g.escape=function(a){return k(a)})}(this);