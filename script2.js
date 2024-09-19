
const email = document.getElementById("email")
const password = document.getElementById("password")
const username = document.getElementById("username")
function credential() {


console.log(email.value)
console.log(password.value)
console.log(username.value)
    
}


// varaible- variables are containers that are meant to contain values. these values are stored in the variable so that we can call them for use later in the future. this is the essential purpose of variables in programming. if we must store something, or such as information, in the computer memory, then we must first of all declare them as variables within the script. to dleare variables in javascript, we often prefix this three special key words ie  const, var,let. these coresponding key words comes before the name of the variable

var name = 'i love programming'

console.log(name)

const number = 4

console.log(number)

const is_girl = false

const num = undefined

let score = null

// all of these data type abhove such as string , boolen , number, undefined and null falls under what is call primiptive data type. primitive data type can only store one value. this actegory of data type are only limited to store a single value. 


// however , what if we need to store an oblect in meomry, that requires attributes such as the name of the object, the address of the object, colour, size and weight etc, data type such as primirive data type can be next to impossible to have stored this kind of requirement and this is where Reference data type comes in


// refernece datatype are data type that allows us to store multiple values eg object, array, function e.g.

const info = {

    surname:"ajie",
    age: 20,
    address:{
        city: "port harcourt",
        state:"rivers state"
    }
}

console.log(info)
console.log(info.surname)
console.log(info.address.city)


const people = ['george',"Juice WRLD", "Pop Smoke", "Chukumela"]
console.log(people[0])
console.log(people[1])
console.log(people[2])
console.log(people[3])

const people_info = [
    {
        nickname: "josiah",
        active : false,
        address:{
            city: "port harcourt",
            state:"rivers state"
        }


},

{
    nickname: "chuks",
    active : true,
    address:{
        city: "benin",
        state:"cross river"
    }


},



]


console.log(people_info)


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }









 


