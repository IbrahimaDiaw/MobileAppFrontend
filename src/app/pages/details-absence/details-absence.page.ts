import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { AbsenceService } from '../../absence.service';
import { Absence } from '../../absence';
@Component({
  selector: 'app-details-absence',
  templateUrl: './details-absence.page.html',
  styleUrls: ['./details-absence.page.scss'],
})
export class DetailsAbsencePage implements OnInit {

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

}
