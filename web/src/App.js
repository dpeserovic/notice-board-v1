import React from 'react';
import MainLayout from './MainLayout';
import { RouterContext, RouterView } from 'mobx-state-router';
import { LoginPage, RegistrationPage } from './modules/membership/pages';

const routeNames = {
  login: <LoginPage />,
  registration: <RegistrationPage />,
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
