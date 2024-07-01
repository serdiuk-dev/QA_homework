const Car = {
    brand: "Tesla",
    model: "Model Y",
    year: "2024",

    getInfo: function () {
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
            }
        }
    }
};

//Car.getInfo();
Car.color = "red";
Car.getInfo();