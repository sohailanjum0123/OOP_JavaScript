class BanckForm{
fill(){
    alert(this.name + "  Form is submitted"+ this.formNumber)
}
cancel(){
    alert(this.name + "  Form is cancelled"+ this.formNumber)
}
form(name,formNumber){
     this.name=name;
     this.formNumber=formNumber
}
addition(a,b){
    this.a=a;
    this.b=b;
 let result =a + b;
 return  result;
}
}
let manager = new BanckForm()
manager.form("Sohail", 12343)
manager.fill();
manager.cancel()
const result  = manager.addition(3,4)
console.warn(result)
console.log(manager)