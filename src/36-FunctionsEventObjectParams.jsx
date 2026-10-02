const FunctionsEventObjectParams = () => {
	const func = (arg1, event, arg2) => {
    	console.log(arg1, event, arg2)
  	}

  return (
    <div>
      <button onClick={(event) => func('first', event, 'third')}>act</button>
    </div>
  );
};

export default FunctionsEventObjectParams;