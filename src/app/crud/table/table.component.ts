import { Component, OnInit ,OnChanges} from '@angular/core';
import { EmployeeComponent } from '../shared/employee-component.model';
import { EmployeeComponentService } from '../shared/employee-component.service';


import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [EmployeeComponentService]
})
export class TableComponent implements OnInit {
  emp:EmployeeComponent[];
   Emp:EmployeeComponent=new EmployeeComponent();
  static Ident:EmployeeComponent; 
constructor(private httpService: EmployeeComponentService,private router:Router){

  }
  goHome(){
         
    this.router.navigate(['api/Employees/add']);
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

  Delete(pd:any){
    if(confirm("Delete Employee ?"))
    {
      this.populateForm(pd);
      this.httpService.deleteUser();
    }
  }

  ReEdit(pd:any){
    TableComponent.Ident=pd;
    this.router.navigate(['api/Employees/edit']);
  }
}
