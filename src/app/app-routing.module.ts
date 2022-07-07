import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionBlockComponent } from './description-block/description-block.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PiechartComponent } from './piechart/piechart.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent,
    },
    {
      path:'navbar',
      component:NavbarComponent,
      },
      {
        path:'description-block',
        component:DescriptionBlockComponent,
        },
        {
          path:'map',
          component:MapComponent,
          },
          {
            path:'piechart',
            component:PiechartComponent,
            },
            {
              path:'footer',
              component:FooterComponent,
              },

    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
