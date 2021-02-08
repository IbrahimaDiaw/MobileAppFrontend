import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  LoadingController,
  ModalController } from '@ionic/angular';
import { Employee } from '../../employee';
import {EmployeeService} from '../../employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  employes:Observable<Employee[]>;

  constructor(
    private employeeService:EmployeeService,
    public navCtrl:NavController,
    public loadingCtrl:LoadingController,
    public popoverCtrl:PopoverController,
    public toastCtrl:ToastController,
    public menuCtrl:MenuController,
    public alertCtrl:AlertController,
    public modalCtrl:ModalController,
    private router:Router

  ) { }

  ngOnInit() {
    this.employeelist();
  }
  
  employeelist(){
    this.employes = this.employeeService.getemployeelist();
  }

  create(){
    this.router.navigate(['create-employee']);
  }

  async delete(id: string) {
    this.employeeService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.employeelist();
        },
        error => console.log(error));
        const alert = await this.alertCtrl.create({
          header: 'Supprimer!',
          message: 'Voullez vous vraiment supprimer?',
          buttons: [
              {
                  text: 'Annuler',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                  }
              }, {
                  text: 'Supprimer',
                  handler: () => {
                      this.deleteMessage();
                  }
              }
          ]
      });

      await alert.present();
        
  }
  async deleteMessage() {
    const toast = await this.toastCtrl.create({
        message: 'Employé supprimé avec succès',
        duration: 2000
    });
    toast.present();
}
  edit(id:string){
    this.router.navigate(['edit-employee',id]);
  }

  details(id:string){
    this.router.navigate(['details-employee',id]);
  }



}
