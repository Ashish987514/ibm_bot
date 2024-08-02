$(document).ready(function(){
$( "#homeorders" ).load( "/content/homeportal/en/homedepartment/order.html #example1",function(){
		$('#example1 tbody').html($('#example1 tbody').find('tr').get().reverse());
$('#example1 tbody').html($('#example1 tbody').find('tr:lt(5)').get());

		var table = $('#example1').DataTable({
            		"searching": false,
            		"lengthChange": false,
            		"info":false,
            		"paging": false,
					"columnDefs" : [ {
						"searchable" : true,
						"orderable" : false,
						"targets" : '_all'
					} ],
					"order" : []
				});

				table.on('order.dt search.dt', function() {
					table.column(0, {
						search : 'applied',
						order : 'applied'
					}).nodes().each(function(cell, i) {
						cell.innerHTML = i + 1;
					});
				}).draw();
 	});  

});
$(document).ready(function(){
$( "#homecirculars" ).load( "/content/homeportal/en/homedepartment/circulars.html #circularshomedepartment",function(){
		$('#circularshomedepartment tbody').html($('#circularshomedepartment tbody').find('tr').get().reverse());
    $('#circularshomedepartment tbody').html($('#circularshomedepartment tbody').find('tr:lt(5)').get());
		var table = $('#circularshomedepartment').DataTable({
            		"searching": false,
            		"lengthChange": false,
            		"info":false,
            		"paging": false,
					"columnDefs" : [ {
						"searchable" : true,
						"orderable" : false,
						"targets" : '_all'
					} ],
					"order" : []
				});

				table.on('order.dt search.dt', function() {
					table.column(0, {
						search : 'applied',
						order : 'applied'
					}).nodes().each(function(cell, i) {
						cell.innerHTML = i + 1;
					});
				}).draw();
 	});  

});

$(document).ready(function(){
$( "#homemeetingnotices" ).load( "/content/homeportal/en/homedepartment/notification.html #tendershomedepartment",function(){
		$('#tendershomedepartment tbody').html($('#tendershomedepartment tbody').find('tr').get().reverse());
    $('#tendershomedepartment tbody').html($('#tendershomedepartment tbody').find('tr:lt(5)').get());
		var table = $('#tendershomedepartment').DataTable({
            		"searching": false,
            		"lengthChange": false,
            		"info":false,
            		"paging": false,
					"columnDefs" : [ {
						"searchable" : true,
						"orderable" : false,
						"targets" : '_all'
					} ],
					"order" : []
				});

				table.on('order.dt search.dt', function() {
					table.column(0, {
						search : 'applied',
						order : 'applied'
					}).nodes().each(function(cell, i) {
						cell.innerHTML = i + 1;
					});
				}).draw();
 	});  

});







$(document).ready(function(){
$( "#jailnews" ).load( "/content/homeportal/en/jaildepartment/orders.html #circularsjaildepartment",function(){
		$('#circularsjaildepartment tbody').html($('#circularsjaildepartment tbody').find('tr').get().reverse());
		var table = $('#circularsjaildepartment').DataTable({
            		"searching": false,
            		"lengthChange": false,
            		"info":false,
            		"paging": false,
					"columnDefs" : [ {
						"searchable" : true,
						"orderable" : false,
						"targets" : '_all'
					} ],
					"order" : []
				});

				table.on('order.dt search.dt', function() {
					table.column(0, {
						search : 'applied',
						order : 'applied'
					}).nodes().each(function(cell, i) {
						cell.innerHTML = i + 1;
					});
				}).draw();
 	});  

});
$(document).ready(function(){
$( "#jailcircular" ).load( "/content/homeportal/en/jaildepartment/circular.html #circularsjaipurcitypolice",function(){
		$('#circularsjaipurcitypolice tbody').html($('#circularsjaipurcitypolice tbody').find('tr').get().reverse());
		var table = $('#circularsjaipurcitypolice').DataTable({
            		"searching": false,
            		"lengthChange": false,
            		"info":false,
            		"paging": false,
					"columnDefs" : [ {
						"searchable" : true,
						"orderable" : false,
						"targets" : '_all'
					} ],
					"order" : []
				});

				table.on('order.dt search.dt', function() {
					table.column(0, {
						search : 'applied',
						order : 'applied'
					}).nodes().each(function(cell, i) {
						cell.innerHTML = i + 1;
					});
				}).draw();
 	});  

});
$(document).ready(function(){
$( "#jailtender" ).load( "/content/homeportal/en/jaildepartment/tender.html #tendersjaildepartment",function(){
		$('#tendersjaildepartment tbody').html($('#tendersjaildepartment tbody').find('tr').get().reverse());

		var table = $('#tendersjaildepartment').DataTable({
            		"searching": false,
            		"lengthChange": false,
            		"info":false,
            		"paging": false,
					"columnDefs" : [ {
						"searchable" : true,
						"orderable" : false,
						"targets" : '_all'
					} ],
					"order" : []
				});

				table.on('order.dt search.dt', function() {
					table.column(0, {
						search : 'applied',
						order : 'applied'
					}).nodes().each(function(cell, i) {
						cell.innerHTML = i + 1;
					});
				}).draw();
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