import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCompany } from '../store/companiesSlice'
import styles from './AddCompanyForm.module.css'

const AddCompanyForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && address) {
      dispatch(addCompany({ name, address, selected: false }));
      setName('');
      setAddress('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Название компании"
        value={name}
        onChange={e => setName(e.target.value)}
        className={styles.inputField}
        required
      />
      <input
        type="text"
        placeholder="Адрес"
        value={address}
        onChange={e => setAddress(e.target.value)}
        className={styles.inputField}
        required
      />
      <button type="submit" className={styles.button}>Добавить компанию</button>
    </form>
  );
};

export default AddCompanyForm;
