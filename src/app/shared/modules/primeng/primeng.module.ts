import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SlideMenuModule,
    PanelMenuModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    SlideMenuModule,
    PanelMenuModule
  ]
})
export class PrimengModule { }
