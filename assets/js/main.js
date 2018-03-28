// Hero Unit Carousel
$(document).ready(function(){
	$('#carouselFade').carousel({
		interval: 2500,
		cycle : true
	});
});
// Testimonial Slider
$(document).ready(function(){
	$('#testimonial_slider').carousel({
		interval: 2500,
		cycle : true
	});
});

// Header Toggle
var sub_height = $('.tms-navbar').height();
$(function() {
	$('.tms-toogle-down a').on('click', function(e) {
		// e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - sub_height}, 700, 'linear');
	});
});

// Smooth scrolling
if( $(window).width() >= 768 ) {
	var substractHeight = $('.tms-navbar').height();
	// console.log(substractHeight);
} else {
	var substractHeight = $('.navbar-header').height();
}
$('.tms-navbar a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - substractHeight
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Change Menu Color When Scrolling....
$(document).ready(function(){
    var aChildren = $(".tms-navbar .tms-nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
			
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-temp");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-temp");
            }
        }
        if(windowPos + windowHeight == docHeight) {
            if (!$(".tms-navbar .tms-nav li:last-child a").hasClass("nav-temp")) {
                var navActiveCurrent = $("nav-temp").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-temp");
                $(".tms-navbar .tms-nav li:last-child a").addClass("nav-temp");
            }
        }
    });
});

$(window).scroll(function() {
	if($(window).width() > 1024){
		if($(window).scrollTop() >= 50 ) {
   			$(".navbar.tms-navbar").addClass("bgcolor");
			$(".navbar.tms-navbar .nav.navbar-nav li a").addClass("tms-scroll-nav-a-color");
			} 
	   	else {
			$(".navbar.tms-navbar").removeClass("bgcolor")
			$(".navbar.tms-navbar .nav.navbar-nav li a").removeClass("tms-scroll-nav-a-color");
	   	}
	}
	else {
		if($(window).scrollTop() >= 50 ) {
   // 			$(".navbar.tms-navbar").addClass("bgcolor");
			// $(".navbar.tms-navbar .nav.navbar-nav li a").addClass("tms-scroll-nav-a-color");
   		} 
	   	else {
			$(".navbar.tms-navbar").removeClass("bgcolor")
			$(".navbar.tms-navbar .nav.navbar-nav li a").removeClass("tms-scroll-nav-a-color");
	   	}
	}
});
$(window).scroll(function() {
	if($(window).width() > 1024){
		$(".navbar.tms-navbar .nav.tms-nav li a").on("click", function(){
			$(".navbar.tms-navbar .nav.tms-nav li a").removeClass("active");
			$(this).addClass("active");
		})
	}
	else{
		$(".navbar.tms-navbar .nav.tms-nav li a").on("click", function(){
			$(".navbar.tms-navbar .nav.tms-nav li a").removeClass("active");
		})
	}
});


// Navbar collapsing
$(".navbar-nav li a").click(function (event) {
	var toggle = $(".navbar-toggle").is(":visible");
	if (toggle) {
		$(".navbar-collapse").collapse('hide');
	}
});
// Portflio Tab Navigation
$('.tms-tab-box').click(function() {
	$('.tms-tab-box-hover .tms-tab-box').removeClass('active');
	$(this).addClass('active');	
})