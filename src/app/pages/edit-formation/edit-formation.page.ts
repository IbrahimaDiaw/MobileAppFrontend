import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { FormationService } from '../../formation.service';
import { Formation } from '../../formation';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.page.html',
  styleUrls: ['./edit-formation.page.scss'],
})
export class EditFormationPage implements OnInit {

  id:string;
  formation:Formation;
  employees:Observable<Employee[]>;
  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private formationService:FormationService,
    private employeeService:EmployeeService
  ) { }

  ngOnInit() {
    this.formation = new Formation();
    this.id = this.route.snapshot.params['id'];
    this.formationService.details(this.id)
          .subscribe(data => {
            console.log(data);
            this.formation = data;
          }, error => console.log(error));
    this.employees = this.employeeService.getemployeelist();
  }

  async update(){
    this.formationService.update(this.id,this.formation)
        .subscribe(data => console.log(data), error => console.log(error));
        this.formation = new Formation();
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
          this.navCtrl.navigateForward('/formation');
        });
  }

  onSubmit(){
    this.update();
  }

}
