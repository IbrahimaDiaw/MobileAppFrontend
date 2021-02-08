import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Departement } from '../../departement';
import { DepartementService } from '../../departement.service' ;
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.page.html',
  styleUrls: ['./create-departement.page.scss'],
})
export class CreateDepartementPage implements OnInit {

  public onCreateForm: FormGroup;
  departement:Departement = new Departement();

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private departementService:DepartementService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.onCreateForm = this.formBuilder.group({
      'nom': [null, Validators.compose([
        Validators.required
      ])],
      
    });
  }


  async onSave(){
    this.departementService.create(this.departement)
        .subscribe(data =>console.log(data),
          error =>console.log(error));
          this.departement = new Departement();
          
          const loader = await this.loadingCtrl.create({
            duration: 2000
          });
      
          loader.present();
          loader.onWillDismiss().then(async l => {
            const toast = await this.toastCtrl.create({
              message: 'Données sauvegard avec succès',
              duration: 2000
            });
      
            toast.present();
            this.navCtrl.navigateForward('/departement');
          });
  }


  onSubmit() {
    this.onSave();    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
