import React from 'react';
import Card from './Card';

function Services() {
	return (
		<div className='mx-auto text-center '>
			{/* <div
				className='my-3 py-2 font-bold  
					md:mx-0 mx-auto text-2xl  bg-[#407BFF] text-[#fbfeff]
					w-[18rem] md:w-96 text-center justify-center  mt-6'>
				WHAT I DO
			</div> */}

			<div className=' bg-[#407BFF] text-[#fbfeff] my-1 py-2 font-bold text-2xl max-w-sm mx-auto'>
				WHAT I DO
			</div>
			<div className='mb-5 text-red-400 border-x' />
			<div className='flex space-x-5 justify-center'>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
				<div>
					<Card />
				</div>
			</div>
		</div>
	);
}

export default Services;
