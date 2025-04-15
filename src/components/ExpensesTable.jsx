function ExpensesTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(exp => (
          <tr key={exp.id}>
            <td>{exp.name}</td>
            <td>{exp.description}</td>
            <td>${exp.amount}</td>
            <td>{exp.date}</td>
            <td><button onClick={() => onDelete(exp.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpensesTable;
