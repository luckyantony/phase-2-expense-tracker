import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpensesTable from './components/ExpensesTable';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', description: 'Supermarket', amount: 200, date: '2024-04-01' },
    { id: 2, name: 'Rent', description: 'April Rent', amount: 1000, date: '2024-04-02' }
  ]);
  return (
    <>
      <Header />
      <ExpensesTable />
    </>
  )
}

export default App
