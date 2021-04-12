import React, { Component } from 'react';
import './style.css';
import DatePicker from '../date-picker';

class Container extends Component {

    state = {
        date: new Date()
    };

    render() {
        return (
            <div class="container">
                <DatePicker 
                    date={this.state.date}
                />
            </div>
        )
    }
}

export default Container;