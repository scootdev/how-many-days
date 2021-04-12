import React, { Component } from "react";

class HowMany extends Component {

    // convert selected date into correct format
    generateDate = () => {
        return `${this.props.month}/${this.props.day}/${this.props.year}`
    }

    howManyDays = () => {
        const date = new Date(this.generateDate());
        const today = new Date();
        const difference = date.getTime() - today.getTime();
        const days = Math.ceil(difference / (1000 * 3600 * 24));
        return days;
    }

    render() {
        return (
            <h1>{this.generateDate()} is {this.howManyDays(this.props.date)} days away</h1>
        );
    }
}



export default HowMany;