import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (value: number): void => {
        if (!this.validateCompanyStatus()) {
            return
        }

        this.setBalance(this.getBalance() + value)

        console.log(`Empréstimo realizado com sucesso. Seu saldo é ${this.getBalance()}`)
    }

    private validateCompanyStatus = (): boolean => {
        if (!this.getStatus()) {
            console.log('Operação negada: Conta inválida.');
            return false;
        }

        return true
    }
}