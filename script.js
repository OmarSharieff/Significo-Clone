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
function realPageAnimation() {
  gsap.to('.slide', {
    scrollTrigger: {
      trigger: '.real',
      start: 'top top',
      end: 'bottom bottom',
      markers: true,
      scrub: 1
    },
    'xPercent': -200,
    ease: Power4
  })
}
function teamPageAnimation() {
  document.querySelectorAll('.listelem')
  .forEach((elem)=>{
    elem.addEventListener('mousemove',function(dets){
      gsap.to(this.querySelector('.picture'), {opacity: 1,x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX) , ease: Power4, duration: .5})
    })
    elem.addEventListener('mouseleave',function(dets){
      gsap.to(this.querySelector('.picture'), {opacity: 0, ease: Power4, duration: .5})
    })
  })  
}
realPageAnimation();
homePageAnimation();
teamPageAnimation();