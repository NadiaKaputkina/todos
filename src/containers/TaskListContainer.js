import React from 'react';
import PropTypes from 'prop-types';

import {TaskList} from "../components/TaskList";
import {TaskFooter} from "../components/TaskFooter";


export class TaskListContainer extends React.Component {
    state = {
        filteredTasks: []
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.allTasks !== prevProps.allTasks)
            this.setState({
                filteredTasks: this.props.allTasks
            })
    }

    showAllTasks = () => {
        const { allTasks } = this.props;

        this.setState({
            filteredTasks: allTasks
        })
    };

    getActiveTasks = () => {
        const { allTasks } = this.props;

        return allTasks.filter((task) => (
            task.isCompleted === false
        ));
    };

    showActiveTasks = () => {
        const activeTasks = this.getActiveTasks();

        this.setState({
            filteredTasks: activeTasks
        })
    };

    showCompletedTasks = () => {
        const { allTasks } = this.props;

        let completedTasks = allTasks.filter((task) => (
            task.isCompleted === true
        ));

        this.setState({
            filteredTasks: completedTasks
        })
    };


    render() {

        console.log(`taskListContainer - render`);

        const { allTasks, handleDeleteTask, handleChangeCompleted, clearCompletedTasks, isTasksListHide} = this.props;
        const { filteredTasks } = this.state;

        const allTasksLength = allTasks.length;
        const itemsLeft = this.getActiveTasks().length;
        const itemsCompleted = allTasksLength - itemsLeft;

        return (
            <>
                <TaskList tasks={filteredTasks}
                          isTasksListHide={isTasksListHide}
                          handleChangeCompleted={handleChangeCompleted}
                          handleDeleteTask={handleDeleteTask}
                />

                { allTasksLength > 0 &&
                    <TaskFooter itemsLeft={itemsLeft}
                                itemsCompleted={itemsCompleted}
                                showAllTasks={this.showAllTasks}
                                showActiveTasks={this.showActiveTasks}
                                showCompletedTasks={this.showCompletedTasks}
                                clearCompletedTasks={clearCompletedTasks}
                    />
                }

            </>
        );
    }
}

TaskListContainer.propTypes = {

};

TaskListContainer.defaultProps = {

};