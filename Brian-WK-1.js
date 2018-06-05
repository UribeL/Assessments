// 1. Look at this if statement... something about it doesn't really make sense. Change it so that the messages make sense.

if(true) {
  console.log("This message is visible")
} else {
  console.log("You'll never see this message!")
}
// B.H - I switched the console.log statements


// 2. Create a for loop that counts to 10 backwards. Comment each line to explain what is happening.

for(let i=10; i > 0; i--) { // Declare i = 10; While i is greater than 0, subtract 1

  console.log(i) // console.log i

}

// 3. Create an array with at least 4 items inside it. Console.log the second thing in the list. Change the fourth item to equal "duck".

var arrEx = ["cat", "dog", 24, "Hello"] // Declare array
console.log(arrEx[1]) // console.log the 2nd item in arrEx
arrEx[3] = "duck" // change the last (4th) item in the array to duck

// 4. Being comfortable with if/else decisions is very helpful in code. It helps you get into the practice of breaking complex actions down into their simpler parts. You might recognize this example:

if(!tired) {
	keepWorking()
} else {
	console.log("I need coffee!")
}

// Now try to come up with your own if/else decision - if you can't think of one, try to create one for opening a door.

if(sad() === true) {
  sad().stop()
  beAwesome()
} else {
  continueBeingAwesome() // or just omit else statement
} // Taken from the internet

if(doorOpen) {
  closeDoor()
} else {
  openDoor()
}


// 5. Time to combine all this! Create a function that takes in two numbers as arguements. Find the sum of those two numbers, if the sum is less than 20, console log the sum. If the two numbers sum to more than 20, console log "can't count that high!"

function practiceFunc(arg1, arg2) {
  var sum = arg1 + arg2

  if(sum < 20) {
    console.log(sum)
  } else if(sum > 20) {
    console.log("I can't count that high!")
  } else {
    console.log("Something went wrong...")
  }
}

practiceFunc(10, 25)
