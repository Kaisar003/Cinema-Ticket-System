class CinemaTicketSystem {
  constructor() {
    this.movies = {}; // Хранит фильмы
    this.users = {}; // Хранит пользователей
    this.tickets = {}; // Хранит билеты
    this.nextMovieId = 1; // Счетчик для идентификаторов фильмов
    this.nextUserId = 1; // Счетчик для идентификаторов пользователей
    this.nextTicketId = 1; // Счетчик для идентификаторов билетов
  }

  addMovie(movieName) {
    const movieId = this.nextMovieId++;
    this.movies[movieId] = movieName;
    return movieId;
  }

  showAllMovies() {
    for (let movieId in this.movies) {
      console.log(`${movieId}. ${this.movies[movieId]}`);
    }
  }

  addUser(userName) {
    const userId = this.nextUserId++;
    this.users[userId] = userName;
    return userId;
  }

  buyTicket(userId, movieId) {
    if (!(userId in this.users) || !(movieId in this.movies)) {
      throw new Error("Invalid userId or movieId");
    }
    const ticketId = this.nextTicketId++;
    this.tickets[ticketId] = { userId, movieId };
    return ticketId;
  }

  cancelTicket(ticketId) {
    if (ticketId in this.tickets) {
      delete this.tickets[ticketId];
      return true;
    }
    return false;
  }

  loggerSize() {
    return Object.keys(this.tickets).length;
  }
}

// Создание объекта cinemaSystem
const cinemaSystem = new CinemaTicketSystem();

const movieId1 = cinemaSystem.addMovie("Inception");
const movieId2 = cinemaSystem.addMovie("The Matrix");
const movieId3 = cinemaSystem.addMovie("Titanic");
const movieId4 = cinemaSystem.addMovie("King-kong");

cinemaSystem.showAllMovies();

const userId1 = cinemaSystem.addUser("Alice");
const userId2 = cinemaSystem.addUser("Bob");
const userId3 = cinemaSystem.addUser("John");

const ticketId1 = cinemaSystem.buyTicket(userId1, movieId1);
const ticketId2 = cinemaSystem.buyTicket(userId2, movieId2);
const ticketId3 = cinemaSystem.buyTicket(userId3, movieId4);

console.log(cinemaSystem.cancelTicket(1));
console.log(cinemaSystem.cancelTicket(999));
console.log(cinemaSystem.cancelTicket(3));
