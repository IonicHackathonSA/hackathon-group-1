import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharityhomePage } from './charityhome';

@NgModule({
  declarations: [
    CharityhomePage,
  ],
  imports: [
    IonicPageModule.forChild(CharityhomePage),
  ],
})
export class CharityhomePageModule {}
