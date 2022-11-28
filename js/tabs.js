let btn = document.getElementsByClassName('link');
let content = document.getElementsByClassName('content');
btn[0].classList.add('active');
content[0].style.display = 'block';

function showContent(e, point) {
    let i;
    for (i = 0; i < btn.length; i++) {
        content[i].style.display = 'none';
        btn[i].classList.remove('active');
    }
    document.getElementById(point).style.display = 'block';
    e.currentTarget.classList.add('active');
}

// function tab change layout

function openLayout(evt, layout) {
    // Declare all variables
    
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab

    document.getElementById(layout).style.display = "block";
    evt.currentTarget.className += " active";
  }