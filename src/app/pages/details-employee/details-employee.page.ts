import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { DepartementService } from '../../departement.service';
import { Departement } from '../../departement';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.page.html',
  styleUrls: ['./details-employee.page.scss'],
})
export class DetailsEmployeePage implements OnInit {
  id:string;
  employee:Employee;
  departements:Observable<Departement[]>;
  constructor(
    private employeeService:EmployeeService,
    private departementService : DepartementService,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    
  ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.get(this.id)
          .subscribe(data => {
            console.log(data);
            this.employee = data;
          }, error => console.log(error));
    this.departements = this.departementService.getdepartementlist();
  }

}
