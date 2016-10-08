import { Component, OnInit } from '@angular/core';

import { GroceryListService } from './grocery-list.service';
import { Item } from './item';

@Component({
  selector: 'grocery-list',
  templateUrl: 'angular/grocery-list/grocery-list.component.html',
  providers: [GroceryListService]
})

export class GroceryListComponent /*implements OnInit*/ {
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

  addItem (name: string) {
    if (!name) { return; }
    this.groceryListService.addItem(name)
                           .subscribe(
                             item  => {this.items.push(item)},
                             error =>  this.errorMessage = <any>error);
  }

  updateItemName (itemUrl: string, name: string) {
    console.log("Change Name: %s Url: %s",name,itemUrl);
    if (!name) { return; }
    this.groceryListService.updateItemName(itemUrl, name).subscribe( items => {
      this.items.forEach((t,i) => {
        if (this.items[i]._links.self.href == itemUrl) {
          this.items[i].name = name;
        }
      })
    }, error =>  this.errorMessage = <any>error);
  }

  deleteItem(itemUrl: string) {
    this.groceryListService.deleteItem(itemUrl).debounceTime(1500).subscribe( items => {
      this.items.forEach((t,i) => {
        if (this.items[i]._links.self.href == itemUrl) {
          this.items.splice(i, 1);
        }
      })
    }, error =>  this.errorMessage = <any>error);
  }

}

