import browser from 'webextension-polyfill';
import store, { initializeWrappedStore } from '../app/store';

initializeWrappedStore();

store.subscribe(() => {
  // access store state
  // const state = store.getState();
  // console.log('state', state);
});
