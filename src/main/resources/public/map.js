var map = L.map('map').setView([48.78, 9.18], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoicHJvZ3JhbW1pZXJwcm9qZWN0IiwiYSI6ImNrejczNHBrODBpOTgycm45djZpczl3dWYifQ.zaOR_HhPpmgLZCjWpBVX_A'
}).addTo(map);

map.on("click", addMarker);

//store the index of the start and end point
var curQuery = [];
// store the markers and lines
var markers = [];
var lines = [];
// the ur element
var startPoint = document.getElementById("startPoint");
var endPoint = document.getElementById("endPoint");

//get the coordinate of the user per click
//find the nearest node in the Server
//add marker on the nearest nodeS
function addMarker(e) {

	if (curQuery.length < 2) {
		var pointLat = e.latlng.lat;
		var pointLng = e.latlng.lng;
		var coordinate;
		var index;
		if (curQuery[0] == undefined && curQuery[1] == undefined) {
			var $clickingPoint = $("#startPoint");
		} else if (curQuery[0] != undefined && curQuery[1] == undefined) {
			var $clickingPoint = $("#endPoint");
		}
		$.ajax({
			async: false,
			type: "POST",
			url: "/nearestNode",
			data: {
				"x": pointLat,
				"y": pointLng
			},
			success: function(point) {
				$clickingPoint.append(point.coordinate[0].toFixed(2) + "," + point.coordinate[1].toFixed(2));
				coordinate = point.coordinate;
				index = point.index;
			}
		});
		curQuery.push(index);
		var marker = L.marker(coordinate).addTo(map);
		markers.push(marker);
	}
}

//plan the minimal Distance from one point to another
function planRoutine() {

	var routine;
	var startIndex = curQuery[0];
	var endIndex = curQuery[1];
	$.ajax({
		async: false,
		type: "POST",
		url: "/minDist",
		data: {
			"startIndex": startIndex,
			"endIndex": endIndex,
		},
		success: function(data) {
			routine = data;
		}
	});
	console.log(routine);
	var line = L.polyline(routine, { color: "BlueViolet" }).addTo(map);
	lines.push(line);
}

// reset 
function reset() {
	curQuery = [];
	map.removeLayer(markers[0]);
	map.removeLayer(markers[1]);
	map.removeLayer(lines[0]);
	markers = [];
	lines = [];
	while (startPoint.hasChildNodes()) {
		startPoint.removeChild(startPoint.firstChild);
	}
	while (endPoint.hasChildNodes()) {
		endPoint.removeChild(endPoint.firstChild);
	}


}
