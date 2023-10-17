const circles = document.getElementsByClassName("circle")
const submit = document.querySelector(".submit")

for(let i = 0; i<circles.length; i++){
    circles[i].addEventListener("click", function(){
        const ativos = document.getElementsByClassName("active")
        for(let j = 0; j < ativos.length; j++){
            ativos[j].classList.remove("active")
        }
        circles[i].classList.toggle("active")
    })
}

submit.addEventListener('click', function(){
    const ativo = document.querySelector(".active").innerHTML
    const thxtext = document.querySelector(".thx-text")
    const txt = "You selected " + ativo +  " out of 5"
    thxtext.innerHTML = txt

    const hide = document.getElementsByClassName("hide")
    for(let j = 0; j < hide.length; j++){
        hide[j].classList.remove("hide")
    }

    const show = document.getElementsByClassName("show")
    for(let i = 0; i < show.length; i++){
        show[i].classList.add("hide")
    }

    
})

//const hide = document.getElementsByClassName("hide")
//for(let j = 0; j < hide.length; j++){
//    hide[j].classList.remove("hide")
//}