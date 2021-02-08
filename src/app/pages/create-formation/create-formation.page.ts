import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { FormationService } from '../../formation.service';
import { Formation } from '../../formation';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.page.html',
  styleUrls: ['./create-formation.page.scss'],
})
export class CreateFormationPage implements OnInit {
  employees:Observable<Employee[]>;
  formation:Formation = new Formation();

  constructor(
    private formationService:FormationService,
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
    this.formationService.create(this.formation)
        .subscribe(data =>console.log(data),
          error =>console.log(error));
          this.formation = new Formation();
          
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
            this.navCtrl.navigateForward('/formation');
          });
  }

  onSubmit() {
    this.onSave();    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
