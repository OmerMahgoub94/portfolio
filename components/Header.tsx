import React from 'react';
import { DownloadIcon } from '@heroicons/react/solid';

function Header() {
	return (
		<div className='pt-2'>
			<div className='flex justify-evenly items-center'>
				<div className='hidden lg:inline-flex lg:font-bold lg:text-2xl'>
					Omer
				</div>

				<div className='flex space-x-4 lg:space-x-8 items-center'>
					<div className='lg:font-semibold lg:text-lg'>Services</div>
					<div className='lg:font-semibold lg:text-lg'>Porfolio</div>
					<div className='lg:font-semibold lg:text-lg'>About</div>
					<div className='lg:font-semibold lg:text-lg'>
						Contact Me
					</div>
				</div>

				<div className='hidden md:inline-flex items-center space-x-1 bg-gradient-to-r from-black to-gray-700 px-5 py-2 rounded-3xl text-white hover:cursor-pointer'>
					<div className='text-sm lg:text-lg'>Download CV</div>
					<DownloadIcon className='h-5' />
				</div>
			</div>
		</div>
	);
}

export default Header;
