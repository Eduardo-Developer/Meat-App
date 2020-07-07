import { RestaurantsService } from './restaurant/restaurant.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private RestaurantsService: RestaurantsService) { }


  ngOnInit() {
    this.RestaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
