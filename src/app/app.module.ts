import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Screenshot } from '@ionic-native/screenshot';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import * as firebase from 'firebase';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CalendarModule } from "ion2-calendar";

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { ProductsListPage } from '../pages/products-list/products-list';
import { MultiDateCalendarPage } from '../pages/multiDateCalendar/multiDateCalendar';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { PlatformService } from '../providers/platformService';
import { AlertProvider } from '../providers/alert';
import { DownloadFilesProvider } from '../providers/downloadFiles';
import { AuthServiceProvider } from '../providers/auth/authService';


import { OmangIdPipe } from '../pipes/textFormat';
import { SearchPipe, TagSearchPipe } from '../pipes/search';
import { DateComparePipe } from '../pipes/date';
import { OrderByPipe } from '../pipes/sort';

export const AllPipes = [
  OmangIdPipe, SearchPipe, DateComparePipe, TagSearchPipe, OrderByPipe
];

export const AllService = [
  PlatformService, AlertProvider, DownloadFilesProvider, AuthServiceProvider
];

export const AllPages = [
  AboutPage, AccountPage, ProductsListPage, LoginPage, MapPage,PopoverPage, SchedulePage, ScheduleFilterPage, SessionDetailPage,SignupPage,
  SpeakerDetailPage,SpeakerListPage, TabsPage, TutorialPage, SupportPage, MultiDateCalendarPage
];

var config = {
  apiKey: "AIzaSyB8SHm7JuPH3m13MlNjQNoKg9pKayrdvyU",
  authDomain: "xaviers-connect.firebaseapp.com",
  databaseURL: "https://xaviers-connect.firebaseio.com",
  projectId: "xaviers-connect",
  storageBucket: "xaviers-connect.appspot.com",
  messagingSenderId: "717372984367"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    AllPipes,
    ConferenceApp,
    AllPages
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireAuthModule,
    CalendarModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(ConferenceApp, {
      tabsHideOnSubPages: "true",
      mode: 'md',
      scrollAssist: false,
      autoFocusAssist: false
    }, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AllPages
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    AllService
  ]
})
export class AppModule { }
