import { Injectable, OnInit } from '@angular/core';
import { EmployeeComponent } from './employee-component.model';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeComponentService {

 Employees: EmployeeComponent[];
 Employee:EmployeeComponent;
  private URL:string="https://localhost:44399/api/";
  


  constructor(private http:HttpClient) { 
     

  }

  
  getUsers(){
    this.http.get(this.URL+"Employees").subscribe((data:EmployeeComponent[]) => this.Employees=data);

  }

  postUser(){
    this.http.post(this.URL+"Employees",this.Employee).subscribe(()=>{
      this.getUsers();
    });
    
  }

putUser(){
  this.http.put(this.URL+"Employees/"+this.Employee.Id,this.Employee).subscribe(()=>{
    this.getUsers();
  });
}

  deleteUser(){
    
    this.http.delete(this.URL+"Employees/"+this.Employee.Id).subscribe(()=>{
      this.getUsers();
    });
  }

}
