import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertCrtl : AlertController) { }
  mhw: string;
  async verSelecion(){
    let alert = await this.alertCrtl.create({
      message:this.mhw,
      buttons:['Cerrar']
    });
    alert.present();
  }

}
