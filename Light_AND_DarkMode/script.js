const fullDarkModeCheckbox = document.querySelector('#full-dark-mode')
const divDarkModeCheckbox = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')

fullDarkModeCheckbox.addEventListener('change', (e) => {
    if(fullDarkModeCheckbox.checked){
        document.body.classList.add('dark')
        container.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark')
    }
})

divDarkModeCheckbox.addEventListener('change', (e) => {
    if(divDarkModeCheckbox.checked){
        container.classList.add('dark')
    }
    else{
        container.classList.remove('dark')
    }
})