var schedule = new Vue({
  el: '#schedule',
  data: {
    markers: [],
    stops: [],
    routes: [],
    allStops: {}
  },
  methods: {
    getRouteStops: function(route) {
      this.isActive = !this.isActive;
      this.stops = [];
      var stopIdsArr = route.RouteStops.split(",");
      for (var stop = 0; stop < stopIdsArr.length; stop++) {
        if (typeof stopIdsArr[stop] !== "undefined") {
          var obj = {};
          obj.ID = stopIdsArr[stop];
          obj.Lat = this.allStops[stopIdsArr[stop]].Lat;
          obj.Lng = this.allStops[stopIdsArr[stop]].Lng;
          this.stops.push(obj);
        }
      }
      this.updateMarkers(this.stops);
    },
    updateMarkers: function(stopsArr) {
      if (this.markers.length !== 0) {
        this.deleteMarkers();
      }
      for (var m = 0; m < stopsArr.length; m++) {

        var myLatlng = new google.maps.LatLng(stopsArr[m].Lat, stopsArr[m].Lng);
        this.addMarker(myLatlng, stopsArr[m].ID);
      }
    },
    addMarker: function(location, stopID) {

      var currentStop = this.allStops[stopID];
      var infoWinContent;
      if (typeof currentStop !== "undefined") {
        infoWinContent = '<div data-stopid="' + stopID + '">' + currentStop.Name + '</div>';
      } else {
        infoWinContent = '<div id="content">Undefined</div>';
      }
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Остановка"
      });
      var infowindow = new google.maps.InfoWindow({
        content: infoWinContent
      });
      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });
      this.markers.push(marker);
    },
    setMapOnAll: function(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    },
    deleteMarkers: function() {
      this.setMapOnAll(null);
      this.markers = [];
    }
  }
});


$.ajax({
  url: 'https://crossorigin.me/http://www.minsktrans.by/city/minsk/routes.txt',
  complete: function(response) {
    schedule.routes = getBusRoutes(response.responseText);
  },
  error: function() {
    console.warn('Bummer: there was an error!');
  },
});

$.ajax({
  url: 'https://gp-js-test.herokuapp.com/proxy/http://www.minsktrans.by/city/minsk/stops.txt',
  complete: function(response) {
    schedule.allStops = getBusStops(response.responseText);
  },
  error: function() {
    console.warn('Bummer: there was an error!');
  },
});

function getBusRoutes(csv) {
  var stopPosition = csv.indexOf("M1")
  csv = csv.slice(0, stopPosition);
  var lines = csv.split("\n");
  var routes = [];
  var headers = lines[0].split(";");
  for (var i = 1, l = lines.length; i < l; i++) {

    var obj = {};
    var currentline = lines[i].split(";");

    if (typeof currentline[0] !== "undefined" && currentline[0].length !== 0) {
      for (var j = 0, h = headers.length; j < h; j++) {

        if (j === 3 && currentline[j].length < 2) {
          obj[headers[j]] = routes[0][headers[j]];
        }
        obj[headers[j]] = currentline[j];
      }
      routes.push(obj);
    }
  };
  routes = routes.filter(function(val) {
    return val.RouteType === "A>B";
  });
  return routes;
}

function getBusStops(csv) {
  var lines = csv.split("\n");
  result = {};
  var headers = lines[0].split(";");

  for (var i = 1, l = lines.length; i < l; i++) {
    var obj = {};
    var currentline = lines[i].split(";");

    for (var j = 1, h = headers.length; j < h; j++) {
      if (headers[j] === "Lat" || headers[j] === "Lng") {
        if (typeof currentline[j] !== "undefined") {
          var tmp = currentline[j].split("");
          tmp.splice(2, 0, ".");
          obj[headers[j]] = parseFloat(tmp.join(""));
        }
      } else if (headers[j] === "Name" &&
        (typeof currentline[j] === "undefined" || currentline[j].length < 2) && i > 1) {
        obj[headers[j]] = result[lines[i - 1].split(";")[0]][headers[j]];

      } else {
        obj[headers[j]] = currentline[j];
      }
    }
    result[currentline[0]] = obj;
  }
  return result;
}

var map;

function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: {
      lat: 53.90,
      lng: 27.55
    },
    zoom: 12
  });
}

$(window).on("load", function() {

  $(".preloader").delay(850).fadeOut(500);
  var $prev;
  $("#schedule").on("click", "li", function() {
    if ($prev !== undefined) {
      $("li[data-id=" + $prev + "]").removeClass("active");
    }
    $(this).addClass("active");
    $prev = $(this).attr("data-id");
  })
});
