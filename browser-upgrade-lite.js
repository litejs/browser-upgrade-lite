


/*
* @version  0.0.1
* @author   Lauri Rooden - https://github.com/litejs/browser-upgrade-lite
* @license  MIT License  - http://lauri.rooden.ee/mit-license.txt
*/



!function(w/* window */) {
	var a, b, c
	, xhrs = []
	, P = "prototype"
	, A = Array[P]
	, O = Object

	function I(o, n, s, x) {
		o[n] = o[n] || new Function("x","y","return function(a,b,c,d){"+s+"}").apply(null, x||[o, n])
	}

	function Nop(){}


	// We need bind in beginning, other ECMAScript 5 stuff will come later
	I(Function[P], "bind", "var t=this;b=x.call(arguments,1);c=function(){return t.apply(this instanceof c?this:a,b.concat.apply(b,arguments))};if(t[y])c[y]=t[y];return c", [A.slice, P])


	// instanceof not implemented in IE 5 MAC
	// Safari 2.0.2: 416     hasOwnProperty introduced October 31, 2005 (Mac OS X v10.4)
	/** hasOwnProperty
	I(Object[P], "hasOwnProperty", "try{b=this.constructor;while(b=b[x])if(b[a]===this[a])return false}catch(e){}return true", [P]);
	//*/


	// Object extensions
	// -----------------

	I(O, "create" , "x[y]=a;return new x", [Nop, P])
	I(O, "keys"   , "c=[];for(b in a)a.hasOwnProperty(b)&&c.push(b);return c")




	// Array extensions
	// ----------------

	I(Array, "isArray", "return a instanceof Array")

	a = "var t=this,l=t.length,o=[],i=-1;"
	c = "if(t[i]===a)return i;return -1"
	I(A, "indexOf",     a+"i+=b|0;while(++i<l)"+c)
	I(A, "lastIndexOf", a+"i=(b|0)||l;i>--l&&(i=l)||i<0&&(i+=l);++i;while(--i>-1)"+c)

	b = a+"if(arguments.length<2)b=t"
	c = "b=a.call(null,b,t[i],i,t);return b"
	I(A, "reduce",      b+"[++i];while(++i<l)"+c)
	I(A, "reduceRight", b+"[--l];i=l;while(i--)"+c)

	b = a+"while(++i<l)if(i in t)"
	I(A, "forEach",     b+"a.call(b,t[i],i,t)")
	I(A, "every",       b+"if(!a.call(b,t[i],i,t))return!1;return!0")

	c = ";return o"
	I(A, "map",         b+"o[i]=a.call(b,t[i],i,t)"+c)

	b += "if(a.call(b,t[i],i,t))"
	I(A, "filter",      b+"o.push(t[i])"+c)
	I(A, "some",        b+"return!0;return!1")




	I(Date[P], "toISOString", "return this.format('isoUtcDateTime')")

	//** base64
	if (!w.atob) {
		var ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
		, bm = {"=":0}
		
		for (i = 64; bm[ba[--i]]=i;);

		// base64_encode
		w.btoa = function(s) {
			for (var out=[],b,i=0,len=s.length;i<len;) {
				b = s.charCodeAt(i++)<<16 | s.charCodeAt(i++)<<8 | s.charCodeAt(i++)
				out.push(ba[b>>18&0x3f], ba[b>>12&0x3f], ba[b>>6&0x3f], ba[b&0x3f])
			}
			if (len%=3) out.splice(len-3, 2, len==1?"==":"=")
			return out.join("")
		}

		// base64_decode
		w.atob = function(s) {
			for (var out=[],b,i=0,len=s.length,s=s.split("");i<len;) {
				b = bm[s[i++]]<<18 | bm[s[i++]]<<12 | bm[s[i++]]<<6 | bm[s[i++]]
				out.push(b>>16 & 0xff, b>>8 & 0xff, b & 0xff)
			}
			if (s[len-1] == "=") out.length -= s[len-2] == "=" ? 2 : 1
			return String.fromCharCode.apply(null, out)
		}
	}

	//*/

	// XMLHttpRequest was unsupported in IE 5.x-6.x
	// MSXML version 3.0 was the last version of MSXML to support version-independent ProgIDs.
	I(w, "XMLHttpRequest", "return new ActiveXObject('MSXML2.XMLHTTP')");
	//I(w, "XMLHttpRequest", "a=function(n){n='MSXML2.XMLHTTP'+n;try{x[y]=function(){return new ActiveXObject(n)};return new x[y]}catch(e){}};return a('.6.0')||a('')");


	//** xhr
	w.xhr = function(method, url, cb, sync) {
		var r = xhrs.shift() || new XMLHttpRequest()
		r.open(method, url, !sync)
		if (!sync) r.onreadystatechange = function() {
			if (r.readyState == 4) {
				cb && cb( r.responseText, r)
				r.onreadystatechange = cb = Nop
				xhrs.push(r)
			}
		}
		return r
	};
	//*/


	if (!w.JSON) {
		w.JSON = {
			map: {"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t",'"':'\\"',"\\":"\\\\"},
			parse: new Function("t", "return new Function('return('+t+')')()"),
			//parse: Fn("t->new Function('return('+t+')')()"),
			stringify: new Function("o", "if(o==null)return'null';if(o instanceof Date)return'\"'+o.toISOString()+'\"';var i,s=[],c;if(Array.isArray(o)){for(i=o.length;i--;s[i]=JSON.stringify(o[i]));return'['+s.join()+']'}c=typeof o;if(c=='string'){for(i=o.length;c=o.charAt(--i);s[i]=JSON.map[c]||(c<' '?'\\\\u00'+((c=c.charCodeAt(0))|4)+(c%16).toString(16):c));return'\"'+s.join('')+'\"'}if(c=='object'){for(i in o)o.hasOwnProperty(i)&&s.push(JSON.stringify(i)+':'+JSON.stringify(o[i]));return'{'+s.join()+'}'}return''+o")
		}
	}


}(this)



