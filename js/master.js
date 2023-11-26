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

// Random Background Option
let backgroundOption = true;

// Varibale To Control The Background interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem('background_option');

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  
  if (backgroundLocalItem === 'true' ) {

    backgroundOption=true;

  } else {

    backgroundOption=false;

  };

  // Remove Active Class From All Span

  document.querySelectorAll('.random-backgrounds span').forEach(element => {
    element.classList.remove('active');
  });

  if (backgroundLocalItem === 'true') {
    
    document.querySelector('.random-backgrounds .yes').classList.add('active')

  } else {
    
    document.querySelector('.random-backgrounds .no').classList.add('active')

  }

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
    if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      randomaizImgs()
      localStorage.setItem("background_option" , true )
    }else{
      backgroundOption=false;
      clearInterval(backgroundInterval)
      localStorage.setItem("background_option" , false )
    }


  });
  


});


// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// get Array Of Imgs
let imgsArray = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];

// Function To Randomaiz Imgs
function randomaizImgs() {
  if (backgroundOption === true ) {
    backgroundInterval = setInterval(() =>{

      // Get Random Namber
      let randomNamber = Math.floor(Math.random() * imgsArray.length);
    
    // Change Background Image Url 
    landingPage.style.backgroundImage = 'url("./images/' + imgsArray[randomNamber] + '")';
    
    }, 1000 );
  }
}
randomaizImgs();
