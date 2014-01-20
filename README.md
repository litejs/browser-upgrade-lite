
[7]: https://ci.testling.com/litejs/browser-upgrade-lite.png
[8]: https://ci.testling.com/litejs/browser-upgrade-lite
[npm-package]: https://npmjs.org/package/browser-upgrade-lite


    @version    0.1.7
    @date       2014-01-20
    @stability  2 - Unstable



Browser upgrade
===============

Implement EcmaScript 5 methods for older browsers.


Contains
--------

- Functionprototype.bind
- Object.keys
- Object.create
- Array.isArray
- Array.prototype.indexOf
- Array.prototype.lastIndexOf
- Array.prototype.reduce
- Array.prototype.reduceRight
- Array.prototype.forEach
- Array.prototype.every
- Array.prototype.map
- Array.prototype.filter
- Array.prototype.some
- Date.prototype.toISOString
- Date.now
- String.prototype.trim
- JSON
- atob/btoa (base64) // Disabled by default


Browser Support
---------------

[![browser support][7]][8]

-   If no !DOCTYPE is specified, IE6-9 renders the page in IE5 mode!
-   document.createDocumentFragment is unsupported in IE5.5
-   IE 5.5 doesn't support the * collection (all elements) in 
    document.getElementByTagName — it returns a collection with zero members
-   instanceof is not implemented in IE 5 MAC
-   Safari 2.0.2: 416     hasOwnProperty introduced October 31, 2005 (Mac OS X v10.4)
    ```javascript
    // Polyfill
    Object.prototype.hasOwnProperty = function(name, obj) {
    	try {
    		obj = this.constructor
    		while (obj=obj.prototype) if (obj[name]===this[name]) return false
    	} catch(e) {}
    	return true
    }
    ```



External links
--------------

-   [npm-package][]


Licence
-------

Copyright (c) 2012 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)


