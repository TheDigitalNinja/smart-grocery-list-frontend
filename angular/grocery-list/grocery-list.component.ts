import { Component, OnInit } from '@angular/core';

import { GroceryListService } from './grocery-list.service';
import { Item } from './item';

@Component({
  selector: 'grocery-list',
  templateUrl: 'angular/app/app.component.html',
  providers: [GroceryListService] // This seems to lock up the page
})

export class GroceryListComponent implements OnInit {
  errorMessage: string;
  items: Item[];
  mode = 'Observable';

  constructor (private groceryListService: GroceryListService) {}

  ngOnInit() { this.getItems(); }

  getItems() {
    this.groceryListService.getItems()
                           .subscribe(
                             heroes => this.items = heroes,
                             error =>  this.errorMessage = <any>error);
  }

  addItem (name: string) {
    if (!name) { return; }
    this.groceryListService.addItem(name)
                           .subscribe(
                             hero  => this.items.push(hero),
                             error =>  this.errorMessage = <any>error);
  }

}

