import TweenLite from 'gsap'

export default class ScrollProgress {

    constructor(el) {
        this.DOM = { el: el }
        this.elementHeight = 0
        this.windowHeight = 0
        this.start = -1
        this.end = -1
        this.lastYPosition = 0
        this.scrollRatio = -1
        this.easedScroll = -1
        this.ticking = false
        this.init()
    }

    init() {
        console.log('INIT ScrollProgress', this.DOM.el)
        //this.setTimeLine()
        //this.addListeners()
        //this.resize()   
        const timeline = new TimelineLite()
        timeline.from(this.DOM.el, 1.8, {opacity: 0})
        console.log(timeline.progress())
        timeline.play()
        console.log(timeline.progress())
    }

    addListeners() {

        window.addEventListener('resize', () => {
            this.resizeThrottler(this)
            }, false)

        window.addEventListener('scroll', () => {
                this.scrollThrottler(this)
            }, false)
    }

    resizeThrottler(ref) {
        const that = ref
        ref.resize()
    }

    scrollThrottler(ref) {
        const that = ref
        if (!this.ticking) {
            window.requestAnimationFrame( () => {
                that.scrollUpdate(window.scrollY)
                this.ticking = false
            })
        }
        this.ticking = true
    }

    getOffset() {
        const bodyRect = document.body.getBoundingClientRect()
        const elemRect = this.DOM.el.getBoundingClientRect()
        const offset = elemRect.top - bodyRect.top            
        return offset
    }

    getDocumentHeight() {
        const html = document.documentElement
        return Math.max(
            document.body.scrollHeight, 
            document.body.offsetHeight,
            html.clientHeight, 
            html.scrollHeight, 
            html.offsetHeight
        )
    }

    getPositionStart() {
        const offset = this.getOffset()
        const positionTop = offset - this.windowHeight
        if ( positionTop > 0) {
            return positionTop
        } else {
            return 0
        }
    }

    getPositionEnd() {
        const offset = this.getOffset()
        const documentHeight = this.getDocumentHeight()
        const positionBottom = offset + this.elementHeight
        if (positionBottom > documentHeight - this.windowHeight ) {
            return documentHeight - this.windowHeight
        } else {
            return positionBottom
        }
    }

    resize() {
        this.elementHeight = this.DOM.el.offsetHeight
        this.windowHeight = window.innerHeight
        this.start = this.getPositionStart()
        this.end = this.getPositionEnd()
        console.log('elementHeight :', this.elementHeight)
        console.log('windowHeight :', this.windowHeight)
        console.log('start :', this.start)
        console.log('end :', this.end)
    }

    updateMainTimeLine() {
        if (this.mainTL !== null) {     
            console.log('easedScroll', this.easedScroll)           
            this.mainTL.progress(this.easedScroll).play()
        }
    }

    scrollUpdate(ref) {

        const scrollValue = ref
        const before = scrollValue < this.start
        const after = scrollValue > this.end
/*
        console.log('scrollValue :', scrollValue)            
        console.log('lastYPosition :', this.lastYPosition)            
        console.log('before :', before)
        console.log('after :', after)
*/
        if (scrollValue <= this.end && scrollValue >= this.start - this.windowHeight) {
            if (scrollValue !== this.lastYPosition) {
                
                this.scrollRatio = (scrollValue + this.windowHeight - this.start) / this.elementHeight
                //console.log('scrollRatio', this.scrollRatio)

                this.scrollTween = new TweenLite(this, 1, {
                    easedScroll: this.scrollRatio,
                    ease: Power3.easeOut,
                    onUpdate: () => this.updateMainTimeLine()
                })

                this.lastYPosition = scrollValue
            }                              
        }

        if (before || after){
            // action avant et aprés
        } else {
            // action sur la zome de scroll de l'element
        }
    }

    setTimeLine() {
        
        this.mainTL && delete this.mainTL

        this.mainTL = new TimelineLite()
        this.mainTL.stop()

        const timeline = new TimelineLite()
        const halfHeight = window.innerHeight / 2

        const banner = document.querySelector('.banner')
        const intro = document.getElementById('intro')
        const services = document.getElementById('services')
        const works = document.getElementById('works')
        const teams = document.getElementById('teams')
        const testimonials = document.getElementById('testimonials')
        const contact = document.getElementById('contact')
        const footer = document.querySelector('.footer')

        console.log('creation tl :', this.mainTL)

        timeline

            .from(this.DOM.el, .8, {
                opacity: 0
            })
        this.mainTL.add(timeline, 0)       
    }
}
