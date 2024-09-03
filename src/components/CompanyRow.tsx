import React from 'react'
import { useDispatch } from 'react-redux'
import { editCompany, toggleSelect } from '../store/companiesSlice'
import { Company } from '../types'
import styles from './CompanyRow.module.css'

interface Props {
  company: Company;
}

const CompanyRow: React.FC<Props> = ({ company }) => {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(toggleSelect(company.id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editCompany({ ...company, [e.target.name]: e.target.value }));
  };

  return (
    <tr className={`${styles.row} ${company.selected ? styles.selected : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={company.selected}
          onChange={handleSelect}
          className={styles.checkbox}
        />
      </td>
      <td>
        <input
          type="text"
          name="name"
          value={company.name}
          onChange={handleChange}
          className={styles.inputField}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={company.address}
          onChange={handleChange}
          className={styles.inputField}
        />
      </td>
    </tr>
  );
};

export default CompanyRow;
