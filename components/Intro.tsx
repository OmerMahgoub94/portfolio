import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

function Intro() {
	return (
		<div className=' md:text-center overflow-hidden mx-auto '>
			{/* Best BG color 52ffce. Best Text color 0077b6 */}
			<div className='flex flex-col p-5 relative'>
				{/* <p className="py-2 font-bold text-4xl bg-[#52ffce] text-[#0077b6] w-80 text-center"> */}
				<motion.div
					initial={{
						x: -500,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1,
					}}
					className='  py-2 font-bold md:mx-0 mx-auto text-2xl 
					md:text-4xl bg-[#52ffce]  text-[#0077b6] w-[18rem] md:w-96 text-center'>
					<Typewriter
						options={{ loop: true }}
						onInit={(typewriter) => {
							typewriter
								.typeString('Hey, I am Omer')
								.pauseFor(1250)
								.callFunction(() => {
									console.log('String typed out!');
								})
								.start();
						}}
					/>
				</motion.div>

				<motion.div
					initial={{
						y: 100,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						easeIn: 'linear',
						duration: 2,
					}}
					className=' transition-transform delay-500 1s my-3 py-2 font-bold
					md:mx-0 mx-auto text-lg  bg-[#f57878] text-[#fbfeff]
					w-[18rem] md:w-96 text-center mt-6 '>
					SOFTWARE & WEB DEVELOPER
				</motion.div>
			</div>
		</div>
	);
}

export default Intro;
