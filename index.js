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

function SymbolGenerator() {
    const specialChar = ["-", "_", ".", "@"];
    let out = "";
    out = out + specialChar[Math.floor(Math.random() * specialChar.length)];
    return out;
  }


function NumberGenerator() {
    const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let out = "";
    for (let i = 0; i < 4; number.length) {
      out = out + number[Math.floor(Math.random() * number.length)];
    }
    return out;
  }

function generatePassword() {
    const pass = alphabetGenerator() + SymbolGenerator() + NumberGenerator();
    return pass;
  }