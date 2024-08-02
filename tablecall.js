$(document).ready(function(){
$( "#rpanews" ).load( "/content/homeportal/en/rajasthanpoliceacademy/latestnews.html #whatsrpa",function(){
		$('#whatsrpa tbody').html($('#whatsrpa tbody').find('tr').get().reverse());
		var table = $('#whatsrpa').DataTable({
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
$( "#tenders1" ).load( "/content/homeportal/en/rajasthanpoliceacademy/tenders.html #tendersrpa",function(){
		$('#tendersrpa tbody').html($('#tendersrpa tbody').find('tr').get().reverse());
		var table = $('#tendersrpa').DataTable({
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
$( "#rpanews" ).load( "/content/homeportal/en/rajasthanpoliceacademy/latestnews.html #whatsrpa",function(){
		$('#whatsrpa tbody').html($('#whatsrpa tbody').find('tr').get().reverse());
		var table = $('#whatsrpa').DataTable({
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
$( "#acbpressnote" ).load( "/content/homeportal/en/acbdepartment/pressrelease.html .custom-table",function(){
		$('.custom-table').html($('.custom-table').find('tr').get().reverse());
    $('.custom-table').html($('.custom-table').find('tr:lt(5)').get());
		var table = $('.custom-table').DataTable({
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
$( "#acbtenders" ).load( "/content/homeportal/en/acbdepartment/tender.html #tendersacb",function(){
		$('#tendersacb tbody').html($('#tendersacb tbody').find('tr').get().reverse());
    $('#tendersacb tbody').html($('#tendersacb tbody').find('tr:lt(5)').get());
		var table = $('#tendersacb').DataTable({
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
$( "#fsltenders" ).load( "/content/homeportal/en/stateforensicsciencelaboratorydepartment/orderandcirculars/tenders.html #tendersforensicdepartment",function(){
		$('#tendersforensicdepartment tbody').html($('#tendersforensicdepartment tbody').find('tr').get().reverse());
		var table = $('#tendersforensicdepartment').DataTable({
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
$( "#fslorders" ).load( "/content/homeportal/en/stateforensicsciencelaboratorydepartment/orderandcirculars/importantordercircular.html #circularsforensicdepartment",function(){
		$('#circularsforensicdepartment tbody').html($('#circularsforensicdepartment tbody').find('tr').get().reverse());
		var table = $('#circularsforensicdepartment').DataTable({
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
$( "#barmerpoliceorders" ).load( "/content/homeportal/en/barmerpolice/tenders.html #tendersbarmerpolice",function(){
		$('#tendersbarmerpolice tbody').html($('#tendersbarmerpolice tbody').find('tr').get().reverse());
		var table = $('#tendersbarmerpolice').DataTable({
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
$( "#notifications" ).load( "/content/homeportal/en/homeguardsdepartment/circularandorders.html #ordersAndNotifications",function(){
    $('#ordersAndNotifications').removeAttr("border");
    $('#ordersAndNotifications tr td').css("padding","15px");
    $('#ordersAndNotifications tbody').find('tr').first().remove();

    $('#ordersAndNotifications tbody tr').each(function() {
        $(this).find("td:eq(1)").remove();
	});

    $('#ordersAndNotifications tbody').html($('#ordersAndNotifications tbody').find('tr:lt(5)').get());
		var table = $('#ordersAndNotifications').DataTable({
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
$( "#standing-orders" ).load( "/content/homeportal/en/homeguardsdepartment/standing-orders-.html #circularsrpd",function(){
    $('#circularsrpd tbody tr td').css("padding","15px");
	$('#circularsrpd tbody tr').each(function() {
        $(this).find("td:eq(0)").remove();
        $(this).find("td:eq(1)").remove();
	});
    $('#circularsrpd tbody').html($('#circularsrpd tbody').find('tr').get().reverse());
    $('#circularsrpd tbody').html($('#circularsrpd tbody').find('tr:lt(5)').get());
		var table = $('#circularsrpd').DataTable({
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
$('div[align="right"]').remove();
});




