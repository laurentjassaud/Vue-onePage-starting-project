<template>
    <header id="header" ref="header">
        <div class="header-content">
            <a class="logo" href="/"><img src="../assets/images/logo.png" alt=""></a>
            <nav class="navigation" role="navigation">
                <ul class="primary-nav">
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#teams">Our Team</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a href="#" class="nav-toggle">Menu<span></span></a>
        </div>
    </header> 
</template>

<script>

    import { EventBus } from '../event-bus.js'
    
    export default {
        name: 'NavigationBasic',
        props: ['sections'],
        data() {
			return {
                listLinks: [],
                decal: -1,
                jump: false
            }
        },

        mounted() {
            this.init()
            this.addListeners()
        },

        methods: {

            init() {
                this.decal = this.$el.querySelector('nav').getBoundingClientRect().height  
                this.listLinks = this.$parent.$el.querySelectorAll('.navigation a')
                this.scrollUpdate(window.scrollY)              
            },

            addListeners() {
                EventBus.$on('RESIZE', this.resize)
                EventBus.$on('SCROLL', (refScroll) => this.scrollUpdate(refScroll))
                Array.from(this.listLinks).map( (link, index) => {                    
                    link.addEventListener('click', (e) => {
                        e.preventDefault()
                        this.jump = true
                        this.scrollToSection(index)
                    })
                })
            },
            
            resize() {
            },

            placeStickyMenu(refScroll) {
                if (refScroll >= 50) {
                    this.$refs.header.classList.add('fixed')
                } else {
                    this.$refs.header.classList.remove('fixed')
                }
            },

            scrollToSection(index){
                const refHauteur = (this.sections[index].top) - this.decal + 1
                this.removeActiveClass()
                this.addActiveClass(index)

                // a optimiser pour maitriser un vrai callback
                window.scroll({
                    top: refHauteur, 
                    left: 0, 
                    behavior: 'smooth' 
                })

                setTimeout(() => {
                    this.jump = false    
                }, 1000)
            },

            scrollUpdate(refScroll) {

                //console.log(refScroll,'----------------------refScroll')              
                this.placeStickyMenu(refScroll)                
                
                if(!this.jump){
                    Array.from(this.sections).map(( section, index ) => {

                        if( refScroll + this.decal >= section.top  && refScroll + this.decal <= section.bottom) {     
                            this.removeActiveClass()
                            this.addActiveClass(index)
                        }          
                    }) 
                    // a tester pour modifier
                    // me semble inutile ou lourd               
                    if (refScroll + this.decal < this.sections[0].top) {
                        this.removeActiveClass()
                    }
                }
            },
            
            removeActiveClass() {
                Array.from(this.listLinks).map( 
                    link => link.classList.remove('active')
                )
            },

            addActiveClass(index) {
                this.listLinks[index].classList.add('active')  
            }
        }
    }
    

</script>
