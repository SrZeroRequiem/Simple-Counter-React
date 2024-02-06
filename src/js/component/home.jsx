import { element, number } from "prop-types";
import React from "react";
import Counter from "./utilities/counter";

//create your first component
const counterSize = 6;
const Home = (props) => {
	let seconds = props.secondsProp / 1;
	let divisor = Math.pow(10, counterSize - 1);
	let counterArray = []
	for (let index = 0; index < counterSize; index++) {
		let element = Math.floor(seconds / divisor)
		if (element >= 1) {
			seconds = seconds - (divisor * element);
			divisor = divisor / 10;
		} else {
			divisor = divisor / 10;
		}
		counterArray.push(element);

	}
	return (
		<div className="container-fluid vh-100 bg-dark d-flex align-items-center justify-content-center">
			<Counter clockDigit={counterArray} />
		</div>
	);
};
Home.propTypes = {
	secondsProp: number
}

export default Home;
