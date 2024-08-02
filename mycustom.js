	$(document).ready(
			function() {
				$('#whatsrpa tbody').html(
						$('#whatsrpa tbody').find('tr').get().reverse());

				var table = $('#whatsrpa').DataTable({
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



	$(document).ready(
			function() {
				$('#tendersrpa tbody').html(
						$('#tendersrpa tbody').find('tr').get().reverse());

				var table = $('#tendersrpa').DataTable({
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




	$(document).ready(
			function() {
				$('#circularsrpa tbody').html(
						$('#circularsrpa tbody').find('tr').get().reverse());

				var table = $('#circularsrpa').DataTable({
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




	$(document).ready(
			function() {
				$('#latestnewsacb tbody').html(
						$('#latestnewsacb tbody').find('tr').get().reverse());

				var table = $('#latestnewsacb').DataTable({
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

	$(document).ready(
			function() {
				$('#circularsacb tbody').html(
						$('#circularsacb tbody').find('tr').get().reverse());

				var table = $('#circularsacb').DataTable({
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




	$(document).ready(
			function() {
				$('#tendersacb tbody').html(
						$('#tendersacb tbody').find('tr').get().reverse());

				var table = $('#tendersacb').DataTable({
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

	




	$(document).ready(
			function() {
				$('#latestnewsajmerpolice tbody').html(
						$('#latestnewsajmerpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsajmerpolice').DataTable({
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




	$(document).ready(
			function() {
				$('#circularsajmerpolice tbody').html(
						$('#circularsajmerpolice tbody').find('tr').get().reverse());

				var table = $('#circularsajmerpolice').DataTable({
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



	$(document).ready(
			function() {
				$('#tendersajmerpolice tbody').html(
						$('#tendersajmerpolice tbody').find('tr').get().reverse());

				var table = $('#tendersajmerpolice').DataTable({
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



	$(document).ready(
			function() {
				$('#circularspolice tbody').html(
						$('#circularspolice tbody').find('tr').get().reverse());

				var table = $('#circularspolice').DataTable({
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



	$(document).ready(
			function() {
				$('#tenderspolice tbody').html(
						$('#tenderspolice tbody').find('tr').get().reverse());

				var table = $('#tenderspolice').DataTable({
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




	$(document).ready(
			function() {
				$('#latestnewspolice tbody').html(
						$('#latestnewspolice tbody').find('tr').get().reverse());

				var table = $('#latestnewspolice').DataTable({
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



	$(document).ready(
			function() {
				$('#circularshomedepartment tbody').html(
						$('#circularshomedepartment tbody').find('tr').get().reverse());

				var table = $('#circularshomedepartment').DataTable({
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


	$(document).ready(
			function() {
				$('#tendershomedepartment tbody').html(
						$('#tendershomedepartment tbody').find('tr').get().reverse());

				var table = $('#tendershomedepartment').DataTable({
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




	$(document).ready(
			function() {
				$('#latestnewshomedepartment tbody').html(
						$('#latestnewshomedepartment tbody').find('tr').get().reverse());

				var table = $('#latestnewshomedepartment').DataTable({
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



	$(document).ready(
			function() {
				$('#circularsrphandcc tbody').html(
						$('#circularsrphandcc tbody').find('tr').get().reverse());

				var table = $('#circularsrphandcc').DataTable({
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



	$(document).ready(
			function() {
				$('#tendersrphandcc tbody').html(
						$('#tendersrphandcc tbody').find('tr').get().reverse());

				var table = $('#tendersrphandcc').DataTable({
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



	$(document).ready(
			function() {
				$('#latestnewsrphandcc tbody').html(
						$('#latestnewsrphandcc tbody').find('tr').get().reverse());

				var table = $('#latestnewsrphandcc').DataTable({
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



	$(document).ready(
			function() {
				$('#circularhomeguard tbody').html(
						$('#circularhomeguard tbody').find('tr').get().reverse());

				var table = $('#circularhomeguard').DataTable({
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


	$(document).ready(
			function() {
				$('#tendershomeguard tbody').html(
						$('#tendershomeguard tbody').find('tr').get().reverse());

				var table = $('#tendershomeguard').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewshomeguard tbody').html(
						$('#latestnewshomeguard tbody').find('tr').get().reverse());

				var table = $('#latestnewshomeguard').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsjaildepartment tbody').html(
						$('#circularsjaildepartment tbody').find('tr').get().reverse());

				var table = $('#circularsjaildepartment').DataTable({
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


	$(document).ready(
			function() {
				$('#tendersjaildepartment tbody').html(
						$('#tendersjaildepartment tbody').find('tr').get().reverse());

				var table = $('#tendersjaildepartment').DataTable({
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



	$(document).ready(
			function() {
				$('#latestnewsjaildepartment tbody').html(
						$('#latestnewsjaildepartment tbody').find('tr').get().reverse());

				var table = $('#latestnewsjaildepartment').DataTable({
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



	$(document).ready(
			function() {
				$('#circularsforensicdepartment tbody').html(
						$('#circularsforensicdepartment tbody').find('tr').get().reverse());

				var table = $('#circularsforensicdepartment').DataTable({
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


	$(document).ready(
			function() {
				$('#tendersforensicdepartment tbody').html(
						$('#tendersforensicdepartment tbody').find('tr').get().reverse());

				var table = $('#tendersforensicdepartment').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewsforensicdepartment tbody').html(
						$('#latestnewsforensicdepartment tbody').find('tr').get().reverse());

				var table = $('#latestnewsforensicdepartment').DataTable({
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

	$(document).ready(
			function() {
				$('#circularsprosecutiondepartment tbody').html(
						$('#circularsprosecutiondepartment tbody').find('tr').get().reverse());

				var table = $('#circularsprosecutiondepartment').DataTable({
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


	$(document).ready(
			function() {
				$('#tendersprosecutiondepartment tbody').html(
						$('#tendersprosecutiondepartment tbody').find('tr').get().reverse());

				var table = $('#tendersprosecutiondepartment').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewsprosecutiondepartment tbody').html(
						$('#latestnewsprosecutiondepartment tbody').find('tr').get().reverse());

				var table = $('#latestnewsprosecutiondepartment').DataTable({
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

	$(document).ready(
			function() {
				$('#circularspalipolice tbody').html(
						$('#circularspalipolice tbody').find('tr').get().reverse());

				var table = $('#circularspalipolice').DataTable({
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

	$(document).ready(
			function() {
				$('#tenderspalipolice tbody').html(
						$('#tenderspalipolice tbody').find('tr').get().reverse());

				var table = $('#tenderspalipolice').DataTable({
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



	$(document).ready(
			function() {
				$('#latestnewspalipolice tbody').html(
						$('#latestnewspalipolice tbody').find('tr').get().reverse());

				var table = $('#latestnewspalipolice').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewsjalwarpolice tbody').html(
						$('#latestnewsjalwarpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjalwarpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsjalwarpolice tbody').html(
						$('#circularsjalwarpolice tbody').find('tr').get().reverse());

				var table = $('#circularsjalwarpolice').DataTable({
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



	$(document).ready(
			function() {
				$('#tendersjalwarpolice tbody').html(
						$('#tendersjalwarpolice tbody').find('tr').get().reverse());

				var table = $('#tendersjalwarpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewsalwarpolice tbody').html(
						$('#latestnewsalwarpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsalwarpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsalwarpolice tbody').html(
						$('#circularsalwarpolice tbody').find('tr').get().reverse());

				var table = $('#circularsalwarpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#tendersalwarpolice tbody').html(
						$('#tendersalwarpolice tbody').find('tr').get().reverse());

				var table = $('#tendersalwarpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewsbanswarapolice tbody').html(
						$('#latestbanswarapolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsbanswarapolice').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsbanswarapolice tbody').html(
						$('#circularsbanswarapolice tbody').find('tr').get().reverse());

				var table = $('#circularsbanswarapolice').DataTable({
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



	$(document).ready(
			function() {
				$('#tendersbanswarapolice tbody').html(
						$('#tendersbanswarapolice tbody').find('tr').get().reverse());

				var table = $('#tendersbanswarapolice').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsbanswarapolice tbody').html(
						$('#circularsbanswarapolice tbody').find('tr').get().reverse());

				var table = $('#circularsbanswarapolice').DataTable({
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



	$(document).ready(
			function() {
				$('#latestnewsjhunjhunupolice tbody').html(
						$('#latestnewsjhunjhunupolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjhunjhunupolice').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsjhunjhunupolice tbody').html(
						$('#circularsjhunjhunupolice tbody').find('tr').get().reverse());

				var table = $('#circularsjhunjhunupolice').DataTable({
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



	$(document).ready(
			function() {
				$('#tendersjhunjhunupolice tbody').html(
						$('#tendersjhunjhunupolice tbody').find('tr').get().reverse());

				var table = $('#tendersjhunjhunupolice').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewsbaranpolice tbody').html(
						$('#latestnewsbaranpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsbaranpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsbaranpolice tbody').html(
						$('#circularsbaranpolice tbody').find('tr').get().reverse());

				var table = $('#circularsbaranpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#tendersbaranpolice tbody').html(
						$('#tendersbaranpolice tbody').find('tr').get().reverse());

				var table = $('#tendersbaranpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#latestnewsbarmerpolice tbody').html(
						$('#latestnewsbarmerpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsbarmerpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#circularsbarmerpolice tbody').html(
						$('#circularsbarmerpolice tbody').find('tr').get().reverse());

				var table = $('#circularsbarmerpolice').DataTable({
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


	$(document).ready(
			function() {
				$('#tendersbarmerpolice tbody').html(
						$('#tendersbarmerpolice tbody').find('tr').get().reverse());

				var table = $('#tendersbarmerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsjodhpurcitypolice tbody').html(
						$('#latestnewsjodhpurcitypolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjodhpurcitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjodhpurcitypolice tbody').html(
						$('#circularsjodhpurcitypolice tbody').find('tr').get().reverse());

				var table = $('#circularsjodhpurcitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjodhpurcitypolice tbody').html(
						$('#tendersjodhpurcitypolice tbody').find('tr').get().reverse());

				var table = $('#tendersjodhpurcitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsbharatpurpolice tbody').html(
						$('#latestnewsbharatpurpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsbharatpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsbharatpurpolice tbody').html(
						$('#circularsbharatpurpolice tbody').find('tr').get().reverse());

				var table = $('#circularsbharatpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersbharatpurpolice tbody').html(
						$('#tendersbharatpurpolice tbody').find('tr').get().reverse());

				var table = $('#tendersbharatpurpolice').DataTable({
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

   $(document).ready(
			function() {
				$('#latestnewsjodhpurruralpolice tbody').html(
						$('#latestnewsjodhpurruralpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjodhpurruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjodhpurruralpolice tbody').html(
						$('#circularsjodhpurruralpolice tbody').find('tr').get().reverse());

				var table = $('#circularsjodhpurruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjodhpurruralpolice tbody').html(
						$('#tendersjodhpurruralpolice tbody').find('tr').get().reverse());

				var table = $('#tendersjodhpurruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsbhilawarapolice tbody').html(
						$('#latestnewsbhilawarapolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsbhilawarapolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsbhilawarapolice tbody').html(
						$('#circularsbhilawarapolice tbody').find('tr').get().reverse());

				var table = $('#circularsbhilawarapolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersbhilawarapolice tbody').html(
						$('#tendersbhilawarapolice tbody').find('tr').get().reverse());

				var table = $('#tendersbhilawarapolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsbikanerpolice tbody').html(
						$('#latestnewsbikanerpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsbikanerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsbikanerpolice tbody').html(
						$('#circularsbikanerpolice tbody').find('tr').get().reverse());

				var table = $('#circularsbikanerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersbikanerpolice tbody').html(
						$('#tendersbikanerpolice tbody').find('tr').get().reverse());

				var table = $('#tendersbikanerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewskaraulipolice tbody').html(
						$('#latestnewskaraulipolice tbody').find('tr').get().reverse());

				var table = $('#latestnewskaraulipolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularskaraulipolice tbody').html(
						$('#circularskaraulipolice tbody').find('tr').get().reverse());

				var table = $('#circularkaraulipolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderskaraulipolice tbody').html(
						$('#tenderskaraulipolice tbody').find('tr').get().reverse());

				var table = $('#tenderskaraulipolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsbundipolice tbody').html(
						$('#latestnewsbundipolice tbody').find('tr').get().reverse());

				var table = $('#latestbundipolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsbundipolice tbody').html(
						$('#circularsbundipolice tbody').find('tr').get().reverse());

				var table = $('#circularsbundipolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersbundipolice tbody').html(
						$('#tendersbundipolice tbody').find('tr').get().reverse());

				var table = $('#tendersbundipolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewskotacitypolice tbody').html(
						$('#latestnewskotacitypolice tbody').find('tr').get().reverse());

				var table = $('#latestnewskotacitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularskotacitypolice tbody').html(
						$('#circularskotacitypolice tbody').find('tr').get().reverse());

				var table = $('#circularskotacitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderskotacitypolice tbody').html(
						$('#tenderskotacitypolice tbody').find('tr').get().reverse());

				var table = $('#tenderskotacitypolice').DataTable({
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


$(document).ready(
			function() {
				$('#latestnewschittorgarhpolice tbody').html(
						$('#latestnewschittorgarhpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewschittorgarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularschittorgarhpolice tbody').html(
						$('#circularschittorgarhpolice tbody').find('tr').get().reverse());

				var table = $('#circularschittorgarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderschittorgarhpolice tbody').html(
						$('#tenderschittorgarhpolice tbody').find('tr').get().reverse());

				var table = $('#tenderschittorgarhpolice').DataTable({
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


$(document).ready(
			function() {
				$('#latestnewskotaruralpolice tbody').html(
						$('#latestnewskotaruralpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewskotaruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularskotaruralpolice tbody').html(
						$('#circularskotaruralpolice tbody').find('tr').get().reverse());

				var table = $('#circularskotaruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderskotaruralpolice tbody').html(
						$('#tenderskotaruralpolice tbody').find('tr').get().reverse());

				var table = $('#tenderskotaruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewschurupolice tbody').html(
						$('#latestnewschurupolice tbody').find('tr').get().reverse());

				var table = $('#latestnewschurupolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularschurupolice tbody').html(
						$('#circularschurupolice tbody').find('tr').get().reverse());

				var table = $('#circularschurupolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderschurupolice tbody').html(
						$('#tenderschurupolice tbody').find('tr').get().reverse());

				var table = $('#tenderschurupolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsdausapolice tbody').html(
						$('#latestnewsdausapolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsdausapolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsdausapolice tbody').html(
						$('#circularsdausapolice tbody').find('tr').get().reverse());

				var table = $('#circularsdausapolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersdausapolice tbody').html(
						$('#tendersdausapolice tbody').find('tr').get().reverse());

				var table = $('#tendersdausapolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsnagurpolice tbody').html(
						$('#latestnewsnagurpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsnagurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsnagurpolice tbody').html(
						$('#circularsnagurpolice tbody').find('tr').get().reverse());

				var table = $('#circularsnagurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersnagurpolice tbody').html(
						$('#tendersnagurpolice tbody').find('tr').get().reverse());

				var table = $('#tendersnagurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsdholpurpolice tbody').html(
						$('#latestnewsdholpurpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsdholpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsdholpurpolice tbody').html(
						$('#circularsdholpurpolice tbody').find('tr').get().reverse());

				var table = $('#circularsdholpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersdholpurpolice tbody').html(
						$('#tendersdholpurpolice tbody').find('tr').get().reverse());

				var table = $('#tendersdholpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsjalorepolice tbody').html(
						$('#latestnewsjalorepolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjalorepolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjalorepolice tbody').html(
						$('#circularsjalorepolice tbody').find('tr').get().reverse());

				var table = $('#circularsjalorepolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjalorepolice tbody').html(
						$('#tendersjalorepolice tbody').find('tr').get().reverse());

				var table = $('#tendersjalorepolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsdungapurpolice tbody').html(
						$('#latestnewsdungapurpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsdungapurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsdungapurpolice tbody').html(
						$('#circularsdungapurpolice tbody').find('tr').get().reverse());

				var table = $('#circularsdungapurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersdungapurpolice tbody').html(
						$('#tendersdungapurpolice tbody').find('tr').get().reverse());

				var table = $('#tendersdungapurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsgrpajmerpolice tbody').html(
						$('#latestnewsgrpajmerpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsgrpajmerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsgrpajmerpolice tbody').html(
						$('#circularsgrpajmerpolice tbody').find('tr').get().reverse());

				var table = $('#circularsgrpajmerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersgrpajmerpolice tbody').html(
						$('#tendersgrpajmerpolice tbody').find('tr').get().reverse());

				var table = $('#tendersgrpajmerpolice').DataTable({
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


$(document).ready(
			function() {
				$('#latestnewspratapgarhpolice tbody').html(
						$('#latestnewspratapgarhpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewspratapgarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularspratapgarhpolice tbody').html(
						$('#circularspratapgarhpolice tbody').find('tr').get().reverse());

				var table = $('#circularspratapgarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderspratapgarhpolice tbody').html(
						$('#tenderspratapgarhpolice tbody').find('tr').get().reverse());

				var table = $('#tenderspratapgarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsgrpjodhpurpolice tbody').html(
						$('#latestnewsgrpjodhpurpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsgrpjodhpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsgrpjodhpurpolice tbody').html(
						$('#circularsgrpjodhpurpolice tbody').find('tr').get().reverse());

				var table = $('#circularsgrpjodhpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersgrpjodhpurpolice tbody').html(
						$('#tendersgrpjodhpurpolice tbody').find('tr').get().reverse());

				var table = $('#tendersgrpjodhpurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewshabumangarhpolice tbody').html(
						$('#latestnewshanumangarhpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewshanumangarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularshanumangarhpolice tbody').html(
						$('#circularshanumangarhpolice tbody').find('tr').get().reverse());

				var table = $('#circularshanumangarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendershanumangarhpolice tbody').html(
						$('#tendershanumangarhpolice tbody').find('tr').get().reverse());

				var table = $('#tendershanumangarhpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsjaipurcitypolice tbody').html(
						$('#latestnewsjaipurcitypolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjaipurcitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjaipurcitypolice tbody').html(
						$('#circularsjaipurcitypolice tbody').find('tr').get().reverse());

				var table = $('#circularsjaipurcitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjaipurcitypolice tbody').html(
						$('#tendersjaipurcitypolice tbody').find('tr').get().reverse());

				var table = $('#tendersjaipurcitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsjaipurruralpolice tbody').html(
						$('#latestnewsjaipurruralpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjaipurruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjaipurruralpolice tbody').html(
						$('#circularsjaipurruralpolice tbody').find('tr').get().reverse());

				var table = $('#circularsjaipurruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjaipurruralpolice tbody').html(
						$('#tendersjaipurruralpolice tbody').find('tr').get().reverse());

				var table = $('#tendersjaipurruralpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsjaisalmerpolice tbody').html(
						$('#latestnewsjaisalmerpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjaisalmerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjaisalmerpolice tbody').html(
						$('#circularsjaisalmerpolice tbody').find('tr').get().reverse());

				var table = $('#circularsjaisalmerpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjaisalmerpolice tbody').html(
						$('#tendersjaisalmerpolice tbody').find('tr').get().reverse());

				var table = $('#tendersjaisalmerpolice').DataTable({
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


$(document).ready(
			function() {
				$('#latestnewsrajasmandpolice tbody').html(
						$('#latestnewsrajasmandpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsrajasmandpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsrajasmandpolice tbody').html(
						$('#circularsrajasmandpolice tbody').find('tr').get().reverse());

				var table = $('#circularsrajasmandpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersrajasmandpolice tbody').html(
						$('#tendersrajasmandpolice tbody').find('tr').get().reverse());

				var table = $('#tendersrajasmandpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewssawaimadhopurpolice tbody').html(
						$('#latestsawaimadhopurpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewssawaimadhopurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularssawaimadhopurpolice tbody').html(
						$('#circularssawaimadhopurpolice tbody').find('tr').get().reverse());

				var table = $('#circularssawaimadhopurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderssawaimadhopurpolice tbody').html(
						$('#tenderssawaimadhopurpolice tbody').find('tr').get().reverse());

				var table = $('#tenderssawaimadhopurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewssikarpolice tbody').html(
						$('#latestnewssikarpolice tbody').find('tr').get().reverse());

				var table = $('#latestnessikarpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularssikarpolice tbody').html(
						$('#circularssikarpolice tbody').find('tr').get().reverse());

				var table = $('#circularssikarpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderssikarpolice tbody').html(
						$('#tenderssikarpolice tbody').find('tr').get().reverse());

				var table = $('#tenderssikarpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewssirohipolice tbody').html(
						$('#latestnewssirohipolice tbody').find('tr').get().reverse());

				var table = $('#latestnewssirohipolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularssirohipolice tbody').html(
						$('#circularssirohipolice tbody').find('tr').get().reverse());

				var table = $('#circularssirohipolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderssirohipolice tbody').html(
						$('#tenderssirohipolice tbody').find('tr').get().reverse());

				var table = $('#tenderssirohipolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewssriganganagarpolice tbody').html(
						$('#latestnewssriganganagarpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewssriganganagarpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularssriganganagarpolice tbody').html(
						$('#circularssriganganagrpolice tbody').find('tr').get().reverse());

				var table = $('#circularssriganganagrpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderssriganganagarpolice tbody').html(
						$('#tenderssriganganagarpolice tbody').find('tr').get().reverse());

				var table = $('#tenderssriganganagarpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewstonkpolice tbody').html(
						$('#latestnewstonkpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewstonkpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularstonkpolice tbody').html(
						$('#circularstonkpolice tbody').find('tr').get().reverse());

				var table = $('#circularstonkpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderstonkpolice tbody').html(
						$('#tenderstonkpolice tbody').find('tr').get().reverse());

				var table = $('#tenderstonkpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsudaipurpolice tbody').html(
						$('#latestnewsudaipurpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsudaipurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsudaipurpolice tbody').html(
						$('#circularsudaipurpolice tbody').find('tr').get().reverse());

				var table = $('#circularsudaipurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersudaipurpolice tbody').html(
						$('#tendersudaipurpolice tbody').find('tr').get().reverse());

				var table = $('#tendersudaipurpolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewsjaipurtrafficpolice tbody').html(
						$('#latestnewsjaipurtrafficpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewsjaipurtrafficpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjaipurtrafficpolice tbody').html(
						$('#circularsjaipurtrafficpolice tbody').find('tr').get().reverse());

				var table = $('#circularsjaipurtrafficpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjaipurtrafficpolice tbody').html(
						$('#tendersjaipurtrafficpolice tbody').find('tr').get().reverse());

				var table = $('#tendersjaipurtrafficpolice').DataTable({
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


$(document).ready(
			function() {
				$('#latestnewsjodhpurtrafficpolice tbody').html(
						$('#latestnewsjodhpurtrafficpolice tbody').find('tr').get().reverse());

				var table = $('#latestnesjodhpurtrafficpolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularsjodhpurtrafficpolice tbody').html(
						$('#circularsjodhpurtrafficpolice tbody').find('tr').get().reverse());

				var table = $('#circularsjodhpurtrafficpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tendersjodhpurtrafficpolice tbody').html(
						$('#tendersjodhpurtrafficpolice tbody').find('tr').get().reverse());

				var table = $('#tendersjodhpurtrafficpolice').DataTable({
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


$(document).ready(
			function() {
				$('#latestnewssardarpateluniversityofpolice tbody').html(
						$('#latestnewssardarpatelunuversityofpolice tbody').find('tr').get().reverse());

				var table = $('#latestnewssardarpateluniversitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#circularssardaruniversityofpolice tbody').html(
						$('#circularsuniversityofpolice tbody').find('tr').get().reverse());

				var table = $('#circularsuniversityofpolice').DataTable({
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

$(document).ready(
			function() {
				$('#tenderssardarpateluniversitypolice tbody').html(
						$('#tenderssardarpateluniversitypolice tbody').find('tr').get().reverse());

				var table = $('#tenderssardarpateluniversitypolice').DataTable({
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

$(document).ready(
			function() {
				$('#latestnewspolicecommissionaratejaipur tbody').html(
						$('#latestnewspolicecommissionaratejaipur tbody').find('tr').get().reverse());

				var table = $('#latestnewspolicecommissionaratejaipur').DataTable({
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

$(document).ready(
			function() {
				$('#circularspolicecommissionratejaipur tbody').html(
						$('#circularspolicecommissionratejaipur tbody').find('tr').get().reverse());

				var table = $('#circularspolicecommissionratejaipur').DataTable({
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

$(document).ready(
			function() {
				$('#tenderspolicecommissionratejaipur tbody').html(
						$('#tenderspolicecommissionratejaipur tbody').find('tr').get().reverse());

				var table = $('#tenderspolicecommissionratejaipur').DataTable({
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



$(document).ready(
			function() {
				$('#latestnewspolicecommissionaratejodhpur tbody').html(
						$('#latestnewspolicecommissionaratejodhpur tbody').find('tr').get().reverse());

				var table = $('#latestnewspolicecommissionaratejodhpur').DataTable({
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

$(document).ready(
			function() {
				$('#circularspolicecommissionratejodhpur tbody').html(
						$('#circularspolicecommissionratejodhpur tbody').find('tr').get().reverse());

				var table = $('#circularspolicecommissionratejodhpur').DataTable({
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

$(document).ready(
			function() {
				$('#tenderspolicecommissionratejodhpur tbody').html(
						$('#tenderspolicecommissionratejodhpur tbody').find('tr').get().reverse());

				var table = $('#tenderspolicecommissionratejodhpur').DataTable({
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


$(document).ready(
			function() {
				$('#latestnewsrpd tbody').html(
						$('#latestnewsrpd tbody').find('tr').get().reverse());

				var table = $('#latestnewsrpd').DataTable({
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

$(document).ready(
			function() {
				$('#circularsrpd tbody').html(
						$('#circularsrpd tbody').find('tr').get().reverse());

				var table = $('#circularsrpd').DataTable({
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

$(document).ready(
			function() {
				$('#tendersrpd tbody').html(
						$('#tendersrpd tbody').find('tr').get().reverse());

				var table = $('#tendersrpd').DataTable({
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


$(document).ready(function(){$("a").attr("target",function(){$(this).attr("rel","noopener noreferrer")
})
});
$(document).ready(function(){$("form.form-inline input").blur(function(){var a=/<(.|\n)*?>/g;
if(a.test($(this).val())==true){$(this).val("");
$(this).focus();
alert("An invalid value is provided in this field. Kindly change the text.")
}})
});

$(document).ready(function(){
$("body.acb_dept .menu-wrap li:has(ul),body.acb_dept #main-menu li:has(ul)").hover(function () {
  $(this).children("a").click(function () {
    return false;
  });
});
    });
