import * as modalController from './modal-controller.js'

export function init () {
    const contactLInk = document.querySelector(".contact-link")
    contactLInk.addEventListener('click', handleContactLinkClick)
}

function handleContactLinkClick(event) {
    event.preventDefault()
    modalController.showModal()
}