import { DioAccount } from "./DioAccount"

export class SavingsAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        const finalValue = value + 10

        this.setBalance(this.getBalance() + finalValue)

        console.log(`Depósito na poupança realizado de ${value} + 10 de bônus. Saldo atual: ${this.getBalance()}`)
    }
}