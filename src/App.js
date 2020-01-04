import React from 'react';

import './styles/App.css';

import {TaskInput} from "./components/TaskInput";
import {TaskListContainer} from "./containers/TaskListContainer";
import {tsAnyKeyword} from "@babel/types";


class App extends React.Component {
    state = {
        allTasks: [],
        newTask: '',
        isTasksListHide: false,
    };

    handleChange = (e) => {
        console.log(`App - handleChange`);
        this.setState({
            newTask: e.target.value
        })
    };

    handleSubmit = (e) => {
        console.log(`App - handleSubmit`);
        const {allTasks, newTask} = this.state;

        newTask &&
        this.setState({
            allTasks: [ ...allTasks,
                        { id: Date.now(),
                          task: newTask,
                          isCompleted: false
                        }
            ],
            newTask: ''

        });

        e.preventDefault();
    };

    handleDeleteTask = (e) => {
        const {allTasks} = this.state;

        let updatedAllTasks = allTasks.filter((item, i) => (item.id !== +e.target.id));

        this.setState({
            allTasks: updatedAllTasks
        })
    };

    clearCompletedTasks = () => {
        console.log(`App - clearCompletedTasks`);
        const {allTasks} = this.state;

        let activeTasks = allTasks.filter((item) =>
            !item.isCompleted
        );

        this.setState({
            allTasks: activeTasks
        })
    };

    handleChangeCompleted = (e) => {
        const { allTasks } = this.state;

        const taskIndex = allTasks.findIndex((item) => item.id === +e.target.id );

        this.setState((state) => (
            allTasks[taskIndex] = {
                id: state.allTasks[taskIndex].id,
                task: state.allTasks[taskIndex].task,
                isCompleted: !state.allTasks[taskIndex].isCompleted
            }
        ))
    };

    toggleTasksList = () => {
        this.setState((state) => (
            {
                isTasksListHide: !state.isTasksListHide
            }
        ))
    };

    render() {
        const { newTask, allTasks, isTasksListHide } = this.state;

        return (
            <div className="app">
                <header className="app-header">
                    <p>TODOS</p>
                </header>

                <main className="app-main">
                    <TaskInput allTasks={allTasks}
                               newTask={newTask}
                               isTasksListHide={isTasksListHide}
                               toggleTasksList={this.toggleTasksList}
                               handleSubmit={this.handleSubmit}
                               handleChange={this.handleChange}
                    />

                    <TaskListContainer allTasks={allTasks}
                                       isTasksListHide={isTasksListHide}
                                       handleDeleteTask={this.handleDeleteTask}
                                       handleChangeCompleted={this.handleChangeCompleted}
                                       clearCompletedTasks={this.clearCompletedTasks}
                    />

                </main>

                <footer className="app-footer">
                    <p>By Nadia Kaputkina</p>
                </footer>
            </div>
        );
    }
}

export default App;
