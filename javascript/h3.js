//q1. write a conditional state to state if hero is a dc character or marvel
//uperman would be dc, spiderman would be marvel)
// || means and


var hero = "batman"

if (hero === "batman" || hero === "superman" || hero === "robin"){
    console.log(`${hero} is a dc character`)
}else if (hero === "spiderman" || hero === "thor" || hero === "ironman"){
    console.log(`${hero} is a marvel character`)
}else{
    console.log(`sorry i dont recognise ${hero}`)
}

/*write a conditional statement taking age as variable and what year group 
they will be in a school (i.e 11-16 will be secondary school year group, 
16-18 college anyone above optional education)*/


const age = 10

if(typeof age === "string"){
    console.log("error")
}else if age( >=11 && age<16){
console.log("you are in secondary")
}else if(age>=16 && age <=18){
console.log("college")
}else if (age >18 && age<90){
    console.log("optional education")
}else if(age <11 && age>3){
    console.log("primary")
}else{    
    console.log("error2")
}

/*Create a shopping list of 5 items. 
Now make a conditional statement that checks if the list contains 5 items only. if above 5 print out error and if less than 5 print out error. ( would suggest searching greater 
    than and less than operators)*/

    var array = [1,2,3,4,5]

    if (array.length>5 || array.length <5){
        console.log("error")
    }else{
        console.log("list has 5 items")
    }

    /*Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. if above 5 
    print out error and if less than 5 print out error. 
    ( would suggest searching greater than and less than operators)*/

    