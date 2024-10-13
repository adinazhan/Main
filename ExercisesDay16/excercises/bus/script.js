class Bus {
  constructor(direction, stations, seats, passengers, last_station) {
    this.direction = direction;
    this.stations = ["Praha", "Jihlava", "Brno", "Breclav", "Viden"];
    this.seats = seats;
    this.passengers = passengers;
    this.last_station = 0;
  }

  current() {
    return this.stations[this.last_station];
  }
  next(){

  }
}
