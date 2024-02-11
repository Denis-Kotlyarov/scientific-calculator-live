document.addEventListener("DOMContentLoaded", function() {
    console.log('Document is ready')
    const display = document.getElementById('calc-display')
    const buttons = document.getElementsByClassName('btn')
    
    /*buttons[0].addEventListener('click', function() {
        console.log('firstBTclick')
    })*/

    let currentValue = ''
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i]
        button.addEventListener('click', function() {
            const value = button.innerText

            

            currentValue += value
            display.value = currentValue
        })
    }
})