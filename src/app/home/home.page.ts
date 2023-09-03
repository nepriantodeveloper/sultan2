import { Component, ElementRef, ViewChild } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gambar:any;
  @ViewChild('gambarnya') gambarnya!: ElementRef;
  constructor() {}

  foto(){
    const image = Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    image.then((res: any) => {
      this.gambar = res.dataUrl;
      this.gambarnya.nativeElement.src = this.gambar;
    })
  }

}
