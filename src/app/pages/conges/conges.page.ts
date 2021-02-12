import { Component, OnInit } from '@angular/core';
import { Conges } from '../../conges';
import { CongesService } from '../../conges.service';
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
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';

@Component({
  selector: 'app-conges',
  templateUrl: './conges.page.html',
  styleUrls: ['./conges.page.scss'],
})
export class CongesPage implements OnInit {

  conges:Observable<Conges[]>;
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
    private congeService:CongesService
  ) { }

  ngOnInit() {
    this.displaylist();
  }

  displaylist(){
    this.conges = this.congeService.congeslist();
  }

  create(){
    this.router.navigate(['create-conges']);
  }

  edit(id:string){
    this.router.navigate(['edit-conges',id]);
  }

  details(id:string){
    this.router.navigate(['details-conges',id]);
  }

  async delete(id: string) {
    this.congeService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.displaylist();
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
        message: 'Congés supprimé avec succès',
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
