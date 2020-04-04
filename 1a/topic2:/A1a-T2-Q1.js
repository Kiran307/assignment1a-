let studentRecord = {
    ENG1002:75,
    ENG1003:80,
    ENG1021:98,
    ENG1051:55
};

let y = "";

for (let y in studentRecord)

// studentRecord[y] refers to the loop containing each of the product values from the object above //

if (studentRecord[y]>0 && studentRecord[y]<50)
{console.log(y + ":" + "  " + studentRecord[y]+ " (F)");}

else if (studentRecord[y]>49 && studentRecord[y]<60)
{ console.log(y + ":" + "  " + studentRecord[y]+ " (P)");}

else if (studentRecord[y]>59 && studentRecord[y]<70)
 { console.log(y + ":" + "  " + studentRecord[y]+ " (C)");}

else if (studentRecord[y]>69 && studentRecord[y]<80)
 { console.log(y + ":" + "  " + studentRecord[y]+ " (D)");}

// I used else because the only grade that would not be in these intervals would be 80-100 //

else
{console.log(y + ":" + "  " + studentRecord[y]+ " (HD)");}
