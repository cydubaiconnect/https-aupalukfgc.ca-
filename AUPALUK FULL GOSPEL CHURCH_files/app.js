const links_container = document.querySelector('.links-container')
const sub_links = document.querySelector('.sub-links')

links_container.addEventListener('click', () => {
    sub_links.classList.toggle('show_links')
})


const burger = document.querySelector('.fa-bars')
const menu = document.querySelector('.accordion-content')

burger.addEventListener('click', () => menu.classList.toggle('show-menu'))