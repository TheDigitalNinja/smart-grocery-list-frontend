import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {

    newItem: Item;

    constructor() {
        this.newItem = new Item();
    }

  // Mockup of items
  items = [];

  addItem(){
    if (this.newItem && this.newItem.name != null) {
      this.items.push(this.newItem.name);
      document.getElementById('addGroceryInput').value = ""; // Reset the form on addition.
      this.newItem = new Item(); // Reset it to the constructor. TODO: Better way?
    }
  }

}

class Item {
    name: string;
}