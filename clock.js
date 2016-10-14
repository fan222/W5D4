
class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();

    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.mins = date.getMinutes();
    this.secs = date.getSeconds();

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    let timeString = `${this.hours}:${this.mins}:${this.secs}`;

    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.secs += 1;

    // 2. Call printTime.
    this.printTime();
  }

}

// let clock = new Clock();
