!function(A, reduce, pre, suf, mid) {
	function add(key, src) {
		A[key] = A[key] || new Function("a,b,c", src+";return c")
	}

	// array.indexOf(searchElement[, fromIndex])
	add("_indexOf",     pre+"for(i+=b|0;++i<l"+suf)
	// array.lastIndexOf(searchElement[, fromIndex])
	add("_lastIndexOf", pre+"i=(b|0)||l;i>--l&&(i=l)||i<0&&(i+=l);for(++i;i--"+suf)

	suf = ";)c=a(c,t[i],i,t)"

	// array.reduce(callback[, initialValue])
	add(reduce,         pre+mid+"++i];for(;++i<l"+suf)
	// array.reduceRight(callback[, initialValue])
	add(reduce+"Right", pre+mid+"--l];for(i=l;i--"+suf)

	pre += "for(c=[];++i<l;)if(i in t)"
	mid  = "a.call(b,t[i],i,t)"
	
	// array.forEach(callback[, thisArg])
	add("_forEach",     pre+mid)
	
	// array.map(callback[, thisArg])
	add("_map",         pre+"c[i]="+mid)

	// array.every(callback[, thisObject])
	add("_every",       pre+"if(!"+mid+")return!1;c=!0")

	pre += "if("+mid+")"
	// array.some(callback[, thisObject])
	add("_some",        pre+"return!0;c=!1")
	
	// array.filter(callback[, thisObject])
	add("_filter",      pre+"c.push(t[i])")
}(Array.prototype
, "_reduce"
, "var t=this,l=t.length,i=-1;"
, ";)if(t[i]===a)return i;c=-1"
, "c=arguments.length>1?b:t["
)


