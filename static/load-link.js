setTimeout(function(){
  const navClick = document.getElementById('#nav');

  navClick.addEventListener('click', function () {
    console.log('element clicked');
    navLink.classList.remove("navLink");
  });

}, 2000);