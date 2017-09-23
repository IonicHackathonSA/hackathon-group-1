import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var firebase:any;
/**
 * Generated class for the AddcharityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcharity',
  templateUrl: 'addcharity.html',
})
export class AddcharityPage {
  name: string;
  information: string;
  imageUrl: string;

  whoWeAre: string;
  whatWeDo: string;
  donationSite: string;

  telephone: string;
  email: string;
  address: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    // this.saveData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcharityPage');
  }

  test(event: Event){
    console.log(event);
  }

  saveData(){
    var charity = {
      name: "SOS",
      information: "22 september 2017",
      imageUrl: "addsomething",
      whoWeAre: "Orphans",
      whatWeDo: "feed",
      donationSite: "Sos",
      telephone: "0312323567",
      email: "dav@gmail.com",
      address: "gateway park",
    
    }
   

    var chari=firebase.database().ref("Charities/");
    chari.push(charity).then(function (val) {
      debugger;
    })
    
  }
}
