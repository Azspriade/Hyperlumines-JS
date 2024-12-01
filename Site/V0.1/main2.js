var yolol = document.querySelector('#dmbtn') 
var issou = document.getElementById('issou')
var fafa = document.querySelectorAll('.bg-p')
var fjilub = document.querySelectorAll('.text-color-light')
var ojoj = document.getElementById('ojoj')
var kasb = document.querySelector('#dmbtn2')
var issuo = document.getElementById('issuo')
var jojo = document.getElementById('jojo')

kasb.addEventListener('click', function(){
    issuo.classList.toggle('bg-main-dark')
    fafa.forEach(bg_m =>  {
        bg_m.classList.toggle('bg-p-dark')
    });
    fjilub.forEach(bg_p =>  {
        bg_p.classList.toggle('text-color-dark')
    });
    jojo.classList.toggle('bg-f-dark')
})

let form = document.querySelector("form")

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName')
    var Pseudo = document.getElementById('Pseudo')
    var date = document.getElementById('date')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var password2 = document.getElementById('password2')
    var tel = document.getElementById('tel')
    var taille = document.getElementById('taille')
    var ProfilePicture = document.getElementById('ProfilePicture')
    var sexe = document.getElementById('Sexe')
    var masc = document.getElementById('masculin')
    var fem = document.getElementById('feminin')
    var Int = document.getElementById('intersex')
    var ND = document.getElementById('nd')

    var inputs = document.querySelectorAll('input')
    var country = document.getElementById('Pays')
    var textarea = document.getElementById('Presentation')
    inputs.forEach(input => {
        input.classList.remove('correct', 'incorrect')
    });
    sexe.classList.remove ('correct', 'incorrect', 'bg-error')
    country.classList.remove('correct', 'incorrect')
    textarea.classList.remove('correct', 'incorrect')

    if(firstName.value === '') {
        console.log('Incorrect.')
        firstName.classList.add('incorrect')
    } else {
        firstName.classList.add('correct')
        console.log('Correct, Merci ' + firstName.value)
    }

    if(Pseudo.value === '' || Pseudo.value === firstName.value ) {
        console.log('Incorrect.')
        Pseudo.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        Pseudo.classList.add('correct')
    }

    if(date.value === '') {
        console.log('Incorrect.')
        date.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        date.classList.add('correct')
    }

    if(email.value === '') {
        console.log('Incorrect.')
        email.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        email.classList.add('correct')
    }

    if(password.value === '') {
        console.log('Incorrect.')
        password.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        password.classList.add('correct')
    }

    if(password2.value === '' || password2.value != password.value) {
        console.log('Incorrect.')
        password2.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        password2.classList.add('correct')
    }

    if(tel.value === '') {
        console.log('Icorrect.')
        tel.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        tel.classList.add('correct')
    }

    if(taille.value === ''){
        console.log('Incorrect.')
        taille.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        taille.classList.add('correct')
    }

    if(ProfilePicture.value === ''){
        console.log('Incorrect.')
        ProfilePicture.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        ProfilePicture.classList.add('correct')
    }

    if(sexe.checked || masc.checked || fem.checked || Int.checked || ND.checked){ 
        console.log('Correct, Merci ' + Pseudo.value)
    } else { 
        console.log('Incorrect.')
        sexe.classList.add('bg-error')
    }

    if(country.value === 'none') {
        console.log('Incorrect.')
        country.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        country.classList.add('correct')
    }

    if(textarea.value === ''){
        console.log('Incorrect.')
        textarea.classList.add('incorrect')
    } else {
        console.log('Correct, Merci ' + Pseudo.value)
        textarea.classList.add('correct')
    }

})

