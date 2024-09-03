// src/components/CompanyTable.tsx
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { deleteSelected, toggleSelectAll } from '../store/companiesSlice'
import CompanyRow from './CompanyRow'
import styles from './CompanyTable.module.css'

const CompanyTable: React.FC = () => {
  const companies = useSelector((state: RootState) => state.companies.companies);
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    dispatch(toggleSelectAll(!selectAll));
  };

  const handleDelete = () => {
    dispatch(deleteSelected());
  };

  const [visibleCompanies, setVisibleCompanies] = useState(50);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setVisibleCompanies(prev => prev + 50);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.scrollableTable} onScroll={handleScroll}>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              </th>
              <th>Название компании</th>
              <th>Адрес</th>
            </tr>
          </thead>
          <tbody>
            {companies.slice(0, visibleCompanies).map(company => (
              <CompanyRow key={company.id} company={company} />
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Удалить выбранные
        </button>
      </div>
    </div>
  );
};

export default CompanyTable;
