window.addEventListener('load', ()=> {
    
    const initModalWindow = () => {
        const modalShowTrigers = document.querySelectorAll('[data-triger]')
        const modalCloseTriger= document.querySelectorAll('[data-close-modal]')

        modalShowTrigers.forEach(triger => {
            triger.addEventListener('click', ()=> {
                const trigerData = triger.getAttribute('data-triger')
                document.getElementById(trigerData).classList.add('show')
           
        })
    })

         modalCloseTriger.forEach(button => {
            button.addEventListener('click', ()=> {
                document.querySelector('.modal.show').classList.remove('show')
                button.closest('.modal').classList.remove('show')
            })
        })
    }

    initModalWindow()
}) 