

const intro = () => {

    TweenMax.staggerFrom(
        '#intro .col-md-6',
        1,
        { 
            scale: 0.5, 
            opacity: 0, 
            ease: Elastic.easeOut, 
            force3D: true 
        }, 
        0.6
    )
}

const animationsParSections = [

    intro,
    
]



export default animationsParSections