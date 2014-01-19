


/*
* @version    0.1.5
* @date       2014-01-19
* @stability  2 - Unstable
* @author     Lauri Rooden <lauri@rooden.ee>
* @license    MIT License
*/



!function(win) {
	var a, b, c
	, P = "prototype"
	, A = Array[P]
	, S = String[P]
	, O = Object
	, _escape = escape
	, patched = win._patched = []

	function I(obj, key, src, force) {
		if (force || !obj[key]) {
			obj[key] = new Function("a,b,c","var P='prototype';"+src)
			patched.push(key)
		}
	}

	/*
	* The HTML5 document.head DOM tree accessor
	*/

	//doc.head = doc.head || doc.getElementsByTagName("head")[0]

	/*
	* Function.prototype.bind from ECMAScript5
	* Basic support:	Chrome 7 Firefox (Gecko) 4.0 (2) IE 9 Opera 11.60 Safari 5.1.4
	*/
	I(Function[P], "bind", "var t=this;b=[].slice.call(arguments,1);c=function(){return t.apply(this instanceof c?this:a,b.concat.apply(b,arguments))};if(t[P])c[P]=t[P];return c")


	// Object extensions
	// -----------------

	I(O, "create" , "Nop[P]=a;return new Nop")
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


	I(S, "trim", "return this.replace(/^\\s+|\\s+$/g, '')")

	/*
	* `Date.prototype.format` is implemented in `date-format-lite` module.
	*/

	I(Date[P], "toISOString", "return this.format('isoUtcDateTime')")

	I(Date, "now", "return+new Date")

	if (!win.JSON) {
		patched.push("JSON")
		win.JSON = {
			map: {"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t",'"':'\\"',"\\":"\\\\"},
			parse: new Function("t", "return new Function('return('+t+')')()"),
			//parse: Fn("t->new Function('return('+t+')')()"),
			stringify: new Function("o", "if(o==null)return'null';if(o instanceof Date)return'\"'+o.toISOString()+'\"';var i,s=[],c;if(Array.isArray(o)){for(i=o.length;i--;s[i]=JSON.stringify(o[i]));return'['+s.join()+']'}c=typeof o;if(c=='string'){for(i=o.length;c=o.charAt(--i);s[i]=JSON.map[c]||(c<' '?'\\\\u00'+((c=c.charCodeAt(0))|4)+(c%16).toString(16):c));return'\"'+s.join('')+'\"'}if(c=='object'){for(i in o)o.hasOwnProperty(i)&&s.push(JSON.stringify(i)+':'+JSON.stringify(o[i]));return'{'+s.join()+'}'}return''+o")
		}
	}

	// Ignore FF3 escape second non-standard argument
	if (_escape.length > 1) {
		patched.push("escape")
		win.escape = function(s) {
			return _escape(s)
		}
	}

	/*
	* ### Notes
	*
	* -   instanceof is not implemented in IE 5 MAC
	* -   document.createDocumentFragment is unsupported in IE5.5
	* -   IE 5.5 doesn't support the * collection (all elements) in document.getElementByTagName — it returns a collection with zero members
	* -   Safari 2.0.2: 416     hasOwnProperty introduced October 31, 2005 (Mac OS X v10.4)
	*         // Could be implemented
	*         Object.prototype.hasOwnProperty = function(name, obj) {
	*         	try {
	*         		obj = this.constructor
	*         		while (obj=obj.prototype) if (obj[name]===this[name]) return false
	*         	} catch(e) {}
	*         	return true
	*         }
	* -   If no !DOCTYPE is specified, IE6-9 renders the page in IE5 mode!
	*/


}(window)



