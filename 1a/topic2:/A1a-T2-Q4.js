let numArray = [-40,23,-15,4,7,18,-29,35,58,95,-167,678];
let positiveOddNumbers = [];
let negativeEvenNumbers = [];

for (let i = 0; i < numArray.length; i++) //Setting up the 'for' loop//

{ if (numArray[i]>0 && numArray[i]%2>0) // 1st condition implies positive, 2nd condition implies odd //
	{
	 positiveOddNumbers.push(numArray[i]);
	}

	else if (numArray[i]<0 && numArray[i]%2 > -1) // 1st condition implies negative, 2nd condition implies even //
	{
	 negativeEvenNumbers.push(numArray[i]);
	}
}

console.log("negativeEvenNumbers: " + negativeEvenNumbers + "\n" + "positiveOddNumbers: " + positiveOddNumbers);
