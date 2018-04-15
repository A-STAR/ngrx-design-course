import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState, ITutorial } from '../interfaces';

import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  add(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}));
  }

}
