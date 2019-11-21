<template>
	<div class="submenu select-none collapse-enter-active h-full p-4" v-click-outside="handleClose">
		<div class="flex p-4 items-center h-full" @click.stop="toggle(_uid)" >
			<div class="menu-icon">
				<slot name="icon"></slot>
			</div>
			<div class="font-medium ml-2 uppercase">
				<slot></slot>
			</div>
		</div>
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@leave="leave"
			@before-leave="beforeLeave"
			v-bind:css="false">
			<div v-show="active" :ref="_uid" class="side-submenu overflow-hidden border-l-2 border-indigo-500 py-0 rounded z-50 bg-white" :class="menuState.mode == 'horizontal' ? 'absolute' : 'relative'" style="min-width: 200px;">
				<slot name="menu"></slot>
			</div>
		</transition>
		
	</div>
</template>
<script>
import { addClass, removeClass } from '@/utils/dom' 
import ClickOutside from '@/directives/click-outside'
	export default {
		name: 'nl-submenu',
		inject: {
			menuState: {
				default: null
			}
		},
		directives: {
      ClickOutside
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
		  },
		  afterEnter(el) {
		    // for safari: remove class then reset height is necessary
		    removeClass(el, 'collapse-transition');
		    el.style.height = '';
		    el.style.overflow = el.dataset.oldOverflow;
		  },
		  beforeLeave: function (el) {
		  	el.dataset.oldPaddingTop = el.style.paddingTop;
  	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
  	    el.dataset.oldOverflow = el.style.overflow;

  	    el.style.height = el.scrollHeight + 'px';
  	    el.style.overflow = 'hidden';
		  },
		  leave: function (el, done) {
		  	if (el.scrollHeight !== 0) {
		  		addClass(el, 'collapse-transition');
		  	  // for safari: add class after set height, or it will jump to zero height suddenly, weired
		  	  
		  	  el.style.height = '0';
		  	  el.style.paddingTop = 0;
		  	  el.style.paddingBottom = 0;
		  	}
		  },
		  handleClose () {
		  	this.menuState.activeItem = null
		  }
		},
		mounted () {
		}
	}
</script>
<style lang="less">
	.collapse-transition {
	  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
	}
	// .collapse-enter-active  {
	//   transition: 3s all ease-in-out;
	// }
	// .collapse-enter{
	// 	transform: translateX(10px);
	// 	height: 0;
	// }
</style>