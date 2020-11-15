let add_recepie = document.querySelector('.but')

let form = document.querySelector('.form')

let submit = document.querySelector('#submit')
let name_form = document.querySelector('#name')
let photo_form = document.querySelector('#photo')
let about_form = document.querySelector('#about')

let center = document.querySelector('.center')

add_recepie.onclick=function(){
    if (form.style.display=='none'){
        form.style.display='block'
        add_recepie.innerHTML="отмена"
    }else{
        form.style.display='none'
        add_recepie.innerHTML="добавить рецепт"
    }
}

submit.onclick=function(){
    center.insertAdjacentHTML('beforeend', `
        <div class="block">
        <img src="${photo_form.value}">
        <div class="title">
            <h2>${name_form.value}</h2>
            <p class="about text">
            ${about_form.value}
            </p>
        </div>
        <div style="clear: both;"></div>
        </div>
    `)
}