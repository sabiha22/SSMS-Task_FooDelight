var data = [
	{
		"category": "Italian",
		"model": "Tiramisu",
		"type": "Dessert",
		"price": "Rs. 150",
		"image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Tiramisu_with_blueberries_and_raspberries%2C_July_2011.jpg"
	},
	{
		"category": "Italian",
		"model": "Margherita Pizza",
		"type": "Main Course",
		"price": "Rs. 300",
		"image": "https://cdn.pixabay.com/photo/2015/10/17/20/22/margherita-pizza-993274_1280.jpg"
	},
	{
		"category": "Indian",
		"model": "Chole Bhature",
		"type": "Main Course",
		"price": "Rs. 150",
		"image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Chola_bhatura.jpg"
	},
	{
		"category": "Indian",
		"model": "Paneer Tikka",
		"type": "Starter",
		"price": "Rs. 100",
		"image": "https://wetellyouhow.com/wp-content/uploads/2013/07/paneer-tikka.jpg"
	},
	{
		"category": "Indian",
		"model": "Gulab Jamun with Ice Cream",
		"type": "Dessert",
		"price": "Rs. 90",
		"image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Gulab_jamun_with_Vanilla_Ice_cream.jpg"
	},
	{
		"category": "Mughlai",
		"model": "Biryani",
		"type": "Main Course",
		"price": "Rs. 400",
		"image": "https://happyjamin.com/wp-content/uploads/2020/03/mutton-biryani.jpg"
	},
	{
		"category": "Mughlai",
		"model": "Shahi Tukda",
		"type": "Dessert",
		"price": "Rs. 200",
		"image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Nutty_Shahi_Tukda.jpg"
	},
	{
		"category": "Chinese",
		"model": "Veg Manchurian with Fried Rice",
		"type": "Main Course",
		"price": "Rs. 200",
		"image": "https://farm7.static.flickr.com/6206/6041758497_e0dcb98d92_b.jpg"
	},
	{
		"category": "Chinese",
		"model": "Veg Momos",
		"type": "Starter",
		"price": "Rs. 80",
		"image": "https://p0.pikist.com/photos/680/419/momos-food-resturant-travel-restaurante-meat-meal-dinner-dining.jpg"
	}
];

var products = "",
	makes = "",
	models = "",
	types = "";

for (var i = 0; i < data.length; i++) {
	var make = data[i].category,
		model = data[i].model,
		type = data[i].type,
		price = data[i].price,
		rawPrice = price.replace("$",""),
		rawPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />Category: " + make + "<br />Name: " + model + "<br />Type: " + type + "<br />Price: " + price + "</div></div>";
	
	//create dropdown of makes
	if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {
		makes += "<option value='" + make + "'>" + make + "</option>";
	}
	
	//create dropdown of models
	if (models.indexOf("<option value='" + model+"'>" + model + "</option>") == -1) {
		models += "<option value='" + model + "'>" + model + "</option>";
	}
	
	//create dropdown of types
	if (types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1) {
		types += "<option value='" + type + "'>" + type + "</option>";
	}
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-model").append(models);
$(".filter-type").append(types);

var filtersObject = {};

//on filter change
$(".filter").on("change",function() {
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	}
	}
	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var make = $(this).data("make").toLowerCase(),
			model = $(this).data("model").toLowerCase(),
			type = $(this).data("type").toLowerCase();

		if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {
			$(this).show();
		}
	});
});