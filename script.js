document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){
      event.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

const campaignKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid'];
const currentParams=new URLSearchParams(window.location.search);
const campaign={};
campaignKeys.forEach(key=>{
  const value=currentParams.get(key);
  if(value) campaign[key]=value;
});

if(Object.keys(campaign).length){
  try{sessionStorage.setItem('pai_presente_campaign',JSON.stringify(campaign));}catch(e){}
}

document.querySelectorAll('.buy-now').forEach(link=>{
  link.addEventListener('click',()=>{
    try{
      sessionStorage.setItem('pai_presente_buy_click',new Date().toISOString());
    }catch(e){}
  });
});

document.querySelectorAll('.support-float').forEach(link=>{
  link.addEventListener('click',()=>{
    try{
      sessionStorage.setItem('pai_presente_support_click',new Date().toISOString());
    }catch(e){}
  });
});