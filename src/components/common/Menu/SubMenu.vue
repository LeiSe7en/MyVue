<template>
	<div class="submenu select-none collapse-enter-active" >
		<div class="flex p-1" @click.stop="toggle(_uid)" >
			<div class="menu-icon">
				<slot name="icon"></slot>
			</div>
			<div class="font-medium ml-2">
				<slot></slot>
			</div>
		</div>
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@leave="leave">
			<div v-show="active" :ref="_uid" class="side-submenu bg-gray-300 overflow-hidden border-l-2 border-indigo-500 py-0">
				<slot name="menu"></slot>
			</div>
		</transition>
		
	</div>
</template>
<script>
import { addClass, removeClass } from '@/utils/dom' 
	export default {
		name: 'nl-submenu',
		inject: {
			menuState: {
				default: null
			}
		},
		computed: {
			active () {
				return this._uid == this.menuState.activeItem
			}
		},
		methods: {
			toggle (menuId) {
				this.menuState.activeItem = this.active ? null : this._uid
				console.log(this.menuState)
			},
			beforeEnter: function (el) {
				console.log('beforeEnter')
		    addClass(el, 'collapse-transition');
	      if (!el.dataset) el.dataset = {};

	      el.dataset.oldPaddingTop = el.style.paddingTop;
	      el.dataset.oldPaddingBottom = el.style.paddingBottom;

	      el.style.height = '0';
	      el.style.paddingTop = 0;
	      el.style.paddingBottom = 0;
		  },
		  enter: function (el, done) {
		  	el.dataset.oldOverflow = el.style.overflow;
		  	if (el.scrollHeight !== 0) {
		  	  el.style.height = el.scrollHeight + 'px';
		  	  el.style.paddingTop = el.dataset.oldPaddingTop;
		  	  el.style.paddingBottom = el.dataset.oldPaddingBottom;
		  	} else {
		  	  el.style.height = '';
		  	  el.style.paddingTop = el.dataset.oldPaddingTop;
		  	  el.style.paddingBottom = el.dataset.oldPaddingBottom;
		  	}
		  	el.style.overflow = 'hidden';
		    done()
		  },
		  beforeLeave () {
		  	removeClass(el, 'collapse-transition');
		  	el.style.height = '';
		  	el.style.overflow = el.dataset.oldOverflow;
		  },
		  leave: function (el, done) {
		  	if (el.scrollHeight !== 0) {
		  	  // for safari: add class after set height, or it will jump to zero height suddenly, weired
		  	  addClass(el, 'collapse-transition');
		  	  el.style.height = 0;
		  	  el.style.paddingTop = 0;
		  	  el.style.paddingBottom = 0;
		  	}
		   	done()
		  }
		},
		mounted () {
			console.log(this._uid)
		}
	}
</script>
<style lang="less">
	.collapse-transition {
	  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
	}
	.collapse-enter-active  {
	  transition: 3s all ease-in-out;
	}
	.collapse-enter{
		transform: translateX(10px);
		height: 0;
	}
</style>