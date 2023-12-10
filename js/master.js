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

  if (backgroundLocalItem === 'true') {

    backgroundOption = true;

  } else {

    backgroundOption = false;

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
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove('active')

    });


    // Add Active Class On Self
    e.target.classList.add('active')


  });


});


// Switch Random Backgrounds Option
const randomBackgroundsElement = document.querySelectorAll(".random-backgrounds span");

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
      localStorage.setItem("background_option", true)
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval)
      localStorage.setItem("background_option", false)
    }


  });



});


// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// get Array Of Imgs
let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// Function To Randomaiz Imgs
function randomaizImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {

      // Get Random Namber
      let randomNamber = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Url 
      landingPage.style.backgroundImage = 'url("./images/' + imgsArray[randomNamber] + '")';

    }, 1000);
  }
}
randomaizImgs();

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll('.skill-box .skill-progress span')

    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;

    })

  }
}

// Create Popup With The Image 

let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create Popup
    let popupBox = document.createElement("div");

    // Add Class To Popup Box
    popupBox.className = 'popup-box';

    // Add 
    if (img.alt !== null) {

      // Creat Heading
      let imgHeading = document.createElement("h3");

      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement('img')

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append Popup Box TO The Body
    document.body.appendChild(popupBox);

    // Create The Colse Span 
    let closeButton = document.createElement("span");

    // Creat The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Append Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});

// Close Popup
document.addEventListener('click', function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current PopUp
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector('.popup-overlay').remove();
  }



});

// Select All Bullets 

const allBullets = document.querySelectorAll('.nav-bullets .bullet');

// Select All Links

const allLinks = document.querySelectorAll(".links a");

function goSection(elements) {

  elements.forEach(element => {

    element.addEventListener('click' , (e) =>{

      e.preventDefault();
  
      document.querySelector("." + e.target.dataset.section).scrollIntoView({
  
        behavior:"smooth"
      })
  
  
    })
  
  } )
  
}
goSection(allBullets);
goSection(allLinks);