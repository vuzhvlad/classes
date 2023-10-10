class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
     set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      for (let i = 0; i < this.ratings.length; i++) {
        let item = this.ratings[i];
        if (typeof item === 'number') {
          let raitingsSum = this.ratings.reduce((accumulator, rating) =>    accumulator + rating);
          return raitingsSum / this.ratings.length;
          } else {
            console.log("...");
          }
        }
      }
    
      addRating(value) {
        if (value <= 5 && value >= 0) {
          this.ratings.push(value);
        } else {
          console.log('Choose a number between 0 nad 5.');
        }
      }
  
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return author;
    }
    get pages() {
      return pages;
    }
    }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEveryhting = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEveryhting.toggleCheckOutStatus();
  console.log(historyOfEveryhting.isCheckedOut);
  historyOfEveryhting.addRating(5);
  historyOfEveryhting.addRating(3);
  historyOfEveryhting.addRating(1);
  console.log(historyOfEveryhting.getAverageRating());
  
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(4);
  console.log(speed.getAverageRating());
  
  