import React, { useState } from 'react'
import './App.css'

import * as Items from './Items'

export default function App(): any {
 	
	const [text, setText]: any = useState(0);
	const [money, addMoney]: any = useState(0);
	let moneyGain: number = 0;

	function setTextAndMoney(t: number, m: number): void {
		setText(t);
		addMoney(money + m);
		Items.giveRandomItemFromLevel(t);
	}

	return (
		<div className="container">
			<p>Bank: {money}</p>
			<p>Last Picked: {text}</p>
			<div>
				<button onClick={() => setTextAndMoney(1, moneyGain)}>1</button>
				<button onClick={() => setTextAndMoney(2, moneyGain)}>2</button>
				<button onClick={() => setTextAndMoney(3, moneyGain)}>3</button>
			</div>
		</div>
  )
}
