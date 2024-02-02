//JS FOR NAVIGATION EFFECT ON SCROLL
    
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0 && window.scrollY < 1335);
  });
  
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky2', window.scrollY > 1335 && window.scrollY < 3200);
  });
  
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky3', window.scrollY > 3200 && window.scrollY < 5070);
  });
  
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky4', window.scrollY > 5070 && window.scrollY < 6870);
  });
  
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky5', window.scrollY > 6870 && window.scrollY < 8725);
  });
  
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky6', window.scrollY > 8725 && window.scrollY < 10680);
  });
  
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('sticky7', window.scrollY > 10680);
  });
  
  //JS FOR RESPONSIVE BUTTON NAVIGATION
  
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');
  
  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
    showcase.classList.add('active');
  });
  
  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
    showcase.classList.remove('active');
  });
  
  //SCROLL UP BUTTON
  
  const toTop = document.querySelector(".to-top");
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    }
    else {
      toTop.classList.remove("active");
    }
  })
  
  // Function to scroll to the top of the specified pop-up
  function scrollToTop(popupId) {
      const animalPopup = document.getElementById(popupId);
    
      // Scroll to the top of the pop-up smoothly
      animalPopup.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    
    // Add click event listeners to the habitat section buttons
    document.querySelectorAll(".popup-button-rainforest").forEach(button => {
      button.addEventListener("click", () => {
        scrollToTop(button.getAttribute("data-popup-id"));
      });
    });
    
    document.querySelectorAll(".popup-button-desert").forEach(button => {
      button.addEventListener("click", () => {
        scrollToTop(button.getAttribute("data-popup-id"));
      });
    });
    
    document.querySelectorAll(".popup-button-arctic").forEach(button => {
      button.addEventListener("click", () => {
        scrollToTop(button.getAttribute("data-popup-id"));
      });
    });
    document.querySelectorAll(".popup-button-ocean").forEach(button => {
      button.addEventListener("click", () => {
        scrollToTop(button.getAttribute("data-popup-id"));
      });
    });
    document.querySelectorAll(".popup-button-grassland").forEach(button => {
      button.addEventListener("click", () => {
        scrollToTop(button.getAttribute("data-popup-id"));
      });
    });
    
    
    
    
    // Function to open the desert animal pop-up
    function openDesertPopup() {
      const desertPopup = document.getElementById("desert-animal-popup");
      
      desertPopup.style.display = "block";
      desertPopup.classList.add("show");
      document.body.classList.add("body-no-scroll");
    }
    
    // Function to open the rain forest animal pop-up
    function openRainforestPopup() {
     
      const rainforestPopup = document.getElementById("rainforest-animal-popup");
      const header = document.getElementById("head");

      rainforestPopup.style.display = "block";
      rainforestPopup.classList.add("show");
      document.body.classList.add("body-no-scroll");
    }
    
    function openArcticPopup() {
      const arcticPopup = document.getElementById("arctic-animal-popup");
     
      arcticPopup.style.display = "block";
      arcticPopup.classList.add("show");
      document.body.classList.add("body-no-scroll");
    }
    
    function openGrasslandPopup() {
      const grasslandPopup = document.getElementById("grassland-animal-popup");
      
      grasslandPopup.style.display = "block";
      grasslandPopup.classList.add("show");
      document.body.classList.add("body-no-scroll");
    }
    function openOceanPopup() {
      const oceanPopup = document.getElementById("ocean-animal-popup");
      
      oceanPopup.style.display = "block";
      oceanPopup.classList.add("show");
      document.body.classList.add("body-no-scroll");
    }
    
    // Function to close the desert animal pop-up
    function closeDesertPopup() {
      const desertPopup = document.getElementById("desert-animal-popup");
      desertPopup.classList.remove("show");
      setTimeout(() => {
          desertPopup.style.display = "none";
          document.body.classList.remove("body-no-scroll");
      }, 200);
    }
    
    // Function to close the rain forest animal pop-up
    function closeRainforestPopup() {
      const rainforestPopup = document.getElementById("rainforest-animal-popup");
      rainforestPopup.classList.remove("show");
      setTimeout(() => {
          rainforestPopup.style.display = "none";
          document.body.classList.remove("body-no-scroll");
      }, 200);
    }
    
    function closeArcticPopup() {
      const arcticPopup = document.getElementById("arctic-animal-popup");
      arcticPopup.classList.remove("show");
      setTimeout(() => {
        arcticPopup.style.display = "none";
          document.body.classList.remove("body-no-scroll");
      }, 200);
    }
    
    function closeOceanPopup() {
      const oceanPopup = document.getElementById("ocean-animal-popup");
      oceanPopup.classList.remove("show");
      setTimeout(() => {
        oceanPopup.style.display = "none";
          document.body.classList.remove("body-no-scroll");
      }, 200);
    }
    function closeGrasslandPopup() {
      const grasslandPopup = document.getElementById("grassland-animal-popup");
      grasslandPopup.classList.remove("show");
      setTimeout(() => {
        grasslandPopup.style.display = "none";
          document.body.classList.remove("body-no-scroll");
      }, 200);
    }
    