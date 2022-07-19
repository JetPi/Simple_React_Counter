import React from "react";
import PropType from "prop-types"

//include images into your bundle

//create your first component
const Home = (props) => {

	return (
		<>
		<div className="container-fluid">
			<div className="row bg-dark">
				<div className="col-2 bg-dark text-light fs-1">
				<i className="fa-regular fa-clock" style={{color: "solid white"}}></i>
				</div>
				<div className="col-2 bg-dark text-light fs-1">
				{props.num5 % 10}
				</div>
				<div className="col-2 bg-dark text-light fs-1">
				{props.num4 % 10}
				</div>
				<div className="col-2 bg-dark text-light fs-1">
				{props.num3 % 10}
				</div>
				<div className="col-2 bg-dark text-light fs-1">
				{props.num2 % 10}
				</div>
				<div className="col-2 bg-dark text-light fs-1">
				{props.num1 % 10}
				</div>
			</div>
		</div>
		</>
	);
};

Home.propTypes ={
	num1: PropType.number,
	num2: PropType.number,
	num3: PropType.number,
	num4: PropType.number,
	num5: PropType.number,
}

export default Home;
