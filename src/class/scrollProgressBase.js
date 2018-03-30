import animationsParSections from './animationsParSections'
import TweenLite from 'gsap'

export default class ScrollProgress {

    constructor(el) {
        this.DOM = { el: el }
        this.sectionsAnimationDuration = 3
        this.ArrayEls = ['intro', 'services', 'works', 'teams', 'testimonials', 'contact', 'footer']
        this.refElement = []
        this.init()
    }

    init() {
        console.log('INIT ScrollProgress', this.DOM.el)
        this.resize()
        this.setTimeLine()
        this.addListeners()
    }

    addListeners() {
        window.addEventListener('scroll', () => {
            this.scrollThrottler(this)
        }, false)
    }

    resize() {
        this.elementHeight = this.DOM.el.getBoundingClientRect().height
        this.windowHeight = window.innerHeight

        // céer les références à animer
        this.ArrayEls.map((el, index) => {
            const ref = {}
            ref.el = document.getElementById(this.ArrayEls[index])
            ref.indice = ref.el.getBoundingClientRect().height / (this.elementHeight - this.windowHeight * 1.5)
            ref.callback = animationsParSections[index]
            this.refElement.push(ref)
            console.log(ref)
        })
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

    animationOnUpdate(){
        console.log('smooth',this.easedScroll)
        this.mainTL.progress(this.easedScroll)
    }

    scrollUpdate(scrollValue) {
        const scrollRatio = scrollValue / ( this.elementHeight - this.windowHeight )
        console.log('scrollRatio',scrollRatio)
        this.scrollTween = new TweenLite(this, 1, {
            easedScroll: scrollRatio,
            ease: Power3.easeOut,
            onUpdate: () => this.animationOnUpdate()
        })
    }

    setTimeLine() {
        let AnimationIntraSection = (callback) => {
            callback()
        }

        this.mainTL && delete this.mainTL
        this.mainTL = new TimelineLite()
        this.mainTL.stop()
        
        this.timeline = new TimelineLite()
        this.refElement.map( (rel) => {
            this.timeline.add( 
                TweenLite.from( rel.el, rel.indice * this.sectionsAnimationDuration , {
                    opacity: 0,
                    scale: .5,
                    top: 200,
                    ease: Power4.easeOut,
                    delay: 0.5                
                })
            )

            // à revoir
            // pas fonctionnel pour l'instant
            /*
            if (rel.callback){
                this.timeline.call(
                    AnimationIntraSection,
                    [rel.callback]
                )
            }
            */
        })

        this.mainTL.add(this.timeline, 0)
        console.log('creation tl :', this.timeline)
    }
}
