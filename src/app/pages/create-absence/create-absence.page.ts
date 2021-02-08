import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { AbsenceService } from '../../absence.service';
import { Absence } from '../../absence';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-absence',
  templateUrl: './create-absence.page.html',
  styleUrls: ['./create-absence.page.scss'],
})
export class CreateAbsencePage implements OnInit {

  employees :Observable<Employee[]>;
  absence:Absence = new Absence();
  constructor(
    private absenceService:AbsenceService,
    private employeeService:EmployeeService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.getEmployeesList();
  }

  getEmployeesList(){
    this.employees = this.employeeService.getemployeelist();
  }

  async onSave(){
    this.absenceService.create(this.absence)
        .subscribe(data =>console.log(data),
          error =>console.log(error));
          this.absence = new Absence();
          
          const loader = await this.loadingCtrl.create({
            duration: 2000
          });
      
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({
              message: 'Données sauvegard avec succès',
              duration: 2000
            });
      
            toast.present();
            this.navCtrl.navigateForward('/absence');
          });
  }

  onSubmit() {
    this.onSave();    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
