import { on } from '@/utils/dom'
const clickHandler = function (e) {
  console.log(e)

}
const createHandler = function (el, handler) {
  return function (e) {
    // console.log(this) 指向的是绑定这个事件的dom
    //使用closure扩展作用域拿到el
    if (el.contains(e.target)) {
    return false
    } else {
      handler()
    }
  }
}
export default {
  /*
    生命周期钩子：
    bind: 当指令第一次被绑定到元素的时候调用, 只会调用一次,可以在这个时候进行一次性的初始化设置
    inserted: 当被绑定元素被插入父组件的时候调用，这个时候的父元素是存在的但是未必被插入了文档中
    update： 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。
  */

  bind (el, binding, vnode) {
    //el 就是绑定了指令的元素的DOM
    on(document, 'mouseup', createHandler(el, binding.value))
  },

  inserted () {
    console.log('directive inserted')
  },
  unbind () {
    console.log('Opps directive unbind')
  }
}