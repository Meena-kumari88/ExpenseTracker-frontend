import axios from 'axios';

export const fetchExpenses = async () => {
  const response = await axios.get('https://expense-tracker-backend-91yo9ekul-meena-kumaris-projects.vercel.app/api/expenses');
  return response.data;
};

export const addExpense = async (newExpense) => {
  const response = await axios.post('https://expense-tracker-backend-91yo9ekul-meena-kumaris-projects.vercel.app/api/expenses', newExpense);
  return response.data;
};

export const updateExpense = async (updatedExpense) => {
  const response = await axios.put(`https://expense-tracker-backend-91yo9ekul-meena-kumaris-projects.vercel.app/api/expenses/${updatedExpense._id}`, updatedExpense);
  return response.data;
};

export const deleteExpense = async (id) => {
  await axios.delete(`https://expense-tracker-backend-91yo9ekul-meena-kumaris-projects.vercel.app/api/expenses/${id}`);
};
