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
