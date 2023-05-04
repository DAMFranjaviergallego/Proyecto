import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [

    HeaderComponent,
    PopoverInfoComponent
  ],
  exports:[
    HeaderComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
