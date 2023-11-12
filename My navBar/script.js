const x = document.querySelectorAll('.navbar_block')
const add1 = document.querySelector('.navbar_block_add')

const add = {
    add1: document.querySelector('.navbar_block_add1'),
    add2: document.querySelector('.navbar_block_add2'),
    add3: document.querySelector('.navbar_block_add3'),
    add4: document.querySelector('.navbar_block_add4'),
    add5: document.querySelector('.navbar_block_add5'),
}
const p = {
    p1: document.querySelector('.navbar_block_p1'),
    p2: document.querySelector('.navbar_block_p2'),
    p3: document.querySelector('.navbar_block_p3'),
    p4: document.querySelector('.navbar_block_p4'),
    p5: document.querySelector('.navbar_block_p5'),
}
const obj = document.querySelector('.block')
x.forEach((item, index) => {
    item.addEventListener('click', () => {
        switch(index) {
            case 0:
                obj.innerHTML = `
                    <p class="block_p1">Home</p>
                    <p class="block_p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque alias harum magnam repellat modi quasi accusantium eos, quod deleniti rerum cum? Distinctio asperiores, facilis ad, error laborum dolor labore sunt quidem eum dolores excepturi, placeat amet libero pariatur ipsum!</p>
                `;
                add.add1.style.bottom = "-10px";
                add.add2.style.cssText = "";
                add.add3.style.cssText = "";
                add.add4.style.cssText = "";
                add.add5.style.cssText = "";

                p.p1.style.color = "#FF7A00"
                p.p2.style.cssText = "";
                p.p3.style.cssText = "";
                p.p4.style.cssText = "";
                p.p5.style.cssText = "";
                break;
            case 1: 
                obj.innerHTML = `
                        <p class="block_p1">About</p>
                        <p class="block_p2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis suscipit dolorem delectus aperiam repellat neque veniam rerum odio, ab ratione nemo cumque, natus nam maiores quis unde! Quaerat, ipsa!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis suscipit dolorem delectus aperiam repellat neque veniam rerum odio, ab ratione nemo cumque, natus nam maiores quis unde! Quaerat, ipsa!</p>
                    `;
                add.add1.style.cssText = "";
                add.add2.style.bottom = "-10px";
                add.add3.style.cssText = "";
                add.add4.style.cssText = "";
                add.add5.style.cssText = "";

                p.p1.style.cssText = "";
                p.p2.style.color = "#026F0D"
                p.p3.style.cssText = "";
                p.p4.style.cssText = "";
                p.p5.style.cssText = "";
                add.add1.classList.add('orange2')
                p.p1.classList.add('orange')
                break;
            case 2: 
                obj.innerHTML = `
                        <p class="block_p1">Testimonials</p>
                        <p class="block_p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde tenetur est deserunt saepe veniam id illo vero voluptate quis magni cum nostrum expedita odit laboriosam corrupti, hic nihil veritatis! Omnis inventore mollitia fugit adipisci neque quas saepe totam maxime veniam asperiores reprehenderit vero dolorum accusantium minus delectus perspiciatis beatae, obcaecati recusandae voluptatibus ducimus, impedit doloribus, modi in! Cupiditate similique ipsum, molestiae explicabo dolores neque! Exercitationem porro vel deserunt adipisci quibusdam sint quos, cupiditate nisi incidunt sequi possimus dolor voluptatem?.</p>
                    `;
                add.add1.style.cssText = "";
                add.add2.style.cssText = "";
                add.add3.style.bottom = "-10px";
                add.add4.style.cssText = "";
                add.add5.style.cssText = "";

                p.p1.style.cssText = "";
                p.p2.style.cssText = "";
                p.p3.style.color = "#140092"
                p.p4.style.cssText = "";
                p.p5.style.cssText = "";
                add.add1.classList.add('orange2')
                p.p1.classList.add('orange')
                break;
            case 3: 
                obj.innerHTML = `
                        <p class="block_p1">Blog</p>
                        <p class="block_p2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo dolor quae molestias culpa maxime ut maiores recusandae magni. Modi, dicta soluta recusandae magni nesciunt incidunt totam autem velit laboriosam fuga quae fugiat voluptas ducimus, molestias magnam ea nam dolorem quidem. Voluptates odio ratione culpa sunt eos odit? Eum, tenetur. Illum quaerat, dignissimos dicta voluptatem et id repudiandae similique nobis minima iure cumque, eum quas eligendi rerum quae ex blanditiis aspernatur voluptatum ea modi aut, atque ad? Aspernatur eveniet sed fugiat?.</p>
                    `;
                add.add1.style.cssText = "";
                add.add2.style.cssText = "";
                add.add3.style.cssText = "";
                add.add4.style.bottom = "-10px";
                add.add5.style.cssText = "";

                p.p1.style.cssText = "";
                p.p2.style.cssText = "";
                p.p3.style.cssText = "";
                p.p4.style.color = "#F00"
                p.p5.style.cssText = "";
                add.add1.classList.add('orange2')
                p.p1.classList.add('orange')
                break;
            case 4: 
                obj.innerHTML = `
                        <p class="block_p1">Contact</p>
                        <p class="block_p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde tenetur est deserunt saepe veniam id illo vero voluptate quis magni cum nostrum expedita odit laboriosam corrupti, hic nihil veritatis! Omnis inventore mollitia fugit adipisci neque quas saepe totam maxime veniam asperiores reprehenderit vero dolorum accusantium minus delectus perspiciatis beatae, obcaecati recusandae voluptatibus ducimus, impedit doloribus, modi in! Cupiditate similique ipsum, molestiae explicabo dolores neque! Exercitationem porro vel deserunt adipisci quibusdam sint quos, cupiditate nisi incidunt sequi possimus dolor voluptatem?.</p>
                    `;
                add.add1.style.cssText = "";
                add.add2.style.cssText = "";
                add.add3.style.cssText = "";
                add.add4.style.cssText = "";
                add.add5.style.bottom = "-10px";

                p.p1.style.cssText = "";
                p.p2.style.cssText = "";
                p.p3.style.cssText = "";
                p.p4.style.cssText = "";
                p.p5.style.color = "#8500A6"
                add.add1.classList.add('orange2')
                p.p1.classList.add('orange')
                break;
        }
    })
})
