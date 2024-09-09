const menuBar = document.querySelector('.menu-bar')
const menuBarIcon = document.querySelector('.menu-bar i')
const drowpDownMenu = document.querySelector('.dropdown-menu')


menuBar.onclick = function () {
    drowpDownMenu.classList.toggle('open')
    const isOpen = drowpDownMenu.classList.contains('open')

    menuBarIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars-staggered'

}