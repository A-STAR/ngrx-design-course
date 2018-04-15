import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { tutorialReducer } from '../reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({
      tutorial: tutorialReducer
    })
  ]
})
export class CoreModule { }
