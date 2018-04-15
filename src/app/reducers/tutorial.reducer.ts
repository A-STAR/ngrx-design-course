import { Action } from '@ngrx/store';
import { ITutorial } from '../interfaces';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: ITutorial[] = [
  {
    name: 'Initial Tutorial',
    url: 'http://google.com'
  }
];

export function reducer(state: ITutorial[] = initialState, action: TutorialActions.Actions) {

  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      return [...state.slice(0, action.payload), ...state.slice(++action.payload)];

    default:
      return state;
  }

}
