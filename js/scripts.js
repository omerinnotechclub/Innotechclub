	
/*--------------------------------------------------
Initialization General Scripts for all pages
---------------------------------------------------*/

  (function(cash) { "use strict";	
                  
				   
		/***********************************/
		/*Swiper Slider*/
		/**********************************/
		
		var swipers = [];

		function swiperInit(){

			var initIterator = 0;

			$('.swiper-container').each(function(){								  
				var th = $(this);								  
				var index = th.attr('id'); 
					$(this).addClass('swiper-'+index + ' initialized').attr('init-attr', 'swiper-'+index);
					$(this).find('.pagination').addClass('pagination-'+index);

					var autoPlayVar = parseInt($(this).attr('data-autoplay'), 10);
					var slidesPerViewVar = $(this).attr('data-slides-per-view');
					if(slidesPerViewVar != 'auto') {
						slidesPerViewVar = parseInt(slidesPerViewVar, 10);
					}
					var sliderSpeed = parseInt($(this).attr('data-speed'), 10);

					swipers ['swiper-'+index] = new Swiper('.swiper-'+index, {
						speed: sliderSpeed,
						loop: true,
						resistance: false,
						grabCursor: true,
						pagination: '.pagination-'+index,
						paginationClickable: true,
						autoplay: autoPlayVar,
						autoplayDisableOnInteraction: true,
						slidesPerView: slidesPerViewVar,
						keyboardControl: true,
						calculateHeight: true
					});
				swipers['swiper-'+index].reInit();
				initIterator++;

			});
		}

		$('.slide-prev').on('click', function() {
		  var arIndex = $(this).closest('.swiper-container').attr('init-attr');
		  swipers[arIndex].swipePrev();
		 });

		 $('.slide-next').on('click', function() {
		  var arIndex = $(this).closest('.swiper-container').attr('init-attr');
		  swipers[arIndex].swipeNext();
		 });

		swiperInit();

	/***********************************/
	/*Google Map Initialization*/
	/**********************************/
				   
	function initialize(obj) {
		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'images/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"), 10);
		var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}
		
			$('#myTab a').on('click', function(e) {
			  e.preventDefault()
			  $(this).tab('show');
			})
			
			 $(".togglec").hide();
            $(".togglet").on('click', function(e) {
                $(this).toggleClass("toggleta").next(".togglec").slideToggle(300);
                return true;
            });	 			   
	   
   if ($(window).width()>992){
	var paralax = skrollr.init({
      smoothScrolling: true,  
      easing: 'easing',
	  smoothScrollingDuration: 600,
	  forceHeight: false
    });	
   }
				   
	$(window).scroll(function() {
  
	    if ($('.time-line').length) {

		$('.time-line').not('.animated').each(function(){
		  if($(window).scrollTop() >= $(this).offset().top - $(this).height()){
		   $(this).addClass('animated').find('.timer').countTo();
		  } 
		 });	
	    
		}
			
		if ($('.start-line').length){	
	    if($(window).scrollTop() >= $('.start-line').offset().top - $('.start-line').height()){
		     $('.skill-line div').each(function(){
						var objel = $(this);
						var pb_width = objel.attr('data-width-pb');
						objel.css({'width':pb_width});
					});
		 }
		}
		//header
		if ($(window).width()>736) {
		 $('#header_ul').removeClass('header-animate');
         $('.list-container').removeClass('right-slide');
		 $('.header-links').removeClass('links-animate');
		 $('.link-menu').removeClass('minus');
		//header
		}
        var height = $('#hero').height()-65;
        var windscroll = $(window).scrollTop();
		if(windscroll >= 20){
		 $('#header').addClass('short');
		}
		else{
			$('#header').removeClass('short');
		}
		}).scroll();
		
        /***********************************/
		/*Video thumbs*/
		/**********************************/
		
        $('.video-click').on( "click", function() {
			$(this).find('iframe').attr('src',$(this).find('.img-href').attr('href') + '&autoplay=1');
              $(this).find('.video').show();
                $(this).find('.imgg-videos').hide();
			     $('.video-title').hide();
	    });
				   
		$('.video .fa').on('click', function() {
			$('.video').fadeOut(500, function(){
				$('.video iframe').attr('src','');
				$('.imgg-videos').show();
				$('.video-title').show();
			});
	    });
		
		/***********************************/
		/*Tabs Button*/
		/**********************************/
				   
	   	$('.tabs-menu ul li a').on('click', function() {
			var a = $(this);
			var active_tab_class = 'active-tab-menu';
			var the_tab = '.' + a.attr('data-tab');
				$('.tabs-menu ul li a').removeClass('active-tab-menu');
				   a.addClass('active-tab-menu');
						$('.tabs-content .tabs').css({
						  'display' : 'none'
						});
				   $(the_tab).show();
			return false;
			});	   
	
		/***********************************/
		/*Auto height function*/
		/**********************************/
		//header
		var headerwidth = function() {
				var width = $(window).width();
				
			};
		//header
		var setElementHeight = function() {
			var height = $(window).height();
			var width = $(window).width();
			if (width > 1024) {
				$('.full-height').css('height', (height));
				$('.theme-landing-sec').css('min-height', (height));
				
			} else {
				$('.theme-landing-sec').css('min-height', (height));
			}
		}

		$(window).on("resize", function() {
			setElementHeight();
			headerwidth();
		}).resize();
		
		/***********************************/
		/*submenu*/
		/**********************************/
    
        $('.submenu > a').on( "click", function() {
           var LinkThis = $(this).parent();
           if (LinkThis.find('ul').hasClass('slide-submenu')) {
               LinkThis.find('ul').removeClass('slide-submenu');
        }else {
             $('.submenu ul').removeClass('slide-submenu');
               LinkThis.find('ul').addClass('slide-submenu');
        }
        });

        /***********************************/
		/*contact page tabs*/
		/**********************************/
            
		$(document).on( 'click', "#profile-tab", function () {
		var $this = $(this);
			
		$this.on('shown.bs.tab', function () {	
        var $container = $('.izotope-container').isotope({
                itemSelector: '.itemm',
                layoutMode: 'masonry',
                masonry: {
                  columnWidth: '.grid-sizer'
                }
              });     
        
		});
				 
			
		  $('#map_canvas').addClass('opacity-zero');
		  $('.career-baner').removeClass('opacity-zero');
		});
		$(document).on( 'click', "#home-tab", function () {
			
		  $('#map_canvas').removeClass('opacity-zero');
		});
		$(document).on( 'click', "#share", function () {
			$('.share-links').toggleClass('share-links-hide');
		});
		
		/***********************************/
		/*Header*/
		/**********************************/
		$(document).on('click', ".handle", function () {
		  $('.onehomepage header').toggleClass('left');	
		  $('#header_ul').toggleClass('header-animate');
          $('.list-container').toggleClass('right-slide');
		  $('.header-links').toggleClass('links-animate');
		  $('.link-menu').toggleClass('minus');
		});
		/***********************************/
		/*Square-menu*/
		/**********************************/
		$(".sidemenu").square_menu();
		/***********************************/
		/*Filter button click*/
		/**********************************/
        $('.filter-img').on( 'click', function () {
        
           if ($('.onehomepage #filters').hasClass('active')) {
               $('.onehomepage #filters').removeClass('active');
			   $('.filter-img').removeClass('act');
           }else{
               $('.onehomepage #filters').addClass('active');
			   $('.filter-img').addClass('act');
           }
            return false;
        });
		/***********************************/
		/*Scene*/
		/**********************************/
		$('#scene').parallaxify({
					positionProperty: 'position',
					responsive: true,
					motionType: 'natural',
					mouseMotionType: 'performance',
					motionAngleX: 70,
					motionAngleY: 70,
					alphaFilter: 0.5,
					adjustBasePosition: true,
					alphaPosition: 0.025,
				});
				$('#ipad').parallaxify({
					positionProperty: 'position',
					responsive: true,
					motionType: 'natural',
					mouseMotionType: 'performance',
					motionAngleX: 70,
					motionAngleY: 70,
					alphaFilter: 0.5,
					adjustBasePosition: true,
					alphaPosition: 0.025,
				});
				$('#iphone').parallaxify({
					positionProperty: 'position',
					responsive: true,
					motionType: 'natural',
					mouseMotionType: 'performance',
					motionAngleX: 70,
					motionAngleY: 70,
					alphaFilter: 0.5,
					adjustBasePosition: true,
					alphaPosition: 0.025,
				});
			
			
			/***********************************/
			/*Page load animation*/
			/**********************************/	
			
			var wow = new WOW({
			boxClass: 'wow', 
			animateClass: 'animated', 
			offset: 0, 
			mobile: false,
			live: true	
			});

			   
			/***********************************/
			/*Subscribe JS*/
			/**********************************/
		
			$("#notifyMe").notifyMe();

          
			/*--------------------------------------------------
			Function Change Hader Background On Scroll
			---------------------------------------------------*/

				function HeaderBackground() {

					if ($("#hero").length <= 0) {
						$("#secondary-menu").removeClass("hide-secondary");
						$("header").addClass("hbg");
					};

					$(window).scroll(function() {    
						var scroll = $(window).scrollTop();

						if (scroll >= $("#hero").height()) {
							$("header").addClass("hbg");
							$("#secondary-menu").removeClass("hide-secondary");
						} else {
							$("header").removeClass("hbg");
							$("#secondary-menu").addClass("hide-secondary");
						}
					});

				}//End HeaderBackground

/*--------------------------------------------------
Function Menu Overlay Responsive
---------------------------------------------------*/	
	
	function MenuOverlayResponsive() {
	
		var winHeight = window.innerHeight
		var winWidth = window.innerWidth
		if (winWidth > 750) {
			$('.scr_menu').css( { 
				height : winHeight -250 + 'px',
				width : winWidth + 25 + 'px' 
			});
		} else {
			$('.scr_menu').css( { 
				height : winHeight -200 + 'px',
				width : winWidth + 25 + 'px' 
			});
		}
	
	}//End MenuOverlayNavPos
	
	
	
/*--------------------------------------------------
Function Hero Height
---------------------------------------------------*/	
	
	function HeroHeight() {
		if( $('#hero').length > 0 ){
			
			if ($('#hero').hasClass('hero-big')) {
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights + "px";
			} else if ($('#hero').hasClass('hero-small')) {
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights * 0.40 + "px";				
			} 
			else  {			
				var heights = window.innerHeight;
				document.getElementById("hero").style.height = heights + "px";
			} 
			
		}
		
	}//End HeroParallax
	
	
	
/*--------------------------------------------------
Function Hero Parallax
---------------------------------------------------*/	
	
	function HeroParallax() {
	
		var page_title = $('body');
			var block_intro = page_title.find('#hero');
			if( block_intro.length > 0 ) var block_intro_top = block_intro.offset().top;	
		$( window ).scroll(function() {
			var current_top = $(document).scrollTop(); 
			var hero_height = $('#hero').height();
			if( $('#hero').hasClass('parallax-hero')){			  
				block_intro.css('top', (current_top*0.5));			
			}
			if( $('#hero').hasClass('static-hero')){			  
				block_intro.css('top', (current_top*1));			
			}
			if( $('#hero').hasClass('opacity-hero')){				 
				block_intro.css('opacity', (1 - current_top/hero_height*1));
			}
		});
	
	}//End HeroParallax
	
/*--------------------------------------------------
Navigation Page Button
---------------------------------------------------*/
				   
$('.nav-page-tabs a').on('click', function(){
   if ($(this).hasClass('active')){
       $(this).removeClass('active');
   }else{
       $('.nav-page-tabs a').removeClass('active');
	   $(this).addClass('active');
   }
   return false;
});				   
	
/*--------------------------------------------------
Function Full Screen Slider
---------------------------------------------------*/	
		
	function FullScreenSlider() {
		
		if( $('.clapat-slider').length > 0 ){	
			$('.clapat-slider').flexslider({
				animation: "fade",
				direction: "horizontal",
				animationSpeed: 1000,
				animationLoop: true,
				controlNav: false,
				slideshow: false,				
				before: function(slider) {
					$('.clapat-caption').fadeOut().animate({top:'-80px'},{queue:false, easing: 'easeOutQuad', duration: 500});
					slider.slides.eq(slider.currentSlide).delay(500);
					slider.slides.eq(slider.animatingTo).delay(500);
				},
				after: function(slider) {
					$('.clapat-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'easeOutQuad', duration: 500});			
				},
				useCSS: true			
			});
		}
	}//End FullScreenSlider
	
				   
/*--------------------------------------------------
Load more button
---------------------------------------------------*/
				   
var load_more_content = $('.load-container').html();
	$(document).on('click', '.lode-more', function(){
		$('.load-container').append('<div class="ajax-slide" style="display: none;">'+load_more_content+'</div>');
		$('.ajax-slide').fadeIn(800, function(){$(this).replaceWith($(this).html())});
        var $container = $('.izotope-container');
              $container.isotope({
                itemSelector: '.itemm',
                layoutMode: 'masonry',
                masonry: {
                  columnWidth: '.grid-sizer'
                }
              });
		$(this).hide();
		$('.load-container').append('<span class="no-more">no more projects</span>')
		return false;
	});	
				   
/*--------------------------------------------------
Onepage navigation
---------------------------------------------------*/				   
				   
function setLocation(curLoc){
       location.hash = '#' + curLoc;
     }
   var top_menu = 0; 
   if ($(window).width() > 736){                 
   $('.onepage-menu .header-links').on('click', function(){
	    
       top_menu = $('.onepage-menu .header-links').index(this);
       if ($(this).hasClass('active')) {
           $(this).removeClass('active');
       } else {
		   $('#header_ul.header-menu').addClass('right');
		   $('.list-container').addClass('color');
		   $('.header-links').addClass('visi');
           $('.onepage-menu .header-links').removeClass('active');
           $(this).addClass('active');
           $('body,html').stop(true,true).animate({'scrollTop':$('.scrollto').eq(top_menu).offset().top},800); 
           setLocation($(this).attr('data-href'));
       }
       return false;
   }); 
	   
   } else {
	   
   $('.onepage-menu .header-links').on('click', function() {
	   $('#header_ul').toggleClass('header-animate');
          $('.list-container').toggleClass('right-slide');
		  $('.header-links').toggleClass('links-animate');
		  $('.link-menu').toggleClass('minus');
       top_menu = $('.onepage-menu .header-links').index(this);
       if ($(this).hasClass('active')) {
           $(this).removeClass('active');
       } else {
           $('.onepage-menu .header-links').removeClass('active');
           $(this).addClass('active');
           $('body,html').stop(true,true).animate({'scrollTop':$('.scrollto').eq(top_menu).offset().top - 50},800); 
           setLocation($(this).attr('data-href'));
       }
       return false;
   });
   }				   
	$('.handle').on('click', function () {
	      $('#header_ul.header-menu').removeClass('right');
		  $('.list-container').removeClass('color');
		  $('.header-links').removeClass('visi');
	});			   
/*--------------------------------------------------
Function Isotope Plugin
---------------------------------------------------*/
				   
        $('#header_ul li a').on('click', function(e) {
                    var url = $(this).attr('href');
                    if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
                    event.preventDefault();
                    $('body').animate({'opacity':'0'}, speed, function() {
                        window.location = url;
                    });
            }); 
				   
/*--------------------------------------------------
Window load
---------------------------------------------------*/				   
			
	   $('body').css({'opacity':'0'});
	   var speed = 1500;
		
		$(window).load(function() {
			
		 $('body').animate({'opacity':'1'}, speed);
          
		  if($('#map-canvas-contact').length==1){
		  initialize('map-canvas-contact');}
			
		  if ($('.izotope-container').length) { 
			 var $container = $('.izotope-container');
              $container.isotope({
                itemSelector: '.itemm',
                layoutMode: 'masonry',
                masonry: {
                  columnWidth: '.grid-sizer'
                }
              });
			  $('#filters').on( 'click', 'button', function() {
				$('.izotope-container').each(function(){
				   $(this).find('.itemm').removeClass('animated');
				});
				$('#filters button').removeClass('activbut');
				  $(this).addClass('activbut');
					 var filterValue = $(this).attr('data-filter');
						$container.isotope({filter: filterValue});
              });
	
           }
		if ($(window).width()>736){	
		   wow.init();
		}
			"use strict";			
			HeroHeight();
			HeroParallax();
			FullScreenSlider();
			
			if ($("#slider3_container").length){	
		    /***********************************/
			/*Client slider*/
			/**********************************/
					var options = {
					$AutoPlay: true,                                   
					$AutoPlaySteps: 1,                                  
					$AutoPlayInterval: 300,                            
					$PauseOnHover: 4,                              
					$ArrowKeyNavigation: true,   			            
					$SlideEasing: $JssorEasing$.$EaseLinear,         
					$SlideDuration: 3000,                             
					$MinDragOffsetToSlide: 20,                       
					$SlideWidth: 200,
					$SlideHeight: 170,
					$SlideSpacing: 0,
					$DisplayPieces: 6,
					$ParkingPosition: 0,
					$UISearchMode: 1,
					$PlayOrientation: 1,
					$DragOrientation: 1
				};

				var jssor_slider1 = new $JssorSlider$("slider3_container", options);
			}
		});



		    /*Feature Notes*/
		    $('.feature-note .plus-icon .plus').on('click', function() {
		        if ($(this).parents('.feature-note').hasClass('show-cont')) {
		            $(this).parents('.feature-note').removeClass('show-cont')
		        } else {
		            $(this).parents('.feature-note').addClass('show-cont')
		        }
		    });


		    // setInterval(function() {
	     //        var widnowHeight = $(window).height();
	     //        var introHeight = $(".welcome-heading").height();
	     //        var paddingTop = widnowHeight - introHeight;
	     //        $(".welcome-heading").css({
	     //            'padding-top': Math.round(paddingTop / 2) + 'px',
	     //            'padding-bottom': Math.round(paddingTop / 2) + 'px'
	     //        });
	     //    }, 10);

            (function () {
			'use strict';
				var windowHeight = $(window).height();
	            $(".static-bg").css({
	                'height': windowHeight + 'px'
	            });
			}());

			/*=======================================================
	            Magnific Pop Up
	        ======================================================*/
	        $('.popup-youtube').magnificPopup({
	            disableOn: 700,
	            type: 'iframe',
	            mainClass: 'my-mfp-zoom-in',
	            removalDelay: 160,
	            preloader: false,
	            fixedContentPos: false
	        });




})(jQuery);

