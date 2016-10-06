import { Component } from '@angular/core';

import './rxjs-operators';

declare var componentHandler: any;

@Component({
  selector: 'app',
  templateUrl: 'angular/app/app.component.html'
})

export class AppComponent {

	ngAfterViewInit() {
	  componentHandler.upgradeDom();
	}

}
