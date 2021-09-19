function func(div) {
    let className = div.getAttribute("class")
    if (className == "contentBx") {
        div.className = "contentBx active"
    } else {
        div.className = "contentBx"
    }
}

const hamburger = document.querySelector('#hamburger')
const ul = document.querySelector('.links')

hamburger.addEventListener('click', ()=>{
    ul.classList.toggle('show')
})