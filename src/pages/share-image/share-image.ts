import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {HTTP} from '@ionic-native/http';
import {LoadingController} from 'ionic-angular';

/**
 * Generated class for the ShareImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const CLIENT_ID = 'aca10effb45529e';

@Component({
    selector: 'page-share-image',
    templateUrl: 'share-image.html',
})
export class ShareImagePage {
    public imgSrc: string = 'http://i68.tinypic.com/mwwkle.jpg';
    public imageState: boolean = true;

    constructor(private loadingCtrl: LoadingController, private camera: Camera, private http: HTTP) {
    }

    takePicture() {

        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageUrl) => {
            let loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            this.imgSrc = imageUrl;
            this.http.uploadFile('https://api.imgur.com/3/image',
                {},
                {
                    authorization: `Client-ID ${CLIENT_ID}`
                }, imageUrl, 'image')
                .then(({data}) => {
                    loading.dismiss();
                    this.imgSrc = JSON.parse(data).data.link;
                })
                .catch(error => {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);

                });
        }, (err) => {
            console.log(err);
        });
    }
}
