import { Injectable } from '@angular/core';
import { catchError,  ObservableInput } from 'rxjs';

import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private static urlClientApi = "http://localhost:8088/api/v1/projet"
  
  constructor(private http: HttpClient) { }

/**
   * Recuperation de la liste des produits
   */
public getAllProducts() {
  
  return this.http.get(`${ProduitService.urlClientApi}`).pipe(catchError(this.handleError))
}


handleError(error: any, caught: Observable<any>) : ObservableInput<any>{
  throw new Error(error)
}
}
