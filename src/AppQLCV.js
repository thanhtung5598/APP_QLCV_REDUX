import React, { Component } from 'react';
import './index.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

import * as actions from "./actions/index";
import { connect } from "react-redux";

class AppQLCV extends Component {
    
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

    render() {
        var {isDisplayForm}=this.props; // props on redux

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
                        <Control/>
                        <TaskList/> 
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