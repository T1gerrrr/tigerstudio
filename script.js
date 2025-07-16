function showPage(pageId) {

  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');


  const activePage = document.getElementById(pageId);
  activePage.style.display = 'block';

  // LUU VAO THU VIEN...
  localStorage.setItem('activePage', pageId);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedPage = localStorage.getItem('activePage');
  if (savedPage) {
    showPage(savedPage);
  } else {
    showPage('gioi-thieu'); 
  }
});


const bidButtons = document.querySelectorAll('.bid-now');
bidButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    showPage('thong-tin-sp'); 
  });
});
bidButtons.forEach(button => {
  button.addEventListener('mouseover', (event) => {
    const card = event.target.closest('.card');
    const infoBox = card.querySelector('.info-box');
    infoBox.style.display = 'block';
  });
  button.addEventListener('mouseout', (event) => {
    const card = event.target.closest('.card');
    const infoBox = card.querySelector('.info-box');
    infoBox.style.display = 'none';
  });
});


let currentImageIndex = 0;
const images = ['img/story.png', 'img/BANNER2.png', 'img/3t.png', 'img/1.jpg'];

function changeImage() {
  const imageElement = document.getElementById('rotating-image');
  
  imageElement.style.opacity = 0;
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex]; 

 
    imageElement.style.opacity = 1;
  }, 1000);
}
setInterval(changeImage, 5000);
changeImage();
