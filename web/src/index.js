import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RootStore } from './common/stores';

const rootStore = window.rootStore = new RootStore();
rootStore.routerStore.setObservingRouterStateChanges();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App rootStore={rootStore} />
  </React.StrictMode>
);
