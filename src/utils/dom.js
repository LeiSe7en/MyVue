export function addClass (dom, classes) {
	if (!dom || !classes) return;
	let classArray = (classes || '').split(' ')
	classArray.forEach(item => {
		if (dom.classList) {
			dom.classList.add(item)
		} else if (!hasClass(dom, item)) {
			dom.className += ' ' + item
		}
	})
}

export function hasClass (el, className) {
	if (className.indexOf(' ') !== -1) return
	if (el.classList) {
		return el.classList.contains(className)
	} else {
		//为了防止这种情况：现在存在item-container这个class，需要添加container，但是如果不在两边加上空格，是添加不上的，所以添加空格确保判断的是整个class的名字
		return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1
	}
}	