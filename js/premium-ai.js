document.addEventListener('DOMContentLoaded',()=>{
 const b=document.createElement('button');b.className='ai-toggle';b.innerHTML='3D Experience';document.body.appendChild(b);
 let on=false;b.onclick=()=>{on=!on;document.body.classList.toggle('mode-3d',on);document.body.classList.toggle('mode-2d',!on);b.innerHTML=on?'2D Experience':'3D Experience'};
 document.querySelectorAll('h2,h3,.pub-item,.award-grid li,.interest-grid li').forEach(e=>{e.style.opacity=0;e.style.transform='translateY(20px)';new IntersectionObserver(x=>{x.forEach(i=>{if(i.isIntersecting){i.target.style.transition='.7s';i.target.style.opacity=1;i.target.style.transform='none'}})}).observe(e)})
})
