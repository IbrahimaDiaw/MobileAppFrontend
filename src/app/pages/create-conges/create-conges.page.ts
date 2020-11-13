import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { CongesService } from '../../conges.service';
import { Conges } from '../../conges';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-conges',
  templateUrl: './create-conges.page.html',
  styleUrls: ['./create-conges.page.scss'],
})
export class CreateCongesPage implements OnInit {
  employees:Observable<Employee[]>;
  conge:Conges = new Conges();

  constructor(
    private congesService:CongesService,
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
    this.congesService.create(this.conge)
        .subscribe(data =>console.log(data),
          error =>console.log(error));
          this.conge = new Conges();
          
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
            this.navCtrl.navigateForward('/conges');
          });
  }

  onSubmit() {
    this.onSave();    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
