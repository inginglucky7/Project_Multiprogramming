function reveal_txt01() {
    var txt01 = document.querySelectorAll("#txt-01");

    for (var i = 0; i < txt01.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = txt01[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          txt01[i].classList.add("active");
        } else {
          txt01[i].classList.remove("active");
        }
      }
}
window.addEventListener("scroll", reveal_txt01);

function reveal_txt02() {
  var txt02 = document.querySelectorAll("#txt-02");

  for (var i = 0; i < txt02.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = txt02[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        txt02[i].classList.add("active");
      } else {
        txt02[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal_txt02);

function reveal_txt03() {
  var txt03 = document.querySelectorAll("#txt-03");

  for (var i = 0; i < txt03.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = txt03[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        txt03[i].classList.add("active");
      } else {
        txt03[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal_txt03);

function reveal_txt04() {
  var txt04 = document.querySelectorAll("#txt-04");

  for (var i = 0; i < txt04.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = txt04[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        txt04[i].classList.add("active");
      } else {
        txt04[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal_txt04);

function reveal_txt05() {
  var txt05 = document.querySelectorAll("#txt-05");

  for (var i = 0; i < txt05.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = txt05[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        txt05[i].classList.add("active");
      } else {
        txt05[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal_txt05);