import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { CongesService } from '../../conges.service';
import { Conges } from '../../conges';

@Component({
  selector: 'app-details-conges',
  templateUrl: './details-conges.page.html',
  styleUrls: ['./details-conges.page.scss'],
})
export class DetailsCongesPage implements OnInit {
  id:string;
  conge:Conges;
  employees:Observable<Employee[]>;

  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private congesService:CongesService,
    private employeeService:EmployeeService
  ) { }

  ngOnInit() {
    this.conge = new Conges();
    this.id = this.route.snapshot.params['id'];
    this.congesService.details(this.id)
          .subscribe(data => {
            console.log(data);
            this.conge = data;
          }, error => console.log(error));
    this.employees = this.employeeService.getemployeelist();
  }

}
