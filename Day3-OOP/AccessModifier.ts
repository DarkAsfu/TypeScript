{
    // Access Modifier
    class BankAccount{
        public readonly id: number;
        public name: string;
        private _balance: number; //protected use korbo jkn tar children er moddhe o ai property ta lagbe

        constructor(id: number, name: string, balance: number){
            this.id = id
            this.name = name;
            this._balance = balance
        }
        addDeposite(numberOfAmount: number){
            return this._balance += numberOfAmount;
        }
        getBalance(){
            return `${this.name} your balance is ${this._balance}`
        }
    }
    // class StudentAccount extends BankAccount{
    //     test() {
    //         this._balance
    //     }
    // }
    const poorManAccount = new BankAccount(51, 'Mr. E', 250);
    poorManAccount.addDeposite(52);
    console.log(poorManAccount.getBalance());

}