function dayoftheweek(date) {
    let a = new Date(date)
    // console.log(a.getDay());
    let arr=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    console.log(arr[a.getDay()]);
}
dayoftheweek("2024-08-20")

function diff(date1,date2) {
    let d1 = new Date (date1)
    let d2 = new Date (date2)
    let d1Ms = d1.getTime()
    let d2Ms = d2.getTime()
    let differ =  Math.abs(d2Ms-d1Ms)
    let result = Math.ceil(differ/(1000*60*60*24))
    console.log(result);
}
diff("2024-08-01","2024-08-20")

function add(a2) {
        let sum2 = 0
        for (let i=0 ; i < a2.length ; i++ ){
            sum2 = sum2 + a2[i] 
        }
        return sum2  
    }
    console.log(add([1,2,3,4,5]));

    // Task: Create a BankAccount Class
    // Create a class called BankAccount that models a basic bank account. The class should have the following features:
    // Properties:
    // 1.accountNumber: A unique account number.
    // 2.accountHolderName: The name of the account holder.
    // 3.balance: The current balance of the account (default is 0).
    // Methods:
    // 1.deposit(amount): Adds the specified amount to the balance. If the amount is less than or equal to 0, print an error message.
    // 2.withdraw(amount): Deducts the specified amount from the balance if there are sufficient funds. If the amount is greater than the balance or is less than or equal to 0, print an error message.
    // 3.getBalance(): Returns the current balance.
    // 4.getAccountDetails(): Returns a string with the account holder’s name, account number, and current balance.
    // Bonus:
    // 1.Create multiple instances of the BankAccount class and simulate depositing, withdrawing, and checking the balance.
    // 2.Add a method transferFunds(amount, targetAccount) that transfers a specified amount from the current account to another account (if sufficient balance exists).
    
   class BankAccount{
    constructor(accountNumber,accountHolderName,balance=0){
        this.accountNumber=accountNumber,
        this.accountHolderName=accountHolderName,
        this.balance=balance
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Error: Deposit amount must be greater than 0.");
        } 
        else {
            this.balance += amount;
            console.log("deposited:"+amount+".New Balance:"+this.balance);
            // console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Error: Withdrawal amount must be greater than 0.");
        } else if (amount > this.balance) {
            console.log("Error: Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log("withdrew:"+amount+".New Balance:"+this.balance);
            // console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
        }
    }
    getBalance() {
        return this.balance;
    }
    getAccountDetails() {
        return "Account Holder:"+this.accountHolderName+ ",Account Number:"+this.accountNumber+ ", Balance:"+this.balance;
        // return `Account Holder: ${this.accountHolderName}, Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
    }
    transferFunds(amount, targetAccount) {
        if (amount <= 0) {
            console.log("Error: Transfer amount must be greater than 0.");
        } else if (amount > this.balance) {
            console.log("Error: Insufficient funds.");
        } else {
            this.balance -= amount;
            targetAccount.deposit(amount);
            console.log(`Transferred: ${amount} to Account Number: ${targetAccount.accountNumber}. New Balance: ${this.balance}`);
        }
    }
   }

const account1 = new BankAccount('123', 'riya');
account1.deposit(500);
account1.withdraw(200);
console.log(account1.getAccountDetails());

const account2 = new BankAccount('456', 'Miya');
account2.deposit(700);
account2.withdraw(100);
console.log(account2.getAccountDetails());

account2.transferFunds(100, account1);
console.log(account1.getAccountDetails());
console.log(account2.getAccountDetails());
