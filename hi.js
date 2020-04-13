 	//submit knop
document.getElementById('knop').onclick= function hi(){
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

		//variabele voor request
		   	var websitetijd='http://api.timezonedb.com/v2.1/get-time-zone';
			var keytijd='I4PF3UVHOX2Z';

		//api timezone 
		   	var requesttwee=websitetijd+'?'+'key='+keytijd+'&format=json'+'&callback'+'&by=position'+'&lat='+lat+'&lng='+lng;

		//omzetten in json
		   	 fetch(requesttwee)
		     .then((response) => {
		    return response.json();
			  })

		//tijd van aangeven locatie
			  .then((response) => {
			  	var requestdrie= 'https://www.triposo.com/api/20200405/poi.json?location_id=Sydney&tag_labels=district-city_centre|district-the_rocks&tag_labels=cuisine-Italian&count=10&fields=id,name,score,intro,tag_labels,best_for&order_by=-score&account=ANU5BABG&token=iwfdw2ysqm7kl9j4min8hba20n5dlbf4'
			  	fetch(requestdrie)
			  	  .then((response) => {
	   			 return response.json();
	   			 })
			  	  .then((response) => {
			  	  console.log(response);
	   			 })
			  	  
			  	  
			tijd  
			 	  	var minuten=response.formatted[14]+response.formatted[15];
			 	  	var uur=response.formatted[11]+response.formatted[12];
			 	  	var tijd= uur+':'+minuten;

			// 	  	var uur1=+uur+1;
			// 	  	var uur2=+uur+2;
			// 	  	var uur3=+uur+3;
			// 	  	var uur4=+uur+4;
			// 	  	var uur5=+uur+5;

			// 	// var uren=[uur, uur2, uur3, uur4, uur5, uur6]

			// 	// for (var i = 0; i < 5; i++) {
			// 	// 	if (uren[i]>23) {
			// 	 //		var getal=uren[i]-24;
			// 	 //		uren[i]=00+getal;
			// 	 //		console.log(uren[i]);
			// 	 //		document.getElementById('uur1').innerHTML=uren[i];
			// 	 //	}	
			// 	 //}

			// 	  //aanpassen
			// 	  	if (uur>23 ) {
			// 	  		uur=00;
			// 	  	}
			// 	  	if (uur1>23 ) {
			// 	  	var een= uur1-24;
			// 	  	uur1=00+een;
			// 	  	}
			// 		if (uur3>23 ) {
			// 		var twee= uur2-24;
			// 	  	uur2=00+twee;
			// 	  	}
			// 	  	if (uur3>23 ) {
			// 	  	var drie= uur3-24;
			// 	  	uur3=00+drie;
			// 	  	}
			// 	  	if (uur4>23 ) {
			// 	  	var vier= uur4-24;
			// 	  	uur4=00+vier;
			// 	  	}
			// 	  	if (uur5>23 ) {
			// 	  	var vijf= uur5-24;
			// 	  	uur5=00+vijf;
			// 	  	}

			 	    document.getElementById('demo').innerHTML=tijd;
	
			 //datum = 1-9 onderdeel van formatted
			 	  	var datum=response.formatted[0]
			 	  	+response.formatted[1]+response.formatted[2]+
			 	  	response.formatted[3]+response.formatted[4]+
			 	  	response.formatted[5]+response.formatted[6]+
			 	  	response.formatted[7]+response.formatted[8]+
			 	  	response.formatted[9];

			 	    document.getElementById('demo2').innerHTML=datum;
			 	    console.log(response);

			// //weer plaatst
 		// 		var requestdrie='https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lng+'&appid=3c8d24d07c9742c53c020091989b9258'
 		// 		fetch(requestdrie)
	 	// 		//omzetten in json
			// 	.then((response) => {
	  //   		return response.json();
	 	// 		 })

			// 	//var weerperuur= response.hourly;

			// 	.then((response) => {
	  //   		console.log(response);
	  //   		var temp0 = Math.floor(response.hourly[0].temp - 273.15)
	  //   		document.getElementById('uur').innerHTML= temp0 + '&#176;C <br>';

	  //   		var temp1 = Math.floor(response.hourly[1].temp - 273.15)
	  //   		document.getElementById('uur1').innerHTML= temp1 + '&#176;C <br>';

	  //   		var temp2 = Math.floor(response.hourly[2].temp - 273.15)
	  //   		document.getElementById('uur2').innerHTML= temp2 + '&#176;C <br>';

	  //   		var temp3 = Math.floor(response.hourly[3].temp - 273.15)
	  //   		document.getElementById('uur3').innerHTML= temp3 + '&#176;C <br>';

	  //   		var temp4 = Math.floor(response.hourly[4].temp - 273.15)
	  //   		document.getElementById('uur4').innerHTML= temp4 + '&#176;C <br>';

	  //   		var temp5 = Math.floor(response.hourly[5].temp - 273.15)
	  //   		document.getElementById('uur5').innerHTML= temp5 + '&#176;C <br>';
			// 	});
			//	function onAPISucces(response) {

	// var weatherList = response.list;
	// var weatherBox = document.getElementById('weather');

	// for(var i=0; i< weatherList.length; i++){
	// 	//console.log(weatherList[i].main.temp - 273.15);

	// 	var dateTime = new Date(weatherList[i].dt_txt);
	// 	var date = formDate(dateTime);
	// 	var time = formTime(dateTime);
	// 	var temp = Math.floor(weatherList[i].main.temp - 273.15);

	// 	forecastMessage =  '<div class="forecastMoment">';
	// 	forecastMessage +=   '<div class="date"> '+date+' </div>';
	// 	forecastMessage +=	 '<div class="time"> '+time+' </div>';
	// 	forecastMessage +=	 '<div class="temp"> '+temp+'&#176;C </div>';
	// 	forecastMessage += '</div>';

		//weatherBox.innerHTML += forecastMessage;
	//}

			});
	  });
};
