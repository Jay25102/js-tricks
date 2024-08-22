function createAccount(pin, amount = 0) {

    function checkBalance(enteredPin) {
        if (enteredPin === pin) {
            return `$${amount}`;
        }
        return "Invalid PIN.";
    }

    function deposit(enteredPin, depositAmount) {
        if (enteredPin === pin) {
            amount += depositAmount;
            return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`
        }
        return "Invalid PIN.";
    }

    function withdraw(enteredPin, withdrawAmount) {
        if (enteredPin === pin) {
            if (withdrawAmount <= amount) {
                amount -= withdrawAmount;
                return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`
            }
            else {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
        }
        return "Invalid PIN.";
    }

    function changePin(oldPin, newPin) {
        if (oldPin === pin) {
            pin = newPin;
            return "PIN successfully changed!";
        }
        return "Invalid PIN.";
    }

    return {checkBalance, deposit, withdraw, changePin};
}

module.exports = { createAccount };
