import Image from 'next/image';
import React from 'react';

function Card({ name, img, imgStyle, textStyle }: any) {
	return (
		// <div
		// 	className='md:px-8 md:py-16 px-28 py-32 bg-white border-gray-300-500 border-2 shadow-md
		//  text-black font-semibold rounded-2xl'>
		// 	<p className=''>Image</p>
		// </div>

		<div className='flex flex-col cursor-pointer hover:scale-110 transition-transform duration-150 ease-in'>
			<div
				className={`relative h-60 w-64  rounded-t-xl ${imgStyle} `}>
				<Image
					src={`/${img}`}
					layout='fill'
					objectFit='contain'
				/>
			</div>
			<div
				className={`text-white text-md font-semibold text-md p-4 rounded-b-xl ${textStyle}`}>
				{name}
			</div>
		</div>
	);
}

export default Card;
