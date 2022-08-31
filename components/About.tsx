import React from 'react';
import Image from 'next/image';
import Intro from './Intro';
import Hero from './Hero';

function About() {
	return (
		<div className='flex flex-col md:flex-row justify-around items-center '>
			<Intro />
			<Hero />
		</div>
	);
}

export default About;
