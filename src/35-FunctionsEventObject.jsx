const FunctionsEventObject = () => {
	const handleClick1 = (event) => {
    	console.log(event); 
  	}

	const handleClick2 = (event) => {
    console.log(event.target);
  	}

  	return (
    	<div>
			<button onClick={handleClick1}>click1!</button>
    		<button onClick={handleClick2}>click2!</button>
    	</div>
  	);
};

export default FunctionsEventObject;