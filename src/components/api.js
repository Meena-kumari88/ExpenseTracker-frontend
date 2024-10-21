import axios from 'axios';

export const fetchExpenses = async () => {
  const response = await axios.get('https://expensetracker-backend-42sz.onrender.com/api/expenses');
  return response.data;
};

export const addExpense = async (newExpense) => {
  const response = await axios.post('https://expensetracker-backend-42sz.onrender.com/api/expenses', newExpense);
  return response.data;
};

export const updateExpense = async (updatedExpense) => {
  const response = await axios.put(`https://expensetracker-backend-42sz.onrender.com/api/expenses/${updatedExpense._id}`, updatedExpense);
  return response.data;
};

export const deleteExpense = async (id) => {
  await axios.delete(`https://expensetracker-backend-42sz.onrender.com/api/expenses/${id}`);
};
