import React from 'react'
import './App.css'
import AddCompanyForm from './components/AddCompanyForm'
import CompanyTable from './components/CompanyTable'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>СПИСОК КОМПАНИЙ</h1>
      <div className="add-company-form">
        <AddCompanyForm />
      </div>
      <div className="company-table-container">
        <CompanyTable />
      </div>
    </div>
  );
};

export default App;
