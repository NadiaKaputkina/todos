import React from 'react';
import PropTypes from 'prop-types';

import {Input} from "./Input";

export const TaskList = ({ tasks, handleDeleteTask, handleChangeCompleted, isTasksListHide }) => {

    return (
        <ul className='task-list'>
            { !isTasksListHide &&

                tasks.map( (task, index) => (
                    <li key={index}>
                        <label onChange={handleChangeCompleted}>
                            { task.isCompleted ?
                                <span className='icon-ok' /> :
                                <span className='empty-icon' />
                            }

                            <Input id={task.id}
                                   type='checkbox'
                                   className='checkbox'
                                   value={task.task}
                                   hidden />

                            { task.task }
                        </label>

                        <span id={task.id} className='icon-cancel' onClick={handleDeleteTask}/>
                    </li>
                    )
                )
            }
        </ul>
    )

};

TaskList.propTypes = {

};

TaskList.defaultProps = {

};