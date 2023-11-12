const obj = {
    place: document.querySelector('.place'),
    spend: document.querySelector('.cardspend'),
    earn: document.querySelector('.cardearn'),
    spendBtn: document.querySelector('#spendBtn'),
    earnBtn: document.querySelector('#earnBtn'),
    crossS: document.querySelector('#crossS'),
    crossE: document.querySelector('#crossE'),
    sumbitS: document.querySelector('#sumbitS'),
    sumbitE: document.querySelector('#sumbitE'),
    valueS: document.querySelector('#valueS'),
    valueE: document.querySelector('#valueE'),
    table: document.querySelector('#table'),
    total: document.querySelector('#total')
}


const list = [

]

const raw = localStorage.getItem('user')

let total = 0

const creating = () => {
    localStorage.clear()
    obj.table.innerHTML = ''
    total = 0
    list.forEach((item, index) => {
        if(item.id == 1) {
            obj.table.innerHTML += `
                <div class="block_table_earn">
                    <p class="block_table_earn_p1">+ ${item.sum}₴</p>
                    <img id="delete" class="block_table_earn_delete" src="./img/delete.svg" alt="">
                </div>
                <p class="none">${item.el}</p>
            `
            let totalInt = parseInt(item.sum) 
            total += totalInt
        } else {
            obj.table.innerHTML += `
                <div class="block_table_spend">
                    <p class="block_table_earn_p1">- ${item.sum}₴</p>
                    <img id="delete" class="block_table_earn_delete" src="./img/delete.svg" alt="">
                </div>
                <p class="none">${item.el}</p>
            `
            let totalInt = parseInt(item.sum) 
            total -= totalInt
        }
        
        
        localStorage.setItem('user', JSON.stringify(list))
    })
    obj.total.innerHTML = `
        Total cash: ${total} ₴
    `
    
    elements = document.querySelectorAll('#delete')
    

    elements.forEach((item, index) => {
        item.addEventListener('click', () => {
            list.splice(index, 1)
            creating()
        })
    })
    
    

}


if(raw) {
    const person = JSON.parse(raw)
    person.forEach(item => {
        list.push({
            ...item
        })
    })
    creating()
}





obj.spendBtn.addEventListener('click', () => {
    obj.place.classList.remove('none')
    obj.spend.classList.remove('none')
    obj.crossS.addEventListener('click', () => {
        obj.valueS.value = ''
        obj.place.classList.add('none')
        obj.spend.classList.add('none')
    })
    obj.sumbitS.addEventListener('click', () => {
        let random = Math.random()*20000 
        let randomValue = parseInt(random)
        if(obj.valueS.value > 0) {
            list.push({
                el: randomValue,
                id: 2,
                sum: obj.valueS.value,
            })
            obj.valueS.value = ''
            obj.place.classList.add('none')
            obj.spend.classList.add('none')

        }

        creating()
    })
    
})

obj.earnBtn.addEventListener('click', () => {
    obj.place.classList.remove('none')
    obj.earn.classList.remove('none')
    obj.crossE.addEventListener('click', () => {
        obj.place.classList.add('none')
        obj.earn.classList.add('none')
        obj.valueE.value = ''
    })
    obj.sumbitE.addEventListener('click', () => {
        let random = Math.random()*20000 
        let randomValue = parseInt(random)
        if(obj.valueE.value >= 1) {
            list.push({
                el: randomValue,
                id: 1,
                sum: obj.valueE.value,
            })
            obj.valueE.value = ''
            obj.place.classList.add('none')
            obj.earn.classList.add('none')
            creating()

        }
    })
    
})