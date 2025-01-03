function loader() {
    window.addEventListener('load', () => {
        document.querySelector('.loader-container').style.transform = 'translateY(-100%)'
    })
}
loader()