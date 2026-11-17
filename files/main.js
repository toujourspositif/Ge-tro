let n=0,t;const c=document.getElementById('n'),T=document.getElementById('toast');
document.querySelectorAll('button[data-n]').forEach(b=>b.addEventListener('click',()=>{
 n++;c.textContent=n;T.textContent='Ajouté au panier : '+b.dataset.n;T.classList.add('on');
 clearTimeout(t);t=setTimeout(()=>T.classList.remove('on'),1800);}));
