/* -- Full Screen Viewport Container
   ---------------------------- */

$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
    init();
});

$(document).ready(function() {
  fullScreenContainer();
});



/* --- initialize functions on window load here -------------- */

function init() {
  onePageScroll();
  scrollAnchor();
  initializeMap();
  initializeLinks();
}



/* --- Full Screen Container ------------- */

function fullScreenContainer() {

  // Set Initial Screen Dimensions

  var screenWidth = $(window).width() + "px";
  var screenHeight = $(window).height() + "px";

  $("#intro, #intro .item, #intro-video").css({
    width: screenWidth,
    height: screenHeight
  });

  var img = document.getElementById('main-image'); 
  var imgHeight = img.clientHeight;
  $("#main-image").css({
    marginTop: (($(window).height() - imgHeight)/2) + "px"
  });

  // Every time the window is resized...

  $(window).resize( function () {

    // Fetch Screen Dimensions

    var screenWidth = $(window).width() + "px";
    var screenHeight = $(window).height() + "px";
      
    // Set Slides to new Screen Dimensions
    
    $("#intro, #intro .item, #intro-video, #intro-video .item").css({
      width: screenWidth,
      height: screenHeight
    });

    var img = document.getElementById('main-image'); 
    var imgHeight = img.clientHeight;
    $("#main-image").css({
      marginTop: (($(window).height() - imgHeight)/2) + "px"
    }); 
      
  });

}


/* --- Initialize links ------------------- */

function initializeLinks() {
  $("section#about a").on("click", function(){
    $(this).parent().find("p").slideToggle();
  });
}

/* --- scrollReveal ------------------- */

window.scrollReveal = new scrollReveal();
  




/* --- Scroll to Anchor ------------------- */

function scrollAnchor() {

  // scroll to specific anchor
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 650);
        return false;
      }
    }
  });
  
}


function initializeMap() {
  //---- Main google maps initializing ----
  if (document.getElementById("gmaps")) {
    var myOptions1 = { 
      //disable scrolling on mobile
      draggable: false,
      //Coordinates of the map's center
      center: new google.maps.LatLng(-33.946219, 18.377555), 
      //Zoom level
      zoom: 15,
      //Type of map (possible values .ROADMAP, .HYBRID, .SATELLITE, .TERRAIN)
      mapTypeId: google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          scrollwheel: false
    };
    //Define the map and select the element in which it will be displayed
    var map1 = new google.maps.Map(document.getElementById("gmaps"),myOptions1);
    var marker1 = new google.maps.Marker({
      //Coordinate of the marker's location
      position: new google.maps.LatLng(-33.946219, 18.377555),
      map: map1,
      //Text that will be displayed when the mouse hover on the marker
      title:"Donkerkloof"
    });
    
    if (document.getElementById("is-contact-page")) {
      var contentString = "<div id='contact-info-window'>Donkerkloof Private Game Reserve</div>";
      
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      
      infowindow.open(map1,marker1);
    }
  }
}

/* --- One Page Scroll ------------------- */

function onePageScroll() {
  $('.nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 650,
      scrollOffset: 30,
      scrollThreshold: 0.5,
      filter: ':not(.login, .signup)',
      easing: 'swing',
      begin: function() {
          //I get fired when the animation is starting
      },
      end: function() {
          //I get fired when the animation is ending
      },
      scrollChange: function($currentListItem) {
          //I get fired when you enter a section and I pass the list item of the section
      }
  });
}


$(window).scroll(function() {
  var windowpos = $(window).scrollTop() ;

  if (windowpos <= 500) {
      $('.nav li.current').removeClass('current');
  }
});

