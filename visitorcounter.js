$(document).ready(function(){
    var totalCount = localStorage.getItem("visitorcounter");
                $('#visitorCounter').html(totalCount);
    var website_id = $("#analytics-script").attr("data-website-id");
    $.ajax({
        url: "/bin/raj/analytics/get",
        type: "Post",
        async: true,
        data: {
            "website_uuid": website_id
        },
        success: function(response) {
            console.log(response);
            var newCount = response.pageViews;
            if (newCount) {
                newCount = parseInt(newCount);
                if (isNaN(newCount)) newCount = 0;
                var oldCount = $("#analytics-script").data("old-count");
                var totalCount = oldCount + newCount;
                $('#visitorCounter').html(totalCount);
                localStorage.setItem('visitorcounter', totalCount);
            } else {
                var totalCount = localStorage.getItem("visitorcounter");
                $('#visitorCounter').html(totalCount);
            }
        },
        error: function(xhr, status, error) {
            var totalCount = localStorage.getItem("visitorcounter");
            $('#visitorCounter').html(totalCount);
            console.log("Error:", error);
        }
    });
});
$(document).ready(function() {
      $('a').each(function() {
        if ($(this).text().trim() === '' && $(this).find('img').length === 0) {
          $(this).remove();
        }
      });
    });

$("img").each(function() {
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
$(document).ready(function(){
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
    });
