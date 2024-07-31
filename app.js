const container = document.querySelector(".game-container")
const solveBtn = document.querySelector(".solve-btn")
const squares = 81
const submission = []

for(i=0; i < squares; i++){
    const inputElements = document.createElement('input')
    inputElements.setAttribute('type', 'number')
    inputElements.setAttribute('min', 0)
    inputElements.setAttribute('max', 9)

    if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
         ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53)  ||
         ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53) 
    ){
        inputElements.classList.add('odd-section')
    }else{
        inputElements.classList.add('section')
    }

    container.appendChild(inputElements)
}

function joinValues(){
    const inputs = document.querySelectorAll("input")
    inputs.forEach( input =>{
        if(input.value){
            submission.push(input.value)
        }else{
            submission.push('.')
        }
    })
    console.log(submission)
}


solveBtn.addEventListener('click', joinValues)