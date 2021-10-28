import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { ListaNaipesComponent } from './components/lista-naipes/lista-naipes.component';
import { CartaComponent } from './components/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNumerosComponent,
    ListaNaipesComponent,
    CartaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
