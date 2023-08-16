export default function initAnimationScroll() {
    const sections = document.querySelectorAll('[data-scroll]')
    const halfHeight = window.innerHeight * 0.6
    const showScroll = () => {
        for(let i = 0; i<sections.length; i++) {
        const sectionTop = sections[i].getBoundingClientRect().top
        const isSectionVisible = (sectionTop - halfHeight) < 0
          if (isSectionVisible) {
           sections[i].classList.add('active')
          } else {
              sections[i].classList.remove('active')
           }
        }
    }
   
    window.addEventListener('scroll', showScroll)
    
}