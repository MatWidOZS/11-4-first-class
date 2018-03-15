$(function () {

	function Phone(brand, price, color, model) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.model = model;
	}

	Phone.prototype.printInfo = function() {
		console.log('The phone brand is ' + this.brand + ', model is ' + this.model + ', color is ' + this.color + ' and the price is ' + this.price + '.');
	}

	Phone.prototype.addParagraph = function() {
		var pWithText = $('<p>The phone brand is <strong>' + this.brand + '</strong>, model is <strong>' + this.model + '</strong>, color is <i>' + this.color + '</i> and the price is <span>' + this.price + '</span> PLN.</p>')
		$('.container').append(pWithText);
	}

	var GalaxyS8 = new Phone('Samsung', 2700, 'Midnight Black', 'Galaxy S8'),
		iPhone8 = new Phone('Apple', 3250, 'Space Grey', '8'),
		onePlus = new Phone('OnePlus', 2350, 'Midnight Black', '5T');

	GalaxyS8.printInfo();
	iPhone8.printInfo();
	onePlus.printInfo();

	GalaxyS8.addParagraph();
	iPhone8.addParagraph();
	onePlus.addParagraph();
});