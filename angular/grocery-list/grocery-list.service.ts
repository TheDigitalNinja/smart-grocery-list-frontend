import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Item } from './item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GroceryListService {
  private itemsUrl = 'http://localhost:8080/item';  // URL to web API

  constructor (private http: Http) {}

  getItems (): Observable<Item[]> {
    return this.http.get(this.itemsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addItem (name: string): Observable<Item> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.itemsUrl, body, options)
                    .map(this.extractPostRepData)
                    .catch(this.handleError);
  }

  updateItemName (itemUrl: string, name: string): Observable<Item> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.patch(itemUrl, body, options)
                    .map(this.extractPostRepData)
                    .catch(this.handleError);
  }

  deleteItem (itemUrl: string): Observable<Response> {
    return this.http.delete(itemUrl);
  }

  private extractData(res: Response) {
    // Extract data from spring data.
    let body = res.json()._embedded.item;
    return body || { };
  }

  private extractPostRepData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}