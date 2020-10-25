import React from 'react';

function Square(props) {
	return (
		<button className="squareGame" onClick={() => props.onClick()}>
			{props.value}
		</button>
	)
}
export default Square;
