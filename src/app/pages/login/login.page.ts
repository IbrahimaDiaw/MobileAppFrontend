import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  user = { email:'', password:'' };
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }
  
  async login (){
    if(this.user.email == "ibrahima.diaw@univ-thies.sn" && this.user.password == "diaw"){
      const loader = await this.loadingCtrl.create({
        duration: 2000
      });

      loader.present();
      loader.onWillDismiss().then(async l => {
        const toast = await this.toastCtrl.create({
          showCloseButton: false,
          message: 'Connexion réussie!!',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
        this.navCtrl.navigateRoot('/home-results');
    });
      
    }else{
      
      const loader = await this.loadingCtrl.create({
        duration: 2000
      });

      loader.present();
      loader.onWillDismiss().then(async l => {
        const toast = await this.toastCtrl.create({
          showCloseButton: false,
          message: 'Email ou mot de passe incorrect',
          duration: 3000,
          position: 'bottom'
        });

        toast.present();
    });
  }

  }
  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  async goToHome() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    this.navCtrl.navigateRoot('/home-results');
  }

}
