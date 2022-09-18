import React from 'react';
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
