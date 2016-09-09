// JavaScript Object Prototypes
var msg = document.getElementById("message");

// car constructor
function car(make, model, color) {
	this.make = make || "unknown";
	this.model = model || "model";
	this.color = color || "unpainted";
}

// display method for all car objects
car.prototype.display = function() {
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
};

// create objects
var c1 = new car("Ford", "Mustang", "blue");
var c2 = new car("Ford", "GTO", "white");
var c3 = new car();
var c4 = new car("Chev", "Belair", "Gold");

// change properties and run methods
c2.color = "black";
c1.display();
c2.display();
c3.display();
c4.display();