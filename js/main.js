let navBtnOpen = document.querySelector('.fa-bars')
let navBtnClose = document.querySelector('.fa-x')
let navContent = document.querySelector('.nav-content')

navBtnOpen.addEventListener('click',()=>{
    // console.log("hi");
    navContent.classList.add('show');
    navBtnOpen.classList.add('hide')
    navBtnClose.style.display = 'block'
    navBtnClose.addEventListener('click',()=>{
        navBtnOpen.classList.remove('hide')
        navContent.classList.remove('show');
        navBtnClose.style.display = 'none'

    })
})