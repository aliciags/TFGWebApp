import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    public httpOptions: {
        headers: HttpHeaders
    };
    public environment: string;

    constructor(private localStorage: LocalStorageService,
                private apiService: ApiService) {
        this.httpOptions = {
            headers: new HttpHeaders({
              'x-auth-token': 'token'
            })
        };
        this.environment = '';
    }

    init(): Recipe[]{
        let recipes: Recipe[] = [];
        if (this.localStorage.get('token') != null) {
            this.environment = 'home';
            this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
        }
        this.apiService.get('/').subscribe(response => {
            recipes = response;
        },
        err => {
        // internal server error
            console.log(err);
        });
        return recipes;
    }

 }
