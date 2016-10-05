import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule).then(function(){
	componentHandler.upgradeAllRegistered(); // Trigger material ui
});