import { Component, OnInit } from '@angular/core';
import { PlaceShopList } from 'src/app/common/place-shop-list';
import { PlaceshopService } from 'src/app/services/placeshop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaceMenuComponent } from '../place-menu/place-menu.component';
import { PlaceCategory } from 'src/app/common/place-category';
import { ShopCategory } from 'src/app/common/shop-category';

@Component({
  selector: 'app-placeshop-list',
  templateUrl: './placeshop-list.component.html',
  styleUrls: ['./placeshop-list.component.css']
})
export class PlaceshopListComponent implements OnInit {

  placeShoplist: PlaceShopList[];
  currentShopId : number;
  currentPlaceId : number;
  places:PlaceCategory[];
  shop:ShopCategory[];

  constructor(private placeShopService : PlaceshopService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listPlaceShop();
      });
      
    
  }

  listOfShop(){

    //check if "id" parameter is available
      const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

      if(hasCategoryId)
      {
        //read and convert to a number
        this.currentShopId = +this.route.snapshot.paramMap.get('id');
      }
      else
      {
        this.currentShopId = 0;
      }

        this.placeShopService.getShopListValue(this.currentShopId).subscribe(
          data=> {
          //  console.log('Shop List=' + JSON.stringify(data));
            this.shop = data;
          }
        )
}

  
    listOfPlaces(){

      const hascurrentPlaceId: boolean = 
    this.route.snapshot.parent?this.route.snapshot.parent.paramMap.has('id'):false;


    if(hascurrentPlaceId)
    {
      //read and convert to a number
      this.currentPlaceId = +this.route.snapshot.parent.paramMap.get('id');
    }
    else
    {
      
      this.currentPlaceId = 0;
    }

      this.placeShopService.getPlaceListValue(this.currentPlaceId).subscribe(
        data => {
          console.log('Place Categories' + JSON.stringify(data));
          this.places = data;
        }
      );

  }

  listPlaceShop(){

    const hascurrentShopId: boolean = this.route.snapshot.paramMap.has('id');
    const hascurrentPlaceId: boolean = 
    this.route.snapshot.parent?this.route.snapshot.parent.paramMap.has('id'):false;


    if(hascurrentShopId )
    {
      //read and convert to a number
      this.currentShopId = +this.route.snapshot.paramMap.get('id');
    }
    else
    {
      this.currentShopId = 0;
    }

    if(hascurrentPlaceId)
    {
      //read and convert to a number
      this.currentPlaceId = +this.route.snapshot.parent.paramMap.get('id');
    }
    else
    {
      
      this.currentPlaceId = 0;
    }

   this.placeShopService.getPlaceShopList(this.currentShopId,this.currentPlaceId).subscribe(
     data=>{
       console.log('Place Shop Categories' + JSON.stringify(data));
       this.placeShoplist = data;
     }
   )

   this.listOfPlaces();
   this.listOfShop();
  }

  recordInList(): boolean {
    if(this.placeShoplist && this.placeShoplist.length == 0)
    {
      return true;
    }
    return false;
  }

}
