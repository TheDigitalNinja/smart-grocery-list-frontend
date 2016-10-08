import { Component, OnInit } from '@angular/core';

import { GroceryListService } from '../grocery-list/grocery-list.service';
import { Item } from './item';

@Component({
  selector: 'shopping-list',
  templateUrl: 'angular/shopping-list/shopping-list.component.html',
  providers: [GroceryListService]
})

export class ShoppingListComponent /*implements OnInit*/ {
  errorMessage: string;
  items: Item[];
  mode = 'Observable';

  constructor (private groceryListService: GroceryListService) {}

  ngOnInit() { this.getItems(); }

  getItems() {
    this.groceryListService.getItems()
                           .subscribe(
                             items => this.items = items,
                             error =>  this.errorMessage = <any>error);
  }

}

