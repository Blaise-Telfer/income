import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculate } from "../actions/calcActions.js";

function Calculator(){
	const dispatch = useDispatch();
	const [principal, setPrincipal] = useState("1000.00");
	const [rate, setRate] = useState(1);
	const [time, setTime] = useState(1);
	
	const onPrincipalChange = (e) => setPrincipal(e.target.value);
	const onRateChange = (e) => setRate(e.target.value);
	const onTimeChange = (e) => setTime(e.target.value);
	
	const CalcHandler = (e) => {
      e.preventDefault();
      dispatch(calculate(principal, rate, time));
	};
	
	const result = useSelector(state => state.result);
	const accrual = result.toFixed(2);
	
	return(
	  <div className="calc-container">
		<h1>Interest Calculator</h1>
		<p>The amount you will accrue can be caculated by plugging 
		  your principal investment, interest rate and number of years 
		  into P*(1 + rt). Here's a calculator to do it for you:
		</p>
		  <form onSubmit={CalcHandler} className="input-form">
			<div className="cell">
				<p>Initial Investment</p>
				$<input  
				  required
				  name="principal" 
				  type="number"
				  step="0.01"
				  value={principal}
				  onChange={onPrincipalChange}
				/>
			</div>
			<div className="cell">
				<p>Interest Rate</p>
				<input 
				  required
				  name="rate" 
				  type="number"
				  value={rate}
				  onChange={onRateChange}
				/>
			</div>
			<div className="cell">
				<p>Years</p>
				<input 
				  required
				  name="time" 
				  type="number"
				  value={time}
				  onChange={onTimeChange}
				/>
			</div>
			<button type="submit">
			  Calculate
			</button>
		  </form>
		<div className="result">Amount Accrued = <h1>${accrual}</h1></div>
		Have a great day
	  </div>
	);
}

export default Calculator;