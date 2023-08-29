// Function takes an array and an object as arguments.
// The array contains 2 or more space-separated elements forming a person's name.
// The object has "title" and "occupation" keys with respective values.
// Function returns a greeting using the full name and mentioning the title.

function greetings(array, object) {
  fullName = array.join(" ");  // Use .join(" ") to concatenate the elements of the array
  greeting = "Hello, " + object.title + " " + fullName + "! It's great to have a " + object.occupation + " around.";
  return greeting;
}

console.log(greetings(["Vivan", "Mehta"], { title: "Mr.", occupation: "Plumber" }));