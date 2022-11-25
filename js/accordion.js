let down = document.getElementsByClassName("down");
let i;

for (i = 0; i < down.length; i++) {
  down[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}













const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("spoiler-body");
}



$(document).on('click','.spoiler-trigger',function(e){e.preventDefault();$(this).toggleClass('active');$(this).parent().find('.spoiler-block').first().slideToggle(300);})


