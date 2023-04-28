import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SlideMenuModule,
    PanelMenuModule,
    SidebarModule,
    MenuModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    SlideMenuModule,
    PanelMenuModule,
    SidebarModule,
    MenuModule
  ]
})
export class PrimengModule { }
