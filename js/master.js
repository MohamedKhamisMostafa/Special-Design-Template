//Check If There's Local Storage Color Option 




// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

  // Toggle Class Fa-spin for Rotation on Self
  this.classList.toggle('fa-spin');

  // Toggle Class Open on Main Settings Box
  document.querySelector('.settings-box').classList.toggle('open');
  
};


// Switch Colors
const colorsLi =document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color' ,e.target.dataset.color );

  });


});


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
