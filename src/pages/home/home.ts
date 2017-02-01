import { Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { NavController, Nav, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild(Slides) slides: Slides;
  @ViewChild(Nav) nav: Nav;
  public skateForm: any;
  slides:any[];
  constructor(public navCtrl: NavController, public fb: FormBuilder, public menu: MenuController ) {
    this.skateForm = this.fb.group({
          "name": ["", Validators.required],
          "notes": ["", Validators.required]
    });

  }
  logForm(){
   console.log(this.skateForm.value);
  }
  goToSlide() {
      // this.slides.slideTo(2, 500);
    }

}
