
 	//submit knop
document.getElementById('knop').onclick= function hi(){
	//invoerveld andere plek in grid
	  var element = document.getElementById("container");
 	  element.classList.remove("container");

 	  var element = document.getElementById("container");
 	  element.className += "containertwee";

 	  var element = document.getElementById("header");
 	  element.className += "headerboven";

 	  var element = document.getElementById("img");
 	  element.className += "img";

	//aside box
 	  var element = document.getElementById("aside");
 	  element.className += "aside";

 	//Zin verwijderen
 	  var div = document.getElementById('capital');
 	  div.parentNode.removeChild(div); 

	// de waarde uit het invoerveld
	var x = document.getElementById("input").value;	

	//api locatie naar lat en lon
	var requesteen='https://us1.locationiq.com/v1/search.php?key=pk.1209fde118dee700df0692b08a16594b&q='+x+'&format=json'
	fetch(requesteen)
	 
	//omzetten in json
	  .then((response) => {
	    return response.json();
	  })

	//variabele aangemaakt voor lat en lng
	  .then((response) => {
		   	var lat= response[0].lat;
		  	var lng= response[0].lon;
		  	console.log(lat)

		//variabele voor request
		   	var websitetijd='https://api.timezonedb.com/v2.1/get-time-zone';
			var keytijd='I4PF3UVHOX2Z';

		//api timezone 
		   	var requesttwee=websitetijd+'?'+'key='+keytijd+'&format=json'+'&callback'+'&by=position'+'&lat='+lat+'&lng='+lng;

		//omzetten in json
		   	 fetch(requesttwee)
		     .then((response) => {
		    return response.json();
			  })

			  .then((response) => {
			  	//tijd  
			 	  	var minuten=response.formatted[14]+response.formatted[15];
			 	  	var uur=response.formatted[11]+response.formatted[12];
			 	  	var tijd= uur+':'+minuten;

			 	    document.getElementById('demo').innerHTML=tijd;
	
			 //datum = 1-9 onderdeel van formatted
			 	  	var datum=response.formatted[8]
			 	  	+response.formatted[9]+response.formatted[4]+
			 	  	response.formatted[5]+response.formatted[6]+
			 	  	response.formatted[7]+response.formatted[0]+
			 	  	response.formatted[1]+response.formatted[2]+
			 	  	response.formatted[3];

			 	    document.getElementById('demo2').innerHTML=datum;
			 	    document.getElementById('demo3').innerHTML='Time in ' + x;
			 	    console.log(response);

			 //api locaties van restaurant 
			  	var requestdrie= 'https://www.triposo.com/api/20200405/poi.json?location_id='+x+'&tag_labels=breakfast&count=20&fields=id,name,score,intro,tag_labels,coordinates,opening_hours,images,price_tier&order_by=-score&account=ANU5BABG&token=iwfdw2ysqm7kl9j4min8hba20n5dlbf4'
			 //omzetten in json
			  	fetch(requestdrie)
			  	  .then((response) => {
	   			 return response.json();
	   			 })
			  	  .then((response) => {
			  	  console.log(response);

 		  	  //array met restaurants

					 	myRestaurants = [{
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[0].name,	
					      'price': response.results[0].price_tier,		      
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[0].coordinates.longitude,response.results[0].coordinates.latitude],
					    }
					  },
					  {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[1].name,
					      'price': response.results[1].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[1].coordinates.longitude,response.results[1].coordinates.latitude]
					    }
					  },
					  {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[2].name,
					      'price': response.results[2].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[2].coordinates.longitude,response.results[2].coordinates.latitude]
					    }
					  },
					  {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[3].name,
					      'price': response.results[3].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[3].coordinates.longitude,response.results[3].coordinates.latitude]
					    }
					  },
					  {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[4].name,
					      'price': response.results[4].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[4].coordinates.longitude,response.results[4].coordinates.latitude]
					    }
					  },
 					 {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[5].name,
					      'price': response.results[5].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[5].coordinates.longitude,response.results[5].coordinates.latitude]
					    }
					  },
					    {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[6].name,
					      'price': response.results[6].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[6].coordinates.longitude,response.results[6].coordinates.latitude]
					    }
					  },
					   {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[7].name,
					      'price': response.results[7].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[7].coordinates.longitude,response.results[7].coordinates.latitude]
					    }
					  },
					   {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[8].name,
					      'price': response.results[8].price_tier,
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[8].coordinates.longitude,response.results[8].coordinates.latitude]
					    }
					  },
					   {
					    'type': 'Feature',
					    'properties': {
					      'description': response.results[9].name,	
					      'price': response.results[9].price_tier,     
					    },
					    'geometry': {
					      'type': 'Point',
					      'coordinates': [response.results[9].coordinates.longitude,response.results[9].coordinates.latitude]
					    }
					  },
					];	

					// Api mapbox
					mapboxgl.accessToken = 'pk.eyJ1IjoibWlsYTEybSIsImEiOiJjazhzbXV0dngwMTBlM3Fud3I5a3c4cnhkIn0.2E8dRcW-SCC2Ea6QL-etEQ';

					// Initiate map
					var map = new mapboxgl.Map({
					  container: 'map',
					  style: 'mapbox://styles/mila12m/ck9080fze144o1jpmp3puxj1j',
					  center: [lng, lat],
					  zoom: 13
					});

					
					map.on('load', function() {
						map.loadImage(			
						'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Map_symbol-pin.svg/128px-Map_symbol-pin.svg.png',						
							function(error, image) {
								if (error) throw error;
								map.addImage('cat', image);
								map.addSource('point', {
								'type': 'geojson',
								'data': {
								'type': 'FeatureCollection',
								'features': myRestaurants,
									}
								});
								map.addLayer({
								'id': 'points',
								'type': 'symbol',
								'source': 'point',
								'layout': {
								'icon-image': 'cat',
								'icon-size': 0.3,
										}
									});
								}
							);
						});
						  map.on('click', 'points', function (e) {
						    var coordinates = e.features[0].geometry.coordinates.slice();
						    var description = e.features[0].properties.description;
						    var price = e.features[0].properties.price;
						    	if (price==1) {
									var priceshow='cheap';
									}
									else if(price==2){
									var priceshow='medium';
									}
									else if (price==3){
									var priceshow='expensive';
									}


						    // Populate the popup and set its coordinates based on the feature found.
						    new mapboxgl.Popup()
						      .setLngLat(coordinates)
						      .setHTML('<h3>' + description +'</h3>'+'price range: '+ priceshow )
						      .addTo(map);

						  });
							 // Change the cursor to a pointer when the mouse is over the places layer.
							map.on('mouseenter', 'points', function() {
							map.getCanvas().style.cursor = 'pointer';
							});
							 
							// Change it back to a pointer when it leaves.
							map.on('mouseleave', 'points', function() {
							map.getCanvas().style.cursor = '';
							});
			});			
		});
	}); 
};
