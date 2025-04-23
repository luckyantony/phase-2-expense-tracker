import React, { useState } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import ExpensesTable from './components/ExpensesTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', description: 'Supermarket', amount: 200, date: '2024-04-01' },
    { id: 2, name: 'Rent', description: 'April Rent', amount: 1000, date: '2024-04-02' },
    { id: 3, name: 'Lunch', description: 'Groceries for lunch', amount: 45, date: '2025-04-02' },
    { id: 4, name: 'Taxi', description: 'Ride to the office', amount: 20,  date: '2025-04-03' },
    { id: 5, name: 'Movie Ticket', description: 'Evening show', amount: 12, date: '2025-04-05' },
    { id: 6, name: 'Coffee', description: 'Morning coffee at the cafe', amount: 5,  date: '2025-04-08' },
    { id: 7, name: 'Book', description: 'New novel', amount: 15,  date: '2025-04-10' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');



  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);


  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));

  };

  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ExpensesTable expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
