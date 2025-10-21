const btn=document.getElementById('musicBtn');const bgm=document.getElementById('bgm');
btn.onclick=()=>{if(bgm.paused){bgm.play();btn.textContent='⏸️ Dừng nhạc';}else{bgm.pause();btn.textContent='🎵 Bật nhạc nền';}};
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}));
document.querySelectorAll('.fade').forEach(x=>obs.observe(x));