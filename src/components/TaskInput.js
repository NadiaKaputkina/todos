import React from 'react';
import PropTypes from 'prop-types'

import {Input} from "./Input";

export const TaskInput = ({ allTasks, newTask, isTasksListHide, toggleTasksList, handleSubmit, handleChange }) => {

    return (
        <form onSubmit={handleSubmit} className='new-task'>

            {  (allTasks.length > 0) ?
                    isTasksListHide ? <span className='icon-down-open' onClick={toggleTasksList} /> :
                                        <span className='icon-up-open' onClick={toggleTasksList} />
                 : <span className='empty-icon' />
            }

            <Input type='text' placeholder='New task' onChange={handleChange} value={newTask} />

        </form>
    )
};

TaskInput.propTypes = {

};

TaskInput.defaultProps = {

};