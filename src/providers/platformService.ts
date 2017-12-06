import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { File } from '@ionic-native/file';

@Injectable()
export class PlatformService {

  constructor(private file: File, public platform: Platform, private diagnostic: Diagnostic) {}
  
  CheckCordovaPlatform(platForm: Platform) {
    if (!platForm.is('cordova')) {
      return false;
    }
    return true;
  }
  
  GetStorageDirectory(platForm: Platform, IsImage: boolean) {
    if (platForm.is('ios')) {
      if (IsImage) {
        return this.file.dataDirectory;
      } else {
        return this.file.syncedDataDirectory;
      }
    }
    else if (platForm.is('android')) {
      return "file:///storage/emulated/0/download/";
    }
    else {
      // exit otherwise, but you could add further types here e.g. Windows
      return "";
    }
  }

  CheckStoragePermission() {
    return this.diagnostic.requestExternalStorageAuthorization();
  }
}
