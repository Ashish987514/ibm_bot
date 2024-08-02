/*$(document).ready(function(){createPopup()
$(".popup-close").click(function(){$(".popup-overlay").fadeOut()
});
checklocalStorage();
$(document).on("click",function(a){if($(a.target).parents(".popup-overlay").size()==0&&(!$(a.target).is(".popup-close"))){$(".popup-overlay").fadeOut()
}})
});
function checklocalStorage(){save_ToLocalStorage("popup","shown");
$(".popup-overlay").fadeIn();
$(".popup-close").focus();
$(document).on("keyup",function(a){if(a.keyCode==9){$("#aem-popup-cls").hide();
$(".overlay-new").hide()
}})
}function createPopup(){$("body").append('<div class="popup-overlay" id="aem-popup-cls"><div class="popup-wrap"><a href="#" class="popup-close"><img src="/content/dam/doitassets/common/images/popup/close.png" alt="close pop-up"></a><div class="modal-popup"><iframe height="600px" width="100%" src="https://jankalyan.rajasthan.gov.in/rajadvt/#"></iframe></div></div></div>')
}function save_ToLocalStorage(a,b){b=JSON.stringify(b);
localStorage.setItem(a,b)
}function fetch_fromLocalStorage(a){var b=localStorage.getItem(a);
return JSON.parse(b)
};*/

$(document).ready(function() {
  
     createPopup();
    $('.popup-overlay').show();

    $(".popup-close").click(function() {
        $(".popup-overlay").fadeOut()
    });
    checklocalStorage();
    $(document).on("click", function(b) {
        if ($(b.target).parents(".popup-overlay").size() == 0 && (!$(b.target).is(".popup-close"))) {
            $(".popup-overlay").fadeOut()
        }
    });
    setInterval(function() {
        localStorage.removeItem("popup")
    }, 180000)
});

function checklocalStorage() {
    save_ToLocalStorage("popup", "shown");
    $(".popup-overlay").fadeIn();
    $(".popup-close").focus();
    $(document).on("keyup", function(b) {
        if (b.keyCode == 9) {
            $("#aem-popup-cls").hide();
            $(".overlay-new").hide()
        }
    })
}

function createPopup() {
    $("body").append('<div class="popup-overlay" id="aem-popup-cls"><div class="popup-wrap"><span class="popup-close"><img src="/content/dam/doitassets/common/images/popup/close.png" alt="close pop-up"></span><div class="modal-popup"><iframe height="600px" width="100%" src="https://rajadvt.rajasthan.gov.in/#/"></iframe></div></div></div>')
}

function save_ToLocalStorage(d, c) {
    c = JSON.stringify(c);
    localStorage.setItem(d, c)
}

function fetch_fromLocalStorage(d) {
    var c = localStorage.getItem(d);
    return JSON.parse(c)
}
var slideIndex = 0;

function showSlides() {
    var a;
    var b = document.getElementsByClassName("mySlides");
    var c = document.getElementsByClassName("dot");
    for (a = 0; a < b.length; a++) {
        b[a].style.display = "none"
    }
    slideIndex++;
    if (slideIndex > b.length) {
        slideIndex = 1
    }
    for (a = 0; a < c.length; a++) {
        c[a].className = c[a].className.replace(" active", "")
    }
    b[slideIndex - 1].style.display = "block";
    c[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000)
};