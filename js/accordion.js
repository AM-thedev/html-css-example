const acc = document.getElementsByClassName("js-accordion");
const desktopMode = window.matchMedia("(min-width: 768px)");

desktopMode.addEventListener('change', function(e) {
  for (let i = 0; i < acc.length; i++) {
    let accordion = acc[i];
    if (accordion.classList.contains('js-accordion--desktopExpand')) {
      let content = accordion.nextElementSibling;
      if (e.matches) {
        accordion.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        accordion.classList.remove("active");
        content.style.maxHeight = null;
      }
    }
  }
})

for (let i = 0; i < acc.length; i++) {
  let accordion = acc[i];
  if (accordion.classList.contains('js-accordion--desktopExpand')) {
    if (desktopMode.matches) {
      accordion.classList.toggle("active");
      let content = accordion.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  accordion.addEventListener("click", function() {
    if (this.classList.contains('js-accordion--desktopExpand') && desktopMode.matches) {
      console.log('CLICKED WHILE DESKTOP');
      return;
    }

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      var parent = this.parentElement;
      parent.style.maxHeight = parseInt(parent.style.maxHeight) + content.scrollHeight + "px";
    }
  });
}