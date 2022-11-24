function reveal() {
    var reveals = document.querySelectorAll("#lidologo");
    var text2 = document.querySelectorAll("#text-2");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        text2[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
        text2[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  function reveal_text3() {
    var text3 = document.querySelectorAll("#text-3");
  
    for (var i = 0; i < text3.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = text3[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        text3[i].classList.add("active");
      } else {
        text3[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal_text3);

  function reveal_change1() {
    var change1 = document.querySelectorAll("#change1");
    var text6 = document.querySelectorAll("#text-6");
    var text66 = document.querySelectorAll("#text-66");
    for (var i = 0; i < change1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = change1[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        change1[i].classList.add("active");
        text6[i].classList.add("active");
        text66[i].classList.add("active");
      } else {
        change1[i].classList.remove("active");
        text6[i].classList.remove("active");
        text66[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal_change1);

  function reveal_change2() {
    var change2 = document.querySelectorAll("#change2");
    var text7 = document.querySelectorAll("#text-7");
    var text77 = document.querySelectorAll("#text-77");
    for (var i = 0; i < change2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = change2[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        change2[i].classList.add("active");
        text7[i].classList.add("active");
        text77[i].classList.add("active");
      } else {
        change2[i].classList.remove("active");
        text7[i].classList.remove("active");
        text77[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal_change2);

  function reveal_change3() {
    var change3 = document.querySelectorAll("#change3");
    var text8 = document.querySelectorAll("#text-8");
    var text88 = document.querySelectorAll("#text-88");
    for (var i = 0; i < change3.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = change3[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        change3[i].classList.add("active");
        text8[i].classList.add("active");
        text88[i].classList.add("active");
      } else {
        change3[i].classList.remove("active");
        text8[i].classList.remove("active");
        text88[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal_change3);

  var leftItem = document.getElementById('people1'),
    rightItem = document.getElementById('people2');

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
  document.getElementById('people1').style.transform = "translate(" + 5*window.pageYOffset/100 + "px)";
  document.getElementById('people2').style.transform = "translate(" + 5*window.pageYOffset/100 + "px)";
})

function reveal_logomobile() {
  var reveals = document.querySelectorAll("#lidologosemi");
  var text2 = document.querySelectorAll("#text-22");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      text2[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
      text2[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal_logomobile);

function reveal_text33() {
  var text33 = document.querySelectorAll("#text-33");

  for (var i = 0; i < text33.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = text33[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      text33[i].classList.add("active");
    } else {
      text33[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal_text33);


