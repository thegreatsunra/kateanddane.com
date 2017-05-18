/* Author: Dane Petersen

*/

function initialize_map() {
	var farmLatLng = new google.maps.LatLng(44.455038,-93.483069);
	var centerLatLng = new google.maps.LatLng(44.8,-93.2); // (44.472038,-93.473569)
	var mapOptions = {
		center: centerLatLng,
		zoom: 9,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		streetViewControl: false
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

	var infoWindowContentString =
		'<div style="text-align: left;">' +
		'<p style="padding-top: 10px;">' +
		'<strong>Shepherd&rsquo;s Hill Farm</strong><br>' +
		'<a title="Get Directions to Shepherd&rsquo;s Hill Farm" href="http://maps.google.com/maps?f=d&amp;q=10970+Cody+Lake+Trail+Montgomery+MN+56069&amp;ll=44.457034,-93.483567&amp;spn=0.010323,0.017617&amp;oe=UTF-8&amp;hnear=10970+Cody+Lake+Trail,+Montgomery,+Minnesota+56069&amp;gl=us&amp;t=m&amp;z=12">10970 Cody Lake Trail<br>Montgomery, MN 56069</a></p>';
		
	var infoWindow = new google.maps.InfoWindow({
		content: infoWindowContentString
	});

	var farmMarker = new google.maps.Marker({
		map: map,
		position: farmLatLng
	});
	
	google.maps.event.addListener(farmMarker, 'click', function() {
	  infoWindow.open(map,farmMarker);
	});

	infoWindow.open(map, farmMarker);
}

$(initialize_map);

$.getJSON("/scripts/libs/agile_carousel_data.json", function (data) {
	$(function () {
		$("#basic_slideshow").agile_carousel({
			carousel_data: data,
			carousel_outer_height: 435,
			carousel_height: 435,
			slide_height: 435,
			carousel_outer_width: 580,
			slide_width: 580,
			transition_type: "fade",
			timer: 4000
		});
	});
});
