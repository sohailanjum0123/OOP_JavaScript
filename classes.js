class BanckForm{
fill(){
    alert(this.name + "  Form is submitted")
}
cancel(){
    alert(this.name + "  Form is cancelled")
}
form(name){
    return  this.name=name;
}
addition(a,b){
return a+b;
}
}
let manager = new BanckForm()
manager.form("Sohail")
manager.fill();
manager.cancel()
const result  = manager.addition(3,4)
console.warn(result)
console.log(manager)