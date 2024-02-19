import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const changeBudget = (event) => {
        //calculate spent so far
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        let mytargetbudget = event.target.value;
        if (mytargetbudget < totalExpenses) {
            alert('You cannot reduce the budget lower than the spending');
        } else {
        setNewBudget(event.target.value);
        
        dispatch({
            type: 'SET_BUDGET',
            payload: mytargetbudget,
        });
    }
    
    }
    return (
<div className='alert alert-secondary'>
  <span>Budget: {currency}</span>
  <input type="number" step="10" value={newBudget} onChange={changeBudget}></input>
</div>
    );
};
export default Budget;