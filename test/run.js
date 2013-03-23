


/** Tests for String
!function(){
var test = new TestCase("String");
test.compare(
"  test  ".trim()
, "test"
, " \n te st \n ".trim()
, "te st"
, "te \n st".trim()
, "te \n st"
, "String.trim()");

test.compare(
"'hello world'".slice(1,-1)
, "hello world"
, "String.slice()");

test.done();
}()
//*/




/** Tests for Array
!function(){
var test = new TestCase("Array")
, arr = [1,2,3,4,2,5]
, res

res = arr.filter(function(val, key){return val == 2 || key == 3});
test.compare(
res.length, 3
, res.join(), "2,4,2"
, "Array.filter()");

res = [];
arr.forEach(function(val, key){res.push(val+key)});

test.compare(
res.length, 6
, res.join(), "1,3,5,7,6,10"
, "Array.foreach()");

res = arr.map(function(val, key){return (val+key)});

test.compare(
res.length, 6
, res.join(), "1,3,5,7,6,10"
, "Array.map()");

test.compare(
arr.indexOf(1)   , 0
, arr.indexOf(5)   , 5
, arr.indexOf(2)   , 1
, arr.indexOf(2,1) , 1
, arr.indexOf(2,2) , 4
, arr.indexOf(2,5) , -1
, arr.indexOf(6)   , -1
, "Array.indexOf()");

test.compare(
arr.lastIndexOf(1)    , 0
, arr.lastIndexOf(5)    , 5
, arr.lastIndexOf(2)    , 4
, arr.lastIndexOf(2,4)  , 4
, arr.lastIndexOf(2,3)  , 1
, arr.lastIndexOf(2,-1) , 4
, arr.lastIndexOf(2,-3) , 1
, arr.lastIndexOf(6)    , -1
, "Array.lastIndexOf()");

test.compare(
[2, 4, 6, 8].every(function(i){return !(i%2)})
, true
, [2, 5, 6, 8].every(function(i){return !(i%2)})
, false
, "Array.every()");

test.compare(
[2, 4, 6, 8].some(function(i){return i==4})
, true
, [2, 4, 6, 8].some(function(i){return i==5})
, false
, "Array.some()");


test.compare(
[0, 1, 2, 3].reduce(function(a, b){ return a + b; }), 6
, [0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){return previousValue + currentValue;}, 10), 20
, "Array.reduce()");


test.compare(
Array.isArray([1])
, true
, Array.isArray(1)
, false
, Array.isArray(arguments)
, false
, Array.isArray({a:1})
, false
, "Array.isArray");

test.done();
}()
//*/



/** Tests
!function(){
var test = new TestCase("Native methods");

var obj = {a:1,b:"2","cde":[1,"2",null,false,true,void 0,"kala"]}
, expected = '{"a":1,"b":"2","cde":[1,"2",null,false,true,null,"kala"]}'
, arr = Object.keys(obj)
, res

test.compare(
arr.length
, 3
, arr.join()
, "a,b,cde"
, "Object.keys()");

test.compare(
JSON.stringify( obj )
, expected
, JSON.stringify( JSON.parse( expected ) )
, expected
, JSON.stringify( arr )
, '["a","b","cde"]'
, "JSON");

test.compare(
"hasOwnProperty" in obj, true
, obj.hasOwnProperty("a"), true
, obj.hasOwnProperty("hasOwnProperty"), false
, obj.hasOwnProperty("c"), false
, "Object.hasOwnProperty()");

var bind_test = function(var1,var2){return var1+this.b+var2}
, fun = bind_test.bind(obj,"res1")

test.compare(
fun("res2")
, "res12res2"
, "Function.bind()");

test.done()
}()
//*/



/** Tests for Date
!function(){
var test = new TestCase("Date");

var d1 = new Date(1276703114000);
d1.setUTCHours(13, 45, 55, 12);
var d2 = new Date(1000000000000);
var d3 = new Date(1234567890000);


var str = (new Date(1276703114000)).toISOString();

test.compare(
str == "2010-06-16T15:45:14.000Z" || str == "2010-06-16T15:45:14Z"
, true
, "Date.toISOString()");

test.done();
}()
//*/





/** Tests for base64
!function(){
	var map = {
		"b": "Yg==",
		"ba": "YmE=",
		"bas": "YmFz",
		"base64 encode": "YmFzZTY0IGVuY29kZQ==",
		"{@:#}": "e0A6I30=",
		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.": "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkaWFtIG5vbnVtbXkgbmliaCBldWlzbW9kIHRpbmNpZHVudCB1dCBsYW9yZWV0IGRvbG9yZSBtYWduYSBhbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFV0IHdpc2kgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2kgdGF0aW9uIHVsbGFtY29ycGVyIHN1c2NpcGl0IGxvYm9ydGlzIG5pc2wgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlbSB2ZWwgZXVtIGlyaXVyZSBkb2xvciBpbiBoZW5kcmVyaXQgaW4gdnVscHV0YXRlIHZlbGl0IGVzc2UgbW9sZXN0aWUgY29uc2VxdWF0LCB2ZWwgaWxsdW0gZG9sb3JlIGV1IGZldWdpYXQgbnVsbGEgZmFjaWxpc2lzIGF0IHZlcm8gZXJvcyBldCBhY2N1bXNhbiBldCBpdXN0byBvZGlvIGRpZ25pc3NpbSBxdWkgYmxhbmRpdCBwcmFlc2VudCBsdXB0YXR1bSB6enJpbCBkZWxlbml0IGF1Z3VlIGR1aXMgZG9sb3JlIHRlIGZldWdhaXQgbnVsbGEgZmFjaWxpc2kuIE5hbSBsaWJlciB0ZW1wb3IgY3VtIHNvbHV0YSBub2JpcyBlbGVpZmVuZCBvcHRpb24gY29uZ3VlIG5paGlsIGltcGVyZGlldCBkb21pbmcgaWQgcXVvZCBtYXppbSBwbGFjZXJhdCBmYWNlciBwb3NzaW0gYXNzdW0uIFR5cGkgbm9uIGhhYmVudCBjbGFyaXRhdGVtIGluc2l0YW07IGVzdCB1c3VzIGxlZ2VudGlzIGluIGlpcyBxdWkgZmFjaXQgZW9ydW0gY2xhcml0YXRlbS4gSW52ZXN0aWdhdGlvbmVzIGRlbW9uc3RyYXZlcnVudCBsZWN0b3JlcyBsZWdlcmUgbWUgbGl1cyBxdW9kIGlpIGxlZ3VudCBzYWVwaXVzLiBDbGFyaXRhcyBlc3QgZXRpYW0gcHJvY2Vzc3VzIGR5bmFtaWN1cywgcXVpIHNlcXVpdHVyIG11dGF0aW9uZW0gY29uc3VldHVkaXVtIGxlY3RvcnVtLiBNaXJ1bSBlc3Qgbm90YXJlIHF1YW0gbGl0dGVyYSBnb3RoaWNhLCBxdWFtIG51bmMgcHV0YW11cyBwYXJ1bSBjbGFyYW0sIGFudGVwb3N1ZXJpdCBsaXR0ZXJhcnVtIGZvcm1hcyBodW1hbml0YXRpcyBwZXIgc2VhY3VsYSBxdWFydGEgZGVjaW1hIGV0IHF1aW50YSBkZWNpbWEuIEVvZGVtIG1vZG8gdHlwaSwgcXVpIG51bmMgbm9iaXMgdmlkZW50dXIgcGFydW0gY2xhcmksIGZpYW50IHNvbGxlbW5lcyBpbiBmdXR1cnVtLg=="
	}

	var test = TestCase("Base64");
	
	for (var key in map) if (map.hasOwnProperty(key)) test.compare(btoa(key), map[key], "base64_encode btoa");
	for (var key in map) if (map.hasOwnProperty(key)) test.compare(key, atob(map[key]), "base64_decode atob");
	
	test.done();

}();

//*/

