import React from 'react';
import './ExpensesList.css';
import { ExpenseItem } from './ExpenseItem';

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((ex) => (
        <ExpenseItem
          title={ex.title}
          amount={ex.amount}
          date={ex.date}
          key={ex.id}
        />
      ))}
    </ul>
  );
};
