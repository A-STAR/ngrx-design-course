import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState, ITutorial } from '../interfaces';

import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<ITutorial[]>;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.tutorials$ = this.store.select('tutorial');
  }

  remove(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

}
