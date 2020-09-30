// kita membuat fungsi untuk memunculkan modal

const showModal = () => {
    // kita dapatkan elemen modal yang mau dimunculkan 
    let modal = document.getElementById('modalMenu')

    // kita atur styling element modalnya
    modal.style.display = 'flex'
}

const showClose = () => {
    let close = document.getElementById(
        'modalMenu'
    )
    close.style.display = 'none'

}
