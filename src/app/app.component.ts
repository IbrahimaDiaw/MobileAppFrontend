import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'About',
        url: '/about',
        direct: 'forward',
        icon: 'information-circle-outline'
      },


      {
        title: 'Département',
        url: '/departement',
        direct: 'forward',
        icon: 'book'
      },
      {
        title: 'Employés',
        url: '/employee',
        direct: 'forward',
        icon: 'contacts'
      },
      {
        title: 'Formation',
        url: '/formation',
        direct: 'forward',
        icon: 'school'
      },

      {
        title: 'Congés',
        url: '/conges',
        direct: 'forward',
        icon: 'pin'
      },

      {
        title: 'Absence',
        url: '/absence',
        direct: 'forward',
        icon: 'people'
      },

      {
        title: 'Configuration',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      },
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
