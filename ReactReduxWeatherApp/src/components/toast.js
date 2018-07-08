import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';

export default class Toast extends Component{
    notify = () => toast("Please input a valid city name");

    componentDidMount(){
        this.notify();
    }

    render(){
        return (
            <div>
                <ToastContainer/>
            </div>
        );
    }
}