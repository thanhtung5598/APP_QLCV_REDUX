import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:''
        }
    }
    
    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        });
    }
    onClick=()=>{
        this.props.onSearch(this.state.search)
    }
    render() {
        var {search} = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập từ khóa..." 
                        name='search'
                        value={search}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={this.onClick}
                        ><span className="glyphicon glyphicon-search" />&nbsp;Tìm!</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
