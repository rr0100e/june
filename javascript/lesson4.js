// .includes()
//searches for items in the array
//switch cases instead of else if if you write more than 
//3 else if statements then use switch case instead

var array = [1,2,3,4,5,6]

if (array.includes(6)){
    console.log("array has the number 6")
}


var day ="tuesday"

switch(day.toLowerCase){
case "monday":
    console.log(`today ${day}`)
    break;
case "tuesday":
        console.log(`today ${day}`)
        break;
case "wednesday":
    console.log(`today ${day}`)
    break;
 case "thursday":
        console.log(`today ${day}`)
        break;
case "friday":
            console.log(`today ${day}`)
            break;
case "saturday":
                console.log(`today ${day}`)
                break;
case "sunday":
                    console.log(`today ${day}`)
                    break;
                    default:
                        console.log("not possible")
                        break;
}

var score = 91

switch(score){
    case 90(score >90 && score<100):
        console.log("A")
        break;
    case 80:
        console.log("A")
        break;
    default:
}