var platform = new H.service.Platform({
    'apikey': '-XMXaIvgcP4bJtLHFYzggFoM3JXrdouOKEogNM26v6s'
  });
  
  // Obtain the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate (and display) a map object:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat:-30.0277, lng: -51.2287 },
      
    });
  
  // Get the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  var geocodingParams;
  
  // Define a callback function to process the geocoding response:
  var onResult = function (result) {
    var locations = result.Response.View[0].Result,
      position,
      marker;
    // Add a marker for each location found
    for (i = 0; i < locations.length; i++) {
      position = {
        lat: locations[i].Location.DisplayPosition.Latitude,
        lng: locations[i].Location.DisplayPosition.Longitude
      };
      map.setCenter(position)
      marker = new H.map.Marker(position);
      map.addObject(marker);
    }
  };
  
  // Get an instance of the geocoding service:
  var geocoder = platform.getGeocodingService();


  
  
  