var products = [{"id": "100","name": "iPhone 4S","brand": "Apple","os": "iOS"},
				{"id": "101","name": "Moto X","brand": "Motorola","os": "Android"},
				{"id": "102","name": "iPhone 6","brand": "Apple","os": "iOS"},
				{"id": "103","name": "Samsung Galaxy S","brand": "Samsung","os": "Android"},
				{"id": "104","name": "Google Nexus","brand": "ASUS","os": "Android"},
				{"id": "105","name": "Surface","brand": "Microsoft","os": "Windows"}];
		
$(document).ready(function(){
$("#select_OS").change(function(){ 
	$("#tblshow").show();
	$id=$("#select_OS option:selected").attr('id');
	text="";
	text="<table><tr><td>Id</td><td>Name</td><td>Brand</td><td>Opertating System</td><td>Remove</td></tr>";
	for(i=0;i<products.length;i++){   
	if($id==products[i].os)
	{  	
		text+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><span class='remove_item'>X<span></td></tr>";
	}
     }
	 text=$("#tblshow").html(text);
	text="</table>";   
})
$("#tblshow").on('click','.remove_item',function(){
  $(this).parent().parent().remove();
})

$("#select_OS1").change(function(){
	$id=$("#select_OS1 option:selected").attr('id');
	text="";
	text="<table><tr><td>Id</td><td>Name</td><td>Brand</td><td>Opertating System</td></tr>";
	for(i=0;i<products.length;i++){   
	if($id==products[i].brand)
	{  	
		
		text+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><span class='remove_item'>X<span></td></tr>";
	}
	
     }
	 text=$("#tblshow").html(text);
	text="</table>";
})

// search on button click

 $("#Onclick").click(function(){
    
	$input_value=$("#input_value").val();
	// $("#tblshow1").show();
	text="";
	let cnt=0;
	for(i=0;i<products.length;i++){   
	if($input_value==products[i].id)
	{ 
		if(cnt==0)
		{

			text="<table><tr><td>Id</td><td>Name</td><td>Brand</td><td>Opertating System</td></tr>";
		}
		text+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><span class='remove_item'>X<span></td></tr>";
	
	cnt++;
}
     }
	 text=$("#tblshow1").html(text);
	text="</table>";

 })

 $("#tblshow1").on('click','.remove_item',function()
  {
	$(this).parent().parent().remove();	
  })


})


