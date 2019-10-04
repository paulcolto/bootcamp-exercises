console.log('it works');

// EXERCISE 1: 
// PRODUCTS

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    sell() {
        return this.quantity - 1;
    }
    store(count) {
        return this.quantity + count;
    }
}

const products = [
    new Product('headphones', 100, 20),
    new Product('speakers', 200, 15),
    new Product('speaker stands', 75, 12),
    new Product('record player', 115, 30),
    new Product('cd player', 95, 18),
    new Product('MP3 player', 45, 40),
    new Product('earphones', 50, 60),
];

// MENUS

class Menu {
    constructor(starter, main, dessert) {
        this.starter = starter;
        this.main = main;
        this.dessert = dessert;
    }
}

const menus = [
    new Menu('soup', 'chicken', 'ice cream'),
    new Menu('fruit', 'beef', 'cake'),
    new Menu('bread', 'curry', 'cheese'),
    new Menu('juice', 'duck', 'fudge'),
];

// EXERCISE 2 
// BUS

class Bus {
    constructor(direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
    };
    current() {
        return this.stations[this.last_station];
    };
    next() {
        this.last_station++;
    };
    board(count) {
        const freeSeats = this.seats - this.passengers;
        if (freeSeats >= count) {
            this.passengers += count;
        } else { 
            this.passengers + freeSeats;
        }
    };
    unboard(count) {
        if (count <= this.passengers) {
            this.passengers -= count;
        } else {
            this.passengers - this.passengers;
        }
    }
};

const onroad = [
    new Bus('Prague to Vienna', ['Praha', 'Jihlava', 'Brno', 'Breclav', 'Viden'], 20, 16, 0),
];