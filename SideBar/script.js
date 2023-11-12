const obj = {
    cart: document.querySelector('.header_block_cart'),
    cartmenu: document.querySelector('.cart'),
    cross: document.querySelector('.cart_cross'),
    main: document.querySelector('.main'),
    block: document.querySelector('.cart_block'),
    total: document.querySelector('.cart_total'),
    confirm: document.querySelector('.cart_btn'),
}
obj.cart.addEventListener('click', () => {
    obj.cartmenu.style.right = "0";
})
obj.cross.addEventListener('click', () => {
    obj.cartmenu.style.right = "-582px";
})


let can = true
const products = [
    {
        name: "Clock",
        img: "106.jpg",
        price: 10,
        id: "clock",
        el: 1,
        cart: false,

    } ,
    {
        name: "Juice",
        img: "101.jpg",
        price: 2,
        id: "juice",
        el: 2,
        cart: false,

    } ,
    {
        name: "Socks",
        img: "102.jpg",
        price: 2,
        id: "socks",
        el: 3,
        cart: false,

    } ,
    {
        name: "Mouse",
        img: "103.jpg",
        price: 20,
        id: "mouse",
        el: 4,
        cart: false,

    } ,
    {
        name: "Pot",
        img: "104.jpg",
        price: 6,
        id: "pot",
        el: 5,
        cart: false,

    } ,
    {
        name: "Pillow",
        img: "105.jpg",
        price: 6,
        id: "pillow",
        el: 6,
        cart: false,

    } ,
    {
        name: "Router",
        img: "107.jpg",
        price: 70,
        id: "router",
        el: 7,
        cart: false,

    } ,
    {
        name: "Batery",
        img: "108.jpg",
        price: 8,
        id: "batery",
        el: 8,
        cart: false,

    } ,
    {
        name: "Connector",
        img: "109.jpg",
        price: 5.5,
        id: "connector",
        el: 9,
        cart: false,

    } ,
    {
        name: "Orange",
        img: "110.jpg",
        price: 1.5,
        id: "orange",
        el: 10,
        cart: false,

    } ,
    {
        name: "Volume",
        img: "111.jpg",
        price: 100,
        id: "mickrophone",
        el: 11,
        cart: false,

    } ,
    {
        name: "Laptop",
        img: "112.jpg",
        price: 500,
        id: "laptop",
        el: 12,
        cart: false,

    } ,
    {
        name: "Pencils",
        img: "113.jpg",
        price: 2,
        id: "pencils",
        el: 13,
        cart: false,

    } ,
]
const productsForCart = [
    
] 

const creatingBlock = () => {
    obj.main.innerHTML = ''
    products.forEach((item) => {
        obj.main.innerHTML += `
            <div class="main_item">
            <img class="main_item_img" src="./site/${item.img}" alt="">
            <div class="main_item_down">
                <div id="id1" class="main_item_down_btn">Add to cart</div>
                <p class="none">${item.el}</p>
                <p class="main_item_down_p1">${item.price}$</p>
            </div>
            </div>
            
        `
        mainBtns = document.querySelectorAll(`#id1`) 
    })
    creatingCartProducts()
}
const creatingCartProducts = () => {
    mainBtns.forEach((item) => {
        item.addEventListener('click', () => {
            Sibling = item.nextElementSibling.textContent
            Num = parseInt(Sibling)
            products.forEach((el, index) => {
                let trueFalse = true
                if(el.el == Num) {
                    if(can) {
                        productsForCart.forEach((block, ide) => {
                            if(el.id == block.id) {
                                productsForCart[ide].count += 1
                                trueFalse = false
                            } 
    
                        })
                        if(trueFalse) {
                            productsForCart.push({
                                ...el,
                                cart: true,
                                count: 1
                            })
                        }
                    }
                
                }
            })
            localStorage.clear()
            localStorage.setItem('user', JSON.stringify(productsForCart))
            creatingCart()
            can = true
        })
    })
}
const creatingCart = () => {
    let sum = 0
    obj.block.innerHTML = '<p class="text">Now cart is empty</p>'
    productsForCart.forEach((item, index) => {
        if(item.cart) {
            obj.block.innerHTML += `
            <div class="cart_block_item">
                <div class="cart_block_item_up">
                    <img class="cart_block_item_up_img" src="./site/${item.img}" alt="">
                    <p class="cart_block_item_up_p1">${item.name}</p>
                </div>
                <div class="cart_block_item_down">
                    <div class="cart_block_item_down_btns">
                        <div class="cart_block_item_down_btns_item">
                            <img class="cart_block_item_down_btns_item_img" src="./img/chat 2.svg" alt="">
                            <img class="cart_block_item_down_btns_item_img1" src="./img/chat 1.svg" alt="">
                        </div>
                        <div id="id2" class="cart_block_item_down_btns_item">
                            <img class="cart_block_item_down_btns_item_img" src="./img/delete 2.svg" alt="">
                            <img class="cart_block_item_down_btns_item_img1" src="./img/delete 1.svg" alt="">
                        </div>
                        <p class="none">${item.el}</p>
                    </div>
                    <p class="cart_block_item_down_price">${item.count * item.price}$</p>
                    <p class="count">${item.count}</p>
                </div>
            </div>
            `
        }
    })
    productsForCart.forEach((item, index) => {
        sum += item.count * item.price
    })
    obj.total.innerHTML = `${sum}$`

    deleteInCart = document.querySelectorAll('#id2')
    listenToDelete()
}
const listenToDelete = () => {
    deleteInCart.forEach((item, index) => {
        item.addEventListener('click', () => {
            Sibling = item.nextElementSibling.textContent
            Num = parseInt(Sibling)
            productsForCart.forEach((el, id) => {
                if(el.el == Num) {
                    productsForCart.splice(index, 1)
                    creatingCart()
                }
            })
        })
    })
    localStorage.clear()
    localStorage.setItem('user', JSON.stringify(productsForCart))
}


const raw = localStorage.getItem('user')
if(raw) {
    const person = JSON.parse(raw)
    const searchData = () => {
        if(person.length != 0) {
            can = false
            person.forEach((item, index) => {
                productsForCart.push({
                    ...item
                })
            })
            creatingCart()
        } 
    }
    searchData()
}

creatingBlock()



