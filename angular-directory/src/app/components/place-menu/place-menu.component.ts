import { Component, OnInit } from '@angular/core';
import { PlaceCategory } from 'src/app/common/place-category';
import { PlaceshopService } from 'src/app/services/placeshop.service';

@Component({
  selector: 'app-place-menu',
  templateUrl: './place-menu.component.html',
  styleUrls: ['./place-menu.component.css']
})
export class PlaceMenuComponent implements OnInit {

  places:PlaceCategory[];

  constructor(private placeService:PlaceshopService) { }

  ngOnInit(): void {
    this.listOfPlaces();
  }

  listOfPlaces(){
    this.placeService.getPlaceList().subscribe(
      data => {
        console.log('Place Categories' + JSON.stringify(data));
        this.places = data;
      }
    );
  }


}
