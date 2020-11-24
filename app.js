"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':     
      searchResults = searchByGender(people);
      searchResults = searchByDOB(people);
      searchResults = searchByHeight(people);
      searchResults = searchByWeight(people);
      searchResults = searchByEyeColor(people);
      searchResults = searchByOccupation(people);
      searchResults = searchByMarriage(people);
      displayPeople(searchResults);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}
function searchByGender(people){
  let genderTrait = promptFor("Do you know the person's gender? Yes or no", yesNo).toLowerCase();
  switch(genderTrait){
    case "yes":
      
      searchResults = people.filter(function(person){
        let genderChoice = promptFor("What gender are you searching for? Male or female.", chars)
        if(person.gender === genderChoice){
          return true;
        }
        else{
          return false;
        }

      })
      return searchResults;
      
    case "no":
      return searchResults;
      
      
    default:
        alert("Sorry but that input was invalid. Try again.")
        return searchByGender(people)
      
  }
  
}
function searchByDOB(people){
  let traitDOB = promptFor("Do you know the person's DOB? Yes or no", yesNo).toLowerCase();
  switch(traitDOB){
    case "yes":
      
      searchResults = people.filter(function(person){
        let choiceDOB = promptFor("What DOB are you searching for? MM/DD/YYYY.", chars)
        if(person.dob === choiceDOB){
          return true;
        }
        else{
          return false;
        }

      })
      return searchResults;
      
    case "no":
      return searchResults;
      
      
    default:
        alert("Sorry but that input was invalid. Try again.")
        return searchByDOB(people)
      
  }
  
}
function searchByHeight(people){
  let heightTrait = promptFor("Do you know the person's height? Yes or no", yesNo).toLowerCase();
  switch(heightTrait){
    case "yes":
      
      searchResults = people.filter(function(person){
        let heightChoice = promptFor("What height are you searching for? Give in inches")
        if(person.height === heightChoice){
          return true;
        }
        else{
          return false;
        }

      })
      return searchResults;
      
    case "no":
      return searchResults;
      
      
    default:
        alert("Sorry but that input was invalid. Try again.")
        return searchByHeight(people)
      
  }
  
}
function searchByWeight(people){
  let weightTrait = promptFor("Do you know the person's weight? Yes or no", yesNo).toLowerCase();
  switch(weightTrait){
    case "yes":
      
      searchResults = people.filter(function(person){
        let weightChoice = promptFor("What height are you searching for? Give whole numbers.")
        if(person.weight === weightChoice){
          return true;
        }
        else{
          return false;
        }

      })
      return searchResults;
      
    case "no":
      return searchResults;
      
      
    default:
        alert("Sorry but that input was invalid. Try again.")
        return searchByWeight(people)
      
  }
  
}
function searchByEyeColor(people){
  let eyeColorTrait = promptFor("Do you know the person's eye color? Yes or no", yesNo).toLowerCase();
  switch(eyeColorTrait){
    case "yes":
      
      searchResults = people.filter(function(person){
        let eyeColorChoice = promptFor("What eye color are you searching for?", chars)
        if(person.eyeColor === eyeColorChoice){
          return true;
        }
        else{
          return false;
        }

      })
      return searchResults;
      
    case "no":
      return searchResults;
      
      
    default:
        alert("Sorry but that input was invalid. Try again.")
        return searchByEyeColor(people)
      
  }
  
}
function searchByOccupation(people){
  let occupationTrait = promptFor("Do you know the person's occupation? Yes or no", yesNo).toLowerCase();
  switch(occupationTrait){
    case "yes":
      
      searchResults = people.filter(function(person){
        let occupationChoice = promptFor("What occupation are you searching for?", chars)
        if(person.occupation === occupationChoice){
          return true;
        }
        else{
          return false;
        }

      })
      return searchResults;
      
    case "no":
      return searchResults;
      
      
    default:
        alert("Sorry but that input was invalid. Try again.")
        return searchByOccupation(people)
      
  }
  
}
function searchByMarriage(people){
  let marriageTrait = promptFor("Do you know if the person is married? Yes or no", yesNo).toLowerCase();
  switch(marriageTrait){
    case "yes":
      
      searchResults = people.filter(function(person){
        if(person.currentSpouse == null){
          return false;
        }
        else if(person.currentSpouse !== null){
          return true;
        }
      })
      
      return searchResults;
      
    case "no":
      searchResults = people.filter(function(person){
        if(person.currentSpouse !== null){
          return false;
        }
        else if(person.currentSpouse == null){
          return true;
        }
      })       
        
      return searchResults;      
      
    default:
        alert("Sorry but that input was invalid. Try again.")
        return searchByMarriage(people)
      
  }
  
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
