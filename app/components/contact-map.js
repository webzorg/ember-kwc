import Ember from 'ember';
// import Datamap from 'npm:datamaps';
// import d3 from 'npm:d3';

export default Ember.Component.extend({

  didInsertElement: function() {
    var markers = [
      ["4a Gamrekeli Turn, Tbilisi, Georgia", 41.723528, 44.770304, "+995 322 47 40 50"],
      ["55 Saradjishvili Street, Gurjaani, Georgia", 41.753313, 45.820239, ""],
      ["21 Tamarashvili Street, Tbilisi, Georgia", 41.723592, 44.745900, ""]
    ];

    var office = {
      lat: 41.723528,
      lng: 44.770304
    };
    // var store = {
    //   lat: 41.723592,
    //   lng: 44.745900
    // };
    var gurjaani = {
      lat: 41.753313,
      lng: 45.820239
    };

    function TbilisiControl(controlDiv, map) {
      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px 0px 0px 3px';
      controlUI.style.boxShadow = '4px 2px 4px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginTop = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Go to Tbilisi';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = 'Tbilisi';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        map.setCenter(office);
      });

    }

    function GurjaaniControl(controlDiv, map) {
      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '0px 3px 3px 0px';
      controlUI.style.boxShadow = '4px 2px 4px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginTop = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Go to Gurjaani';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = 'Gurjaani';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        map.setCenter(gurjaani);
      });

    }

    function initMap() {
      // var layer = "watercolor";
      var map_options = {
        zoom: 14,
        minZoom:14,
        center: office,
        streetViewControl: false,
        mapTypeControlOptions: {
          mapTypeIds: google.maps.MapTypeId.ROADMAP
        },
        zoomControl: true,
        zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_TOP
          }
        // styles: style_array
      };

      var map = new google.maps.Map(document.getElementById('map'), map_options);
      // var bounds = new google.maps.LatLngBounds();

      // Create the DIV to hold the control and call the TbilisiControl()
      // constructor passing in this DIV.
      var officeControlDiv = document.createElement('div');
      var gurjaaniControlDiv = document.createElement('div');
      var officeControl = new TbilisiControl(officeControlDiv, map);
      var gurjaaniControl = new GurjaaniControl(gurjaaniControlDiv, map);

      officeControlDiv.index = 1;
      gurjaaniControlDiv.index = 2;
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(officeControlDiv);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(gurjaaniControlDiv);



      //////// Display multiple markers on a map
      var infoWindow = new google.maps.InfoWindow(), marker, c;
      for(c=0; c< markers.length; c++){
        var position = new google.maps.LatLng(markers[c][1], markers[c][2]);
        // bounds.extend(position);

        var infowindow = new google.maps.InfoWindow({
         content: markers[c][0]
        });

        marker = new google.maps.Marker({
          position: position,
          map: map,
          icon: "assets/images/map_logo.png",
          title: markers[c][0]
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, c) {
          return function() {
            var content = ((markers[c][3] !== "") ? "<br/> Tel: "+markers[c][3] : "");
            infoWindow.setContent(markers[c][0] + content);
            infoWindow.open(map, marker);
          }
        })(marker, c));

      }//for loop end
      // map.fitBounds(bounds);
    }
    initMap();

    // this.get('resizeService').on('didResize', event => {
    //   basic_choropleth.resize();
    // });
    // Ember.$(window).on('resize.datamap', function() { basic_choropleth.resize(); })
    // var basic_choropleth = new Datamap({
    //   element: document.getElementById("basic"),
    //   responsive: true,
    //   // projection: 'conicConformal',
    //   scope: 'world',
    //   // Zoom in on Africa
    //   setProjection: function(element) {
    //     var projection = d3.geo.equirectangular()
    //       // .center([23, -3])
    //       // .rotate([4.4, 0])
    //       .scale(200)
    //       .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    //     var path = d3.geo.path()
    //       .projection(projection);
    //
    //     return {path: path, projection: projection};
    //   },
    //   fills: {
    //     defaultFill: "#ABDDA4",
    //     authorHasTraveledTo: "#fa0fa0"
    //   },
    //   data: {
    //     USA: { fillKey: "authorHasTraveledTo" },
    //     JPN: { fillKey: "authorHasTraveledTo" },
    //     ITA: { fillKey: "authorHasTraveledTo" },
    //     CRI: { fillKey: "authorHasTraveledTo" },
    //     KOR: { fillKey: "authorHasTraveledTo" },
    //     DEU: { fillKey: "authorHasTraveledTo" },
    //     RUS: { fillKey: "authorHasTraveledTo" },
    //   }
    // });
    //
    // var colors = d3.scale.category10();
    //
    // // window.setInterval(function() {
    //   // basic_choropleth.updateChoropleth({
    //   //   USA: colors(Math.random() * 10),
    //   //   RUS: colors(Math.random() * 100),
    //   //   AUS: { fillKey: 'authorHasTraveledTo' },
    //   //   BRA: colors(Math.random() * 50),
    //   //   CAN: colors(Math.random() * 50),
    //   //   ZAF: colors(Math.random() * 50),
    //   //   IND: colors(Math.random() * 50),
    //   // });
    // // }, 2000);


  }
});
