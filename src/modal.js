window.addEventListener('load', ()=> {
    
    const initModalWindow = () => {
        const triger = document.querySelector('#triger')
        const modal = document.querySelector('.modal')
        const closeWindow = document.querySelector('#close-window')

        triger.addEventListener('click', ()=> {
            modal.classList.add('show')
        })

        closeWindow.addEventListener('click', ()=> {
            modal.classList.remove('show')
        })
    }

    initModalWindow()
})