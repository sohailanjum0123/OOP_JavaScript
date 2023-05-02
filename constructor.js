
function BanckAcc(name="Enter Name",age  =  100 ,balance =1000){
    
    this.name=name;
    this.age=age;
    this.balance=balance
    console.warn("constructor called...")
    this.AccountNum=Date.now();

    this.Deposit = function(amount){
        this.balance+=amount;
    }
    this.withdraw = function(amount){
        this.balance-=amount;
    }
}

// const ahmad = new BanckAcc()
// console.log(ahmad)
// const ali = new BanckAcc("Ali",25);
// ali.Deposit(3000)
// console.log(ali)
// const Sumaira = new BanckAcc("Sumaira",34,10000);
// Sumaira.withdraw(6000);
// console.log(Sumaira)



//Constructor with submission Form
const Accounts=[];
const accountForm  = document.querySelector("#BanckAcc");
const user =  document.querySelector("#userName");
const accountNumber  = document.querySelector("#accountNumber");

accountForm.addEventListener('submit', (e)=>{

    e.preventDefault();

    const accountDetais = new BanckAcc(user.value  , accountNumber.value);
    Accounts.push(accountDetais)
    console.log(Accounts)
})

const depositDetail = document.querySelector("#Deposit");
const accountDetais = document.querySelector('#accountDetail');
const depositAmount = document.querySelector("#DepositAmount");

depositDetail.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(accountDetais.value, depositAmount.value);
})
