import React from 'react';
import { GlobalStyle } from '../styles/global';
import Header from '../components/Header/index';
import Dashboard from '../components/Dashboard';

function DashboardPage() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </div>
  );
}

export default DashboardPage;