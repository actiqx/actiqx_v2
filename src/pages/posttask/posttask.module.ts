import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosttaskPage } from './posttask';

@NgModule({
  declarations: [
    PosttaskPage,
  ],
  imports: [
    IonicPageModule.forChild(PosttaskPage),
  ],
})
export class PosttaskPageModule {}