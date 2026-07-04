const header=document.querySelector('[data-header]');
const button=document.querySelector('[data-menu-button]');
if(button){button.addEventListener('click',()=>header.classList.toggle('open'));}
const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:0.12});
document.querySelectorAll('section,.collection-grid a,.product-grid article,.note-grid article').forEach((el)=>{el.classList.add('reveal');observer.observe(el);});
