import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BilleteraComponent } from './pages/billetera/billetera.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BilleteraComponent,
    BlockchainComponent,
    NodosComponent,
    RigComponent,
    RedesComponent,
    QueEsComponent,
    HistoriaComponent,
    FundamentosComponent,
    FuncionamientoComponent,
    UtilidadComponent,
    BeneficiosComponent,
    PublicasComponent,
    PrivadasComponent,
    HibridasComponent,
    CompletosComponent,
    SupernodosComponent,
    LigerosComponent,
    MinerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
