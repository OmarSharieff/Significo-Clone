function homePageAnimation() {
  gsap.set('.slidesm',{
    scale: 5
  })
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home',
      start: "top top",
      end: 'bottom bottom',
      scrub: 1
    }
  })
  
  tl.to('.vdodiv',{
    '--clip': '0%',
    ease: Power2,
  }, 'a')
  .to('.slidesm',{
    scale:1, 
    ease: Power2,
  }, 'a')
  .to('.rgt',{
    'xPercent': 10,
    stagger:.03, 
    ease: Power4,
  },'b')
  .to('.lft',{
    'xPercent':-10,
    stagger: .03, 
    ease: Power4,
  },'b')
}
homePageAnimation();

function realPageAnimation() {
  gsap.to('.slide', {
    scrollTrigger: {
      trigger: '.real',
      start: 'top top',
      end: 'bottom bottom',
      markers: true,
      scrub: 2
    },
    'xPercent': -200,
    ease: Power4
  })
}
realPageAnimation();
