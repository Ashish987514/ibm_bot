///////////////////////

jQuery(function($) {
    var originalSize = $('p').css('font-size');
    $(".resetMe").click(function () {
        $('p').css('font-size', '');
        $('h4').css('font-size', '');
        $('.main-slider .flexslider .slides li .slider-text .inner h4').css('font-size','');

        $('.heading').css('font-size', '');
        $('.navbar-default .navbar-nav > li > a').css('font-size', '');
        $('.time').css('font-size', '');
        $('.headings').css('font-size', '');
        $('.counter').css('font-size', '');
        $('.popular-post li a').css('font-size', '');
        $('#cssmenu > ul > li > a').css('font-size', '');
		return false;
		return false;

    });


    $(".increase").click(function () {
        curSize= parseInt($('p').css('font-size')) + 2;

        curSize1= parseInt($('h4').css('font-size')) + 2;
        curSize2= parseInt($('.main-slider .flexslider .slides li .slider-text .inner h4').css('font-size')) + 2;
        curSize3= parseInt($('.heading').css('font-size')) + 2;
        curSize4= parseInt($('.navbar-default .navbar-nav > li > a').css('font-size')) + 2;
        curSize5= parseInt($('.time').css('font-size')) + 2;
        curSize6= parseInt($('.headings').css('font-size')) + 2;
        curSize7= parseInt($('.counter').css('font-size')) + 2;
        curSize8= parseInt($('.popular-post li a').css('font-size')) + 2;
        curSize9= parseInt($('#cssmenu > ul > li > a').css('font-size')) + 2;
  if(curSize<=18)
  {
        $('p').css('font-size', curSize);
  }

        if(curSize1<=20)
  {
        $('h4').css('font-size', curSize1);
  }
        if(curSize2<=40)
  {
        $('.main-slider .flexslider .slides li .slider-text .inner h4').css('font-size', curSize2);
  }
         if(curSize3<=42)
  {
        $('.heading').css('font-size', curSize3);
  }

           if(curSize4<=21)
  {
        $('.navbar-default .navbar-nav > li > a').css('font-size', curSize4);
  }

           if(curSize5<=20)
  {
        $('.time').css('font-size', curSize5);
  }

           if(curSize6<=20)
  {
        $('.headings').css('font-size', curSize6);
  }
                if(curSize7<=40)
  {
        $('.counter').css('font-size', curSize7);
  }
                     if(curSize8<=22)
  {
        $('.popular-post li a').css('font-size', curSize8);
  }
         if(curSize9<=18)
  {
        $('#cssmenu > ul > li > a').css('font-size', curSize9);
  }

    });


    $(".decrease").click(function () {
       curSize= parseInt($('p').css('font-size')) - 2;
        curSize1= parseInt($('h4').css('font-size')) - 2;
        curSize2= parseInt($('.main-slider .flexslider .slides li .slider-text .inner h4').css('font-size')) - 2;
        curSize3= parseInt($('.heading').css('font-size')) - 2;
        curSize4= parseInt($('.navbar-default .navbar-nav > li > a').css('font-size')) - 2;
        curSize5= parseInt($('.time').css('font-size')) - 2;
        curSize6= parseInt($('.headings').css('font-size')) - 2;
        curSize7= parseInt($('.counter').css('font-size')) - 2;
        curSize8= parseInt($('.popular-post li a').css('font-size')) - 2;
        curSize9= parseInt($('#cssmenu > ul > li > a').css('font-size')) - 2;
  if(curSize>=8)
  {
        $('p').css('font-size', curSize);
  }

        if(curSize1>=10)
  {
        $('h4').css('font-size', curSize1);
  }
        if(curSize2>=20)
  {
        $('.main-slider .flexslider .slides li .slider-text .inner h4').css('font-size', curSize2);
  }
if(curSize3>=10)
  {
        $('.heading').css('font-size', curSize3);
  }


           if(curSize4>=10)
  {
        $('.navbar-default .navbar-nav > li > a').css('font-size', curSize4);
  }

            if(curSize5>=10)
  {
        $('.time').css('font-size', curSize5);
  }

            if(curSize6>=10)
  {
        $('.headings').css('font-size', curSize6);
  }
                  if(curSize7>=20)
  {
        $('.counter').css('font-size', curSize7);
  }
                       if(curSize8>=10)
  {
        $('.popular-post li a').css('font-size', curSize8);
  }
        if(curSize9>=11)
  {
        $('#cssmenu > ul > li > a').css('font-size', curSize9);
  }
    });
});





function switch_style(title) {
	
    var i, a, main;
    for (i = 0; (a = document.getElementsByTagName("link")[i]) ; i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) a.disabled = false;
        }
    }
}

function getActiveStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]) ; i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
    }
    return null;
}

function getPreferredStyleSheet() {
    var i, a;
    for (i = 0; (a = document.getElementsByTagName("link")[i]) ; i++) {
        if (a.getAttribute("rel").indexOf("style") != -1
           && a.getAttribute("rel").indexOf("alt") == -1
           && a.getAttribute("title")
           ) return a.getAttribute("title");
    }
    return null;
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function (e) {
    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    switch_style(title);
}

window.onunload = function (e) {
    var title = getActiveStyleSheet();
    createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
switch_style(title);	

////


$(document).ready(function () {
$("a").each(function(e) {
if (this.href.split('.').pop() == 'pdf') {
    var thisdata = $(this).attr('href');
    var newlink = thisdata.slice(0,thisdata.length-4);;
    $(this).attr('href', newlink);
    $(this).attr('target', '');
    $(this).attr('class', 'pdf_link1');
}
if (this.href.split('.').pop() == 'PDF') {
    var thisdata = $(this).attr('href');
    var newlink = thisdata.slice(0,thisdata.length-4);;
    $(this).attr('href', newlink);
    $(this).attr('target', '');
    $(this).attr('class', 'pdf_link2');
}
});

$("body").on("click","a.pdf_link1", function(e){
 e.preventDefault();
let str1 = $(this).attr('href');
let str2 = ".pdf";
let res = str1.concat(str2);
window.open(res, '_blank');
});
$("body").on("click","a.pdf_link2", function(e){
 e.preventDefault();
let str1 = $(this).attr('href');
let str2 = ".PDF";
let res = str1.concat(str2);
window.open(res, '_blank');
});


// to add alt text in image

jQuery("img").each(function() {
    var img = jQuery(this);
    if (!img.attr("alt") || img.attr("alt") == "")
   {
    var src = jQuery(this).attr('src').split('/');
     var file = src[src.length - 1];
       var filename = file.split('.').slice(0, -1).join('.');
        img.attr("alt", filename);
    }
    });


/* remove empty headings   */
$('h2').each(function(){ 
    if( $(this).text().trim() === '' )
        $(this).remove(); 
});
$('h1').each(function(){ 
    if( $(this).text().trim() === '' )
        $(this).remove(); 
});

$('h3').each(function(){ 
    if( $(this).text().trim() === '' )
        $(this).remove(); 
});

$('h4').each(function(){ 
    if( $(this).text().trim() === '' )
        $(this).remove(); 
});

$('h5').each(function(){ 
    if( $(this).text().trim() === '' )
        $(this).remove(); 
});
$('#sea').attr("aria-label","Enter Search Keyword");

});