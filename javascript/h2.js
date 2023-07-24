//create a list of arrays

var listOfItems = ["bread", "milk", "sugar", "milk","sweers","teabg","cake","custard","toothpaste","toothbrush","showergek","soap","shamppo","oil","salad"]
//remove the last item on the list
listOfItems.pop()
//add an item to the end of the list
listOfItems.push("pasta")
console.log(listOfItems)

//Find the position of the first item, middle item and last item of the list and print them off separately.
console.log(listOfItems[0])
console.log(listOfItems[listOfItems.length-1])
console.log(listOfItems[7])//middle


//Modify 3 items in the array and print them off
listOfItems[2]="gum"
listOfItems[3]="water"
listOfItems[4]="spice"
console.log(listOfItems)

//Modify 3 items in the array and print them off
console.log(`item 1 =$`)


//Delete the 2 items in the array
listOfItems.splice(0,2)
console.log(listOfItems)

//remove the first item from the array
listOfItems.shift()
listOfItems.shift()

//add an item to the first position of the array
listOfItems.unshift("jam")
console.log(listOfItems)
