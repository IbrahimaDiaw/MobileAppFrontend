import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  LoadingController,
  ModalController } from '@ionic/angular';
import { ImagePage } from '../../pages/modal/image/image.page';
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { DepartementService} from '../../departement.service';
import { Departement } from '../../departement';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';



@Component({
  selector: 'app-departement',
  templateUrl: './departement.page.html',
  styleUrls: ['./departement.page.scss'],
})
export class DepartementPage implements OnInit {

  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  departements:Observable<Departement[]>;
  searchKey = '';
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private departementService:DepartementService, 
    private router:Router,
    public loadingCtrl: LoadingController,
    public alertController: AlertController

  ) {

  }

  ngOnInit() {
    this.listDepartement();
  }


  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }
  listDepartement(){
    this.departements = this.departementService.getdepartementlist();
  }

  create(){
    this.router.navigate(['create-departement']);
  }

  async delete(id: string) {
    this.departementService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.listDepartement();
        },
        error => console.log(error));
        const alert = await this.alertController.create({
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
        message: 'Departement supprimé avec succès',
        duration: 2000
    });
    toast.present();
}
  edit(id:string){
    this.router.navigate(['edit-departement',id]);
  }
  
}
