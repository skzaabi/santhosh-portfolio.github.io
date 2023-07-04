var typed = new Typed('#multitext', {
  strings: [
           'Frontend Devloper',
          'Designer',
          'Vlogger',
          'Gamer'],
          typeSpeed:100,
          backSpeed:100,
          backdelay:1000,
          loop:true
  })

  function navchange(){
    var navbar = document.getElementById('fullnav');
    var scrollval = window.scrollY;
    if(scrollval > 50){
      navbar.classList.add('navbg');
    }else{
      navbar.classList.remove('navbg');
    }
}

  window.addEventListener('scroll',navchange);

  function logSubmit(event) {
      event.preventDefault();
      console.log("hyy")
  }
  
  const form = document.getElementsByTagName(form);
  form.addEventListener("#formsub", logSubmit);