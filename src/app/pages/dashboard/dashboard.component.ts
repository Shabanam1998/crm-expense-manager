import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseServiceService } from './expense-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  expenseForm: FormGroup;
  categories = ['Company Properties', 'Deal Properties', 'Contact Properties', 'Ticket Properties'];
  paymentMethods = ['Cash', 'Card', 'UPI'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.expenseForm = this.fb.group({
      date: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]+(\\.[0-9]{1,2})?$")]],
      paymentMethod: ['', Validators.required]
    });
  }

  submit() {
    if (this.expenseForm.valid) {
      const data = this.expenseForm.value;
      const stored = JSON.parse(localStorage.getItem('expenses') || '[]');
      stored.push(data);
      localStorage.setItem('expenses', JSON.stringify(stored));
      this.router.navigate(['/ExpenseForm']);
    }
  }



  //testing code localworking
  // submit() {
  //   if (this.expenseForm.valid) {
  //     this.expenseService.addExpense(this.expenseForm.value);
  //     this.expenseForm.reset();
  //   }
  // }

}
