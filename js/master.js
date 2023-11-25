//Check If There's Local Storage Color Option 
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {

  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove('active')
    if (element.dataset.color === mainColors) {
      element.classList.add('active')
    };
    
  });

}




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

    // Set Color On Local Storage
    localStorage.setItem("color_option" , e.target.dataset.color );
     // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove('active')
      
    });


    // Add Active Class On Self
    e.target.classList.add('active')


  });


});


// Switch Random Backgrounds Option
const randomBackgroundsElement =document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans 
randomBackgroundsElement.forEach(span => {

  // Click On Every List Items
  span.addEventListener("click", (e) => {

     // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove('active')
      
    });


    // Add Active Class On Self
    e.target.classList.add('active')


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
landingPage.style.backgroundImage = 'url("./images/' + imgsArray[randomNamber] + '")';

}, 5000 );
