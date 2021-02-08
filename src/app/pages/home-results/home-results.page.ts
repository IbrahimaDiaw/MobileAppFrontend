import { Component,  OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';
import { FormationService } from '../../formation.service';
import {Formation } from '../../formation';
import {Departement} from '../../departement';
import {DepartementService } from '../../departement.service';
import {Absence} from '../../absence';
import {AbsenceService} from '../../absence.service';
import {Conges} from '../../conges';
import {CongesService} from '../../conges.service';

import { from, Observable } from 'rxjs';
@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage implements OnInit {
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  
  employees:Observable<Employee[]>;
  nbformation:Observable<Formation[]>;
  nbabsence:Observable<Absence[]>;
  nbconge:Observable<Conges[]>;
  nbdepartement:Observable<Departement[]>;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private router:Router,
    private employeeServcice:EmployeeService,
    private congesService:CongesService,
    private formationService:FormationService,
    private departementService:DepartementService,
    private absenceService:AbsenceService
  ) {

  }
  ngOnInit() {
    this.congesService.congeslist().subscribe
    ((data) => {
      this.nbconge = data.length;
      return this.nbconge;
    }, (err) => {
        console.log("not allowed");
    });

    this.employeeServcice.getemployeelist().subscribe
    ((data) => {
      this.employees = data.length;
      return this.employees;
    }, (err) => {
        console.log("not allowed");
    });

    this.formationService.formationlist().subscribe
    ((data) => {
      this.nbformation = data.length;
      return this.nbformation;
    }, (err) => {
        console.log("not allowed");
    });

    this.departementService.getdepartementlist().subscribe
    ((data) => {
      this.nbdepartement = data.length;
      return this.nbdepartement;
    }, (err) => {
        console.log("not allowed");
    });

    this.absenceService.absencelist().subscribe
    ((data) => {
      this.nbabsence = data.length;
      return this.nbabsence;
    }, (err) => {
        console.log("not allowed");
    });

  }
  employes(){
    this.router.navigate(['employee']);
  }
  departements(){
    this.router.navigate(['departement']);
  }
  absences(){
    this.router.navigate(['absence']);
  }
  formations(){
    this.router.navigate(['formation']);
  }
  conges(){
    this.router.navigate(['conges']);
  }
  setting(){
    this.router.navigate(['settings']);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
