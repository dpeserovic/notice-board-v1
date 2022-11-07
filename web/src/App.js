import React from 'react';
import MainLayout from './MainLayout';
import { RouterContext, RouterView } from 'mobx-state-router';
import { LoginPage, RegisterPage } from './modules/membership/pages';

const routeNames = {
  login: <LoginPage />,
  register: <RegisterPage />,
}


function App({ rootStore }) {
  const { routerStore: { router } } = rootStore;
  return (
    <RouterContext.Provider value={router}>
      <MainLayout>
        <RouterView viewMap={routeNames} />
      </MainLayout>
    </RouterContext.Provider>
  );
}

export default App;
