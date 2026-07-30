import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (value: number): void => {
        if (!this.validateSCompanytatus()) {
            return
        }

        this.balance += value

        console.log(`Empréstimo realizado com sucesso. Seu saldo é ${this.getBalance()}`)
    }

    private validateSCompanytatus = (): boolean => {
        if (!this.getStatus()) {
            console.log('Operação negada: Conta inválida.');
            return false;
        }

        return true
    }
}