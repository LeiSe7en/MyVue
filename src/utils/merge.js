export default function merge (target) {
	for (let i = 0; i < arguments.length; i++) {
		let source = arguments[i]
		for (let key in source) {
			if (source.hasOwnProperty(key) && source[key]) {
				target[key] = source[key]
			}
		}
	}
	return target
}