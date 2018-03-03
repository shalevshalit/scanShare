import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {GetImagePage} from '../pages/get-image/get-image';
import {ShareImagePage} from '../pages/share-image/share-image';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Camera} from '@ionic-native/camera';
import {HTTP} from '@ionic-native/http';
import {File} from '@ionic-native/file';

@NgModule({
    declarations: [
        MyApp,
        ShareImagePage,
        GetImagePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ShareImagePage,
        GetImagePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BarcodeScanner,
        Camera,
        HTTP,
        File,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
