import React, { Component } from "react";
import HowMany from '../how-many';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: props.date.getMonth() + 1,
            day: props.date.getDate(),
            year: props.date.getFullYear(),
            date: new Date()
        }

        this.inputchange = this.inputChange.bind(this);

    }

    //create an array of the days in selected month
    daysInMonth = (m, y) => {
        const arr = []
        const numOfDays = new Array(new Date(y, m, 0).getDate());
        for (let i = 0; i < numOfDays.length; i++) {
            arr.push(i + 1);
        }
        return arr;
    };

    // handle input change
    inputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
        
    }

    render() {
        return (
            <div>
            <form>
                <label>Month
                    <select
                        name="month"
                        value={this.state.month}
                        onChange={this.inputChange}
                    >
                        <option name="January" value="1">January</option>
                        <option name="February" value="2">February</option>
                        <option name="March" value="3">March</option>
                        <option name="April" value="4">April</option>
                        <option name="May" value="5">May</option>
                        <option name="June" value="6">June</option>
                        <option name="July" value="7">July</option>
                        <option name="August" value="8">August</option>
                        <option name="September" value="9">September</option>
                        <option name="October" value="10">October</option>
                        <option name="November" value="11">November</option>
                        <option name="December" value="12">December</option>
                    </select>
                </label>
                <label>Day
                    <select
                        name="day"
                        value={this.state.day}
                        onChange={this.inputChange}
                    >
                        {this.daysInMonth(this.state.month, this.state.year).map(day => (
                            <option value={day}>{day}</option>
                        ))}
                    </select>
                </label>
                <label>Year
                    <input
                        name="year"
                        type="number"
                        maxLength="4"
                        pattern="\d{4}"
                        value={this.state.year}
                        onChange={this.inputChange}
                    ></input>
                </label>
            </form>
            <HowMany 
                day={this.state.day}
                month={this.state.month}
                year={this.state.year}
            />
            </div>
        )
    };
};

export default DatePicker;