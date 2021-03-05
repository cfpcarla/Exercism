//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
  }
  
  open() {
    if(this._open) {
      throw new ValueError();
    }
    this._open = true;
    this._balance = 0;
  }

  close() {
    if(!this._open) {
      throw new ValueError();
    }
    this._open = false;
  }

  deposit(value) {
    if(!this._open || value < 0) {
      throw new ValueError();
    }
    this._balance += value;
  }

  withdraw(value) {
    if(!this._open || value > this._balance || value < 0) {
      throw new ValueError();
    }
    this._balance -= value;
  }

  get balance() {
    if(!this._open) {
      throw new ValueError();
    }
    return this._balance;
  }

  set balance(balance) {
    this._balance = balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
