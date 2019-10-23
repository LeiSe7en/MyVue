function Test (options) {
	this.options = {instanceAttr: 1111}
  this.init()
}
Test.ctorOptions = {constructorAttr: 12121}
Test.prototype.init = function () {
	// console.log(this.constructor.options) //{constructorAttr: 12121}
	console.log(this) // {instanceAttr: 1111}
	console.log('ssss', this.ctorOptions)
	console.log('prototype init')
}

function TestPrototypeFunction () {}
TestPrototypeFunction.prototype.sayHi = function () {console.log('Hi')}
TestPrototypeFunction.sayStaticHi = function () {console.log('Static hi')}
let instance = new TestPrototypeFunction()
console.log(instance.sayStaticHi) // ƒ () {console.log('Hi')}


let Obj = {}

Object.defineProperty(Obj, 'name', {
	value: 'Nelson', //数据描述符
	enumerable: false, 
	writable: true, 
	/**
	存取描述符和数据描述符不能同时使用
	get: function () {

	},
	set: function () {

	}**/
})
console.log(Obj) // {name: Nelson} 
console.log(JSON.parse(JSON.stringify(Obj))) // {} /*因为不可枚举的属性，stringify是不能字符串化的*/ 
export default Test

let testArray = [1,2,3,4,5,6,7,8,9,10,11,12]
for (let i = 0; i < testArray.length; i++) {
	console.log('testArray', i)
}

export class TestClass {
	constructor () {

	}
	static sayStatic () {
		console.log('Static')
	}
	/*在class内部定义的公有方法实际上是定义在原型链上面的*/
	sayHi () {
		console.log('Hi')
	}

	/*
		Class 里面的get/set函数实际上都是定义在prototype的html属性的discriptor上面的
	*/
	get html () {
		return 'html'
	}

	set html (val) {
		console.log('Set html to' + 'val')
	}
}

let desc = Object.getOwnPropertyDescriptor(TestClass.prototype, 'html')
console.log(desc)
console.log(new TestClass().sayHi())
console.log(TestClass.sayStatic()) // Static

/*Uncaught TypeError: (intermediate value).sayStatic is not a function*/
// console.log(new TestClass().sayStatic()) 

