import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  flag : boolean = false;

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
