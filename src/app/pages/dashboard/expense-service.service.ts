
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Expense {
  date: string;
  category: string;
  description: string;
  amount: number;
  paymentMethod: string;
}

@Injectable({ providedIn: 'root' })
export class ExpenseServiceService {
  private expenses: Expense[] = JSON.parse(localStorage.getItem('expenses') || '[]');
  private expensesSubject = new BehaviorSubject<Expense[]>(this.expenses);

  expenses$ = this.expensesSubject.asObservable();

  addExpense(expense: Expense) {
    this.expenses.push(expense);
    this.updateExpenses();
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
    this.updateExpenses();
  }

  private updateExpenses() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
    this.expensesSubject.next([...this.expenses]);
  }

  getExpenses() {
    return [...this.expenses];
  }
}
