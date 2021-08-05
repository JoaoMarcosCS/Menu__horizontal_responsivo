 const menu=document.querySelector('.menu-list')
 const menuBtn=document.querySelector(".menu-btn")
 const cancelBtn=document.querySelector(".cancel-btn")
 const navbar=document.querySelector(".navbar")
 const body=document.querySelector("body")

    window.onscroll = () =>{
        this.scrollY > 20 ? navbar.classList.add("sticky"):navbar.classList.remove("sticky")
    }

 menuBtn.onclick = () => {
     menu.classList.add("active")
     menuBtn.classList.add("hide")
     body.classList.add("disabledScroll")
 }

 
 cancelBtn.onclick = () => {
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")
}