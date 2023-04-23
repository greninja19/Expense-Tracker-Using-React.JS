import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let DUMMY_EXPENSE = [
    {
        id:'e1',
        title:'Food',
        amount:540,
        date:new Date(2023,4,3)
    },
    {
        id:'e2',
        title:'College',
        amount:240,
        date:new Date(2023,5,10)
    },
    {
        id:'e3',
        title:'Party',
        amount:140,
        date:new Date(2023,3,15)
    },
];

const App = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) => {
        const updatedExpense=[expense,...expenses];
        setExpenses(updatedExpense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>    
    );
}

export default App;