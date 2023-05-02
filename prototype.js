
const  users ={
    getName:function(){
        return this.fname +" "+ this.lname
    },
     getAge:function() {
        let age  =  new Date().getFullYear()-this.birth;
        return age;
    }
}
const student ={
    fname:"Sohail",
    lname:"Anjum",
    birth:"1992", 
    // getAge:function() {
    //     let age  =  new Date().getFullYear()-this.birth;
    //     return age;
    // }
    getAge:users.getAge
}
const  teacher ={
    fname:"Atta",
    lname:'ullah',
    birth:1980,
//     getAge:function() {
//         let age  =  new Date().getFullYear()-this.birth;
//         return age;
//     }
getAge:users.getAge
}
// student.__proto__=users
// teacher.__proto__=users
console.log(student)
console.log(teacher)
console.warn(student.getAge())
console.warn(teacher.getAge())