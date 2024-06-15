const prompt = require('./lib/prompt');

let places = [];

function list() {
  if (places.length > 0) {
    console.log("Here are the lunch places you've added:");
    places.forEach(function (place) {
      console.log("-", place);
    });
  } else {
    console.error("You haven't added any lunch places yet!");
  }
}

function add() {
  let place = prompt("Enter the name of a lunch place to add:");
  if (place.length > 0) {
    places.push(place);
    console.log("Added.");
  } else {
    console.error("You didn't enter a lunch place to add!");
  }
}

function remove() {
  let place = prompt("Enter the name of a lunch place to remove:");
  let index = places.indexOf(place);
  if (index == -1) {
    console.error("That lunch place doesn't exist!");
  } else {
    places.splice(index, 1); // remove 1 element at index
    console.log("Removed.");
  }
}

function pick() {
  if (places.length > 0) {
    let randomIndex = Math.floor(Math.random() * places.length);
    let randomPlace = places[randomIndex];
    console.log("Let's eat at...", randomPlace);
  } else {
    console.error("You haven't added any lunch places yet!");
  }
}

function main() {
  console.log("Let's decide where to eat.");
  console.log();

  while (true) {
    console.log("Available commands: list, add, remove, pick, quit");
    let command = prompt("What do you want to do?")
    if (command == "list") {
      list();
    } else if (command == "add") {
      add();
    } else if (command == "remove") {
      remove();
    } else if (command == "pick") {
      pick();
    } else if (command == "quit") {
      console.log("Bye!");
      break;
    } else {
      console.error("That command isn't valid!");
    }
    console.log();
  }
}

main()
