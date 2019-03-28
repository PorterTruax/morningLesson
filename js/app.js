console.log("Events-callbacks");


const primaveraIngreds = [
"tomato sauce",
"garlic",
"basil",
"farfalle",
"broccoli",
"oregeno",
"bacon"
]

// function goShopping(where,list) {
// 	for (let i = 0; i < list.length; i++){
// 		console.log(`Buying ${list[i]} at ${where}`);
// 	}
// }


function goShopping(list) {
	for (let i = 0; i < list.length; i++){
		console.log(`Buying ${list[i]}`);
	}
}

goShopping(primaveraIngreds);


function updateMe(){
	console.log("I am finished shopping and headed back!");
}

updateMe();

function goShoppingCb(list, callbackFunction){
	for (let i = 0; i < list.length; i++){
		console.log(`Buying ${list[i]}`);
	}
	//Call it back~*~*~* by by CALLING THE FUNCTION!!!!!
	callbackFunction(); /* <-- I"M THE CALLED BACK FUNCTION SPECIFIED IN THE PARAMETERS!!!!!!!*/
}

goShoppingCb(primaveraIngreds,updateMe) /* <-- notice, we're only passing a reference to the function, not calling it */


function okayQueen(){
	console.log("mmk!");
}

function goShoppingAgainAndAgain(list, callbackFunction, anotherCallback){
	for (let i = 0; i < list.length; i++){
		console.log(`Buying ${list[i]}`);
	}
	callbackFunction();

	anotherCallback();
}

goShoppingAgainAndAgain(primaveraIngreds, updateMe, okayQueen)




// function goShoppingAgainAndAgain(callbackFunction, anotherCallback){
// 	callbackFunction();

// 	anotherCallback();
// }

// // goShoppingAgainAndAgain(goShoppingCb, okayQueen)

// goShoppingAgainAndAgain(goShoppingCb(primaveraIngreds,updateMe), okayQueen)






