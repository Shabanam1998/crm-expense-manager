import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { ExpenseFormComponent } from './pages/dashboard/expense-form/expense-form.component';
//import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    ExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    //  BrowserModule,
     BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
    // FormsModule,
    MatButtonModule,
      MatInputModule,
     // ChartsModule
     
      
   // BrowserModule,
  //  AppRoutingModule,
   // FormsModule,
    ReactiveFormsModule,
   // NgChartsModule

  ],
  // providers: [
  //   provideAnimationsAsync()
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { ExpenseFormComponent } from './expense-form/expense-form.component';
// import { ExpenseListComponent } from './expense-list/expense-list.component';
// import { ChartsModule } from 'ng2-charts';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     ExpenseFormComponent,
//     ExpenseListComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule,
//     ChartsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}