document.addEventListener("DOMContentLoaded", function() {
    console.log('Document is ready')
    const display = document.getElementById('calc-display')
    const buttons = document.getElementsByClassName('btn')
    
    /*buttons[0].addEventListener('click', function() {
        console.log('firstBTclick')
    })*/

    function evaluateResult() {
        let convertedValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("ln", "Math.log")
            .replace("π", "Math.PI")
            .replace("log", "Math.log10")
            .replace("e", "Math.E")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt")
        const result = eval(convertedValue)
        currentValue = result.toString()
        display.value = currentValue
    }

    let currentValue = ''
    for (let i = 0; i < buttons.length - 2; i++) {
        const button = buttons[i]
        button.addEventListener('click', function() {
            const value = button.innerText

            try {
                if (value == "AC") {
                    currentValue = ""
                    display.value = currentValue
                } else if (value == "=") {
                    evaluateResult()
                } else {
                    currentValue += value
                    display.value = currentValue
                }
            } catch (error) {
                console.error(error)
                currentValue = "error"
                display.value = currentValue
            }
            
        })
    }

    const nums = this.getElementById('nums')
    const numsPanel = this.getElementById('numsPanel')
    const funcPanel = this.getElementById('funcPanel')
    const func = this.getElementById('func')
    nums.addEventListener('click', function() {
        numsPanel.className = 'row gx-2 p-0 m-0'
        funcPanel.className = 'row gx-2 p-0 m-0 d-none'

        nums.className = 'btn btn-primary btn-sm mt-3'
        func.className = 'btn btn-ligth border btn-sm mt-3'
    })
    func.addEventListener('click', function() {
        numsPanel.className = 'row gx-2 p-0 m-0 d-none'
        funcPanel.className = 'row gx-2 p-0 m-0'

        nums.className = 'btn btn-ligth border btn-sm mt-3'
        func.className = 'btn btn-primary btn-sm mt-3'
    })
})