
import { Component, OnInit,OnChanges } from '@angular/core';
import { EmployeeComponent } from '../shared/employee-component.model';
import { EmployeeComponentService } from '../shared/employee-component.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css'] , 
   providers: [EmployeeComponentService]
  })

export class AddComponentComponent implements OnInit {

    emp:EmployeeComponent[];
    Emp:EmployeeComponent=new EmployeeComponent();
     
  constructor(private httpService: EmployeeComponentService,private router:Router){
  
  
    }

    Back(){
      this.router.navigate(['api/Employees']);
    }
    ngOnInit(){
     
       this.httpService.getUsers();
       this.httpService.Employee=
       {
         Id:0,
         Name:"",
         Surname:"",
         Position:"",
         Status:"",
         PhotoPath:"",
         Patronymic:""
       }
    }
  
    Add(){
    
      this.httpService.postUser();
    }
  

  }