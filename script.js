function toggle() {

  var nav = document.getElementById('nav');
  var toggler = document.getElementById('toggle');

  toggler.classList.toggle("change");

  if (nav.style.maxHeight) {
    nav.style.maxHeight = null;
    nav.style.overflow = "hidden";

  } else {
    nav.style.maxHeight = nav.scrollHeight + "px";
    setTimeout(function() {
      nav.style.overflow = "visible";
    }, 200);
    

  }

}
console.log(Console())