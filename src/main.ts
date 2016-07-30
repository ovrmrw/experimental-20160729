import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { appRouterProviders } from './app/app.routes';

import { Store, Dispatcher, Action } from './store';


if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  { provide: Dispatcher, useValue: new Dispatcher<Action>() },
  { provide: Store, useFactory: (dispatcher) => new Store(dispatcher), deps: [Dispatcher] },
  disableDeprecatedForms(),
  provideForms()
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/