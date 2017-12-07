import { Component } from '@angular/core';

import { ActionSheet, ActionSheetController, ActionSheetOptions, Config, NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as _ from 'underscore';

import { AngularFireDatabase } from 'angularfire2/database';

import { ConferenceData } from '../../providers/conference-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

interface Items {
  description: string;
  itemid: number;
}

// TODO remove
export interface ActionSheetButton {
  text?: string;
  role?: string;
  icon?: string;
  cssClass?: string;
  handler?: () => boolean | void;
};

@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html'
})
export class ProductsListPage {
  actionSheet: ActionSheet;
  speakers: any[] = [];

  itemsCollection: any;
  items: Observable<Items[]>; // read collection

  constructor(
    public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public confData: ConferenceData, private afs: AngularFirestore,
    public config: Config, private angularfire: AngularFireDatabase,
    public inAppBrowser: InAppBrowser
  ) { }

  ionViewWillEnter() {
    this.itemsCollection = this.afs.collection('requests'); //ref()
    this.itemsCollection.valueChanges().subscribe(data=>{
      console.log(data)
    })
  }


  // convert() {
  //   this.itemsCollection = this.afs.collection('requests'); //ref()
  //   this.angularfire.list('/requests/').auditTrail().subscribe((data: any) => {
  //     _.each(data, element => {
  //       this.itemsCollection.doc(element.key).set(element.payload.val())
  //         .then((result) => {
  //         })
  //         .catch((error) => {
  //         });
  //     });

  //   });
  // }
  ionViewDidLoad() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  goToSpeakerDetail(speaker: any) {
    this.navCtrl.push(SpeakerDetailPage, { speakerId: speaker.id });
  }

  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }

  openSpeakerShare(speaker: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
            if ((window as any)['cordova'] && (window as any)['cordova'].plugins.clipboard) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        } as ActionSheetButton,
        {
          text: 'Share via ...'
        } as ActionSheetButton,
        {
          text: 'Cancel',
          role: 'cancel'
        } as ActionSheetButton
      ]
    } as ActionSheetOptions);

    actionSheet.present();
  }

  openContact(speaker: any) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        } as ActionSheetButton,
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        } as ActionSheetButton
      ]
    } as ActionSheetOptions);

    actionSheet.present();
  }
}
