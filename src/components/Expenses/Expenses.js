import React, { useState } from 'react';
import { Card } from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { ExpenseItem } from './ExpenseItem';
import './Expenses.css';
import { ExpensesChart } from './ExpensesChart';
import { ExpensesList } from './ExpensesList';

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChnaged = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log();
  };
  // const items = props.items;
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChnageFilter={filterChnaged}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
