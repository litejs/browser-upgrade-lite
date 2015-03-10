[npm package]: https://npmjs.org/package/browser-upgrade-lite
[GitHub repo]: https://github.com/litejs/browser-upgrade-lite


    @version    1.1.4
    @date       2015-03-01
    @stability  3 - Stable



Browser upgrade
===============

Implement EcmaScript 5 methods for older browsers.


Contains
--------

- Function.prototype.bind
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
- fixes FF3 `escape` second non-standard argument ([bug](https://bugzilla.mozilla.org/show_bug.cgi?id=666448))
- removes background image flickers on hover in IE6
- atob/btoa (base64) // In separate file
- Promise            // In separate file


Notes
-----

-   If no !DOCTYPE is specified, IE6-9 renders the page in IE5 mode!
-   document.createDocumentFragment is unsupported in IE5.5
-   IE 5.5 doesn't support the * collection (all elements) in
    document.getElementByTagName — it returns a collection with zero members
-   instanceof is not implemented in IE5 MAC
-   Safari 2.0.2: 416 hasOwnProperty introduced October 31, 2005 (Mac OS X v10.4)

```javascript
// hasOwnProperty polyfill
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

-   [GitHub repo][]
-   [npm package][]
-   [Standard ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm)


Licence
-------

Copyright (c) 2012-2015 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)


