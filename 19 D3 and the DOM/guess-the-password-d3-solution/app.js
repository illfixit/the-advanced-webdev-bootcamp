document.addEventListener('DOMContentLoaded', function() {
  var wordCount = 10;
  var guessCount = 4;
  var password = '';

  d3.select("#start")
    .on("click", function() {
      toggleClasses(d3.select('#start-screen'), 'hide', 'show');
      toggleClasses(d3.select('#game-screen'), 'hide', 'show');
      startGame();      
    })

  function toggleClasses(selection) {
    for (var i = 1; i < arguments.length; i++) {
      var classIsSet = selection.classed(arguments[i]);
      selection.classed(arguments[i], !classIsSet);
    }
  }

  function startGame() {
    // get random words and append them to the DOM
    var wordList = d3.select("#word-list");
    var randomWords = getRandomValues(words, wordCount);
    randomWords.forEach(function(word) {
      wordList
          .append("li")
          .text(word);
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.on('click', updateGame);
  }

  function getRandomValues(array, numberOfVals) {
    return shuffle(array).slice(0, numberOfVals);
  }

  function shuffle(array) {
    var arrayCopy = array.slice();
    for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      var idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      var temp = arrayCopy[idx1];
      arrayCopy[idx1] = arrayCopy[idx2];
      arrayCopy[idx2] = temp;
    }
    return arrayCopy;
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    d3.select("#guesses-remaining")
        .text("Guesses remaining: " + guessCount + ".");
  }

  function updateGame(e) {
    var tgt = d3.select(d3.event.target);
    if (tgt.node().tagName === "LI" && !tgt.classed("disabled")) {
      // grab guessed word, check it against password, update view
      var guess = tgt.text();
      var similarityScore = compareWords(guess, password);
      tgt.classed("disabled", true)
          .text(tgt.text() + " --> Matching Letters: " + similarityScore);
      setGuessCount(guessCount - 1);

      // check whether the game is over
      if (similarityScore === password.length) {
        toggleClasses(d3.select("#winner"), 'hide', 'show');
        d3.select(this).on('click', null);
      } else if (guessCount === 0) {
        toggleClasses(d3.select("#loser"), 'hide', 'show');
        d3.select(this).on('click', null);
      }
    }
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) throw "Words must have the same length";
    var count = 0;
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  }
});