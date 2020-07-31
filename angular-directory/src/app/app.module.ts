import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { Routes,RouterModule} from '@angular/router';

import { ShopGroupComponent } from './components/shop-group/shop-group.component';
import { PlaceMenuComponent } from './components/place-menu/place-menu.component';
import { PlaceshoplinkListComponent } from './components/placeshoplink-list/placeshoplink-list.component';
import { PlaceshopListComponent } from './components/placeshop-list/placeshop-list.component';
import { PlaceshopService } from './services/placeshop.service';

const routes: Routes =[
  {path:'places/:id',component:ShopGroupComponent,

  children: [
    {
    path:  'shop/:id',
    component:  PlaceshopListComponent
    }]

},
 
 
 
  //{path:'shop/:id',component:PlaceshopListComponent},
  {path:'places',component:ShopGroupComponent},
  {path:'shops',component:ShopGroupComponent},
 // {path:'',redirectTo:'/shops',pathMatch:'full'},
 // {path:'**',redirectTo:'/shops',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    ShopGroupComponent,
    PlaceMenuComponent,
    PlaceshoplinkListComponent,
    PlaceshopListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  
  ],
  providers: [PlaceshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
