let gmMenu = document.querySelector('.gamburger-menu')
let afGmMenu = document.querySelector('.after-gamburger-click')
let ul = document.querySelector('.responsive-ul')
let ulFixer = document.querySelector('.responsive-ul-fixer')
let remove = document.querySelector('.remove-btn')

gmMenu.addEventListener('click', ()=>{
  afGmMenu.style.display = 'flex'
})

remove.addEventListener('click', ()=>{
  ul.classList.add('responsive-ul-remove')
  ulFixer.classList.add('responsive-ul-fixer-remove')
  setTimeout(()=>{
    afGmMenu.style.display = 'none'
    ul.classList.remove('responsive-ul-remove')
    ulFixer.classList.remove('responsive-ul-fixer-remove')
  },500)
})