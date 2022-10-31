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