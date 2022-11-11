import React from 'react';
import MainLayout from './MainLayout';
import { RouterContext, RouterView } from 'mobx-state-router';
import { LoginPage, RegisterPage } from './modules/membership/pages';
import { DashboardPage } from 'modules/dashboard/pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const routeNames = {
  login: <LoginPage />,
  register: <RegisterPage />,
  dashboard: <DashboardPage />,
}


function App({ rootStore }) {
  const { routerStore: { router } } = rootStore;
  return (
    <RouterContext.Provider value={router}>
      <MainLayout>
        <RouterView viewMap={routeNames} />
        <ToastContainer />
      </MainLayout>
    </RouterContext.Provider>
  );
}

export default App;
