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
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
