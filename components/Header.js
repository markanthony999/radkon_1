import Navbar from './Navbar'
import Image from 'next/image'

function Header() {
	return (
		<div className="container">
			<Navbar />
			<style jsx>{`
				.container {
					background-color: #cccccc;
					background-image: url('/imgs/satellite.jpg');
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					height: 800px;
					width: 100wv;
					animation: sweep 1.25s ease-in;
				}
				@keyframes sweep {
					0% {
						opacity: 0;
					}
					12% {
						opacity: 0.13;
					}
					25% {
						opacity: 0.25;
					}
					37% {
						opacity: 0.37;
					}
					50% {
						opacity: 0.5;
					}
					75% {
						opacity: 0.75;
					}
					87% {
						opacity: 0.87;
					}
					100% {
						opacity: 1;
					}
				}
			`}</style>
		</div>
	)
}

export default Header
