const joke = require("give-me-a-joke");

// console.log(joke);

joke.getRandomDadJoke((newJoke) => {
  console.log(newJoke);
});
