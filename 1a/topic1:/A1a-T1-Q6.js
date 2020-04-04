// I began by defining what today's date was //
let today = new Date();

// I then defined the date of Birthday //
let birthDate = new Date("4 June 2001");

// I then defined what age meant in years using 'getFullYear' expressions //

let age = today.getFullYear() - birthDate.getFullYear();

// Then it was printed using console.log //

console.log (age + " " + "years old");
