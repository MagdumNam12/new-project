import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DescriptionBlockComponent } from './description-block/description-block.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsComponent } from './charts/charts.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { NgxChartsModule } from '@swimlane/ngx-charts';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DescriptionBlockComponent,
    MapComponent,
    FooterComponent,
    ChartsComponent,
    SidenavComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
