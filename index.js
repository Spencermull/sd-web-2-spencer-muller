"use strict";

// sample data - expanded Star Wars characters with varied ages
  const users = [
    { id: 1, name: "Luke Skywalker", age: 23 },
    { id: 2, name: "Darth Vader", age: 45 },
    { id: 3, name: "Princess Leia", age: 23 },
    { id: 4, name: "Obi-Wan Kenobi", age: 57 },
    { id: 5, name: "Yoda", age: 900 },
    { id: 6, name: "Han Solo", age: 32 },
    { id: 7, name: "Chewbacca", age: 234 },
    { id: 8, name: "R2-D2", age: 33 },
    { id: 9, name: "C-3PO", age: 112 },
    { id: 10, name: "Padmé Amidala", age: 27 },
  ];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
  users.forEach((item) => {
    console.log(`${item.name}`);
    const listElement = document.createElement("li");
    listElement.textContent = item.name;
    document.getElementById("names-list").append(listElement);
  });

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
  users.forEach((item) => {
    if (item.age < 40) {
      console.log(`${item.name}`);
      const listElement = document.createElement("li");
      listElement.textContent = item.name;
      document.getElementById("young-characters-list").append(listElement);
    }
  });

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
  function renderArray(array) {
    for (let i = 0; i < array.length; i++) {
      const listElement = document.createElement("li");
      listElement.textContent = array[i].name;
      document.getElementById("function-list").append(listElement);
    }
  }

renderArray(users); //Test array case

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
  function findAgeBelow(array, age) {
    for (let i = 0; i < array.length; i++) {
      const listElement = document.createElement("li");
      listElement.textContent = array[i].name;
      if (array[i].age < age) {
        document.getElementById("age-filter-list").append(listElement);
      }
    }
  }

 findAgeBelow(users,30); // test case

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

    function nameErrorHelper(obj, htmlId){ //Originally I had duplicate functions but then i realized that a helper function would easier for name checking
      if(!("name" in obj)){
        const errorElement = document.createElement("li");
        const errorMsg = ("Attribute name not found at index ", obj);
        console.error(errorMsg);
        errorElement.textContent = errorMsg;
        document.getElementById(htmlId).append(errorElement);
        return true;
      }
      return false;
    }
// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
    
    const invalidUsers = [
    { id: 1, age: 23 },
    { id: 2, name: "Darth Vader", age: 45 },
    { id: 3,  age: 23 },
    { id: 4,  age: 57 },
    { id: 5,  age: 900 },
    { id: 6,  age: 32 },
    { id: 7,  age: 234 },
    { id: 8, age: 33 },
    { id: 9,  age: 112 },
    { id: 10,  age: 27 },
    ];
