import Image from 'next/image';
import React from 'react';
import Card from './Card';

function Services() {
	return (
		<div className='mx-auto text-center h-full '>
			{/* <div
				className='my-3 py-2 font-bold  
					md:mx-0 mx-auto text-2xl  bg-[#407BFF] text-[#fbfeff]
					w-[18rem] md:w-96 text-center justify-center  mt-6'>
				WHAT I DO
			</div> */}

			<div className=' bg-[#407BFF] text-[#fbfeff] py-2 font-bold text-2xl md:max-w-sm mx-auto mb-5'>
				WHAT I DO
			</div>
			{/* <div className='mb-5 text-red-400 border-x' /> */}

			<div
				className='py-5 flex flex-col md:flex-row items-center justify-center 
				md:justify-evenly md:space-y-0 space-y-10 md:space-x-5'>
				<Card
					name='Software Development'
					img='software.svg'
					imgStyle='bg-teal-400'
					textStyle='bg-teal-600'
				/>

				<Card
					name='Web Development'
					img='web.svg'
					imgStyle='bg-gray-100'
					textStyle='bg-violet-600'
				/>
				<Card
					name='Software Development'
					img='software.svg'
					imgStyle='bg-emerald-400'
					textStyle='bg-emerald-600'
				/>
				<Card
					name='Software Development'
					img='software.svg'
					imgStyle='bg-red-300'
					textStyle='bg-red-400'
				/>
				{/* <Card
					name='Software Development'
					img='software.svg'
					imgStyle='bg-teal-400'
					textStyle='bg-emerald-600'
				/> */}
				<Card
					name='Software Development'
					img='software.svg'
					imgStyle='bg-teal-400'
					textStyle='bg-teal-600'
				/>

				{/* <Card />
				<Card />
				<Card /> */}
			</div>
		</div>
	);
}

export default Services;
