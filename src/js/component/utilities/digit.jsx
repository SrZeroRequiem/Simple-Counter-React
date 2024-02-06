import { array } from 'prop-types';
import React from 'react';

const Digits = (props) => {
    const arrayDigits = []
    for (let index = 0; index < props.clockDigits.length; index++) {
        const element = props.clockDigits[index];
        const digit =
            <div className="col-1">
                <div className="card h-100 border border-5 border-secondary">
                    <div className="card-body bg-dark text-light d-flex align-items-center justify-content-center">
                        <span className="card-title digitFont">{props.clockDigits[index]}</span>
                    </div>
                </div>
            </div>
        arrayDigits.push(digit);
    }
    console.log("Digits")
    return arrayDigits
}

Digits.propTypes = {
    clockDigits: array
}

export default Digits;