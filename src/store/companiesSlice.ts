import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialCompanies } from '../data/InitialCompanies'
import { Company } from '../types'

interface CompaniesState {
  companies: Company[];
}

const initialState: CompaniesState = {
  companies: initialCompanies.map((company, index) => ({
    id: index + 1,
    ...company,
  })),
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    toggleSelectAll(state, action: PayloadAction<boolean>) {
      state.companies.forEach(company => {
        company.selected = action.payload;
      });
    },
    toggleSelect(state, action: PayloadAction<number>) {
      const company = state.companies.find(c => c.id === action.payload);
      if (company) {
        company.selected = !company.selected;
      }
    },
    editCompany(state, action: PayloadAction<Company>) {
      const index = state.companies.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    addCompany(state, action: PayloadAction<Omit<Company, 'id'>>) {
      const newId = state.companies.length ? state.companies[state.companies.length - 1].id + 1 : 1;
      const newCompany: Company = { id: newId, ...action.payload, selected: false };
      state.companies.unshift(newCompany); // Добавляем в начало массива
    },
    deleteSelected(state) {
      state.companies = state.companies.filter(company => !company.selected);
    },
  },
});

export const {
  toggleSelectAll,
  toggleSelect,
  editCompany,
  addCompany,
  deleteSelected,
} = companiesSlice.actions;

export default companiesSlice.reducer;