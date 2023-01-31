

  const links = document.querySelectorAll('A');
  const buttonHamburger  = document.querySelector('#hamburger-button')
  links.forEach((link)=>{
    if(link.href==window.location){
      link.classList.remove('font-normal');
      link.classList.add('font-bold')
    };
  });
  buttonHamburger.addEventListener('click',(e)=>{
    links.forEach((link)=>{
      if(link.classList.contains('hidden')){
        link.classList.remove('hidden');
      }
      else{
        link.classList.add('hidden');
      }
    });
    
  });