var yolol = document.querySelector('#dmbtn') 
var issou = document.getElementById('issou')
var fafa = document.querySelectorAll('.bg-p')
var fjilub = document.querySelectorAll('.text-color-light')
var ojoj = document.getElementById('ojoj')
var kasb = document.querySelector('#dmbtn2')
var issuo = document.getElementById('issuo')
var jojo = document.getElementById('jojo')

yolol.addEventListener('click', function(){
    issou.classList.toggle('bg-main-dark')
    fafa.forEach(bg_m =>  {
        bg_m.classList.toggle('bg-p-dark')
    });
    fjilub.forEach(bg_p =>  {
        bg_p.classList.toggle('text-color-dark')
    });
    ojoj.classList.toggle('bg-f-dark')
})

