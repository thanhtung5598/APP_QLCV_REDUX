import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.taskIt.id) // props.onUpdateStatus from redux
    }

    onRemove = () => {
        this.props.removeItem(this.props.taskIt.id)
    }
    onUpdateValue = () => {
        this.props.updateTask(this.props.taskIt.id)
    }
    render() {
        var { taskIt, index } = this.props
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{taskIt.name}</td>
                <td className="text-center">
                    <span
                        className={taskIt.status === true ? 'label label-danger' : 'label label-success'}
                        onClick={this.onUpdateStatus}
                    >
                        {taskIt.status === true ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdateValue}
                    ><span className="glyphicon glyphicon-pencil"></span>&nbsp;Sửa</button> &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onRemove}
                    ><span className="glyphicon glyphicon-remove"></span>&nbsp;Xóa</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
