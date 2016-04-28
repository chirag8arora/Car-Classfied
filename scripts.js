jQuery(function() {

	var cars =[
	{image:'images1/1.jpg', year:2013 ,make:'Maruti' ,model:'Ciaz' ,price:400000 },
	{image:'images1/2.jpg', year:2014 ,make:'Mahindra' ,model:'Scorpio' ,price:600000 },
	{image:'images1/3.jpg', year:2013 ,make:'Maruti' ,model:'Ritz' ,price:500000 },
	{image:'images1/4.jpg', year:2015 ,make:'Hyundai' ,model:'Verna' ,price:600000 },
	{image:'images1/5.jpg', year:2013 ,make:'Honda' ,model:'Jazz' ,price:300000 },
	{image:'images1/6.jpg', year:2016 ,make:'Hyundai' ,model:'Elantra' ,price:800000 },
	{image:'images1/7.jpg', year:2015 ,make:'Hyundai' ,model:'Xcent' ,price:600000 },
	{image:'images1/8.jpg', year:2014 ,make:'Maruti' ,model:'Vitara' ,price:400000 },
	{image:'images1/9.jpg', year:2015 ,make:'Honda' ,model:'City' ,price:700000 },
	{image:'images1/10.jpg', year:2011 ,make:'Toyota' ,model:'Etios' ,price:800000 },
	{image:'images1/11.jpg', year:2013 ,make:'Mahindra' ,model:'Xuv' ,price:600000 },
	{image:'images1/12.jpg', year:2016 ,make:'Honda' ,model:'Brio' ,price:100000 },
	{image:'images1/13.jpg', year:2012 ,make:'Hyundai' ,model:'Santafe' ,price:600000 },
	{image:'images1/14.jpg', year:2014 ,make:'Honda' ,model:'Accord' ,price:700000 },
	{image:'images1/15.jpg', year:2013 ,make:'Hyundai' ,model:'I10' ,price:600000 },
	{image:'images1/16.jpg', year:2015 ,make:'Maruti' ,model:'Baleno' ,price:700000 },
	{image:'images1/17.jpg', year:2014 ,make:'Maruti' ,model:'Dzire' ,price:800000 },
	{image:'images1/18.jpg', year:2016 ,make:'Toyota' ,model:'Corolla' ,price:700000 },
	{image:'images1/19.jpg', year:2016 ,make:'Toyota' ,model:'Fortuner' ,price:400000 },
	{image:'images1/20.jpg', year:2014 ,make:'Toyota' ,model:'Yaris' ,price:700000 },

	];
	// console.log(cars);

	for (var i = 0; i < cars.length; i++) {
	 var str = '<div class="product_box marxgin_r35"><h2>' + 
	 	cars[i].model + 
	 	'</h2><div class="image_wrapper"><a href="" target="_parent"><img src=' + 
	 	cars[i].image + 
	 	' alt="product 2" height="120" width="185"></div><h4></h4>' + cars[i].make + ' <h4></h4>' + cars[i].year + '<p></p>' + cars[i].price + '</div>';
	 	// console.log(str);

	 	jQuery('.content_section').append(str);
	}



	jQuery("button").mouseup(function() {

		var year = jQuery('#ddlViewBy').val();
		var make = jQuery('#ddlViewBy1').val();
		var price = jQuery('#ddlViewBy2').val();

		jQuery('.content_section').empty();


		 // console.log("asd");
		 // console.log(make, price, year);
		 var found= false ;
	for(var i = 0; i < cars.length; i++)
	{
		if(year == cars[i].year && make == cars[i].make && price == cars[i].price ) 
		{
			// console.log("asd");
			

				 var str1 = '<div class="product_box margin_r35"><h2>' + 
	 	cars[i].model + 
	 	'</h2><div class="image_wrapper"><a href="" target="_parent"><img src=' + 
	 	cars[i].image + 
	 	' alt="product 2" height="120" width="185"></div><h4></h4>' + cars[i].make + ' <h4></h4>' + cars[i].year + '<p></p>' + cars[i].price + '</div>';

	 	jQuery('.content_section').append(str1);
	 	found = true;
	 		
		}
	
		
	}
	if(!found)
	{
		

				var str2 = "<h2>No Results Found</h2>";
	 	jQuery('.content_section').append(str2);	
		
		
	
	}
}
	);

	


});

