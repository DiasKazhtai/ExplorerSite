let burger = document.querySelector('.header__burger-menu')
let changePage = document.querySelector('.main__routes')
let main = document.querySelector('.main__container')


burger.addEventListener('click', function(){
    burger.classList.toggle('burger-close')
    burger.classList.toggle('header-open')
})

changePage.addEventListener('click', function(event){
    if(!event.target){
       alert('wow')
    }
   event.target.classList.toggle('active-page')
   console.log(event.target)
})