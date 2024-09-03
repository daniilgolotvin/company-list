import { Company } from '../types'

export const initialCompanies: Omit<Company, 'id'>[] = [
  { name: 'Tech Innovators', address: 'contact@techinnovators.com', selected: false },
  { name: 'Green Energy Solutions', address: 'info@greenenergy.com', selected: false },
  { name: 'Global Finance Corp', address: 'support@globalfinance.com', selected: false },
  { name: 'Health First', address: 'hello@healthfirst.com', selected: false },
  { name: 'EduSmart Systems', address: 'connect@edusmart.com', selected: false },
  { name: 'NextGen Robotics', address: 'team@nextgenrobotics.com', selected: false },
  { name: 'Urban Development Group', address: 'office@urbandev.com', selected: false },
  { name: 'AquaPure Water', address: 'sales@aquapure.com', selected: false },
  { name: 'SafeGuard Security', address: 'service@safeguardsecurity.com', selected: false },
  { name: 'Global Marketing Solutions', address: 'info@globalmarketing.com', selected: false },
];
