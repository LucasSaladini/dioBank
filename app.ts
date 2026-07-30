import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'

console.log('--- TESTANDO PEOPLE ACCOUNT ---')
const peopleAccount: PeopleAccount = new PeopleAccount(123456789, 'Nathalia', 1)
console.log(`Titular: ${peopleAccount.getName()}`)
console.log(`Documento: ${peopleAccount.getDocId()}`)
peopleAccount.deposit(500)
peopleAccount.withdraw(200)
console.log(`Saldo final: ${peopleAccount.getBalance()}\n`)

console.log('--- TESTANDO COMPANY ACCOUNT ---')
const companyAccount: CompanyAccount = new CompanyAccount('DIO Corp', 2)
console.log(`Titular: ${companyAccount.getName()}`)
companyAccount.deposit(1000)
companyAccount.getLoan(5000)
console.log(`Saldo final: ${companyAccount.getBalance()}\n`)

console.log('--- TESTANDO SAVINGS ACCOUNT ---')
const savingsAccount: SavingsAccount = new SavingsAccount('João Poupança', 3)
console.log(`Titular: ${savingsAccount.getName()}`)
// Deve depositar o valor + 10 de bônus (100 + 10 = 110)
savingsAccount.deposit(100)
console.log(`Saldo final: ${savingsAccount.getBalance()}`)