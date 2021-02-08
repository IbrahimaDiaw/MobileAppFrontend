import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../departement.service';
import { Departement } from '../../departement';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.page.html',
  styleUrls: ['./edit-departement.page.scss'],
})
export class EditDepartementPage implements OnInit {

  id:string;
  departement : Departement;

  constructor(
      private departementService: DepartementService, 
      private route: ActivatedRoute,
      public navCtrl: NavController,
      public menuCtrl: MenuController,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController) 
      { }

  ngOnInit() {
    this.departement = new Departement();
    this.id = this.route.snapshot.params['id'];
    this.departementService.get(this.id)
          .subscribe(data => {
            console.log(data);
            this.departement = data;
          }, error => console.log(error));
  }

  async update(){
    this.departementService.edit(this.id,this.departement)
        .subscribe(data => console.log(data), error => console.log(error));
        this.departement = new Departement();
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
          this.navCtrl.navigateForward('/departement');
        });
  }

  onSubmit(){
    this.update();
  }

}
