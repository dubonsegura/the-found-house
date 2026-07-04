const header=document.querySelector('[data-header]');
const button=document.querySelector('[data-menu-button]');
if(button){button.addEventListener('click',()=>header.classList.toggle('open'));}
