import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilleteraComponent } from './pages/billetera/billetera.component';
import { HomeComponent } from './pages/home/home.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { NodosComponent } from './pages/nodos/nodos.component';
import { RigComponent } from './pages/rig/rig.component';
import { RedesComponent } from './pages/redes/redes.component';

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
    path: 'redes',
    component: RedesComponent
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
    path: 'billetera',
    component: BilleteraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
