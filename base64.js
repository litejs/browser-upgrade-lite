
	/** base64
	if (!win.atob) {
		// abcdefghijklmnopqrstuvwxyz234567
		// ybndrfg8ejkmcpqxot1uwisza345h769

		var ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
		, bm = {"=":0}
		
		for (i = 64; bm[ba[--i]]=i;);

		// base64_encode
		win.btoa = function(s) {
			for (var out=[],b,i=0,len=s.length;i<len;) {
				b = s.charCodeAt(i++)<<16 | s.charCodeAt(i++)<<8 | s.charCodeAt(i++)
				out.push(ba[b>>18&0x3f], ba[b>>12&0x3f], ba[b>>6&0x3f], ba[b&0x3f])
			}
			if (len%=3) out.splice(len-3, 2, len==1?"==":"=")
			return out.join("")
		}

		// base64_decode
		win.atob = function(s) {
			for (var out=[],b,i=0,len=s.length,s=s.split("");i<len;) {
				b = bm[s[i++]]<<18 | bm[s[i++]]<<12 | bm[s[i++]]<<6 | bm[s[i++]]
				out.push(b>>16 & 0xff, b>>8 & 0xff, b & 0xff)
			}
			if (s[len-1] == "=") out.length -= s[len-2] == "=" ? 2 : 1
			return String.fromCharCode.apply(null, out)
		}
	}

	//*/
