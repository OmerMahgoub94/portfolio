import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Header from '../components/Header';
import Services from '../components/Services';

const Home: NextPage = () => {
	return (
		<div
			className='bg-no-repeat bg-cover object-fill h-screen '
			style={{
				backgroundImage: "url('/bg.png')",
			}}>
			<Head>
				<title>Create Next App</title>
				<meta
					name='viewport'
					content='width=device-width; initial-scale = 1.0;'
				/>{' '}
				–
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			{/* <main className="max-w-screen-2xl mx-auto"> */}
			<main className='max-w-screen-2xl mx-auto'>
				<Header />
				<About />
				<Services />
			</main>
		</div>
	);
};

export default Home;
