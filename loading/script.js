const line = document.querySelector('.block_line')
const input = document.querySelector('.input')
const start = document.querySelector('.start')
const value = document.querySelector('.p1')



const obj = {
    btn: document.querySelector(".block2_left_btn"),
    input1: document.querySelector('#input1'),
    input2: document.querySelector('#input2'),
    input3: document.querySelector('#input3'),
    input4: document.querySelector('#input4'),
    input5: document.querySelector('#input5'),
    input6: document.querySelector('#input6'),
    input7: document.querySelector('#input7'),
    input8: document.querySelector('#input8'),
    input9: document.querySelector('#input9'),
    input10: document.querySelector('#input10')
}



let currentDate = new Date()
let year = currentDate.getFullYear(); // Получить текущий год
let month = currentDate.getMonth(); // Получить текущий месяц (0-11, где 0 - январь)
let day = currentDate.getDate(); // Получить текущий день месяца
let hours = currentDate.getHours(); // Получить текущие часы
let minutes = currentDate.getMinutes(); // Получить текущие минуты
let seconds = currentDate.getSeconds();

const raw = localStorage.getItem('user')
const person = JSON.parse(raw)

let trueFalse2 = true







const listener = obj.btn.addEventListener('click', () => {
    console.log("123123123")
    if(obj.input1.value != 0 && obj.input2.value != 0 && obj.input3.value != 0 && obj.input6.value != 0 && obj.input7.value != 0 && obj.input8.value != 0) {
        trueFalse2 = false
        
        let startDate = new Date(`${obj.input1.value}-${obj.input2.value}-${obj.input3.value}`);
        startDate.setHours(obj.input4.value)
        startDate.setMinutes(obj.input5.value)

        let finishDate = new Date(`${obj.input6.value}-${obj.input7.value}-${obj.input8.value}`);
        finishDate.setHours(obj.input9.value)
        finishDate.setMinutes(obj.input10.value)
        let currentDate = new Date()
        let year = currentDate.getFullYear(); 
        let month = currentDate.getMonth(); 
        let day = currentDate.getDate(); 
        let hours = currentDate.getHours(); 
        let minutes = currentDate.getMinutes(); 
        let seconds = currentDate.getSeconds();
        if(startDate < finishDate) {
            const local = {
                input1: obj.input1.value,
                input2: obj.input2.value,
                input3: obj.input3.value,
                input4: obj.input4.value,
                input5: obj.input5.value,
                input6: obj.input6.value,
                input7: obj.input7.value,
                input8: obj.input8.value,
                input9: obj.input9.value,
                input10: obj.input10.value
            }
    
            localStorage.setItem('user', JSON.stringify(local))
            
    
            
            let trueFalse = true
            const x = () => {
                if(trueFalse) {
                    line.style.backgroundColor = "#5D4BCC"
                    let currentDate = new Date()
                    let year = currentDate.getFullYear(); 
                    let month = currentDate.getMonth(); 
                    let day = currentDate.getDate(); 
                    let hours = currentDate.getHours(); 
                    let minutes = currentDate.getMinutes(); 
                    let seconds = currentDate.getSeconds();
                    let differenceInMilliseconds = finishDate.getTime() - startDate.getTime();
                    let differenceFromStart = currentDate.getTime() - startDate.getTime();
                    let percent = (differenceFromStart / differenceInMilliseconds) * 100;
                    let newPersent = Number(percent.toFixed(2));
                    if(newPersent <= 100) {
                        let newNumber = Math.floor(newPersent);
                        line.innerHTML = `
                            <p class="p1">${newNumber}%</p>
                        `
                        line.style.transitionDuration = "1s";
                        line.style.width = `${newPersent}%`;
                        return newPersent;
                    } else {
                        line.innerHTML = `
                            <p class="p1">100%</p>
                        `
                        line.style.width = "100%";
                        line.style.backgroundColor = "#036e0c"
                        trueFalse = false
                    }
                }
            }
            result = x()
            
            const funTime = () => {
                if(result <= 100) {
                    x()
                } 
                setTimeout(() => {
                    funTime()
                }, 1000);
            }
            funTime()   
            obj.input1.value = ''
            obj.input2.value = ''
            obj.input3.value = ''
            obj.input4.value = ''
            obj.input5.value = ''
            obj.input6.value = ''
            obj.input7.value = ''
            obj.input8.value = ''
            obj.input9.value = ''
            obj.input10.value = ''
        } else (
            alert('Start date cannot be bigger than finish date')
        )

    
    }
})

if(person.input1 != 0) {
    const newPerson = {
        input1: parseInt(person.input1),
        input2: parseInt(person.input2),
        input3: parseInt(person.input3),
        input4: parseInt(person.input4),
        input5: parseInt(person.input5),
        input6: parseInt(person.input6),
        input7: parseInt(person.input7),
        input8: parseInt(person.input8),
        input9: parseInt(person.input9),
        input10: parseInt(person.input10)
    }
    console.log(newPerson)
    
    let startDate = new Date(`${newPerson.input1}-${newPerson.input2}-${newPerson.input3}`);
    startDate.setHours(newPerson.input4)
    startDate.setMinutes(newPerson.input5)

    let finishDate = new Date(`${newPerson.input6}-${newPerson.input7}-${newPerson.input8}`);
    finishDate.setHours(newPerson.input9)
    finishDate.setMinutes(newPerson.input10)

    const x = () => {
        if(trueFalse2) {
            line.style.backgroundColor = "#5D4BCC"
            let currentDate = new Date()
            let year = currentDate.getFullYear(); 
            let month = currentDate.getMonth(); 
            let day = currentDate.getDate(); 
            let hours = currentDate.getHours(); 
            let minutes = currentDate.getMinutes(); 
            let seconds = currentDate.getSeconds();
            let differenceInMilliseconds = finishDate.getTime() - startDate.getTime();
            let differenceFromStart = currentDate.getTime() - startDate.getTime();
            let percent = (differenceFromStart / differenceInMilliseconds) * 100;
            let newPersent = Number(percent.toFixed(2));
            if(newPersent <= 100) {
                let newNumber = Math.floor(newPersent);
                line.innerHTML = `
                    <p class="p1">${newNumber}%</p>
                `
                line.style.width = `${newPersent}%`;
                return newPersent;
            } else {
                line.innerHTML = `
                    <p class="p1">100%</p>
                `
                line.style.width = "100%";
                line.style.backgroundColor = "#036e0c"
                trueFalse = false
            }
        }
    }
    result = x()
    
    const funTime = () => {
        if(result <= 100) {
            x()
        } 
        setTimeout(() => {
            funTime()
        }, 1000);
    }
    funTime()   
    obj.input1.value = ''
    obj.input2.value = ''
    obj.input3.value = ''
    obj.input4.value = ''
    obj.input5.value = ''
    obj.input6.value = ''
    obj.input7.value = ''
    obj.input8.value = ''
    obj.input9.value = ''
    obj.input10.value = ''
} 
