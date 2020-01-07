import React, { Component } from 'react';
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 // all: -1 , active : 1 , deactive:0
        };
    }
    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.filterTask(name==='filterName' ? value : this.state.filterName
                            ,name==='filterStatus' ? value : this.state.filterStatus
                        );
        this.setState({
            [name]:value
        });
    }
    render() {
        var {tasks} = this.props;
        var element = tasks.map((task, index) => {
            return <TaskItem
                onUpdateStatus={this.props.onUpdateStatus}
                key={task.id} index={index}
                taskIt={task}
                removeItem={this.props.removeItem}
                updateTask={this.props.updateTask}
            />;
        });
        return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                id="input"
                                className="form-control"
                                name="filterStatus"
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {element}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks:state.Tasks
    }
}

export default connect(mapStateToProps,null)(TaskList);
