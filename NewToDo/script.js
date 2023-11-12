const obj = {
    btn: document.querySelector('#btn'),
    inputName: document.querySelector('.top_name'),
    inputText: document.querySelector('#top_text'),
    block1: document.querySelector('#block1'),
    block2: document.querySelector('#block2'),
    block3: document.querySelector('#block3'),
}

let usersTask = [

]
let value = 1

const creatingArr = () => {
    if(obj.inputName.value != '') {
        value = Math.random()*20000
        value2 = Math.floor(value)
        console.log(value2)
        usersTask.push({
            name: obj.inputName.value ,
            text: obj.inputText.value ,
            group: 1,
            id: value2,
            delete: false
        })
        obj.inputName.value = ''
        obj.inputText.value = ''
    }
    placeBlock()
}
let myBtns = ''
let myReverseBtns = ''
let myBtnsToDelete = ''
const placeBlock = () => {
    obj.block1.innerHTML = ''
    obj.block2.innerHTML = ''
    obj.block3.innerHTML = ''
    usersTask.forEach((item, index) => {
        localStorage.setItem('user', JSON.stringify(usersTask))
        if(item.group == 1) {
            obj.block1.innerHTML += `
            <div class="down_block_item">
            <p class="down_block_item_name">${item.name}</p>
            <p class="down_block_item_text">${item.text}</p>
            <div class="down_block_item_btns">
                <div id="id3" class="down_block_item_btns_prev">
                    <img class="down_block_item_btns_prev_img" src="./img/arrow 2.svg" alt="">
                    <img class="down_block_item_btns_prev_img1" src="./img/arrow 1.svg" alt="">
                </div>
                <div class="down_block_item_btns_both">
                    <div id="id4" class="down_block_item_btns_both_delete">
                        <img class="down_block_item_btns_both_delete_img" src="./img/delete 2.svg" alt="">
                        <img class="down_block_item_btns_both_delete_img1" src="./img/delete 1.svg" alt="">
                    </div>
                    <p class="none">${item.id}</p>
                    <div id="id2" class="down_block_item_btns_both_next">
                        <img class="down_block_item_btns_both_next_img" src="./img/arrow 2.svg" alt="">
                        <img class="down_block_item_btns_both_next_img1" src="./img/arrow 1.svg" alt="">
                    </div>
                    <p class="none">${item.id}</p>
                </div>
                <p class="none">${item.id}</p>
                
            </div>
        </div>
            `
        }
        if(item.group == 2) {
            obj.block2.innerHTML += `
            <div class="down_block_item">
            <p class="down_block_item_name">${item.name}</p>
            <p class="down_block_item_text">${item.text}</p>
            <div class="down_block_item_btns">
                <div id="id3" class="down_block_item_btns_prev">
                    <img class="down_block_item_btns_prev_img" src="./img/arrow 2.svg" alt="">
                    <img class="down_block_item_btns_prev_img1" src="./img/arrow 1.svg" alt="">
                </div>
                <div class="down_block_item_btns_both">
                    <div id="id4" class="down_block_item_btns_both_delete">
                        <img class="down_block_item_btns_both_delete_img" src="./img/delete 2.svg" alt="">
                        <img class="down_block_item_btns_both_delete_img1" src="./img/delete 1.svg" alt="">
                    </div>
                    <p class="none">${item.id}</p>
                    <div id="id2" class="down_block_item_btns_both_next">
                        <img class="down_block_item_btns_both_next_img" src="./img/arrow 2.svg" alt="">
                        <img class="down_block_item_btns_both_next_img1" src="./img/arrow 1.svg" alt="">
                    </div>
                    <p class="none">${item.id}</p>
                </div>
                <p class="none">${item.id}</p>
                
            </div>
        </div>
            `
        }
        if(item.group == 3) {
            obj.block3.innerHTML += `
            <div class="down_block_item">
            <p class="down_block_item_name">${item.name}</p>
            <p class="down_block_item_text">${item.text}</p>
            <div class="down_block_item_btns">
                <div id="id3" class="down_block_item_btns_prev">
                    <img class="down_block_item_btns_prev_img" src="./img/arrow 2.svg" alt="">
                    <img class="down_block_item_btns_prev_img1" src="./img/arrow 1.svg" alt="">
                </div>
                <div class="down_block_item_btns_both">
                    <div id="id4" class="down_block_item_btns_both_delete">
                        <img class="down_block_item_btns_both_delete_img" src="./img/delete 2.svg" alt="">
                        <img class="down_block_item_btns_both_delete_img1" src="./img/delete 1.svg" alt="">
                    </div>
                    <p class="none">${item.id}</p>
                    <div id="id2" class="down_block_item_btns_both_next">
                        <img class="down_block_item_btns_both_next_img" src="./img/arrow 2.svg" alt="">
                        <img class="down_block_item_btns_both_next_img1" src="./img/arrow 1.svg" alt="">
                    </div>
                    <p class="none">${item.id}</p>
                </div>
                <p class="none">${item.id}</p>
                
            </div>
        </div>
            `
        }

    })
    myBtns = document.querySelectorAll(`#id2`)
    myReverseBtns = document.querySelectorAll('#id3')
    myBtnsToDelete = document.querySelectorAll('#id4')
    next()
}



const next = () => {
    myBtns.forEach((item, index) => {
        item.addEventListener('click', () => {
            Sibling = item.nextElementSibling.textContent
            Num = parseInt(Sibling)
            usersTask.forEach((el) => {
                if(el.id == Num) {
                    if(el.group != 3) {
                        el.group += 1
                    }
                }
            })

            placeBlock()
        })
    })
    myReverseBtns.forEach((item) => {
        item.addEventListener('click', () => {
            Sibling = item.nextElementSibling.textContent
            Num = parseInt(Sibling)
            usersTask.forEach((el) => {
                if(el.id == Num) {
                    if(el.group != 1) {
                        el.group -= 1
                    }
                }
            })
            placeBlock()
        })
    })
    myBtnsToDelete.forEach(item => {
        item.addEventListener('click', () => {
            console.log(item)
            Sibling = item.nextElementSibling.textContent
            Num = parseInt(Sibling)
            usersTask.forEach((el, index) => {
                if(el.id == Num) {
                    usersTask.splice(index, 1)
                }
            })
            if(usersTask.length == 0) {
                localStorage.clear()
            }
            placeBlock()
        })
    })
    // myBtnsToDelete.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         Sibling = item.nextElementSibling.textContent
    //         Num = parseInt(Sibling)
    //         usersTask.forEach((el) => {
    //             if(el.id == Num) {
    //                 el.delete = true
    //             }
    //         })
    //     })
    // })

}

obj.btn.addEventListener('click', () => {
    creatingArr()
})

const raw = localStorage.getItem('user')
const person = JSON.parse(raw)

if(person.length != 0) {
    person.forEach(item => {
        usersTask.push({
            ...item
        })
    })
    placeBlock()
}
