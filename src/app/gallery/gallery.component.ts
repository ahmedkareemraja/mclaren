import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  flag : boolean = false;
   images = ['../../assets/2021_ImolaGP_1920X1080.jpg','../../assets/2021_SPAINWALLPAPER_1920x1080.jpg', '../../assets/1280x800.jpg']

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    if(this.flag == false)
    {
      this.flag = true;
    }
    else{
      this.flag = false;
    }
  }

}
