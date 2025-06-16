import { Component } from '@angular/core';
import { Expense, ExpenseServiceService } from '../expense-service.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {
//  expenses: any[] = [];
//   total = 0;

//   ngOnInit() {
//     this.loadExpenses();
//      //   this.expenseService.expenses$.subscribe(data => {
//   //     this.expenses = data;
//   //   });
//   }

//   loadExpenses() {
//     this.expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
//     this.calculateTotal();
//   }

//   delete(index: number) {
//     this.expenses.splice(index, 1);
//     localStorage.setItem('expenses', JSON.stringify(this.expenses));
//     this.calculateTotal();
//   }

//   calculateTotal() {
//     this.total = this.expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
//   }

//   // deleteExpense(index: number) {
//   //   this.expenseService.deleteExpense(index);
//   // }


// expenses: any[] = [];
//   total = 0;
//   editingIndex: number | null = null;
//   editedExpense: any = {};

//   ngOnInit() {
//     this.loadExpenses();
//   }

//   loadExpenses() {
//     this.expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
//     this.calculateTotal();
//   }

//   delete(index: number) {
//     this.expenses.splice(index, 1);
//     this.saveExpenses();
//   }

//   edit(index: number) {
//     this.editingIndex = index;
//     this.editedExpense = { ...this.expenses[index] }; // clone the expense
//   }

//   saveEdit(index: number) {
//     this.expenses[index] = { ...this.editedExpense };
//     this.editingIndex = null;
//     this.editedExpense = {};
//     this.saveExpenses();
//   }

//   cancelEdit() {
//     this.editingIndex = null;
//     this.editedExpense = {};
//   }

//   saveExpenses() {
//     localStorage.setItem('expenses', JSON.stringify(this.expenses));
//     this.calculateTotal();
//   }

//   calculateTotal() {
//     this.total = this.expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
//   }
  expenses: any[] = [];
  total = 0;
  editingIndex: number | null = null;
  editedExpense: any = {};

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    this.calculateTotal();
  }

  delete(index: number) {
    this.expenses.splice(index, 1);
    this.saveExpenses();
  }

  edit(index: number) {
    this.editingIndex = index;
    this.editedExpense = { ...this.expenses[index] };
  }

  saveEdit(index: number) {
    this.expenses[index] = { ...this.editedExpense };
    this.editingIndex = null;
    this.editedExpense = {};
    this.saveExpenses();
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editedExpense = {};
  }

  saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
  }

}
