let dataArray = [2,2,3,3,3,4,5,5,7,8,8,34,45,45,67,67,95,96,567,578];


let total = 0;

//Step 1 : Calculating mean //
for (let i = 0; i < dataArray.length; i++)
{
total += dataArray[i];
}

let mean = total/dataArray.length;

// Step 2 : Calculating median //

let median = dataArray[(dataArray.length/2)];

let sum =  0;

// Step 3 : Calculating standard deviation //

for (let i = 0; i < dataArray.length; i++)
{
 let x = Math.pow(dataArray[i] - mean,2);
 sum += x;

}

let f = (sum/(dataArray.length-1));

// SD = Standard Deviation //

let SD = Math.sqrt(f);

console.log("Mean: " + mean + "\n" + "Median: " + median + "\n" + "Standard Deviation: " + SD);

// Since no decimal rounding was specified all answers were given without rounding //
