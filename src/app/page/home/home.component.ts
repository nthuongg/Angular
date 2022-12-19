import {Component} from "@angular/core";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  className: string = 'T2210M';
  numberOfStudents: number = 2;
  textColor = 'text-primary';
  categories: string[] = [
    'Fashion', 'Watch', 'Shoes', 'Diamond'
  ];
  product : any = {
    name: 'Ipone 14 pro max',
    price: 29000000
  };
  products: any = [
    {
      id:1,
      name: 'Ipone 14 pro max',
      price: 29000000,
      qty: 10
    },
    {
      id:2,
      name: 'Ipone 13 pro max',
      price: 25000000,
      qty: 0
    },
    {
      id:3,
      name: 'Ipone 12 pro max',
      price: 21000000,
      qty: 5
    }
  ]
  addStudent(){
    this.numberOfStudents++;
    this.textColor = 'text-primary';
  }
  removeStudent(){
    if (this.numberOfStudents>0)
      this.numberOfStudents--;
    if(this.numberOfStudents == 0)
      this.textColor = 'text-danger';
  }
}
