// First I defined the object with all relevant properties //

let Yeezy = {
	firstName : "Kanye",
    lastName : "West",
    age : 22,
	hairColor : "black"};

// The I isolated each specific output by using object pulls, this way the output changes if any of the values in the properties above changes//

let x = Yeezy.firstName;
let y = Yeezy.lastName;
let z = Yeezy.age;
let d = Yeezy.hairColor;

//Then I wrote a console.log statement that printed each property beside its value in the requested format//

console.log("firstName:" + " " + x + "\n" + "lastName:" + " " + y + "\n" + "age:" + " " + z + "\n" + "hairColor:" + " " + d);
