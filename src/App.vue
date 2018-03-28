<template>
	<div id="app">
		<OnePage v-if="fontsOk" />
	</div>
</template>

<script>
	import config from './config.json'
	import { EventBus } from './event-bus.js'
	import webFontsLoaderTool from './utils/webFontsLoaderTool'
	import OnePage from './components/OnePage.vue'

	export default {
		name: 'app',
		data() {
			return {
				fontsOk: false,
				ticking: false
			}
		},

		components: {
			OnePage
		},

		created(){
			webFontsLoaderTool(
				config.families, 
				config.fontAwesome,
				() => {       
					console.log('font ok')	
					this.fontsOk = true		
				}
			)
		},

		mounted() {
			this.init()
			this.addListeners()
		},

		methods: {       

			init(){

			},

			addListeners() {
				window.addEventListener('resize', this.resizeThrottler, false)
            	window.addEventListener('scroll', this.scrollThrottler, false)
			},

			resizeThrottler() {
				if (!this.ticking) {
					window.requestAnimationFrame( () => {						
						EventBus.$emit('RESIZE')
						this.ticking = false
					})
				}
				this.ticking = true
			},

            scrollThrottler() {
                if (!this.ticking) {
                    window.requestAnimationFrame( () => {
						const refScroll = window.scrollY
                        this.$nextTick(() => EventBus.$emit('SCROLL', refScroll))
                        this.ticking = false
                    })
                }
                this.ticking = true
            },
		}
	}

</script>

<style lang="scss">
	@import "./assets/css/main";
</style>
