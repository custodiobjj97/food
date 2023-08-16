export default function initMenuMobile() {
    const toggle = document.querySelector('.toggle')

    function activeToggle(event) {
        if (event.type === 'touchstart') {
            event.preventDefault()
        }

        const menu = document.querySelector('.list-menu')
        const icon = document.querySelector('.hamburger')
        menu.classList.toggle('active')
        icon.classList.toggle('active')
    }
    ['click','touchstart'].forEach(event => {toggle.addEventListener(event, activeToggle)})
}