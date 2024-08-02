/* DROPDOWN MENU */
jQuery(document).ready(function () {
    "use strict";
    jQuery('#mainmenu > ul > li:has(ul) > span').addClass("has-sub");
	jQuery('#mainmenu > ul > li > ul > li:has(ul) > span').addClass("has-sub");
    jQuery('#mainmenu > ul > li > ul > li > ul > li:has(ul) > span').addClass("has-sub");
});

jQuery('#mainmenu ul > li > span').click(function () {
    "use strict";
    var checkElement = jQuery(this).next();

    if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        checkElement.slideUp(300);
        jQuery(this).removeClass("has-sub2");
        jQuery(this).addClass("has-sub");
        checkElement.removeClass("animated-fast fadeInLeft");
        checkElement.addClass("animated-fast fadeOut");
    }


    if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
       // jQuery('#mainmenu ul ul ul:visible').slideUp(300);
        //checkElement.slideDown(100);
        jQuery('#mainmenu > ul > li:has(ul) > span').removeClass("has-sub2");
		 jQuery('#mainmenu > ul > li:has(ul) > span').addClass("has-sub");
		 jQuery(this).addClass("has-sub2");
        checkElement.removeClass("animated-fast fadeOut");
        checkElement.addClass("animated-fast fadeInLeft");
    } 



 if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {

        jQuery('#mainmenu ul ul ul ul:visible').slideUp(300);
        checkElement.slideDown(100);
        jQuery('#mainmenu > ul > ul > li:has(ul) > span').removeClass("has-sub3");
		 jQuery('#mainmenu > ul > ul > li:has(ul) > span').addClass("has-sub");
         jQuery(this).addClass("has-sub3");
       checkElement.removeClass("animated-fast fadeOut");
       checkElement.addClass("animated-fast fadeIn");
    }


   
    if (checkElement.is('ul')) {
        return false;
    } 
	 	else {
        return true;
    }
});





