import {Component} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';


/**
 * Generated class for the GetImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-get-image',
    templateUrl: 'get-image.html',
})
export class GetImagePage {
    public imgSrc: string = 'http://i68.tinypic.com/mwwkle.jpg';

    constructor(private barcodeScanner: BarcodeScanner) {
    }


    startScan() {
        this.barcodeScanner.scan().then(({text}) => {
            this.imgSrc = text;
        }, (err) => {
            console.error(err);
        });
    }
}
