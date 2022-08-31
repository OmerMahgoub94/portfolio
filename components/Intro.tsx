import React from 'react';
import Typewriter from 'typewriter-effect';

function Intro() {
	return (
		<div className='max-w-xs md:max-w-3xl text-center md:text-start overflow-hidden'>
			{/* Best BG color 52ffce. Best Text color 0077b6 */}
			<div className='flex flex-col p-5 relative'>
				{/* <p className="py-2 font-bold text-4xl bg-[#52ffce] text-[#0077b6] w-80 text-center"> */}
				<div className=' py-2 font-bold md:mx-0 mx-auto text-4xl bg-[#52ffce] text-[#0077b6] w-96 text-center self-center'>
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
				<div className=' my-3 py-2 font-bold md:mx-0 mx-auto text-3xl bg-[#f57878] text-[#fbfeff] w-96 text-center mt-20'>
					SOFTWARE DEVELOPER
				</div>

				{/* </p> */}

				<h1 className='font-extrabold text-2xl items-center py-2 text-[#556DA3] hidden'>
					Software and Web Developer
				</h1>

				<h3 className='text-lg md:text-2xl text-[#284991] py-5 opacity-90 font-intro2'>
					Establish your digital presense using the most powerful and trending
					technoligies
				</h3>
			</div>
		</div>
	);
}

export default Intro;
