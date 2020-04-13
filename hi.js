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
			//tijd  
				  	var minuten=response.formatted[14]+response.formatted[15];
				  	var uur=response.formatted[11]+response.formatted[12];
				  	var tijd= uur+':'+minuten;

				  	var uur2=+uur+1;
				  	var uur3=+uur+2;
				  	var uur4=+uur+3;
				  	var uur5=+uur+4;
				  	var uur6=+uur+5;

				 var uren=[uur, uur2, uur3, uur4, uur5, uur6]

				// for (var i = 0; i < 5; i++) {
				// 	if (uren[i]>23) {
				// 		var getal=uren[i]-24;
				// 		uren[i]=00+getal;
				// 		console.log(uren[i]);
				// 	}	
				// }

				  //aanpassen
				  	if (uur>23 ) {
				  		uur=00;
				  	}
				  	if (uur2>23 ) {
				  	var twee= uur2-24;
				  	uur2=00+twee;
				  	}
					if (uur3>23 ) {
					var drie= uur3-24;
				  	uur3=00+drie;
				  	}
				  	if (uur4>23 ) {
				  	var vier= uur4-24;
				  	uur4=00+vier;
				  	}
				  	if (uur5>23 ) {
				  	var vijf= uur5-24;
				  	uur5=00+vijf;
				  	}
				  	if (uur6>23 ) {
				  	var zes= uur6-24;
				  	uur6=00+zes;
				  	}
				    document.getElementById('demo').innerHTML=tijd;
				    //document.getElementById('uur2').innerHTML=
				    //document.getElementById('uur3').innerHTML=
				    //document.getElementById('uur4').innerHTML=
				    //document.getElementById('uur5').innerHTML=
				    //document.getElementById('uur6').innerHTML=

			//datum = 1-9 onderdeel van formatted
				  	var datum=response.formatted[0]
				  	+response.formatted[1]+response.formatted[2]+
				  	response.formatted[3]+response.formatted[4]+
				  	response.formatted[5]+response.formatted[6]+
				  	response.formatted[7]+response.formatted[8]+
				  	response.formatted[9];

				    document.getElementById('demo2').innerHTML=datum;
				    console.log(response);

			//weer plaatst
 				var requestdrie='https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lng+'&appid=3c8d24d07c9742c53c020091989b9258'
 				fetch(requestdrie)
	 			//omzetten in json
				.then((response) => {
	    		return response.json();
	 			 })

				.then((response) => {
	    		console.log(response);
	    		var degC = Math.floor(response.hourly[0].temp - 273.15)
	    		document.getElementById('uur1').innerHTML=degC;


	 			 })
				
			
			});
	  });
};
