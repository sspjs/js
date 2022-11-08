const thememode = document.getElementById('thememode');

thememode.addEventListener('click', () => {
  thememode.checked?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");
  localStorage.setItem('darkModeStatus', thememode.checked);
});

window.addEventListener('load', (event) => {
  if(localStorage.getItem('darkModeStatus')=="true"){
    document.body.classList.add("dark-theme"); 
    document.getElementById('thememode').checked = true;
  }
});

var add = (function () {
  var counter = 0;
  return function () {return counter += 1;}
})();
    
function incorrect_ans() {
  var x = document.getElementById("incorrect");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
  document.getElementById("counts").innerHTML = add();
}
function correct_ans() {
  var x = document.getElementById("correct");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
  document.getElementById("counts").innerHTML = add();
}

  function normal() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz-data').style.filter = 'none';
    }
   document.getElementById(&#39;ContactForm1_contact-form-name&#39;).value = window.location.pathname;

var links = document.querySelectorAll('.menu-item a');

for (link of links) {
    if (window.location.pathname == link.getAttribute('href')) {
        link.classList.add('active-link')
    } else {
        link.classList.remove('active-link')
    }
}
if(localStorage.getItem('cookieSeen') != 'shown'){
    $(".cookie-banner").delay(1000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
}

$('.close-cookie').click(function(e) {
  $('.cookie-banner').fadeOut(); 
});
let shareButtons = document.querySelectorAll("a.web-share");
for (button of shareButtons) {
  button.addEventListener('click', function(e){
    let href = this.getAttribute('href');
    let alt = document.getElementsByTagName("title")[0].innerHTML;    
    if (navigator.share) {      
      navigator.share({
        title: alt,
        text: alt,
        url: href
      });
      e.preventDefault();    
    }      
  });
}
