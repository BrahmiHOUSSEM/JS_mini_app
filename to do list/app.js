const input = document.getElementById('input')
const addBtt = document.getElementById('add-btt')

const tasks = document.querySelector('.tasks')

function addTask() {

    if (input.value != '') {
        const taskHolder = document.createElement('div')

        taskHolder.innerHTML = `
            <div>
            <input type="checkbox">
            <p> ${input.value} </p>
            </div>
            <button class='dlt-btt'>x</button>
        `
        
        taskHolder.classList.add('task')
        input.value = ''
        tasks.appendChild(taskHolder)

        const dltButton = document.querySelectorAll('.dlt-btt')

        dltButton.forEach((e) => {
            e.addEventListener('click',(event) => {
                event.target.parentNode.remove()
                })
        }

        )

    }
}

function entrerPress(press) {
    if (press.key === 'Enter') {
        addTask() 
    }
}
document.addEventListener('keydown',entrerPress)