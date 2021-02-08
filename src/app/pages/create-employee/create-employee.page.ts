import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { DepartementService } from '../../departement.service';
import { Departement } from '../../departement';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  employee:Employee = new Employee();
  departements:Observable<Departement[]>;

  public onCreateForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private employeeService:EmployeeService,
    public alertController: AlertController,
    private departementService:DepartementService
  ) { }

  ngOnInit() {
    this.onCreateForm = this.formBuilder.group({
      'nom': [null, Validators.compose([
        Validators.required
      ])],
      'prenom': [null, Validators.compose([
        Validators.required
      ])],
      'fonction': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'adresse': [null, Validators.compose([
        Validators.required
      ])],
      'tel': [null, Validators.compose([
        Validators.required
      ])],
      'salaire': [null, Validators.compose([
        Validators.required
      ])],
      'departement': [null, Validators.compose([
        Validators.required
      ])],
      
    });

    this.getDepartement();
  }

  async onSave(){
    this.employeeService.create(this.employee)
        .subscribe(data =>console.log(data),
          error =>console.log(error));
          this.employee = new Employee();
          
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
            this.navCtrl.navigateForward('/employee');
          });
  }
  getDepartement(){
    this.departements = this.departementService.getdepartementlist();
  }

  setDepartement($event) {
    let me=this;
   console.log('Default language:', $event.target.value);
  }
  onSubmit() {
    this.onSave();    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
