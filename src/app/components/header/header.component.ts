import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  menuItems =[{
    'titulo':'Blockchain',
    'url':'/blockchain',
    'dropdown': 'dropdown',
    'subItems': 
      [{
        'titulo':'¿Que es blockchain?',
        'url':'/que-es',
        },
        {
        'titulo':'Historia',
        'url':'/historia',
       },
       {
        'titulo':'Fundamentos',
        'url':'/fundamentos',
       },
       {
        'titulo':'Cómo funciona',
        'url':'/funcionamiento',
       },
       {
        'titulo':'Casos de uso',
        'url':'/utilidad',
       },
       {
        'titulo':'Beneficios',
        'url':'/beneficios',
       },
      ],
  },
  {
    'titulo':'Tipos de redes',
    'url':'/redes',
    'dropdown': 'dropdown',
    'subItems': 
      [{
        'titulo':'Redes públicas',
        'url':'/publicas',
        },
        {
        'titulo':'Redes privadas',
        'url':'/privadas',
       },
       {
        'titulo':'Redes hibridas',
        'url':'/hibridas',
       }],
  },  
  {
    'titulo':'Tipos de nodos',
    'url':'/nodos',
    'dropdown': 'dropdown',
    'subItems': 
      [{
        'titulo':'Nodos completos',
        'url':'/completos',
        },
        {
        'titulo':'Supernodos',
        'url':'/supernodos',
      },
      {
        'titulo':'Nodos ligeros',
        'url':'/ligeros',
      },
      {
        'titulo':'Nodos mineros',
        'url':'/mineros',
      }],
  },
  {
    'titulo':'Rig de mineria',
    'url':'/rig',
    'dropdown': null
  },
  {
    'titulo':'Conecta tu billetera',
    'url':'/billetera',
    'dropdown': null
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
