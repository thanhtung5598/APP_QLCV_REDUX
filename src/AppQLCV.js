import React, { Component } from 'react';
import './index.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { findIndex } from "lodash";

import * as actions from "./actions/index";
import { connect } from "react-redux";

class AppQLCV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskEditting: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            sortBy: 'name',
            sortValue: 1
        }
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('lover')) {
            this.setState({
                task: JSON.parse(localStorage.getItem('lover'))
            });
        }
    }
    // Show form when user click add form
    onToggleForm = () => {
        this.props.onToggleForm();
    }

    onUpdateStatus = (id) => {
        var { task } = this.state;
        // var index = this.findIndex(id); // find ID
        var index = findIndex(task, (task) => {
            return task.id === id
        })
        if (index !== -1) {
            task[index].status = !task[index].status;
            this.setState({
                task: task
            });
        }
        localStorage.setItem('lover', JSON.stringify(task));
    }

    findIndex = (id) => {
        var { task } = this.state; // all array
        var result = -1;
        task.forEach((task, index) => {
            if (task.id === id) {
                return result = index;
            }
        })
        return result;
    }

    removeItem = (id) => {
        var index = this.findIndex(id);
        var { task } = this.state;
        if (index !== -1) {
            task.splice(index, 1);
            this.setState({
                task: task
            });
        }
        localStorage.setItem('lover', JSON.stringify(task));
        this.onCloseForm();
    }

    updateTask = (id) => {
        var index = this.findIndex(id);
        var { task } = this.state;
        var taskEditting = task[index];
        this.setState({
            isDisplayForm: true,
            taskEditting: taskEditting // update again
        })
    }

    filterTask = (filterName, filterStatus) => {
        filterStatus = +filterStatus; // parse filterStatus to Number
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
    }

    render() {
        var { 
            task, 
            taskEditting, 
            filter, 
            keyword, 
            sortBy, 
            sortValue 
        } = this.state; // var task = this.state.task
        
        var {isDisplayForm}=this.props; // props on redux

        var elementForm = isDisplayForm ?
            < TaskForm
                task={taskEditting}
                onSubmmitReceivedValue={this.taskValueNew}
            /> : '';
        //  If isDisplayForm === true, show form for user
        if (filter.name) {
            task = task.filter((task) => {
                return task.name.toLowerCase().indexOf(filter.name) !== -1 // used indexOf to find String
            });
        }
        if (keyword) {
            task = task.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1
            });
        }
        task = task.filter((task) => {
            if (filter.status === -1) {
                return task;
            } else {
                return task.status === (filter.status === 1 ? true : false)
            }
        });

        if (sortBy === 'name') {
            task.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            });
        } else {
            task.sort((a, b) => {
                if (a.status > b.status) return -sortValue;
                else if (a.status < b.status) return sortValue;
                else return 0;
            });
        }

        return (
            <div className="container">
                <center><h1> Quẩn lý công việc </h1></center>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" > {elementForm} </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"} > { /* Button add */} <button type="button"
                        className="btn btn-primary"
                        onClick={this.onToggleForm} >
                        <span className="glyphicon glyphicon-plus" > </span>&nbsp;Thêm công việc </button> {
                            /* <button type="button" className="btn btn-success" onClick={this.onGenerateData}>
                                                        Thêm công việc
                                                    </button> */
                        } { /* Button add */}

                        { /* Search and Sort */} 
                        <Control 
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        /> { /* Search and Sort */}

                        { /* Table */} 
                        <TaskList 
                            filterTask={this.filterTask}
                            removeItem={this.removeItem}
                            onUpdateStatus={this.onUpdateStatus}
                            updateTask={this.updateTask}
                        /> { /* Table */} 
                        </div> 
                    </div> 
                </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        isDisplayForm:state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        onToggleForm: () =>{
            dispatch(actions.toggleForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppQLCV);