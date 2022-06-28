import './NewExpend.css';
import ExpendForm from './ExpendForm';
import React, {useState} from 'react';

const NewExpend = (props) => {
    const [isAddNew, setIsAddNew] = useState(false);
    const onSaveDataHandler = (userInput) => {
        const expendData = {
            ...userInput,
            id: Math.random().toString()
        }
        props.onAddingNew(expendData);
        setIsAddNew(false);
    };

    const clickAddNewHanlder = () => {
        setIsAddNew(true);
      }

      const clickCancelledHanlder = () => {
        setIsAddNew(false);
      }
    return (
        <div className="new-expense">
            {!isAddNew && <button type='button' onClick={clickAddNewHanlder} >Add New Expense</button>}
            {isAddNew && <ExpendForm onSaveData={onSaveDataHandler} onCancel={clickCancelledHanlder} />}
        </div>
    );
}

export default NewExpend;