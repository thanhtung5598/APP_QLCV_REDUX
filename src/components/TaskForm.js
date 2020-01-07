import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            status:true
        };
    }
    onChangeValue=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name==='status'){
            value=target.value === 'true' ? true : false; 
        }
        this.setState({
            [name]:value
        });
    } 
    componentWillMount(props){
        if(this.props.task){
            this.setState({
                id:this.props.task.id, // transfer infomation to form
                name:this.props.task.name,
                status:this.props.task.id
            });
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id:nextProps.task.id, // transfer infomation to form
                name:nextProps.task.name,
                status:nextProps.task.id
            });
        }
        if(!nextProps.task){
            this.setState = {
                id:'',
                name:'',
                status:true
            };
        }
    }
    onSubmitted=(event)=>{
        event.preventDefault();
        this.props.onAddTask(this.state)
        this.setFormClose();
        this.closeForm();
    }
    closeForm=()=>{
        this.props.onCloseForm()
    }
    // Clear form when user click undo
    setFormClose=()=>{
        this.setState({
            name:'',
            status:false
        })
    }
    render() {
        var {id}=this.state
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id!=='' ? 'Sửa Công Việc' : 'Thêm Công Việc'}
                        <span className="glyphicon glyphicon-remove text-right" onClick={this.closeForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChangeValue}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái:</label>
                            <select 
                                className="form-control" 
                                name="status"
                                value={this.state.status}
                                onChange={this.onChangeValue}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={this.onSubmitted}
                        ><span className="glyphicon glyphicon-plus" />&nbsp;Lưu lại</button> &nbsp;
                        <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.setFormClose}
                        ><span className="glyphicon glyphicon-remove" />&nbsp;Hủy bỏ</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{};
};
const mapDispatchToProps = (dispatch,props) =>{
    return{
        onAddTask: (task) => {
            dispatch(actions.addTask(task));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
