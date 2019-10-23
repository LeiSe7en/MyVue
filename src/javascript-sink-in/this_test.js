/*
function main () {
	console.log('this_test:main', x) // 这里寻找x的路径是: 自己的context => outer reference	(lexical context) 也就是声明这个函数时候的环境，也就是全局变量 打印出来的就是： 3
}

function foo () {
	var x = 2
	main()
	console.log('this_test:foo', x) // 2
}
var x = 3
foo()
*/


var obj = {
	hello: function () {
		console.log('obj.hello', this)
	}	
}
function foo () {
	return {
		hello: () => {console.log('foo.hello', this)}
	}
}
let hello = obj.hello 
hello() // window
obj.hello() // obj{hello: function()}