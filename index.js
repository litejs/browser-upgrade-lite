


/*
* @version    1.1.0
* @date       2014-09-12
* @stability  3 - Stable
* @author     Lauri Rooden <lauri@rooden.ee>
* @license    MIT License
*/




!function(window) {
	var a, b, c, O
	, P = "prototype"
	, F = Function
	, esc = escape
	, patched = window._patched = []


	function add(key, src) {
		if (!O[key]) {
			O[key] = new F("a,b,c","var P='"+P+"';"+src)
			patched.push(key)
		}
	}

	F.Nop = function(){}

	/*
	* The HTML5 document.head DOM tree accessor
	*/

	//doc.head = doc.head || doc.getElementsByTagName("head")[0]

	/*
	* Function.prototype.bind from ECMAScript5
	* Basic support:	Chrome 7 Firefox (Gecko) 4.0 (2) IE 9 Opera 11.60 Safari 5.1.4
	*
	* http://msdn.microsoft.com/en-us/library/s4esdbwz(v=vs.94).aspx
	*/
	O = F[P]
	add("bind", "var t=this;b=[].slice.call(arguments,1);c=function(){return t.apply(this instanceof c?this:a,b.concat.apply(b,arguments))};if(t[P])c[P]=t[P];return c")


	// Object extensions
	// -----------------

	O = Object
	add("create" , "b=Function.Nop;b[P]=a;return new b")
	add("keys"   , "c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c")




	// Array extensions
	// ----------------

	O = Array
	add("isArray", "return a instanceof Array")

	O = O[P]
	a = "var t=this,l=t.length,o=[],i=-1;"
	c = "if(t[i]===a)return i;return -1"
	add("indexOf",     a+"i+=b|0;while(++i<l)"+c)
	add("lastIndexOf", a+"i=(b|0)||l;i>--l&&(i=l)||i<0&&(i+=l);++i;while(--i>-1)"+c)

	b = a+"if(arguments.length<2)b=t"
	c = "b=a.call(null,b,t[i],i,t);return b"
	add("reduce",      b+"[++i];while(++i<l)"+c)
	add("reduceRight", b+"[--l];i=l;while(i--)"+c)

	b = a+"while(++i<l)if(i in t)"
	add("forEach",     b+"a.call(b,t[i],i,t)")
	add("every",       b+"if(!a.call(b,t[i],i,t))return!1;return!0")

	c = ";return o"
	add("map",         b+"o[i]=a.call(b,t[i],i,t)"+c)

	b += "if(a.call(b,t[i],i,t))"
	add("filter",      b+"o.push(t[i])"+c)
	add("some",        b+"return!0;return!1")


	O = String[P]
	add("trim", "return this.replace(/^\\s+|\\s+$/g, '')")

	O = Date
	add("now", "return+new Date")

	/*
	* `Date.prototype.format` is implemented in `date-format-lite` module.
	*/

	O = O[P]
	add("toISOString", "return this.format('isoUtcDateTime')")


	if (!window.JSON) {
		patched.push("JSON")
		window.JSON = {
			map: {"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t",'"':'\\"',"\\":"\\\\"},
			parse: new F("t", "return new Function('return('+t+')')()"),
			//parse: Fn("t->new Function('return('+t+')')()"),
			stringify: new F("o", "if(o==null)return'null';if(o instanceof Date)return'\"'+o.toISOString()+'\"';var i,s=[],c;if(Array.isArray(o)){for(i=o.length;i--;s[i]=JSON.stringify(o[i]));return'['+s.join()+']'}c=typeof o;if(c=='string'){for(i=o.length;c=o.charAt(--i);s[i]=JSON.map[c]||(c<' '?'\\\\u00'+((c=c.charCodeAt(0))|4)+(c%16).toString(16):c));return'\"'+s.join('')+'\"'}if(c=='object'){for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&s.push(JSON.stringify(i)+':'+JSON.stringify(o[i]));return'{'+s.join()+'}'}return''+o")
		}
	}

	// Ignore FF3 escape second non-standard argument
	// https://bugzilla.mozilla.org/show_bug.cgi?id=666448
	if (esc("a",0) != "a") {
		patched.push("escape")
		window.escape = function(s) {
			return esc(s)
		}
	}

}(this)



