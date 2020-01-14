function truncation (text, stop, clamp) {
	if (text) {
		return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
	}
}

// function getCountryName(code, lang) {
//   const list = require(`./locales/countries/${lang}.json`)
//   let country = list.countries[code]
//   return country ? country : code
// }

function isEmpty (obj) {
	console.log('isEmpty')
	return !obj || JSON.stringify(obj) === '{}' || Object.keys(obj).length === 0
}

function isObject (obj) {
	return !obj || Object.prototype.toString.call(obj) === '[object Object]'
}
function getPrototype (param) {
	return Object.prototype.toString.call(param)
}

function isEqual (_origin, _target) {
	if (!_origin || !_target) {
		return false
	}	
	if (Object.keys(_origin).length !== Object.keys(_target).length) {
		return false
	}
	return Object.keys(_origin).every(key => {
		if (getPrototype(_origin) !== getPrototype(_target)) {
			return false
		}
		if (!isObject(_origin[key]) && _origin[key] !== _target[key]) {
			return false
		} else if (isObject(_origin[key])) {
			return isEqual(_origin[key], _target[key])
		}
		return true
	})
}

function debounce (fn, delay) {
	if (!fn) return
		console.log('debounce', this)
	let inDebounce
	return function () {
		clearTimeout(inDebounce)
		inDebounce = setTimeout(() => fn(...arguments), delay)
	}
}
export {
	truncation,
	isEmpty,
	isEqual,
	debounce
}