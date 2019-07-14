import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../shared/employee-component.model';
import { EmployeeComponentService } from '../shared/employee-component.service';
import { Router } from '@angular/router';
import { TableComponent } from '../table/table.component';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
  providers: [EmployeeComponentService]
})
export class EditComponentComponent implements OnInit {

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

  populateForm(pd:any) {
   this.httpService.Employee.Id = pd.id;
    }

 Edit(){
   
     this.populateForm(TableComponent.Ident);
    this.httpService.putUser();
  }


}
