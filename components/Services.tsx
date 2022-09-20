import React from 'react';
import Card from './Card';

function Services() {
	return (
		<div className='mx-auto text-center'>
			{/* <div
				className='my-3 py-2 font-bold  
					md:mx-0 mx-auto text-2xl  bg-[#407BFF] text-[#fbfeff]
					w-[18rem] md:w-96 text-center justify-center  mt-6'>
				WHAT I DO
			</div> */}

			<div className=' bg-[#407BFF] text-[#fbfeff] my-1 py-2 font-bold text-2xl md:max-w-sm mx-auto '>
				WHAT I DO
			</div>
			<div className='mb-5 text-red-400 border-x' />
			<div
				className='flex p-5 max-w-6xl overflow-x-scroll justify-between space-x-3
				mx-auto bg-white shadow-xl'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			<h3
				className='text-xl md:text-2xl text-[#284991] py-5
					font-bold opacity-90 font-intro2'>
				Establish your digital presense using the most powerful and
				trending technologies
			</h3>

			<h3
				className='text-xl md:text-2xl text-[#284991] py-5
					font-bold opacity-90 font-intro2'>
				Establish your digital presense using the most powerful and
				trending technologies
			</h3>

			<h3
				className='text-xl md:text-2xl text-[#284991] py-5
					font-bold opacity-90 font-intro2'>
				Establish your digital presense using the most powerful and
				trending technologies
			</h3>

			<h3
				className='text-xl md:text-2xl text-[#284991] py-5
					font-bold opacity-90 font-intro2'>
				Establish your digital presense using the most powerful and
				trending technologies
			</h3>
		</div>
	);
}

export default Services;
