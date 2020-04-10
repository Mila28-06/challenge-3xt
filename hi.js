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

	// zomato
			//var websiterestaurant='https://developers.zomato.com/'
			//var keyrestaurant='f4a47e7b2332c43aa30609431b075091'
			//var requestdrie= websiterestaurant+keyrestaurant+'/v2.1/'+'search?q='+'breakfast'+'&count=5'+'&lat='+lat+'&lon='+lng+'&radius=500'+'&sort=rating';
			//var requestdrie= 'https://developers.zomato.com/f4a47e7b2332c43aa30609431b075091/v2.1/search?q=Breakfast';

			//fetch(requestdrie, {mode: 'cors'})
			//  .then((response) => {
			//    return response.json()
			//  })
			//  .then((data) => {
			//    console.log(data);
 // });

	  });

}
