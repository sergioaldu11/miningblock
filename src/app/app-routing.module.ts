import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { NodosComponent } from './pages/nodos/nodos.component';
import { RigComponent } from './pages/rig/rig.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },  
  {
    path: 'blockchain',
    component: BlockchainComponent
  },
  {
    path: 'nodos',
    component: NodosComponent
  }, 
  {
    path: 'rig',
    component: RigComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
