for(const type of ['tool','manual']){
 const file=window.GZB_RELEASE[type];
 if(file && file.url && file.name){
  const a=document.getElementById(type+'-link');a.href=file.url;a.hidden=false;
  document.getElementById(type+'-pending').hidden=true;
  document.getElementById(type+'-detail').textContent=file.name;
 }
}
if(window.GZB_RELEASE.contact){const a=document.getElementById('contact-link');a.href=window.GZB_RELEASE.contact;a.hidden=false;}

// Save PromptPay QR: on phones use the share sheet ("Save Image"), else normal download
(function(){
  const a=document.getElementById('save-qr'); if(!a) return;
  a.addEventListener('click', async e=>{
    if(!(navigator.canShare && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent))) return; // desktop: plain download
    try{
      e.preventDefault();
      const blob=await fetch(a.href).then(r=>r.blob());
      const file=new File([blob],'Coach23-PromptPay-499.jpg',{type:'image/jpeg'});
      if(navigator.canShare({files:[file]})) await navigator.share({files:[file],title:'QR พร้อมเพย์ 499 บาท'});
      else window.location.href=a.href;
    }catch(err){ if(err && err.name!=='AbortError') window.location.href=a.href; }
  });
})();
