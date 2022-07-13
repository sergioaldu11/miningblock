import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilleteraComponent } from './pages/billetera/billetera.component';
import { HomeComponent } from './pages/home/home.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { NodosComponent } from './pages/nodos/nodos.component';
import { RigComponent } from './pages/rig/rig.component';
import { RedesComponent } from './pages/redes/redes.component';
import { QueEsComponent } from './pages/blockchain/que-es/que-es.component';
import { HistoriaComponent } from './pages/blockchain/historia/historia.component';
import { FundamentosComponent } from './pages/blockchain/fundamentos/fundamentos.component';
import { FuncionamientoComponent } from './pages/blockchain/funcionamiento/funcionamiento.component';
import { UtilidadComponent } from './pages/blockchain/utilidad/utilidad.component';
import { BeneficiosComponent } from './pages/blockchain/beneficios/beneficios.component';
import { PublicasComponent } from './pages/redes/publicas/publicas.component';
import { PrivadasComponent } from './pages/redes/privadas/privadas.component';
import { HibridasComponent } from './pages/redes/hibridas/hibridas.component';
import { CompletosComponent } from './pages/nodos/completos/completos.component';
import { SupernodosComponent } from './pages/nodos/supernodos/supernodos.component';
import { LigerosComponent } from './pages/nodos/ligeros/ligeros.component';
import { MinerosComponent } from './pages/nodos/mineros/mineros.component';

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
    path: 'blockchain/que-es',
    component: QueEsComponent
  },
  {
    path: 'blockchain/historia',
    component: HistoriaComponent
  },
  {
    path: 'blockchain/fundamentos',
    component: FundamentosComponent
  },
  {
    path: 'blockchain/funcionamiento',
    component: FuncionamientoComponent
  },
  {
    path: 'blockchain/utilidad',
    component: UtilidadComponent
  },
  {
    path: 'blockchain/beneficios',
    component: BeneficiosComponent
  },
  {
    path: 'redes',
    component: RedesComponent
  },
  {
    path: 'redes/publicas',
    component: PublicasComponent
  },
  {
    path: 'redes/privadas',
    component: PrivadasComponent
  },
  {
    path: 'redes/hibridas',
    component: HibridasComponent
  },
  {
    path: 'nodos',
    component: NodosComponent
  }, 
  {
    path: 'nodos/completos',
    component: CompletosComponent
  }, 
  {
    path: 'nodos/supernodos',
    component: SupernodosComponent
  }, 
  {
    path: 'nodos/ligeros',
    component: LigerosComponent
  }, 
  {
    path: 'nodos/mineros',
    component: MinerosComponent
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
