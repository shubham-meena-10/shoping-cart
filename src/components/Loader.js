import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
	return (
		<>
			<div className='container-fluid d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
				<HashLoader size={130} color={'#4B2673'} />
			</div>
		</>
	);
};

export default Loader;
