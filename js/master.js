// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// get Array Of Imgs
let imgsArray = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];

setInterval(() =>{

  // Get Random Namber
  let randomNamber = Math.floor(Math.random() * imgsArray.length);

// Change Background Image Url 
landingPage.style.backgroundImage = 'url("../images/' + imgsArray[randomNamber] + '")';

}, 5000 );