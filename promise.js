


/*
 * @version    1.2.0
 * @date       2015-11-20
 * @stability  3 - Stable
 * @author     Lauri Rooden <lauri@rooden.ee>
 * @license    MIT License
 */




!function (window) {
	var resolver
	, nativePromise = window.Promise
	, setImmediate = window.setImmediate || function (fn) { setTimeout(fn, 1) }

	// Older version of the spec had a resolver object
	// as the arg rather than a function
	window.Promise = nativePromise &&
		new nativePromise(function (r) { resolver = r }) &&
		isFn(resolver) ? nativePromise : Promise


	function Promise(fn) {
		var promise = this
		if (!(promise instanceof Promise && isFn(fn)))
			throw new Error("Use: new Promise(fn)")

		promise._d = []
		resolve(promise, fn)
	}

	Promise.prototype = {
		_s: null,
		then: function (onFulfilled, onRejected) {
			var promise = this
			return new Promise(function (resolve, reject) {
				handle(promise, [onRejected, onFulfilled, reject, resolve])
			})
		},
		"catch": function (onRejected) {
			return this.then(null, onRejected)
		}
	}

	function resolve(promise, fn, done, state) {
		function end(val) {
			if (!done) {
				promise._s = state || false
				promise._v = val
				for (done = 0; val = promise._d[done++]; ) {
					handle(promise, val)
				}
			}
		}
		try {
			fn(function (val) {
				if (val === promise)
					end(new TypeError("A promise resolved with itself"))
				if (!done) try {
					if (done = getThen(val)) {
						resolve(promise, done)
					} else {
						end(val, state = true)
					}
				} catch (e) {
					end(e)
				}
			}, end)
		} catch (e) {
			end(e)
		}
	}

	function handle(promise, fns) {
		if (promise._s === null) {
			promise._d.push(fns)
		} else setImmediate(function(cb) {
			cb = fns[+promise._s]
			if (isFn(cb)) try {
				fns[3](cb(promise._v))
			} catch (e) {
				fns[2](e)
			} else fns[+promise._s + 2](promise._v)
		})
	}

	function getThen(val, then) {
		return val && (typeof val == "object" || isFn(val)) &&
			isFn(then = val.then) && then.bind(val)
	}

	function isFn(fn) {
		return typeof fn == "function"
	}

	Promise.all = function (arr) {
		return new Promise(function (resolve, reject) {
			var i = 0
			, len = arr.length
			, remaining = len
			if (!len) resolve([])
			else for (arr = arr.slice(); i < len;) {
				resolveThen(i++)
			}
			function resolveThen(i, then) {
				try {
					if (then = getThen(arr[i]))
						then(function (val) {
							arr[i] = val
							resolveThen(i)
						}, reject)
					else if (!--remaining) resolve(arr)
				} catch (e) {
					reject(e)
				}
			}
		})
	}

	Promise.resolve = function (val) {
		if (val instanceof Promise) {
			return val
		}

		return new Promise(function (resolve) {
			resolve(val)
		})
	}

	Promise.reject = function (val) {
		return new Promise(function (resolve, reject) {
			reject(val)
		})
	}

	Promise.race = function (values) {
		return new Promise(function (resolve, reject, val, i) {
			for (i = 0; val = values[i++]; ) {
				val.then(resolve, reject)
			}
		})
	}
}(this)


