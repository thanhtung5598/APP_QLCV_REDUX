import React, { Component } from 'react';

class Sort extends Component {
    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy,sortValue)
    }
    render() {
        var {sortBy,sortValue} = this.props
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="btn-group">
                    <button type="button" className="btn btn-default" data-toggle="dropdown">
                        Xắp Xếp &nbsp;
                    <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a href="#." role="button">A > Z &nbsp;
                                <span className={(sortBy === 'name' && sortValue === 1 
                                        ? 'glyphicon glyphicon-plus' : '')}
                                        >
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a href="#." role="button">Z > A &nbsp;
                                <span className={(sortBy === 'name' && sortValue === -1 
                                        ? 'glyphicon glyphicon-plus' : '')}
                                        >
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a href="#." role="button">Trạng thái kích hoạt &nbsp;
                                <span className={(sortBy === 'status' && sortValue === 1 
                                        ? 'glyphicon glyphicon-plus' : '')}
                                        >
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a href="#." role="button">Trạng thái ẩn &nbsp;
                                <span className={(sortBy === 'status' && sortValue === -1 
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

export default Sort;
