for(const type of ['tool','manual']){
 const file=window.GZB_RELEASE[type];
 if(file && file.url && file.name){
  const a=document.getElementById(type+'-link');a.href=file.url;a.hidden=false;
  document.getElementById(type+'-pending').hidden=true;
  document.getElementById(type+'-detail').textContent=file.name;
 }
}
if(window.GZB_RELEASE.contact){const a=document.getElementById('contact-link');a.href=window.GZB_RELEASE.contact;a.hidden=false;}
