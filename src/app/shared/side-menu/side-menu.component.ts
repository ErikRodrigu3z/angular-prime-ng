import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent implements OnInit{
  items: MenuItem[] = [];
  sidebarVisible: boolean = false;


  ngOnInit(): void {

    this.items = [
      {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus'
      },
      {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus'
      },
      {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
              {
                  label: 'Filter',
                  icon: 'pi pi-fw pi-filter',
                  items: [
                      {
                          label: 'Print',
                          icon: 'pi pi-fw pi-print'
                      }
                  ]
              },
              {
                  icon: 'pi pi-fw pi-bars',
                  label: 'List'
              }
          ]
      }
  ];

  }





}
