import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Sort extends Component {
    onSortTask = (sortBy, sortValue) => {
        this.props.onSort({
            by:sortBy,
            value:sortValue
        })
    }
    render() {
        var {by,value} = this.props.sort
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="btn-group">
                    <button type="button" className="btn btn-default" data-toggle="dropdown">
                        Xắp Xếp &nbsp;
                    <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={() => this.onSortTask('name', 1)}>
                            <a href="#." role="button">A > Z &nbsp;
                                <span className={(by === 'name' && value === 1 
                                        ? 'glyphicon glyphicon-plus' : '')}
                                        >
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onSortTask('name', -1)}>
                            <a href="#." role="button">Z > A &nbsp;
                                <span className={(by === 'name' && value === -1 
                                        ? 'glyphicon glyphicon-plus' : '')}
                                        >
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onSortTask('status', 1)}>
                            <a href="#." role="button">Trạng thái kích hoạt &nbsp;
                                <span className={(by === 'status' && value === 1 
                                        ? 'glyphicon glyphicon-plus' : '')}
                                        >
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onSortTask('status', -1)}>
                            <a href="#." role="button">Trạng thái ẩn &nbsp;
                                <span className={(by === 'status' && value === -1 
                                        ? 'glyphicon glyphicon-plus' : '')}
                                        >
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        sort:state.sort
    };
};
const mapDispatchToProps = (dispatch,props) =>{
    return{
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Sort);