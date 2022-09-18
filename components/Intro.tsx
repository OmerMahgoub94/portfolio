import React from 'react';
import Typewriter from 'typewriter-effect';

function Intro() {
	return (
		<div className=' text-center md:text-start overflow-hidden mx-auto'>
			{/* Best BG color 52ffce. Best Text color 0077b6 */}
			<div className='flex flex-col p-5 relative'>
				{/* <p className="py-2 font-bold text-4xl bg-[#52ffce] text-[#0077b6] w-80 text-center"> */}
				<div
					className='  py-2 font-bold md:mx-0 mx-auto text-2xl 
					md:text-4xl bg-[#52ffce]  text-[#0077b6] w-[18rem] md:w-96 text-center'>
					<Typewriter
						options={{ loop: true }}
						onInit={(typewriter) => {
							typewriter
								.typeString('Hey, I am Omer')
								.pauseFor(2000)
								.callFunction(() => {
									console.log('String typed out!');
								})
								.start();
						}}
					/>
				</div>

				{/* <p className="py-2 font-bold text-4xl bg-[#52ffce] text-[#0077b6] w-80 text-center"> */}
				<div
					className=' transition-transform delay-500 1s my-3 py-2 font-bold
					md:mx-0 mx-auto text-2xl  bg-[#f57878] text-[#fbfeff]
					w-[18rem] md:w-96 text-center mt-6'>
					SOFTWARE DEVELOPER
				</div>

				{/* </p> */}

				<h1
					className='font-extrabold text-2xl md:text-4xl items-center py-2
					text-[#556DA3] hidden'>
					Software and Web Developer
				</h1>

				<h3
					className='text-lg md:text-2xl text-[#284991] py-5
					font-bold opacity-90 font-intro2'>
					Establish your digital presense using the most powerful and
					trending technologies
				</h3>
			</div>
		</div>
	);
}

export default Intro;
