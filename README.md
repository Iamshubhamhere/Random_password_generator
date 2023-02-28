## RANDOM PASSWORD GENERATOR

A random password generator is a program that generates a ```random password``` for a user.
The purpose of this program is to create a strong ```password``` that is difficult for others
to guess or crack. In ```JavaScript```, we can use a combination of random number generation
and ```string``` manipulation to create a secure password.

Here are the basic steps for creating a random password generator in JavaScript:

### FUNCTION

A ```function``` is a block of code that performs a specific task or set of tasks.
```Functions``` are a fundamental building block of most programming languages, including ```JavaScript```.

Here are the basic steps for creating a random password generator in JavaScript:

1. Define the ```characters``` that can be used in the password. This usually includes
a combination of uppercase letters, lowercase letters, numbers, and special characters.
2. Here we have to create three different ```function``` to create a random password which include
 ```alphabet``` , ```character``` and ```number```.
3. We have to generate a random number , character and symbol which can be done using
using the Math.random() function
4. Then, after getting the 4 digit random number, character and alphabet we will join the 
 output by using the other function name generate password.
 
```javaScript
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
  const pass = aGenerator() + sGenerator() + nGenerator();
  return pass;
}

```

### REFRENCES

- [JavaScript cookbook](https://www.oreilly.com/library/view/javascript-cookbook-3rd/9781492055747/)
- [JavaScript: the new toys](https://www.wiley.com/en-us/JavaScript:+The+New+Toys-p-9781119367963)
- [Professional JavaScript for web developers](https://www.wiley.com/en-us/Professional+JavaScript+for+Web+Developers%2C+4th+Edition-p-9781119366447)
