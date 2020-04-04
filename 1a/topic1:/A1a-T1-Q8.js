// First I defined and initialised all the strings//

let str1 = "welcometo";
let str2 = "engineeringMonash";

// Then I split the strings into the 4 relevant substrings as shown below//

//console.log(str1.substring(7,0));// (welcome)
//console.log(str1.substring(7));// (to)
//console.log(str2.substring(11));// (Monash)
//console.log(str2.substring(11,0));// (Engineering)

// I then collated the substrings into a single sentence //
console.log(str1.substring(7,0) + " " + str1.substring(7) + " " + str2.substring(11) + " " + str2.substring(11,0));
