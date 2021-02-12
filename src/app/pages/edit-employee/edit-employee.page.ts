import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { DepartementService } from '../../departement.service';
import { Departement } from '../../departement';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {
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

  async update(){
    this.employeeService.edit(this.id,this.employee)
        .subscribe(data => console.log(data), error => console.log(error));
        this.employee = new Employee();
        const loader = await this.loadingCtrl.create({
          duration: 2000
        });
    
        loader.present();
        loader.onWillDismiss().then(async l => {
          const toast = await this.toastCtrl.create({
            message: 'Modification éffectuée avec succès',
            duration: 2000
          });
    
          toast.present();
          this.navCtrl.navigateForward('/employee');
        });
  }
  setDepartement($event) {
    let me=this;
   console.log('Default language:', $event.target.value);
  }

  onSubmit(){
    this.update();
  }

}
