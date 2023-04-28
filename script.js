const hamBurg=document.getElementById('hamburger')
const nav=document.getElementById('navbar')

const close=document.getElementById('close')
 
if(hamBurg)                                                      //means hamburger is visible..means it is clickable right, so once clicked it wont be null
{
    hamBurg.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}