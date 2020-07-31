import { Component, OnInit } from '@angular/core';
import { ShopCategory } from 'src/app/common/shop-category';
import { PlaceshopService } from 'src/app/services/placeshop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-group',
  templateUrl: './shop-group.component.html',
  styleUrls: ['./shop-group.component.css']
})
export class ShopGroupComponent implements OnInit {

  shop:ShopCategory[];
  selectedIndex: number = null;
  currentCategoryId:number;

  constructor(private shopService : PlaceshopService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listOfShop();
      });
    
  }

  listOfShop(){

      //check if "id" parameter is available
  const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

  if(hasCategoryId)
  {
    //read and convert to a number
    this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
  }
  else
  {
    this.currentCategoryId = 0;
  }

    this.shopService.getShopList(this.currentCategoryId).subscribe(
      data=> {
      //  console.log('Shop List=' + JSON.stringify(data));
        this.shop = data;
      }
    )
  }

  setIndex(index: number) {
    this.selectedIndex = index;
 }

}
