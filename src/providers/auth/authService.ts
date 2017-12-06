import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Constants } from '../constant';
import { AlertProvider } from '../alert';

@Injectable()
export class AuthServiceProvider {

  constructor(private storage: Storage, public alertProvider: AlertProvider) { }

  login(data): void {
    localStorage.setItem('access_token', data.access_token);
    this.storage.set('data', data);
  }

  logout(){
    return new Promise(resolve=>{
      localStorage.clear();
      this.storage.clear();
      resolve(true);
    })
  }

  serverDown(): void {
    this.alertProvider.showToast(Constants.errorMessages.serverDown);
  }

  authenticated() {
    return new Promise(resolve => {
      this.storage.get('data').then(token => {
        if (token == null) {
          resolve(false);
        }
        else {
          resolve(true);
        }
      });
    });
  }
}