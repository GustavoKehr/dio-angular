import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, IndexModule, PortifolioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
