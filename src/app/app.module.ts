import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassesComponent} from "./classes/classes.component";
import {HomeComponent} from "./page/home/home.component";
import {CategoryComponent} from "./page/category/category.component";
import {ProductComponent} from "./page/product/product.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";
import {HttpClientModule} from "@angular/common/http";
import {SearchComponent} from "./search/search.component";
import {FormsModule} from "@angular/forms";

//1. khai bao danh sach cac routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'search', component: SearchComponent},
]
@NgModule({
  declarations: [
    AppComponent,StudentComponent,ClassesComponent,HomeComponent,CategoryComponent,ProductComponent,LoginComponent,
    RegisterComponent,SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
