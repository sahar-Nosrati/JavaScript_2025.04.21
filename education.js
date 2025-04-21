// RegExp -> patterns used to match character combinations in strings and forms a search pattern.
// Why we use RegExp -> validate the user’s inputted data, to validate URL formats, to replace words in paragraphs, etc ->
// Search 
// Replace particular items
// Validate input. 
// Coordinate actions. 
// Reformat text.

// general structure -> 
    //##    /pattern/modifiers;


// create RegExp

const myFirstRegExp = /sa/; 
console.log(myFirstRegExp); 

const emailRegExp = new RegExp("sahar@gmail\n.com"); 
console.log(emailRegExp); 


// Methods of RegExp  
// exec() 
    // exec() -> searches a string for a specified pattern, and returns the found text as an object.
    const subStringRegExp = myFirstRegExp.exec(emailRegExp); 
    console.log(subStringRegExp); 
    
//test() -> returns true or false
    const isrRegExpSubstring = myFirstRegExp.test(emailRegExp); 
    console.log(isrRegExpSubstring); 


// string methods 

// const mainFottballTeam = "Manchester United";
// const footballTeamRegExp = /chester /g; 

// match() -> returns array of specified string or RegExp
      // const matchedRegExp = mainFottballTeam.match(footballTeamRegExp); 
      // console.log(matchedRegExp);


  // matchAll() -> return RegExp iterator objects
      // const substitutedFottballTeam = "Manchester United chester ";
      // const wholematchedRegExp = substitutedFottballTeam.matchAll(footballTeamRegExp); 

      // const converteddWholematchedRegExp = [...substitutedFottballTeam.matchAll(footballTeamRegExp)]; 

      // for(let element of converteddWholematchedRegExp){
      //   console.log(element[0])
      // }
      // for(let element of wholematchedRegExp){
      //   console.log(element[0])
      // }


      // console.log(wholematchedRegExp); 
      // console.log(converteddWholematchedRegExp); 


// Replace() & replaceAll() -> returns a modified string where the pattern is replaced.
      // const fruit = "Apple";
      // const fruitRegExp = /PineApple/g; 

      // const replacetFruit = fruit.replace("Apple", fruitRegExp);

      // console.log(fruit, replacetFruit);

// search() ->  to search for finding a match, and returns the position of the match(index number)
      // const searchedString = mainFottballTeam.search("chester");
     // const searchedString = mainFottballTeam.search(footballTeamRegExp);
    // console.log(searchedString);

//split() 

      // const country = "Germany";
      // const replacingCoutryLetter = /ger/i;

      // const convertedCountry = country.split(replacingCoutryLetter);
      // console.log(convertedCountry);



// Structure of RegExp
// Regular Expression Modifiers -> Using to perform case-insensitive more global searches

// Character classes -> (\r, \n, \t)
  // const email = "sahar@yahoo\n.com";
  // console.log(email); 


// Assertions -> ^, $, \b, \B -> ^
    // All terms that start with li and end with e but have no i or v on the inside: li[^v]e
    // Test RegExp from first part of string

    // const sentenceExample = "A developer lives like an olive oil, always adding good taste to what he does";
    // const regExp = /li[^v]e/; 
    
    // console.log(sentenceExample.replace(regExp, "Signnnnnn"));

  
// Using groups and back references -> 
         //  (x) [capturing group] -> Matches x and remembers the match 
         // *? (Non-capturing group) -> Matches "x" but does not remember the match 
         // flag (g) 

            // const quote = `Single quote "'" and double quote '"'`;
            // const regexpQuotes = /(['"]).*?\1/g;
            // const totalQuote = quote.matchAll(regexpQuotes);

            // console.log(totalQuote);

    // ????

// Quantifiers 
    // const str = "fee fii fol fum";
    // const re = /\w{3}\s/g;
    
    // console.log(re.exec(str)); 
    // console.log(re.exec(str)); 
    // console.log(re.exec(str)); 


    // Final example 
    const phoneNumberFormat = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;