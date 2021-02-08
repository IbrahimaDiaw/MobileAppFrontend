import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { AbsenceService } from '../../absence.service';
import { Absence } from '../../absence';

@Component({
  selector: 'app-edit-absence',
  templateUrl: './edit-absence.page.html',
  styleUrls: ['./edit-absence.page.scss'],
})
export class EditAbsencePage implements OnInit {

  id:string;
  absence:Absence;
  employees:Observable<Employee[]>;
  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private absenceService:AbsenceService,
    private employeeService:EmployeeService
  ) { }

  ngOnInit() {
    this.absence = new Absence();
    this.id = this.route.snapshot.params['id'];
    this.absenceService.details(this.id)
          .subscribe(data => {
            console.log(data);
            this.absence = data;
          }, error => console.log(error));
    this.employees = this.employeeService.getemployeelist();
  }

  async update(){
    this.absenceService.update(this.id,this.absence)
        .subscribe(data => console.log(data), error => console.log(error));
        this.absence = new Absence();
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
          this.navCtrl.navigateForward('/absence');
        });
  }

  onSubmit(){
    this.update();
  }


}
