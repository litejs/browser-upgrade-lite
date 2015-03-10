


/*
 * @version    1.1.4
 * @date       2015-03-01
 * @stability  3 - Stable
 * @author     Lauri Rooden <lauri@rooden.ee>
 * @license    MIT License
 */




!function(window) {
	if (!window.DOMParser) window.DOMParser = DOMParser

	function DOMParser(){}
	DOMParser.prototype.parseFromString = window.ActiveXObject ?
		parseWithActiveX :
		parseWithXMLHttpRequest

	function parseWithActiveX(str) {
		var doc = new ActiveXObject("MSXML.DomDocument")
		//var doc = new ActiveXObject("Microsoft.XMLDOM")
		doc.loadXML(str)
		return doc
	}

	function parseWithXMLHttpRequest(str, mime) {
		var req = new XMLHttpRequest()
		req.open("GET", "data:" + (mime || "application/xml") +
			";charset=utf-8," + encodeURIComponent(str), false)

		if (mime && req.overrideMimeType) req.overrideMimeType(mime)
		req.send()
		return req.responseXML
	}

}(this)

