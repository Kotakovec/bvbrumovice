const logo = document.querySelector('.logo');
const img = new Image();
img.src = '/logo.png';
img.onload = function () {
  logo.style.width = img.width + 'px';
  logo.style.height = img.height + 'px';
};