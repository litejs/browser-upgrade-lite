
var undef, res
, arr = [1,2,3,4,2,5]
, arr1 = [0, 1, 3, 5, 7, 3, 5, "3", true, undef]
, arr2 = [0, 1, 2, 3]

require("../array")

require("testman").
describe("Array").
	it ( "should have correct native indexOf").
	it ( "should have correct indexOf").
		equal( arr1._indexOf(0),        0).
		equal( arr1._indexOf(0, 0),     0).
		equal( arr1._indexOf(0, 1),    -1).
		equal( arr1._indexOf(1),        1).
		equal( arr1._indexOf(1, 0),     1).
		equal( arr1._indexOf(1, 1),     1).
		equal( arr1._indexOf(1, 2),    -1).
		equal( arr1._indexOf(3),        2).
		equal( arr1._indexOf(5),        3).
		equal( arr1._indexOf(7),        4).
		equal( arr1._indexOf("3"),      7).
		equal( arr1._indexOf(true),     8).
		equal( arr1._indexOf(undef),    9).
		equal( arr1._indexOf(undef, 9), 9).
		equal( arr1._indexOf(8),       -1).
		equal( arr1._indexOf("7"),     -1).
		equal( arr1._indexOf("8"),     -1).
		equal( arr1._indexOf("true"),  -1).
		equal( arr1._indexOf(false),   -1).
		equal( arr1._indexOf(null),    -1).
	it ( "should have lastIndexOf").
		equal( arr1._lastIndexOf(0), 0).
		equal( arr1._lastIndexOf(1), 1).
		equal( arr1._lastIndexOf(3), 5).
		equal( arr1._lastIndexOf(5), 6).
		equal( arr1._lastIndexOf(7), 4).
		equal( arr1._lastIndexOf("3"), 7).
		equal( arr1._lastIndexOf(true), 8).
		equal( arr1._lastIndexOf(undef), 9).
		equal( arr1._lastIndexOf(8), -1).
		equal( arr1._lastIndexOf("7"), -1).
		equal( arr1._lastIndexOf("8"), -1).
		equal( arr1._lastIndexOf("true"), -1).
		equal( arr1._lastIndexOf(false), -1).
		equal( arr1._lastIndexOf(null), -1).
	it ( "should have reduce").
		equal( arr2._reduce(sum), 6 ).
		equal( arr2._reduce(sum, 0), 6 ).
		equal( arr2._reduce(sum, 1), 7 ).
	it ( "should have reduceRight").
		equal( arr2._reduceRight(sum), 6 ).
		equal( arr2._reduceRight(sum, 0), 6 ).
		equal( arr2._reduceRight(sum, 1), 7 ).
	
	it ( "should have every").
		equal( [2, 4, 6, 8]._every(function(i){return !(i%2)}), true).
		equal( [2, 5, 6, 8]._every(function(i){return !(i%2)}), false).

	it ( "should have some").
		equal( [2, 4, 6, 8]._some(function(i){return i==4}) , true ).
		equal( [2, 4, 6, 8]._some(function(i){return i==5}), false ).

	it ( "should have filter").
		run(function(){
			res = arr._filter(function(val, key){return val == 2 || key == 3});
		}).
		equal( res.join(), "2,4,2" ).

	it ( "should have filter").
		run(function(){
			res = [];
			arr._forEach(function(val, key){res.push(val+key)});
		}).
		equal( res.join(), "1,3,5,7,6,10" ).

	it ( "should have filter").
		run(function(){
			res = arr._map(function(val, key){return (val+key)});
		}).
		equal(res.join(), "1,3,5,7,6,10").




describe("String").
done()



function sum(a, b){
	return a + b
}

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
	}
	map['Lorem ipsum dolor sit amet, consectetuer adipiscing elit, '+
	    'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '+
	    'aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud '+
	    'exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea '+
	    'commodo consequat. Duis autem vel eum iriure dolor in hendrerit in '+
	    'vulputate velit esse molestie consequat, vel illum dolore eu '+
	    'feugiat nulla facilisis at vero eros et accumsan et iusto odio '+
	    'dignissim qui blandit praesent luptatum zzril delenit augue duis '+
	    'dolore te feugait nulla facilisi. Nam liber tempor cum soluta '+
	    'nobis eleifend option congue nihil imperdiet doming id quod mazim '+
	    'placerat facer possim assum. Typi non habent claritatem insitam; '+
	    'est usus legentis in iis qui facit eorum claritatem. '+
	    'Investigationes demonstraverunt lectores legere me lius quod ii '+
	    'legunt saepius. Claritas est etiam processus dynamicus, qui '+
	    'sequitur mutationem consuetudium lectorum. Mirum est notare quam '+
	    'littera gothica, quam nunc putamus parum claram, anteposuerit '+
	    'litterarum formas humanitatis per seacula quarta decima et quinta '+
	    'decima. Eodem modo typi, qui nunc nobis videntur parum clari, '+
	    'fiant sollemnes in futurum.": "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQs'+
	    'IGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkaWFtIG5vbnVtbXkgbml'+
	    'iaCBldWlzbW9kIHRpbmNpZHVudCB1dCBsYW9yZWV0IGRvbG9yZSBtYWduYSBhbGlxdW'+
	    'FtIGVyYXQgdm9sdXRwYXQuIFV0IHdpc2kgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1a'+
	    'XMgbm9zdHJ1ZCBleGVyY2kgdGF0aW9uIHVsbGFtY29ycGVyIHN1c2NpcGl0IGxvYm9y'+
	    'dGlzIG5pc2wgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyB'+
	    'hdXRlbSB2ZWwgZXVtIGlyaXVyZSBkb2xvciBpbiBoZW5kcmVyaXQgaW4gdnVscHV0YX'+
	    'RlIHZlbGl0IGVzc2UgbW9sZXN0aWUgY29uc2VxdWF0LCB2ZWwgaWxsdW0gZG9sb3JlI'+
	    'GV1IGZldWdpYXQgbnVsbGEgZmFjaWxpc2lzIGF0IHZlcm8gZXJvcyBldCBhY2N1bXNh'+
	    'biBldCBpdXN0byBvZGlvIGRpZ25pc3NpbSBxdWkgYmxhbmRpdCBwcmFlc2VudCBsdXB'+
	    '0YXR1bSB6enJpbCBkZWxlbml0IGF1Z3VlIGR1aXMgZG9sb3JlIHRlIGZldWdhaXQgbn'+
	    'VsbGEgZmFjaWxpc2kuIE5hbSBsaWJlciB0ZW1wb3IgY3VtIHNvbHV0YSBub2JpcyBlb'+
	    'GVpZmVuZCBvcHRpb24gY29uZ3VlIG5paGlsIGltcGVyZGlldCBkb21pbmcgaWQgcXVv'+
	    'ZCBtYXppbSBwbGFjZXJhdCBmYWNlciBwb3NzaW0gYXNzdW0uIFR5cGkgbm9uIGhhYmV'+
	    'udCBjbGFyaXRhdGVtIGluc2l0YW07IGVzdCB1c3VzIGxlZ2VudGlzIGluIGlpcyBxdW'+
	    'kgZmFjaXQgZW9ydW0gY2xhcml0YXRlbS4gSW52ZXN0aWdhdGlvbmVzIGRlbW9uc3RyY'+
	    'XZlcnVudCBsZWN0b3JlcyBsZWdlcmUgbWUgbGl1cyBxdW9kIGlpIGxlZ3VudCBzYWVw'+
	    'aXVzLiBDbGFyaXRhcyBlc3QgZXRpYW0gcHJvY2Vzc3VzIGR5bmFtaWN1cywgcXVpIHN'+
	    'lcXVpdHVyIG11dGF0aW9uZW0gY29uc3VldHVkaXVtIGxlY3RvcnVtLiBNaXJ1bSBlc3'+
	    'Qgbm90YXJlIHF1YW0gbGl0dGVyYSBnb3RoaWNhLCBxdWFtIG51bmMgcHV0YW11cyBwY'+
	    'XJ1bSBjbGFyYW0sIGFudGVwb3N1ZXJpdCBsaXR0ZXJhcnVtIGZvcm1hcyBodW1hbml0'+
	    'YXRpcyBwZXIgc2VhY3VsYSBxdWFydGEgZGVjaW1hIGV0IHF1aW50YSBkZWNpbWEuIEV'+
	    'vZGVtIG1vZG8gdHlwaSwgcXVpIG51bmMgbm9iaXMgdmlkZW50dXIgcGFydW0gY2xhcm'+
	    'ksIGZpYW50IHNvbGxlbW5lcyBpbiBmdXR1cnVtLg=="

	var test = TestCase("Base64");
	
	for (var key in map) if (map.hasOwnProperty(key)) test.compare(btoa(key), map[key], "base64_encode btoa");
	for (var key in map) if (map.hasOwnProperty(key)) test.compare(key, atob(map[key]), "base64_decode atob");
	
	test.done();

}();

//*/

