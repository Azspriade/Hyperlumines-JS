var tab1 = document.getElementById('tab1')
var tab2 = document.getElementById('tab2')
var tab3 = document.getElementById('tab3')
var div1 = document.getElementById('div1')
var div2 = document.getElementById('div2')
var div3 = document.getElementById('div3')

tab1.addEventListener('click', function(){
    tab1.classList.remove('tab-active')
    tab2.classList.remove('tab-active')
    tab3.classList.remove('tab-active')
    div1.classList.remove('active')
    div2.classList.remove('active')
    div3.classList.remove('active')
    this.classList.add('tab-active')
    if(this.classList.contains('tab1')){
        div1.classList.add('active')
    }
})

tab2.addEventListener('click', function(){
    tab1.classList.remove('tab-active')
    tab2.classList.remove('tab-active')
    tab3.classList.remove('tab-active')
    div1.classList.remove('active')
    div2.classList.remove('active')
    div3.classList.remove('active')
    this.classList.add('tab-active')
    if(this.classList.contains('tab2')){
        div2.classList.add('active')
    }
})

tab3.addEventListener('click', function(){
    tab1.classList.remove('tab-active')
    tab2.classList.remove('tab-active')
    tab3.classList.remove('tab-active')
    div1.classList.remove('active')
    div2.classList.remove('active')
    div3.classList.remove('active')
    this.classList.add('tab-active')
    if(this.classList.contains('tab3')){
        div3.classList.add('active')
    }
})