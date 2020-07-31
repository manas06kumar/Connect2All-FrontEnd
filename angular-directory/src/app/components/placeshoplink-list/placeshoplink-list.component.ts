import { Component, OnInit } from '@angular/core';
import { Placeshoplink } from 'src/app/common/placeshoplink';
import { PlaceshopService } from 'src/app/services/placeshop.service';

@Component({
  selector: 'app-placeshoplink-list',
  templateUrl: './placeshoplink-list.component.html',
  styleUrls: ['./placeshoplink-list.component.css']
})
export class PlaceshoplinkListComponent implements OnInit {


  placeShopLink: Placeshoplink[];

  constructor(private placeShop : PlaceshopService) { }

  ngOnInit(): void {

    

  }

  

}
