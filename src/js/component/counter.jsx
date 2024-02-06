import { array, string } from 'prop-types';
import React from 'react';
import Digits from './digit';

const Counter = (props) => {
    console.log("counter")
    return (

        <div className="row justify-content-center px-5 text-center w-100">
            <div className="col-2">
                <div className="card border border-5 border-secondary">
                    <div className="card-body bg-dark text-light d-flex align-items-center justify-content-center">
                        <span className="card-title big-font"><i className='fa fa-clock'></i></span>
                    </div>
                </div>
            </div>
            <Digits clockDigits={props.clockDigit} />
        </div>
    )
}

Counter.propTypes = {
    clockDigit: array,
}

export default Counter;
