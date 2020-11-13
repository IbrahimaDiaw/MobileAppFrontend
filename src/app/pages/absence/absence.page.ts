import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  LoadingController,
  ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Absence } from '../../absence';
import { AbsenceService } from '../../absence.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.page.html',
  styleUrls: ['./absence.page.scss'],
})
export class AbsencePage implements OnInit {

  absences:Observable<Absence[]>;
  constructor(
    public navCtrl:NavController,
    public loadingCtrl:LoadingController,
    public popoverCtrl:PopoverController,
    public toastCtrl:ToastController,
    public menuCtrl:MenuController,
    public alertCtrl:AlertController,
    public modalCtrl:ModalController,
    private router:Router,
    private absenceService: AbsenceService
  ) { }

  ngOnInit() {
  } 

  displaylist(){
    this.absences = this.absenceService.absencelist();
  }

  create(){
    this.router.navigate(['create-absence']);
  }

  update(id:string){
    this.router.navigate(['edit-absence', id]);
  }

  details(id:string){
    this.router.navigate(['details-absence', id]);
  }

  async delete(id: string) {
    this.absenceService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.displaylist();
        },
        error => console.log(error));
        const alert = await this.alertCtrl.create({
          header: 'Supprimer!',
          message: 'Voulez-vous vraiment supprimer?',
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
        message: 'Absence supprimée avec succès',
        duration: 2000
    });
    toast.present();
  }

}
