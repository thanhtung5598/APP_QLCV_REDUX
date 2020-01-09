import React, { Component } from 'react';
import './index.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
// import { findIndex } from "lodash";

import * as actions from "./actions/index";
import { connect } from "react-redux";

class AppQLCV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            sortBy: 'name',
            sortValue: 1
        }
    }
    
    // Show form when user click add form
    onToggleForm = () => {
        let {taskEditting}= this.props;
        if(taskEditting && taskEditting.id !==''){
            this.props.onOpenForm();
        }else{
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id:'',
            name:'',
            status:false
        });
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
            // filter, 
            // keyword, 
            sortBy, 
            sortValue 
        } = this.state; // var task = this.state.task
        
        var {isDisplayForm}=this.props; // props on redux

        //  If isDisplayForm === true, show form for user
        // if (keyword) {
        //     task = task.filter((task) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1
        //     });
        // }
        // if (sortBy === 'name') {
        //     task.sort((a, b) => {
        //         if (a.name > b.name) return sortValue;
        //         else if (a.name < b.name) return -sortValue;
        //         else return 0;
        //     });
        // } else {
        //     task.sort((a, b) => {
        //         if (a.status > b.status) return -sortValue;
        //         else if (a.status < b.status) return sortValue;
        //         else return 0;
        //     });
        // }

        return (
            <div className="container">
                <center><h1> Quẩn lý công việc </h1></center>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
                        < TaskForm /> 
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"} > { /* Button add */} 
                    <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
                        <span className="glyphicon glyphicon-plus" > </span>&nbsp;Thêm công việc </button> 
                        { /* Search and Sort */} 
                        <Control 
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        /> { /* Search and Sort */}

                        { /* Table */} 
                        <TaskList filterTask={this.filterTask} /> 
                        { /* Table */} 
                        </div> 
                    </div> 
                </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        isDisplayForm:state.isDisplayForm,
        taskEditting:state.taskEditting
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        onToggleForm: () =>{
            dispatch(actions.toggleForm());
        },
        onOpenForm:()=>{
            dispatch(actions.openForm());
        },
        onClearTask:(task)=>{
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppQLCV);