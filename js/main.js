const h=document.querySelector('[data-header]');
const b=document.querySelector('[data-menu-button]');
if(b){b.addEventListener('click',()=>h.classList.toggle('open'));}
const o=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal,.choice-grid a,.find-grid article,.note-grid article').forEach(el=>{el.classList.add('reveal');o.observe(el);});
