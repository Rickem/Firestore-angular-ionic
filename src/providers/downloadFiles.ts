import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';

import { AlertProvider } from './alert';
import { PlatformService } from './platformService';
import { Constants } from './constant';

declare var cordova;

@Injectable()
export class DownloadFilesProvider {

  private isImage: boolean = false;
  private storageDirectory: string = '';

  constructor(private transfer: Transfer, private alertProvider: AlertProvider, private platformService: PlatformService,
    public platform: Platform) { }


  downloadAttachment(fileUrl, fileName) {
    this.isImage = false;
    this.platform.ready().then(() => {
      if (!this.platformService.CheckCordovaPlatform(this.platform)) {
        return false;
      }
      if (fileName.toLowerCase().indexOf("jpeg") > -1 || fileName.toLowerCase().indexOf("jpg") > -1 || fileName.toLowerCase().indexOf("png") > -1) {
        this.isImage = true;
      }
      this.storageDirectory = this.platformService.GetStorageDirectory(this.platform, this.isImage);
      if (this.platform.is('ios')) {
        this.download(fileUrl, fileName);
      }
      else {
        this.platformService.CheckStoragePermission().then(() => {
          this.download(fileUrl, fileName);
        })
      }
    });
  }

  download(url: string, fileName: string) {
    const fileTransfer: TransferObject = this.transfer.create();
    this.alertProvider.showLoader("");
    fileTransfer.download(url, this.storageDirectory + fileName).then((entry) => {
      this.alertProvider.hideLoader();
      if (this.isImage) {
        cordova.plugins.imagesaver.saveImageToGallery(this.storageDirectory + fileName, () => {
          this.alertProvider.showToast(Constants.successMessages.downloadSuccess);
        }, () => {
          this.alertProvider.showToast(Constants.errorMessages.downloadFailed);
        });
      }
      else {
        this.alertProvider.showToast(Constants.errorMessages.downloadFailed);
      }
    }, (error) => {
      this.alertProvider.hideLoader();
      this.alertProvider.showToast(Constants.errorMessages.downloadFailed);
    });
  }
}
