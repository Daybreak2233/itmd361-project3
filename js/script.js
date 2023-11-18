function init() {
  // alert("works");
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(30.659841, 104.063923);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
  });

  var contentString = '<h1>Tianfu Square</h1>' +
  '<p>Tianfu Square is the largest city square in Chengdu with a high statue of Chairman Mao in the middle. Enjoying the status and scale in Chengdu similar to Tiananmen Square in Beijing, Tianfu Square has been attracting groups of people from all over the world to visit.</p>'

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  google.maps.event.addListener(marker, 'mouseover', function(){
    infowindow.open(myMap, marker);
  });
}
google.maps.event.addDomListener(window, 'load', init);