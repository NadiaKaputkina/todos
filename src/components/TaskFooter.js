import React from 'react';
import PropTypes from 'prop-types';

import {Button} from "./Button";


export const TaskFooter = ({ itemsLeft, itemsCompleted, showAllTasks, showActiveTasks, showCompletedTasks, clearCompletedTasks }) => {

    return (
        <div className='task-footer'>
            <span className='items-left' >{`${itemsLeft} items left`}</span>

            <Button id='all' type='button' onClick={showAllTasks}>All</Button>
            <Button id='active' type='button' onClick={showActiveTasks}>Active</Button>
            <Button id='completed' type='button' onClick={showCompletedTasks}>Completed</Button>

            { itemsCompleted > 0 &&
                <Button id='clear-completed' type='button' onClick={clearCompletedTasks}>Clear completed</Button>
            }
        </div>

    )
};

TaskFooter.propTypes = {
    itemsLeft: PropTypes.number,
    itemsCompleted: PropTypes.number,
    showAllTasks: PropTypes.func,
    showActiveTasks: PropTypes.func,
    showCompletedTasks: PropTypes.func,
    clearCompletedTasks: PropTypes.func,
};

TaskFooter.defaultProps = {
    itemsLeft: 0,
    itemsCompleted: 0,
    showAllTasks: () => {},
    showActiveTasks: () => {},
    showCompletedTasks: () => {},
    clearCompletedTasks: () => {},
};
