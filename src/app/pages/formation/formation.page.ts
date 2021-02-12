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
import { Formation } from '../../formation';
import { FormationService } from '../../formation.service';
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.page.html',
  styleUrls: ['./formation.page.scss'],
})
export class FormationPage implements OnInit {

  formations :Observable<Formation[]>;
  searchKey = '';
  constructor(
    public navCtrl:NavController,
    public loadingCtrl:LoadingController,
    public popoverCtrl:PopoverController,
    public toastCtrl:ToastController,
    public menuCtrl:MenuController,
    public alertCtrl:AlertController,
    public modalCtrl:ModalController,
    private router:Router,
    private formationService:FormationService
  ) { }

  ngOnInit() {
    this.displaylist();
  }
  displaylist(){
    this.formations = this.formationService.formationlist();
  }

  create() {
    this.router.navigate(['create-formation']);
  }

  update(id:string){
    this.router.navigate(['edit-formation', id]);
  }

  details(id:string){
    this.router.navigate(['details-formation',id]);
  }

  async delete(id: string) {
    this.formationService.delete(id)
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
        message: 'Formatiom supprimée avec succès',
        duration: 2000
    });
    toast.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }
}
