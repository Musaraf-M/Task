import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ListsComponent } from '../components/lists/lists.component';

import { HomePageRoutingModule } from './home-routing.module';
import { FabComponent } from '../components/fab/fab.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ListsComponent,FabComponent]
})
export class HomePageModule {}
