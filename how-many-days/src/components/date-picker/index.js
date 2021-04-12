import React, { Component } from "react";
import HowMany from '../how-many';
import { Column, Row } from 'simple-flexbox';
import { Select, TextField } from '@material-ui/core'

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
        const re = /^[0-9\b]+$/
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({
                [name]: value,
            });
        }
    }

    render() {
        return (
            <div>
                <Column>
                    <Row vertical="center">
                        <Column flexGrow={1}>
                            <label
                            style={{paddingLeft: "5px"}}
                            >Month</label>                      
                                <Select
                                    name="month"
                                    value={this.state.month}
                                    onChange={this.inputChange}
                                    variant="outlined"
                                    style={{padding: "5px"},{margin: "10px"}}>
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
                                </Select>
                            
                        </Column>
                        <Column flexGrow={1}>
                            <label
                            style={{paddingLeft: "5px"}}
                            >Day</label>
                                <Select
                                    name="day"
                                    value={this.state.day}
                                    onChange={this.inputChange}
                                    variant="outlined"
                                    style={{padding: "5px"},{margin: "10px"}}>
                                    {this.daysInMonth(this.state.month, this.state.year).map(day => (
                                        <option value={day}>{day}</option>
                                    ))}
                                </Select>                           
                        </Column>
                        <Column flexGrow={1}>
                            <label
                            style={{paddingLeft: "5px"}}
                            >Year</label>
                                <TextField
                                    name="year"
                                    type="text"
                                    maxLength="4"
                                    value={this.state.year}
                                    onChange={this.inputChange}
                                    variant="outlined"
                                    style={{padding: "5px"},{margin: "10px"}}>
                                </TextField>                           
                        </Column>
                    </Row>
                    <Row style={{paddingTop: '10%'}}>
                        <Column flexGrow={1} horizontal="center">
                        <HowMany
                            day={this.state.day}
                            month={this.state.month}
                            year={this.state.year}
                        />
                        </Column> 
                    </Row>
                </Column>
            </div>
        )
    };
};

export default DatePicker;