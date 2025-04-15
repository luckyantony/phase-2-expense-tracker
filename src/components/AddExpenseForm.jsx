import React, { useState } from 'react';

function AddExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    amount: '',
    date: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: Number(formData.amount)
    };
    onAddExpense(newExpense);
    setFormData({ name: '', description: '', amount: '', date: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        name="description" 
        placeholder="Description" 
        value={formData.description} 
        onChange={handleChange} 
        required 
      />
      <input 
        name="amount" 
        type="number" 
        placeholder="Amount" 
        value={formData.amount} 
        onChange={handleChange} 
        required 
      />
      <input 
        name="date" 
        type="date" 
        value={formData.date} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
