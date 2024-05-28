// Lab 308.4


//[]= list 
//number = num 
//string = text
//objects = thing with details and spisfic 

//function= reusable code that is used to solve a problem for something that needs to be done mulitple time


//Booleans - are true /false statements ( can be used in if/else statements)
//for loops= runs until the boolean returns false , will run as long as the condition is true ( the boolean is the condition)

//if/else statements= use when you wanna check something
//undefined = no value /false 
//null is a place holder for something 
//logical operators  (< , > less or more than )
// (|| or  ) ( && and ) ( == true ) ( ==== all conditions must be true )

// Array


 const csv ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


const feelingLoopy = (str) => {
    const person = str.split('\n')
    for( let i = 0; i < person.length; i++){
        console.log(person[i])
    }
        return person 
}

console.log(feelingLoopy(csv))

//part2
const idArr = feelingLoopy(csv)

function list (arr){
    let newArr = []

    for (let i=0; i <= arr.length -1; i++){
        newArr.push (arr[i].split(","))
    }
    return newArr 
}
console.log(list(idArr))



//part3
const listTwo=list(idArr)

function transform ( arr ){
    let newArr = []
    for (let i=1; i <= arr.length -1; i++ ){
        //console.log(arr[i])
        let obj = {}
        let subArr = arr[i].length -1;
        for (let j=0; j<= subArr; j++){
            const key = arr[0][j].toLowerCase()
            const value = arr[i][j]
            obj[key ]= value

        }
        newArr.push(obj)
    }
      return newArr
        
}
console.log(transform(listTwo))



//part 4 


const listThree = transform(listTwo)
listThree.pop()
const barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
listThree.splice( 1,0, barry)
console.log(listThree)
listThree.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(listThree)

function calAve(arr){
    let sum = 0
    for (let i=0; i<= arr.length -1 ;i++){
        let obj = arr[i]
         sum+=parseInt(obj.age)
         console.log(sum)
    }
let avg = sum/arr.length
return avg

}
console.log(calAve(listThree))
///                                                                                                                                                                                                                                                                                     



//part5

function turnBack ( arr){
    let newArr =[]

newArr.push(Object.keys(arr[0]))
console.log(newArr)
for (let i = 0;i <= arr.length -1;i++){
    let obj=arr[i]
    newArr.push(Object.values(obj))

}
const turnBackArr = newArr.flat()
return turnBackArr.join(",")


}
console.log(turnBack(listThree))



