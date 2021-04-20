import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  powcon: number;
  hour: number;
  cost: number;
  elec: number;
  cpd: number;

  calculateelec() {
    this.elec = this.powcon * (this.hour/ 1000);
    this.elec = parseFloat(this.elec.toFixed(2));

    this.cpd = this.elec * this.cost;
    this.cpd = parseFloat(this.cpd.toFixed(4));
  }

  constructor(public navCtrl: NavController) {

  }

}
