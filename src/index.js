import React from 'react';
import { render } from 'react-dom';
import { LicenseManager } from 'ag-grid-enterprise';
import App from './App'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
LicenseManager.setLicenseKey(
  'For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-28_August_2021_[v2]_MTYzMDEwNTIwMDAwMA==c85656871d09897df6130c60249be8a6'
);


render(<App />, document.getElementById('root'));
