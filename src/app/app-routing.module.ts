import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DescriptionBlockComponent } from './description-block/description-block.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
    
  },
  {
    path:'navbar',
    component: NavbarComponent,
  },
  {
    path: 'description-block',
    component: DescriptionBlockComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },

  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
  {
    path: 'charts',
    component: SidenavComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'navbar'
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

