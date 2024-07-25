import { describe, it, expect } from 'vitest';
import store, { RootState } from '../store';
import mainPageReducer, { initialState } from '../pages/MainPage/MainPageSlice';

describe('Redux store setup', () => {
  it('should have the correct initial state', () => {
    const state = store.getState();
    expect(state.mainPage).toEqual(initialState);
  });

  it('should have the correct reducer', () => {
    expect(store.getState().mainPage).toEqual(initialState);
    store.dispatch({ type: 'mainPage/someAction' });
    expect(store.getState().mainPage).toEqual(
      mainPageReducer(initialState, { type: 'mainPage/someAction' }),
    );
  });

  it('should have the correct RootState type', () => {
    const state: RootState = {
      mainPage: initialState,
    };
    expect(state).toEqual(store.getState());
  });
});
