import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddcharityPage} from '../addcharity/addcharity';

declare var firebase: any;
interface Charity {
  name: string;
  image: string;
  info: string;
  site: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  charities: any = [];

  constructor(public navCtrl: NavController) {
    //this.navCtrl.push(AddcharityPage, {
      //item: 1
    // });
  }

  ngOnInit(){
    
    firebase
    .database()
    .ref('/Charities')
    .once('value')
    .then(snapshot => {
      var charities = snapshot.val()
      Object.keys(charities).forEach( (key)=> {
        this.charities.push({
          name: charities[key].name,
          information: charities[key].information,
        });
        console.log(this.charities)
      });
    });
  }

}
