'use strict';

function alphabetGenerator() {
    const alphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
       "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    let out = "";
    for (let i = 0; i < 4; i++) {
      out = out + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return out;
  }