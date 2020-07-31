import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaceCategory } from '../common/place-category';
import { map } from 'rxjs/operators';
import { ShopCategory } from '../common/shop-category';
import { PlaceShopList } from '../common/place-shop-list';
import { PlaceShopLink } from '../common/place-shop-link';

@Injectable({
  providedIn: 'root'
})
export class PlaceshopService {

  private placeCategoryUrl = 'http://localhost:8080/api/places';

  private allshopsUrl = 'http://localhost:8080/api/shops';

  private shopsUrl = 'http://localhost:8080/api/placeShopLinks';

  private placeShopUrl = 'http://localhost:8080/api/placeShopLists';

  constructor(private httpClient: HttpClient) { }


getPlaceList():Observable<PlaceCategory[]>{
  
  console.log("inside getPlaceList");
  
  return this.httpClient.get<GetResponsePlaceCategory>(this.placeCategoryUrl).pipe(
    map(response=> response._embedded.placeCategory)
  );

}

getPlaceListValue(thePlaceId:number):Observable<PlaceCategory[]>{

  if(thePlaceId!=0)
  {
  
  const placeCategorySelectiveURL = `${this.placeCategoryUrl}/search/findById?id=${thePlaceId}`;
  
  return this.httpClient.get<GetResponsePlaceCategory>(placeCategorySelectiveURL).pipe(
    map(response=> response._embedded.placeCategory)
  );
  }

}

getShopListValue(theShopId:number):Observable<ShopCategory[]>{

  if(theShopId!=0)
  {
  
  const shopCategorySelectiveURL = `${this.allshopsUrl}/search/findById?id=${theShopId}`;
  
  return this.httpClient.get<GetResponseShop>(shopCategorySelectiveURL).pipe(
    map(response=> response._embedded.shops)
  );
  }

}


getShopList(thePlaceId:number):Observable<ShopCategory[]>{

  var searchUrl;
  if(thePlaceId != 0 )
  {
  searchUrl = `${this.shopsUrl}/search/findByPlaceId?id=${thePlaceId}`;
  return this.httpClient.get<GetResponsePlaceShopLink>(searchUrl).pipe(
    map(response=> response._embedded.placeShopLinks)
  );
  }
  else
  {
    searchUrl = `${this.allshopsUrl}`;
    return this.httpClient.get<GetResponseShop>(searchUrl).pipe(
      map(response=> response._embedded.shops)
    );
  }

  
}

getPlaceShopList(theShopId: number,thePlaceId:number):Observable<PlaceShopList[]>{

  var searchPlaceShopUrl;
  if(thePlaceId != 0 && theShopId !=0)
  {
    searchPlaceShopUrl = `${this.placeShopUrl}/search/findByPlaceAndShop?place_id=${thePlaceId}&shop_id=${theShopId}`;
  }
  else if(theShopId !=0)
  {
    searchPlaceShopUrl = `${this.placeShopUrl}/search/findByShop?shop_id=${theShopId}`;
  }
  else if(thePlaceId !=0)
  {
    searchPlaceShopUrl = `${this.placeShopUrl}/search/findByPlace?place_id=${thePlaceId}`;
  }
  else
  {
    searchPlaceShopUrl = `${this.placeShopUrl}`;
  }

 // const searchPlaceShopUrl = `${this.placeShopUrl}/search/findByPlaceAndShop?place_id=${thePlaceId}&shop_id=${theShopId}`;

  return this.httpClient.get<GetResponsePlaceShop>(searchPlaceShopUrl).pipe(
    map(response=> response._embedded.placeShopLists)
  );
}

}




interface GetResponsePlaceShop {
  _embedded:{
    placeShopLists:PlaceShopList[];
  }
}

interface GetResponsePlaceCategory {
  _embedded:{
    placeCategory:PlaceCategory[];
  }
}

interface GetResponseShop {
  _embedded:{
    shops:ShopCategory[];
  }
}


interface GetResponsePlaceShopLink {
  _embedded:{
    placeShopLinks:PlaceShopLink[];
  }
}
