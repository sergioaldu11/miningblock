import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  menuItems =[{
    'icon':'bi bi-house',
    'url':'/'
  },
  {
    'titulo':'¿Que es blockchain?',
    'url':'/blockchain'
  },
  {
    'titulo':'Nodos',
    'url':'/nodos'
  },  
  {
    'titulo':'Rig',
    'url':'/rig'
  },
  {
    'titulo':'Calculadora',
    'url':'/calculadora'
  },
  {
    'titulo':'Sobre nosotros',
    'url':'/about'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
