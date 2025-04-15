import { useState } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import ExpensesTable from './components/ExpensesTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', description: 'Supermarket', amount: 200, date: '2024-04-01' },
    { id: 2, name: 'Rent', description: 'April Rent', amount: 1000, date: '2024-04-02' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  

  return (
    <div className="App">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ExpensesTable />
    </div>
  );
}

export default App;
