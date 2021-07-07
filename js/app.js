const modal = document.querySelector('#cart-modal'),
    btn_modal = document.querySelector('#cart-shop'),
    close_btn = document.querySelector('.close')
const shoppingCard = document.querySelectorAll('.card'),
    result = document.querySelector('#result')


btn_modal.addEventListener('click', ()=>{
    modal.classList.toggle('active')
})
close_btn.addEventListener('click', ()=>{
    modal.classList.remove('active')
   
})
       



