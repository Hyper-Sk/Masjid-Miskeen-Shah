function headerSection() {
    let open = document.querySelector('.open')
    let close = document.querySelector('.close')
    let aside = document.querySelector('.aside')

    open.addEventListener('click', () => {
        aside.style.transform = 'translate(0)'
    })
    close.addEventListener('click', () => {
        aside.style.transform = 'translate(100%)'
    })

}
headerSection()