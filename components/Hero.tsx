import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
	return (
		<motion.div
			initial={{
				x: 500,
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			transition={{
				duration: 1,
				delay: 1,
			}}
			className='relative h-96 w-full '>
			<Image
				src='/Operating system-rafiki.svg'
				alt='Monkey face'
				layout='fill'
			/>
		</motion.div>
	);
}

export default Hero;
