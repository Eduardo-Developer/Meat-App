import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Restaurant } from './restaurant.model';

import { MEAT_API } from './../../app.api';
import { ErrorHandler } from './../../app.error-handler';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }


}