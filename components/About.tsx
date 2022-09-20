import React from 'react';
import Intro from './Intro';
import Hero from './Hero';
import { motion } from 'framer-motion';

function About() {
	return (
		// <div className='flex flex-col md:flex-row justify-around items-center bg-red-200'>
		<div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
			<Intro />
			<Hero />
		</div>
	);
}

export default About;
