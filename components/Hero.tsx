import Image from 'next/image';
import React from 'react';

function Hero() {
	return (
		<div className='relative h-96 w-96'>
			<Image
				src='/Operating system-rafiki.svg'
				alt='Monkey face'
				layout='fill'
			/>
		</div>
	);
}

export default Hero;
