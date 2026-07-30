import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'John', 10)
peopleAccount.deposit(5)
peopleAccount.withdraw(5)