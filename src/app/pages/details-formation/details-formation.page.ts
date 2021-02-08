import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { FormationService } from '../../formation.service';
import { Formation } from '../../formation';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.page.html',
  styleUrls: ['./details-formation.page.scss'],
})
export class DetailsFormationPage implements OnInit {

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

}
