function toggelNavbar() {
    document.getElementById("navbar").classList.toggle("navbar-toggel");
    // document.getElementById("fa-menu").classList.toggle("fa-icone-toggel");

      // desactiv other icone when click one 
  
      // document.getElementById("fa-user").classList.remove("fa-icone-toggel");
      document.querySelector(".login-form").classList.remove("login-form-toggel");
      // document.querySelector("#fa-search").classList.remove("fa-icone-toggel");
      document.querySelector(".search-form").classList.remove("search-form-toggel");

  }
  function toggelLoginForm() {
    document.getElementById("login-form").classList.toggle("login-form-toggels");
    // document.getElementById("fa-menu").classList.toggle("fa-icone-toggel");

      // desactiv other icone when click one 
  
      // document.getElementById("fa-user").classList.remove("fa-icone-toggel");
      // document.querySelector(".login-form").classList.remove("login-form-toggel");
      // document.querySelector("#fa-search").classList.remove("fa-icone-toggel");
      // document.querySelector(".search-form").classList.remove("search-form-toggel");

  }
  // function toggelSearchForm() {
  //   document.getElementById("search-form").classList.toggle("search-form-toggels");
  //   // document.getElementById("fa-menu").classList.toggle("fa-icone-toggel");

  //     // desactiv other icone when click one 
  
  //     // document.getElementById("fa-user").classList.remove("fa-icone-toggel");
  //     // document.querySelector(".login-form").classList.remove("login-form-toggel");
  //     // document.querySelector("#fa-search").classList.remove("fa-icone-toggel");
  //     // document.querySelector(".search-form").classList.remove("search-form-toggel");

  // }

function toggelSearchForm() {
  document.querySelector(".search-form").classList.toggle("search-form-toggel");
  // document.getElementById("#fa-search").classList.toggle("fa-icone-toggel");

    // desactiv other icone when click one 

    document.getElementById("navbar").classList.remove("navbar-toggel");
    // document.getElementById("#fa-menu").classList.remove("fa-icone-toggel");
    // document.querySelector("#fa-user").classList.remove("fa-icone-toggel");
    document.querySelector(".login-form").classList.remove("login-form-toggel");
}

function toggelLoginForm() {
  document.querySelector("#fa-user").classList.toggle(".fa-icone-toggel"); //toogel icone active 
    document.querySelector(".login-form").classList.toggle("login-form-toggel") // toggel login form 
    // desactiv other icone when click one 
  
    document.getElementById("navbar").classList.remove("navbar-toggel");
    // document.querySelector("#fa-menu").classList.remove("fa-icone-toggel");
    document.querySelector(".search-form").classList.remove("search-form-toggel");
    // document.querySelector("#fa-search").classList.remove("fa-icone-toggel");

}

function addContactInfo(){
  document.querySelector("#contact-info").classList.add("contact-info-toggel");
}
function removeContactInfo(){
  document.querySelector("#contact-info").classList.remove("contact-info-toggel");
}

window.onscroll = function(){
  document.getElementById("navbar").classList.remove("navbar-toggel");
  // document.querySelector(".login-form").classList.remove("login-form-toggel");
  // document.querySelector("#fa-search").classList.remove("fa-icone-toggel");
  // document.querySelector(".search-form").classList.remove("search-form-toggel");
}

function remove(){
  // document.querySelector(".login-form").classList.remove("login-form-toggel");

}


// -------------------------swipper-----------------------------------------
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

  